import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lectureCategories, lectures } from '../../data/lectures-data'

export default function LecturesHome() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredLectures = activeCategory === 'all'
    ? lectures
    : lectures.filter(l => l.category === activeCategory)

  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon"><i className="fa-solid fa-play-circle"></i></div>
          <div>
            <h1>온라인 강의실</h1>
            <p>유튜브 강의를 카테고리별로 모아 학습하세요</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* 카테고리 필터 */}
        <div className="category-filters">
          <button
            onClick={() => setActiveCategory('all')}
            className={`category-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            전체
          </button>
          {lectureCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <i className={cat.icon} style={{ marginRight: 6 }}></i> {cat.name}
            </button>
          ))}
        </div>

        {/* 강의 그리드 */}
        <div className="lecture-grid">
          {filteredLectures.map(lecture => (
            <Link key={lecture.id} to={`/lectures/${lecture.id}`} className="lecture-card">
              <div className="lecture-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${lecture.youtubeId}/mqdefault.jpg`}
                  alt={lecture.title}
                />
                <span className="lecture-duration">{lecture.duration}</span>
              </div>
              <div className="lecture-card-body">
                <h3>{lecture.title}</h3>
                <p className="lecture-instructor">{lecture.instructor}</p>
                <div className="lecture-tags">
                  {lecture.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="lecture-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredLectures.length === 0 && (
          <div className="mypage-empty">
            <p>해당 카테고리의 강의가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  )
}
