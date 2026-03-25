import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions with sb_ prefix tables

export async function sb_getProfile(userId) {
  const { data, error } = await supabase
    .from('sb_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

export async function sb_upsertProfile(profile) {
  const { data, error } = await supabase
    .from('sb_profiles')
    .upsert(profile)
    .select()
    .single()
  return { data, error }
}

export async function sb_getStudyProgress(userId, certType) {
  const { data, error } = await supabase
    .from('sb_study_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('cert_type', certType)
  return { data, error }
}

export async function sb_updateStudyProgress(progress) {
  const { data, error } = await supabase
    .from('sb_study_progress')
    .upsert(progress)
    .select()
  return { data, error }
}

export async function sb_getTestResults(userId) {
  const { data, error } = await supabase
    .from('sb_test_results')
    .select('*')
    .eq('user_id', userId)
    .order('taken_at', { ascending: false })
  return { data, error }
}

export async function sb_saveTestResult(result) {
  const { data, error } = await supabase
    .from('sb_test_results')
    .insert(result)
    .select()
    .single()
  return { data, error }
}

export async function sb_getCodeSubmissions(userId) {
  const { data, error } = await supabase
    .from('sb_code_submissions')
    .select('*')
    .eq('user_id', userId)
    .order('submitted_at', { ascending: false })
  return { data, error }
}

export async function sb_saveCodeSubmission(submission) {
  const { data, error } = await supabase
    .from('sb_code_submissions')
    .insert(submission)
    .select()
    .single()
  return { data, error }
}
