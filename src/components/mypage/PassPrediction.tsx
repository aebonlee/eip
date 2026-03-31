import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { sb_getTestResultsByType } from '../../lib/supabase'
import { certTypes } from '../../data/written-exam-data'

interface TestResultWithScores {
  score: number
  total: number
  subject_scores?: Record<string, { correct: number; total: number }>
  [key: string]: unknown
}

function ewma(scores: number[]) {
  if (scores.length === 0) return 0
  if (scores.length === 1) return scores[0]
  // 최신 50% + 직전 30% + 나머지 20%
  const latest = scores[0]
  const prev = scores.length > 1 ? scores[1] : latest
  const rest = scores.length > 2
    ? scores.slice(2).reduce((a: number, b: number) => a + b, 0) / (scores.length - 2)
    : prev
  return latest * 0.5 + prev * 0.3 + rest * 0.2
}

function linearTrend(scores: number[]) {
  if (scores.length < 3) return 'insufficient'
  const recent = scores.slice(0, 5).reverse() // oldest first
  const n = recent.length
  const xMean = (n - 1) / 2
  const yMean = recent.reduce((a: number, b: number) => a + b, 0) / n
  let num = 0, den = 0
  recent.forEach((y: number, i: number) => {
    num += (i - xMean) * (y - yMean)
    den += (i - xMean) ** 2
  })
  const slope = den === 0 ? 0 : num / den
  if (slope > 2) return 'rising'
  if (slope < -2) return 'falling'
  return 'stable'
}

type TrendKey = 'rising' | 'falling' | 'stable' | 'insufficient'
const trendLabels: Record<TrendKey, string> = { rising: '상승 추세', falling: '하락 추세', stable: '유지 중', insufficient: '데이터 부족' }
const trendColors: Record<TrendKey, string> = { rising: 'var(--success)', falling: 'var(--error)', stable: 'var(--primary)', insufficient: 'var(--text-light)' }

interface PassPredictionProps {
  certType: string
}

export default function PassPrediction({ certType }: PassPredictionProps) {
  const { user } = useAuth()
  const cert = certTypes[certType as keyof typeof certTypes]
  const [tab, setTab] = useState('written')
  const [writtenResults, setWrittenResults] = useState<TestResultWithScores[]>([])
  const [practicalResults, setPracticalResults] = useState<TestResultWithScores[]>([])

  useEffect(() => {
    if (user && certType) {
      sb_getTestResultsByType(user.id, certType, 'written').then(({ data }) => setWrittenResults(data || []))
      sb_getTestResultsByType(user.id, certType, 'practical').then(({ data }) => setPracticalResults(data || []))
    }
  }, [user, certType])

  const results = tab === 'written' ? writtenResults : practicalResults
  const scores = results.map(r => Math.round((r.score / r.total) * 100))
  const probability = Math.min(100, Math.max(0, Math.round(ewma(scores))))
  const trend = linearTrend(scores) as TrendKey

  // 과목/유형별 약점 분석
  const weaknesses: { key: string; pct: number; correct: number; total: number }[] = []
  if (results.length > 0) {
    const latestWithScores = results.find(r => r.subject_scores)
    if (latestWithScores?.subject_scores) {
      const ss = latestWithScores.subject_scores
      Object.entries(ss).forEach(([key, val]) => {
        const pct = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 0
        if (pct < 60) weaknesses.push({ key, pct, correct: val.correct, total: val.total })
      })
      weaknesses.sort((a, b) => a.pct - b.pct)
    }
  }

  // 과목명 매핑
  const subjectNames: Record<string, string> = {}
  if (cert) cert.subjects.forEach((s: { id: string; name: string }) => { subjectNames[s.id] = s.name })
  const typeNames: Record<string, string> = { sql: 'SQL', algorithm: '알고리즘', short: '단답형' }

  const getMessage = () => {
    if (scores.length === 0) return '아직 시험 기록이 없습니다. 모의시험을 풀어보세요!'
    if (probability >= 80) return '합격 가능성이 높습니다! 현재 페이스를 유지하세요.'
    if (probability >= 60) return '합격 기준에 근접합니다. 약점 과목을 집중 학습하세요.'
    return '아직 합격 기준에 미달합니다. 기초부터 차근차근 학습해보세요.'
  }

  return (
    <div>
      {/* 탭 */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button
          onClick={() => setTab('written')}
          className={`btn ${tab === 'written' ? 'btn-accent' : 'btn-outline'} btn-sm`}
        >
          필기시험
        </button>
        <button
          onClick={() => setTab('practical')}
          className={`btn ${tab === 'practical' ? 'btn-accent' : 'btn-outline'} btn-sm`}
        >
          실기시험
        </button>
      </div>

      {/* 합격 확률 게이지 */}
      <div className="quiz-card" style={{ textAlign: 'center', marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: 'var(--text-secondary)' }}>
          {tab === 'written' ? '필기' : '실기'} 합격 예측
        </h3>
        <div className="prediction-gauge">
          <svg viewBox="0 0 200 120" width="200" height="120">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="var(--bg-medium)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={probability >= 60 ? 'var(--success)' : 'var(--error)'}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={`${(probability / 100) * 251.2} 251.2`}
            />
            <text x="100" y="85" textAnchor="middle" fontSize="32" fontWeight="800" fill="var(--text-primary)">
              {probability}%
            </text>
            <text x="100" y="105" textAnchor="middle" fontSize="12" fill="var(--text-light)">
              합격 확률
            </text>
          </svg>
        </div>

        {/* 추세 */}
        <p style={{ fontSize: 14, color: trendColors[trend], fontWeight: 600, marginTop: 8 }}>
          {trendLabels[trend]}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 4 }}>
          총 {results.length}회 응시
        </p>
      </div>

      {/* 점수 이력 차트 */}
      {scores.length > 0 && (
        <div className="quiz-card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>점수 이력</h3>
          <div className="score-history">
            {scores.slice(0, 10).reverse().map((s, i) => (
              <div key={i} className="score-history-item">
                <div className="score-history-bar-wrap">
                  <div
                    className="score-history-bar"
                    style={{
                      height: `${s}%`,
                      background: s >= 60 ? 'var(--success)' : 'var(--error)',
                    }}
                  />
                </div>
                <span className="score-history-label">{s}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 11, color: 'var(--text-light)' }}>과거</span>
            <span style={{ fontSize: 11, color: 'var(--text-light)' }}>최근</span>
          </div>
          {/* 합격선 */}
          <div style={{ position: 'relative', marginTop: -72, marginBottom: 48 }}>
            <div style={{ borderTop: '1px dashed var(--text-light)', opacity: 0.4, width: '100%' }} />
            <span style={{ position: 'absolute', right: 0, top: -8, fontSize: 11, color: 'var(--text-light)' }}>60% 합격선</span>
          </div>
        </div>
      )}

      {/* 약점 분석 */}
      {weaknesses.length > 0 && (
        <div className="quiz-card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>약점 분석</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {weaknesses.map(w => {
              const name = tab === 'written'
                ? (subjectNames[w.key] || w.key)
                : (typeNames[w.key] || w.key)
              return (
                <div key={w.key}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{name}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--error)' }}>
                      {w.correct}/{w.total} ({w.pct}%)
                    </span>
                  </div>
                  <div className="subject-bar">
                    <div className="subject-bar-fill" style={{ width: `${w.pct}%`, background: 'var(--error)' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 학습 권장 메시지 */}
      <div className="quiz-card" style={{ background: 'rgba(37, 99, 235, 0.04)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>학습 권장</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          {getMessage()}
        </p>
      </div>
    </div>
  )
}
