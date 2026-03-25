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
          <Route path="practical-exam/sql" element={<SQLPractice />} />
          <Route path="practical-exam/algorithm" element={<AlgorithmPractice />} />
          <Route path="practical-exam/short-answer" element={<ShortAnswer />} />

          {/* 코딩실습 */}
          <Route path="coding-lab" element={<CodingLabHome />} />
          <Route path="coding-lab/:language" element={<CodingExercise />} />

          {/* 강의실 */}
          <Route path="lectures" element={<LecturesHome />} />
          <Route path="lectures/:id" element={<LecturePlayer />} />

          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPage />} />

          {/* 404 */}
          <Route path="*" element={
            <div className="text-center py-20">
              <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
              <p className="text-slate-400 mb-6">페이지를 찾을 수 없습니다</p>
              <a href="/" className="text-accent hover:underline">홈으로 돌아가기</a>
            </div>
          } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
