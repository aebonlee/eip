// 코딩 이론 5과목 통합 (공통/C/Java/Python/SQL)
import type { TheoryArea } from '../practical-theory/types'
import { commonCodingArea, sqlCodingArea } from './common-sql'
import { cCodingArea, javaCodingArea } from './c-java'
import { pythonCodingArea } from './python'

export const codingAreas: TheoryArea[] = [
  commonCodingArea,
  cCodingArea,
  javaCodingArea,
  pythonCodingArea,
  sqlCodingArea,
]

export function getCodingArea(areaId: string): TheoryArea | undefined {
  return codingAreas.find(a => a.id === areaId)
}
