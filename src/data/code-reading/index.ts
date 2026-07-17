// 코드 결과 예측 문제 통합
import type { CodeReadingLanguage } from './types'
import { cLang, javaLang } from './c-java'
import { pythonLang, sqlLang } from './python-sql'

export type { CodeReadingLanguage, CodeReadingQuestion } from './types'

export const codeReadingLanguages: CodeReadingLanguage[] = [
  cLang,
  javaLang,
  pythonLang,
  sqlLang,
]

export function getCodeReadingLanguage(languageId: string): CodeReadingLanguage | undefined {
  return codeReadingLanguages.find(l => l.id === languageId)
}
