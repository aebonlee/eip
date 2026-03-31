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
  },

  // ===== sw-design (소프트웨어 설계) 추가 : 81~104 =====
  {
    id: 81,
    subject: 'sw-design',
    question: '요구사항 분석 단계에서 요구사항의 출처, 상태, 변경 이력 등을 추적하여 관리하는 활동은?',
    options: [
      '요구사항 확인(Validation)',
      '요구사항 추적(Traceability)',
      '요구사항 명세(Specification)',
      '요구사항 도출(Elicitation)'
    ],
    answer: 1,
    explanation: '요구사항 추적(Traceability)은 요구사항의 출처, 할당, 상태, 변경 이력 등을 관리하여 요구사항이 설계·구현·테스트 단계까지 올바르게 반영되는지 확인하는 활동이다.'
  },
  {
    id: 82,
    subject: 'sw-design',
    question: '애자일(Agile) 방법론 중 스크럼(Scrum)에서 2~4주 단위의 반복 개발 주기를 무엇이라 하는가?',
    options: [
      '릴리즈(Release)',
      '스프린트(Sprint)',
      '이터레이션(Iteration)',
      '마일스톤(Milestone)'
    ],
    answer: 1,
    explanation: '스크럼에서 스프린트(Sprint)는 보통 2~4주의 고정된 기간 동안 계획된 작업을 완료하는 반복 개발 주기이며, 스프린트 종료 시 잠재적으로 출시 가능한 제품 증분을 산출한다.'
  },
  {
    id: 83,
    subject: 'sw-design',
    question: '스크럼(Scrum)에서 매일 같은 시간에 15분 이내로 진행하는 짧은 회의는?',
    options: [
      '스프린트 계획 회의(Sprint Planning)',
      '일일 스크럼(Daily Scrum)',
      '스프린트 회고(Sprint Retrospective)',
      '스프린트 리뷰(Sprint Review)'
    ],
    answer: 1,
    explanation: '일일 스크럼(Daily Scrum)은 매일 같은 시간, 같은 장소에서 15분 이내로 진행하며, 어제 한 일, 오늘 할 일, 장애 요인 등을 공유하는 회의이다.'
  },
  {
    id: 84,
    subject: 'sw-design',
    question: 'DFD(Data Flow Diagram)의 구성 요소에 해당하지 않는 것은?',
    options: [
      '프로세스(Process)',
      '데이터 흐름(Data Flow)',
      '데이터 저장소(Data Store)',
      '조건 분기(Decision)'
    ],
    answer: 3,
    explanation: 'DFD의 4가지 구성 요소는 프로세스(처리), 데이터 흐름(화살표), 데이터 저장소, 외부 엔티티(단말)이다. 조건 분기는 순서도(Flowchart)의 구성 요소이다.'
  },
  {
    id: 85,
    subject: 'sw-design',
    question: '컴포넌트 기반 개발(CBD)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '재사용 가능한 컴포넌트를 조합하여 시스템을 개발한다',
      '개발 생산성과 품질을 향상시킬 수 있다',
      '컴포넌트 간 인터페이스가 명확하게 정의되어야 한다',
      '컴포넌트는 반드시 하나의 프로그래밍 언어로만 작성되어야 한다'
    ],
    answer: 3,
    explanation: 'CBD(Component-Based Development)에서 컴포넌트는 인터페이스가 명확히 정의되어 있으면 다양한 프로그래밍 언어로 작성될 수 있으며, 이종 환경에서도 조합이 가능하다.'
  },
  {
    id: 86,
    subject: 'sw-design',
    question: 'SOA(Service Oriented Architecture)에서 서비스를 등록하고 검색하는 역할을 하는 것은?',
    options: [
      '서비스 제공자(Service Provider)',
      '서비스 요청자(Service Requester)',
      '서비스 레지스트리(Service Registry)',
      '서비스 브로커(Service Broker)'
    ],
    answer: 2,
    explanation: '서비스 레지스트리(Registry)는 서비스 제공자가 등록한 서비스 정보를 저장하고, 서비스 요청자가 필요한 서비스를 검색할 수 있도록 하는 저장소 역할을 한다. UDDI가 대표적이다.'
  },
  {
    id: 87,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 객체의 상태에 따라 동작을 변경할 수 있게 하며, 객체가 마치 클래스를 바꾸는 것처럼 보이게 하는 패턴은?',
    options: [
      '전략(Strategy) 패턴',
      '상태(State) 패턴',
      '커맨드(Command) 패턴',
      '중재자(Mediator) 패턴'
    ],
    answer: 1,
    explanation: '상태(State) 패턴은 객체의 내부 상태가 바뀔 때 객체의 행위가 변경되도록 하여, 마치 객체의 클래스가 바뀌는 것처럼 보이게 하는 행위 패턴이다.'
  },
  {
    id: 88,
    subject: 'sw-design',
    question: '객체지향 분석에서 Rumbaugh의 OMT(Object Modeling Technique) 방법론의 3가지 모델에 해당하지 않는 것은?',
    options: [
      '객체 모델(Object Model)',
      '동적 모델(Dynamic Model)',
      '기능 모델(Functional Model)',
      '배치 모델(Deployment Model)'
    ],
    answer: 3,
    explanation: 'Rumbaugh의 OMT는 객체 모델(정보 모델링), 동적 모델(상태 다이어그램), 기능 모델(자료 흐름도)의 3가지 모델로 구성된다. 배치 모델은 UML의 다이어그램이다.'
  },
  {
    id: 89,
    subject: 'sw-design',
    question: 'CASE(Computer-Aided Software Engineering) 도구의 분류 중 요구사항 분석, 설계 등 개발 초기 단계를 지원하는 도구는?',
    options: [
      '상위 CASE 도구',
      '하위 CASE 도구',
      '통합 CASE 도구',
      '테스트 CASE 도구'
    ],
    answer: 0,
    explanation: '상위 CASE 도구는 요구사항 분석과 설계 등 소프트웨어 개발 초기 단계를 지원하며, 하위 CASE 도구는 코드 생성, 테스트 등 후기 단계를 지원한다.'
  },
  {
    id: 90,
    subject: 'sw-design',
    question: '미들웨어 유형 중 비동기 메시지 전달 방식으로 느슨한 결합(Loose Coupling)을 지원하는 것은?',
    options: [
      'RPC(Remote Procedure Call)',
      'MOM(Message Oriented Middleware)',
      'ORB(Object Request Broker)',
      'TP 모니터'
    ],
    answer: 1,
    explanation: 'MOM(Message Oriented Middleware)은 메시지 큐를 이용한 비동기 통신 방식으로 송수신 시스템 간 느슨한 결합을 지원하며, 시스템 간 독립성을 보장한다.'
  },
  {
    id: 91,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 복잡한 서브시스템에 대한 단순한 인터페이스를 제공하여 서브시스템을 쉽게 사용할 수 있도록 하는 구조 패턴은?',
    options: [
      '프록시(Proxy) 패턴',
      '데코레이터(Decorator) 패턴',
      '퍼사드(Facade) 패턴',
      '브리지(Bridge) 패턴'
    ],
    answer: 2,
    explanation: '퍼사드(Facade) 패턴은 복잡한 서브시스템의 인터페이스를 단순화하여 클라이언트가 서브시스템을 쉽게 사용할 수 있도록 통합 인터페이스를 제공하는 구조 패턴이다.'
  },
  {
    id: 92,
    subject: 'sw-design',
    question: '인터페이스 설계 시 시스템 간 데이터 교환을 위해 사용되는 표준 형식으로, 태그 기반의 마크업 언어는?',
    options: [
      'JSON',
      'XML',
      'YAML',
      'CSV'
    ],
    answer: 1,
    explanation: 'XML(eXtensible Markup Language)은 태그 기반의 마크업 언어로, 시스템 간 데이터 교환을 위한 표준 형식으로 널리 사용되며 구조화된 데이터를 표현할 수 있다.'
  },
  {
    id: 93,
    subject: 'sw-design',
    question: '요구사항 분석 기법 중 사용자 스토리(User Story)의 구성 형식으로 올바른 것은?',
    options: [
      'As a [역할], I want [기능], so that [이유]',
      'Given [조건], When [행동], Then [결과]',
      'Input [입력], Process [처리], Output [출력]',
      'Who [누가], What [무엇을], How [어떻게]'
    ],
    answer: 0,
    explanation: '사용자 스토리는 "As a [역할], I want [기능], so that [이유]" 형식으로 작성하여 사용자 관점에서 요구사항을 표현한다. Given-When-Then은 BDD의 시나리오 형식이다.'
  },
  {
    id: 94,
    subject: 'sw-design',
    question: '클라우드 네이티브 아키텍처 패턴 중 하나의 애플리케이션을 여러 개의 작은 독립적인 서비스로 분리하여 개발하는 방식은?',
    options: [
      '모놀리식(Monolithic) 아키텍처',
      '마이크로서비스(Microservices) 아키텍처',
      '계층형(Layered) 아키텍처',
      '파이프-필터(Pipe-Filter) 아키텍처'
    ],
    answer: 1,
    explanation: '마이크로서비스 아키텍처는 애플리케이션을 독립적으로 배포·확장 가능한 작은 서비스 단위로 분리하여 개발하며, 각 서비스는 자체 데이터베이스와 비즈니스 로직을 가진다.'
  },
  {
    id: 95,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 객체 간의 1:N 종속 관계를 정의하여 한 객체의 상태가 변경되면 모든 종속 객체에 자동으로 알리는 패턴은?',
    options: [
      '이터레이터(Iterator) 패턴',
      '옵저버(Observer) 패턴',
      '비지터(Visitor) 패턴',
      '메멘토(Memento) 패턴'
    ],
    answer: 1,
    explanation: '옵저버(Observer) 패턴은 발행-구독(Publish-Subscribe) 모델이라고도 하며, 주체 객체의 상태 변화 시 등록된 모든 관찰자 객체에게 자동으로 통지하는 행위 패턴이다.'
  },
  {
    id: 96,
    subject: 'sw-design',
    question: 'SOLID 원칙 중 "상위 모듈은 하위 모듈에 의존해서는 안 되며, 둘 다 추상화에 의존해야 한다"는 원칙은?',
    options: [
      '단일 책임 원칙(SRP)',
      '인터페이스 분리 원칙(ISP)',
      '의존 역전 원칙(DIP)',
      '리스코프 치환 원칙(LSP)'
    ],
    answer: 2,
    explanation: '의존 역전 원칙(DIP, Dependency Inversion Principle)은 고수준 모듈이 저수준 모듈에 직접 의존하지 않고 추상화(인터페이스)에 의존하도록 하여 결합도를 낮추는 원칙이다.'
  },
  {
    id: 97,
    subject: 'sw-design',
    question: '요구사항 개발 프로세스의 순서로 올바른 것은?',
    options: [
      '도출 → 분석 → 명세 → 확인',
      '분석 → 도출 → 확인 → 명세',
      '명세 → 도출 → 분석 → 확인',
      '도출 → 명세 → 분석 → 확인'
    ],
    answer: 0,
    explanation: '요구사항 개발 프로세스는 도출(Elicitation) → 분석(Analysis) → 명세(Specification) → 확인(Validation) 순서로 수행된다.'
  },
  {
    id: 98,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 기존 객체를 복제하여 새로운 객체를 생성하는 생성 패턴은?',
    options: [
      '빌더(Builder) 패턴',
      '프로토타입(Prototype) 패턴',
      '추상 팩토리(Abstract Factory) 패턴',
      '싱글톤(Singleton) 패턴'
    ],
    answer: 1,
    explanation: '프로토타입(Prototype) 패턴은 원본 객체를 복제(clone)하여 새 객체를 생성하는 패턴으로, 객체 생성 비용이 큰 경우에 유용하다.'
  },
  {
    id: 99,
    subject: 'sw-design',
    question: '클라우드 네이티브 패턴 중 서비스 간 통신 시 장애 전파를 방지하기 위해 일정 횟수 이상 실패하면 호출을 차단하는 패턴은?',
    options: [
      '사가(Saga) 패턴',
      '서킷 브레이커(Circuit Breaker) 패턴',
      'API 게이트웨이(API Gateway) 패턴',
      '사이드카(Sidecar) 패턴'
    ],
    answer: 1,
    explanation: '서킷 브레이커 패턴은 외부 서비스 호출 실패가 임계값을 초과하면 회로를 차단하여 장애가 다른 서비스로 전파되는 것을 방지하고, 일정 시간 후 재시도하는 패턴이다.'
  },
  {
    id: 100,
    subject: 'sw-design',
    question: 'UML 다이어그램 중 객체 간의 메시지 교환을 시간 순서에 따라 표현하는 것은?',
    options: [
      '활동(Activity) 다이어그램',
      '통신(Communication) 다이어그램',
      '시퀀스(Sequence) 다이어그램',
      '컴포넌트(Component) 다이어그램'
    ],
    answer: 2,
    explanation: '시퀀스 다이어그램은 객체 간의 메시지 교환을 시간의 흐름에 따라 위에서 아래로 표현하며, 생명선(Lifeline)과 활성 구간을 사용한다.'
  },
  {
    id: 101,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 알고리즘 군을 정의하고 캡슐화하여 교환 가능하게 하는 행위 패턴은?',
    options: [
      '전략(Strategy) 패턴',
      '템플릿 메서드(Template Method) 패턴',
      '책임 연쇄(Chain of Responsibility) 패턴',
      '인터프리터(Interpreter) 패턴'
    ],
    answer: 0,
    explanation: '전략(Strategy) 패턴은 동일 계열의 알고리즘을 캡슐화하여 상호 교환 가능하게 하며, 클라이언트에 영향 없이 알고리즘을 독립적으로 변경할 수 있게 하는 행위 패턴이다.'
  },
  {
    id: 102,
    subject: 'sw-design',
    question: '소프트웨어 아키텍처 스타일 중 이벤트를 발행하고 구독하는 방식으로 컴포넌트 간 느슨한 결합을 제공하는 것은?',
    options: [
      '클라이언트-서버(Client-Server) 스타일',
      '이벤트 기반(Event-Driven) 스타일',
      '저장소(Repository) 스타일',
      '계층(Layered) 스타일'
    ],
    answer: 1,
    explanation: '이벤트 기반 아키텍처는 이벤트 발행자(Publisher)와 구독자(Subscriber)가 느슨하게 결합되어 있어 확장성이 높으며, 비동기 처리에 적합한 아키텍처 스타일이다.'
  },
  {
    id: 103,
    subject: 'sw-design',
    question: 'GoF 디자인 패턴 중 객체에 동적으로 새로운 책임을 추가할 수 있게 하며, 상속 대안으로 기능 확장을 제공하는 구조 패턴은?',
    options: [
      '어댑터(Adapter) 패턴',
      '컴포지트(Composite) 패턴',
      '데코레이터(Decorator) 패턴',
      '플라이웨이트(Flyweight) 패턴'
    ],
    answer: 2,
    explanation: '데코레이터(Decorator) 패턴은 객체에 동적으로 새로운 기능을 추가할 수 있게 하며, 서브클래싱(상속) 대신 유연한 기능 확장 방법을 제공하는 구조 패턴이다.'
  },
  {
    id: 104,
    subject: 'sw-design',
    question: 'SOLID 원칙 중 "클라이언트는 자신이 사용하지 않는 인터페이스에 의존하도록 강요받아서는 안 된다"는 원칙은?',
    options: [
      '단일 책임 원칙(SRP)',
      '개방-폐쇄 원칙(OCP)',
      '리스코프 치환 원칙(LSP)',
      '인터페이스 분리 원칙(ISP)'
    ],
    answer: 3,
    explanation: '인터페이스 분리 원칙(ISP, Interface Segregation Principle)은 범용 인터페이스 하나보다 특정 클라이언트를 위한 여러 개의 인터페이스로 분리하는 것이 낫다는 원칙이다.'
  },

  // ===== sw-dev (소프트웨어 개발) 추가 : 105~128 =====
  {
    id: 105,
    subject: 'sw-dev',
    question: '테스트 자동화 도구 중 웹 브라우저를 자동으로 제어하여 UI 테스트를 수행하는 도구는?',
    options: [
      'JUnit',
      'Selenium',
      'JMeter',
      'SonarQube'
    ],
    answer: 1,
    explanation: 'Selenium은 웹 브라우저를 자동으로 제어하여 웹 애플리케이션의 기능 테스트를 수행하는 오픈소스 테스트 자동화 도구이다. JUnit은 단위 테스트, JMeter는 성능 테스트 도구이다.'
  },
  {
    id: 106,
    subject: 'sw-dev',
    question: '회귀 테스트(Regression Test)에 대한 설명으로 옳은 것은?',
    options: [
      '새로운 기능이 정상적으로 동작하는지 확인하는 테스트이다',
      '변경된 코드로 인해 기존 기능에 부작용이 없는지 확인하는 테스트이다',
      '시스템의 성능 한계를 측정하는 테스트이다',
      '보안 취약점을 탐지하는 테스트이다'
    ],
    answer: 1,
    explanation: '회귀 테스트는 소프트웨어 변경(수정, 추가) 후 기존에 정상 동작하던 기능에 의도하지 않은 결함이 발생하지 않았는지 확인하는 테스트로, 반복 수행이 필요하여 자동화가 권장된다.'
  },
  {
    id: 107,
    subject: 'sw-dev',
    question: '코드 품질 메트릭 중 프로그램의 제어 흐름 복잡도를 측정하는 지표는?',
    options: [
      'LOC(Lines of Code)',
      '순환 복잡도(Cyclomatic Complexity)',
      '기능 점수(Function Point)',
      '결합도(Coupling)'
    ],
    answer: 1,
    explanation: '순환 복잡도(Cyclomatic Complexity)는 McCabe가 제안한 메트릭으로, 프로그램의 제어 흐름 그래프에서 독립적인 실행 경로의 수를 측정한다. V(G) = E - N + 2 공식으로 계산한다.'
  },
  {
    id: 108,
    subject: 'sw-dev',
    question: '디버깅 기법 중 프로그램의 중간 결과를 출력하여 오류 원인을 추적하는 방법은?',
    options: [
      '백트래킹(Backtracking)',
      '원인 제거(Cause Elimination)',
      '브루트 포스(Brute Force)',
      '귀납법(Induction)'
    ],
    answer: 2,
    explanation: '브루트 포스 디버깅은 프로그램 내에 print문을 삽입하거나 메모리 덤프를 분석하여 중간 결과를 출력함으로써 오류를 추적하는 가장 기본적인 방법이다.'
  },
  {
    id: 109,
    subject: 'sw-dev',
    question: '데브옵스(DevOps)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '개발(Development)과 운영(Operations)의 통합을 추구한다',
      'CI/CD 파이프라인을 통해 자동화된 배포를 지원한다',
      '개발팀과 운영팀 간의 협업과 소통을 강조한다',
      '개발 완료 후 운영팀에 인수인계하는 것이 핵심이다'
    ],
    answer: 3,
    explanation: '데브옵스는 개발과 운영의 경계를 허물고 지속적인 협업을 통해 소프트웨어를 빠르고 안정적으로 제공하는 문화·방법론이며, 단순 인수인계가 아닌 지속적 통합과 배포를 핵심으로 한다.'
  },
  {
    id: 110,
    subject: 'sw-dev',
    question: '컨테이너(Container) 기술에 대한 설명으로 옳지 않은 것은?',
    options: [
      '운영체제 수준의 가상화 기술이다',
      'VM(가상 머신)보다 가볍고 시작 속도가 빠르다',
      '애플리케이션과 실행 환경을 함께 패키징한다',
      '각 컨테이너마다 독립된 OS 커널을 가진다'
    ],
    answer: 3,
    explanation: '컨테이너는 호스트 OS의 커널을 공유하며, 각 컨테이너마다 독립된 OS 커널을 가지는 것은 VM(가상 머신)의 특징이다. Docker가 대표적인 컨테이너 기술이다.'
  },
  {
    id: 111,
    subject: 'sw-dev',
    question: '성능 테스트 유형 중 시스템에 과부하를 가하여 한계점에서의 동작을 확인하는 테스트는?',
    options: [
      '부하 테스트(Load Test)',
      '스트레스 테스트(Stress Test)',
      '내구성 테스트(Endurance Test)',
      '스파이크 테스트(Spike Test)'
    ],
    answer: 1,
    explanation: '스트레스 테스트는 시스템의 처리 능력을 초과하는 과부하 상태에서 시스템의 동작을 확인하며, 임계점 이후의 장애 복구 능력 등을 평가한다.'
  },
  {
    id: 112,
    subject: 'sw-dev',
    question: '보안 테스트 기법 중 소스 코드를 실행하지 않고 분석하여 보안 취약점을 탐지하는 방법은?',
    options: [
      '동적 분석(DAST)',
      '정적 분석(SAST)',
      '퍼징(Fuzzing)',
      '침투 테스트(Penetration Test)'
    ],
    answer: 1,
    explanation: '정적 분석(SAST, Static Application Security Testing)은 소스 코드를 실행하지 않고 코드 자체를 분석하여 보안 취약점을 탐지하는 방법으로, 개발 초기에 적용 가능하다.'
  },
  {
    id: 113,
    subject: 'sw-dev',
    question: '테스트 기법 중 뮤테이션 테스트(Mutation Testing)에 대한 설명으로 옳은 것은?',
    options: [
      '무작위 입력값을 생성하여 프로그램에 전달하는 테스트이다',
      '원본 프로그램에 의도적인 변형(뮤턴트)을 가하여 테스트 스위트의 결함 검출 능력을 평가한다',
      '두 개 이상의 버전을 동시에 실행하여 결과를 비교하는 테스트이다',
      '사용자의 사용 패턴을 모델링하여 테스트하는 기법이다'
    ],
    answer: 1,
    explanation: '뮤테이션 테스트는 원본 프로그램에 작은 변형(뮤턴트)을 가한 후, 기존 테스트 케이스가 이 변형을 검출할 수 있는지 평가하여 테스트 케이스의 품질을 측정하는 기법이다.'
  },
  {
    id: 114,
    subject: 'sw-dev',
    question: 'CI/CD 파이프라인에서 CD(Continuous Delivery)와 CD(Continuous Deployment)의 차이로 옳은 것은?',
    options: [
      'Continuous Delivery는 자동 배포, Continuous Deployment는 수동 배포를 의미한다',
      'Continuous Delivery는 프로덕션 배포 전 수동 승인이 필요하고, Continuous Deployment는 완전 자동 배포이다',
      '두 용어는 동일한 의미이다',
      'Continuous Delivery는 빌드 자동화, Continuous Deployment는 테스트 자동화를 의미한다'
    ],
    answer: 1,
    explanation: 'Continuous Delivery는 배포 가능한 상태까지 자동화하되 프로덕션 배포는 수동 승인이 필요하고, Continuous Deployment는 모든 변경사항이 자동으로 프로덕션에 배포된다.'
  },
  {
    id: 115,
    subject: 'sw-dev',
    question: '코드 커버리지 중 MC/DC(Modified Condition/Decision Coverage)에 대한 설명으로 옳은 것은?',
    options: [
      '모든 문장이 한 번 이상 실행되도록 하는 커버리지이다',
      '모든 분기의 참/거짓을 한 번씩 수행하는 커버리지이다',
      '각 개별 조건이 전체 결정에 독립적으로 영향을 미치는 것을 보여주는 커버리지이다',
      '모든 가능한 경로를 테스트하는 커버리지이다'
    ],
    answer: 2,
    explanation: 'MC/DC는 각 개별 조건이 전체 판정(결정) 결과에 독립적으로 영향을 미치는 것을 보여주어야 하며, 항공·안전 중요 소프트웨어(DO-178C) 등에서 요구되는 엄격한 커버리지 기준이다.'
  },
  {
    id: 116,
    subject: 'sw-dev',
    question: '마이크로서비스 테스트 전략에서 개별 서비스의 API를 테스트하되 의존 서비스를 모의 객체로 대체하는 테스트 수준은?',
    options: [
      '단위 테스트(Unit Test)',
      '컴포넌트 테스트(Component Test)',
      '통합 테스트(Integration Test)',
      'E2E 테스트(End-to-End Test)'
    ],
    answer: 1,
    explanation: '컴포넌트 테스트는 개별 마이크로서비스의 전체 기능을 테스트하되, 외부 의존 서비스를 스텁(Stub)이나 목(Mock)으로 대체하여 해당 서비스를 격리된 환경에서 검증한다.'
  },
  {
    id: 117,
    subject: 'sw-dev',
    question: '정적 분석 도구 중 코드 품질, 중복 코드, 보안 취약점 등을 종합적으로 분석하는 오픈소스 도구는?',
    options: [
      'SonarQube',
      'Selenium',
      'Postman',
      'Grafana'
    ],
    answer: 0,
    explanation: 'SonarQube는 코드 품질 및 보안 취약점을 종합적으로 분석하는 오픈소스 정적 분석 플랫폼으로, 기술 부채, 코드 스멜, 버그, 취약점 등을 탐지하고 대시보드로 제공한다.'
  },
  {
    id: 118,
    subject: 'sw-dev',
    question: '테스트 설계 기법 중 원인-결과 그래프(Cause-Effect Graph) 기법에 대한 설명으로 옳은 것은?',
    options: [
      '입력값의 경계에서 오류를 발견하기 위한 기법이다',
      '입력 조건(원인)과 출력 결과(결과) 간의 논리적 관계를 분석하여 테스트 케이스를 도출하는 기법이다',
      '프로그램의 모든 실행 경로를 테스트하는 기법이다',
      '상태 전이를 기반으로 테스트 케이스를 설계하는 기법이다'
    ],
    answer: 1,
    explanation: '원인-결과 그래프 기법은 입력 조건(원인)과 출력(결과) 간의 논리적 관계를 그래프로 표현하고, 이를 결정 테이블(Decision Table)로 변환하여 테스트 케이스를 도출하는 블랙박스 기법이다.'
  },
  {
    id: 119,
    subject: 'sw-dev',
    question: 'Docker에서 컨테이너 이미지를 빌드하기 위한 설정 파일은?',
    options: [
      'docker-compose.yml',
      'Dockerfile',
      'Makefile',
      'Jenkinsfile'
    ],
    answer: 1,
    explanation: 'Dockerfile은 컨테이너 이미지를 빌드하기 위한 명령어들을 순서대로 기술한 설정 파일로, FROM, RUN, COPY, CMD 등의 지시어를 사용한다.'
  },
  {
    id: 120,
    subject: 'sw-dev',
    question: '소프트웨어 테스트 원칙 중 "결함은 특정 모듈에 집중되어 있다"는 원칙은?',
    options: [
      '살충제 패러독스(Pesticide Paradox)',
      '결함 집중(Defect Clustering)',
      '오류-부재의 궤변(Absence-of-Errors Fallacy)',
      '완벽한 테스팅은 불가능(Exhaustive Testing is Impossible)'
    ],
    answer: 1,
    explanation: '결함 집중(Defect Clustering) 원칙은 파레토 법칙(80:20 법칙)에 따라 전체 결함의 대부분이 소수의 특정 모듈에 집중되어 있다는 원칙으로, 결함이 많은 모듈을 중점적으로 테스트해야 한다.'
  },
  {
    id: 121,
    subject: 'sw-dev',
    question: '쿠버네티스(Kubernetes)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '컨테이너 오케스트레이션 도구이다',
      '컨테이너의 배포, 확장, 관리를 자동화한다',
      'Pod는 쿠버네티스에서 배포 가능한 최소 단위이다',
      '단일 호스트에서만 컨테이너를 실행할 수 있다'
    ],
    answer: 3,
    explanation: '쿠버네티스는 다수의 호스트(노드)로 구성된 클러스터에서 컨테이너를 관리하는 오케스트레이션 도구로, 단일 호스트에 한정되지 않으며 자동 스케일링과 로드 밸런싱을 지원한다.'
  },
  {
    id: 122,
    subject: 'sw-dev',
    question: '테스트 원칙 중 "같은 테스트를 반복하면 더 이상 새로운 결함을 발견할 수 없다"는 원칙은?',
    options: [
      '결함 집중(Defect Clustering)',
      '살충제 패러독스(Pesticide Paradox)',
      '정황 의존성(Context Dependent)',
      '조기 테스팅(Early Testing)'
    ],
    answer: 1,
    explanation: '살충제 패러독스는 동일한 테스트 케이스를 반복 수행하면 더 이상 새로운 결함을 발견하지 못하므로, 주기적으로 테스트 케이스를 검토하고 갱신해야 한다는 원칙이다.'
  },
  {
    id: 123,
    subject: 'sw-dev',
    question: '소프트웨어 개발 방법론 중 XP(eXtreme Programming)의 핵심 실천법(Practice)에 해당하지 않는 것은?',
    options: [
      '페어 프로그래밍(Pair Programming)',
      '테스트 주도 개발(TDD)',
      '스프린트 계획 회의(Sprint Planning)',
      '지속적 통합(Continuous Integration)'
    ],
    answer: 2,
    explanation: '스프린트 계획 회의는 스크럼(Scrum)의 이벤트이다. XP의 핵심 실천법에는 페어 프로그래밍, TDD, 지속적 통합, 리팩토링, 작은 릴리즈, 코딩 표준 등이 포함된다.'
  },
  {
    id: 124,
    subject: 'sw-dev',
    question: '퍼징(Fuzzing) 테스트에 대한 설명으로 옳은 것은?',
    options: [
      '명세를 기반으로 테스트 케이스를 설계하는 기법이다',
      '소스 코드를 직접 검토하여 결함을 찾는 기법이다',
      '비정상적인 무작위 데이터를 입력하여 소프트웨어의 취약점이나 결함을 발견하는 기법이다',
      '사용자 시나리오를 기반으로 기능을 검증하는 기법이다'
    ],
    answer: 2,
    explanation: '퍼징(Fuzzing)은 프로그램에 예상치 못한 무작위(랜덤) 데이터나 비정상적인 데이터를 대량으로 입력하여 충돌, 메모리 누수, 보안 취약점 등을 탐지하는 테스트 기법이다.'
  },
  {
    id: 125,
    subject: 'sw-dev',
    question: '코드 품질 메트릭 중 하나의 모듈이 다른 모듈과 연결되는 정도를 나타내는 지표는?',
    options: [
      '응집도(Cohesion)',
      '결합도(Coupling)',
      '순환 복잡도(Cyclomatic Complexity)',
      '코드 라인 수(LOC)'
    ],
    answer: 1,
    explanation: '결합도(Coupling)는 모듈 간의 상호 의존 정도를 나타내는 지표로, 결합도가 낮을수록 모듈의 독립성이 높아 유지보수성이 좋다. 자료 결합도가 가장 바람직하다.'
  },
  {
    id: 126,
    subject: 'sw-dev',
    question: '인프라를 코드로 관리(Infrastructure as Code)하는 도구에 해당하지 않는 것은?',
    options: [
      'Terraform',
      'Ansible',
      'Prometheus',
      'Chef'
    ],
    answer: 2,
    explanation: 'Prometheus는 모니터링 및 알림 도구이다. Terraform, Ansible, Chef는 인프라를 코드로 정의하고 자동으로 프로비저닝·관리하는 IaC(Infrastructure as Code) 도구이다.'
  },
  {
    id: 127,
    subject: 'sw-dev',
    question: '모듈 테스트 전략에서 목(Mock) 객체와 스텁(Stub)의 차이로 옳은 것은?',
    options: [
      '목은 상태를 검증하고, 스텁은 행위를 검증한다',
      '목은 호출 여부와 방법을 검증하고, 스텁은 미리 정해진 응답을 반환한다',
      '목은 실제 객체이고, 스텁은 가상 객체이다',
      '두 용어는 동일한 의미이다'
    ],
    answer: 1,
    explanation: '스텁(Stub)은 미리 정의된 응답을 반환하는 객체로 상태 검증에 사용되고, 목(Mock)은 기대되는 호출이 올바르게 수행되었는지 행위를 검증하는 객체이다.'
  },
  {
    id: 128,
    subject: 'sw-dev',
    question: '성능 테스트에서 시스템에 점진적으로 부하를 증가시켜 처리 한계점(임계점)을 찾는 테스트는?',
    options: [
      '스파이크 테스트(Spike Test)',
      '내구성 테스트(Endurance Test)',
      '부하 테스트(Load Test)',
      '볼륨 테스트(Volume Test)'
    ],
    answer: 2,
    explanation: '부하 테스트(Load Test)는 시스템에 점진적으로 부하를 증가시키면서 응답 시간, 처리량 등을 측정하여 시스템의 성능 임계점을 파악하는 테스트이다.'
  },

  // ===== db (데이터베이스 구축) 추가 : 129~152 =====
  {
    id: 129,
    subject: 'db',
    question: '분산 데이터베이스의 투명성(Transparency) 중 사용자가 데이터의 물리적 저장 위치를 알 필요 없이 접근할 수 있는 것은?',
    options: [
      '분할 투명성(Fragmentation Transparency)',
      '위치 투명성(Location Transparency)',
      '중복 투명성(Replication Transparency)',
      '병행 투명성(Concurrency Transparency)'
    ],
    answer: 1,
    explanation: '위치 투명성은 데이터가 어느 물리적 위치(사이트)에 저장되어 있는지 사용자가 알 필요 없이 논리적 이름만으로 접근할 수 있는 성질이다.'
  },
  {
    id: 130,
    subject: 'db',
    question: 'NoSQL 데이터베이스의 유형 중 문서(Document) 기반 데이터베이스에 해당하는 것은?',
    options: [
      'Redis',
      'MongoDB',
      'Cassandra',
      'Neo4j'
    ],
    answer: 1,
    explanation: 'MongoDB는 JSON과 유사한 BSON 형식의 문서를 저장하는 대표적인 문서 기반 NoSQL이다. Redis는 키-값 저장소, Cassandra는 컬럼 패밀리, Neo4j는 그래프 데이터베이스이다.'
  },
  {
    id: 131,
    subject: 'db',
    question: '병행제어에서 교착상태(Deadlock)의 발생 조건에 해당하지 않는 것은?',
    options: [
      '상호 배제(Mutual Exclusion)',
      '점유와 대기(Hold and Wait)',
      '선점 가능(Preemption)',
      '환형 대기(Circular Wait)'
    ],
    answer: 2,
    explanation: '교착상태의 4가지 필요 조건은 상호 배제, 점유와 대기, 비선점(Non-preemption), 환형 대기이다. 선점 가능(Preemption)은 교착상태를 해결하는 조건이지 발생 조건이 아니다.'
  },
  {
    id: 132,
    subject: 'db',
    question: '데이터베이스 회복 기법 중 트랜잭션 수행 중 변경된 내용을 데이터베이스에 즉시 반영하고, 장애 발생 시 로그를 이용해 회복하는 기법은?',
    options: [
      '지연 갱신(Deferred Update)',
      '즉시 갱신(Immediate Update)',
      '검사점(Checkpoint) 회복',
      '그림자 페이징(Shadow Paging)'
    ],
    answer: 1,
    explanation: '즉시 갱신 기법은 트랜잭션이 완료되기 전에도 변경 내용을 데이터베이스에 즉시 반영하며, 장애 발생 시 로그의 Undo/Redo 연산을 이용하여 회복한다.'
  },
  {
    id: 133,
    subject: 'db',
    question: '데이터 마이닝(Data Mining) 기법 중 데이터 항목 간의 연관 관계를 찾는 기법은?',
    options: [
      '분류(Classification)',
      '군집화(Clustering)',
      '연관 규칙(Association Rule)',
      '회귀 분석(Regression)'
    ],
    answer: 2,
    explanation: '연관 규칙은 대량의 데이터에서 항목 간의 동시 발생 패턴을 찾는 기법으로, "기저귀를 사는 고객은 맥주도 함께 산다"와 같은 장바구니 분석이 대표적 예이다. 지지도, 신뢰도, 향상도 등을 측정한다.'
  },
  {
    id: 134,
    subject: 'db',
    question: '데이터 웨어하우스(Data Warehouse)의 특성에 해당하지 않는 것은?',
    options: [
      '주제 지향적(Subject-Oriented)',
      '통합적(Integrated)',
      '시간 변이적(Time-Variant)',
      '실시간 갱신(Real-Time Update)'
    ],
    answer: 3,
    explanation: '데이터 웨어하우스의 4가지 특성은 주제 지향적, 통합적, 시간 변이적, 비휘발적(Non-volatile)이다. 실시간 갱신이 아니라 비휘발적 성질로, 한 번 저장된 데이터는 변경되지 않는다.'
  },
  {
    id: 135,
    subject: 'db',
    question: '데이터베이스 파티셔닝 기법 중 특정 범위의 값을 기준으로 데이터를 분할하는 방식은?',
    options: [
      '해시 파티셔닝(Hash Partitioning)',
      '범위 파티셔닝(Range Partitioning)',
      '리스트 파티셔닝(List Partitioning)',
      '라운드 로빈 파티셔닝(Round-Robin Partitioning)'
    ],
    answer: 1,
    explanation: '범위 파티셔닝은 특정 컬럼의 값 범위(날짜, 숫자 등)를 기준으로 데이터를 분할하는 방식으로, 날짜별 데이터 관리에 자주 사용된다.'
  },
  {
    id: 136,
    subject: 'db',
    question: 'NoSQL의 CAP 이론에서 P(Partition Tolerance)가 의미하는 것은?',
    options: [
      '데이터의 일관성을 보장하는 것',
      '시스템이 항상 응답할 수 있는 것',
      '네트워크 분할이 발생해도 시스템이 동작하는 것',
      '데이터를 영구적으로 저장하는 것'
    ],
    answer: 2,
    explanation: 'CAP 이론에서 Partition Tolerance는 네트워크 분할(통신 장애)이 발생하더라도 시스템이 정상적으로 동작해야 함을 의미한다. C는 일관성, A는 가용성을 나타낸다.'
  },
  {
    id: 137,
    subject: 'db',
    question: 'SQL 윈도우 함수 중 결과 집합의 행에 순번을 부여하되, 동일 값이 있어도 고유한 순번을 부여하는 함수는?',
    options: [
      'RANK()',
      'DENSE_RANK()',
      'ROW_NUMBER()',
      'NTILE()'
    ],
    answer: 2,
    explanation: 'ROW_NUMBER()는 동일 값이 있더라도 각 행에 고유한 순번을 부여한다. RANK()는 동일 값에 같은 순위를 부여하고 다음 순위를 건너뛰며, DENSE_RANK()는 순위를 건너뛰지 않는다.'
  },
  {
    id: 138,
    subject: 'db',
    question: '다음 SQL의 실행 결과는?\n\nSELECT name, salary,\n  RANK() OVER (ORDER BY salary DESC) as ranking\nFROM employee;\n\n[employee 테이블]\nname | salary\n김철수 | 5000\n이영희 | 4000\n박민수 | 5000\n최지영 | 3000',
    options: [
      '김철수:1, 이영희:2, 박민수:3, 최지영:4',
      '김철수:1, 박민수:1, 이영희:3, 최지영:4',
      '김철수:1, 박민수:2, 이영희:3, 최지영:4',
      '김철수:1, 박민수:1, 이영희:2, 최지영:3'
    ],
    answer: 1,
    explanation: 'RANK() 함수는 동일 값에 같은 순위를 부여하고 다음 순위를 건너뛴다. salary 5000인 김철수와 박민수는 모두 1위, 이영희(4000)는 3위(2위 건너뜀), 최지영(3000)은 4위이다.'
  },
  {
    id: 139,
    subject: 'db',
    question: 'SQL에서 CTE(Common Table Expression)를 정의하기 위해 사용하는 키워드는?',
    options: [
      'DEFINE',
      'WITH',
      'DECLARE',
      'TEMP'
    ],
    answer: 1,
    explanation: 'CTE는 WITH 키워드를 사용하여 임시 결과 집합을 정의하며, 쿼리의 가독성과 재사용성을 높인다. 재귀 CTE를 사용하면 계층적 데이터 조회도 가능하다.'
  },
  {
    id: 140,
    subject: 'db',
    question: '데이터 품질 관리의 측정 지표에 해당하지 않는 것은?',
    options: [
      '완전성(Completeness)',
      '정확성(Accuracy)',
      '일관성(Consistency)',
      '가용성(Availability)'
    ],
    answer: 3,
    explanation: '데이터 품질의 주요 측정 지표는 완전성, 정확성, 일관성, 유일성(Uniqueness), 유효성(Validity), 적시성(Timeliness) 등이다. 가용성은 시스템 품질 속성에 해당한다.'
  },
  {
    id: 141,
    subject: 'db',
    question: '데이터베이스 클러스터링에 대한 설명으로 옳지 않은 것은?',
    options: [
      '여러 대의 서버를 묶어 하나의 시스템처럼 동작하게 한다',
      '고가용성(High Availability)을 제공할 수 있다',
      '부하 분산(Load Balancing)이 가능하다',
      '클러스터 내 모든 노드는 항상 동일한 하드웨어 사양이어야 한다'
    ],
    answer: 3,
    explanation: '데이터베이스 클러스터링은 이기종 하드웨어에서도 구성이 가능하며, 반드시 동일 사양의 하드웨어를 필요로 하지 않는다. 고가용성과 부하 분산이 주요 목적이다.'
  },
  {
    id: 142,
    subject: 'db',
    question: '분산 데이터베이스에서 2단계 커밋(2-Phase Commit, 2PC) 프로토콜의 단계 순서로 올바른 것은?',
    options: [
      '실행 단계 → 투표 단계',
      '투표(준비) 단계 → 결정(완료) 단계',
      '결정 단계 → 투표 단계',
      '준비 단계 → 실행 단계 → 완료 단계'
    ],
    answer: 1,
    explanation: '2PC 프로토콜은 투표(준비) 단계에서 모든 참여 노드에 Commit 준비 여부를 확인한 후, 결정(완료) 단계에서 전체 Commit 또는 Rollback을 결정하여 분산 트랜잭션의 원자성을 보장한다.'
  },
  {
    id: 143,
    subject: 'db',
    question: '회복 기법 중 검사점(Checkpoint) 기법에 대한 설명으로 옳은 것은?',
    options: [
      '트랜잭션 수행 중 변경 내용을 데이터베이스에 반영하지 않는다',
      '장애 발생 시 처음부터 모든 로그를 검사하여 회복한다',
      '일정 간격으로 검사점을 설정하고, 장애 발생 시 가장 최근 검사점부터 회복을 시작한다',
      '로그를 사용하지 않고 복사본으로 회복한다'
    ],
    answer: 2,
    explanation: '검사점 회복 기법은 일정 간격으로 검사점을 설정하여 해당 시점까지의 변경 사항을 디스크에 반영하고, 장애 발생 시 가장 최근 검사점 이후의 로그만 처리하여 회복 시간을 단축한다.'
  },
  {
    id: 144,
    subject: 'db',
    question: 'E-R 다이어그램에서 약한 개체(Weak Entity)의 특징으로 옳은 것은?',
    options: [
      '자체적으로 기본키를 가지고 있다',
      '다른 강한 개체(Owner Entity)에 종속되어 존재한다',
      '관계에 참여하지 않는 독립적 개체이다',
      '속성을 가지지 않는 개체이다'
    ],
    answer: 1,
    explanation: '약한 개체(Weak Entity)는 자체적인 기본키가 없어 소유 개체(Owner Entity)의 기본키와 자신의 부분키(Partial Key)를 결합하여 식별되며, 소유 개체에 존재 종속된다.'
  },
  {
    id: 145,
    subject: 'db',
    question: 'SQL에서 서브쿼리의 결과가 존재하는지 여부를 확인하는 연산자는?',
    options: [
      'IN',
      'ANY',
      'EXISTS',
      'BETWEEN'
    ],
    answer: 2,
    explanation: 'EXISTS 연산자는 서브쿼리가 하나 이상의 결과 행을 반환하면 TRUE, 그렇지 않으면 FALSE를 반환하여 서브쿼리의 존재 여부를 확인한다.'
  },
  {
    id: 146,
    subject: 'db',
    question: '다음 SQL 문의 실행 결과는?\n\nSELECT COALESCE(NULL, NULL, 100, 200)',
    options: [
      'NULL',
      '100',
      '200',
      '에러 발생'
    ],
    answer: 1,
    explanation: 'COALESCE 함수는 인자 목록에서 NULL이 아닌 첫 번째 값을 반환한다. 첫 번째와 두 번째 인자가 NULL이므로, NULL이 아닌 첫 번째 값인 100을 반환한다.'
  },
  {
    id: 147,
    subject: 'db',
    question: '데이터 마이닝 기법 중 비지도 학습(Unsupervised Learning)에 해당하는 것은?',
    options: [
      '의사결정트리(Decision Tree)',
      '회귀 분석(Regression)',
      '군집화(Clustering)',
      '신경망(Neural Network) 분류'
    ],
    answer: 2,
    explanation: '군집화(Clustering)는 사전에 정의된 레이블(정답) 없이 데이터 간의 유사성을 기반으로 그룹을 형성하는 비지도 학습 기법이다. K-Means가 대표적 알고리즘이다.'
  },
  {
    id: 148,
    subject: 'db',
    question: '병행제어에서 타임스탬프 순서(Timestamp Ordering) 기법에 대한 설명으로 옳은 것은?',
    options: [
      '잠금(Lock)을 사용하여 동시성을 제어한다',
      '트랜잭션에 부여된 타임스탬프 순서대로 데이터에 접근하도록 하여 직렬 가능성을 보장한다',
      '낙관적(Optimistic) 기법으로 충돌 시에만 검증한다',
      '교착상태 발생 가능성이 높다'
    ],
    answer: 1,
    explanation: '타임스탬프 순서 기법은 각 트랜잭션에 고유한 타임스탬프를 부여하고, 이 순서에 따라 데이터 접근을 제어하여 직렬 가능성을 보장한다. 잠금을 사용하지 않으므로 교착상태가 발생하지 않는다.'
  },
  {
    id: 149,
    subject: 'db',
    question: 'OLAP(Online Analytical Processing)에서 데이터를 다양한 차원으로 분석할 때, 상위 수준의 요약 데이터에서 하위 수준의 세부 데이터로 이동하는 연산은?',
    options: [
      '롤업(Roll-Up)',
      '드릴 다운(Drill-Down)',
      '슬라이싱(Slicing)',
      '다이싱(Dicing)'
    ],
    answer: 1,
    explanation: '드릴 다운(Drill-Down)은 요약된 상위 수준 데이터에서 하위 수준의 세부 데이터로 내려가며 분석하는 연산이다. 반대로 롤업(Roll-Up)은 세부에서 요약으로 올라가는 연산이다.'
  },
  {
    id: 150,
    subject: 'db',
    question: '다음 SQL 문의 실행 결과는?\n\nSELECT name,\n  SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as cumulative\nFROM sales\nORDER BY date;\n\n[sales 테이블]\nname | date | amount\nA | 2024-01-01 | 100\nB | 2024-01-02 | 200\nC | 2024-01-03 | 150\n\n세 번째 행(C)의 cumulative 값은?',
    options: [
      '150',
      '350',
      '450',
      '300'
    ],
    answer: 2,
    explanation: '윈도우 함수에서 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW는 처음부터 현재 행까지의 누적 합계를 계산한다. 세 번째 행에서 100 + 200 + 150 = 450이다.'
  },
  {
    id: 151,
    subject: 'db',
    question: '제4정규형(4NF)에서 제거하는 종속성은?',
    options: [
      '부분 함수 종속',
      '이행적 함수 종속',
      '다치 종속(Multi-Valued Dependency)',
      '조인 종속(Join Dependency)'
    ],
    answer: 2,
    explanation: '제4정규형(4NF)은 BCNF를 만족하면서 다치 종속(MVD)을 제거한 정규형이다. 다치 종속은 하나의 속성이 다른 두 개의 독립적인 속성 집합을 결정하는 종속 관계이다.'
  },
  {
    id: 152,
    subject: 'db',
    question: '해시 파티셔닝(Hash Partitioning)에 대한 설명으로 옳은 것은?',
    options: [
      '특정 컬럼의 값 범위를 기준으로 데이터를 분할한다',
      '특정 컬럼의 해시 함수 결과에 따라 데이터를 균등하게 분배한다',
      '지정된 값 목록에 따라 데이터를 분할한다',
      '데이터를 순서대로 순환 배치한다'
    ],
    answer: 1,
    explanation: '해시 파티셔닝은 파티션 키 컬럼의 해시 함수 결과값에 따라 데이터를 여러 파티션에 균등하게 분배하는 방식으로, 데이터 분포가 고르지 않은 경우에 유용하다.'
  },

  // ===== sys-integration (프로그래밍 언어 활용) 추가 : 153~176 =====
  {
    id: 153,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int arr[3][2] = {{1, 2}, {3, 4}, {5, 6}};\n    int (*p)[2] = arr;\n    printf("%d", *(*(p + 1) + 1));\n    return 0;\n}',
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    answer: 2,
    explanation: 'p는 2개의 int를 가진 배열의 포인터이다. p + 1은 arr[1]을 가리키고, *(p + 1) + 1은 arr[1][1]의 주소이므로, *(*(p + 1) + 1)은 arr[1][1] = 4가 출력된다.'
  },
  {
    id: 154,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\nclass Animal {\n    void sound() { System.out.print("Animal"); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.print("Dog"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n    }\n}',
    options: [
      'Animal',
      'Dog',
      'AnimalDog',
      '컴파일 오류'
    ],
    answer: 1,
    explanation: 'Java에서 메서드 오버라이딩 시 동적 바인딩(Dynamic Binding)이 적용되어 실제 객체의 타입(Dog)에 해당하는 메서드가 호출된다. 이것이 다형성(Polymorphism)의 핵심이다.'
  },
  {
    id: 155,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\nresult = list(map(lambda x: x ** 2, [1, 2, 3, 4, 5]))\nprint(result)',
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, 4, 9, 16, 25]',
      '[2, 4, 6, 8, 10]',
      '[1, 8, 27, 64, 125]'
    ],
    answer: 1,
    explanation: 'lambda x: x ** 2는 인자를 제곱하는 익명 함수이다. map()은 리스트의 각 요소에 이 함수를 적용하므로 [1, 4, 9, 16, 25]가 출력된다.'
  },
  {
    id: 156,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 10, y = 20;\n    swap(&x, &y);\n    printf("%d %d", x, y);\n    return 0;\n}',
    options: [
      '10 20',
      '20 10',
      '10 10',
      '20 20'
    ],
    answer: 1,
    explanation: 'swap 함수에서 포인터를 통해 실제 변수의 값을 교환한다(Call by Reference 효과). *a와 *b가 가리키는 실제 값이 교환되어 x = 20, y = 10이 출력된다.'
  },
  {
    id: 157,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch(ArithmeticException e) {\n            System.out.print("A");\n        } catch(Exception e) {\n            System.out.print("B");\n        } finally {\n            System.out.print("C");\n        }\n    }\n}',
    options: [
      'AC',
      'BC',
      'ABC',
      'C'
    ],
    answer: 0,
    explanation: '10 / 0은 ArithmeticException을 발생시킨다. 첫 번째 catch에서 "A"가 출력되고, 두 번째 catch는 실행되지 않으며, finally에서 "C"가 출력되어 "AC"가 된다.'
  },
  {
    id: 158,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\nresult = [x for x in range(1, 11) if x % 3 == 0]\nprint(result)',
    options: [
      '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
      '[3, 6, 9]',
      '[0, 3, 6, 9]',
      '[1, 4, 7, 10]'
    ],
    answer: 1,
    explanation: '리스트 컴프리헨션에서 range(1, 11)은 1~10의 범위이고, if x % 3 == 0 조건으로 3의 배수만 필터링하므로 [3, 6, 9]가 출력된다.'
  },
  {
    id: 159,
    subject: 'sys-integration',
    question: '해시 테이블(Hash Table)에서 서로 다른 키가 같은 해시값을 가지는 현상은?',
    options: [
      '오버플로우(Overflow)',
      '충돌(Collision)',
      '클러스터링(Clustering)',
      '체이닝(Chaining)'
    ],
    answer: 1,
    explanation: '충돌(Collision)은 서로 다른 두 개 이상의 키가 해시 함수에 의해 같은 해시값(버킷 주소)을 가지는 현상이다. 해결 방법으로 체이닝(Chaining), 개방 주소법(Open Addressing) 등이 있다.'
  },
  {
    id: 160,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    char *p = "HELLO";\n    printf("%c", *(p + 4));\n    return 0;\n}',
    options: [
      'H',
      'E',
      'L',
      'O'
    ],
    answer: 3,
    explanation: '문자열 "HELLO"에서 p + 4는 인덱스 4 위치인 \'O\'를 가리킨다. H(0), E(1), L(2), L(3), O(4)이므로 \'O\'가 출력된다.'
  },
  {
    id: 161,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 8, 1, 9};\n        int max = arr[0];\n        for(int i = 1; i < arr.length; i++) {\n            if(arr[i] > max)\n                max = arr[i];\n        }\n        System.out.println(max);\n    }\n}',
    options: [
      '1',
      '5',
      '8',
      '9'
    ],
    answer: 3,
    explanation: '배열에서 최대값을 찾는 알고리즘이다. 초기 max는 5이고, 3(변경없음), 8(max=8), 1(변경없음), 9(max=9)를 거쳐 최종 max는 9가 출력된다.'
  },
  {
    id: 162,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\nclass Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\na = Counter()\nb = Counter()\nc = Counter()\nprint(Counter.count)',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    answer: 3,
    explanation: 'count는 클래스 변수로 모든 인스턴스가 공유한다. Counter 객체를 3번 생성하면 __init__이 3번 호출되어 Counter.count가 3이 된다.'
  },
  {
    id: 163,
    subject: 'sys-integration',
    question: '그래프 탐색 알고리즘 중 너비 우선 탐색(BFS)에서 사용하는 자료구조는?',
    options: [
      '스택(Stack)',
      '큐(Queue)',
      '힙(Heap)',
      '이진 탐색 트리(BST)'
    ],
    answer: 1,
    explanation: 'BFS(Breadth-First Search)는 큐(Queue)를 사용하여 현재 노드의 인접 노드를 모두 방문한 후 다음 깊이의 노드를 방문한다. DFS는 스택(Stack)이나 재귀를 사용한다.'
  },
  {
    id: 164,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 0xAB;\n    printf("%d", a);\n    return 0;\n}',
    options: [
      '171',
      '256',
      'AB',
      '10'
    ],
    answer: 0,
    explanation: '0xAB는 16진수로, 10진수로 변환하면 A(10)×16 + B(11) = 160 + 11 = 171이다. %d는 10진수 출력이므로 171이 출력된다.'
  },
  {
    id: 165,
    subject: 'sys-integration',
    question: '정렬 알고리즘 중 평균 시간 복잡도가 O(n log n)이 아닌 것은?',
    options: [
      '퀵 정렬(Quick Sort)',
      '병합 정렬(Merge Sort)',
      '힙 정렬(Heap Sort)',
      '버블 정렬(Bubble Sort)'
    ],
    answer: 3,
    explanation: '버블 정렬의 평균 시간 복잡도는 O(n²)이다. 퀵 정렬, 병합 정렬, 힙 정렬은 모두 평균 시간 복잡도가 O(n log n)이다. 단, 퀵 정렬의 최악은 O(n²)이다.'
  },
  {
    id: 166,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    interface Printable {\n        void print();\n    }\n    public static void main(String[] args) {\n        Printable p = () -> System.out.print("Lambda");\n        p.print();\n    }\n}',
    options: [
      'Lambda',
      'Printable',
      '컴파일 오류',
      '런타임 오류'
    ],
    answer: 0,
    explanation: 'Java 8부터 함수형 인터페이스(메서드가 하나인 인터페이스)는 람다식으로 구현할 수 있다. () -> System.out.print("Lambda")는 print()의 구현이므로 "Lambda"가 출력된다.'
  },
  {
    id: 167,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\ndef decorator(func):\n    def wrapper():\n        print("Before", end=" ")\n        func()\n        print("After", end="")\n    return wrapper\n\n@decorator\ndef hello():\n    print("Hello", end=" ")\n\nhello()',
    options: [
      'Hello',
      'Before Hello After',
      'Hello Before After',
      'Before After Hello'
    ],
    answer: 1,
    explanation: '@decorator는 hello = decorator(hello)와 같다. hello() 호출 시 wrapper()가 실행되어 "Before"를 출력하고, func()(원래 hello)가 "Hello"를 출력하고, "After"가 출력된다.'
  },
  {
    id: 168,
    subject: 'sys-integration',
    question: '최소 힙(Min Heap)에서 루트 노드의 특성으로 옳은 것은?',
    options: [
      '가장 큰 값이 저장된다',
      '가장 작은 값이 저장된다',
      '중간값이 저장된다',
      '가장 최근에 삽입된 값이 저장된다'
    ],
    answer: 1,
    explanation: '최소 힙(Min Heap)은 부모 노드가 항상 자식 노드보다 작거나 같은 완전 이진 트리 구조로, 루트 노드에 가장 작은 값이 위치한다. 우선순위 큐 구현에 주로 사용된다.'
  },
  {
    id: 169,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n    // 선택 정렬 1회전\n    int min_idx = 0;\n    for(int j = 1; j < n; j++) {\n        if(arr[j] < arr[min_idx])\n            min_idx = j;\n    }\n    int temp = arr[0];\n    arr[0] = arr[min_idx];\n    arr[min_idx] = temp;\n    printf("%d", arr[0]);\n    return 0;\n}',
    options: [
      '64',
      '25',
      '12',
      '11'
    ],
    answer: 3,
    explanation: '선택 정렬 1회전에서 배열의 최소값을 찾아 첫 번째 위치와 교환한다. 최소값 11(인덱스 4)이 arr[0]과 교환되어 arr[0] = 11이 출력된다.'
  },
  {
    id: 170,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\nimport java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(10);\n        list.add(20);\n        list.add(30);\n        list.remove(1);\n        System.out.println(list.size() + " " + list.get(1));\n    }\n}',
    options: [
      '3 20',
      '2 30',
      '2 20',
      '3 30'
    ],
    answer: 1,
    explanation: 'list.remove(1)은 인덱스 1의 요소(20)를 삭제한다. 삭제 후 리스트는 [10, 30]이 되어 size()는 2, get(1)은 30이므로 "2 30"이 출력된다.'
  },
  {
    id: 171,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\ndef gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = gen()\nprint(next(g), end=" ")\nprint(next(g), end="")',
    options: [
      '1 2',
      '1 3',
      '2 3',
      '1 1'
    ],
    answer: 0,
    explanation: 'yield는 제너레이터 함수에서 값을 하나씩 반환한다. 첫 번째 next(g)는 1을, 두 번째 next(g)는 2를 반환한다. 제너레이터는 이전 상태를 기억하여 다음 yield부터 실행한다.'
  },
  {
    id: 172,
    subject: 'sys-integration',
    question: '이진 탐색(Binary Search)의 전제 조건으로 올바른 것은?',
    options: [
      '데이터가 연결 리스트에 저장되어야 한다',
      '데이터가 정렬되어 있어야 한다',
      '데이터의 크기가 2의 거듭제곱이어야 한다',
      '데이터에 중복 값이 없어야 한다'
    ],
    answer: 1,
    explanation: '이진 탐색은 정렬된 배열에서 중간값과 비교하여 탐색 범위를 반으로 줄여가는 알고리즘으로, 반드시 데이터가 정렬되어 있어야 한다. 시간 복잡도는 O(log n)이다.'
  },
  {
    id: 173,
    subject: 'sys-integration',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 3;\n    int c = (a > b) ? a : b;\n    printf("%d", c);\n    return 0;\n}',
    options: [
      '3',
      '5',
      '8',
      '0'
    ],
    answer: 1,
    explanation: '삼항 연산자 (조건) ? 참값 : 거짓값에서 a(5) > b(3)이 참이므로 c에 a의 값 5가 대입되어 5가 출력된다.'
  },
  {
    id: 174,
    subject: 'sys-integration',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    static int count = 0;\n    Main() { count++; }\n    public static void main(String[] args) {\n        Main a = new Main();\n        Main b = new Main();\n        Main c = new Main();\n        System.out.println(Main.count);\n    }\n}',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    answer: 3,
    explanation: 'count는 static 변수(클래스 변수)로 모든 객체가 공유한다. 생성자에서 count를 증가시키며, 객체를 3번 생성했으므로 count는 3이 된다.'
  },
  {
    id: 175,
    subject: 'sys-integration',
    question: '다음 Python 코드의 실행 결과는?\n\ntry:\n    result = [1, 2, 3][5]\nexcept IndexError:\n    print("A", end="")\nexcept Exception:\n    print("B", end="")\nelse:\n    print("C", end="")\nfinally:\n    print("D", end="")',
    options: [
      'AD',
      'BD',
      'CD',
      'ABD'
    ],
    answer: 0,
    explanation: '인덱스 5는 범위를 초과하여 IndexError가 발생한다. except IndexError에서 "A"가 출력되고, else는 예외가 없을 때만 실행되므로 건너뛰며, finally는 항상 실행되어 "D"가 출력된다.'
  },
  {
    id: 176,
    subject: 'sys-integration',
    question: '그래프에서 모든 정점을 포함하면서 간선의 가중치 합이 최소인 트리를 무엇이라 하는가?',
    options: [
      '이진 탐색 트리(BST)',
      '최소 신장 트리(MST)',
      'AVL 트리',
      'B-트리'
    ],
    answer: 1,
    explanation: '최소 신장 트리(Minimum Spanning Tree)는 그래프의 모든 정점을 연결하면서 간선 가중치의 합이 최소인 트리이다. Kruskal 알고리즘과 Prim 알고리즘으로 구할 수 있다.'
  },

  // ===== info-security (정보시스템 구축관리) 추가 : 177~200 =====
  {
    id: 177,
    subject: 'info-security',
    question: '네트워크 보안 장비 중 내부 네트워크와 외부 네트워크 사이에서 패킷을 필터링하고 접근을 제어하는 장비는?',
    options: [
      'IDS(침입 탐지 시스템)',
      '방화벽(Firewall)',
      'VPN(가상 사설 네트워크)',
      'NAC(네트워크 접근 제어)'
    ],
    answer: 1,
    explanation: '방화벽(Firewall)은 미리 정의된 보안 규칙에 따라 네트워크 트래픽을 모니터링하고 제어하는 네트워크 보안 장비로, 허가되지 않은 접근을 차단한다.'
  },
  {
    id: 178,
    subject: 'info-security',
    question: '암호 프로토콜 중 SSL/TLS의 핸드셰이크 과정에서 수행되지 않는 것은?',
    options: [
      '서버 인증서 교환',
      '암호화 알고리즘 협상',
      '세션 키 생성',
      'IP 주소 할당'
    ],
    answer: 3,
    explanation: 'SSL/TLS 핸드셰이크는 암호화 알고리즘 협상, 서버(및 선택적 클라이언트) 인증서 교환, 세션 키 생성 등을 수행한다. IP 주소 할당은 DHCP의 역할이다.'
  },
  {
    id: 179,
    subject: 'info-security',
    question: '접근제어 모델 중 Bell-LaPadula 모델의 핵심 원칙으로 올바른 것은?',
    options: [
      'No Read Up, No Write Down',
      'No Read Down, No Write Up',
      'No Read Up, No Write Up',
      'No Read Down, No Write Down'
    ],
    answer: 0,
    explanation: 'Bell-LaPadula 모델은 기밀성을 중시하는 모델로, "No Read Up"(상위 등급 읽기 금지)과 "No Write Down"(하위 등급 쓰기 금지) 원칙을 가진다. *-property라고도 한다.'
  },
  {
    id: 180,
    subject: 'info-security',
    question: 'ISO 27001 정보보안 관리체계(ISMS)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '정보보안 정책, 절차, 프로세스를 체계적으로 관리한다',
      'PDCA(Plan-Do-Check-Act) 사이클을 기반으로 한다',
      '기술적 보안 조치만을 다루며 관리적 보안은 제외한다',
      '위험 평가를 기반으로 적절한 보안 통제를 선택한다'
    ],
    answer: 2,
    explanation: 'ISO 27001은 기술적, 관리적, 물리적 보안을 포함한 종합적인 정보보안 관리체계로, 조직의 정보자산을 체계적으로 보호하기 위한 국제 표준이다.'
  },
  {
    id: 181,
    subject: 'info-security',
    question: '위험 관리에서 위험 대응 전략 중 위험의 영향을 보험 등 제3자에게 전가하는 전략은?',
    options: [
      '위험 회피(Avoidance)',
      '위험 전가(Transfer)',
      '위험 감소(Mitigation)',
      '위험 수용(Acceptance)'
    ],
    answer: 1,
    explanation: '위험 전가(Transfer)는 보험 가입이나 외주 계약 등을 통해 위험의 영향(재정적 손실 등)을 제3자에게 이전하는 전략이다.'
  },
  {
    id: 182,
    subject: 'info-security',
    question: '비즈니스 연속성 계획(BCP)에서 핵심 업무 프로세스와 관련 자원을 식별하고 영향을 분석하는 활동은?',
    options: [
      'BIA(Business Impact Analysis)',
      'DRP(Disaster Recovery Plan)',
      'RTO(Recovery Time Objective)',
      'RPO(Recovery Point Objective)'
    ],
    answer: 0,
    explanation: 'BIA(업무 영향 분석)는 재해 발생 시 핵심 업무에 미치는 영향을 분석하여 복구 우선순위, RTO(목표 복구 시간), RPO(목표 복구 시점) 등을 결정하는 활동이다.'
  },
  {
    id: 183,
    subject: 'info-security',
    question: '클라우드 보안에서 CSA(Cloud Security Alliance)가 제시한 클라우드 서비스 모델 중 사용자가 OS와 애플리케이션까지 직접 관리해야 하는 모델은?',
    options: [
      'SaaS(Software as a Service)',
      'PaaS(Platform as a Service)',
      'IaaS(Infrastructure as a Service)',
      'FaaS(Function as a Service)'
    ],
    answer: 2,
    explanation: 'IaaS에서 클라우드 제공자는 인프라(서버, 스토리지, 네트워크)만 제공하고, 사용자는 OS, 미들웨어, 애플리케이션 등을 직접 설치·관리해야 한다.'
  },
  {
    id: 184,
    subject: 'info-security',
    question: '블록체인에서 이전 블록의 해시값을 현재 블록에 포함시키는 이유로 가장 적절한 것은?',
    options: [
      '데이터 압축을 위해',
      '블록 간의 연결성과 무결성을 보장하기 위해',
      '암호화 속도를 높이기 위해',
      '데이터 중복을 제거하기 위해'
    ],
    answer: 1,
    explanation: '이전 블록의 해시값을 포함함으로써 블록 간의 연쇄 구조가 형성되고, 어떤 블록의 데이터가 변조되면 이후 모든 블록의 해시값이 변경되어 위변조를 즉시 탐지할 수 있다.'
  },
  {
    id: 185,
    subject: 'info-security',
    question: '소프트웨어 개발보안에서 시큐어 코딩 가이드의 보안 약점 유형에 해당하지 않는 것은?',
    options: [
      '입력 데이터 검증 및 표현',
      '보안 기능',
      '에러 처리',
      '코드 최적화'
    ],
    answer: 3,
    explanation: '시큐어 코딩의 보안 약점 유형은 입력 데이터 검증, 보안 기능, 시간 및 상태, 에러 처리, 코드 오류, 캡슐화, API 오용의 7가지이다. 코드 최적화는 보안 약점 유형이 아니다.'
  },
  {
    id: 186,
    subject: 'info-security',
    question: '개인정보보호법에서 개인정보의 수집·이용 시 반드시 정보주체에게 알리고 동의를 받아야 하는 사항이 아닌 것은?',
    options: [
      '개인정보의 수집·이용 목적',
      '수집하려는 개인정보의 항목',
      '개인정보의 보유 및 이용 기간',
      '개인정보 처리 시스템의 기술적 사양'
    ],
    answer: 3,
    explanation: '개인정보보호법에 따르면 수집·이용 목적, 수집 항목, 보유 및 이용 기간, 동의 거부권과 불이익 사항을 알려야 한다. 처리 시스템의 기술적 사양은 고지 대상이 아니다.'
  },
  {
    id: 187,
    subject: 'info-security',
    question: 'IDS(침입 탐지 시스템)의 탐지 방식 중 정상 행위 패턴을 학습하고, 이를 벗어나는 행위를 탐지하는 방식은?',
    options: [
      '오용 탐지(Misuse Detection)',
      '이상 탐지(Anomaly Detection)',
      '시그니처 기반 탐지(Signature-based Detection)',
      '상태 기반 탐지(Stateful Detection)'
    ],
    answer: 1,
    explanation: '이상 탐지(Anomaly Detection)는 정상적인 시스템 사용 패턴을 학습한 후, 이와 차이가 나는 비정상적인 행위를 탐지하는 방식으로, 알려지지 않은 새로운 공격도 탐지할 수 있다.'
  },
  {
    id: 188,
    subject: 'info-security',
    question: '해시 함수의 특성으로 옳지 않은 것은?',
    options: [
      '고정 길이의 출력값을 생성한다',
      '입력값이 같으면 항상 같은 해시값을 생성한다',
      '해시값으로부터 원래 입력값을 쉽게 복원할 수 있다',
      '입력값의 작은 변화에도 해시값이 크게 달라진다'
    ],
    answer: 2,
    explanation: '해시 함수는 일방향(One-way) 함수로 해시값에서 원래 입력값을 복원하는 것이 계산적으로 불가능해야 한다. 이를 역상 저항성(Preimage Resistance)이라 한다.'
  },
  {
    id: 189,
    subject: 'info-security',
    question: '네트워크 보안 공격 중 ARP 스푸핑(ARP Spoofing)에 대한 설명으로 옳은 것은?',
    options: [
      'DNS 서버를 위조하여 잘못된 IP 주소로 유도하는 공격이다',
      'ARP 프로토콜의 취약점을 이용하여 MAC 주소를 위조하는 공격이다',
      'TCP 3-Way Handshake를 조작하는 공격이다',
      'ICMP 메시지를 대량으로 발송하는 공격이다'
    ],
    answer: 1,
    explanation: 'ARP 스푸핑은 ARP 프로토콜이 인증 기능이 없는 점을 이용하여 위조된 ARP 응답을 보내 MAC 주소를 변조함으로써 중간자 공격(MITM)이나 도청을 수행하는 공격이다.'
  },
  {
    id: 190,
    subject: 'info-security',
    question: '암호 알고리즘 중 해시 함수에 해당하는 것은?',
    options: [
      'AES',
      'RSA',
      'SHA-256',
      'ECC'
    ],
    answer: 2,
    explanation: 'SHA-256은 입력 데이터를 256비트 고정 길이의 해시값으로 변환하는 해시 함수이다. AES는 대칭키, RSA와 ECC는 비대칭키 암호 알고리즘이다.'
  },
  {
    id: 191,
    subject: 'info-security',
    question: '접근제어 모델 중 Biba 모델의 핵심 원칙으로 올바른 것은?',
    options: [
      '기밀성을 중시하며, No Read Up 원칙을 따른다',
      '무결성을 중시하며, No Read Down, No Write Up 원칙을 따른다',
      '가용성을 중시하며, 항상 접근을 허용한다',
      '인증을 중시하며, 다단계 인증을 요구한다'
    ],
    answer: 1,
    explanation: 'Biba 모델은 무결성(Integrity)을 중시하는 모델로, "No Read Down"(하위 등급 읽기 금지)과 "No Write Up"(상위 등급 쓰기 금지) 원칙을 통해 데이터 무결성을 보장한다.'
  },
  {
    id: 192,
    subject: 'info-security',
    question: 'VPN(Virtual Private Network)에서 사용되는 터널링 프로토콜에 해당하지 않는 것은?',
    options: [
      'IPSec',
      'L2TP',
      'PPTP',
      'SMTP'
    ],
    answer: 3,
    explanation: 'SMTP는 이메일 전송 프로토콜이다. IPSec, L2TP, PPTP는 VPN에서 안전한 통신 터널을 구축하기 위해 사용되는 터널링 프로토콜이다.'
  },
  {
    id: 193,
    subject: 'info-security',
    question: '위험 분석 방법 중 정량적 위험 분석 방법에 해당하는 것은?',
    options: [
      '델파이법',
      '시나리오법',
      '순위결정법',
      '연간 예상 손실액(ALE) 계산법'
    ],
    answer: 3,
    explanation: '연간 예상 손실액(ALE = SLE × ARO) 계산법은 자산 가치, 노출 계수, 연간 발생률 등을 수치로 계산하는 정량적 위험 분석 방법이다. 델파이법, 시나리오법, 순위결정법은 정성적 방법이다.'
  },
  {
    id: 194,
    subject: 'info-security',
    question: '재해복구(DR) 시 RTO(Recovery Time Objective)가 의미하는 것은?',
    options: [
      '재해 발생 시 데이터 손실을 허용하는 최대 기간',
      '재해 발생 후 업무를 정상 복구해야 하는 목표 시간',
      '백업을 수행하는 주기',
      '시스템 가용률의 목표치'
    ],
    answer: 1,
    explanation: 'RTO(Recovery Time Objective)는 재해 발생 후 핵심 업무 시스템을 복구하여 정상 운영을 재개해야 하는 목표 시간이다. RPO(Recovery Point Objective)는 데이터 손실 허용 시점이다.'
  },
  {
    id: 195,
    subject: 'info-security',
    question: '클라우드 보안 위협 중 여러 테넌트(Tenant)가 동일한 물리적 자원을 공유함으로써 발생할 수 있는 보안 문제는?',
    options: [
      '사이드 채널 공격(Side Channel Attack)',
      'SQL 인젝션',
      'XSS 공격',
      '피싱(Phishing)'
    ],
    answer: 0,
    explanation: '멀티 테넌트 환경에서 동일 물리 서버의 자원(CPU 캐시, 메모리 등)을 공유하면 사이드 채널 공격을 통해 다른 테넌트의 정보가 유출될 수 있는 보안 위협이 존재한다.'
  },
  {
    id: 196,
    subject: 'info-security',
    question: '블록체인의 합의 알고리즘 중 비트코인에서 사용하는 방식은?',
    options: [
      'PoS(Proof of Stake)',
      'PoW(Proof of Work)',
      'PBFT(Practical Byzantine Fault Tolerance)',
      'DPoS(Delegated Proof of Stake)'
    ],
    answer: 1,
    explanation: 'PoW(작업 증명)는 비트코인에서 사용하는 합의 알고리즘으로, 복잡한 수학 문제를 먼저 풀어 블록 생성 권한을 얻는 방식이다. 많은 컴퓨팅 파워가 필요하다는 단점이 있다.'
  },
  {
    id: 197,
    subject: 'info-security',
    question: '소프트웨어 개발보안에서 버퍼 오버플로우(Buffer Overflow) 공격을 방지하기 위한 대책이 아닌 것은?',
    options: [
      '입력값의 크기를 검증한다',
      '안전한 함수(strncpy 등)를 사용한다',
      'ASLR(Address Space Layout Randomization)을 적용한다',
      'SQL 파라미터화 쿼리를 사용한다'
    ],
    answer: 3,
    explanation: 'SQL 파라미터화 쿼리는 SQL 인젝션 방지 대책이다. 버퍼 오버플로우 방지를 위해서는 입력 크기 검증, 안전한 함수 사용, ASLR, 스택 가드(Stack Guard) 등을 적용한다.'
  },
  {
    id: 198,
    subject: 'info-security',
    question: '개인정보보호법에서 정의하는 개인정보 처리자의 안전성 확보 조치에 해당하지 않는 것은?',
    options: [
      '접근 권한의 관리',
      '개인정보의 암호화',
      '접속기록의 보관 및 점검',
      '개인정보의 공개 의무'
    ],
    answer: 3,
    explanation: '개인정보보호법의 안전성 확보 조치에는 접근 권한 관리, 암호화, 접속기록 보관·점검, 보안프로그램 설치·운영 등이 포함된다. 개인정보 공개는 안전성 확보 조치가 아니라 위반 사항이다.'
  },
  {
    id: 199,
    subject: 'info-security',
    question: 'IPS(침입 방지 시스템)와 IDS(침입 탐지 시스템)의 차이점으로 올바른 것은?',
    options: [
      'IPS는 침입을 탐지만 하고, IDS는 침입을 차단한다',
      'IPS는 침입을 탐지하고 자동으로 차단하며, IDS는 탐지 후 관리자에게 알린다',
      'IPS와 IDS는 기능이 동일하다',
      'IPS는 네트워크 기반, IDS는 호스트 기반에서만 동작한다'
    ],
    answer: 1,
    explanation: 'IDS(침입 탐지 시스템)는 침입을 탐지하여 관리자에게 경고를 보내는 수동적 방식이고, IPS(침입 방지 시스템)는 탐지와 동시에 자동으로 차단까지 수행하는 능동적 방식이다.'
  },
  {
    id: 200,
    subject: 'info-security',
    question: '제로 트러스트(Zero Trust) 보안 모델의 핵심 원칙으로 올바른 것은?',
    options: [
      '내부 네트워크의 사용자와 장비는 항상 신뢰한다',
      '경계 보안(Perimeter Security)만으로 충분히 안전하다',
      '어떤 사용자나 장비도 기본적으로 신뢰하지 않으며, 항상 검증한다',
      '외부 사용자만 인증하고 내부 사용자는 인증을 면제한다'
    ],
    answer: 2,
    explanation: '제로 트러스트 모델은 "절대 신뢰하지 말고, 항상 검증하라(Never Trust, Always Verify)"를 핵심 원칙으로 하여, 내부·외부 구분 없이 모든 접근을 지속적으로 인증·검증하는 보안 모델이다.'
  }
]
