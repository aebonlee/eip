import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { certTypes, chapters } from '../../data/written-exam-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function ChapterStudy() {
  const { certType, subjectId } = useParams()
  const cert = certTypes[certType]
  const subject = cert?.subjects.find(s => s.id === subjectId)
  const chapterList = chapters[subjectId] || []
  const [activeChapter, setActiveChapter] = useState(0)

  if (!cert || !subject) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">존재하지 않는 과목입니다</h2>
        <Link to="/written-exam">
          <Button variant="outline">돌아가기</Button>
        </Link>
      </div>
    )
  }

  if (chapterList.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">{subject.name}</h2>
        <p className="text-slate-400 mb-6">해당 과목의 학습 콘텐츠가 준비 중입니다.</p>
        <Link to={`/written-exam/${certType}`}>
          <Button variant="outline">과목 목록으로</Button>
        </Link>
      </div>
    )
  }

  const current = chapterList[activeChapter]

  return (
    <div>
      <div className="mb-6">
        <Link to={`/written-exam/${certType}`} className="text-accent text-sm hover:underline">
          &larr; {cert.name} 과목 목록으로
        </Link>
        <h1 className="text-2xl font-bold text-white mt-2">{subject.name}</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 챕터 사이드바 */}
        <div className="lg:w-64 flex-shrink-0">
          <Card className="p-3">
            <h3 className="text-sm font-semibold text-slate-400 uppercase mb-3 px-2">챕터 목록</h3>
            <ul className="space-y-1 list-none p-0 m-0">
              {chapterList.map((ch, idx) => (
                <li key={ch.id}>
                  <button
                    onClick={() => setActiveChapter(idx)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                      activeChapter === idx
                        ? 'bg-secondary/20 text-accent'
                        : 'text-slate-400 hover:text-white hover:bg-primary-lighter'
                    }`}
                  >
                    {idx + 1}. {ch.name}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 min-w-0">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {activeChapter + 1}. {current.name}
              </h2>
              <span className="text-xs text-slate-500 bg-primary-lighter px-2 py-1 rounded">
                {current.topics?.length || 0}개 토픽
              </span>
            </div>

            {/* 토픽 태그 */}
            {current.topics && (
              <div className="flex flex-wrap gap-2 mb-6">
                {current.topics.map(topic => (
                  <span key={topic} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* 본문 */}
            <div className="prose prose-invert max-w-none">
              {current.content?.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-lg font-semibold text-accent mt-4 mb-2">{line.replace('### ', '')}</h3>
                }
                if (line.startsWith('- **')) {
                  const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/)
                  if (match) {
                    return (
                      <p key={i} className="text-slate-300 ml-4 mb-1">
                        <span className="text-white font-semibold">{match[1]}</span>
                        {match[2] && `: ${match[2]}`}
                      </p>
                    )
                  }
                }
                if (line.startsWith('- ')) {
                  return <p key={i} className="text-slate-300 ml-4 mb-1">• {line.replace('- ', '')}</p>
                }
                if (line.trim() === '') return <div key={i} className="h-2" />
                return <p key={i} className="text-slate-300 mb-2">{line}</p>
              })}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-between mt-8 pt-6 border-t border-primary-lighter">
              <Button
                variant="outline"
                size="sm"
                disabled={activeChapter === 0}
                onClick={() => setActiveChapter(prev => prev - 1)}
              >
                &larr; 이전 챕터
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={activeChapter === chapterList.length - 1}
                onClick={() => setActiveChapter(prev => prev + 1)}
              >
                다음 챕터 &rarr;
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
