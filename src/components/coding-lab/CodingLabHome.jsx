import { Link } from 'react-router-dom'
import { languages } from '../../data/coding-exercises'

const langColors = {
  c: 'rgba(30, 64, 175, 0.12)',
  java: 'rgba(234, 88, 12, 0.12)',
  python: 'rgba(16, 185, 129, 0.12)',
}

const langDesc = {
  c: '포인터, 배열, 구조체 등 C언어 실습',
  java: '클래스, 상속, 컬렉션 등 Java 실습',
  python: '리스트, 딕셔너리, 문자열 등 Python 실습',
}

export default function CodingLabHome() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon">⌨️</div>
          <div>
            <h1>코딩 실습</h1>
            <p>온라인 코드 에디터로 C, Java, Python 프로그래밍을 연습하세요</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        <div className="lang-grid">
          {Object.values(languages).map(lang => (
            <Link key={lang.id} to={`/coding-lab/${lang.id}`} className="lang-card">
              <div className="lang-card-icon" style={{ background: langColors[lang.id] || 'var(--bg-light)', color: 'var(--primary)' }}>
                {lang.icon}
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{lang.name}</h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{langDesc[lang.id]}</p>
            </Link>
          ))}
        </div>

        <div className="info-notice" style={{ marginTop: 32 }}>
          <div className="info-notice-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3>코딩 실습 안내</h3>
            <p>
              Monaco Editor 기반의 온라인 코드 에디터를 제공합니다.
              코드를 작성하고 실행 버튼을 눌러 결과를 확인하세요.
              Judge0 API를 통해 서버에서 코드가 실행됩니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
