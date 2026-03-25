import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { languages, getExercises } from '../../data/coding-exercises'
import CodeEditor from './CodeEditor'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function CodingExercise() {
  const { language } = useParams()
  const lang = languages[language]
  const exerciseList = getExercises(language)
  const [currentEx, setCurrentEx] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [lastOutput, setLastOutput] = useState('')

  if (!lang) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">지원하지 않는 언어입니다</h2>
        <Link to="/coding-lab"><Button variant="outline">돌아가기</Button></Link>
      </div>
    )
  }

  const exercise = exerciseList[currentEx]

  if (!exercise) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">{lang.name} 실습 문제 준비 중</h2>
        <Link to="/coding-lab"><Button variant="outline">돌아가기</Button></Link>
      </div>
    )
  }

  const goTo = (idx) => {
    setCurrentEx(idx)
    setShowSolution(false)
    setShowHint(false)
    setLastOutput('')
  }

  const isCorrect = lastOutput.trim() === exercise.expectedOutput.trim()

  const difficultyColors = {
    easy: 'bg-success/20 text-success',
    medium: 'bg-warning/20 text-warning',
    hard: 'bg-danger/20 text-danger',
  }

  return (
    <div>
      <Link to="/coding-lab" className="text-accent text-sm hover:underline">&larr; 코딩실습 홈으로</Link>
      <div className="flex items-center gap-3 mt-2 mb-6">
        <h1 className="text-2xl font-bold text-white">{lang.name} 실습</h1>
      </div>

      {/* 문제 번호 */}
      <div className="flex gap-2 mb-6">
        {exerciseList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-9 h-9 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              currentEx === idx ? 'bg-accent text-primary' : 'bg-primary-lighter text-slate-400'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 문제 설명 */}
        <div>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[exercise.difficulty]}`}>
                {exercise.difficulty === 'easy' ? '쉬움' : exercise.difficulty === 'medium' ? '보통' : '어려움'}
              </span>
              <span className="text-sm font-medium text-white">{exercise.title}</span>
            </div>

            <p className="text-slate-300 mb-4">{exercise.description}</p>

            <div className="space-y-3">
              <div className="bg-primary rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-1">입력 예시</p>
                <code className="text-accent text-sm">{exercise.input}</code>
              </div>
              <div className="bg-primary rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-1">출력 예시</p>
                <code className="text-success text-sm whitespace-pre-line">{exercise.expectedOutput}</code>
              </div>
            </div>

            {/* 결과 판정 */}
            {lastOutput && (
              <div className={`mt-4 p-3 rounded-lg border ${
                isCorrect ? 'bg-success/10 border-success/20' : 'bg-danger/10 border-danger/20'
              }`}>
                <p className={`font-bold text-sm ${isCorrect ? 'text-success' : 'text-danger'}`}>
                  {isCorrect ? '정답! 출력이 일치합니다.' : '출력이 예상 결과와 다릅니다.'}
                </p>
              </div>
            )}

            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)}>
                {showHint ? '닫기' : '힌트'}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? '닫기' : '정답 코드'}
              </Button>
            </div>

            {showHint && (
              <div className="mt-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-warning">{exercise.hint}</p>
              </div>
            )}

            {showSolution && (
              <div className="mt-3 bg-primary rounded-lg p-3">
                <p className="text-xs text-slate-500 mb-2">정답 코드</p>
                <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{exercise.solution}</pre>
              </div>
            )}
          </Card>
        </div>

        {/* 코드 에디터 */}
        <div>
          <CodeEditor
            language={lang.monacoId}
            languageId={lang.judge0Id}
            initialCode={exercise.template}
            input={exercise.input}
            onResult={setLastOutput}
          />
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" size="sm" disabled={currentEx === 0} onClick={() => goTo(currentEx - 1)}>
          &larr; 이전 문제
        </Button>
        <Button variant="outline" size="sm" disabled={currentEx === exerciseList.length - 1} onClick={() => goTo(currentEx + 1)}>
          다음 문제 &rarr;
        </Button>
      </div>
    </div>
  )
}
