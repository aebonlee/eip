import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAlgorithmQuestions, getCertName } from '../../data/practical-exam-data'

export default function AlgorithmPractice() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)
  const questions = getAlgorithmQuestions(certType)

  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const q = questions[currentQ]

  const checkAnswer = () => {
    const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ')
    const user = normalize(userAnswer)
    const correct = normalize(q.answer)
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

  const difficultyClass = { easy: 'difficulty-easy', medium: 'difficulty-medium', hard: 'difficulty-hard' }
  const difficultyLabel = { easy: '쉬움', medium: '보통', hard: '어려움' }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / 알고리즘 실습
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon">{'\u{1F9EE}'}</div>
            <div><h1>알고리즘 실습</h1></div>
          </div>
        </div>
      </div>

      <div className="quiz-container">
        <div className="quiz-question-number">
          {questions.map((_, idx) => (
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

          <p className="quiz-question" style={{ whiteSpace: 'pre-line' }}>{q.question}</p>

          <input
            type="text"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
            placeholder="답을 입력하세요..."
            className="answer-input"
            disabled={showResult}
          />

          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button className="btn btn-accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
              정답 확인
            </button>
            <button className="btn btn-ghost" onClick={() => setShowHint(!showHint)}>
              {showHint ? '힌트 닫기' : '힌트'}
            </button>
          </div>

          {showHint && (
            <div className="hint-box">
              <p>{q.hint}</p>
            </div>
          )}

          {showResult && (
            <div className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
              <p className="result-title" style={{ marginBottom: 8 }}>
                {isCorrect ? '정답!' : '오답'}
              </p>
              {!isCorrect && (
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 4 }}>
                  정답: <code>{q.answer}</code>
                </p>
              )}
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{q.explanation}</p>
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
    </>
  )
}
