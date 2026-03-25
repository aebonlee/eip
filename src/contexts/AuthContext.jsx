import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase, sb_getProfile, sb_upsertProfile, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [accountBlock, setAccountBlock] = useState(null)

  const clearAccountBlock = useCallback(() => setAccountBlock(null), [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        loadProfile(session.user)
      }
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) {
          if (event === 'SIGNED_IN') {
            supabase.from('user_profiles')
              .update({ last_sign_in_at: new Date().toISOString() })
              .eq('id', session.user.id)
              .then(() => {})
          }
          await loadProfile(session.user)
        } else {
          setProfile(null)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  async function loadProfile(authUser) {
    const { data } = await sb_getProfile(authUser.id)
    if (data) {
      setProfile(data)
    } else {
      const newProfile = {
        id: authUser.id,
        nickname: authUser.user_metadata?.full_name || authUser.email?.split('@')[0],
        avatar_url: authUser.user_metadata?.avatar_url,
        target_cert: 'engineer',
      }
      const { data: created } = await sb_upsertProfile(newProfile)
      setProfile(created)
    }

    // 계정 상태 체크 (check_user_status는 user_profiles 기반)
    try {
      const currentDomain = window.location.hostname
      const { data: statusData } = await supabase.rpc('check_user_status', {
        target_user_id: authUser.id,
        current_domain: currentDomain,
      })
      if (statusData && statusData.status && statusData.status !== 'active') {
        setAccountBlock({
          status: statusData.status,
          reason: statusData.reason || '',
          suspended_until: statusData.suspended_until || null,
        })
        await supabase.auth.signOut()
        setUser(null)
        setProfile(null)
        return
      }
    } catch {
      // check_user_status 함수 미존재 시 무시
    }
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) console.error('Google login error:', error)
  }

  async function signInWithKakao() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) console.error('Kakao login error:', error)
  }

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const value = {
    user,
    profile,
    loading,
    accountBlock,
    clearAccountBlock,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    loadProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
