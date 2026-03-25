import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const practicalSections = [
  {
    path: '/practical-exam/sql',
    title: 'SQL 실습',
    description: 'SELECT, JOIN, GROUP BY 등 SQL 구문 연습',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    count: '6문제',
  },
  {
    path: '/practical-exam/algorithm',
    title: '알고리즘 실습',
    description: '정렬, 탐색, 자료구조 등 알고리즘 문제',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    count: '5문제',
  },
  {
    path: '/practical-exam/short-answer',
    title: '단답형 연습',
    description: '핵심 개념 단답형 문제 풀이',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
    count: '10문제',
  },
]

export default function PracticalExamHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">실기시험 학습</h1>
        <p className="text-slate-400">SQL, 알고리즘, 단답형 문제를 풀며 실기시험에 대비하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {practicalSections.map(section => (
          <Link key={section.path} to={section.path} className="no-underline">
            <Card hover className="h-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white mb-4`}>
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
              <p className="text-sm text-slate-400 mb-4">{section.description}</p>
              <span className="text-xs bg-primary-lighter text-slate-400 px-2 py-1 rounded">{section.count}</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
