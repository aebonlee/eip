// 실기 이론 데이터 타입
export interface TheoryChapter {
  id: string
  name: string
  topics: string[]
  content: string // 마크다운 부분집합: ##, ###, - 리스트, |표|, **강조**, 일반 문단
}

export interface TheoryArea {
  id: string
  name: string
  icon: string // Font Awesome 클래스 (예: 'fa-solid fa-database')
  description: string
  chapters: TheoryChapter[]
}
