// 필기시험 과목 및 문제 데이터
import { engineerChapters } from './chapters/engineer'
import { industrialChapters } from './chapters/industrial'
import { functionalChapters } from './chapters/functional'
import { engineerQuestions } from './mock-questions/engineer'
import { industrialQuestions } from './mock-questions/industrial'
import { functionalQuestions } from './mock-questions/functional'

export const certTypes = {
  engineer: {
    id: 'engineer',
    name: '정보처리기사',
    description: '국가기술자격 정보처리 분야 기사급',
    subjects: [
      { id: 'sw-design', name: '소프트웨어 설계', chapters: 5 },
      { id: 'sw-dev', name: '소프트웨어 개발', chapters: 5 },
      { id: 'db', name: '데이터베이스 구축', chapters: 5 },
      { id: 'sys-integration', name: '프로그래밍 언어 활용', chapters: 5 },
      { id: 'info-security', name: '정보시스템 구축관리', chapters: 5 },
    ],
  },
  industrial: {
    id: 'industrial',
    name: '정보처리산업기사',
    description: '국가기술자격 정보처리 분야 산업기사급',
    subjects: [
      { id: 'info-sys', name: '정보시스템 기반 기술', chapters: 4 },
      { id: 'programming', name: '프로그래밍 언어 활용', chapters: 4 },
      { id: 'db', name: '데이터베이스 활용', chapters: 4 },
      { id: 'info-comm', name: '정보통신 활용', chapters: 4 },
    ],
  },
  functional: {
    id: 'functional',
    name: '프로그래밍기능사',
    description: '국가기술자격 프로그래밍 분야 기능사급',
    subjects: [
      { id: 'programming-basic', name: '정보처리와 컴퓨터 일반', chapters: 3 },
      { id: 'algorithm', name: '알고리즘', chapters: 3 },
      { id: 'db-basic', name: '데이터베이스', chapters: 3 },
    ],
  },
}

// 모든 챕터를 하나로 통합
export const chapters = {
  ...engineerChapters,
  ...industrialChapters,
  ...functionalChapters,
}

// CBT 모의시험 문제
export const mockQuestions = {
  engineer: engineerQuestions,
  industrial: industrialQuestions,
  functional: functionalQuestions,
}

export function getQuestionsBySubject(certType, subjectId) {
  const questions = mockQuestions[certType] || []
  return questions.filter(q => q.subject === subjectId)
}

export function getMockTestQuestions(certType, count = 20) {
  const questions = mockQuestions[certType] || []
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
