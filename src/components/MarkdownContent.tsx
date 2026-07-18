// 마크다운 부분집합 렌더러 (##, ###, - 리스트, |표|, **강조**)
// ChapterStudy·실기 이론·코딩 이론 공용
// hideAnswers: 정답·풀이 줄과 정답 표를 흐림 처리(클릭 시 개별 공개) — 자가 테스트 모드

import { useState } from 'react'

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part: string, i: number) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-primary)' }}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

// 정답·풀이 줄 감지: 앞머리 기호를 걷어낸 뒤 "정답"/"풀이:"로 시작하면 참
function isAnswerLine(line: string) {
  const stripped = line.trimStart().replace(/^-\s+/, '').replace(/^\*\*/, '')
  return /^(정답|풀이\s*[:.·])/.test(stripped)
}

function AnswerBlur({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div
      className={'answer-blur' + (revealed ? ' revealed' : '')}
      onClick={() => setRevealed(true)}
      title={revealed ? undefined : '클릭하면 정답이 보입니다'}
    >
      {children}
    </div>
  )
}

// 정답 가림 토글 상태 훅 — 페이지들이 공용으로 사용, localStorage에 유지
export function useHideAnswers(): [boolean, () => void] {
  const [hideAnswers, setHideAnswers] = useState(() => localStorage.getItem('eip_hide_answers') === '1')
  const toggle = () =>
    setHideAnswers(prev => {
      localStorage.setItem('eip_hide_answers', prev ? '0' : '1')
      return !prev
    })
  return [hideAnswers, toggle]
}

export function AnswerToggleButton({ hideAnswers, onToggle }: { hideAnswers: boolean; onToggle: () => void }) {
  return (
    <button type="button" className={'answer-toggle-btn' + (hideAnswers ? ' active' : '')} onClick={onToggle}>
      <i className={hideAnswers ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'}></i>
      {hideAnswers ? ' 정답 가림 중 — 클릭한 문제만 공개' : ' 정답 가리기 (자가 테스트)'}
    </button>
  )
}

export default function MarkdownContent({ content, hideAnswers = false }: { content: string; hideAnswers?: boolean }) {
  const lines = content.split('\n')
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    // 마크다운 테이블 감지: | 로 시작하는 연속된 줄
    if (line.trimStart().startsWith('|') && line.trim().endsWith('|')) {
      const tableLines = []
      while (i < lines.length && lines[i].trimStart().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      if (tableLines.length >= 2) {
        const parseRow = (row: string) => row.split('|').slice(1, -1).map((c: string) => c.trim())
        const headers = parseRow(tableLines[0])
        const dataRows = tableLines.slice(2) // 1번째 줄은 구분선(|---|)
        const table = (
          <div key={`table-${i}`} style={{ overflowX: 'auto', margin: '12px 0' }}>
            <table className="md-table">
              <thead>
                <tr>{headers.map((h: string, hi: number) => <th key={hi}>{renderInlineMarkdown(h)}</th>)}</tr>
              </thead>
              <tbody>
                {dataRows.map((row: string, ri: number) => (
                  <tr key={ri}>{parseRow(row).map((c: string, ci: number) => <td key={ci}>{renderInlineMarkdown(c)}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        // 정답 열이 있는 표는 통째로 가림 (자가 테스트 모드)
        if (hideAnswers && headers.some((h: string) => h.includes('정답'))) {
          elements.push(<AnswerBlur key={`ab-table-${i}`}>{table}</AnswerBlur>)
        } else {
          elements.push(table)
        }
      }
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{renderInlineMarkdown(line.replace('## ', ''))}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{renderInlineMarkdown(line.replace('### ', ''))}</h3>)
    } else if (line.startsWith('- ')) {
      const item = (
        <p key={i} style={{ marginLeft: 16, marginBottom: 4, color: 'var(--text-secondary)' }}>
          &#8226; {renderInlineMarkdown(line.slice(2))}
        </p>
      )
      elements.push(hideAnswers && isAnswerLine(line) ? <AnswerBlur key={`ab-${i}`}>{item}</AnswerBlur> : item)
    } else if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: 8 }} />)
    } else {
      const para = <p key={i} style={{ marginBottom: 8, color: 'var(--text-secondary)' }}>{renderInlineMarkdown(line)}</p>
      elements.push(hideAnswers && isAnswerLine(line) ? <AnswerBlur key={`ab-${i}`}>{para}</AnswerBlur> : para)
    }
    i++
  }
  return <div>{elements}</div>
}
