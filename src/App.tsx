import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import AdminGuard from './components/AdminGuard'
import Layout from './components/layout/Layout'

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import AuthCallback from './pages/auth/AuthCallback'
import WrittenExamHome from './pages/written-exam/WrittenExamHome'
import SubjectList from './pages/written-exam/SubjectList'
import ChapterStudy from './pages/written-exam/ChapterStudy'
import RoundSelect from './pages/written-exam/RoundSelect'
import MockTest from './pages/written-exam/MockTest'
import TestResult from './pages/written-exam/TestResult'
import PracticalExamHome from './pages/practical-exam/PracticalExamHome'
import PracticalRoundSelect from './pages/practical-exam/PracticalRoundSelect'
import PracticalMockTest from './pages/practical-exam/PracticalMockTest'
import PracticalTestResult from './pages/practical-exam/PracticalTestResult'
import SQLPractice from './pages/practical-exam/SQLPractice'
import AlgorithmPractice from './pages/practical-exam/AlgorithmPractice'
import ShortAnswer from './pages/practical-exam/ShortAnswer'
import CodingLabHome from './pages/coding-lab/CodingLabHome'
import CodingExercise from './pages/coding-lab/CodingExercise'
import LecturesHome from './pages/lectures/LecturesHome'
import LecturePlayer from './pages/lectures/LecturePlayer'
import MyPage from './pages/mypage/MyPage'
import CertIntroPage from './pages/cert/CertIntroPage'
import CommunityPage from './pages/community/CommunityPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="auth/callback" element={<AuthCallback />} />

          {/* 필기시험 */}
          <Route path="written-exam" element={<WrittenExamHome />} />
          <Route path="written-exam/:certType" element={<SubjectList />} />
          <Route path="written-exam/:certType/:subjectId/study" element={<ChapterStudy />} />
          <Route path="written-exam/:certType/rounds" element={<RoundSelect />} />
          <Route path="written-exam/:certType/mock-test" element={<MockTest />} />
          <Route path="written-exam/:certType/mock-test/:round" element={<MockTest />} />
          <Route path="written-exam/:certType/result" element={<TestResult />} />

          {/* 실기시험 */}
          <Route path="practical-exam" element={<PracticalExamHome />} />
          <Route path="practical-exam/:certType" element={<PracticalExamHome />} />
          <Route path="practical-exam/:certType/rounds" element={<PracticalRoundSelect />} />
          <Route path="practical-exam/:certType/mock-test/:round" element={<PracticalMockTest />} />
          <Route path="practical-exam/:certType/result" element={<PracticalTestResult />} />
          <Route path="practical-exam/:certType/sql" element={<SQLPractice />} />
          <Route path="practical-exam/:certType/algorithm" element={<AlgorithmPractice />} />
          <Route path="practical-exam/:certType/short-answer" element={<ShortAnswer />} />

          {/* 코딩실습 */}
          <Route path="coding-lab" element={<CodingLabHome />} />
          <Route path="coding-lab/:language" element={<CodingExercise />} />

          {/* 강의실 */}
          <Route path="lectures" element={<LecturesHome />} />
          <Route path="lectures/:id" element={<LecturePlayer />} />

          {/* 자격증 소개 */}
          <Route path="cert-intro" element={<CertIntroPage />} />

          {/* 커뮤니티 */}
          <Route path="community" element={<CommunityPage />} />

          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPage />} />

          {/* Admin */}
          <Route path="admin" element={<AdminGuard><Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}><div className="loading-spinner" /></div>}><AdminDashboard /></Suspense></AdminGuard>} />

          {/* 404 */}
          <Route path="*" element={
            <div className="container" style={{ textAlign: 'center', padding: '120px 24px' }}>
              <h1 style={{ fontSize: 72, fontWeight: 800, color: 'var(--primary)', marginBottom: 16 }}>404</h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>페이지를 찾을 수 없습니다</p>
              <a href="/" className="btn btn-primary">홈으로 돌아가기</a>
            </div>
          } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
