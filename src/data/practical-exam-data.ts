// 실기시험 데이터 — 자격증별 완전 분리
import { engineerSQL, engineerAlgo, engineerShort } from './practical-questions/engineer'
import { industrialSQL, industrialAlgo, industrialShort } from './practical-questions/industrial'
import { functionalSQL, functionalAlgo, functionalShort } from './practical-questions/functional'
import { codeReadingLanguages } from './code-reading'
import { hashString, seededShuffle } from './round-utils'

// 코드 결과 예측 문제를 실기 모의시험 문항 형태로 변환 (전 자격증 공용 풀)
const codePool = codeReadingLanguages.flatMap(lang =>
  lang.questions.map(q => ({
    id: `mock-${q.id}`,
    category: `${lang.name} ${q.topic}`,
    question: q.question,
    code: q.code,
    answer: q.answer,
    alternativeAnswers: q.alternativeAnswers,
    explanation: q.explanation,
  }))
)

const certNames: Record<string, string> = {
  engineer: '정보처리기사',
  industrial: '정보처리산업기사',
  functional: '프로그래밍기능사',
}

const sqlMap: Record<string, typeof engineerSQL> = { engineer: engineerSQL, industrial: industrialSQL, functional: functionalSQL }
const algoMap: Record<string, typeof engineerAlgo> = { engineer: engineerAlgo, industrial: industrialAlgo, functional: functionalAlgo }
const shortMap: Record<string, typeof engineerShort> = { engineer: engineerShort, industrial: industrialShort, functional: functionalShort }

export function getCertName(certType: string) {
  return certNames[certType] || certNames.engineer
}

export function getSQLQuestions(certType: string) {
  return sqlMap[certType] || sqlMap.engineer
}

export function getAlgorithmQuestions(certType: string) {
  return algoMap[certType] || algoMap.engineer
}

export function getShortAnswerQuestions(certType: string) {
  return shortMap[certType] || shortMap.engineer
}

// 회차별 실기 모의시험
export function getMaxPracticalRounds(certType: string) {
  const sql = sqlMap[certType] || sqlMap.engineer
  const algo = algoMap[certType] || algoMap.engineer
  const short = shortMap[certType] || shortMap.engineer
  const total = sql.length + algo.length + short.length + codePool.length
  return Math.floor(total / 20)
}

export function getPracticalRoundQuestions(certType: string, roundNumber: number) {
  const sql = sqlMap[certType] || sqlMap.engineer
  const algo = algoMap[certType] || algoMap.engineer
  const short = shortMap[certType] || shortMap.engineer
  const seed = hashString(`practical-${certType}-round-${roundNumber}`)

  // 실제 실기 출제 비중 재현: 코드 6 + SQL 5 + Algo 4 + Short 5 = 20문제
  const shuffledCode = seededShuffle(codePool, seed).slice(0, 6).map(q => ({ ...q, type: 'code' as const }))
  const shuffledSQL = seededShuffle(sql, seed + 1).slice(0, 5).map(q => ({ ...q, type: 'sql' as const }))
  const shuffledAlgo = seededShuffle(algo, seed + 2).slice(0, 4).map(q => ({ ...q, type: 'algorithm' as const }))
  const shuffledShort = seededShuffle(short, seed + 3).slice(0, 5).map(q => ({ ...q, type: 'short' as const }))

  return seededShuffle([...shuffledCode, ...shuffledSQL, ...shuffledAlgo, ...shuffledShort], seed + 4)
}

// 하위 호환: 기사 문제를 기본 export
export const sqlQuestions = engineerSQL
export const algorithmQuestions = engineerAlgo
export const shortAnswerQuestions = engineerShort
