import { Link } from 'react-router-dom'

export default function CommunityPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-inner">
            <div className="page-header-icon">
              <i className="fa-solid fa-users"></i>
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
            <i className="fa-solid fa-comments" style={{ fontSize: 36, color: 'var(--primary)' }}></i>
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
              { icon: 'fa-solid fa-comments', title: '질문 & 답변', desc: '학습 중 궁금한 점을 질문하세요', color: '#3B82F6' },
              { icon: 'fa-solid fa-clipboard-check', title: '시험 후기', desc: '시험 경험과 팁을 공유하세요', color: '#10B981' },
              { icon: 'fa-solid fa-users', title: '스터디 모집', desc: '함께 공부할 동료를 찾아보세요', color: '#F59E0B' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <i className={item.icon} style={{ fontSize: 24, color: 'white' }}></i>
                </div>
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
