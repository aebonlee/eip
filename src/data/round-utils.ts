// 회차 시스템 유틸리티 — 같은 회차 = 같은 문제 보장

export function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // 32-bit integer
  }
  return Math.abs(hash)
}

export function seededShuffle<T>(array: T[], seed: number): T[] {
  const arr = [...array]
  let s = seed
  const next = () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff
    return s / 0x7fffffff
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
