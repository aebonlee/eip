import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase, sb_getProfile, sb_upsertProfile } from '../lib/supabase'

interface Profile {
  id: string
  nickname?: string
  avatar_url?: string
  target_cert?: string
  [key: string]: unknown
}

interface AccountBlock {
  status: string
  reason: string
  suspended_until: string | null
}

interface AuthContextValue {
  user: User | null
  profile: Profile | null
  loading: boolean
  accountBlock: AccountBlock | null
  clearAccountBlock: () => void
  signInWithGoogle: () => Promise<void>
  signInWithKakao: () => Promise<void>
  signOut: () => Promise<void>
  loadProfile: (authUser: User) => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [accountBlock, setAccountBlock] = useState<AccountBlock | null>(null)

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
      async (_event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) {
          if (_event === 'SIGNED_IN') {
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

  async function loadProfile(authUser: User) {
    const { data } = await sb_getProfile(authUser.id)
    if (data) {
      setProfile(data as Profile)
    } else {
      const newProfile = {
        id: authUser.id,
        nickname: authUser.user_metadata?.full_name || authUser.email?.split('@')[0],
        avatar_url: authUser.user_metadata?.avatar_url,
        target_cert: 'engineer',
      }
      const { data: created } = await sb_upsertProfile(newProfile)
      setProfile(created as Profile)
    }

    // 계정 상태 체크 (check_user_status는 user_profiles 기반)
    try {
      const currentDomain = window.location.hostname
      const { data: statusData } = await supabase.rpc('check_user_status', {
        target_user_id: authUser.id,
        current_domain: currentDomain,
      })
      if (statusData && typeof statusData === 'object' && 'status' in statusData) {
        const sd = statusData as { status: string; reason?: string; suspended_until?: string | null }
        if (sd.status && sd.status !== 'active') {
          setAccountBlock({
            status: sd.status,
            reason: sd.reason || '',
            suspended_until: sd.suspended_until || null,
          })
          await supabase.auth.signOut()
          setUser(null)
          setProfile(null)
          return
        }
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

  const value: AuthContextValue = {
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
