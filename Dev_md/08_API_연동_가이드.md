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

## 2. Wandbox API 연동 (코드 실행)

> **이전**: Judge0 API (RapidAPI, 유료) → Piston API (무료, 2026/2/15부터 화이트리스트 전용)
> **현재**: Wandbox API (무료, API 키 불필요, CORS 지원)

### 엔드포인트
- **URL**: `https://wandbox.org/api/compile.json`
- **Method**: `POST`
- **Content-Type**: `application/json`

### 요청 본문
```javascript
{
  code: '소스코드 문자열',
  compiler: 'gcc-head',       // 컴파일러 선택
  stdin: '표준입력 문자열',    // 입력값 (선택)
  save: false,                 // 코드 저장 여부
}
```

### 컴파일러 매핑
| 언어 | Wandbox 컴파일러 | Monaco Editor ID |
|------|-----------------|-----------------|
| C (GCC) | `gcc-head` | `c` |
| Java (OpenJDK) | `openjdk-head` | `java` |
| Python 3 | `cpython-head` | `python` |

### Java 특수 처리
Wandbox에서 Java 파일명은 `prog.java`로 고정되므로, class명을 `prog`로 변환해야 합니다.
```javascript
if (language === 'java') {
  codeToRun = code.replace(/public\s+class\s+\w+/, 'public class prog')
}
```

### 응답 처리
| 필드 | 설명 |
|------|------|
| `program_output` | 프로그램 표준 출력 |
| `program_error` | 런타임 에러 출력 |
| `compiler_error` | 컴파일 에러 메시지 |
| `compiler_output` | 컴파일러 표준 출력 |
| `status` | 종료 코드 (0=성공) |

### 사용 예시
```javascript
const response = await fetch('https://wandbox.org/api/compile.json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    code: '#include <stdio.h>\nint main() { printf("Hello"); return 0; }',
    compiler: 'gcc-head',
    stdin: '',
    save: false,
  }),
})
const result = await response.json()
// result.program_output → "Hello"
```

### Wandbox API 특징
- 무료, API 키 불필요
- CORS 지원 (프론트엔드에서 직접 호출 가능)
- 다양한 컴파일러 버전 지원
- 요청 제한: 명시적 제한 없으나, 과도한 사용 시 차단 가능

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
