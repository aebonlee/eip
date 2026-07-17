import { Link, useParams } from 'react-router-dom'
import { theoryAreas } from '../../data/practical-theory'
import { getCertName } from '../../data/practical-exam-data'

export default function PracticalTheoryHome() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / 실기 이론
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-book"></i></div>
            <div>
              <h1>실기 이론</h1>
              <p>5개 영역의 핵심 이론을 정리했습니다. 실기 답안에 그대로 쓰는 용어 중심으로 학습하세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        <div className="card-grid">
          {theoryAreas.map(area => (
            <Link key={area.id} to={`/practical-exam/${certType}/theory/${area.id}`} className="card path-card">
              <div className="path-card-icon"><i className={area.icon}></i></div>
              <h3>{area.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8 }}>{area.description}</p>
              <span className="path-card-tag" style={{ marginTop: 12, display: 'inline-block' }}>
                {area.chapters.length}개 챕터
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
