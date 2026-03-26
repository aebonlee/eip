// 실기시험 데이터 — 자격증별 완전 분리
import { engineerSQL, engineerAlgo, engineerShort } from './practical-questions/engineer'
import { industrialSQL, industrialAlgo, industrialShort } from './practical-questions/industrial'
import { functionalSQL, functionalAlgo, functionalShort } from './practical-questions/functional'

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

// 하위 호환: 기사 문제를 기본 export
export const sqlQuestions = engineerSQL
export const algorithmQuestions = engineerAlgo
export const shortAnswerQuestions = engineerShort
