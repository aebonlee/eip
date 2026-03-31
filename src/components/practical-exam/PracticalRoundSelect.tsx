import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCertName, getMaxPracticalRounds } from '../../data/practical-exam-data'
import { useAuth } from '../../contexts/AuthContext'
import { sb_getTestResultsByType } from '../../lib/supabase'

export default function PracticalRoundSelect() {
  const { certType = 'engineer' } = useParams()
  const { user } = useAuth()
  const certName = getCertName(certType)
  const maxRounds = getMaxPracticalRounds(certType)
  const [results, setResults] = useState<Record<number, { score: number; total: number }>>({})


  useEffect(() => {
    if (user) {
      sb_getTestResultsByType(user.id, certType, 'practical').then(({ data }) => {
        const map: Record<number, { score: number; total: number }> = {}
        ;(data || []).forEach((r: Record<string, unknown>) => {
          const rn = r.round_number as number
          const rScore = r.score as number
          const rTotal = r.total as number
          if (rn && (!map[rn] || rScore > map[rn].score)) {
            map[rn] = { score: rScore, total: rTotal }
          }
        })
        setResults(map)
      })
    }
  }, [user, certType])

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/practical-exam">실기시험</Link> / <Link to={`/practical-exam/${certType}`}>{certName}</Link> / 회차별 모의시험
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-layer-group"></i></div>
            <div>
              <h1>{certName} 실기 회차별 모의시험</h1>
              <p>총 {maxRounds}회차 | SQL + 알고리즘 + 단답형 혼합 20문항</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>회차 선택</h2>
        <div className="round-grid">
          {Array.from({ length: maxRounds }, (_, i) => i + 1).map(round => {
            const prev = results[round]
            const prevScore = prev ? Math.round((prev.score / prev.total) * 100) : null
            const passed = prevScore !== null && prevScore >= 60
            return (
              <Link
                key={round}
                to={`/practical-exam/${certType}/mock-test/${round}`}
                className={`round-card ${prev ? (passed ? 'round-passed' : 'round-failed') : ''}`}
              >
                <div className="round-card-number">{round}회차</div>
                {prev ? (
                  <div className="round-card-score">
                    <span style={{ color: passed ? 'var(--success)' : 'var(--error)', fontWeight: 700 }}>
                      {prevScore}점
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text-light)' }}>
                      {passed ? '합격' : '불합격'}
                    </span>
                  </div>
                ) : (
                  <span style={{ fontSize: 13, color: 'var(--text-light)' }}>미응시</span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
