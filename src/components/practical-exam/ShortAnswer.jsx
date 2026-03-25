import { useState } from 'react'
import { Link } from 'react-router-dom'
import { shortAnswerQuestions } from '../../data/practical-exam-data'
import ProgressBar from '../ui/ProgressBar'

export default function ShortAnswer() {
  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [attempted, setAttempted] = useState(0)

  const q = shortAnswerQuestions[currentQ]

  const checkAnswer = () => {
    const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, '')
    const user = normalize(userAnswer)
    const correct = normalize(q.answer)
    const alts = q.alternativeAnswers.map(normalize)

    const result = user === correct || alts.includes(user)
    setIsCorrect(result)
    setShowResult(true)
    setAttempted(prev => prev + 1)
    if (result) setCorrectCount(prev => prev + 1)
  }

  const goTo = (idx) => {
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
            <Link to="/practical-exam">실기시험</Link> / 단답형 연습
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon">✏️</div>
            <div><h1>단답형 연습</h1></div>
          </div>
        </div>
      </div>

      <div className="quiz-container">
        {/* 진행 상황 */}
        <div style={{ marginBottom: 24 }}>
          <ProgressBar value={attempted} max={shortAnswerQuestions.length} label={`${correctCount}/${attempted} 정답`} />
        </div>

        <div className="quiz-question-number">
          {shortAnswerQuestions.map((_, idx) => (
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
            <span className="topic-tag">{q.category}</span>
            <span style={{ fontSize: 14, color: 'var(--text-light)' }}>문제 {currentQ + 1}/{shortAnswerQuestions.length}</span>
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
            <button className="lesson-nav-btn" disabled={currentQ === shortAnswerQuestions.length - 1} onClick={() => goTo(currentQ + 1)}>
              다음 &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
