import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShortAnswerQuestions, getCertName } from '../../data/practical-exam-data'
import ProgressBar from '../../components/ui/ProgressBar'

export default function ShortAnswer() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)
  const questions = getShortAnswerQuestions(certType)

  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [attempted, setAttempted] = useState(0)

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
    setShowHint(false)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / 단답형 연습
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-pen"></i></div>
            <div><h1>단답형 연습</h1></div>
          </div>
        </div>
      </div>

      <div className="practice-layout">
        {/* 사이드바 */}
        <div className="practice-sidebar">
          <div className="card" style={{ padding: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 12, padding: '0 8px' }}>문제 목록</h3>
            {questions.map((item, idx) => (
              <div
                key={idx}
                className={`practice-nav-item ${currentQ === idx ? 'active' : ''}`}
                onClick={() => goTo(idx)}
              >
                <span className="practice-nav-num">{idx + 1}</span>
                <span className="practice-nav-title">{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="practice-content">
          {/* 진행 상황 */}
          <div style={{ marginBottom: 24 }}>
            <ProgressBar value={attempted} max={questions.length} label={`${correctCount}/${attempted} 정답`} />
          </div>

          <div className="quiz-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="topic-tag">{q.category}</span>
              <span style={{ fontSize: 14, color: 'var(--text-light)' }}>문제 {currentQ + 1}/{questions.length}</span>
            </div>

            <p className="quiz-question" style={{ whiteSpace: 'pre-line' }}>{q.question}</p>

            <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
              placeholder="답을 입력하세요..."
              className="answer-input"
              disabled={showResult}
              autoFocus
            />

            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button className="btn btn-accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
                정답 확인
              </button>
              <button className="btn btn-ghost" onClick={() => setShowHint(!showHint)}>
                {showHint ? '닫기' : '힌트'}
              </button>
            </div>

            {showHint && (
              <div className="hint-box">
                <p>{q.hint}</p>
              </div>
            )}

            {showResult && (
              <div className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
                <p className="result-title">
                  {isCorrect ? '정답!' : '오답'}
                </p>
                {!isCorrect && (
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
                    정답: <code style={{ fontWeight: 600 }}>{q.answer}</code>
                  </p>
                )}
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
