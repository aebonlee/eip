import { Link, useParams } from 'react-router-dom'
import { codingAreas } from '../../data/coding-theory'
import { getCertName } from '../../data/practical-exam-data'

export default function CodingTheoryHome() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to={`/practical-exam/${certType}`}>{certName} 실기시험</Link> / 코딩 이론
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-laptop-code"></i></div>
            <div>
              <h1>코딩 이론</h1>
              <p>공통 기초부터 C·Java·Python·SQL까지, 코드 읽기 문제를 풀기 위한 언어별 개념을 정리했습니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        <div className="card-grid">
          {codingAreas.map(area => (
            <Link key={area.id} to={`/practical-exam/${certType}/coding-theory/${area.id}`} className="card path-card">
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
