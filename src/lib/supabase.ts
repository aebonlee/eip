import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Supabase 연결 여부 확인
export const isSupabaseConfigured = supabaseUrl !== 'https://placeholder.supabase.co'

/* ── SSO 크로스도메인 쿠키 헬퍼 ── */
const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt: string): void {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession(): string | null {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession(): void {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}

// Helper functions with sb_ prefix tables

export async function sb_getProfile(userId: string) {
  const { data, error } = await supabase
    .from('sb_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

export async function sb_upsertProfile(profile: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('sb_profiles')
    .upsert(profile)
    .select()
    .single()
  return { data, error }
}

export async function sb_getStudyProgress(userId: string, certType: string) {
  const { data, error } = await supabase
    .from('sb_study_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('cert_type', certType)
  return { data, error }
}

export async function sb_updateStudyProgress(progress: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('sb_study_progress')
    .upsert(progress)
    .select()
  return { data, error }
}

export async function sb_getTestResults(userId: string) {
  const { data, error } = await supabase
    .from('sb_test_results')
    .select('*')
    .eq('user_id', userId)
    .order('taken_at', { ascending: false })
  return { data, error }
}

export async function sb_saveTestResult(result: Record<string, unknown>) {
  // result may now include: round_number, subject_scores
  const { data, error } = await supabase
    .from('sb_test_results')
    .insert(result)
    .select()
    .single()
  return { data, error }
}

export async function sb_getTestResultsByType(userId: string, certType: string, testType: string) {
  const { data, error } = await supabase
    .from('sb_test_results')
    .select('*')
    .eq('user_id', userId)
    .eq('cert_type', certType)
    .eq('test_type', testType)
    .order('taken_at', { ascending: false })
  return { data, error }
}

export async function sb_getCodeSubmissions(userId: string) {
  const { data, error } = await supabase
    .from('sb_code_submissions')
    .select('*')
    .eq('user_id', userId)
    .order('submitted_at', { ascending: false })
  return { data, error }
}

export async function sb_saveCodeSubmission(submission: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('sb_code_submissions')
    .insert(submission)
    .select()
    .single()
  return { data, error }
}
