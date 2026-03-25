import { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { certTypes, getMockTestQuestions } from '../../data/written-exam-data'
import { useAuth } from '../../contexts/AuthContext'
import { sb_saveTestResult } from '../../lib/supabase'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Timer from '../ui/Timer'

export default function MockTest() {
  const { certType } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const cert = certTypes[certType]

  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const startTest = () => {
    const qs = getMockTestQuestions(certType, 20)
    setQuestions(qs)
    setAnswers({})
    setCurrentQ(0)
    setSubmitted(false)
    setStarted(true)
  }

  const selectAnswer = (questionId, optionIndex) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmit = useCallback(async () => {
    if (submitted) return
    setSubmitted(true)

    let score = 0
    questions.forEach(q => {
      if (answers[q.id] === q.answer) score++
    })

    if (user) {
      await sb_saveTestResult({
        user_id: user.id,
        cert_type: certType,
        test_type: 'written',
        score,
        total: questions.length,
        answers,
      })
    }

    navigate(`/written-exam/${certType}/result`, {
      state: { questions, answers, score, total: questions.length },
    })
  }, [submitted, questions, answers, user, certType, navigate])

  if (!cert) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">존재하지 않는 자격증입니다</h2>
        <Link to="/written-exam"><Button variant="outline">돌아가기</Button></Link>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto">
        <Link to={`/written-exam/${certType}`} className="text-accent text-sm hover:underline">&larr; 과목 목록으로</Link>
        <Card className="mt-4 text-center py-12">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{cert.name} CBT 모의시험</h1>
          <p className="text-slate-400 mb-2">총 20문항 | 제한시간 30분</p>
          <p className="text-sm text-slate-500 mb-8">전 과목에서 랜덤으로 출제됩니다</p>
          <Button variant="accent" size="lg" onClick={startTest}>시험 시작</Button>
        </Card>
      </div>
    )
  }

  const q = questions[currentQ]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="max-w-3xl mx-auto">
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-bold text-white">{cert.name} 모의시험</h1>
          <p className="text-sm text-slate-400">{answeredCount}/{questions.length} 답변 완료</p>
        </div>
        <div className="flex items-center gap-4">
          <Timer duration={1800} onTimeUp={handleSubmit} />
          <Button variant="accent" size="sm" onClick={handleSubmit} disabled={submitted}>
            제출하기
          </Button>
        </div>
      </div>

      {/* 문제 번호 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentQ(idx)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              currentQ === idx
                ? 'bg-accent text-primary'
                : answers[questions[idx].id] !== undefined
                  ? 'bg-secondary text-white'
                  : 'bg-primary-lighter text-slate-400 hover:bg-primary-lighter/80'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* 문제 카드 */}
      <Card>
        <div className="mb-6">
          <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
            {currentQ + 1} / {questions.length}
          </span>
          <h2 className="text-lg font-semibold text-white mt-3">{q.question}</h2>
        </div>

        <div className="space-y-3">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => selectAnswer(q.id, idx)}
              className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                answers[q.id] === idx
                  ? 'border-accent bg-accent/10 text-white'
                  : 'border-primary-lighter bg-primary hover:border-slate-500 text-slate-300'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium mr-3 ${
                answers[q.id] === idx ? 'bg-accent text-primary' : 'bg-primary-lighter text-slate-400'
              }`}>
                {idx + 1}
              </span>
              {option}
            </button>
          ))}
        </div>

        {/* 이전/다음 */}
        <div className="flex justify-between mt-6 pt-4 border-t border-primary-lighter">
          <Button
            variant="ghost"
            size="sm"
            disabled={currentQ === 0}
            onClick={() => setCurrentQ(prev => prev - 1)}
          >
            &larr; 이전
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={currentQ === questions.length - 1}
            onClick={() => setCurrentQ(prev => prev + 1)}
          >
            다음 &rarr;
          </Button>
        </div>
      </Card>
    </div>
  )
}
