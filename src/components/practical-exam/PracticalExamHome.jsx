import { Link } from 'react-router-dom'

const practicalSections = [
  {
    path: '/practical-exam/sql',
    title: 'SQL 실습',
    description: 'SELECT, JOIN, GROUP BY 등 SQL 구문 연습',
    icon: '🗃️',
    color: 'rgba(75, 139, 190, 0.12)',
    count: '6문제',
  },
  {
    path: '/practical-exam/algorithm',
    title: '알고리즘 실습',
    description: '정렬, 탐색, 자료구조 등 알고리즘 문제',
    icon: '🧮',
    color: 'rgba(16, 185, 129, 0.12)',
    count: '5문제',
  },
  {
    path: '/practical-exam/short-answer',
    title: '단답형 연습',
    description: '핵심 개념 단답형 문제 풀이',
    icon: '✏️',
    color: 'rgba(245, 158, 11, 0.12)',
    count: '10문제',
  },
]

export default function PracticalExamHome() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon">💻</div>
          <div>
            <h1>실기시험 학습</h1>
            <p>SQL, 알고리즘, 단답형 문제를 풀며 실기시험에 대비하세요</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        <div className="practical-grid">
          {practicalSections.map(section => (
            <Link key={section.path} to={section.path} className="practical-card">
              <div className="practical-card-icon" style={{ background: section.color }}>
                {section.icon}
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{section.title}</h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>{section.description}</p>
              <span className="path-card-tag">{section.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
