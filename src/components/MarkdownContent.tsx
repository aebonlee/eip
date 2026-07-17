// 마크다운 부분집합 렌더러 (##, ###, - 리스트, |표|, **강조**)
// ChapterStudy와 동일한 규칙 — 실기 이론 등 공용

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part: string, i: number) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-primary)' }}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function MarkdownContent({ content }: { content: string }) {
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
        elements.push(
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
      }
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{renderInlineMarkdown(line.replace('## ', ''))}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{renderInlineMarkdown(line.replace('### ', ''))}</h3>)
    } else if (line.startsWith('- ')) {
      elements.push(
        <p key={i} style={{ marginLeft: 16, marginBottom: 4, color: 'var(--text-secondary)' }}>
          &#8226; {renderInlineMarkdown(line.slice(2))}
        </p>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: 8 }} />)
    } else {
      elements.push(<p key={i} style={{ marginBottom: 8, color: 'var(--text-secondary)' }}>{renderInlineMarkdown(line)}</p>)
    }
    i++
  }
  return <div>{elements}</div>
}
