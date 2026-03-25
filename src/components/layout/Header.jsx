import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { path: '/', label: '홈', icon: '🏠' },
  { path: '/written-exam', label: '필기시험', icon: '📝' },
  { path: '/practical-exam', label: '실기시험', icon: '💻' },
  { path: '/coding-lab', label: '코딩실습', icon: '⌨️' },
  { path: '/lectures', label: '강의실', icon: '🎓' },
]

export default function Header() {
  const { user, profile, signOut } = useAuth()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary border-b border-primary-lighter sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">EIP</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">정보처리 학습센터</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? 'bg-secondary text-white'
                    : 'text-slate-400 hover:text-white hover:bg-primary-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/mypage" className="flex items-center gap-2 no-underline text-slate-300 hover:text-white transition-colors">
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="" className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold">
                      {profile?.nickname?.[0] || '?'}
                    </div>
                  )}
                  <span className="text-sm hidden sm:block">{profile?.nickname}</span>
                </Link>
                <button
                  onClick={signOut}
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline"
              >
                로그인
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-400 hover:text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-primary-lighter">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? 'bg-secondary text-white'
                    : 'text-slate-400 hover:text-white hover:bg-primary-light'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
