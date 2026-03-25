// 필기시험 과목 및 문제 데이터
export const certTypes = {
  engineer: {
    id: 'engineer',
    name: '정보처리기사',
    description: '국가기술자격 정보처리 분야 기사급',
    subjects: [
      { id: 'sw-design', name: '소프트웨어 설계', chapters: 5 },
      { id: 'sw-dev', name: '소프트웨어 개발', chapters: 5 },
      { id: 'db', name: '데이터베이스 구축', chapters: 5 },
      { id: 'sys-integration', name: '프로그래밍 언어 활용', chapters: 5 },
      { id: 'info-security', name: '정보시스템 구축관리', chapters: 5 },
    ],
  },
  industrial: {
    id: 'industrial',
    name: '정보처리산업기사',
    description: '국가기술자격 정보처리 분야 산업기사급',
    subjects: [
      { id: 'info-sys', name: '정보시스템 기반 기술', chapters: 4 },
      { id: 'programming', name: '프로그래밍 언어 활용', chapters: 4 },
      { id: 'db', name: '데이터베이스 활용', chapters: 4 },
      { id: 'info-comm', name: '정보통신 활용', chapters: 4 },
    ],
  },
  functional: {
    id: 'functional',
    name: '프로그래밍기능사',
    description: '국가기술자격 프로그래밍 분야 기능사급',
    subjects: [
      { id: 'programming-basic', name: '정보처리와 컴퓨터 일반', chapters: 3 },
      { id: 'algorithm', name: '알고리즘', chapters: 3 },
      { id: 'db-basic', name: '데이터베이스', chapters: 3 },
    ],
  },
}

export const chapters = {
  'sw-design': [
    {
      id: 'ch1',
      name: '요구사항 확인',
      topics: ['소프트웨어 생명주기 모델', '스크럼(Scrum)', 'XP(eXtreme Programming)', '요구사항 정의', 'UML'],
      content: `## 소프트웨어 생명주기 모델

### 폭포수 모형 (Waterfall Model)
- 각 단계를 확실히 매듭짓고 다음 단계로 진행
- 가장 오래되고 폭넓게 사용된 전통적인 모형
- 단계: 타당성 검토 → 계획 → 요구분석 → 설계 → 구현 → 시험 → 유지보수

### 프로토타이핑 모형 (Prototyping Model)
- 사용자의 요구사항을 정확히 파악하기 위해 시제품(Prototype)을 만들어 최종 결과물을 예측

### 나선형 모형 (Spiral Model)
- 보헴(Boehm)이 제안
- 폭포수 모형과 프로토타이핑 모형의 장점에 위험 분석 기능을 추가
- 단계: 계획 및 정의 → 위험 분석 → 공학적 개발 → 고객 평가

### 애자일 (Agile)
- 고객의 요구사항 변화에 유연하게 대응
- 대표적 방법론: 스크럼, XP, 칸반, 린

### 스크럼 (Scrum)
- 제품 책임자(PO), 스크럼 마스터(SM), 개발팀으로 구성
- 스프린트(Sprint): 2~4주 단위 개발 주기
- 백로그(Backlog): 개발에 필요한 요구사항 목록

### XP (eXtreme Programming)
- 핵심 가치: 의사소통, 단순성, 용기, 존중, 피드백
- 주요 실천법: 페어 프로그래밍, TDD, 리팩토링, CI`,
    },
    {
      id: 'ch2',
      name: '화면 설계',
      topics: ['UI 설계 원칙', 'UI 표준 및 지침', '스토리보드', '와이어프레임', '프로토타입'],
      content: `## 화면 설계

### UI 설계 원칙
- **직관성**: 누구나 쉽게 이해하고 사용
- **유효성**: 사용자의 목적을 정확히 달성
- **학습성**: 초보와 숙련자 모두 쉽게 배우고 사용
- **유연성**: 사용자의 요구사항을 최대한 수용

### UI 요소
- **와이어프레임**: 페이지 레이아웃의 뼈대
- **스토리보드**: 와이어프레임 + 콘텐츠 + 기능 설명
- **프로토타입**: 실제 구현된 것처럼 테스트 가능한 모형
- **목업(Mockup)**: 실제 화면과 유사한 정적 모형`,
    },
    {
      id: 'ch3',
      name: '애플리케이션 설계',
      topics: ['소프트웨어 아키텍처', '디자인 패턴', '객체지향 설계', '모듈화', '결합도와 응집도'],
      content: `## 애플리케이션 설계

### 디자인 패턴 (GoF)
**생성 패턴**: Abstract Factory, Builder, Factory Method, Prototype, Singleton
**구조 패턴**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
**행위 패턴**: Chain of Responsibility, Command, Iterator, Mediator, Observer, State, Strategy, Template Method, Visitor

### 결합도 (Coupling) - 낮을수록 좋음
자료 결합도 < 스탬프 < 제어 < 외부 < 공통 < 내용 결합도

### 응집도 (Cohesion) - 높을수록 좋음
우연적 < 논리적 < 시간적 < 절차적 < 통신적 < 순차적 < 기능적`,
    },
    {
      id: 'ch4',
      name: '인터페이스 설계',
      topics: ['시스템 인터페이스', 'EAI', 'ESB', 'API', '미들웨어'],
      content: `## 인터페이스 설계

### EAI (Enterprise Application Integration)
- **Point-to-Point**: 1:1 연결
- **Hub & Spoke**: 허브 시스템을 통한 중앙 집중
- **Message Bus (ESB)**: 미들웨어를 통한 연결
- **Hybrid**: 그룹 내 허브, 그룹 간 버스

### 미들웨어
- **DB**: ODBC, JDBC
- **RPC**: 원격 프로시저 호출
- **MOM**: 메시지 지향 미들웨어
- **TP-Monitor**: 트랜잭션 처리 모니터
- **ORB**: 객체 요청 브로커
- **WAS**: 웹 애플리케이션 서버`,
    },
    {
      id: 'ch5',
      name: '아키텍처 패턴',
      topics: ['소프트웨어 아키텍처', 'REST API', 'MSA', '클라우드'],
      content: `## 아키텍처 패턴

### REST (Representational State Transfer)
- HTTP 기반의 아키텍처 스타일
- 무상태(Stateless), 캐시 가능, 균일한 인터페이스
- HTTP 메소드: GET, POST, PUT, DELETE

### MSA (Microservice Architecture)
- 서비스를 작은 단위로 분리하여 독립 배포
- 각 서비스는 독립적인 데이터베이스 보유

### 클라우드 서비스 모델
- **IaaS**: 인프라 제공 (AWS EC2)
- **PaaS**: 플랫폼 제공 (Heroku)
- **SaaS**: 소프트웨어 제공 (Google Docs)`,
    },
  ],
}

// CBT 모의시험 문제
export const mockQuestions = {
  engineer: [
    {
      id: 1, subject: 'sw-design',
      question: '소프트웨어 생명주기 모형 중 Boehm이 제안한 것으로, 위험 분석 기능을 추가한 모형은?',
      options: ['폭포수 모형', '나선형 모형', '프로토타입 모형', 'V 모형'],
      answer: 1,
      explanation: '나선형 모형(Spiral Model)은 보헴(Boehm)이 제안한 모형으로, 폭포수 모형과 프로토타이핑 모형의 장점에 위험 분석 기능을 추가한 모형입니다.',
    },
    {
      id: 2, subject: 'sw-design',
      question: '객체지향 설계에서 하나의 클래스가 다른 클래스의 기능을 이어받아 사용하는 것은?',
      options: ['캡슐화', '상속', '다형성', '추상화'],
      answer: 1,
      explanation: '상속(Inheritance)은 상위 클래스의 모든 속성과 메서드를 하위 클래스가 물려받는 것입니다.',
    },
    {
      id: 3, subject: 'sw-design',
      question: '다음 중 결합도가 가장 낮은 것은?',
      options: ['자료 결합도', '제어 결합도', '공통 결합도', '내용 결합도'],
      answer: 0,
      explanation: '결합도는 낮을수록 좋으며, 자료 결합도(Data Coupling)가 가장 낮습니다.',
    },
    {
      id: 4, subject: 'sw-design',
      question: 'UML 다이어그램 중 시스템의 기능을 사용자 관점에서 표현한 것은?',
      options: ['클래스 다이어그램', '시퀀스 다이어그램', '유스케이스 다이어그램', '활동 다이어그램'],
      answer: 2,
      explanation: '유스케이스 다이어그램은 사용자(Actor)와 시스템 간의 상호작용을 표현합니다.',
    },
    {
      id: 5, subject: 'sw-design',
      question: '디자인 패턴 중 객체의 생성을 서브클래스에게 위임하는 패턴은?',
      options: ['Singleton', 'Factory Method', 'Observer', 'Strategy'],
      answer: 1,
      explanation: 'Factory Method 패턴은 객체 생성을 서브클래스에 위임합니다.',
    },
    {
      id: 6, subject: 'sw-dev',
      question: '화이트박스 테스트 기법에 해당하지 않는 것은?',
      options: ['기초 경로 검사', '조건 검사', '동치 분할 검사', '루프 검사'],
      answer: 2,
      explanation: '동치 분할 검사(Equivalence Partitioning)는 블랙박스 테스트 기법입니다.',
    },
    {
      id: 7, subject: 'sw-dev',
      question: '형상 관리 도구가 아닌 것은?',
      options: ['Git', 'SVN', 'CVS', 'Maven'],
      answer: 3,
      explanation: 'Maven은 빌드 도구이며, Git, SVN, CVS는 형상 관리(버전 관리) 도구입니다.',
    },
    {
      id: 8, subject: 'sw-dev',
      question: '통합 테스트에서 상위 모듈부터 하위 모듈로 통합하며 테스트하는 방식은?',
      options: ['빅뱅 테스트', '하향식 통합', '상향식 통합', '회귀 테스트'],
      answer: 1,
      explanation: '하향식 통합(Top-Down)은 상위 모듈부터 하위 모듈로 통합하며 Stub을 사용합니다.',
    },
    {
      id: 9, subject: 'sw-dev',
      question: '소프트웨어 테스트에서 V 모델의 단위 테스트에 해당하는 설계 단계는?',
      options: ['요구사항 분석', '시스템 설계', '상세 설계', '아키텍처 설계'],
      answer: 2,
      explanation: 'V 모델에서 단위 테스트는 상세 설계(모듈 설계) 단계에 대응됩니다.',
    },
    {
      id: 10, subject: 'sw-dev',
      question: '코드 인스펙션(Code Inspection)에 대한 설명으로 옳은 것은?',
      options: ['자동화된 테스트 도구를 사용한 검사', '전문 검토 그룹이 수행하는 정적 분석', '실제 사용 환경에서의 테스트', '성능 측정을 위한 부하 테스트'],
      answer: 1,
      explanation: '코드 인스펙션은 전문 검토 그룹이 코드를 직접 읽고 검토하는 정적 분석 기법입니다.',
    },
    {
      id: 11, subject: 'db',
      question: '관계 대수에서 릴레이션의 특정 튜플을 추출하는 연산은?',
      options: ['프로젝트(Project)', '셀렉트(Select)', '조인(Join)', '디비전(Division)'],
      answer: 1,
      explanation: '셀렉트(Select, σ)는 조건을 만족하는 튜플(행)을 추출하는 연산입니다.',
    },
    {
      id: 12, subject: 'db',
      question: '정규화 과정에서 이행적 함수 종속을 제거하는 단계는?',
      options: ['제1정규형', '제2정규형', '제3정규형', 'BCNF'],
      answer: 2,
      explanation: '제3정규형(3NF)은 이행적 함수 종속(Transitive Dependency)을 제거합니다.',
    },
    {
      id: 13, subject: 'db',
      question: 'SQL에서 테이블의 구조를 변경하는 명령어는?',
      options: ['CREATE', 'ALTER', 'UPDATE', 'MODIFY'],
      answer: 1,
      explanation: 'ALTER는 DDL(데이터 정의어)로, 테이블의 구조를 변경합니다.',
    },
    {
      id: 14, subject: 'db',
      question: '트랜잭션의 특성(ACID)에서 결과가 영구적으로 반영되는 특성은?',
      options: ['원자성(Atomicity)', '일관성(Consistency)', '독립성(Isolation)', '영속성(Durability)'],
      answer: 3,
      explanation: '영속성(Durability)은 완료된 트랜잭션의 결과가 영구적으로 DB에 반영되어야 한다는 특성입니다.',
    },
    {
      id: 15, subject: 'sys-integration',
      question: 'C언어에서 문자열 "Hello"를 저장하기 위한 최소 배열 크기는?',
      options: ['4', '5', '6', '7'],
      answer: 2,
      explanation: 'C언어 문자열은 끝에 NULL 문자(\\0)가 필요하므로 "Hello"(5글자) + NULL = 6바이트가 필요합니다.',
    },
    {
      id: 16, subject: 'sys-integration',
      question: 'Java에서 추상 메서드를 포함할 수 있는 것은?',
      options: ['인터페이스만', '추상 클래스만', '인터페이스와 추상 클래스', '일반 클래스'],
      answer: 2,
      explanation: '추상 메서드는 인터페이스와 추상 클래스 모두에 포함될 수 있습니다.',
    },
    {
      id: 17, subject: 'sys-integration',
      question: 'Python에서 리스트 [1,2,3,4,5]의 슬라이싱 [1:4]의 결과는?',
      options: ['[1,2,3,4]', '[2,3,4]', '[2,3,4,5]', '[1,2,3]'],
      answer: 1,
      explanation: 'Python 슬라이싱은 시작 인덱스부터 끝 인덱스-1까지 추출합니다. [1:4] → [2,3,4]',
    },
    {
      id: 18, subject: 'info-security',
      question: 'TCP/IP 4계층 모델에서 HTTP, FTP가 속하는 계층은?',
      options: ['네트워크 접근 계층', '인터넷 계층', '전송 계층', '응용 계층'],
      answer: 3,
      explanation: 'HTTP, FTP, SMTP, DNS 등은 TCP/IP 모델의 응용 계층에 속합니다.',
    },
    {
      id: 19, subject: 'info-security',
      question: '대칭키 암호화 알고리즘이 아닌 것은?',
      options: ['AES', 'DES', 'RSA', 'SEED'],
      answer: 2,
      explanation: 'RSA는 비대칭키(공개키) 암호화 알고리즘입니다.',
    },
    {
      id: 20, subject: 'info-security',
      question: '접근 제어 모델 중 주체의 역할에 따라 접근을 제어하는 방식은?',
      options: ['DAC', 'MAC', 'RBAC', 'ACL'],
      answer: 2,
      explanation: 'RBAC(Role-Based Access Control)은 사용자의 역할에 기반한 접근 제어 방식입니다.',
    },
  ],
}

export function getQuestionsBySubject(certType, subjectId) {
  const questions = mockQuestions[certType] || []
  return questions.filter(q => q.subject === subjectId)
}

export function getMockTestQuestions(certType, count = 20) {
  const questions = mockQuestions[certType] || []
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
