import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { certTypes, chapters } from '../../data/written-exam-data'

// 인라인 **bold** 마크다운을 <strong>으로 변환
function renderInlineMarkdown(text) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-primary)' }}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function ChapterStudy() {
  const { certType, subjectId } = useParams()
  const cert = certTypes[certType]
  const subject = cert?.subjects.find(s => s.id === subjectId)
  const chapterList = chapters[subjectId] || []
  const [activeChapter, setActiveChapter] = useState(0)

  if (!cert || !subject) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>존재하지 않는 과목입니다</h2>
        <Link to="/written-exam" className="btn btn-outline">돌아가기</Link>
      </div>
    )
  }

  if (chapterList.length === 0) {
    return (
      <>
        <div className="page-header">
          <div className="container page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-book-open"></i></div>
            <div><h1>{subject.name}</h1></div>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div className="mypage-empty">
            <p>해당 과목의 학습 콘텐츠가 준비 중입니다.</p>
            <Link to={`/written-exam/${certType}`} className="btn btn-outline">과목 목록으로</Link>
          </div>
        </div>
      </>
    )
  }

  const current = chapterList[activeChapter]

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/written-exam">필기시험</Link> / <Link to={`/written-exam/${certType}`}>{cert.name}</Link> / {subject.name}
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-book-open"></i></div>
            <div><h1>{subject.name}</h1></div>
          </div>
        </div>
      </div>

      <div className="lesson-layout">
        {/* 챕터 사이드바 */}
        <div className="lesson-sidebar">
          <div className="card" style={{ padding: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 12, padding: '0 8px' }}>챕터 목록</h3>
            {chapterList.map((ch, idx) => (
              <div
                key={ch.id}
                className={`toc-item ${activeChapter === idx ? 'active' : ''}`}
                onClick={() => setActiveChapter(idx)}
              >
                <span className="toc-number">{idx + 1}</span>
                <span>{ch.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="lesson-content">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>{activeChapter + 1}. {current.name}</h2>
              <span className="path-card-tag">{current.topics?.length || 0}개 토픽</span>
            </div>

            {/* 토픽 태그 */}
            {current.topics && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {current.topics.map(topic => (
                  <span key={topic} className="topic-tag">{topic}</span>
                ))}
              </div>
            )}

            {/* 본문 */}
            <div>
              {(() => {
                const lines = current.content?.split('\n') || []
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
                      const parseRow = (row) => row.split('|').slice(1, -1).map(c => c.trim())
                      const headers = parseRow(tableLines[0])
                      const dataRows = tableLines.slice(2) // 1번째 줄은 구분선(|---|)
                      elements.push(
                        <div key={`table-${i}`} style={{ overflowX: 'auto', margin: '12px 0' }}>
                          <table className="md-table">
                            <thead>
                              <tr>{headers.map((h, hi) => <th key={hi}>{renderInlineMarkdown(h)}</th>)}</tr>
                            </thead>
                            <tbody>
                              {dataRows.map((row, ri) => (
                                <tr key={ri}>{parseRow(row).map((c, ci) => <td key={ci}>{renderInlineMarkdown(c)}</td>)}</tr>
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
                return elements
              })()}
            </div>

            {/* 페이지네이션 */}
            <div className="lesson-nav">
              <button
                className="lesson-nav-btn"
                disabled={activeChapter === 0}
                onClick={() => setActiveChapter(prev => prev - 1)}
              >
                &#8592; 이전 챕터
              </button>
              <button
                className="lesson-nav-btn"
                disabled={activeChapter === chapterList.length - 1}
                onClick={() => setActiveChapter(prev => prev + 1)}
              >
                다음 챕터 &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
