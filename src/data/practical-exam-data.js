// 실기시험 데이터 — 자격증별 완전 분리
import { engineerSQL, engineerAlgo, engineerShort } from './practical-questions/engineer'
import { industrialSQL, industrialAlgo, industrialShort } from './practical-questions/industrial'
import { functionalSQL, functionalAlgo, functionalShort } from './practical-questions/functional'
import { hashString, seededShuffle } from './round-utils'

const certNames = {
  engineer: '정보처리기사',
  industrial: '정보처리산업기사',
  functional: '프로그래밍기능사',
}

const sqlMap = { engineer: engineerSQL, industrial: industrialSQL, functional: functionalSQL }
const algoMap = { engineer: engineerAlgo, industrial: industrialAlgo, functional: functionalAlgo }
const shortMap = { engineer: engineerShort, industrial: industrialShort, functional: functionalShort }

export function getCertName(certType) {
  return certNames[certType] || certNames.engineer
}

export function getSQLQuestions(certType) {
  return sqlMap[certType] || sqlMap.engineer
}

export function getAlgorithmQuestions(certType) {
  return algoMap[certType] || algoMap.engineer
}

export function getShortAnswerQuestions(certType) {
  return shortMap[certType] || shortMap.engineer
}

// 회차별 실기 모의시험
export function getMaxPracticalRounds(certType) {
  const sql = sqlMap[certType] || sqlMap.engineer
  const algo = algoMap[certType] || algoMap.engineer
  const short = shortMap[certType] || shortMap.engineer
  const total = sql.length + algo.length + short.length
  return Math.floor(total / 20)
}

export function getPracticalRoundQuestions(certType, roundNumber) {
  const sql = sqlMap[certType] || sqlMap.engineer
  const algo = algoMap[certType] || algoMap.engineer
  const short = shortMap[certType] || shortMap.engineer
  const seed = hashString(`practical-${certType}-round-${roundNumber}`)

  // SQL 7 + Algo 6 + Short 7 = 20문제
  const shuffledSQL = seededShuffle(sql, seed).slice(0, 7).map(q => ({ ...q, type: 'sql' }))
  const shuffledAlgo = seededShuffle(algo, seed + 1).slice(0, 6).map(q => ({ ...q, type: 'algorithm' }))
  const shuffledShort = seededShuffle(short, seed + 2).slice(0, 7).map(q => ({ ...q, type: 'short' }))

  return seededShuffle([...shuffledSQL, ...shuffledAlgo, ...shuffledShort], seed + 3)
}

// 하위 호환: 기사 문제를 기본 export
export const sqlQuestions = engineerSQL
export const algorithmQuestions = engineerAlgo
export const shortAnswerQuestions = engineerShort
