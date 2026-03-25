import { Link, useParams } from 'react-router-dom'
import { getCertName, getSQLQuestions, getAlgorithmQuestions, getShortAnswerQuestions } from '../../data/practical-exam-data'

export default function PracticalExamHome() {
  const { certType = 'engineer' } = useParams()
  const certName = getCertName(certType)

  const sqlCount = getSQLQuestions(certType).length
  const algoCount = getAlgorithmQuestions(certType).length
  const shortCount = getShortAnswerQuestions(certType).length

  const practicalSections = [
    {
      path: `/practical-exam/${certType}/sql`,
      title: 'SQL 실습',
      description: 'SELECT, JOIN, GROUP BY 등 SQL 구문 연습',
      icon: '\u{1F5C3}\uFE0F',
      color: 'rgba(75, 139, 190, 0.12)',
      count: `${sqlCount}문제`,
    },
    {
      path: `/practical-exam/${certType}/algorithm`,
      title: '알고리즘 실습',
      description: '정렬, 탐색, 자료구조 등 알고리즘 문제',
      icon: '\u{1F9EE}',
      color: 'rgba(16, 185, 129, 0.12)',
      count: `${algoCount}문제`,
    },
    {
      path: `/practical-exam/${certType}/short-answer`,
      title: '단답형 연습',
      description: '핵심 개념 단답형 문제 풀이',
      icon: '\u270F\uFE0F',
      color: 'rgba(245, 158, 11, 0.12)',
      count: `${shortCount}문제`,
    },
  ]

  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon">{'\u{1F4BB}'}</div>
          <div>
            <h1>{certName} 실기시험 학습</h1>
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
