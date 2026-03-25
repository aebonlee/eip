import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import AuthCallback from './components/auth/AuthCallback'
import WrittenExamHome from './components/written-exam/WrittenExamHome'
import SubjectList from './components/written-exam/SubjectList'
import ChapterStudy from './components/written-exam/ChapterStudy'
import MockTest from './components/written-exam/MockTest'
import TestResult from './components/written-exam/TestResult'
import PracticalExamHome from './components/practical-exam/PracticalExamHome'
import SQLPractice from './components/practical-exam/SQLPractice'
import AlgorithmPractice from './components/practical-exam/AlgorithmPractice'
import ShortAnswer from './components/practical-exam/ShortAnswer'
import CodingLabHome from './components/coding-lab/CodingLabHome'
import CodingExercise from './components/coding-lab/CodingExercise'
import LecturesHome from './components/lectures/LecturesHome'
import LecturePlayer from './components/lectures/LecturePlayer'
import MyPage from './components/mypage/MyPage'
import CertIntroPage from './components/cert/CertIntroPage'
import CommunityPage from './components/community/CommunityPage'

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
          <Route path="written-exam/:certType/mock-test" element={<MockTest />} />
          <Route path="written-exam/:certType/result" element={<TestResult />} />

          {/* 실기시험 */}
          <Route path="practical-exam" element={<PracticalExamHome />} />
          <Route path="practical-exam/:certType" element={<PracticalExamHome />} />
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
