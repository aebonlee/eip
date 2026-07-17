import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function HomePage() {
  const { user } = useAuth()

  return (
    <>
      {/* Hero Section — 좌측 카피 + 우측 청사진 아트 */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-eyeline">INFORMATION PROCESSING &middot; 2026 최신 출제기준</p>
              <h1 className="hero-title">
                정보처리 자격증,<br />
                <span className="marker">합격까지 한 곳에서</span>
              </h1>
              <p className="hero-description">
                정보처리기사 · 산업기사 · 프로그래밍기능사<br />
                필기 이론과 CBT 모의시험, 실기 이론 · 코드 결과 예측 · 코딩 실습까지
              </p>
              <div className="hero-buttons">
                {user ? (
                  <Link to="/written-exam" className="btn btn-primary btn-lg">학습 시작하기</Link>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-primary btn-lg">무료로 시작하기</Link>
                    <Link to="/written-exam" className="btn btn-secondary btn-lg">둘러보기</Link>
                  </>
                )}
              </div>
            </div>

            <div className="hero-art" aria-hidden>
              {/* 팔레트 색으로만 그린 SVG — 청사진 모눈 위 코드 괄호와 상승 체크 곡선 */}
              <svg viewBox="0 0 400 400" className="hero-svg">
                <defs>
                  <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.10" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="172" fill="url(#heroWash)" />
                {/* 모눈 (blueprint grid) */}
                <g stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={'h' + i} x1="40" y1={60 + i * 35} x2="360" y2={60 + i * 35} />
                  ))}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={'v' + i} x1={60 + i * 35} y1="40" x2={60 + i * 35} y2="360" />
                  ))}
                </g>
                {/* 코드 괄호 */}
                <g stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <polyline points="130,140 90,200 130,260" />
                  <polyline points="270,140 310,200 270,260" />
                </g>
                {/* 상승 곡선 + 합격 체크 */}
                <path d="M140 290 C 175 275, 195 235, 215 195" fill="none"
                  stroke="var(--accent, #FFD43B)" strokeWidth="7" strokeLinecap="round" />
                <path d="M215 195 L 237 218 L 285 150" fill="none"
                  stroke="var(--accent, #FFD43B)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="140" cy="290" r="8" fill="var(--accent, #FFD43B)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '50+', label: '이론 챕터' },
              { number: '500+', label: 'CBT 문제' },
              { number: '30+', label: '코딩 실습' },
              { number: '20+', label: '영상 강의' },
            ].map(stat => (
              <div key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">학습 메뉴</h2>
          <p className="section-subtitle">다양한 학습 도구로 효율적으로 공부하세요</p>
          <div className="features-grid">
            {[
              { icon: 'fa-solid fa-file-pen', title: '필기시험 학습', desc: '과목별 이론 정리와 CBT 모의시험으로 필기시험 완벽 대비', color: '#3B82F6' },
              { icon: 'fa-solid fa-laptop-code', title: '실기시험 학습', desc: 'SQL, 알고리즘, 단답형 문제로 실기시험 실전 연습', color: '#10B981' },
              { icon: 'fa-solid fa-code', title: '코딩 실습', desc: 'C, Java, Python 온라인 코드 에디터로 직접 코딩', color: '#06B6D4' },
              { icon: 'fa-solid fa-graduation-cap', title: '온라인 강의', desc: '유튜브 강의를 카테고리별로 정리하여 제공', color: '#D97706' },
            ].map(f => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon" style={{ background: f.color, borderRadius: 12 }}>
                  <i className={f.icon}></i>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path Section */}
      <section className="path-section">
        <div className="container">
          <h2 className="section-title">자격증별 학습 경로</h2>
          <p className="section-subtitle">목표 자격증을 선택하고 체계적으로 학습하세요</p>
          <div className="path-grid">
            {[
              { title: '정보처리기사', desc: '4년제 졸업자 또는 관련 경력자를 위한 국가기술자격', tags: ['5과목', '필기+실기'], path: '/written-exam', icon: 'fa-solid fa-user-graduate', color: '#3B82F6' },
              { title: '정보처리산업기사', desc: '전문대 졸업자 또는 관련 경력자를 위한 산업기사', tags: ['4과목', '필기+실기'], path: '/written-exam', icon: 'fa-solid fa-industry', color: '#2563EB' },
              { title: '프로그래밍기능사', desc: '프로그래밍 기초를 위한 기능사 자격증', tags: ['필기', '실기(코딩)'], path: '/coding-lab', icon: 'fa-solid fa-keyboard', color: '#1D4ED8' },
            ].map(p => (
              <Link to={p.path} className="path-card" key={p.title}>
                <div className="path-card-icon" style={{ background: p.color, borderRadius: 12 }}>
                  <i className={p.icon} style={{ color: 'white' }}></i>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="path-card-meta">
                  {p.tags.map(tag => (
                    <span className="path-card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>지금 바로 학습을 시작하세요</h2>
            <p>무료로 가입하고 정보처리 자격증 합격의 길을 걸어보세요</p>
            {user ? (
              <Link to="/written-exam" className="btn btn-primary btn-lg">학습하러 가기</Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-lg">무료 가입하기</Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
