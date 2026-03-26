import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { certTypes, getMaxWrittenRounds } from '../../data/written-exam-data'
import { useAuth } from '../../contexts/AuthContext'
import { sb_getTestResultsByType } from '../../lib/supabase'

export default function RoundSelect() {
  const { certType } = useParams()
  const { user } = useAuth()
  const cert = certTypes[certType]
  const maxRounds = getMaxWrittenRounds(certType)
  const [results, setResults] = useState({})

  useEffect(() => {
    if (user) {
      sb_getTestResultsByType(user.id, certType, 'written').then(({ data }) => {
        const map = {}
        ;(data || []).forEach(r => {
          if (r.round_number && (!map[r.round_number] || r.score > map[r.round_number].score)) {
            map[r.round_number] = r
          }
        })
        setResults(map)
      })
    }
  }, [user, certType])

  if (!cert) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ marginBottom: 16 }}>존재하지 않는 자격증입니다</h2>
        <Link to="/written-exam" className="btn btn-outline">돌아가기</Link>
      </div>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/written-exam">필기시험</Link> / <Link to={`/written-exam/${certType}`}>{cert.name}</Link> / 회차별 모의시험
          </div>
          <div className="page-header-inner">
            <div className="page-header-icon"><i className="fa-solid fa-layer-group"></i></div>
            <div>
              <h1>{cert.name} 회차별 모의시험</h1>
              <p>총 {maxRounds}회차 | 회차별 20문항</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* 랜덤 모의시험 배너 */}
        <div className="mock-test-banner" style={{ marginBottom: 32 }}>
          <div>
            <h2>랜덤 모의시험</h2>
            <p>전 과목에서 랜덤으로 출제되는 모의시험</p>
          </div>
          <Link to={`/written-exam/${certType}/mock-test`} className="btn btn-accent">
            랜덤 시험 시작
          </Link>
        </div>

        {/* 회차 그리드 */}
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>회차 선택</h2>
        <div className="round-grid">
          {Array.from({ length: maxRounds }, (_, i) => i + 1).map(round => {
            const prev = results[round]
            const prevScore = prev ? Math.round((prev.score / prev.total) * 100) : null
            const passed = prevScore !== null && prevScore >= 60
            return (
              <Link
                key={round}
                to={`/written-exam/${certType}/mock-test/${round}`}
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
