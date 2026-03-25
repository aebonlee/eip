import { useState } from 'react'
import Editor from '@monaco-editor/react'

// Piston API (무료, 키 불필요)
const PISTON_URL = 'https://emkc.org/api/v2/piston/execute'

// Piston 언어 매핑
const PISTON_LANGS = {
  c: { language: 'c', version: '10.2.0' },
  java: { language: 'java', version: '15.0.2' },
  python: { language: 'python', version: '3.10.0' },
}

// Judge0 (선택, RapidAPI 키 필요)
const JUDGE0_URL = import.meta.env.VITE_JUDGE0_API_URL
const JUDGE0_KEY = import.meta.env.VITE_JUDGE0_API_KEY
const useJudge0 = JUDGE0_KEY && JUDGE0_KEY !== 'your_judge0_api_key_here'

export default function CodeEditor({ language, languageId, initialCode = '', input = '', onResult }) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')

  const runWithPiston = async () => {
    const langConfig = PISTON_LANGS[language] || PISTON_LANGS.python

    const response = await fetch(PISTON_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: langConfig.language,
        version: langConfig.version,
        files: [{ content: code }],
        stdin: input,
      }),
    })

    const result = await response.json()

    if (result.run) {
      if (result.run.stderr) {
        setError(result.run.stderr)
      } else if (result.run.output) {
        const out = result.run.output.replace(/\n$/, '')
        setOutput(out)
        onResult?.(out)
      } else {
        setOutput('(출력 없음)')
      }
    } else if (result.compile && result.compile.stderr) {
      setError(result.compile.stderr)
    } else if (result.message) {
      setError(result.message)
    } else {
      setOutput('(출력 없음)')
    }
  }

  const runWithJudge0 = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': JUDGE0_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    }

    const response = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=true&wait=true`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source_code: btoa(unescape(encodeURIComponent(code))),
        language_id: languageId,
        stdin: btoa(unescape(encodeURIComponent(input))),
      }),
    })

    const result = await response.json()

    if (result.stdout) {
      const decoded = decodeURIComponent(escape(atob(result.stdout)))
      setOutput(decoded)
      onResult?.(decoded)
    } else if (result.stderr) {
      setError(decodeURIComponent(escape(atob(result.stderr))))
    } else if (result.compile_output) {
      setError(decodeURIComponent(escape(atob(result.compile_output))))
    } else if (result.message) {
      setError(result.message)
    } else {
      setOutput('(출력 없음)')
    }
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    setError('')

    try {
      if (useJudge0) {
        await runWithJudge0()
      } else {
        await runWithPiston()
      }
    } catch (err) {
      setError(`실행 오류: ${err.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* 에디터 */}
      <div className="code-editor-wrapper">
        <div className="editor-header">
          <div className="editor-header-title">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            코드 에디터
          </div>
          <div className="editor-header-actions">
            <button className="editor-header-btn" onClick={() => setCode(initialCode)}>초기화</button>
          </div>
        </div>
        <div style={{ minHeight: 300 }}>
          <Editor
            height="300px"
            language={language}
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 4,
              wordWrap: 'on',
            }}
          />
        </div>
      </div>

      {/* 실행 버튼 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0' }}>
        <button className="run-btn" onClick={runCode} disabled={isRunning}>
          {isRunning ? (
            <>
              <span className="spinner" />
              실행 중...
            </>
          ) : (
            <>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              실행
            </>
          )}
        </button>
      </div>

      {/* 출력 */}
      <div className="editor-output">
        <p className="editor-output-label">실행 결과</p>
        {output && <pre className="editor-stdout">{output}</pre>}
        {error && <pre className="editor-stderr">{error}</pre>}
        {!output && !error && !isRunning && (
          <p className="editor-placeholder">코드를 실행하면 결과가 여기에 표시됩니다.</p>
        )}
      </div>
    </div>
  )
}
