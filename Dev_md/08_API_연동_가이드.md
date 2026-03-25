# API 연동 가이드

## 1. Supabase 연동

### 클라이언트 초기화 (`src/lib/supabase.js`)
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### OAuth 인증 흐름
1. 사용자가 로그인 버튼 클릭
2. `supabase.auth.signInWithOAuth({ provider: 'google' })` 호출
3. Google/Kakao 인증 페이지로 리다이렉트
4. 인증 완료 후 `/auth/callback`으로 리다이렉트
5. `AuthCallback.jsx`에서 `onAuthStateChange` 이벤트 수신
6. 프로필 자동 생성 (`sb_profiles` 테이블)

### Supabase Auth Providers 설정
| Provider | Redirect URL |
|----------|-------------|
| Google | `https://eip.dreamitbiz.com/auth/callback` |
| Kakao | `https://eip.dreamitbiz.com/auth/callback` |

### 데이터 CRUD 패턴
```javascript
// 조회
const { data, error } = await supabase
  .from('sb_test_results')
  .select('*')
  .eq('user_id', userId)
  .order('taken_at', { ascending: false })

// 삽입
const { data, error } = await supabase
  .from('sb_test_results')
  .insert({ user_id, cert_type, score, total, answers })
  .select()
  .single()

// 업서트 (있으면 수정, 없으면 삽입)
const { data, error } = await supabase
  .from('sb_profiles')
  .upsert({ id: userId, nickname, avatar_url })
  .select()
  .single()
```

---

## 2. Judge0 API 연동 (코드 실행)

### 엔드포인트
- **Base URL**: `https://judge0-ce.p.rapidapi.com`
- **코드 제출**: `POST /submissions?base64_encoded=true&wait=true`

### 요청 헤더
```javascript
headers: {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': import.meta.env.VITE_JUDGE0_API_KEY,
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
}
```

### 요청 본문
```javascript
body: {
  source_code: btoa(unescape(encodeURIComponent(code))),  // base64 인코딩
  language_id: 50,  // C=50, Java=62, Python=71
  stdin: btoa(unescape(encodeURIComponent(input))),        // 입력값
}
```

### 응답 처리
| 필드 | 설명 |
|------|------|
| `stdout` | 표준 출력 (base64) |
| `stderr` | 에러 출력 (base64) |
| `compile_output` | 컴파일 에러 (base64) |
| `status.id` | 3=성공, 4=오답, 5=시간초과, 6=컴파일에러 |

### 언어 ID 매핑
| 언어 | Language ID | Monaco ID |
|------|------------|-----------|
| C (GCC) | 50 | `c` |
| Java (OpenJDK) | 62 | `java` |
| Python 3 | 71 | `python` |

### 무료 플랜 제한
- 일일 50회 요청 (RapidAPI Basic)
- 실행 시간 제한: 5초
- 메모리 제한: 128MB

---

## 3. YouTube Embed API

### 임베드 URL 형식
```
https://www.youtube.com/embed/{videoId}
```

### iframe 속성
```html
<iframe
  src="https://www.youtube.com/embed/{youtubeId}"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### 썸네일 URL
| 크기 | URL |
|------|-----|
| 기본 (120x90) | `https://img.youtube.com/vi/{id}/default.jpg` |
| 중간 (320x180) | `https://img.youtube.com/vi/{id}/mqdefault.jpg` |
| 고화질 (480x360) | `https://img.youtube.com/vi/{id}/hqdefault.jpg` |
