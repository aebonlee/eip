// 코드 결과 예측(코드 읽기) 문제 데이터 타입
export interface CodeReadingQuestion {
  id: string
  topic: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string // 예: '다음 코드의 출력 결과를 쓰시오.'
  code: string
  answer: string
  alternativeAnswers: string[]
  explanation: string
}

export interface CodeReadingLanguage {
  id: string
  name: string
  icon: string // Font Awesome 클래스
  description: string
  questions: CodeReadingQuestion[]
}
