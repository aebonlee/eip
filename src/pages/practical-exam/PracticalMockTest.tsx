import { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getCertName, getPracticalRoundQuestions } from '../../data/practical-exam-data'
import { useAuth } from '../../contexts/AuthContext'
import { sb_saveTestResult } from '../../lib/supabase'
import Timer from '../../components/ui/Timer'

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/;$/, '')

const typeLabels: Record<string, string> = { sql: 'SQL', algorithm: '알고리즘', short: '단답형' }
const typeColors: Record<string, string> = { sql: '#3B82F6', algorithm: '#10B981', short: '#F59E0B' }

interface PracticalQuestion {
  id: string
  type: string
  title?: string
  category?: string
  difficulty?: string
  question: string
  hint?: string
  answer: string
  alternativeAnswers: string[]
  explanation?: string
  tableSchema?: string
}

export default function PracticalMockTest() {
  const { certType = 'engineer', round } = useParams()
  const roundNumber = parseInt(round || '0', 10)
  const navigate = useNavigate()
  const { user } = useAuth()
  const certName = getCertName(certType)

  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<PracticalQuestion[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const startTest = () => {
    const qs = getPracticalRoundQuestions(certType, roundNumber)
    setQuestions(qs)
    setAnswers({})
    setCurrentQ(0)
    setSubmitted(false)
    setStarted(true)
  }

  const updateAnswer = (qId: string, value: string) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qId]: value }))
  }

  const checkAnswer = (q: PracticalQuestion, userInput: string) => {
    if (!userInput) return false
    const norm = normalize(userInput)
    if (normalize(q.answer) === norm) return true
    if (q.alternativeAnswers) {
      return q.alternativeAnswers.some((alt: string) => normalize(alt) === norm)
    }
    return false
  }

  const handleSubmit = useCallback(async () => {
    if (submitted) return
    setSubmitted(true)

    let score = 0
    const typeScores: Record<string, { correct: number; total: number }> = { sql: { correct: 0, total: 0 }, algorithm: { correct: 0, total: 0 }, short: { correct: 0, total: 0 } }

    questions.forEach(q => {
      const correct = checkAnswer(q, answers[q.id])
      if (correct) score++
      const t = q.type || 'short'
      if (typeScores[t]) {
        typeScores[t].total++
        if (correct) typeScores[t].correct++
      }
    })

    if (user) {
      await sb_saveTestResult({
        user_id: user.id,
        cert_type: certType,
        test_type: 'practical',
        score,
        total: questions.length,
        round_number: roundNumber,
        subject_scores: typeScores,
      })
    }

    navigate(`/practical-exam/${certType}/result`, {
      state: { questions, answers, score, total: questions.length, roundNumber, typeScores },
    })
  }, [submitted, questions, answers, user, certType, roundNumber, navigate])

  if (!started) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <div className="page-header-breadcrumb">
              <Link to="/practical-exam">실기시험</Link> / <Link to={`/practical-exam/${certType}`}>{certName}</Link> / <Link to={`/practical-exam/${certType}/rounds`}>회차별</Link> / {roundNumber}회차
            </div>
            <div className="page-header-inner">
              <div className="page-header-icon"><i className="fa-solid fa-laptop-code"></i></div>
              <div><h1>{certName} 실기 {roundNumber}회차 모의시험</h1></div>
            </div>
          </div>
        </div>
        <div className="quiz-container" style={{ textAlign: 'center' }}>
          <div className="quiz-card">
            <div className="quiz-score-circle" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
              <span style={{ fontSize: 36 }}><i className="fa-solid fa-laptop-code"></i></span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{roundNumber}회차 실기 모의시험</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>SQL 7 + 알고리즘 6 + 단답형 7 = 20문항 | 60분</p>
            <p style={{ color: 'var(--text-light)', fontSize: 14, marginBottom: 32 }}>직접 답안을 입력하는 실기 시험입니다</p>
            <button className="btn btn-accent btn-lg" onClick={startTest}>시험 시작</button>
          </div>
        </div>
      </>
    )
  }

  const q = questions[currentQ]
  const answeredCount = Object.keys(answers).filter(k => answers[k]?.trim()).length

  return (
    <div className="quiz-container">
      {/* 상단 바 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
            {certName} 실기 {roundNumber}회차
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-light)' }}>{answeredCount}/{questions.length} 답변 완료</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Timer duration={3600} onTimeUp={handleSubmit} />
          <button className="btn btn-accent btn-sm" onClick={handleSubmit} disabled={submitted}>
            제출하기
          </button>
        </div>
      </div>

      {/* 진행바 */}
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
      </div>

      {/* 문제 번호 네비게이션 */}
      <div className="quiz-question-number">
        {questions.map((qItem, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentQ(idx)}
            className={`quiz-num-btn ${currentQ === idx ? 'active' : ''} ${answers[qItem.id]?.trim() ? 'answered' : ''}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* 문제 카드 */}
      <div className="quiz-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600 }}>
            문제 {currentQ + 1} / {questions.length}
          </p>
          <span
            className="question-type-badge"
            style={{ background: typeColors[q.type] || '#6B7280', color: 'white' }}
          >
            {typeLabels[q.type] || q.type}
          </span>
        </div>

        <p className="quiz-question">{q.question}</p>

        {/* 테이블 스키마 표시 (SQL 문제) */}
        {q.tableSchema && (
          <div className="schema-box">
            <p className="label">테이블 구조</p>
            <code style={{ whiteSpace: 'pre-wrap' }}>{q.tableSchema}</code>
          </div>
        )}

        {/* 입력 UI */}
        {q.type === 'sql' ? (
          <textarea
            className="answer-textarea"
            placeholder="SQL 쿼리를 입력하세요..."
            value={answers[q.id] || ''}
            onChange={e => updateAnswer(q.id, e.target.value)}
            rows={4}
          />
        ) : (
          <input
            type="text"
            className="answer-input"
            placeholder="답을 입력하세요..."
            value={answers[q.id] || ''}
            onChange={e => updateAnswer(q.id, e.target.value)}
          />
        )}

        {/* 이전/다음 */}
        <div className="lesson-nav" style={{ marginTop: 24 }}>
          <button
            className="lesson-nav-btn"
            disabled={currentQ === 0}
            onClick={() => setCurrentQ(prev => prev - 1)}
          >
            &#8592; 이전
          </button>
          <button
            className="lesson-nav-btn"
            disabled={currentQ === questions.length - 1}
            onClick={() => setCurrentQ(prev => prev + 1)}
          >
            다음 &#8594;
          </button>
        </div>
      </div>
    </div>
  )
}
