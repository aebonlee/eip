import { useState } from 'react'
import Editor from '@monaco-editor/react'
import Button from '../ui/Button'

const JUDGE0_URL = import.meta.env.VITE_JUDGE0_API_URL || 'https://judge0-ce.p.rapidapi.com'
const JUDGE0_KEY = import.meta.env.VITE_JUDGE0_API_KEY

export default function CodeEditor({ language, languageId, initialCode = '', input = '', onResult }) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    setError('')

    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      if (JUDGE0_KEY) {
        headers['X-RapidAPI-Key'] = JUDGE0_KEY
        headers['X-RapidAPI-Host'] = 'judge0-ce.p.rapidapi.com'
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
    } catch (err) {
      setError(`실행 오류: ${err.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* 에디터 */}
      <div className="flex-1 border border-primary-lighter rounded-t-lg overflow-hidden" style={{ minHeight: '300px' }}>
        <Editor
          height="100%"
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

      {/* 실행 버튼 */}
      <div className="flex items-center gap-3 py-3">
        <Button variant="accent" onClick={runCode} disabled={isRunning}>
          {isRunning ? (
            <>
              <span className="animate-spin inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full mr-2" />
              실행 중...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              실행
            </>
          )}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setCode(initialCode)}>
          초기화
        </Button>
      </div>

      {/* 출력 */}
      <div className="bg-primary border border-primary-lighter rounded-b-lg p-4 min-h-[100px]">
        <p className="text-xs text-slate-500 mb-2">실행 결과</p>
        {output && <pre className="text-success text-sm whitespace-pre-wrap font-mono">{output}</pre>}
        {error && <pre className="text-danger text-sm whitespace-pre-wrap font-mono">{error}</pre>}
        {!output && !error && !isRunning && (
          <p className="text-slate-600 text-sm">코드를 실행하면 결과가 여기에 표시됩니다.</p>
        )}
      </div>
    </div>
  )
}
