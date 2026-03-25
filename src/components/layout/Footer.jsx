import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { path: '/written-exam', label: '필기시험' },
    { path: '/practical-exam', label: '실기시험' },
    { path: '/coding-lab', label: '코딩실습' },
    { path: '/lectures', label: '강의실' },
    { path: '/mypage', label: '마이페이지' },
    { path: '/login', label: '로그인' },
  ]

  const familySites = [
    { name: 'Python 학습센터', url: 'https://python-study.dreamitbiz.com' },
    { name: '큐넷 (Q-net)', url: 'https://www.q-net.or.kr' },
    { name: 'DreamIT Biz', url: 'https://dreamitbiz.com' },
  ]

  const handleFamilySite = (e) => {
    const url = e.target.value
    if (url) {
      window.open(url, '_blank', 'noopener')
      e.target.value = ''
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="brand-eip">EIP</span>
              <span className="brand-study"> 학습센터</span>
            </h3>
            <p>정보처리 자격증 종합 학습 플랫폼</p>
            <p className="footer-desc">
              정보처리기사, 산업기사, 프로그래밍기능사<br />
              필기/실기 학습부터 코딩실습까지
            </p>
            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>Family Site</option>
                {familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">바로가기</h4>
            <ul className="footer-quick-links">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">안내</h4>
            <ul className="footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:info@dreamitbiz.com">info@dreamitbiz.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>010-3700-0629</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>학습 목적으로 제작된 사이트입니다</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>한국산업인력공단과 무관합니다</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DreamIT. All rights reserved.</p>
          <p className="footer-meta">EIP 정보처리 학습센터 v1.1</p>
        </div>
      </div>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="맨 위로">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  )
}
