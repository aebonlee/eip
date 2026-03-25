import { useState } from 'react'
import { Link } from 'react-router-dom'
import { shortAnswerQuestions } from '../../data/practical-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'
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
    <div className="max-w-3xl mx-auto">
      <Link to="/practical-exam" className="text-accent text-sm hover:underline">&larr; 실기시험 홈으로</Link>
      <h1 className="text-2xl font-bold text-white mt-2 mb-2">단답형 연습</h1>

      {/* 진행 상황 */}
      <div className="mb-6">
        <ProgressBar value={attempted} max={shortAnswerQuestions.length} label={`${correctCount}/${attempted} 정답`} color="accent" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {shortAnswerQuestions.map((_, idx) => (
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
          <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary-light rounded-full">{q.category}</span>
          <span className="text-sm text-slate-500">문제 {currentQ + 1}/{shortAnswerQuestions.length}</span>
        </div>

        <h2 className="text-lg font-semibold text-white mb-6 whitespace-pre-line">{q.question}</h2>

        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !showResult && userAnswer.trim() && checkAnswer()}
          placeholder="답을 입력하세요..."
          className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
          disabled={showResult}
          autoFocus
        />

        <div className="flex gap-3 mt-4">
          <Button variant="accent" onClick={checkAnswer} disabled={!userAnswer.trim() || showResult}>
            정답 확인
          </Button>
          <Button variant="ghost" onClick={() => setShowHint(!showHint)}>
            {showHint ? '닫기' : '힌트'}
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
            <p className={`font-bold ${isCorrect ? 'text-success' : 'text-danger'}`}>
              {isCorrect ? '정답!' : '오답'}
            </p>
            {!isCorrect && (
              <p className="text-sm text-slate-400 mt-1">
                정답: <span className="text-accent font-semibold">{q.answer}</span>
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6 pt-4 border-t border-primary-lighter">
          <Button variant="ghost" size="sm" disabled={currentQ === 0} onClick={() => goTo(currentQ - 1)}>
            &larr; 이전
          </Button>
          <Button variant="ghost" size="sm" disabled={currentQ === shortAnswerQuestions.length - 1} onClick={() => goTo(currentQ + 1)}>
            다음 &rarr;
          </Button>
        </div>
      </Card>
    </div>
  )
}
