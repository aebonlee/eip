import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function LoginPage() {
  const { user, loading, signInWithGoogle, signInWithKakao } = useAuth()

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" />
      </div>
    )
  }

  if (user) return <Navigate to="/" replace />

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-primary font-bold text-2xl">EIP</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">로그인</h1>
          <p className="text-slate-400">소셜 계정으로 간편하게 시작하세요</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google로 로그인
          </button>

          <button
            onClick={signInWithKakao}
            className="w-full flex items-center justify-center gap-3 bg-[#FEE500] text-[#000000D9] font-medium py-3 px-4 rounded-lg hover:bg-[#FADA0A] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#000000" d="M12 3C6.48 3 2 6.54 2 10.86c0 2.79 1.86 5.23 4.64 6.6-.15.54-.96 3.47-1 3.64 0 0-.02.07 0 .1.04.04.09.01.09.01.12-.02 3.47-2.27 4.01-2.64.73.1 1.48.16 2.26.16 5.52 0 10-3.54 10-7.87S17.52 3 12 3z" />
            </svg>
            카카오로 로그인
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-600">
          로그인 시 학습 진도와 시험 결과가 자동 저장됩니다
        </p>
      </Card>
    </div>
  )
}
