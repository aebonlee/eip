import { useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function TestResult() {
  const { certType } = useParams()
  const location = useLocation()
  const cert = certTypes[certType]
  const { questions = [], answers = {}, score = 0, total = 0 } = location.state || {}
  const [showExplanation, setShowExplanation] = useState({})

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  const passed = percentage >= 60

  if (!location.state) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">시험 결과가 없습니다</h2>
        <Link to={`/written-exam/${certType}/mock-test`}>
          <Button variant="outline">모의시험 보기</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* 결과 요약 */}
      <Card className={`text-center mb-8 ${passed ? 'border-success/30' : 'border-warning/30'}`}>
        <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold ${
          passed ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
        }`}>
          {percentage}%
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {passed ? '합격!' : '불합격'}
        </h1>
        <p className="text-slate-400 mb-1">
          {cert?.name} CBT 모의시험 결과
        </p>
        <p className="text-lg text-white">
          {total}문제 중 <span className={passed ? 'text-success' : 'text-warning'}>{score}문제</span> 정답
        </p>
        <p className="text-sm text-slate-500 mt-2">(합격 기준: 60% 이상)</p>

        <div className="flex justify-center gap-4 mt-6">
          <Link to={`/written-exam/${certType}/mock-test`}>
            <Button variant="accent">다시 풀기</Button>
          </Link>
          <Link to={`/written-exam/${certType}`}>
            <Button variant="outline">과목 목록으로</Button>
          </Link>
        </div>
      </Card>

      {/* 문제별 결과 */}
      <h2 className="text-xl font-bold text-white mb-4">문제별 결과</h2>
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const userAnswer = answers[q.id]
          const isCorrect = userAnswer === q.answer
          return (
            <Card key={q.id} className={`${isCorrect ? 'border-success/20' : 'border-danger/20'}`}>
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isCorrect ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
                }`}>
                  {isCorrect ? 'O' : 'X'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-500 mb-1">문제 {idx + 1}</p>
                  <p className="text-white font-medium mb-3">{q.question}</p>

                  <div className="space-y-2">
                    {q.options.map((option, optIdx) => (
                      <div
                        key={optIdx}
                        className={`text-sm px-3 py-2 rounded ${
                          optIdx === q.answer
                            ? 'bg-success/10 text-success border border-success/20'
                            : optIdx === userAnswer && !isCorrect
                              ? 'bg-danger/10 text-danger border border-danger/20 line-through'
                              : 'text-slate-400'
                        }`}
                      >
                        {optIdx + 1}. {option}
                        {optIdx === q.answer && ' ✓'}
                        {optIdx === userAnswer && !isCorrect && ' (내 답)'}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowExplanation(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="text-accent text-sm mt-3 hover:underline cursor-pointer"
                  >
                    {showExplanation[q.id] ? '해설 닫기' : '해설 보기'}
                  </button>

                  {showExplanation[q.id] && (
                    <div className="mt-2 p-3 bg-accent/5 border border-accent/10 rounded-lg">
                      <p className="text-sm text-slate-300">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
