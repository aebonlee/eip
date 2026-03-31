import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSQLQuestions, getCertName } from '../../data/practical-exam-data'

export default function SQLPractice() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)
  const questions = getSQLQuestions(certType)

  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const q = questions[currentQ]

  const checkAnswer = () => {
    const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/;$/, '')
    const correct = normalize(q.answer)
    const user = normalize(userAnswer)
    const alts = q.alternativeAnswers.map(normalize)

    setIsCorrect(user === correct || alts.includes(user))
    setShowResult(true)
  }

  const goTo = (idx: number) => {
    setCurrentQ(idx)
    setUserAnswer('')
    setShowResult(false)
    setShowHint(false)
  }

  const difficultyClass: Record<string, string> = {
    easy: 'difficulty-easy',
    medium: 'difficulty-medium',
    hard: 'difficulty-hard',
  }

  const difficultyLabel: Record<string, string> = {
    easy: '쉬움', medium: '보통', hard: '어려움',
  }

  const cardDifficultyClass: Record<string, string> = {
    easy: 'card-difficulty-easy',
    medium: 'card-difficulty-medium',
    hard: 'card-difficulty-hard',
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / SQL 실습
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-database"></i></div>
            <div><h1>SQL 실습</h1></div>
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
                <span className="practice-nav-title">{item.title}</span>
                <span className={`difficulty-dot ${item.difficulty}`}></span>
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="practice-content">
          <div className={`quiz-card ${cardDifficultyClass[q.difficulty]}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className={`difficulty-badge ${difficultyClass[q.difficulty]}`}>
                {difficultyLabel[q.difficulty]}
              </span>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{q.title}</span>
            </div>

            <p className="quiz-question">{q.question}</p>

            {/* 테이블 스키마 */}
            <div className="schema-box">
              <p className="label">테이블 구조</p>
              <code>{q.tableSchema}</code>
            </div>

            {/* SQL 입력 */}
            <textarea
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="SQL문을 입력하세요..."
              className="answer-textarea"
              disabled={showResult}
            />

            {/* 버튼 */}
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button className="btn btn-accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
                정답 확인
              </button>
              <button className="btn btn-ghost" onClick={() => setShowHint(!showHint)}>
                {showHint ? '힌트 닫기' : '힌트 보기'}
              </button>
            </div>

            {/* 힌트 */}
            {showHint && (
              <div className="hint-box">
                <p>{q.hint}</p>
              </div>
            )}

            {/* 결과 */}
            {showResult && (
              <div className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
                <p className="result-title" style={{ marginBottom: 8 }}>
                  {isCorrect ? '정답입니다!' : '오답입니다'}
                </p>
                {!isCorrect && (
                  <div style={{ marginBottom: 8 }}>
                    <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 4 }}>정답:</p>
                    <code>{q.answer}</code>
                  </div>
                )}
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{q.explanation}</p>
              </div>
            )}

            {/* 페이지네이션 */}
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
