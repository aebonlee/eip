import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { sb_getTestResults, sb_getCodeSubmissions } from '../../lib/supabase'
import PassPrediction from './PassPrediction'
import { useStudyProgress } from '../../hooks/useStudyProgress'
import { theoryAreas } from '../../data/practical-theory'
import { codingAreas } from '../../data/coding-theory'

interface TestResult {
  id: string
  cert_type: string
  test_type: string
  score: number
  total: number
  round_number: number | null
  taken_at: string
  [key: string]: unknown
}

interface CodeSubmission {
  id: string
  exercise_id: string
  language: string
  submitted_at: string
  is_correct: boolean
  [key: string]: unknown
}

function StudyProgressPanel({ certType }: { certType: string }) {
  const { completedKeys, loaded } = useStudyProgress(certType)

  const sections = [
    { title: '실기 이론', areas: theoryAreas, basePath: `/practical-exam/${certType}/theory` },
    { title: '코딩 이론', areas: codingAreas, basePath: `/practical-exam/${certType}/coding-theory` },
  ]

  if (!loaded) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
        <div className="animate-spin" style={{ width: 28, height: 28, border: '3px solid var(--border-light)', borderTopColor: 'var(--primary)', borderRadius: '50%' }} />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {sections.map(section => {
        const totalChapters = section.areas.reduce((sum, a) => sum + a.chapters.length, 0)
        const totalDone = section.areas.reduce(
          (sum, a) => sum + a.chapters.filter(ch => completedKeys.has(`${a.id}/${ch.id}`)).length, 0)
        return (
          <div key={section.title} className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{section.title}</h3>
              <span className="path-card-tag">{totalDone}/{totalChapters} 챕터 완료</span>
            </div>
            {section.areas.map(area => {
              const done = area.chapters.filter(ch => completedKeys.has(`${area.id}/${ch.id}`)).length
              const pct = Math.round((done / area.chapters.length) * 100)
              return (
                <Link key={area.id} to={`${section.basePath}/${area.id}`} style={{ display: 'block', marginBottom: 14, textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>
                      <i className={area.icon} style={{ marginRight: 8, color: 'var(--primary)', width: 18, textAlign: 'center' }}></i>
                      {area.name}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text-light)' }}>{done}/{area.chapters.length} ({pct}%)</span>
                  </div>
                  <div className="quiz-progress-bar" style={{ margin: 0 }}>
                    <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default function MyPage() {
  const { user, profile, loading } = useAuth()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [codeSubmissions, setCodeSubmissions] = useState<CodeSubmission[]>([])
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (user) {
      sb_getTestResults(user.id).then(({ data }) => setTestResults(data || []))
      sb_getCodeSubmissions(user.id).then(({ data }) => setCodeSubmissions(data || []))
    }
  }, [user])

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div className="animate-spin" style={{ width: 32, height: 32, border: '3px solid var(--border-light)', borderTopColor: 'var(--primary)', borderRadius: '50%' }} />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  const avgScore = testResults.length > 0
    ? Math.round(testResults.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) / testResults.length)
    : 0

  const targetCert = profile?.target_cert || 'engineer'

  const tabs = [
    { id: 'overview', label: '개요' },
    { id: 'progress', label: '학습 진도' },
    { id: 'tests', label: '시험 결과' },
    { id: 'prediction', label: '합격 예측' },
    { id: 'coding', label: '코딩 이력' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon"><i className="fa-solid fa-user"></i></div>
          <div>
            <h1>마이페이지</h1>
            <p>학습 이력과 통계를 확인하세요</p>
          </div>
        </div>
      </div>

      <div className="mypage-container">
        {/* 프로필 카드 */}
        <div className="mypage-profile-card">
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="mypage-avatar" />
          ) : (
            <div className="mypage-avatar-placeholder">
              {profile?.nickname?.[0] || '?'}
            </div>
          )}
          <div>
            <h2 className="mypage-name">{profile?.nickname}</h2>
            <p className="mypage-email">{user.email}</p>
            <span className="mypage-cert-badge">
              {targetCert === 'engineer' ? '정보처리기사' :
               targetCert === 'industrial' ? '정보처리산업기사' : '프로그래밍기능사'}
            </span>
          </div>
        </div>

        {/* 탭 */}
        <div className="mypage-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`mypage-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 개요 탭 */}
        {activeTab === 'overview' && (
          <>
            <div className="mypage-stats-grid">
              <div className="mypage-stat-card">
                <p className="mypage-stat-value">{testResults.length}</p>
                <p className="mypage-stat-label">총 시험 횟수</p>
              </div>
              <div className="mypage-stat-card">
                <p className="mypage-stat-value" style={{ color: 'var(--success)' }}>{avgScore}%</p>
                <p className="mypage-stat-label">평균 정답률</p>
              </div>
              <div className="mypage-stat-card">
                <p className="mypage-stat-value" style={{ color: 'var(--warning)' }}>{codeSubmissions.length}</p>
                <p className="mypage-stat-label">코딩 제출</p>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>학습 바로가기</h3>
              <div className="mypage-quick-links">
                <Link to="/written-exam" className="btn btn-outline">필기시험</Link>
                <Link to="/practical-exam" className="btn btn-outline">실기시험</Link>
                <Link to="/coding-lab" className="btn btn-outline">코딩실습</Link>
                <Link to="/lectures" className="btn btn-outline">강의실</Link>
              </div>
            </div>
          </>
        )}

        {/* 학습 진도 탭 */}
        {activeTab === 'progress' && (
          <StudyProgressPanel certType={targetCert} />
        )}

        {/* 시험 결과 탭 */}
        {activeTab === 'tests' && (
          <div>
            {testResults.length === 0 ? (
              <div className="mypage-empty">
                <p>아직 시험 기록이 없습니다.</p>
                <Link to="/written-exam" className="btn btn-accent">모의시험 보러가기</Link>
              </div>
            ) : (
              testResults.map(result => (
                <div key={result.id} className="mypage-result-card">
                  <div className="mypage-result-info">
                    <h4>
                      {result.cert_type === 'engineer' ? '정보처리기사' :
                       result.cert_type === 'industrial' ? '정보처리산업기사' : '프로그래밍기능사'}
                      {' '}{result.test_type === 'written' ? '필기' : '실기'}
                      {result.round_number ? ` ${result.round_number}회차` : ' 랜덤'} 모의시험
                    </h4>
                    <p>{new Date(result.taken_at).toLocaleDateString('ko-KR')}</p>
                  </div>
                  <div>
                    <span className={`mypage-result-score ${(result.score / result.total) >= 0.6 ? 'passed' : 'failed'}`}>
                      {Math.round((result.score / result.total) * 100)}%
                    </span>
                    <p className="mypage-result-sub">{result.score}/{result.total}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* 합격 예측 탭 */}
        {activeTab === 'prediction' && (
          <PassPrediction certType={targetCert} />
        )}

        {/* 코딩 이력 탭 */}
        {activeTab === 'coding' && (
          <div>
            {codeSubmissions.length === 0 ? (
              <div className="mypage-empty">
                <p>아직 코딩 제출 기록이 없습니다.</p>
                <Link to="/coding-lab" className="btn btn-accent">코딩실습 하러가기</Link>
              </div>
            ) : (
              codeSubmissions.map(sub => (
                <div key={sub.id} className="mypage-result-card">
                  <div className="mypage-result-info">
                    <h4>{sub.exercise_id}</h4>
                    <p>{sub.language} | {new Date(sub.submitted_at).toLocaleDateString('ko-KR')}</p>
                  </div>
                  <span className={`difficulty-badge ${sub.is_correct ? 'difficulty-easy' : 'difficulty-hard'}`}>
                    {sub.is_correct ? '정답' : '오답'}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}
