import { useState } from 'react'
import Editor from '@monaco-editor/react'

// Wandbox API (무료, 키 불필요, CORS 지원)
const WANDBOX_URL = 'https://wandbox.org/api/compile.json'

const WANDBOX_COMPILERS: Record<string, string> = {
  c: 'gcc-head',
  java: 'openjdk-head',
  python: 'cpython-head',
}

interface CodeEditorProps {
  language: string
  languageId?: number
  initialCode?: string
  input?: string
  onResult?: (output: string) => void
}

export default function CodeEditor({ language, initialCode = '', input = '', onResult }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    setError('')

    try {
      let codeToRun = code

      // Wandbox는 Java 파일명이 prog.java → class명을 prog로 변환
      if (language === 'java') {
        codeToRun = code.replace(/public\s+class\s+\w+/, 'public class prog')
      }

      const compiler = WANDBOX_COMPILERS[language] || WANDBOX_COMPILERS.python

      const response = await fetch(WANDBOX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: codeToRun,
          compiler,
          stdin: input,
          save: false,
        }),
      })

      if (!response.ok) {
        throw new Error(`서버 오류 (${response.status})`)
      }

      const result = await response.json()

      if (result.compiler_error) {
        setError(result.compiler_error)
      } else if (result.program_error) {
        const out = result.program_output || ''
        if (out) {
          setOutput(out.replace(/\n$/, ''))
          onResult?.(out.replace(/\n$/, ''))
        }
        setError(result.program_error)
      } else if (result.program_output !== undefined) {
        const out = result.program_output.replace(/\n$/, '')
        setOutput(out || '(출력 없음)')
        onResult?.(out)
      } else {
        setOutput('(출력 없음)')
      }
    } catch (err) {
      setError(`실행 오류: ${(err as Error).message}`)
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
        <div>
          <Editor
            height={`${Math.max(300, (code.split('\n').length + 2) * 20)}px`}
            language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
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
