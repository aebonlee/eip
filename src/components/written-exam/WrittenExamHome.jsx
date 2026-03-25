import { Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'
import Card from '../ui/Card'

const certColors = {
  engineer: 'from-blue-500 to-blue-700',
  industrial: 'from-emerald-500 to-emerald-700',
  functional: 'from-purple-500 to-purple-700',
}

const certIcons = {
  engineer: '🎓',
  industrial: '🏭',
  functional: '⌨️',
}

export default function WrittenExamHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">필기시험 학습</h1>
        <p className="text-slate-400">자격증을 선택하고 과목별 이론 학습과 CBT 모의시험을 시작하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(certTypes).map(cert => (
          <Link key={cert.id} to={`/written-exam/${cert.id}`} className="no-underline">
            <Card hover className="h-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${certColors[cert.id]} flex items-center justify-center text-3xl mb-4`}>
                {certIcons[cert.id]}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{cert.name}</h2>
              <p className="text-sm text-slate-400 mb-4">{cert.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="bg-primary-lighter px-2 py-1 rounded">{cert.subjects.length}과목</span>
                <span className="bg-primary-lighter px-2 py-1 rounded">CBT 모의시험</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
