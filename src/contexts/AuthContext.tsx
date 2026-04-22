import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase, sb_getProfile, sb_upsertProfile, setSharedSession, getSharedSession, clearSharedSession } from '../lib/supabase'
import { ADMIN_EMAILS } from '../config/admin'
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

import PaymentNudgePopup from '../components/PaymentNudgePopup';
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
  isAdmin: boolean
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
  const [_userProfile, _setUserProfile] = useState<any>(null)

  const clearAccountBlock = useCallback(() => setAccountBlock(null), [])

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        if (session.refresh_token) setSharedSession(session.refresh_token)
        loadProfile(session.user)
      } else {
        const rt = getSharedSession()
        if (rt) {
          try {
            const { data } = await supabase.auth.refreshSession({ refresh_token: rt })
            if (!data.session) clearSharedSession()
          } catch { clearSharedSession() }
        }
      }
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.refresh_token) setSharedSession(session.refresh_token)
        if (_event === 'SIGNED_OUT') clearSharedSession()

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

    // user_profiles 이중 기록 (글로벌 회원 가시성)
    try {
      const meta = authUser.user_metadata || {}
      const currentDomain = window.location.hostname
      await supabase.from('user_profiles').upsert({
        id: authUser.id,
        email: authUser.email || '',
        name: meta.full_name || meta.name || '',
        display_name: meta.full_name || meta.name || '',
        provider: authUser.app_metadata?.provider || 'email',
        signup_domain: currentDomain,
        visited_sites: [currentDomain],
        role: 'member',
      }, { onConflict: 'id' })
    } catch (err) {
      console.warn('user_profiles upsert 실패:', err)
    }

    // user_profiles 프로필 로드 (프로필 완성 체크용)
    try {
      const { data: up } = await supabase.from('user_profiles').select('name,phone').eq('id', authUser.id).maybeSingle()
      _setUserProfile(up)
    } catch { _setUserProfile(null) }

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

  const allEmails = [
    user?.email,
    (user as any)?.user_metadata?.email,
    (user as any)?.identities?.[0]?.identity_data?.email,
  ].filter(Boolean).map((e: any) => e.toLowerCase())
  const isAdmin = allEmails.some((e: string) => ADMIN_EMAILS.includes(e))

  const value: AuthContextValue = {
    user,
    profile,
    loading,
    isAdmin,
    accountBlock,
    clearAccountBlock,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    loadProfile,
  }


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  supabase.auth.signOut();
  clearSharedSession();
  },
  });

  const refreshProfile = useCallback(async () => {
    try {
      const { data: up } = await supabase.from('user_profiles').select('name,phone').eq('id', user!.id).maybeSingle()
      _setUserProfile(up)
    } catch { _setUserProfile(null) }
  }, [user])
  const needsProfileCompletion = !!user && !!_userProfile && !_userProfile.name

  return (
    <AuthContext.Provider value={value}>
      {children}
      {needsProfileCompletion && (
        <ProfileCompleteModal user={user!} onComplete={refreshProfile} />
      )}
    {isLoggedIn && user && !needsProfileCompletion && (
      <PaymentNudgePopup user={user} siteSlug="eip" />
    )}
    </AuthContext.Provider>
  )
}
