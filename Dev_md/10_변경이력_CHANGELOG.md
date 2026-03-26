# 변경 이력 (CHANGELOG)

## v1.0.0 (2026-03-26) - 초기 릴리스

### 프로젝트 초기화
- Vite 8 + React 19 + TailwindCSS 4 프로젝트 셋업
- 다크블루 테마 컬러 팔레트 적용 (#0F172A 기반)
- React Router v7 SPA 라우팅 구성 (17개 라우트)

### 인증 시스템
- Supabase Auth 연동 (Google OAuth, Kakao OAuth)
- AuthContext 전역 인증 상태 관리
- 자동 프로필 생성 (sb_profiles 테이블)
- OAuth 콜백 처리 (/auth/callback)

### 필기시험 학습 (Phase 2)
- 자격증 3종 선택 (기사/산업기사/기능사)
- 과목별 챕터 이론 학습 (소프트웨어 설계 5챕터 구현)
- CBT 모의시험 (20문항, 30분 타이머)
- 시험 결과 페이지 (합격/불합격 판정, 문제별 해설)
- Supabase 시험 결과 저장

### 실기시험 학습 (Phase 3)
- SQL 실습 6문제 (SELECT, JOIN, GROUP BY, HAVING, 서브쿼리)
- 알고리즘 실습 5문제 (정렬, 스택, 이진탐색, 후위표기법, 해시)
- 단답형 연습 10문제 (소공, DB, 네트워크, 보안, 프로그래밍)
- 힌트/정답 확인 기능

### 코딩 실습 (Phase 3)
- Monaco Editor 통합 (VS Code 수준 코드 에디터)
- Judge0 API 연동 (서버 코드 실행)
- C언어 4문제, Java 3문제, Python 4문제
- 코드 초기화, 힌트, 정답 코드 보기

### 온라인 강의실 (Phase 4)
- YouTube 임베드 강의 재생
- 카테고리별 필터 (이론/실습/프로그래밍/합격팁)
- 관련 강의 추천 사이드바
- 10개 강의 데이터

### 마이페이지 (Phase 4)
- 학습 통계 대시보드 (시험 횟수, 평균 정답률, 코딩 제출)
- 시험 결과 이력 (정답률 그래프)
- 코딩 제출 이력

### UI/UX
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 공통 UI 컴포넌트 (Button, Card, Modal, Timer, ProgressBar)
- 모바일 햄버거 메뉴
- 커스텀 스크롤바 스타일

### 배포 & DevOps
- GitHub Pages 배포 (gh-pages)
- 커스텀 도메인: eip.dreamitbiz.com
- SPA 라우팅 지원 (404.html 리다이렉트)
- OG 이미지 자동 생성 (sharp, 1200x630)
- OG/Twitter 메타태그

### 개발 문서 (Dev_md/)
- 01_프로젝트_개요.md ~ 10_변경이력_CHANGELOG.md

---

## v1.1.0 (2026-03-26) - 디자인 시스템 전면 개편

### CSS 디자인 시스템 교체
- TailwindCSS 4 제거 → 순수 CSS Custom Properties 기반 디자인 시스템으로 전환
- python-study (PyMaster) 프로젝트의 디자인 스타일을 참고하여 전면 재구현
- 9개 CSS 모듈 파일 생성 (base, navbar, hero, footer, course, editor, animations, lectures, mypage)

### 새 디자인 시스템 특징
- **컬러 팔레트**: Primary #306998 (딥블루), Accent #FFD43B (옐로우) 기반
- **글래스모피즘 네비바**: backdrop-filter blur, 투명 배경, 스크롤 반응
- **히어로 섹션**: 그라디언트 배경, 파티클 애니메이션, 떠다니는 코드 라인
- **다크 푸터**: 그라디언트 배경, 3컬럼 그리드, 패밀리 사이트 셀렉트, 맨 위로 버튼
- **페이지 헤더**: 그라디언트 배경 + 글래스모피즘 아이콘 + 브레드크럼
- **카드 시스템**: .card, .card-hover, .cert-card, .subject-card, .path-card 등
- **퀴즈 UI**: 문제 번호 내비게이션, 선택 옵션 하이라이트, 정답/오답 시각 피드백
- **코드 에디터**: 헤더 바, 실행 버튼, stdout/stderr 분리 출력
- **반응형**: 1024px, 768px, 480px 브레이크포인트

### 컴포넌트 전면 리라이팅
- 모든 JSX 컴포넌트에서 Tailwind 유틸리티 클래스 제거
- CSS 모듈의 시맨틱 클래스명 사용 (.card, .btn-primary, .quiz-option 등)
- UI 컴포넌트 (Button, Card, Timer, ProgressBar, Modal) 순수 CSS 클래스 기반으로 재작성
- Header → 글래스모피즘 네비바 (유저 메뉴 드롭다운 포함)
- Footer → 다크 그라디언트 푸터 (3컬럼 + 맨 위로 버튼)
- HomePage → Hero + Stats + Features + Path Cards + CTA 섹션
- 각 학습 페이지 → page-header + 통일된 카드/퀴즈 UI

### 폰트
- 본문: Noto Sans KR (Google Fonts CDN)
- 코드: JetBrains Mono

---

## v1.1.1 (2026-03-26) - 코드 실행 API 전환

### 코드 실행 엔진 변경
- Judge0 API (RapidAPI) → 구독 미인증 오류 발생
- Piston API → 2026/2/15부터 화이트리스트 전용으로 변경
- **Wandbox API** (`https://wandbox.org/api/compile.json`) 최종 적용
  - 무료, API 키 불필요, CORS 지원
  - 컴파일러: gcc-head (C), openjdk-head (Java), cpython-head (Python)
  - Java class명 자동 변환 (Main → prog)

### 푸터 수정
- python-study 디자인 정확히 반영
- 구조 일치: centered bottom, ul/li, footer-brand 래퍼

---

## v1.2.0 (2026-03-26) - 메가 메뉴 & 신규 페이지

### 네비게이션 전면 재구성
- 기존 평면 메뉴 (홈/필기/실기/코딩/강의실) 제거
- **메가 메뉴** 5개 항목으로 재구성:
  - **자격증 소개**: 심플 드롭다운 (개요, 기사, 산업기사, 기능사)
  - **정보처리기사**: 메가 드롭다운 (필기 5과목+모의시험, 실기 3유형, 코딩 3언어, 강의실)
  - **정보처리산업기사**: 메가 드롭다운 (필기 4과목+모의시험, 실기, 코딩, 강의실)
  - **프로그래밍기능사**: 메가 드롭다운 (필기 3과목+모의시험, 실기, 코딩, 강의실)
  - **커뮤니티**: 단일 링크
- 데스크톱: hover 드롭다운 + 모바일: 아코디언 접기/펼치기
- 메가 메뉴 2컬럼 그리드 레이아웃, 섹션 구분 (필기/실기/코딩/강의실)
- 모의시험 링크 하이라이트 표시 (accent 색 도트)

### 신규 페이지
- **자격증 소개** (`/cert-intro`): 3종 자격증 상세 카드 (배지, 시험과목, 필기/실기 정보, 합격기준, 시험시간, 큐넷 링크)
- **커뮤니티** (`/community`): 준비 중 안내 (Q&A, 시험 후기, 스터디 모집 예정)

### 푸터 연락처 수정
- 이메일: aebon@dreamitbiz.com (기존 info@dreamitbiz.com 오류 수정)
- 카카오톡 ID: aebon (신규 추가)
- 운영시간: 평일 09:00 ~ 18:00 (신규 추가)
- 바로가기 링크 업데이트: 자격증 소개, 커뮤니티 추가

### 개발 문서 업데이트
- 전체 문서 10종 최신 상태 반영 (메가 메뉴, Wandbox API, 신규 페이지, 연락처)

---

## v1.3.0 (2026-03-26) - 콘텐츠 대량 확충

### 필기시험 이론 챕터 확충 (5 → 50챕터)
- **정보처리기사**: 5과목 × 5챕터 = 25챕터 (sw-design, sw-dev, db, sys-integration, info-security)
- **정보처리산업기사**: 4과목 × 4챕터 = 16챕터 (info-sys, programming, db, info-comm)
- **프로그래밍기능사**: 3과목 × 3챕터 = 9챕터 (programming-basic, algorithm, db-basic)
- 각 챕터에 시험 출제 핵심 내용을 마크다운으로 상세 작성

### 데이터 파일 구조 개선
- 파일 크기 문제로 과목별 분리 구조 도입
- `src/data/chapters/` 디렉토리: engineer.js, industrial.js, functional.js
- `src/data/mock-questions/` 디렉토리: engineer.js, industrial.js, functional.js
- `written-exam-data.js`에서 분리된 파일을 import하여 기존 export 구조 유지 (컴포넌트 수정 불필요)

### CBT 모의시험 문제 확충 (20 → 185문제)
- **정보처리기사**: 80문제 (과목별 16문제, 기존 20 → 80)
- **정보처리산업기사**: 60문제 (과목별 15문제, 신규)
- **프로그래밍기능사**: 45문제 (과목별 15문제, 신규)

### 실기시험 문제 확충 (21 → 60문제)
- **SQL 실습**: 6 → 15문제 (+9: ORDER BY, DISTINCT, LEFT JOIN, INSERT, UPDATE, DELETE, 스칼라 서브쿼리, CASE WHEN, 집계함수 심화)
- **알고리즘 실습**: 5 → 15문제 (+10: 선택정렬, 삽입정렬, 퀵소트, 큐, 트리순회, 재귀, 행렬, 그리디, BFS/DFS)
- **단답형 연습**: 10 → 30문제 (+20: 디자인패턴, UML, 테스트, 네트워크, DB정규화, 보안공격, SDLC, 프로세스관리, 페이지교체, OSI)

### 코딩 실습 확충 (11 → 36문제)
- **C언어**: 4 → 12문제 (+8: 문자열 길이, 배열 정렬, 포인터, 구조체, 재귀, 파일처리, 행렬, 연결리스트)
- **Java**: 3 → 12문제 (+9: 배열 정렬, 클래스/객체, 상속, ArrayList, HashMap, 예외처리, 인터페이스, 재귀, 회문)
- **Python**: 4 → 12문제 (+8: 문자열 뒤집기, 리스트 정렬, 딕셔너리, 클래스, 파일처리, 람다/map, 재귀, 정규표현식)

### 개발 문서 업데이트
- 03_프로젝트_구조.md: 신규 chapters/, mock-questions/ 디렉토리 구조 반영
- 09_데이터_구조_설명.md: 분리된 파일 구조, 확충된 문제 수, 확장 가이드 업데이트

---

## v1.3.1 (2026-03-26) - UI 버그 수정 & 실기시험 자격증별 분리

### 실기시험 자격증별 분리
- 라우트 변경: `/practical-exam/sql` → `/practical-exam/:certType/sql`
- 자격증별 문제 난이도 필터링:
  - **정보처리기사**: 전체 문제 (easy + medium + hard) — SQL 15, 알고리즘 15, 단답형 30
  - **정보처리산업기사**: easy + medium — SQL 10, 알고리즘 10, 단답형 20
  - **프로그래밍기능사**: easy만 — SQL 5, 알고리즘 4, 단답형 10
- 메가 메뉴 링크 자격증별 분리 (`/practical-exam/engineer/*`, `/practical-exam/industrial/*`, `/practical-exam/functional/*`)
- 브레드크럼에 자격증명 표시

### 마크다운 렌더링 수정
- ChapterStudy 컴포넌트: 인라인 `**bold**` 텍스트를 `<strong>` 태그로 변환
- 모든 라인 타입(제목, 불렛, 일반 텍스트)에서 굵은 글씨 렌더링 지원
- `**` 기호가 화면에 직접 표시되지 않도록 수정

### 메뉴 개선
- 드롭다운에 `::before` 투명 브리지(16px) 추가 — 트리거와 드롭다운 사이 마우스 이동 시 닫히지 않음
- `handleMenuLeave` 딜레이 200ms 적용 — 메뉴 전환 시 깜빡임 방지
- `handleMenuEnter`에서 기존 타이머 즉시 클리어
- 코딩실습/강의실 등 공유 경로 페이지에서 자격증 메뉴 3개가 동시 active 표시되는 버그 수정
  - `isActive()`에서 `/coding-lab`, `/lectures` 공유 경로를 판정 제외

### 코드 에디터 높이 동적 조절
- 고정 300px → 코드 줄 수 기반 동적 높이 (`Math.max(300, (lineCount + 2) * 20)px`)
- 긴 코드도 스크롤 없이 전체 표시

---

## v1.4.0 (2026-03-26) - UI 리디자인 (모던 컬러 + Font Awesome + 사이드바 레이아웃)

### Phase 1: 컬러 팔레트 모던화 + Font Awesome CDN
- Font Awesome 6 Free CDN 추가 (`index.css`에 `@import` 추가)
- **컬러 토큰 전면 교체** (`base.css`):
  - Primary: #306998 → `#2563EB` (모던 블루)
  - Primary Dark: #1E4F72 → `#1D4ED8`
  - Primary Light: #4B8BBE → `#3B82F6`
  - Accent: #FFD43B → `#F59E0B` (차분한 앰버)
  - Accent Dark: #E6B800 → `#D97706`, Accent Light: #FFE873 → `#FBBF24`
  - bg-light: #F7F9FC → `#F8FAFC`, bg-medium: #E8EDF2 → `#E2E8F0`
  - gradient-primary, gradient-hero, gradient-accent 모두 새 컬러 반영
- **난이도 전용 CSS 변수** 추가 (easy/medium/hard에 대한 bg, text, border)
- **타이포그래피**: body line-height 1.7→1.8, 제목 line-height 1.3→1.4
- **rgba 하드코딩 일괄 교체**: `rgba(48, 105, 152, ...)` → `rgba(37, 99, 235, ...)`
  - 대상: base.css, course.css, editor.css, navbar.css, mypage.css (총 22곳)
- **accent rgba 교체**: `rgba(255, 212, 59, ...)` → `rgba(245, 158, 11, ...)`
  - 대상: course.css, editor.css, navbar.css (총 7곳)

### Phase 2: 이모지 → Font Awesome 아이콘 교체 (14파일)
- **아이콘 매핑** (17종):
  - 필기시험 📝 → `fa-file-pen` | 실기시험 💻 → `fa-laptop-code`
  - 코딩 ⌨️ → `fa-code` | 강의 🎓 → `fa-graduation-cap` / `fa-play-circle`
  - 기사 🎓 → `fa-user-graduate` | 산업기사 🏭 → `fa-industry` | 기능사 ⌨️ → `fa-keyboard`
  - SQL 🗃️ → `fa-database` | 알고리즘 🧮 → `fa-diagram-project` | 단답형 ✏️ → `fa-pen`
  - 이론학습 📖 → `fa-book-open` | Q&A 💬 → `fa-comments`
  - 후기 📝 → `fa-clipboard-check` | 스터디 👥 → `fa-users` | 마이페이지 👤 → `fa-user`
  - 합격 팁 🎯 → `fa-bullseye`
- **JSX 렌더링**: `<i className="fa-solid fa-xxx"></i>` 형태로 교체
- **아이콘 컨테이너**: 배경색 + 흰색 아이콘 스타일 적용
- **수정 파일**: HomePage, WrittenExamHome, SubjectList, ChapterStudy, PracticalExamHome, SQLPractice, AlgorithmPractice, ShortAnswer, CodingLabHome, CodingExercise, LecturesHome, CommunityPage, MyPage, lectures-data.js

### Phase 3: 실기 문제 풀이 — 사이드바 + 콘텐츠 레이아웃
- `course.css`에 `.practice-layout` 관련 CSS 추가 (grid 280px + 1fr)
  - `.practice-sidebar`: sticky, max-height, overflow-y auto
  - `.practice-nav-item`: flex, hover/active 상태
  - `.practice-nav-num`: 28px 원형 번호
  - `.difficulty-dot`: 8px 원형 (easy=green, medium=amber, hard=red)
  - 반응형: 1024px 이하 → 단일 컬럼
- **적용 컴포넌트**: SQLPractice, AlgorithmPractice, ShortAnswer
  - 기존 단일 quiz-container → 좌측 문제 목록 사이드바 + 우측 문제 풀이 콘텐츠

### Phase 4: 난이도별 카드 색상 시스템
- **새 카드 클래스** (`course.css`):
  - `.card-difficulty-easy`: 초록 좌측 보더 + #ECFDF5→white 그라디언트
  - `.card-difficulty-medium`: 앰버 좌측 보더 + #FFFBEB→white 그라디언트
  - `.card-difficulty-hard`: 빨강 좌측 보더 + #FEF2F2→white 그라디언트
- **난이도 배지 CSS 강화**: 각 레벨에 border 추가
- **적용**: SQLPractice, AlgorithmPractice, CodingExercise의 문제 카드에 동적 클래스

### Phase 5: 가독성 개선
- `.quiz-question` line-height: 1.6 → 1.8
- `.quiz-card` padding: 32px → 36px
- `.lesson-content p` line-height 1.8 명시

### 기타 수정
- CommunityPage: `page-header-content` → `page-header-inner` (CSS 클래스 일치)
- CommunityPage: 중앙 SVG 아이콘 → Font Awesome 교체

---

## v1.5.0 (2026-03-26) - 실기시험 문제 자격증별 완전 분리

### 실기시험 문제 분리
- 기존: 단일 문제 풀에서 난이도 필터링으로 자격증 구분
- 변경: **자격증별 독립 문제 세트**로 완전 분리
- `src/data/practical-questions/` 디렉토리 생성:
  - `engineer.js`: 기사 SQL 15 + 알고리즘 15 + 단답형 30 = 60문제 (기존 문제 이동)
  - `industrial.js`: 산업기사 SQL 10 + 알고리즘 10 + 단답형 20 = 40문제 (신규 작성)
  - `functional.js`: 기능사 SQL 7 + 알고리즘 7 + 단답형 10 = 24문제 (신규 작성)

### 자격증별 수준 차이
- **정보처리기사**: 서브쿼리, HAVING, CASE WHEN, 복합 JOIN / 트리순회, 그래프, 해시, 행렬, 재귀 / 디자인패턴, UML, 보안, 정규화, OSI
- **정보처리산업기사**: SELECT, WHERE, JOIN, GROUP BY, DML / 배열, 정렬, 스택/큐, 이진탐색 / 정보시스템, 프로그래밍, DB, 정보통신
- **프로그래밍기능사**: SELECT, WHERE, ORDER BY, COUNT / 변수추적, 반복문, 배열, 기본연산 / 프로그래밍기초, 자료형, 연산자

### 데이터 구조 변경
- `practical-exam-data.js`: 난이도 필터링 로직 제거, import + certType 매핑 방식으로 변경
- 기존 getter 함수(`getSQLQuestions(certType)` 등)의 시그니처 유지 — 컴포넌트 수정 불필요

### 문서 업데이트
- `03_프로젝트_구조.md`: practical-questions/ 디렉토리 구조 반영
- `09_데이터_구조_설명.md`: 분리 구조, 문제 수준별 설명 업데이트

---

## v1.5.1 (2026-03-26) - 실기시험 문제 대량 확충 (124 → 253문제)

### PDF 참고자료 분석
- `Dev_md/pdf/` 폴더의 8개 PDF 교재 분석 (130개 키워드 + 17개 SQL + 46개 코드추적 문제)
- C 포인터, 구조체, 사용자정의함수, Java 클래스/상속, Python 활용 문제를 실기 데이터에 반영

### 정보처리기사 (engineer.js): 60 → 135문제
- **SQL**: 15 → 30문제 (+15: DISTINCT COUNT, UPDATE SET, DELETE, ALTER TABLE, CREATE INDEX, CROSS JOIN, 서브쿼리 AVG, ALL, CASE WHEN, HAVING MIN/MAX, INSERT INTO SELECT, CREATE VIEW, IS NULL, UNION, 관계대수)
- **알고리즘**: 15 → 35문제 (+20: C 포인터 문자열길이, 포인터배열, 이중포인터, ary 포인터, char 포인터 ASCII, 구조체 배열/포인터, 소수판별, 거듭제곱, 팩토리얼 재귀, Java 클래스/객체전달/상속오버라이딩, Python lambda/슬라이싱/세트/클래스, C 버블정렬, Java static 메소드, C 2차원배열 지뢰찾기)
- **단답형**: 30 → 70문제 (+40: UML 다이어그램, 팩토리메소드/브리지/옵서버 패턴, DB 튜플/후보키/정규화, SQL삽입/XSS/세션하이재킹/Land Attack/ARP스푸핑, DNS/프레임/서브넷/TCP/UDP, 결합도/응집도/화이트박스/커버리지, DES/AES/RSA, EAI/ACID, 비트연산, OOP개념, Java 예약어)

### 정보처리산업기사 (industrial.js): 40 → 71문제
- **SQL**: 10 → 18문제 (+8: LIKE, BETWEEN, IN, COUNT NULL, ALTER TABLE DROP, HAVING, CREATE TABLE, LEFT JOIN)
- **알고리즘**: 10 → 18문제 (+8: C for 모듈로, while 자릿수합, Java String, Python 리스트 슬라이싱, C switch fall-through, Python dictionary, 선택정렬, C 체인함수)
- **단답형**: 20 → 35문제 (+15: 트랜잭션, HAVING, 동치분할, 경계값, HTTP 404, ARP, 오버라이딩/오버로딩, ALTER DDL, 애자일, 대칭/비대칭 암호화, Python 비교, DML, 클래스다이어그램)

### 프로그래밍기능사 (functional.js): 24 → 47문제
- **SQL**: 7 → 13문제 (+6: DISTINCT, OR, ORDER BY DESC, MAX, AVG, GROUP BY)
- **알고리즘**: 7 → 14문제 (+7: C char ASCII, 역순출력, Python //%연산, C 중첩for, Python 문자열, C 배열최대값, Python for-range 합)
- **단답형**: 10 → 20문제 (+10: 선택구조, 반복구조, float/double, char, 후위증감, 널문자, const, 배열, 삼항연산자, 런타임에러)

---

## 향후 계획

### v1.6.0 (예정)
- [ ] 학습 진도 추적 기능 완성
- [ ] 오답 노트 기능
- [ ] 커뮤니티 기능 구현 (질문/답변, 시험 후기)
- [ ] 실제 YouTube 강의 링크 연결
- [ ] 다크/라이트 테마 전환
