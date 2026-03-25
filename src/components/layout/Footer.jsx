import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleFamilySite = (e) => {
    const url = e.target.value
    if (url) window.open(url, '_blank')
    e.target.value = ''
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-logo">
                <span className="brand-eip">EIP</span>
                <span className="brand-study"> 학습센터</span>
              </div>
              <p className="footer-desc">
                정보처리기사, 산업기사, 프로그래밍기능사<br />
                필기/실기 종합 학습 플랫폼
              </p>
              <div className="footer-family">
                <select onChange={handleFamilySite} defaultValue="">
                  <option value="" disabled>패밀리 사이트</option>
                  <option value="https://python-study.dreamitbiz.com">Python 학습센터</option>
                  <option value="https://www.q-net.or.kr">큐넷 (Q-net)</option>
                </select>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>바로가기</h4>
              <div className="footer-quick-links">
                <a href="/written-exam">필기시험</a>
                <a href="/practical-exam">실기시험</a>
                <a href="/coding-lab">코딩실습</a>
                <a href="/lectures">강의실</a>
                <a href="/mypage">마이페이지</a>
                <a href="/login">로그인</a>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>안내</h4>
              <ul className="footer-contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@dreamitbiz.com">info@dreamitbiz.com</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  학습 목적으로 제작된 사이트입니다
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  한국산업인력공단과 무관합니다
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; 2026 DreamIT. All rights reserved.</span>
            <span className="footer-meta">EIP 정보처리 학습센터 v1.0</span>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="맨 위로"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}
