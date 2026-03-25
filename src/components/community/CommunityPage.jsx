import { Link } from 'react-router-dom'

export default function CommunityPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h1>커뮤니티</h1>
              <p>함께 공부하고 정보를 나눠요</p>
            </div>
          </div>
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <span>/</span>
            <span>커뮤니티</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* 준비 중 안내 */}
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{
            width: 80,
            height: 80,
            background: 'var(--bg-light)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg width="40" height="40" fill="none" stroke="var(--primary)" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>
            커뮤니티 준비 중입니다
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
            학습 질문, 시험 후기, 스터디 모집 등<br />
            다양한 정보를 나눌 수 있는 커뮤니티가 곧 오픈됩니다.
          </p>

          {/* 예정 기능 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            maxWidth: 700,
            margin: '0 auto',
          }}>
            {[
              { icon: '💬', title: '질문 & 답변', desc: '학습 중 궁금한 점을 질문하세요' },
              { icon: '📝', title: '시험 후기', desc: '시험 경험과 팁을 공유하세요' },
              { icon: '👥', title: '스터디 모집', desc: '함께 공부할 동료를 찾아보세요' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-light)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
          </div>
        </div>
      </div>
    </>
  )
}
