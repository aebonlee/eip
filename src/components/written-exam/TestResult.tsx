import { useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { certTypes, getMaxWrittenRounds } from '../../data/written-exam-data'

interface MockQuestion {
  id: number
  subject: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export default function TestResult() {
  const { certType } = useParams()
  const location = useLocation()
  const cert = certTypes[certType as keyof typeof certTypes]
  const {
    questions = [], answers = {}, score = 0, total = 0,
    roundNumber = null, subjectScores = {}
  } = (location.state || {}) as {
    questions: MockQuestion[]
    answers: Record<number, number>
    score: number
    total: number
    roundNumber: number | null
    subjectScores: Record<string, { correct: number; total: number }>
  }
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({})

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  const passed = percentage >= 60
  const maxRounds = getMaxWrittenRounds(certType || '')
  const hasNextRound = roundNumber && roundNumber < maxRounds

  // 과목명 매핑
  const subjectNames: Record<string, string> = {}
  if (cert) cert.subjects.forEach((s: { id: string; name: string }) => { subjectNames[s.id] = s.name })

  if (!location.state) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>시험 결과가 없습니다</h2>
        <Link to={`/written-exam/${certType}/mock-test`} className="btn btn-outline">모의시험 보기</Link>
      </div>
    )
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
          {cert?.name} {roundNumber ? `${roundNumber}회차` : 'CBT'} 모의시험 결과
        </p>
        <p style={{ fontSize: 18 }}>
          {total}문제 중 <span style={{ color: passed ? 'var(--success)' : 'var(--error)', fontWeight: 700 }}>{score}문제</span> 정답
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 8 }}>(합격 기준: 60% 이상)</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
          {roundNumber ? (
            <>
              <Link to={`/written-exam/${certType}/mock-test/${roundNumber}`} className="btn btn-outline">다시 풀기</Link>
              {hasNextRound && (
                <Link to={`/written-exam/${certType}/mock-test/${roundNumber + 1}`} className="btn btn-accent">
                  다음 회차 ({roundNumber + 1}회차)
                </Link>
              )}
              <Link to={`/written-exam/${certType}/rounds`} className="btn btn-outline">회차 목록</Link>
            </>
          ) : (
            <>
              <Link to={`/written-exam/${certType}/mock-test`} className="btn btn-accent">다시 풀기</Link>
              <Link to={`/written-exam/${certType}`} className="btn btn-outline">과목 목록으로</Link>
            </>
          )}
        </div>
      </div>

      {/* 과목별 점수 분석 */}
      {Object.keys(subjectScores).length > 0 && (
        <div className="quiz-card" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>과목별 분석</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {Object.entries(subjectScores).map(([subId, s]) => {
              const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
              const subPassed = pct >= 60
              return (
                <div key={subId}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{subjectNames[subId] || subId}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: subPassed ? 'var(--success)' : 'var(--error)' }}>
                      {s.correct}/{s.total} ({pct}%)
                    </span>
                  </div>
                  <div className="subject-bar">
                    <div
                      className="subject-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: subPassed ? 'var(--success)' : 'var(--error)',
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
          const userAnswer = answers[q.id]
          const isCorrect = userAnswer === q.answer
          return (
            <div key={q.id} className="quiz-card" style={{ borderLeft: `4px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}` }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span className="option-letter" style={{ background: isCorrect ? 'var(--success-light)' : 'var(--error-light)', color: isCorrect ? 'var(--success-dark)' : 'var(--error-dark)', fontWeight: 700 }}>
                  {isCorrect ? 'O' : 'X'}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 4 }}>문제 {idx + 1}</p>
                  <p style={{ fontWeight: 500, marginBottom: 12 }}>{q.question}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {q.options.map((option, optIdx) => (
                      <div
                        key={optIdx}
                        className={`quiz-option ${optIdx === q.answer ? 'correct' : ''} ${optIdx === userAnswer && !isCorrect ? 'wrong' : ''}`}
                        style={{ cursor: 'default', padding: '10px 14px', fontSize: 14 }}
                      >
                        <span className="option-letter" style={{ width: 24, height: 24, fontSize: 12 }}>{optIdx + 1}</span>
                        <span>
                          {option}
                          {optIdx === q.answer && ' ✓'}
                          {optIdx === userAnswer && !isCorrect && ' (내 답)'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowExplanation(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="btn-link" style={{ marginTop: 12, fontSize: 14, cursor: 'pointer' }}
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
