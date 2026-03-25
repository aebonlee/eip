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

## 향후 계획

### v1.4.0 (예정)
- [ ] 학습 진도 추적 기능 완성
- [ ] 오답 노트 기능
- [ ] 커뮤니티 기능 구현 (질문/답변, 시험 후기)
- [ ] 실제 YouTube 강의 링크 연결
- [ ] 다크/라이트 테마 전환
