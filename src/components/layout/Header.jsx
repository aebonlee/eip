import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { path: '/', label: '홈' },
  { path: '/written-exam', label: '필기시험' },
  { path: '/practical-exam', label: '실기시험' },
  { path: '/coding-lab', label: '코딩실습' },
  { path: '/lectures', label: '강의실' },
]

export default function Header() {
  const { user, profile, signOut } = useAuth()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const userMenuRef = useRef(null)

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
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
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
