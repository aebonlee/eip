import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { codeReadingLanguages, getCodeReadingLanguage } from '../../data/code-reading'
import { getCertName } from '../../data/practical-exam-data'
import ProgressBar from '../../components/ui/ProgressBar'

const difficultyLabel: Record<string, string> = { easy: '하', medium: '중', hard: '상' }

export default function CodeReadingPractice() {
  const { certType = 'engineer', language = 'c' } = useParams()
  const navigate = useNavigate()
  const certName = getCertName(certType)
  const lang = getCodeReadingLanguage(language) || codeReadingLanguages[0]
  const questions = lang.questions

  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [attempted, setAttempted] = useState(0)

  useEffect(() => {
    setCurrentQ(0)
    setUserAnswer('')
    setShowResult(false)
    setShowExplanation(false)
    setCorrectCount(0)
    setAttempted(0)
  }, [language])

  const q = questions[currentQ]

  const checkAnswer = () => {
    const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '')
    const user = normalize(userAnswer)
    const correct = normalize(q.answer)
    const alts = q.alternativeAnswers.map(normalize)

    const result = user === correct || alts.includes(user)
    setIsCorrect(result)
    setShowResult(true)
    setAttempted(prev => prev + 1)
    if (result) setCorrectCount(prev => prev + 1)
  }

  const goTo = (idx: number) => {
    setCurrentQ(idx)
    setUserAnswer('')
    setShowResult(false)
    setShowExplanation(false)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / 코드 결과 예측
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
            <div>
              <h1>코드 결과 예측</h1>
              <p>실기 프로그래밍 문제 형식 그대로, 코드를 읽고 출력 결과를 맞혀보세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 24 }}>
        {/* 언어 탭 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
          {codeReadingLanguages.map(l => (
            <button
              key={l.id}
              className={`btn ${l.id === lang.id ? 'btn-accent' : 'btn-outline'}`}
              onClick={() => navigate(`/practical-exam/${certType}/code-reading/${l.id}`)}
            >
              <i className={l.icon} style={{ marginRight: 6 }}></i>
              {l.name}
            </button>
          ))}
        </div>
      </div>

      <div className="practice-layout">
        {/* 사이드바 */}
        <div className="practice-sidebar">
          <div className="card" style={{ padding: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 12, padding: '0 8px' }}>문제 목록</h3>
            {questions.map((item, idx) => (
              <div
                key={item.id}
                className={`practice-nav-item ${currentQ === idx ? 'active' : ''}`}
                onClick={() => goTo(idx)}
              >
                <span className="practice-nav-num">{idx + 1}</span>
                <span className="practice-nav-title">{item.topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="practice-content">
          <div style={{ marginBottom: 24 }}>
            <ProgressBar value={attempted} max={questions.length} label={`${correctCount}/${attempted} 정답`} />
          </div>

          <div className="quiz-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className="topic-tag">{lang.name}</span>
              <span className="topic-tag">{q.topic}</span>
              <span className="topic-tag">난이도 {difficultyLabel[q.difficulty]}</span>
              <span style={{ fontSize: 14, color: 'var(--text-light)' }}>문제 {currentQ + 1}/{questions.length}</span>
            </div>

            <p className="quiz-question">{q.question}</p>

            <pre style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: 16,
              overflowX: 'auto',
              fontSize: 14,
              lineHeight: 1.6,
              margin: '12px 0 16px',
            }}><code>{q.code}</code></pre>

            <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
              placeholder="출력 결과를 입력하세요... (여러 줄이면 \n으로 구분)"
              className="answer-input"
              disabled={showResult}
            />

            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button className="btn btn-accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
                정답 확인
              </button>
              <button className="btn btn-ghost" onClick={() => setShowExplanation(!showExplanation)}>
                {showExplanation ? '해설 닫기' : '해설 보기'}
              </button>
            </div>

            {showResult && (
              <div className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
                <p className="result-title">{isCorrect ? '정답!' : '오답'}</p>
                {!isCorrect && (
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4, whiteSpace: 'pre-line' }}>
                    정답: <code style={{ fontWeight: 600 }}>{q.answer}</code>
                  </p>
                )}
              </div>
            )}

            {showExplanation && (
              <div className="hint-box" style={{ whiteSpace: 'pre-line' }}>
                <p>{q.explanation}</p>
              </div>
            )}

            <div className="lesson-nav" style={{ marginTop: 24 }}>
              <button className="lesson-nav-btn" disabled={currentQ === 0} onClick={() => goTo(currentQ - 1)}>
                &#8592; 이전
              </button>
              <button className="lesson-nav-btn" disabled={currentQ === questions.length - 1} onClick={() => goTo(currentQ + 1)}>
                다음 &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
