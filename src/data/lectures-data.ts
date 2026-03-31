// 유튜브 강의 데이터

export const lectureCategories = [
  { id: 'written-theory', name: '필기 이론', icon: 'fa-solid fa-book-open' },
  { id: 'practical-skill', name: '실기 실습', icon: 'fa-solid fa-laptop-code' },
  { id: 'coding', name: '프로그래밍', icon: 'fa-solid fa-code' },
  { id: 'tips', name: '합격 팁', icon: 'fa-solid fa-bullseye' },
]

export const lectures = [
  {
    id: 'lec-1',
    title: '정보처리기사 필기 - 소프트웨어 설계 핵심정리',
    category: 'written-theory',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '45:30',
    instructor: 'EIP 학습센터',
    description: '소프트웨어 생명주기, UML, 디자인 패턴 등 1과목 핵심 내용을 정리합니다.',
    tags: ['정보처리기사', '필기', '소프트웨어 설계'],
    views: 15200,
  },
  {
    id: 'lec-2',
    title: '정보처리기사 필기 - 소프트웨어 개발 핵심정리',
    category: 'written-theory',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '38:15',
    instructor: 'EIP 학습센터',
    description: '테스트 기법, 형상관리, 빌드 도구 등 2과목 핵심 내용을 정리합니다.',
    tags: ['정보처리기사', '필기', '소프트웨어 개발'],
    views: 12800,
  },
  {
    id: 'lec-3',
    title: '정보처리기사 필기 - 데이터베이스 구축 핵심정리',
    category: 'written-theory',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '42:00',
    instructor: 'EIP 학습센터',
    description: '정규화, SQL, 트랜잭션, 관계대수 등 3과목 핵심 내용을 정리합니다.',
    tags: ['정보처리기사', '필기', '데이터베이스'],
    views: 18500,
  },
  {
    id: 'lec-4',
    title: '정보처리기사 실기 - SQL 실습 완전정복',
    category: 'practical-skill',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '55:20',
    instructor: 'EIP 학습센터',
    description: 'SELECT, JOIN, GROUP BY 등 실기 시험에 자주 출제되는 SQL 구문을 실습합니다.',
    tags: ['정보처리기사', '실기', 'SQL'],
    views: 22100,
  },
  {
    id: 'lec-5',
    title: '정보처리기사 실기 - 프로그래밍 코드 분석',
    category: 'practical-skill',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '48:45',
    instructor: 'EIP 학습센터',
    description: 'C, Java, Python 코드 분석 문제를 풀어보며 실기 시험에 대비합니다.',
    tags: ['정보처리기사', '실기', '프로그래밍'],
    views: 19800,
  },
  {
    id: 'lec-6',
    title: 'C언어 기초 - 변수, 연산자, 제어문',
    category: 'coding',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '35:10',
    instructor: 'EIP 학습센터',
    description: 'C언어의 기본 문법과 제어 구조를 학습합니다.',
    tags: ['C언어', '프로그래밍', '기초'],
    views: 8900,
  },
  {
    id: 'lec-7',
    title: 'Java 기초 - 클래스와 객체',
    category: 'coding',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '40:25',
    instructor: 'EIP 학습센터',
    description: 'Java 객체지향 프로그래밍의 기본 개념을 학습합니다.',
    tags: ['Java', '프로그래밍', '객체지향'],
    views: 11200,
  },
  {
    id: 'lec-8',
    title: 'Python 기초 - 리스트와 딕셔너리',
    category: 'coding',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '32:50',
    instructor: 'EIP 학습센터',
    description: 'Python의 핵심 자료구조인 리스트와 딕셔너리를 학습합니다.',
    tags: ['Python', '프로그래밍', '자료구조'],
    views: 14300,
  },
  {
    id: 'lec-9',
    title: '정보처리기사 합격 전략 - 필기편',
    category: 'tips',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '25:15',
    instructor: 'EIP 학습센터',
    description: '효율적인 필기 학습 방법과 시험 전략을 공유합니다.',
    tags: ['정보처리기사', '합격 전략', '필기'],
    views: 25600,
  },
  {
    id: 'lec-10',
    title: '정보처리기사 합격 전략 - 실기편',
    category: 'tips',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '30:40',
    instructor: 'EIP 학습센터',
    description: '실기 시험 유형 분석과 효과적인 대비 전략을 공유합니다.',
    tags: ['정보처리기사', '합격 전략', '실기'],
    views: 28900,
  },
]

export function getLecturesByCategory(categoryId: string) {
  return lectures.filter(l => l.category === categoryId)
}

export function getLectureById(id: string) {
  return lectures.find(l => l.id === id)
}
