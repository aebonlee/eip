import { useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { getCertName, getMaxPracticalRounds } from '../../data/practical-exam-data'

const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/;$/, '')
const typeLabels = { sql: 'SQL', algorithm: '알고리즘', short: '단답형' }
const typeColors = { sql: '#3B82F6', algorithm: '#10B981', short: '#F59E0B' }

export default function PracticalTestResult() {
  const { certType = 'engineer' } = useParams()
  const location = useLocation()
  const certName = getCertName(certType)
  const {
    questions = [], answers = {}, score = 0, total = 0,
    roundNumber = null, typeScores = {}
  } = location.state || {}
  const [showExplanation, setShowExplanation] = useState({})

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  const passed = percentage >= 60
  const maxRounds = getMaxPracticalRounds(certType)
  const hasNextRound = roundNumber && roundNumber < maxRounds

  if (!location.state) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>시험 결과가 없습니다</h2>
        <Link to={`/practical-exam/${certType}/rounds`} className="btn btn-outline">회차 목록으로</Link>
      </div>
    )
  }

  const checkAnswer = (q, userInput) => {
    if (!userInput) return false
    const norm = normalize(userInput)
    if (normalize(q.answer) === norm) return true
    if (q.alternativeAnswers) {
      return q.alternativeAnswers.some(alt => normalize(alt) === norm)
    }
    return false
  }

  return (
    <div className="quiz-container">
      {/* 결과 요약 */}
      <div className="quiz-card" style={{ textAlign: 'center', marginBottom: 32 }}>
        <div className={`quiz-score-circle ${passed ? 'passed' : 'failed'}`}>
          <span className="score-number">{percentage}</span>
          <span className="score-unit">점</span>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          {passed ? '합격!' : '불합격'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>
          {certName} 실기 {roundNumber ? `${roundNumber}회차` : ''} 모의시험 결과
        </p>
        <p style={{ fontSize: 18 }}>
          {total}문제 중 <span style={{ color: passed ? 'var(--success)' : 'var(--error)', fontWeight: 700 }}>{score}문제</span> 정답
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 8 }}>(합격 기준: 60% 이상)</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
          {roundNumber && (
            <Link to={`/practical-exam/${certType}/mock-test/${roundNumber}`} className="btn btn-outline">다시 풀기</Link>
          )}
          {hasNextRound && (
            <Link to={`/practical-exam/${certType}/mock-test/${roundNumber + 1}`} className="btn btn-accent">
              다음 회차 ({roundNumber + 1}회차)
            </Link>
          )}
          <Link to={`/practical-exam/${certType}/rounds`} className="btn btn-outline">회차 목록</Link>
        </div>
      </div>

      {/* 유형별 점수 분석 */}
      {Object.keys(typeScores).length > 0 && (
        <div className="quiz-card" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>유형별 분석</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {Object.entries(typeScores).map(([type, s]) => {
              if (s.total === 0) return null
              const pct = Math.round((s.correct / s.total) * 100)
              const typePassed = pct >= 60
              return (
                <div key={type}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        className="question-type-badge"
                        style={{ background: typeColors[type] || '#6B7280', color: 'white' }}
                      >
                        {typeLabels[type] || type}
                      </span>
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: typePassed ? 'var(--success)' : 'var(--error)' }}>
                      {s.correct}/{s.total} ({pct}%)
                    </span>
                  </div>
                  <div className="subject-bar">
                    <div
                      className="subject-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: typeColors[type] || '#6B7280',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 문제별 결과 */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>문제별 결과</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {questions.map((q, idx) => {
          const userAnswer = answers[q.id] || ''
          const isCorrect = checkAnswer(q, userAnswer)
          return (
            <div key={q.id} className="quiz-card" style={{ borderLeft: `4px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}` }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span className="option-letter" style={{ background: isCorrect ? 'var(--success-light)' : 'var(--error-light)', color: isCorrect ? 'var(--success-dark)' : 'var(--error-dark)', fontWeight: 700 }}>
                  {isCorrect ? 'O' : 'X'}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <p style={{ fontSize: 13, color: 'var(--text-light)' }}>문제 {idx + 1}</p>
                    <span
                      className="question-type-badge"
                      style={{ background: typeColors[q.type] || '#6B7280', color: 'white' }}
                    >
                      {typeLabels[q.type] || q.type}
                    </span>
                  </div>
                  <p style={{ fontWeight: 500, marginBottom: 12 }}>{q.question}</p>

                  <div style={{ fontSize: 14, marginBottom: 8 }}>
                    <p><strong>내 답안:</strong> <span style={{ color: isCorrect ? 'var(--success)' : 'var(--error)' }}>{userAnswer || '(미작성)'}</span></p>
                    {!isCorrect && (
                      <p><strong>정답:</strong> <span style={{ color: 'var(--success)' }}>{q.answer}</span></p>
                    )}
                  </div>

                  <button
                    onClick={() => setShowExplanation(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="btn-link" style={{ marginTop: 8, fontSize: 14, cursor: 'pointer' }}
                  >
                    {showExplanation[q.id] ? '해설 닫기' : '해설 보기'}
                  </button>

                  {showExplanation[q.id] && (
                    <div className="quiz-explanation">
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
