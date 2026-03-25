import { useParams, Link } from 'react-router-dom'
import { getLectureById, lectures } from '../../data/lectures-data'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function LecturePlayer() {
  const { id } = useParams()
  const lecture = getLectureById(id)

  if (!lecture) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">강의를 찾을 수 없습니다</h2>
        <Link to="/lectures"><Button variant="outline">강의 목록으로</Button></Link>
      </div>
    )
  }

  const relatedLectures = lectures
    .filter(l => l.category === lecture.category && l.id !== lecture.id)
    .slice(0, 3)

  return (
    <div>
      <Link to="/lectures" className="text-accent text-sm hover:underline">&larr; 강의 목록으로</Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* 메인 플레이어 */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${lecture.youtubeId}`}
              title={lecture.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <Card>
            <h1 className="text-xl font-bold text-white mb-2">{lecture.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span>{lecture.instructor}</span>
              <span>{lecture.duration}</span>
              <span>{lecture.views?.toLocaleString()}회</span>
            </div>
            <p className="text-slate-300">{lecture.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {lecture.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-primary-lighter text-slate-400 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* 관련 강의 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">관련 강의</h2>
          <div className="space-y-3">
            {relatedLectures.map(rel => (
              <Link key={rel.id} to={`/lectures/${rel.id}`} className="no-underline">
                <Card hover className="p-3">
                  <div className="flex gap-3">
                    <div className="w-28 flex-shrink-0 aspect-video bg-primary-lighter rounded overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${rel.youtubeId}/default.jpg`}
                        alt={rel.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium line-clamp-2">{rel.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{rel.duration}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {relatedLectures.length === 0 && (
              <p className="text-sm text-slate-500">관련 강의가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
