import { useParams, Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'

export default function SubjectList() {
  const { certType } = useParams()
  const cert = certTypes[certType]

  if (!cert) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>존재하지 않는 자격증입니다</h2>
        <Link to="/written-exam" className="btn btn-outline">돌아가기</Link>
      </div>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/written-exam">필기시험</Link> / {cert.name}
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon">📝</div>
            <div>
              <h1>{cert.name}</h1>
              <p>{cert.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* 모의시험 바로가기 */}
        <div className="mock-test-banner">
          <div>
            <h2>CBT 모의시험</h2>
            <p>전 과목 랜덤 출제 모의시험을 풀어보세요</p>
          </div>
          <Link to={`/written-exam/${certType}/mock-test`} className="btn btn-accent">
            모의시험 시작
          </Link>
        </div>

        {/* 과목 목록 */}
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>과목별 학습</h2>
        <div className="subject-grid">
          {cert.subjects.map((subject, index) => (
            <Link key={subject.id} to={`/written-exam/${certType}/${subject.id}/study`} className="subject-card">
              <div className="subject-number">{index + 1}</div>
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <p>{subject.chapters}개 챕터</p>
              </div>
              <span className="subject-arrow">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
