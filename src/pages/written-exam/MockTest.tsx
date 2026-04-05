import { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { certTypes, getMockTestQuestions, getWrittenRoundQuestions } from '../../data/written-exam-data'
import { useAuth } from '../../contexts/AuthContext'
import { sb_saveTestResult } from '../../lib/supabase'
import Timer from '../../components/ui/Timer'

interface MockQuestion {
  id: number
  subject: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

export default function MockTest() {
  const { certType, round } = useParams()
  const roundNumber = round ? parseInt(round, 10) : null
  const navigate = useNavigate()
  const { user } = useAuth()
  const cert = certTypes[certType as keyof typeof certTypes]

  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<MockQuestion[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const startTest = () => {
    const qs = roundNumber
      ? getWrittenRoundQuestions(certType || '', roundNumber, 20)
      : getMockTestQuestions(certType || '', 20)
    setQuestions(qs)
    setAnswers({})
    setCurrentQ(0)
    setSubmitted(false)
    setStarted(true)
  }

  const selectAnswer = (questionId: number, optionIndex: number) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmit = useCallback(async () => {
    if (submitted) return
    setSubmitted(true)

    let score = 0
    const subjectScores: Record<string, { correct: number; total: number }> = {}
    questions.forEach(q => {
      const correct = answers[q.id] === q.answer
      if (correct) score++
      if (!subjectScores[q.subject]) subjectScores[q.subject] = { correct: 0, total: 0 }
      subjectScores[q.subject].total++
      if (correct) subjectScores[q.subject].correct++
    })

    if (user) {
      await sb_saveTestResult({
        user_id: user.id,
        cert_type: certType,
        test_type: 'written',
        score,
        total: questions.length,
        answers,
        ...(roundNumber ? { round_number: roundNumber } : {}),
        subject_scores: subjectScores,
      })
    }

    navigate(`/written-exam/${certType}/result`, {
      state: { questions, answers, score, total: questions.length, roundNumber, subjectScores },
    })
  }, [submitted, questions, answers, user, certType, roundNumber, navigate])

  if (!cert) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>존재하지 않는 자격증입니다</h2>
        <Link to="/written-exam" className="btn btn-outline">돌아가기</Link>
      </div>
    )
  }

  if (!started) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <div className="page-header-breadcrumb">
              <Link to="/written-exam">필기시험</Link> / <Link to={`/written-exam/${certType}`}>{cert.name}</Link> / {roundNumber ? <><Link to={`/written-exam/${certType}/rounds`}>회차별</Link> / {roundNumber}회차</> : '모의시험'}
            </div>
            <div className="page-header-inner">
              <div className="page-header-icon">📋</div>
              <div><h1>{cert.name} CBT 모의시험</h1></div>
            </div>
          </div>
        </div>
        <div className="quiz-container" style={{ textAlign: 'center' }}>
          <div className="quiz-card">
            <div className="quiz-score-circle" style={{ background: 'var(--gradient-primary)' }}>
              <span style={{ fontSize: 36 }}>📋</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
              {roundNumber ? `${roundNumber}회차 모의시험` : 'CBT 모의시험'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>총 20문항 | 제한시간 30분</p>
            <p style={{ color: 'var(--text-light)', fontSize: 14, marginBottom: 32 }}>
              {roundNumber ? `${roundNumber}회차 고정 문제가 출제됩니다` : '전 과목에서 랜덤으로 출제됩니다'}
            </p>
            <button className="btn btn-accent btn-lg" onClick={startTest}>시험 시작</button>
          </div>
        </div>
      </>
    )
  }

  const q = questions[currentQ]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="quiz-container">
      {/* 상단 바 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
            {cert.name} {roundNumber ? `${roundNumber}회차` : ''} 모의시험
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-light)' }}>{answeredCount}/{questions.length} 답변 완료</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Timer duration={1800} onTimeUp={handleSubmit} />
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
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentQ(idx)}
            className={`quiz-num-btn ${currentQ === idx ? 'active' : ''} ${answers[questions[idx].id] !== undefined ? 'answered' : ''}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* 문제 카드 */}
      <div className="quiz-card">
        <p style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600, marginBottom: 12 }}>
          문제 {currentQ + 1} / {questions.length}
        </p>
        <p className="quiz-question">{q.question}</p>

        <div className="quiz-options">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => selectAnswer(q.id, idx)}
              className={`quiz-option ${answers[q.id] === idx ? 'selected' : ''}`}
            >
              <span className="option-letter">{idx + 1}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

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
