import { Link } from 'react-router-dom'

const certData = [
  {
    id: 'engineer',
    name: '정보처리기사',
    badge: '기사',
    badgeColor: '#306998',
    description: '국가기술자격 정보처리 분야 기사급 자격증',
    detail: '소프트웨어 설계, 개발, DB, 네트워크, 보안 등 IT 전반에 대한 전문 지식을 평가하는 자격증입니다.',
    subjects: ['소프트웨어 설계', '소프트웨어 개발', '데이터베이스 구축', '프로그래밍 언어 활용', '정보시스템 구축관리'],
    writtenInfo: { questions: 100, time: 150, pass: '과목당 40점 이상, 평균 60점 이상' },
    practicalInfo: { type: '필답형', time: 180, pass: '60점 이상' },
    path: '/written-exam/engineer',
  },
  {
    id: 'industrial',
    name: '정보처리산업기사',
    badge: '산업기사',
    badgeColor: '#2E7D32',
    description: '국가기술자격 정보처리 분야 산업기사급 자격증',
    detail: '정보시스템 개발 및 운영에 필요한 기초 지식을 평가하며, 실무 중심의 자격증입니다.',
    subjects: ['정보시스템 기반 기술', '프로그래밍 언어 활용', '데이터베이스 활용', '정보통신 활용'],
    writtenInfo: { questions: 80, time: 120, pass: '과목당 40점 이상, 평균 60점 이상' },
    practicalInfo: { type: '필답형', time: 150, pass: '60점 이상' },
    path: '/written-exam/industrial',
  },
  {
    id: 'functional',
    name: '프로그래밍기능사',
    badge: '기능사',
    badgeColor: '#E65100',
    description: '국가기술자격 프로그래밍 분야 기능사급 자격증',
    detail: '프로그래밍 기초, 알고리즘, 데이터베이스 등 IT 입문자를 위한 기초 자격증입니다.',
    subjects: ['정보처리와 컴퓨터 일반', '알고리즘', '데이터베이스'],
    writtenInfo: { questions: 60, time: 60, pass: '평균 60점 이상' },
    practicalInfo: { type: '작업형', time: 120, pass: '60점 이상' },
    path: '/written-exam/functional',
  },
]

export default function CertIntroPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1>자격증 소개</h1>
              <p>정보처리 분야 국가기술자격증 안내</p>
            </div>
          </div>
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <span>/</span>
            <span>자격증 소개</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* 개요 */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>
            정보처리 자격증 한눈에 보기
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>
            한국산업인력공단에서 시행하는 정보처리 분야 국가기술자격증을 소개합니다.
            <br />목표에 맞는 자격증을 선택하여 학습을 시작하세요.
          </p>
        </div>

        {/* 자격증 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {certData.map(cert => (
            <div key={cert.id} id={cert.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {/* 카드 헤더 */}
              <div style={{
                background: `linear-gradient(135deg, ${cert.badgeColor}, ${cert.badgeColor}dd)`,
                color: 'white',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: 20,
                    padding: '4px 14px',
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}>
                    {cert.badge}
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>{cert.name}</h3>
                  <p style={{ opacity: 0.9, marginTop: 4, fontSize: 14 }}>{cert.description}</p>
                </div>
                <Link
                  to={cert.path}
                  className="btn btn-primary"
                  style={{ background: 'white', color: cert.badgeColor, fontWeight: 700 }}
                >
                  학습 시작하기
                </Link>
              </div>

              {/* 카드 본문 */}
              <div style={{ padding: '24px 32px' }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
                  {cert.detail}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                  {/* 필기시험 정보 */}
                  <div style={{
                    background: 'var(--bg-light)',
                    borderRadius: 12,
                    padding: 20,
                  }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)', marginBottom: 12 }}>
                      필기시험
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>
                      <li style={{ marginBottom: 6 }}>문항수: {cert.writtenInfo.questions}문항</li>
                      <li style={{ marginBottom: 6 }}>시험시간: {cert.writtenInfo.time}분</li>
                      <li>합격기준: {cert.writtenInfo.pass}</li>
                    </ul>
                    <div style={{ marginTop: 12 }}>
                      <strong style={{ fontSize: 13, color: 'var(--text-primary)' }}>시험 과목</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                        {cert.subjects.map((s, i) => (
                          <span key={i} style={{
                            background: 'var(--bg-white)',
                            border: '1px solid var(--border-light)',
                            borderRadius: 6,
                            padding: '3px 10px',
                            fontSize: 12,
                            color: 'var(--text-secondary)',
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 실기시험 정보 */}
                  <div style={{
                    background: 'var(--bg-light)',
                    borderRadius: 12,
                    padding: 20,
                  }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)', marginBottom: 12 }}>
                      실기시험
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>
                      <li style={{ marginBottom: 6 }}>유형: {cert.practicalInfo.type}</li>
                      <li style={{ marginBottom: 6 }}>시험시간: {cert.practicalInfo.time}분</li>
                      <li>합격기준: {cert.practicalInfo.pass}</li>
                    </ul>
                    <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                      <Link to="/practical-exam/sql" style={{
                        fontSize: 13,
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}>
                        SQL 실습 &rarr;
                      </Link>
                      <Link to="/practical-exam/algorithm" style={{
                        fontSize: 13,
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}>
                        알고리즘 &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 시험 일정 안내 */}
        <div className="card" style={{ marginTop: 48, padding: 32, textAlign: 'center' }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>시험 일정 확인</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
            한국산업인력공단 큐넷(Q-net)에서 시험 일정 및 접수를 확인하세요.
          </p>
          <a
            href="https://www.q-net.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            큐넷 바로가기
          </a>
        </div>
      </div>
    </>
  )
}
