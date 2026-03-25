import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lectureCategories, lectures } from '../../data/lectures-data'
import Card from '../ui/Card'

export default function LecturesHome() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredLectures = activeCategory === 'all'
    ? lectures
    : lectures.filter(l => l.category === activeCategory)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">온라인 강의실</h1>
        <p className="text-slate-400">유튜브 강의를 카테고리별로 모아 학습하세요.</p>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-accent text-primary'
              : 'bg-primary-lighter text-slate-400 hover:text-white'
          }`}
        >
          전체
        </button>
        {lectureCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-accent text-primary'
                : 'bg-primary-lighter text-slate-400 hover:text-white'
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* 강의 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLectures.map(lecture => (
          <Link key={lecture.id} to={`/lectures/${lecture.id}`} className="no-underline">
            <Card hover className="h-full">
              {/* 썸네일 */}
              <div className="relative bg-primary-lighter rounded-lg overflow-hidden mb-4 aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${lecture.youtubeId}/mqdefault.jpg`}
                  alt={lecture.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {lecture.duration}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{lecture.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{lecture.instructor}</p>

              <div className="flex flex-wrap gap-1">
                {lecture.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-primary-lighter text-slate-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredLectures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">해당 카테고리의 강의가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
