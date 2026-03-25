import { useParams, Link } from 'react-router-dom'
import { certTypes } from '../../data/written-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function SubjectList() {
  const { certType } = useParams()
  const cert = certTypes[certType]

  if (!cert) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">존재하지 않는 자격증입니다</h2>
        <Link to="/written-exam">
          <Button variant="outline">돌아가기</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <Link to="/written-exam" className="text-accent text-sm hover:underline">&larr; 자격증 선택으로</Link>
        <h1 className="text-3xl font-bold text-white mt-2 mb-2">{cert.name}</h1>
        <p className="text-slate-400">{cert.description}</p>
      </div>

      {/* 모의시험 바로가기 */}
      <Card className="mb-8 bg-gradient-to-r from-secondary/20 to-accent/10 border-secondary/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">CBT 모의시험</h2>
            <p className="text-sm text-slate-400">전 과목 랜덤 출제 모의시험을 풀어보세요</p>
          </div>
          <Link to={`/written-exam/${certType}/mock-test`}>
            <Button variant="accent">모의시험 시작</Button>
          </Link>
        </div>
      </Card>

      {/* 과목 목록 */}
      <h2 className="text-xl font-semibold text-white mb-4">과목별 학습</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cert.subjects.map((subject, index) => (
          <Link key={subject.id} to={`/written-exam/${certType}/${subject.id}/study`} className="no-underline">
            <Card hover>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-accent font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{subject.name}</h3>
                  <p className="text-sm text-slate-500">{subject.chapters}개 챕터</p>
                </div>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
