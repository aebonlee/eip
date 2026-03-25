import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/', { replace: true })
      }
    })
  }, [navigate])

  return (
    <div className="auth-page">
      <div style={{ textAlign: 'center' }}>
        <div className="animate-spin" style={{ width: 40, height: 40, border: '3px solid var(--border-light)', borderTopColor: 'var(--primary)', borderRadius: '50%', margin: '0 auto 16px' }} />
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>로그인 처리 중...</p>
      </div>
    </div>
  )
}
