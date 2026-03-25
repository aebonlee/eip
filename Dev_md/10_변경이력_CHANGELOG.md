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
- 01_프로젝트_개요.md
- 02_기술_스택.md
- 03_프로젝트_구조.md
- 04_라우팅_구조.md
- 05_DB_스키마.md
- 06_컴포넌트_설명.md
- 07_환경설정_가이드.md
- 08_API_연동_가이드.md
- 09_데이터_구조_설명.md
- 10_변경이력_CHANGELOG.md

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

## 향후 계획

### v1.1.0 (예정)
- [ ] 필기시험 전 과목 챕터 콘텐츠 추가
- [ ] 문제 은행 확충 (과목당 50문항 이상)
- [ ] 학습 진도 추적 기능 완성
- [ ] 오답 노트 기능

### v1.2.0 (예정)
- [ ] 실기시험 문제 확충
- [ ] 코딩 실습 문제 추가 (각 언어 10문제 이상)
- [ ] 실제 YouTube 강의 링크 연결
- [ ] 다크/라이트 테마 전환
