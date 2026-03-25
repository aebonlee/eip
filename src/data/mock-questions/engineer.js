export const engineerQuestions = [
  // ===== sw-design (소프트웨어 설계) : 1~16 =====
  {
    id: 1,
    subject: 'sw-design',
    question: '소프트웨어 생명주기 모델 중 폭포수(Waterfall) 모델의 특징으로 옳지 않은 것은?',
    options: [
      '각 단계가 끝난 후 결과물이 명확하게 산출되어야 한다',
      '단계별로 정의된 산출물에 의해 진행 상황을 파악할 수 있다',
      '요구사항 변경이 빈번한 프로젝트에 적합하다',
      '선형 순차적 모델로 단계적으로 진행된다'
    ],
    answer: 2,
    explanation: '폭포수 모델은 요구사항이 명확하고 변경이 적은 프로젝트에 적합하며, 요구사항 변경이 빈번한 경우에는 애자일 방법론이 더 적합하다.'
  },
  {
    id: 2,
    subject: 'sw-design',
    question: 'UML 다이어그램 중 시스템의 기능을 사용자 관점에서 표현하며, 액터(Actor)와 유스케이스(Use Case) 간의 관계를 나타내는 것은?',
    options: [
      '클래스 다이어그램',
      '유스케이스 다이어그램',
      '시퀀스 다이어그램',
      '상태 다이어그램'
    ],
    answer: 1,
    explanation: '유스케이스 다이어그램은 시스템과 사용자(액터) 간의 상호작용을 표현하며, 시스템이 제공하는 기능을 사용자 관점에서 나타낸다.'
  },
  {
    id: 3,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 객체 생성을 서브클래스에 위임하여, 어떤 클래스의 인스턴스를 만들지를 서브클래스가 결정하게 하는 패턴은?',
    options: [
      '싱글톤(Singleton) 패턴',
      '팩토리 메서드(Factory Method) 패턴',
      '옵저버(Observer) 패턴',
      '전략(Strategy) 패턴'
    ],
    answer: 1,
    explanation: '팩토리 메서드 패턴은 객체 생성을 위한 인터페이스를 정의하고, 인스턴스 생성을 서브클래스가 결정하도록 하는 생성 패턴이다.'
  },
  {
    id: 4,
    subject: 'sw-design',
    question: '결합도(Coupling)가 가장 낮은 것은?',
    options: [
      '내용 결합도(Content Coupling)',
      '공통 결합도(Common Coupling)',
      '자료 결합도(Data Coupling)',
      '제어 결합도(Control Coupling)'
    ],
    answer: 2,
    explanation: '결합도가 낮을수록 좋으며, 자료 결합도는 모듈 간 인터페이스로 전달되는 파라미터를 통해서만 상호작용하므로 가장 낮은 결합도이다.'
  },
  {
    id: 5,
    subject: 'sw-design',
    question: '객체지향 개념에서 하나의 메시지에 대해 각 객체가 가지고 있는 고유한 방법으로 응답할 수 있는 능력을 무엇이라 하는가?',
    options: [
      '캡슐화(Encapsulation)',
      '상속(Inheritance)',
      '다형성(Polymorphism)',
      '추상화(Abstraction)'
    ],
    answer: 2,
    explanation: '다형성(Polymorphism)은 같은 메시지에 대해 각 객체가 고유한 방법으로 동작하는 능력으로, 오버로딩과 오버라이딩이 대표적인 예이다.'
  },
  {
    id: 6,
    subject: 'sw-design',
    question: 'UI 설계 원칙 중 사용자가 쉽게 배우고 사용할 수 있어야 한다는 원칙은?',
    options: [
      '직관성(Intuitiveness)',
      '유효성(Efficiency)',
      '학습성(Learnability)',
      '유연성(Flexibility)'
    ],
    answer: 2,
    explanation: '학습성은 사용자가 시스템을 쉽게 배울 수 있도록 설계해야 한다는 원칙으로, 초보 사용자도 쉽게 접근할 수 있어야 한다.'
  },
  {
    id: 7,
    subject: 'sw-design',
    question: '아키텍처 패턴 중 Model, View, Controller로 분리하여 상호작용하는 패턴은?',
    options: [
      '파이프-필터 패턴',
      'MVC 패턴',
      '마스터-슬레이브 패턴',
      '브로커 패턴'
    ],
    answer: 1,
    explanation: 'MVC 패턴은 애플리케이션을 모델(데이터), 뷰(화면), 컨트롤러(제어 로직)로 분리하여 유지보수성과 확장성을 높인다.'
  },
  {
    id: 8,
    subject: 'sw-design',
    question: 'EAI(Enterprise Application Integration) 구축 유형 중 중앙 집중형으로 허브 시스템을 통해 데이터를 전송하는 방식은?',
    options: [
      'Point-to-Point',
      'Hub & Spoke',
      'Message Bus',
      'Hybrid'
    ],
    answer: 1,
    explanation: 'Hub & Spoke 방식은 중앙의 허브 시스템을 통해 데이터를 전달하는 중앙 집중형 방식으로, 허브 장애 시 전체 시스템에 영향을 줄 수 있다.'
  },
  {
    id: 9,
    subject: 'sw-design',
    question: '미들웨어의 유형 중 데이터베이스와 애플리케이션 사이에서 데이터베이스 접근을 용이하게 하는 미들웨어는?',
    options: [
      'RPC(Remote Procedure Call)',
      'MOM(Message Oriented Middleware)',
      'DB 미들웨어',
      'TP 모니터'
    ],
    answer: 2,
    explanation: 'DB 미들웨어는 데이터베이스 벤더에서 제공하는 클라이언트에서 원격 데이터베이스와 연결하기 위한 미들웨어로, ODBC/JDBC 등이 해당된다.'
  },
  {
    id: 10,
    subject: 'sw-design',
    question: 'REST API의 특징으로 옳지 않은 것은?',
    options: [
      '클라이언트-서버 구조이다',
      '상태 정보를 서버에 저장하여 관리한다',
      'HTTP 프로토콜을 기반으로 한다',
      'URI를 통해 자원을 명시한다'
    ],
    answer: 1,
    explanation: 'REST는 무상태성(Stateless)을 특징으로 하며, 서버는 클라이언트의 상태 정보를 별도로 저장하거나 관리하지 않는다.'
  },
  {
    id: 11,
    subject: 'sw-design',
    question: 'UML에서 클래스 간의 관계 중 "부분-전체" 관계를 나타내며, 전체 객체가 소멸되면 부분 객체도 함께 소멸되는 강한 관계는?',
    options: [
      '연관(Association)',
      '집합(Aggregation)',
      '합성(Composition)',
      '의존(Dependency)'
    ],
    answer: 2,
    explanation: '합성(Composition)은 전체와 부분이 강한 생명주기 의존성을 가지며, 전체 객체가 소멸되면 부분 객체도 함께 소멸되는 강한 집합 관계이다.'
  },
  {
    id: 12,
    subject: 'sw-design',
    question: '응집도(Cohesion)가 가장 높은 것은?',
    options: [
      '기능적 응집도(Functional Cohesion)',
      '절차적 응집도(Procedural Cohesion)',
      '시간적 응집도(Temporal Cohesion)',
      '논리적 응집도(Logical Cohesion)'
    ],
    answer: 0,
    explanation: '기능적 응집도는 모듈 내의 모든 요소가 단일 기능을 수행하기 위해 구성된 것으로, 가장 높은 응집도이며 바람직한 설계이다.'
  },
  {
    id: 13,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴에서 행위(Behavioral) 패턴에 해당하지 않는 것은?',
    options: [
      '옵저버(Observer) 패턴',
      '전략(Strategy) 패턴',
      '어댑터(Adapter) 패턴',
      '상태(State) 패턴'
    ],
    answer: 2,
    explanation: '어댑터 패턴은 구조(Structural) 패턴에 해당하며, 호환되지 않는 인터페이스를 변환하여 함께 동작할 수 있게 한다.'
  },
  {
    id: 14,
    subject: 'sw-design',
    question: '소프트웨어 생명주기 모델 중 위험 분석 단계를 포함하며 반복적으로 개발을 진행하는 모델은?',
    options: [
      '폭포수 모델',
      '프로토타입 모델',
      '나선형 모델',
      'V 모델'
    ],
    answer: 2,
    explanation: '나선형 모델(Spiral Model)은 계획, 위험분석, 개발, 평가의 과정을 반복적으로 수행하며, 위험 관리를 중점적으로 다루는 모델이다.'
  },
  {
    id: 15,
    subject: 'sw-design',
    question: '객체지향 설계 원칙(SOLID) 중 "클래스는 확장에는 열려 있어야 하고, 수정에는 닫혀 있어야 한다"는 원칙은?',
    options: [
      '단일 책임 원칙(SRP)',
      '개방-폐쇄 원칙(OCP)',
      '리스코프 치환 원칙(LSP)',
      '인터페이스 분리 원칙(ISP)'
    ],
    answer: 1,
    explanation: '개방-폐쇄 원칙(OCP)은 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야 한다는 원칙이다.'
  },
  {
    id: 16,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 인스턴스가 오직 하나만 생성되는 것을 보장하고, 전역적인 접근점을 제공하는 패턴은?',
    options: [
      '빌더(Builder) 패턴',
      '프로토타입(Prototype) 패턴',
      '싱글톤(Singleton) 패턴',
      '추상 팩토리(Abstract Factory) 패턴'
    ],
    answer: 2,
    explanation: '싱글톤 패턴은 클래스의 인스턴스가 하나만 존재하도록 보장하며, 어디서든 해당 인스턴스에 접근할 수 있는 전역 접근점을 제공한다.'
  },

  // ===== sw-dev (소프트웨어 개발) : 17~32 =====
  {
    id: 17,
    subject: 'sw-dev',
    question: '화이트박스 테스트 기법에 해당하지 않는 것은?',
    options: [
      '문장 검증(Statement Coverage)',
      '분기 검증(Branch Coverage)',
      '조건 검증(Condition Coverage)',
      '동등 분할(Equivalence Partitioning)'
    ],
    answer: 3,
    explanation: '동등 분할은 블랙박스 테스트 기법으로, 입력 데이터를 유사한 그룹으로 나누어 각 그룹의 대표값으로 테스트하는 방법이다.'
  },
  {
    id: 18,
    subject: 'sw-dev',
    question: 'V 모델에서 단위 테스트와 대응되는 개발 단계는?',
    options: [
      '요구사항 분석',
      '시스템 설계',
      '아키텍처 설계',
      '모듈 설계(상세 설계)'
    ],
    answer: 3,
    explanation: 'V 모델에서 단위 테스트는 모듈 설계(상세 설계) 단계와 대응되며, 개별 모듈의 정확성을 검증한다.'
  },
  {
    id: 19,
    subject: 'sw-dev',
    question: '통합 테스트에서 하향식(Top-Down) 방식을 사용할 때 하위 모듈을 대신하여 사용하는 가상 모듈은?',
    options: [
      '드라이버(Driver)',
      '스텁(Stub)',
      '테스트 슈트(Test Suite)',
      '테스트 오라클(Test Oracle)'
    ],
    answer: 1,
    explanation: '하향식 통합에서는 아직 개발되지 않은 하위 모듈을 스텁(Stub)으로 대체하여 테스트하고, 상향식에서는 드라이버(Driver)를 사용한다.'
  },
  {
    id: 20,
    subject: 'sw-dev',
    question: '형상관리(SCM)에서 형상 항목의 변경사항을 관리하기 위한 활동의 순서로 올바른 것은?',
    options: [
      '형상 식별 → 형상 통제 → 형상 감사 → 형상 기록',
      '형상 통제 → 형상 식별 → 형상 기록 → 형상 감사',
      '형상 식별 → 형상 감사 → 형상 통제 → 형상 기록',
      '형상 기록 → 형상 식별 → 형상 통제 → 형상 감사'
    ],
    answer: 0,
    explanation: '형상관리 절차는 형상 식별 → 형상 통제(변경 통제) → 형상 감사 → 형상 기록(상태 보고) 순으로 수행된다.'
  },
  {
    id: 21,
    subject: 'sw-dev',
    question: '블랙박스 테스트 기법 중 입력 조건의 경계값을 중심으로 테스트 케이스를 설계하는 기법은?',
    options: [
      '동등 분할 기법',
      '경계값 분석 기법',
      '결정 테이블 기법',
      '상태 전이 기법'
    ],
    answer: 1,
    explanation: '경계값 분석(Boundary Value Analysis)은 입력 조건의 경계에서 오류가 발생할 확률이 높다는 점을 이용하여 경계값을 중심으로 테스트하는 기법이다.'
  },
  {
    id: 22,
    subject: 'sw-dev',
    question: 'Git에서 원격 저장소의 내용을 로컬로 가져오되, 현재 작업 브랜치에 자동으로 병합하지 않는 명령어는?',
    options: [
      'git pull',
      'git fetch',
      'git merge',
      'git clone'
    ],
    answer: 1,
    explanation: 'git fetch는 원격 저장소의 변경사항을 로컬로 가져오지만 현재 브랜치에 자동 병합하지 않으며, git pull은 fetch 후 자동으로 merge까지 수행한다.'
  },
  {
    id: 23,
    subject: 'sw-dev',
    question: '리팩토링(Refactoring)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '외부 동작을 변경하지 않으면서 내부 구조를 개선하는 것이다',
      '코드의 가독성과 유지보수성을 향상시킨다',
      '새로운 기능을 추가하는 것이 주된 목적이다',
      '코드 중복을 제거하고 설계를 개선한다'
    ],
    answer: 2,
    explanation: '리팩토링은 기능 추가가 아닌, 외부 동작을 변경하지 않으면서 코드의 내부 구조를 개선하여 유지보수성을 향상시키는 것이 목적이다.'
  },
  {
    id: 24,
    subject: 'sw-dev',
    question: '코드 인스펙션(Code Inspection)에 대한 설명으로 옳은 것은?',
    options: [
      '코드를 실행하여 오류를 발견하는 동적 분석 기법이다',
      '작성자가 혼자서 코드를 검토하는 기법이다',
      '전문가가 코드를 직접 읽으며 결함을 발견하는 정적 분석 기법이다',
      '자동화 도구에 의해서만 수행되는 기법이다'
    ],
    answer: 2,
    explanation: '코드 인스펙션은 코드를 실행하지 않고 전문가가 직접 읽으며 결함을 발견하는 정적 분석 기법으로, 동료 검토(Peer Review)의 한 형태이다.'
  },
  {
    id: 25,
    subject: 'sw-dev',
    question: 'CI/CD에서 CI(Continuous Integration)의 주요 목적은?',
    options: [
      '배포 자동화를 통한 릴리즈 효율성 향상',
      '개발자가 작성한 코드를 공유 저장소에 자주 통합하여 오류를 조기에 발견',
      '운영 환경의 모니터링 자동화',
      '고객의 요구사항 변경을 실시간 반영'
    ],
    answer: 1,
    explanation: 'CI(지속적 통합)는 개발자들이 코드 변경사항을 자주 메인 브랜치에 통합하고, 자동화된 빌드와 테스트를 통해 오류를 조기에 발견하는 것이 주요 목적이다.'
  },
  {
    id: 26,
    subject: 'sw-dev',
    question: '애플리케이션 패키징 시 고려사항으로 옳지 않은 것은?',
    options: [
      '사용자 환경을 고려한 실행 환경을 정의해야 한다',
      '내부 콘텐츠에 대한 암호화 및 보안을 고려해야 한다',
      '패키징은 개발이 완전히 완료된 후 1회만 수행해야 한다',
      '다양한 이기종 플랫폼 환경을 고려해야 한다'
    ],
    answer: 2,
    explanation: '애플리케이션 패키징은 개발 과정 중 지속적으로 수행되며, 모듈별로 별도의 패키징이 이루어질 수 있다.'
  },
  {
    id: 27,
    subject: 'sw-dev',
    question: '인터페이스 구현 검증 도구로 옳지 않은 것은?',
    options: [
      'xUnit',
      'STAF',
      'FitNesse',
      'Selenium'
    ],
    answer: 3,
    explanation: 'Selenium은 웹 애플리케이션 테스트 자동화 도구이며, xUnit, STAF, FitNesse는 인터페이스 구현 검증에 활용되는 도구이다.'
  },
  {
    id: 28,
    subject: 'sw-dev',
    question: '소프트웨어 빌드 자동화 도구에 해당하지 않는 것은?',
    options: [
      'Jenkins',
      'Maven',
      'Gradle',
      'Mantis'
    ],
    answer: 3,
    explanation: 'Mantis는 결함 추적 관리 도구(Bug Tracking Tool)이며, Jenkins, Maven, Gradle은 빌드 자동화 도구이다.'
  },
  {
    id: 29,
    subject: 'sw-dev',
    question: '테스트 오라클 중 모든 입력값에 대해 기대 결과를 생성할 수 있는 오라클은?',
    options: [
      '참(True) 오라클',
      '샘플링(Sampling) 오라클',
      '추정(Heuristic) 오라클',
      '일관성(Consistent) 오라클'
    ],
    answer: 0,
    explanation: '참 오라클은 모든 입력값에 대해 올바른 기대 결과를 생성할 수 있는 오라클로, 발생 가능한 모든 오류를 검출할 수 있다.'
  },
  {
    id: 30,
    subject: 'sw-dev',
    question: '상향식(Bottom-Up) 통합 테스트에 대한 설명으로 옳은 것은?',
    options: [
      '가장 상위 모듈부터 테스트를 시작한다',
      '스텁(Stub)을 사용하여 하위 모듈을 대체한다',
      '하위 모듈을 클러스터로 묶어 드라이버(Driver)를 사용하여 테스트한다',
      '깊이 우선 방식으로만 테스트가 가능하다'
    ],
    answer: 2,
    explanation: '상향식 통합 테스트는 하위 모듈부터 시작하여 상위 모듈 방향으로 테스트하며, 상위 모듈 역할을 하는 드라이버(Driver)를 사용한다.'
  },
  {
    id: 31,
    subject: 'sw-dev',
    question: '형상관리 도구 중 분산 버전 관리 시스템(DVCS)에 해당하는 것은?',
    options: [
      'CVS',
      'SVN',
      'Git',
      'RCS'
    ],
    answer: 2,
    explanation: 'Git은 대표적인 분산 버전 관리 시스템으로, 로컬 저장소와 원격 저장소를 모두 가지며, CVS/SVN/RCS는 중앙집중식 버전 관리 시스템이다.'
  },
  {
    id: 32,
    subject: 'sw-dev',
    question: '테스트 커버리지 중 결정(Decision) 커버리지에 대한 설명으로 옳은 것은?',
    options: [
      '각 문장이 최소 한 번 실행되도록 테스트한다',
      '각 결정(분기)의 참과 거짓이 최소 한 번씩 실행되도록 테스트한다',
      '각 조건의 모든 가능한 조합을 테스트한다',
      '프로그램의 모든 경로를 테스트한다'
    ],
    answer: 1,
    explanation: '결정(분기) 커버리지는 프로그램 내의 모든 분기(if, while 등)에서 참/거짓이 최소 한 번씩 수행되도록 테스트하는 기법이다.'
  },

  // ===== db (데이터베이스 구축) : 33~48 =====
  {
    id: 33,
    subject: 'db',
    question: '관계대수에서 릴레이션의 특정 튜플(행)을 선택하는 연산은?',
    options: [
      '프로젝션(π)',
      '셀렉션(σ)',
      '조인(⋈)',
      '디비전(÷)'
    ],
    answer: 1,
    explanation: '셀렉션(σ)은 릴레이션에서 조건을 만족하는 튜플(행)을 선택하는 수평적 연산이고, 프로젝션(π)은 특정 속성(열)을 추출하는 수직적 연산이다.'
  },
  {
    id: 34,
    subject: 'db',
    question: '정규화 과정 중 이행적 함수 종속을 제거하는 단계는?',
    options: [
      '제1정규형(1NF)',
      '제2정규형(2NF)',
      '제3정규형(3NF)',
      'BCNF'
    ],
    answer: 2,
    explanation: '제3정규형(3NF)은 제2정규형을 만족하면서 이행적 함수 종속(A→B→C)을 제거하여, 기본키가 아닌 속성이 다른 비주요 속성에 종속되지 않게 한다.'
  },
  {
    id: 35,
    subject: 'db',
    question: 'SQL 명령어 중 DDL(Data Definition Language)에 해당하지 않는 것은?',
    options: [
      'CREATE',
      'ALTER',
      'INSERT',
      'DROP'
    ],
    answer: 2,
    explanation: 'INSERT는 DML(Data Manipulation Language)에 해당하며, DDL에는 CREATE, ALTER, DROP, TRUNCATE 등이 포함된다.'
  },
  {
    id: 36,
    subject: 'db',
    question: '다음 SQL 문의 실행 결과로 올바른 것은?\n\nSELECT COUNT(*) FROM 학생 WHERE 학과 = \'컴퓨터\' OR 학과 = \'전자\'\n\n[학생 테이블]\n학번 | 이름 | 학과\n1 | 김철수 | 컴퓨터\n2 | 이영희 | 전자\n3 | 박민수 | 컴퓨터\n4 | 최지영 | 기계\n5 | 정수진 | 전자',
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    answer: 2,
    explanation: '학과가 "컴퓨터"인 학생 2명(김철수, 박민수)과 "전자"인 학생 2명(이영희, 정수진)을 합하여 총 4명이 된다.'
  },
  {
    id: 37,
    subject: 'db',
    question: 'JOIN 중 두 릴레이션에서 공통 속성의 값이 같은 튜플만 결합하는 것은?',
    options: [
      '자연 조인(Natural Join)',
      '외부 조인(Outer Join)',
      '교차 조인(Cross Join)',
      '세미 조인(Semi Join)'
    ],
    answer: 0,
    explanation: '자연 조인(Natural Join)은 두 릴레이션에서 공통 속성의 값이 같은 튜플끼리만 결합하며, 중복 속성은 한 번만 표시한다.'
  },
  {
    id: 38,
    subject: 'db',
    question: '트랜잭션의 ACID 성질 중 트랜잭션이 성공적으로 수행되면 그 결과가 영구적으로 반영되어야 한다는 성질은?',
    options: [
      '원자성(Atomicity)',
      '일관성(Consistency)',
      '독립성(Isolation)',
      '지속성(Durability)'
    ],
    answer: 3,
    explanation: '지속성(Durability)은 트랜잭션이 성공적으로 완료된 후에는 시스템 장애가 발생하더라도 그 결과가 영구적으로 보존되어야 한다는 성질이다.'
  },
  {
    id: 39,
    subject: 'db',
    question: '동시성 제어에서 로킹(Locking) 기법에 대한 설명으로 옳지 않은 것은?',
    options: [
      '공유 잠금(Shared Lock)은 읽기 연산만 허용한다',
      '전용 잠금(Exclusive Lock)은 읽기와 쓰기 연산 모두 불허한다',
      '로킹 단위가 클수록 동시성(병행성)이 증가한다',
      '2단계 로킹 프로토콜(2PL)은 직렬 가능성을 보장한다'
    ],
    answer: 2,
    explanation: '로킹 단위가 클수록 관리는 쉬워지지만 동시성(병행성)은 감소한다. 반대로 로킹 단위가 작을수록 동시성이 증가하지만 관리가 복잡해진다.'
  },
  {
    id: 40,
    subject: 'db',
    question: '인덱스(Index)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '데이터 검색 속도를 향상시킨다',
      'INSERT, UPDATE, DELETE 연산 시 추가적인 오버헤드가 발생한다',
      '기본키에 대해서는 자동으로 인덱스가 생성된다',
      '인덱스를 많이 생성할수록 항상 성능이 향상된다'
    ],
    answer: 3,
    explanation: '인덱스는 검색 성능을 높이지만, 과도한 인덱스 생성은 저장 공간을 차지하고 데이터 변경 시 인덱스 재구성 비용이 발생하여 오히려 성능이 저하될 수 있다.'
  },
  {
    id: 41,
    subject: 'db',
    question: '뷰(View)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '가상 테이블로 물리적으로 데이터를 저장하지 않는다',
      '논리적 데이터 독립성을 제공한다',
      'INSERT, DELETE, UPDATE에 제한이 있을 수 있다',
      '뷰에 대한 인덱스를 자유롭게 생성할 수 있다'
    ],
    answer: 3,
    explanation: '뷰는 가상 테이블이므로 일반적으로 뷰에 직접 인덱스를 생성할 수 없으며, 원본 테이블에 인덱스를 생성해야 한다.'
  },
  {
    id: 42,
    subject: 'db',
    question: 'E-R(Entity-Relationship) 다이어그램에서 개체 간의 관계를 나타내는 기호는?',
    options: [
      '사각형',
      '마름모',
      '타원',
      '이중 타원'
    ],
    answer: 1,
    explanation: 'E-R 다이어그램에서 사각형은 개체, 마름모는 관계, 타원은 속성, 이중 타원은 다중값 속성을 나타낸다.'
  },
  {
    id: 43,
    subject: 'db',
    question: '이상현상(Anomaly) 중 데이터를 삽입할 때 원하지 않는 데이터까지 함께 삽입해야 하는 현상은?',
    options: [
      '삽입 이상(Insertion Anomaly)',
      '삭제 이상(Deletion Anomaly)',
      '갱신 이상(Update Anomaly)',
      '종속 이상(Dependency Anomaly)'
    ],
    answer: 0,
    explanation: '삽입 이상은 새로운 데이터를 삽입하려면 불필요한 데이터도 함께 삽입해야 하는 문제로, 정규화를 통해 해결할 수 있다.'
  },
  {
    id: 44,
    subject: 'db',
    question: 'SQL에서 DCL(Data Control Language)에 해당하는 명령어는?',
    options: [
      'SELECT, INSERT',
      'CREATE, DROP',
      'GRANT, REVOKE',
      'COMMIT, ROLLBACK'
    ],
    answer: 2,
    explanation: 'GRANT(권한 부여)와 REVOKE(권한 회수)는 DCL에 해당하며, COMMIT/ROLLBACK은 TCL(Transaction Control Language)로 분류하기도 한다.'
  },
  {
    id: 45,
    subject: 'db',
    question: '정규화 과정에서 부분 함수 종속을 제거하는 단계는?',
    options: [
      '제1정규형(1NF)',
      '제2정규형(2NF)',
      '제3정규형(3NF)',
      'BCNF'
    ],
    answer: 1,
    explanation: '제2정규형(2NF)은 제1정규형을 만족하면서 기본키가 아닌 모든 속성이 기본키에 대해 완전 함수 종속(부분 함수 종속 제거)을 만족해야 한다.'
  },
  {
    id: 46,
    subject: 'db',
    question: '다음 SQL 문의 실행 결과는?\n\nSELECT 학과, AVG(성적) AS 평균성적\nFROM 학생\nGROUP BY 학과\nHAVING AVG(성적) >= 80\n\n[학생 테이블]\n학번 | 학과 | 성적\n1 | 컴퓨터 | 90\n2 | 전자 | 70\n3 | 컴퓨터 | 80\n4 | 전자 | 60\n5 | 기계 | 85',
    options: [
      '컴퓨터: 85, 전자: 65, 기계: 85',
      '컴퓨터: 85, 기계: 85',
      '컴퓨터: 85',
      '컴퓨터: 170, 기계: 85'
    ],
    answer: 1,
    explanation: '컴퓨터 학과 평균 = (90+80)/2 = 85, 전자 학과 평균 = (70+60)/2 = 65, 기계 학과 평균 = 85. HAVING 조건(평균 >= 80)에 의해 컴퓨터(85)와 기계(85)만 출력된다.'
  },
  {
    id: 47,
    subject: 'db',
    question: '관계대수에서 릴레이션의 특정 속성(열)만 추출하는 연산은?',
    options: [
      '셀렉션(σ)',
      '프로젝션(π)',
      '디비전(÷)',
      '카티션 프로덕트(×)'
    ],
    answer: 1,
    explanation: '프로젝션(π)은 릴레이션에서 필요한 속성(열)만을 추출하는 수직적 연산으로, 결과에서 중복 튜플은 제거된다.'
  },
  {
    id: 48,
    subject: 'db',
    question: 'BCNF(Boyce-Codd Normal Form)에 대한 설명으로 옳은 것은?',
    options: [
      '제1정규형을 강화한 것이다',
      '모든 결정자가 후보키인 정규형이다',
      '다치 종속을 제거한 정규형이다',
      '조인 종속을 제거한 정규형이다'
    ],
    answer: 1,
    explanation: 'BCNF는 제3정규형을 강화한 것으로, 릴레이션의 모든 결정자가 후보키(Candidate Key)여야 한다는 조건을 만족하는 정규형이다.'
  },

  // ===== sys-integration (프로그래밍 언어 활용) : 49~64 =====
  {
    id: 49,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf("%d", a / b);\n    return 0;\n}',
    options: [
      '1',
      '1.67',
      '2',
      '1.666667'
    ],
    answer: 0,
    explanation: 'C언어에서 정수 간의 나눗셈은 정수 나눗셈이 수행되어 소수점 이하가 버려진다. 5 / 3 = 1이 출력된다.'
  },
  {
    id: 50,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    printf("%d", *(p + 3));\n    return 0;\n}',
    options: [
      '10',
      '20',
      '30',
      '40'
    ],
    answer: 3,
    explanation: '포인터 p는 배열의 시작 주소를 가리키고, p + 3은 4번째 요소(인덱스 3)를 가리킨다. *(p + 3)은 arr[3]과 같으므로 40이 출력된다.'
  },
  {
    id: 51,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 3;\n        System.out.println(x % y);\n    }\n}',
    options: [
      '0',
      '1',
      '3',
      '10'
    ],
    answer: 1,
    explanation: '% 연산자는 나머지를 구하는 연산자이다. 10 % 3 = 1 (10을 3으로 나눈 나머지는 1)이 출력된다.'
  },
  {
    id: 52,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\na = [1, 2, 3, 4, 5]\nprint(a[1:4])',
    options: [
      '[1, 2, 3]',
      '[2, 3, 4]',
      '[2, 3, 4, 5]',
      '[1, 2, 3, 4]'
    ],
    answer: 1,
    explanation: 'Python의 슬라이싱 a[1:4]는 인덱스 1부터 3까지(4 미포함)의 요소를 추출하므로 [2, 3, 4]가 출력된다.'
  },
  {
    id: 53,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int i;\n    int sum = 0;\n    for(i = 1; i <= 10; i++) {\n        if(i % 2 == 0)\n            sum += i;\n    }\n    printf("%d", sum);\n    return 0;\n}',
    options: [
      '25',
      '30',
      '55',
      '20'
    ],
    answer: 1,
    explanation: '1부터 10까지 짝수만 합산하면 2 + 4 + 6 + 8 + 10 = 30이 출력된다.'
  },
  {
    id: 54,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    static int factorial(int n) {\n        if(n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}',
    options: [
      '24',
      '60',
      '120',
      '720'
    ],
    answer: 2,
    explanation: '재귀 함수로 5! = 5 × 4 × 3 × 2 × 1 = 120이 출력된다.'
  },
  {
    id: 55,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\nd = {\'a\': 1, \'b\': 2, \'c\': 3}\nd[\'b\'] = 5\nprint(sum(d.values()))',
    options: [
      '6',
      '8',
      '9',
      '11'
    ],
    answer: 2,
    explanation: 'd[\'b\']를 5로 변경하면 딕셔너리는 {\'a\': 1, \'b\': 5, \'c\': 3}이 되고, values()의 합은 1 + 5 + 3 = 9이다.'
  },
  {
    id: 56,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[] = "Hello";\n    printf("%lu", strlen(str));\n    return 0;\n}',
    options: [
      '4',
      '5',
      '6',
      '7'
    ],
    answer: 1,
    explanation: 'strlen() 함수는 문자열의 길이를 반환하며, 널 문자(\\0)는 포함하지 않는다. "Hello"의 길이는 5이다.'
  },
  {
    id: 57,
    subject: 'sys-integration',
    question: '다음 Java 코드에서 예외 처리 결과로 출력되는 것은?\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[3];\n            arr[5] = 10;\n        } catch(ArrayIndexOutOfBoundsException e) {\n            System.out.print("A");\n        } finally {\n            System.out.print("B");\n        }\n    }\n}',
    options: [
      'A',
      'B',
      'AB',
      '에러 발생'
    ],
    answer: 2,
    explanation: '배열 범위 초과로 ArrayIndexOutOfBoundsException이 발생하여 catch 블록에서 "A"가 출력되고, finally 블록은 항상 실행되므로 "B"가 출력되어 "AB"가 된다.'
  },
  {
    id: 58,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int b = 20;\n    int *p = &a;\n    *p = b;\n    printf("%d %d", a, b);\n    return 0;\n}',
    options: [
      '10 20',
      '20 20',
      '10 10',
      '20 10'
    ],
    answer: 1,
    explanation: '포인터 p는 변수 a의 주소를 가리킨다. *p = b는 p가 가리키는 위치(a)에 b의 값(20)을 대입하므로 a = 20, b = 20이 된다.'
  },
  {
    id: 59,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\ndef func(a, b=5):\n    return a * b\n\nprint(func(3))\nprint(func(3, 2))',
    options: [
      '15\\n6',
      '8\\n5',
      '15\\n5',
      '8\\n6'
    ],
    answer: 0,
    explanation: 'func(3)은 b 기본값 5를 사용하여 3 * 5 = 15, func(3, 2)는 b = 2를 사용하여 3 * 2 = 6이 출력된다.'
  },
  {
    id: 60,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf("%d ", a++);\n    printf("%d", ++a);\n    return 0;\n}',
    options: [
      '5 7',
      '6 7',
      '5 6',
      '6 8'
    ],
    answer: 0,
    explanation: 'a++는 후위 증가로 현재 값 5를 먼저 출력 후 a가 6이 된다. ++a는 전위 증가로 a가 7이 된 후 출력되어 "5 7"이 된다.'
  },
  {
    id: 61,
    subject: 'sys-integration',
    question: '자료구조에서 LIFO(Last In First Out) 구조에 해당하는 것은?',
    options: [
      '큐(Queue)',
      '스택(Stack)',
      '데크(Deque)',
      '연결 리스트(Linked List)'
    ],
    answer: 1,
    explanation: '스택(Stack)은 가장 마지막에 삽입된 요소가 가장 먼저 삭제되는 후입선출(LIFO) 구조이며, 큐(Queue)는 선입선출(FIFO) 구조이다.'
  },
  {
    id: 62,
    subject: 'sys-integration',
    question: '다음 Java 코드의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "Hello";\n        String s3 = new String("Hello");\n        System.out.print(s1 == s2);\n        System.out.print(" ");\n        System.out.print(s1 == s3);\n    }\n}',
    options: [
      'true true',
      'false false',
      'true false',
      'false true'
    ],
    answer: 2,
    explanation: 's1과 s2는 String Pool에서 같은 객체를 참조하므로 ==이 true이지만, s3는 new로 생성된 별도 객체이므로 s1 == s3는 false이다.'
  },
  {
    id: 63,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\ndata = [3, 1, 4, 1, 5, 9, 2, 6]\nresult = sorted(set(data))\nprint(result)',
    options: [
      '[3, 1, 4, 1, 5, 9, 2, 6]',
      '[1, 2, 3, 4, 5, 6, 9]',
      '[1, 1, 2, 3, 4, 5, 6, 9]',
      '[9, 6, 5, 4, 3, 2, 1]'
    ],
    answer: 1,
    explanation: 'set(data)로 중복이 제거되고, sorted()로 오름차순 정렬되어 [1, 2, 3, 4, 5, 6, 9]가 출력된다.'
  },
  {
    id: 64,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nstruct Student {\n    char name[10];\n    int score;\n};\nint main() {\n    struct Student s = {"Kim", 90};\n    struct Student *p = &s;\n    printf("%d", p->score);\n    return 0;\n}',
    options: [
      'Kim',
      '90',
      'Kim 90',
      '컴파일 오류'
    ],
    answer: 1,
    explanation: '구조체 포인터 p는 s를 가리키며, p->score는 포인터를 통해 구조체의 score 멤버에 접근하므로 90이 출력된다.'
  },

  // ===== info-security (정보시스템 구축관리) : 65~80 =====
  {
    id: 65,
    subject: 'info-security',
    question: '대칭키 암호화 알고리즘에 해당하는 것은?',
    options: [
      'RSA',
      'AES',
      'ECC',
      'DSA'
    ],
    answer: 1,
    explanation: 'AES는 대칭키(비밀키) 암호화 알고리즘이며, RSA와 ECC는 비대칭키(공개키) 암호화 알고리즘이다.'
  },
  {
    id: 66,
    subject: 'info-security',
    question: '접근제어 방식 중 주체와 객체의 등급을 비교하여 접근 권한을 부여하는 방식은?',
    options: [
      'DAC(임의적 접근제어)',
      'MAC(강제적 접근제어)',
      'RBAC(역할기반 접근제어)',
      'ABAC(속성기반 접근제어)'
    ],
    answer: 1,
    explanation: 'MAC(Mandatory Access Control)은 보안 등급을 기반으로 접근을 제어하며, 시스템이 강제적으로 접근 권한을 부여하는 방식이다.'
  },
  {
    id: 67,
    subject: 'info-security',
    question: '웹 애플리케이션에서 악의적인 스크립트를 삽입하여 사용자의 브라우저에서 실행되게 하는 공격은?',
    options: [
      'SQL 인젝션',
      'XSS(Cross Site Scripting)',
      'CSRF(Cross Site Request Forgery)',
      'MITM(Man In The Middle)'
    ],
    answer: 1,
    explanation: 'XSS(Cross Site Scripting)는 웹 페이지에 악성 스크립트를 삽입하여 사용자의 브라우저에서 실행되게 하는 공격으로, 쿠키 탈취 등이 가능하다.'
  },
  {
    id: 68,
    subject: 'info-security',
    question: 'OSI 7계층에서 라우팅, 패킷 전달 등을 담당하는 계층은?',
    options: [
      '데이터링크 계층',
      '네트워크 계층',
      '전송 계층',
      '세션 계층'
    ],
    answer: 1,
    explanation: '네트워크 계층(3계층)은 라우팅, 패킷 포워딩, IP 주소 지정 등을 담당하며, 대표적인 장비로 라우터가 있다.'
  },
  {
    id: 69,
    subject: 'info-security',
    question: 'TCP 프로토콜의 특징으로 옳지 않은 것은?',
    options: [
      '연결 지향적(Connection-Oriented) 프로토콜이다',
      '신뢰성 있는 데이터 전송을 보장한다',
      '3-Way Handshake를 통해 연결을 설정한다',
      '비연결형으로 빠른 전송 속도를 제공한다'
    ],
    answer: 3,
    explanation: 'TCP는 연결 지향적 프로토콜로 신뢰성 있는 전송을 보장하며, 비연결형으로 빠른 전송 속도를 제공하는 것은 UDP의 특징이다.'
  },
  {
    id: 70,
    subject: 'info-security',
    question: '시큐어 코딩에서 입력값 검증을 하지 않아 발생할 수 있는 보안 취약점이 아닌 것은?',
    options: [
      'SQL 인젝션',
      'XSS',
      '버퍼 오버플로우',
      '하드코딩된 비밀번호'
    ],
    answer: 3,
    explanation: '하드코딩된 비밀번호는 보안 기능 결함에 해당하며, SQL 인젝션, XSS, 버퍼 오버플로우는 입력값 검증 부재로 발생하는 취약점이다.'
  },
  {
    id: 71,
    subject: 'info-security',
    question: 'CMMI(Capability Maturity Model Integration)의 성숙도 레벨 중 프로세스가 정의되고 문서화되어 조직 표준 프로세스가 존재하는 단계는?',
    options: [
      '레벨 1 - 초기(Initial)',
      '레벨 2 - 관리(Managed)',
      '레벨 3 - 정의(Defined)',
      '레벨 4 - 정량적 관리(Quantitatively Managed)'
    ],
    answer: 2,
    explanation: 'CMMI 레벨 3(정의)은 조직의 표준 프로세스가 문서화되어 있으며, 프로젝트 수행 시 이를 기반으로 조정하여 사용하는 단계이다.'
  },
  {
    id: 72,
    subject: 'info-security',
    question: '프로젝트 관리에서 비용 산정 기법 중 전문가의 경험과 직관을 활용하는 방법은?',
    options: [
      '기능 점수(FP) 기법',
      'COCOMO',
      '델파이 기법',
      'LOC 기법'
    ],
    answer: 2,
    explanation: '델파이 기법은 전문가들의 경험과 직관을 모아 합의를 도출하는 비용 산정 방법으로, 전문가 감정법의 주관성을 보완한다.'
  },
  {
    id: 73,
    subject: 'info-security',
    question: 'DDoS(Distributed Denial of Service) 공격에 대한 설명으로 옳은 것은?',
    options: [
      '단일 시스템에서 대량의 트래픽을 발생시키는 공격이다',
      '여러 대의 분산된 컴퓨터를 이용하여 동시에 대량의 트래픽을 발생시키는 공격이다',
      '네트워크 패킷을 도청하는 공격이다',
      '암호화된 데이터를 해독하는 공격이다'
    ],
    answer: 1,
    explanation: 'DDoS 공격은 다수의 분산된 시스템(봇넷 등)을 이용하여 대상 시스템에 동시에 대량의 트래픽을 보내 서비스를 마비시키는 공격이다.'
  },
  {
    id: 74,
    subject: 'info-security',
    question: '비대칭키(공개키) 암호화 알고리즘인 RSA의 특징으로 옳은 것은?',
    options: [
      '암호화와 복호화에 같은 키를 사용한다',
      '큰 소수의 곱을 인수분해하기 어려운 점을 이용한다',
      '블록 암호화 방식으로 64비트 블록을 사용한다',
      '대칭키 방식보다 암호화 속도가 빠르다'
    ],
    answer: 1,
    explanation: 'RSA는 큰 두 소수의 곱을 인수분해하기 어려운 수학적 원리를 기반으로 하며, 공개키와 개인키 쌍을 사용하는 비대칭키 알고리즘이다.'
  },
  {
    id: 75,
    subject: 'info-security',
    question: 'CSRF(Cross-Site Request Forgery) 공격에 대한 설명으로 옳은 것은?',
    options: [
      '서버의 SQL 쿼리에 악성 코드를 삽입하는 공격이다',
      '사용자가 의도하지 않은 요청을 인증된 세션으로 서버에 전송하는 공격이다',
      '서버의 파일 시스템에 직접 접근하는 공격이다',
      '네트워크 패킷을 가로채어 내용을 변조하는 공격이다'
    ],
    answer: 1,
    explanation: 'CSRF는 사용자가 로그인된 상태에서 악의적인 웹 사이트를 통해 의도하지 않은 요청을 서버에 전송하게 하는 공격이다.'
  },
  {
    id: 76,
    subject: 'info-security',
    question: 'OSI 7계층 중 데이터의 암호화, 압축, 코드 변환을 담당하는 계층은?',
    options: [
      '전송 계층',
      '세션 계층',
      '표현 계층',
      '응용 계층'
    ],
    answer: 2,
    explanation: '표현 계층(6계층)은 데이터의 형식 변환, 암호화/복호화, 압축/해제 등을 담당하여 응용 계층과 세션 계층 사이에서 데이터를 변환한다.'
  },
  {
    id: 77,
    subject: 'info-security',
    question: 'SPICE(ISO/IEC 15504) 모델에서 프로세스 능력 수준(Level)의 단계 수는?',
    options: [
      '4단계 (Level 0~3)',
      '5단계 (Level 0~4)',
      '6단계 (Level 0~5)',
      '7단계 (Level 0~6)'
    ],
    answer: 2,
    explanation: 'SPICE 모델은 프로세스 수행 능력을 Level 0(불완전)부터 Level 5(최적화)까지 6단계로 평가한다.'
  },
  {
    id: 78,
    subject: 'info-security',
    question: '접근제어 방식 중 사용자의 역할(Role)에 따라 접근 권한을 부여하는 방식은?',
    options: [
      'DAC(임의적 접근제어)',
      'MAC(강제적 접근제어)',
      'RBAC(역할기반 접근제어)',
      'BLP(Bell-LaPadula) 모델'
    ],
    answer: 2,
    explanation: 'RBAC(Role-Based Access Control)은 사용자에게 직접 권한을 부여하는 대신 역할을 부여하고, 역할에 적합한 접근 권한을 할당하는 방식이다.'
  },
  {
    id: 79,
    subject: 'info-security',
    question: 'SQL 인젝션 공격을 방지하기 위한 방법으로 적절하지 않은 것은?',
    options: [
      '입력값에 대한 유효성 검사를 수행한다',
      '매개변수화된 쿼리(Prepared Statement)를 사용한다',
      '에러 메시지에 상세한 SQL 정보를 포함하여 디버깅을 용이하게 한다',
      '웹 방화벽(WAF)을 적용한다'
    ],
    answer: 2,
    explanation: '에러 메시지에 상세한 SQL 정보를 노출하면 공격자에게 데이터베이스 구조 정보를 제공하게 되므로, 최소한의 에러 정보만 표시해야 한다.'
  },
  {
    id: 80,
    subject: 'info-security',
    question: '프로젝트 일정 관리에서 최장 경로를 통해 프로젝트 최소 완료 시간을 산정하는 기법은?',
    options: [
      'PERT(Program Evaluation and Review Technique)',
      'CPM(Critical Path Method)',
      'WBS(Work Breakdown Structure)',
      '간트 차트(Gantt Chart)'
    ],
    answer: 1,
    explanation: 'CPM(Critical Path Method)은 프로젝트 네트워크에서 가장 오래 걸리는 경로(임계 경로)를 찾아 프로젝트의 최소 완료 시간을 산정하는 기법이다.'
  }
]
