// 실기 이론 5영역 통합
import type { TheoryArea } from './types'
import { swDesignArea, swDevArea } from './sw'
import { dbArea, networkOsArea } from './db-network'
import { securityArea } from './security'

export type { TheoryArea, TheoryChapter } from './types'

export const theoryAreas: TheoryArea[] = [
  swDesignArea,
  swDevArea,
  dbArea,
  networkOsArea,
  securityArea,
]

export function getTheoryArea(areaId: string): TheoryArea | undefined {
  return theoryAreas.find(a => a.id === areaId)
}
