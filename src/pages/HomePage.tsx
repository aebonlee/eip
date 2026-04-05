import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function HomePage() {
  const { user } = useAuth()

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-particles">
          <div className="particle" style={{ width: 6, height: 6, top: '20%', left: '10%', '--duration': '15s', '--delay': '0s' } as React.CSSProperties} />
          <div className="particle" style={{ width: 4, height: 4, top: '60%', left: '80%', '--duration': '20s', '--delay': '5s' } as React.CSSProperties} />
          <div className="particle" style={{ width: 8, height: 8, top: '40%', left: '50%', '--duration': '18s', '--delay': '2s' } as React.CSSProperties} />
          <div className="particle" style={{ width: 5, height: 5, top: '80%', left: '30%', '--duration': '22s', '--delay': '8s' } as React.CSSProperties} />
          <div className="code-line" style={{ top: '15%', right: '5%', '--delay': '0s' } as React.CSSProperties}>SELECT * FROM subjects</div>
          <div className="code-line" style={{ top: '45%', right: '10%', '--delay': '5s' } as React.CSSProperties}>def solution(n):</div>
          <div className="code-line" style={{ top: '75%', right: '3%', '--delay': '10s' } as React.CSSProperties}>int main() {'{'} return 0; {'}'}</div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>2026 최신 기출 반영</span>
            </div>
            <h1 className="hero-title">
              <span className="highlight">정보처리</span> 자격증<br />
              종합 학습 플랫폼
            </h1>
            <p className="hero-description">
              정보처리기사 · 산업기사 · 프로그래밍기능사<br />
              필기/실기 이론학습부터 CBT 모의시험, 코딩실습까지 한 곳에서
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
