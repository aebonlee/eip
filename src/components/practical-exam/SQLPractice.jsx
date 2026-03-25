import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sqlQuestions } from '../../data/practical-exam-data'

export default function SQLPractice() {
  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const q = sqlQuestions[currentQ]

  const checkAnswer = () => {
    const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/;$/, '')
    const correct = normalize(q.answer)
    const user = normalize(userAnswer)
    const alts = q.alternativeAnswers.map(normalize)

    setIsCorrect(user === correct || alts.includes(user))
    setShowResult(true)
  }

  const goTo = (idx) => {
    setCurrentQ(idx)
    setUserAnswer('')
    setShowResult(false)
    setShowHint(false)
  }

  const difficultyClass = {
    easy: 'difficulty-easy',
    medium: 'difficulty-medium',
    hard: 'difficulty-hard',
  }

  const difficultyLabel = {
    easy: '쉬움', medium: '보통', hard: '어려움',
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/practical-exam">실기시험</Link> / SQL 실습
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon">🗃️</div>
            <div><h1>SQL 실습</h1></div>
          </div>
        </div>
      </div>

      <div className="quiz-container">
        {/* 문제 번호 */}
        <div className="quiz-question-number">
          {sqlQuestions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`quiz-num-btn ${currentQ === idx ? 'active' : ''}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="quiz-card">
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
            <button className="lesson-nav-btn" disabled={currentQ === sqlQuestions.length - 1} onClick={() => goTo(currentQ + 1)}>
              다음 &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
