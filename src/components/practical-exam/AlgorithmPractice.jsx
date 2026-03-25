import { useState } from 'react'
import { Link } from 'react-router-dom'
import { algorithmQuestions } from '../../data/practical-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function AlgorithmPractice() {
  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const q = algorithmQuestions[currentQ]

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

  const difficultyColors = {
    easy: 'bg-success/20 text-success',
    medium: 'bg-warning/20 text-warning',
    hard: 'bg-danger/20 text-danger',
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/practical-exam" className="text-accent text-sm hover:underline">&larr; 실기시험 홈으로</Link>
      <h1 className="text-2xl font-bold text-white mt-2 mb-6">알고리즘 실습</h1>

      <div className="flex gap-2 mb-6">
        {algorithmQuestions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-9 h-9 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              currentQ === idx ? 'bg-accent text-primary' : 'bg-primary-lighter text-slate-400'
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

        <h2 className="text-lg font-semibold text-white mb-4 whitespace-pre-line">{q.question}</h2>

        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
          placeholder="답을 입력하세요..."
          className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
          disabled={showResult}
        />

        <div className="flex gap-3 mt-4">
          <Button variant="accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
            정답 확인
          </Button>
          <Button variant="ghost" onClick={() => setShowHint(!showHint)}>
            {showHint ? '힌트 닫기' : '힌트'}
          </Button>
        </div>

        {showHint && (
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm text-warning">{q.hint}</p>
          </div>
        )}

        {showResult && (
          <div className={`mt-4 p-4 rounded-lg border ${
            isCorrect ? 'bg-success/10 border-success/20' : 'bg-danger/10 border-danger/20'
          }`}>
            <p className={`font-bold mb-2 ${isCorrect ? 'text-success' : 'text-danger'}`}>
              {isCorrect ? '정답!' : '오답'}
            </p>
            {!isCorrect && <p className="text-sm text-slate-400 mb-1">정답: <span className="text-accent">{q.answer}</span></p>}
            <p className="text-sm text-slate-300">{q.explanation}</p>
          </div>
        )}

        <div className="flex justify-between mt-6 pt-4 border-t border-primary-lighter">
          <Button variant="ghost" size="sm" disabled={currentQ === 0} onClick={() => goTo(currentQ - 1)}>
            &larr; 이전
          </Button>
          <Button variant="ghost" size="sm" disabled={currentQ === algorithmQuestions.length - 1} onClick={() => goTo(currentQ + 1)}>
            다음 &rarr;
          </Button>
        </div>
      </Card>
    </div>
  )
}
