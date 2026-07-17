import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { sb_getStudyProgress, sb_updateStudyProgress } from '../lib/supabase'

// 이론 챕터 학습 완료 진도 (sb_study_progress)
// key: `${subjectId}/${chapterId}` — subject_id에 영역 id를 사용
export function useStudyProgress(certType: string) {
  const { user } = useAuth()
  const [completedKeys, setCompletedKeys] = useState<Set<string>>(new Set())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!user) {
      setCompletedKeys(new Set())
      setLoaded(true)
      return
    }
    setLoaded(false)
    sb_getStudyProgress(user.id, certType).then(({ data }) => {
      if (cancelled) return
      const keys = new Set<string>(
        (data || [])
          .filter((row: { completed: boolean }) => row.completed)
          .map((row: { subject_id: string; chapter_id: string }) => `${row.subject_id}/${row.chapter_id}`)
      )
      setCompletedKeys(keys)
      setLoaded(true)
    })
    return () => { cancelled = true }
  }, [user, certType])

  const isCompleted = useCallback(
    (subjectId: string, chapterId: string) => completedKeys.has(`${subjectId}/${chapterId}`),
    [completedKeys]
  )

  // 중복 insert 방지: 이미 완료된 챕터는 재저장하지 않음 (테이블 PK가 serial이라 upsert 중복 위험)
  const markCompleted = useCallback(async (subjectId: string, chapterId: string) => {
    if (!user) return
    const key = `${subjectId}/${chapterId}`
    if (completedKeys.has(key)) return
    setCompletedKeys(prev => new Set(prev).add(key))
    await sb_updateStudyProgress({
      user_id: user.id,
      cert_type: certType,
      subject_id: subjectId,
      chapter_id: chapterId,
      completed: true,
    })
  }, [user, certType, completedKeys])

  return { isCompleted, markCompleted, completedKeys, loaded, isLoggedIn: !!user }
}
