# Changelog

모든 주요 변경사항을 이 문서에 기록합니다.

---

## v2.0.0 (2026-03-26)

### 회차별 모의시험 + 합격 예측 + 문제 은행 확충

> 필기/실기 모두 회차별 모의시험 시스템, 합격 예측 대시보드, CBT 문제 은행 대폭 확충

#### 신규 기능

- **회차별 필기 모의시험**: 자격증별 회차 선택 → 동일 회차 = 동일 문제 보장 (Seeded Shuffle)
- **실기 모의시험**: SQL 7 + 알고리즘 6 + 단답형 7 = 20문제 혼합 시험, 60분 타이머
- **합격 예측 대시보드**: EWMA 합격 확률, 선형회귀 추세 분석, 과목별 약점 분석, 점수 이력 차트
- **문제 은행 확충**: 총 480문제 (기사 200, 산업기사 160, 기능사 120)

#### 신규 파일 (6개)

| 파일 | 설명 |
|------|------|
| `src/data/round-utils.js` | 해시 함수 + Seeded Shuffle 유틸리티 |
| `src/components/written-exam/RoundSelect.jsx` | 필기 회차 선택 그리드 |
| `src/components/practical-exam/PracticalRoundSelect.jsx` | 실기 회차 선택 그리드 |
| `src/components/practical-exam/PracticalMockTest.jsx` | 실기 혼합 모의시험 |
| `src/components/practical-exam/PracticalTestResult.jsx` | 실기 시험 결과/분석 |
| `src/components/mypage/PassPrediction.jsx` | 합격 예측 대시보드 |

#### 수정 파일 (13개)

| 파일 | 변경 내용 |
|------|-----------|
| `src/data/mock-questions/engineer.js` | 80 → 200문제 (+120) |
| `src/data/mock-questions/industrial.js` | 60 → 160문제 (+100) |
| `src/data/mock-questions/functional.js` | 45 → 120문제 (+75) |
| `src/data/written-exam-data.js` | `getWrittenRoundQuestions`, `getMaxWrittenRounds` 추가 |
| `src/data/practical-exam-data.js` | `getPracticalRoundQuestions`, `getMaxPracticalRounds` 추가 |
| `src/lib/supabase.js` | `sb_getTestResultsByType` 추가 |
| `src/App.jsx` | 5개 라우트 추가 |
| `src/components/written-exam/MockTest.jsx` | 회차 파라미터 + 과목별 점수 추적 |
| `src/components/written-exam/TestResult.jsx` | 과목별 분석 바 + 다음 회차 |
| `src/components/written-exam/SubjectList.jsx` | 회차별/랜덤 버튼 분리 |
| `src/components/practical-exam/PracticalExamHome.jsx` | 모의시험 배너 추가 |
| `src/components/mypage/MyPage.jsx` | 합격 예측 탭 추가 |
| `src/styles/course.css` | 회차 그리드, 게이지, 차트 CSS |

#### 라우트 추가

```
/written-exam/:certType/rounds              → RoundSelect
/written-exam/:certType/mock-test/:round    → MockTest
/practical-exam/:certType/rounds            → PracticalRoundSelect
/practical-exam/:certType/mock-test/:round  → PracticalMockTest
/practical-exam/:certType/result            → PracticalTestResult
```

---

## v1.5.1 (2026-03-25)

### 실기시험 문제 자격증별 분리 + 대량 확충

- 실기시험 문제 데이터를 자격증 유형별(기사/산업기사/기능사)로 분리
- SQL, 알고리즘, 단답형 문제 대폭 확충

---

## v1.4.0 (2026-03-24)

### UI 리디자인

- 모던 컬러 팔레트 적용
- Font Awesome 아이콘 통합
- 사이드바 레이아웃 도입

---

## v1.3.1 (2026-03-23)

### 메뉴 active 수정

- 코딩실습/강의실 페이지에서 메뉴 3개 동시 active 표시 수정

---

## v1.0.0 (초기 버전)

### 초기 기능

- 필기시험 CBT 랜덤 모의시험
- 실기시험 개별 연습 (SQL, 알고리즘, 단답형)
- 코딩실습 (Python, JavaScript, C, Java)
- 강의실
- 자격증 소개
- 커뮤니티
- 마이페이지
