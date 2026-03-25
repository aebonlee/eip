import { Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'

const certIcons = { engineer: '🎓', industrial: '🏭', functional: '⌨️' }
const certColors = {
  engineer: 'rgba(75, 139, 190, 0.12)',
  industrial: 'rgba(48, 105, 152, 0.12)',
  functional: 'rgba(30, 79, 114, 0.12)',
}

export default function WrittenExamHome() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon">📝</div>
          <div>
            <h1>필기시험 학습</h1>
            <p>자격증을 선택하고 과목별 이론 학습과 CBT 모의시험을 시작하세요</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        <div className="cert-grid">
          {Object.values(certTypes).map(cert => (
            <Link key={cert.id} to={`/written-exam/${cert.id}`} className="cert-card">
              <div className="cert-card-icon" style={{ background: certColors[cert.id] }}>
                {certIcons[cert.id]}
              </div>
              <h2>{cert.name}</h2>
              <p>{cert.description}</p>
              <div className="path-card-meta">
                <span className="path-card-tag">{cert.subjects.length}과목</span>
                <span className="path-card-tag">CBT 모의시험</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
