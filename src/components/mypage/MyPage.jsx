import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { sb_getTestResults, sb_getCodeSubmissions } from '../../lib/supabase'
import Card from '../ui/Card'
import ProgressBar from '../ui/ProgressBar'
import Button from '../ui/Button'

export default function MyPage() {
  const { user, profile, loading } = useAuth()
  const [testResults, setTestResults] = useState([])
  const [codeSubmissions, setCodeSubmissions] = useState([])
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (user) {
      sb_getTestResults(user.id).then(({ data }) => setTestResults(data || []))
      sb_getCodeSubmissions(user.id).then(({ data }) => setCodeSubmissions(data || []))
    }
  }, [user])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  const avgScore = testResults.length > 0
    ? Math.round(testResults.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) / testResults.length)
    : 0

  const tabs = [
    { id: 'overview', label: '개요' },
    { id: 'tests', label: '시험 결과' },
    { id: 'coding', label: '코딩 이력' },
  ]

  return (
    <div>
      {/* 프로필 헤더 */}
      <Card className="mb-8">
        <div className="flex items-center gap-6">
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="w-20 h-20 rounded-full" />
          ) : (
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-white text-3xl font-bold">
              {profile?.nickname?.[0] || '?'}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-white">{profile?.nickname}</h1>
            <p className="text-slate-400">{user.email}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                {profile?.target_cert === 'engineer' ? '정보처리기사' :
                 profile?.target_cert === 'industrial' ? '정보처리산업기사' : '프로그래밍기능사'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* 탭 */}
      <div className="flex gap-1 mb-6 bg-primary-light rounded-lg p-1 w-fit">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-secondary text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 개요 탭 */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <p className="text-3xl font-bold text-accent mb-1">{testResults.length}</p>
            <p className="text-sm text-slate-400">총 시험 횟수</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-success mb-1">{avgScore}%</p>
            <p className="text-sm text-slate-400">평균 정답률</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-warning mb-1">{codeSubmissions.length}</p>
            <p className="text-sm text-slate-400">코딩 제출</p>
          </Card>

          <Card className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">학습 바로가기</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link to="/written-exam" className="no-underline">
                <Button variant="outline" className="w-full">필기시험</Button>
              </Link>
              <Link to="/practical-exam" className="no-underline">
                <Button variant="outline" className="w-full">실기시험</Button>
              </Link>
              <Link to="/coding-lab" className="no-underline">
                <Button variant="outline" className="w-full">코딩실습</Button>
              </Link>
              <Link to="/lectures" className="no-underline">
                <Button variant="outline" className="w-full">강의실</Button>
              </Link>
            </div>
          </Card>
        </div>
      )}

      {/* 시험 결과 탭 */}
      {activeTab === 'tests' && (
        <div className="space-y-3">
          {testResults.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-slate-500 mb-4">아직 시험 기록이 없습니다.</p>
              <Link to="/written-exam"><Button variant="accent">모의시험 보러가기</Button></Link>
            </Card>
          ) : (
            testResults.map(result => (
              <Card key={result.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">
                      {result.cert_type === 'engineer' ? '정보처리기사' :
                       result.cert_type === 'industrial' ? '정보처리산업기사' : '프로그래밍기능사'}
                      {' '}{result.test_type === 'written' ? '필기' : '실기'} 모의시험
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Date(result.taken_at).toLocaleDateString('ko-KR')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      (result.score / result.total) >= 0.6 ? 'text-success' : 'text-danger'
                    }`}>
                      {Math.round((result.score / result.total) * 100)}%
                    </p>
                    <p className="text-xs text-slate-500">{result.score}/{result.total}</p>
                  </div>
                </div>
                <ProgressBar
                  value={result.score}
                  max={result.total}
                  color={(result.score / result.total) >= 0.6 ? 'success' : 'warning'}
                  size="sm"
                />
              </Card>
            ))
          )}
        </div>
      )}

      {/* 코딩 이력 탭 */}
      {activeTab === 'coding' && (
        <div className="space-y-3">
          {codeSubmissions.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-slate-500 mb-4">아직 코딩 제출 기록이 없습니다.</p>
              <Link to="/coding-lab"><Button variant="accent">코딩실습 하러가기</Button></Link>
            </Card>
          ) : (
            codeSubmissions.map(sub => (
              <Card key={sub.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{sub.exercise_id}</p>
                    <p className="text-xs text-slate-500">
                      {sub.language} | {new Date(sub.submitted_at).toLocaleDateString('ko-KR')}
                    </p>
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    sub.is_correct ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
                  }`}>
                    {sub.is_correct ? '정답' : '오답'}
                  </span>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}
