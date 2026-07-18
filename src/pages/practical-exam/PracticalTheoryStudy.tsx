import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTheoryArea } from '../../data/practical-theory'
import { getCertName } from '../../data/practical-exam-data'
import MarkdownContent, { useHideAnswers, AnswerToggleButton } from '../../components/MarkdownContent'
import { useStudyProgress } from '../../hooks/useStudyProgress'

export default function PracticalTheoryStudy() {
  const { certType = 'engineer', areaId = '' } = useParams()
  const certName = getCertName(certType)
  const area = getTheoryArea(areaId)
  const [activeChapter, setActiveChapter] = useState(0)
  const [hideAnswers, toggleHideAnswers] = useHideAnswers()
  const { isCompleted, markCompleted, isLoggedIn } = useStudyProgress(certType)

  useEffect(() => {
    setActiveChapter(0)
  }, [areaId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeChapter])

  if (!area) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>존재하지 않는 영역입니다</h2>
        <Link to={`/practical-exam/${certType}/theory`} className="btn btn-outline">실기 이론으로</Link>
      </div>
    )
  }

  const current = area.chapters[activeChapter]

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / <Link to={`/practical-exam/${certType}/theory`}>실기 이론</Link> / {area.name}
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className={area.icon}></i></div>
            <div><h1>{area.name}</h1></div>
          </div>
        </div>
      </div>

      <div className="lesson-layout">
        {/* 챕터 사이드바 */}
        <div className="lesson-sidebar">
          <div className="card" style={{ padding: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 12, padding: '0 8px' }}>챕터 목록</h3>
            {area.chapters.map((ch, idx) => (
              <div
                key={ch.id}
                className={`toc-item ${activeChapter === idx ? 'active' : ''}`}
                onClick={() => setActiveChapter(idx)}
              >
                <span className="toc-number">{idx + 1}</span>
                <span style={{ flex: 1 }}>{ch.name}</span>
                {isCompleted(area.id, ch.id) && (
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', fontSize: 13 }}></i>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="lesson-content">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>{activeChapter + 1}. {current.name}</h2>
              <span className="path-card-tag">{current.topics.length}개 토픽</span>
            </div>

            {/* 토픽 태그 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
              {current.topics.map(topic => (
                <span key={topic} className="topic-tag">{topic}</span>
              ))}
            </div>

            {/* 본문 */}
            <AnswerToggleButton hideAnswers={hideAnswers} onToggle={toggleHideAnswers} />
            <MarkdownContent content={current.content} hideAnswers={hideAnswers} />

            {/* 학습 완료 체크 */}
            {isLoggedIn && (
              <div style={{ marginTop: 24, textAlign: 'center' }}>
                {isCompleted(area.id, current.id) ? (
                  <span className="btn btn-outline" style={{ cursor: 'default', color: 'var(--success)' }}>
                    <i className="fa-solid fa-circle-check" style={{ marginRight: 6 }}></i>학습 완료됨
                  </span>
                ) : (
                  <button className="btn btn-accent" onClick={() => markCompleted(area.id, current.id)}>
                    이 챕터 학습 완료
                  </button>
                )}
              </div>
            )}

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
                disabled={activeChapter === area.chapters.length - 1}
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
