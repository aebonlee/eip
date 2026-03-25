import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sqlQuestions } from '../../data/practical-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

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

  const nextQuestion = () => {
    setCurrentQ(prev => Math.min(prev + 1, sqlQuestions.length - 1))
    setUserAnswer('')
    setShowResult(false)
    setShowHint(false)
  }

  const prevQuestion = () => {
    setCurrentQ(prev => Math.max(prev - 1, 0))
    setUserAnswer('')
    setShowResult(false)
    setShowHint(false)
  }

  const difficultyColors = {
    easy: 'bg-success/20 text-success',
    medium: 'bg-warning/20 text-warning',
    hard: 'bg-danger/20 text-danger',
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/practical-exam" className="text-accent text-sm hover:underline">&larr; 실기시험 홈으로</Link>
      <h1 className="text-2xl font-bold text-white mt-2 mb-6">SQL 실습</h1>

      {/* 문제 번호 */}
      <div className="flex gap-2 mb-6">
        {sqlQuestions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrentQ(idx); setUserAnswer(''); setShowResult(false); setShowHint(false) }}
            className={`w-9 h-9 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              currentQ === idx ? 'bg-accent text-primary' : 'bg-primary-lighter text-slate-400 hover:bg-primary-lighter/80'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[q.difficulty]}`}>
            {q.difficulty === 'easy' ? '쉬움' : q.difficulty === 'medium' ? '보통' : '어려움'}
          </span>
          <span className="text-sm text-slate-400">{q.title}</span>
        </div>

        <h2 className="text-lg font-semibold text-white mb-4">{q.question}</h2>

        {/* 테이블 스키마 */}
        <div className="bg-primary rounded-lg p-3 mb-4 text-sm">
          <p className="text-slate-500 text-xs mb-1">테이블 구조</p>
          <code className="text-accent">{q.tableSchema}</code>
        </div>

        {/* SQL 입력 */}
        <textarea
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="SQL문을 입력하세요..."
          className="w-full bg-primary border border-primary-lighter rounded-lg p-4 text-white font-mono text-sm resize-none h-32 focus:outline-none focus:border-accent"
          disabled={showResult}
        />

        {/* 버튼 */}
        <div className="flex gap-3 mt-4">
          <Button variant="accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
            정답 확인
          </Button>
          <Button variant="ghost" onClick={() => setShowHint(!showHint)}>
            {showHint ? '힌트 닫기' : '힌트 보기'}
          </Button>
        </div>

        {/* 힌트 */}
        {showHint && (
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm text-warning">{q.hint}</p>
          </div>
        )}

        {/* 결과 */}
        {showResult && (
          <div className={`mt-4 p-4 rounded-lg border ${
            isCorrect ? 'bg-success/10 border-success/20' : 'bg-danger/10 border-danger/20'
          }`}>
            <p className={`font-bold mb-2 ${isCorrect ? 'text-success' : 'text-danger'}`}>
              {isCorrect ? '정답입니다!' : '오답입니다'}
            </p>
            {!isCorrect && (
              <div className="mb-2">
                <p className="text-sm text-slate-400">정답:</p>
                <code className="text-accent text-sm">{q.answer}</code>
              </div>
            )}
            <p className="text-sm text-slate-300">{q.explanation}</p>
          </div>
        )}

        {/* 페이지네이션 */}
        <div className="flex justify-between mt-6 pt-4 border-t border-primary-lighter">
          <Button variant="ghost" size="sm" disabled={currentQ === 0} onClick={prevQuestion}>
            &larr; 이전
          </Button>
          <Button variant="ghost" size="sm" disabled={currentQ === sqlQuestions.length - 1} onClick={nextQuestion}>
            다음 &rarr;
          </Button>
        </div>
      </Card>
    </div>
  )
}
