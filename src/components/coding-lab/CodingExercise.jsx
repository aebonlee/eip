import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { languages, getExercises } from '../../data/coding-exercises'
import CodeEditor from './CodeEditor'

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
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>지원하지 않는 언어입니다</h2>
        <Link to="/coding-lab" className="btn btn-outline">돌아가기</Link>
      </div>
    )
  }

  const exercise = exerciseList[currentEx]

  if (!exercise) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>{lang.name} 실습 문제 준비 중</h2>
        <Link to="/coding-lab" className="btn btn-outline">돌아가기</Link>
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

  const difficultyClass = { easy: 'difficulty-easy', medium: 'difficulty-medium', hard: 'difficulty-hard' }
  const difficultyLabel = { easy: '쉬움', medium: '보통', hard: '어려움' }
  const cardDifficultyClass = { easy: 'card-difficulty-easy', medium: 'card-difficulty-medium', hard: 'card-difficulty-hard' }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/coding-lab">코딩실습</Link> / {lang.name}
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon">{lang.icon}</div>
            <div><h1>{lang.name} 실습</h1></div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px' }}>
        {/* 문제 번호 */}
        <div className="quiz-question-number" style={{ marginBottom: 24 }}>
          {exerciseList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`quiz-num-btn ${currentEx === idx ? 'active' : ''}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="coding-layout">
          {/* 문제 설명 */}
          <div className="coding-problem">
            <div className={`card ${cardDifficultyClass[exercise.difficulty]}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className={`difficulty-badge ${difficultyClass[exercise.difficulty]}`}>
                  {difficultyLabel[exercise.difficulty]}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{exercise.title}</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>{exercise.description}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="schema-box">
                  <p className="label">입력 예시</p>
                  <code>{exercise.input}</code>
                </div>
                <div className="schema-box">
                  <p className="label">출력 예시</p>
                  <code style={{ color: 'var(--success)', whiteSpace: 'pre-line' }}>{exercise.expectedOutput}</code>
                </div>
              </div>

              {/* 결과 판정 */}
              {lastOutput && (
                <div className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
                  <p className="result-title" style={{ fontSize: 14 }}>
                    {isCorrect ? '정답! 출력이 일치합니다.' : '출력이 예상 결과와 다릅니다.'}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button className="btn btn-ghost btn-sm" onClick={() => setShowHint(!showHint)}>
                  {showHint ? '닫기' : '힌트'}
                </button>
                <button className="btn btn-ghost btn-sm" onClick={() => setShowSolution(!showSolution)}>
                  {showSolution ? '닫기' : '정답 코드'}
                </button>
              </div>

              {showHint && (
                <div className="hint-box">
                  <p>{exercise.hint}</p>
                </div>
              )}

              {showSolution && (
                <div className="schema-box" style={{ marginTop: 12 }}>
                  <p className="label">정답 코드</p>
                  <pre style={{ fontSize: 13, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-code)', color: 'var(--text-secondary)' }}>{exercise.solution}</pre>
                </div>
              )}
            </div>
          </div>

          {/* 코드 에디터 */}
          <div className="coding-editor-panel">
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
        <div className="lesson-nav" style={{ marginTop: 24 }}>
          <button className="lesson-nav-btn" disabled={currentEx === 0} onClick={() => goTo(currentEx - 1)}>
            &#8592; 이전 문제
          </button>
          <button className="lesson-nav-btn" disabled={currentEx === exerciseList.length - 1} onClick={() => goTo(currentEx + 1)}>
            다음 문제 &#8594;
          </button>
        </div>
      </div>
    </>
  )
}
