import { useParams, Link } from 'react-router-dom'
import { getLectureById, lectures } from '../../data/lectures-data'

export default function LecturePlayer() {
  const { id } = useParams()
  const lecture = getLectureById(id)

  if (!lecture) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>강의를 찾을 수 없습니다</h2>
        <Link to="/lectures" className="btn btn-outline">강의 목록으로</Link>
      </div>
    )
  }

  const relatedLectures = lectures
    .filter(l => l.category === lecture.category && l.id !== lecture.id)
    .slice(0, 3)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/lectures">강의실</Link> / {lecture.title}
          </div>
        </div>
      </div>

      <div className="player-layout">
        {/* 메인 플레이어 */}
        <div>
          <div className="player-video">
            <iframe
              src={`https://www.youtube.com/embed/${lecture.youtubeId}`}
              title={lecture.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="player-info">
            <h1>{lecture.title}</h1>
            <div className="player-meta">
              <span>{lecture.instructor}</span>
              <span>{lecture.duration}</span>
              <span>{lecture.views?.toLocaleString()}회</span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{lecture.description}</p>

            <div className="player-tags">
              {lecture.tags.map(tag => (
                <span key={tag} className="player-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 관련 강의 */}
        <div>
          <h2 className="related-title">관련 강의</h2>
          <div>
            {relatedLectures.map(rel => (
              <Link key={rel.id} to={`/lectures/${rel.id}`} className="related-card">
                <div className="related-thumb">
                  <img
                    src={`https://img.youtube.com/vi/${rel.youtubeId}/default.jpg`}
                    alt={rel.title}
                  />
                </div>
                <div className="related-info">
                  <h4>{rel.title}</h4>
                  <span>{rel.duration}</span>
                </div>
              </Link>
            ))}

            {relatedLectures.length === 0 && (
              <p style={{ fontSize: 14, color: 'var(--text-light)' }}>관련 강의가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
