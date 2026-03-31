import { Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'

const certIcons = { engineer: 'fa-solid fa-user-graduate', industrial: 'fa-solid fa-industry', functional: 'fa-solid fa-keyboard' }
const certColors = {
  engineer: '#3B82F6',
  industrial: '#2563EB',
  functional: '#1D4ED8',
}

export default function WrittenExamHome() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon"><i className="fa-solid fa-file-pen"></i></div>
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
              <div className="cert-card-icon" style={{ background: certColors[cert.id], borderRadius: 12 }}>
                <i className={certIcons[cert.id]} style={{ color: 'white' }}></i>
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
