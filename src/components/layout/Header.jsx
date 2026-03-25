import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const megaMenuData = [
  {
    label: '자격증 소개',
    path: '/cert-intro',
    submenu: [
      { label: '자격증 개요', path: '/cert-intro', desc: '정보처리 자격증 종류와 안내' },
      { label: '정보처리기사', path: '/cert-intro#engineer', desc: '기사급 자격증 소개' },
      { label: '정보처리산업기사', path: '/cert-intro#industrial', desc: '산업기사급 자격증 소개' },
      { label: '프로그래밍기능사', path: '/cert-intro#functional', desc: '기능사급 자격증 소개' },
    ],
  },
  {
    label: '정보처리기사',
    sections: [
      {
        title: '필기시험',
        items: [
          { label: '과목 목록', path: '/written-exam/engineer' },
          { label: '소프트웨어 설계', path: '/written-exam/engineer/sw-design/study' },
          { label: '소프트웨어 개발', path: '/written-exam/engineer/sw-dev/study' },
          { label: '데이터베이스 구축', path: '/written-exam/engineer/db/study' },
          { label: '프로그래밍 언어 활용', path: '/written-exam/engineer/sys-integration/study' },
          { label: '정보시스템 구축관리', path: '/written-exam/engineer/info-security/study' },
          { label: '모의시험', path: '/written-exam/engineer/mock-test', highlight: true },
        ],
      },
      {
        title: '실기시험',
        items: [
          { label: 'SQL 실습', path: '/practical-exam/sql' },
          { label: '알고리즘', path: '/practical-exam/algorithm' },
          { label: '단답형 연습', path: '/practical-exam/short-answer' },
        ],
      },
      {
        title: '코딩실습',
        items: [
          { label: 'C언어', path: '/coding-lab/c' },
          { label: 'Java', path: '/coding-lab/java' },
          { label: 'Python', path: '/coding-lab/python' },
        ],
      },
      {
        title: '강의실',
        items: [
          { label: '전체 강의', path: '/lectures' },
        ],
      },
    ],
  },
  {
    label: '정보처리산업기사',
    sections: [
      {
        title: '필기시험',
        items: [
          { label: '과목 목록', path: '/written-exam/industrial' },
          { label: '정보시스템 기반 기술', path: '/written-exam/industrial/info-sys/study' },
          { label: '프로그래밍 언어 활용', path: '/written-exam/industrial/programming/study' },
          { label: '데이터베이스 활용', path: '/written-exam/industrial/db/study' },
          { label: '정보통신 활용', path: '/written-exam/industrial/info-comm/study' },
          { label: '모의시험', path: '/written-exam/industrial/mock-test', highlight: true },
        ],
      },
      {
        title: '실기시험',
        items: [
          { label: 'SQL 실습', path: '/practical-exam/sql' },
          { label: '알고리즘', path: '/practical-exam/algorithm' },
          { label: '단답형 연습', path: '/practical-exam/short-answer' },
        ],
      },
      {
        title: '코딩실습',
        items: [
          { label: 'C언어', path: '/coding-lab/c' },
          { label: 'Java', path: '/coding-lab/java' },
          { label: 'Python', path: '/coding-lab/python' },
        ],
      },
      {
        title: '강의실',
        items: [
          { label: '전체 강의', path: '/lectures' },
        ],
      },
    ],
  },
  {
    label: '프로그래밍기능사',
    sections: [
      {
        title: '필기시험',
        items: [
          { label: '과목 목록', path: '/written-exam/functional' },
          { label: '정보처리와 컴퓨터 일반', path: '/written-exam/functional/programming-basic/study' },
          { label: '알고리즘', path: '/written-exam/functional/algorithm/study' },
          { label: '데이터베이스', path: '/written-exam/functional/db-basic/study' },
          { label: '모의시험', path: '/written-exam/functional/mock-test', highlight: true },
        ],
      },
      {
        title: '실기시험',
        items: [
          { label: 'SQL 실습', path: '/practical-exam/sql' },
          { label: '알고리즘', path: '/practical-exam/algorithm' },
          { label: '단답형 연습', path: '/practical-exam/short-answer' },
        ],
      },
      {
        title: '코딩실습',
        items: [
          { label: 'C언어', path: '/coding-lab/c' },
          { label: 'Java', path: '/coding-lab/java' },
          { label: 'Python', path: '/coding-lab/python' },
        ],
      },
      {
        title: '강의실',
        items: [
          { label: '전체 강의', path: '/lectures' },
        ],
      },
    ],
  },
  {
    label: '커뮤니티',
    path: '/community',
  },
]

export default function Header() {
  const { user, profile, signOut } = useAuth()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const userMenuRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
    setMobileExpanded(null)
  }, [location.pathname])

  const isActive = (menuItem) => {
    if (menuItem.path) {
      return location.pathname.startsWith(menuItem.path.split('#')[0])
    }
    if (menuItem.sections) {
      return menuItem.sections.some(s =>
        s.items.some(item => location.pathname.startsWith(item.path))
      )
    }
    if (menuItem.submenu) {
      return menuItem.submenu.some(item => location.pathname.startsWith(item.path.split('#')[0]))
    }
    return false
  }

  const handleMenuEnter = (idx) => {
    setActiveMenu(idx)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  const toggleMobileSubmenu = (idx) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container nav-wrapper">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">EIP</div>
          <h1>
            <span className="brand-eip">EIP</span>
            <span className="brand-study"> 학습</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          {megaMenuData.map((menu, idx) => {
            const hasDropdown = menu.submenu || menu.sections
            return (
              <div
                key={idx}
                className="nav-item"
                onMouseEnter={() => hasDropdown && handleMenuEnter(idx)}
                onMouseLeave={handleMenuLeave}
              >
                {/* Top-level link */}
                {menu.path && !hasDropdown ? (
                  <Link
                    to={menu.path}
                    className={`nav-link ${isActive(menu) ? 'active' : ''}`}
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <button
                    className={`nav-link nav-link-btn ${isActive(menu) ? 'active' : ''}`}
                    onClick={() => toggleMobileSubmenu(idx)}
                  >
                    {menu.label}
                    {hasDropdown && (
                      <svg className={`nav-chevron ${activeMenu === idx || mobileExpanded === idx ? 'open' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </button>
                )}

                {/* Dropdown - simple submenu */}
                {menu.submenu && (
                  <div className={`nav-dropdown nav-dropdown-simple ${activeMenu === idx ? 'show' : ''} ${mobileExpanded === idx ? 'mobile-show' : ''}`}>
                    {menu.submenu.map((item, i) => (
                      <Link key={i} to={item.path} className="nav-dropdown-item">
                        <span className="nav-dropdown-item-label">{item.label}</span>
                        {item.desc && <span className="nav-dropdown-item-desc">{item.desc}</span>}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mega dropdown - sections */}
                {menu.sections && (
                  <div className={`nav-dropdown nav-mega ${activeMenu === idx ? 'show' : ''} ${mobileExpanded === idx ? 'mobile-show' : ''}`}>
                    <div className="nav-mega-grid">
                      {menu.sections.map((section, si) => (
                        <div key={si} className="nav-mega-section">
                          <div className="nav-mega-title">{section.title}</div>
                          <ul className="nav-mega-list">
                            {section.items.map((item, ii) => (
                              <li key={ii}>
                                <Link
                                  to={item.path}
                                  className={`nav-mega-link ${item.highlight ? 'highlight' : ''}`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          {user ? (
            <div className="nav-user-menu" ref={userMenuRef}>
              <button
                className="nav-user-trigger"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="nav-user-avatar" />
                ) : (
                  <div className="nav-user-avatar-placeholder">
                    {profile?.nickname?.[0] || '?'}
                  </div>
                )}
              </button>

              <div className={`nav-user-balloon ${userMenuOpen ? 'active' : ''}`}>
                <div className="nav-balloon-arrow" />
                <div className="nav-user-info">
                  <div className="nav-user-name">{profile?.nickname}</div>
                  <div className="nav-user-email">{user.email}</div>
                </div>
                <div className="nav-balloon-links">
                  <Link to="/mypage">마이페이지</Link>
                </div>
                <button className="nav-balloon-logout" onClick={signOut}>
                  로그아웃
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="nav-login-btn">로그인</Link>
          )}

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
