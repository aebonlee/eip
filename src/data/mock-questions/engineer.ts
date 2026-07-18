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
  },
  // ===== sw-design (소프트웨어 설계) 문제집 추가 : 201~258 =====
  {
    id: 201,
    subject: 'sw-design',
    question: '소프트웨어 아키텍처와 관련한 설명으로 틀린 것은?',
    options: [
      '파이프 필터 아키텍처에서 데이터는 파이프를 통해 양방향으로 흐르며, 필터 이동 시 오버헤드가 발생하지 않는다',
      '외부에서 인식할 수 있는 특성이 담긴 소프트웨어의 골격이 되는 기본 구조로 볼 수 있다',
      '데이터 중심 아키텍처는 공유 데이터 저장소를 통해 접근자 간의 통신이 이루어지므로 각 접근자의 수정과 확장이 용이하다',
      '이해관계자들의 품질 요구사항을 반영하여 품질 속성을 결정한다'
    ],
    answer: 0,
    explanation: '파이프-필터 패턴은 파이프를 통해 필터 간에 데이터를 전송하는 구조로, 단방향·양방향 모두 구현할 수 있으며 필터 간 데이터 이동 시 오버헤드가 발생한다.'
  },
  {
    id: 202,
    subject: 'sw-design',
    question: '애자일 기법에 대한 설명으로 맞지 않은 것은?',
    options: [
      '절차와 도구보다 개인과 소통을 중요하게 생각한다',
      '계획에 중점을 두어 변경 대응이 난해하다',
      '소프트웨어가 잘 실행되는 데 가치를 둔다',
      '고객과의 피드백을 중요하게 생각한다'
    ],
    answer: 1,
    explanation: '애자일은 계획을 따르기보다는 변화에 반응하는 것에 더 가치를 두는 개발 방법론이다.'
  },
  {
    id: 203,
    subject: 'sw-design',
    question: '디자인 패턴을 이용한 소프트웨어 재사용으로 얻어지는 장점이 아닌 것은?',
    options: [
      '소프트웨어 코드의 품질을 향상시킬 수 있다',
      '개발 프로세스를 무시할 수 있다',
      '개발자들 사이의 의사소통을 원활하게 할 수 있다',
      '소프트웨어의 품질과 생산성을 향상시킬 수 있다'
    ],
    answer: 1,
    explanation: '디자인 패턴을 이용하더라도 기존의 개발 프로세스를 무시할 수는 없다.'
  },
  {
    id: 204,
    subject: 'sw-design',
    question: '요구사항 관리 도구의 필요성으로 틀린 것은?',
    options: [
      '요구사항 변경으로 인한 비용 편익 분석',
      '기존 시스템과 신규 시스템의 성능 비교',
      '요구사항 변경의 추적',
      '요구사항 변경에 따른 영향 평가'
    ],
    answer: 1,
    explanation: '요구사항 관리 도구는 요구사항의 정의 및 변경 사항을 관리하는 도구이며, 성능 비교는 성능 테스트 도구의 역할이다.'
  },
  {
    id: 205,
    subject: 'sw-design',
    question: '순차 다이어그램(Sequence Diagram)과 관련한 설명으로 틀린 것은?',
    options: [
      '객체들의 상호 작용을 나타내기 위해 사용한다',
      '시간의 흐름에 따라 객체들이 주고받는 메시지의 전달 과정을 강조한다',
      '동적 다이어그램보다는 정적 다이어그램에 가깝다',
      '교류 다이어그램(Interaction Diagram)의 한 종류로 볼 수 있다'
    ],
    answer: 2,
    explanation: '순차 다이어그램은 시간의 흐름에 따라 상호 작용하는 개체들을 표현하는 동적 다이어그램이다.'
  },
  {
    id: 206,
    subject: 'sw-design',
    question: '사용자 인터페이스(UI)의 특징으로 틀린 것은?',
    options: [
      '구현하고자 하는 결과의 오류를 최소화한다',
      '사용자의 편의성을 높임으로써 작업 시간을 증가시킨다',
      '막연한 작업 기능에 대해 구체적인 방법을 제시하여 준다',
      '사용자 중심의 상호 작용이 되도록 한다'
    ],
    answer: 1,
    explanation: 'UI는 사용자의 편리성과 가독성을 높임으로써 작업 시간을 단축시키고 업무에 대한 이해도를 높여준다.'
  },
  {
    id: 207,
    subject: 'sw-design',
    question: '소프트웨어 설계에서 요구사항 분석에 대한 설명으로 틀린 것은?',
    options: [
      '소프트웨어가 무엇을 해야 하는가를 추적하여 요구사항 명세를 작성하는 작업이다',
      '사용자의 요구를 추출하여 목표를 정하고 어떤 방식으로 해결할 것인지 결정하는 단계이다',
      '소프트웨어 시스템이 사용되는 동안 발견되는 오류를 정리하는 단계이다',
      '소프트웨어 개발의 출발점이면서 실질적인 첫 번째 단계이다'
    ],
    answer: 2,
    explanation: '소프트웨어가 사용되는 동안 발견되는 오류를 정리·관리하는 과정은 요구사항 분석이 아니라 형상 관리에 해당한다.'
  },
  {
    id: 208,
    subject: 'sw-design',
    question: '설계 기법 중 하향식 설계 방법과 상향식 설계 방법에 대한 비교 설명으로 가장 옳지 않은 것은?',
    options: [
      '하향식 설계에서는 통합 검사 시 인터페이스가 이미 정의되어 있어 통합이 간단하다',
      '하향식 설계에서 레벨이 낮은 데이터 구조의 세부 사항은 설계 초기 단계에서 필요하다',
      '상향식 설계는 최하위 수준에서 각각의 모듈들을 설계하고 이러한 모듈이 완성되면 이들을 결합하여 검사한다',
      '상향식 설계에서는 인터페이스가 이미 성립되어 있지 않더라도 기능 추가가 쉽다'
    ],
    answer: 3,
    explanation: '상향식 설계는 하위 모듈에서 상위 모듈 방향으로 설계하므로 인터페이스가 이미 성립되어 있어야만 기능 추가가 가능하다.'
  },
  {
    id: 209,
    subject: 'sw-design',
    question: '디자인 패턴 사용의 장·단점에 대한 설명으로 거리가 먼 것은?',
    options: [
      '소프트웨어 구조 파악이 용이하다',
      '객체지향 설계 및 구현의 생산성을 높이는 데 적합하다',
      '재사용을 위한 개발 시간이 단축된다',
      '절차형 언어와 함께 이용될 때 효율이 극대화된다'
    ],
    answer: 3,
    explanation: '디자인 패턴은 인터페이스와 객체들을 활용하는 방법을 제시하므로 절차형 언어보다 객체지향 언어와 함께 이용될 때 효율이 극대화된다.'
  },
  {
    id: 210,
    subject: 'sw-design',
    question: '소프트웨어 아키텍처 모델 중 MVC(Model-View-Controller)와 관련한 설명으로 틀린 것은?',
    options: [
      'MVC 모델은 사용자 인터페이스를 담당하는 계층의 응집도를 높일 수 있고, 여러 개의 다른 UI를 만들어 그 사이에 결합도를 낮출 수 있다',
      '모델(Model)은 뷰(View)와 제어(Controller) 사이에서 전달자 역할을 하며, 뷰마다 모델 서브시스템이 각각 하나씩 연결된다',
      '뷰(View)는 모델(Model)에 있는 데이터를 사용자 인터페이스에 보이는 역할을 담당한다',
      '제어(Controller)는 모델(Model)에 명령을 보냄으로써 모델의 상태를 변경할 수 있다'
    ],
    answer: 1,
    explanation: '모델(Model)은 전달자가 아니라 서브시스템의 핵심 기능과 데이터를 보관하는 역할을 한다.'
  },
  {
    id: 211,
    subject: 'sw-design',
    question: '모듈의 독립성을 높이기 위한 결합도(Coupling)와 관련한 설명으로 틀린 것은?',
    options: [
      '오류가 발생했을 때 전파되어 다른 오류의 원인이 되는 파문 효과(Ripple Effect)를 최소화해야 한다',
      '인터페이스가 정확히 설정되어 있지 않을 경우 불필요한 인터페이스가 나타나 모듈 사이의 의존도는 높아지고 결합도가 증가한다',
      '모듈들이 변수를 공유하여 사용하게 하거나 제어 정보를 교류하게 함으로써 결합도를 낮추어야 한다',
      '다른 모듈과 데이터 교류가 필요한 경우 전역 변수보다는 매개 변수를 사용하는 것이 결합도를 낮추는 데 도움이 된다'
    ],
    answer: 2,
    explanation: '변수를 공유하는 공통 결합도나 제어 정보를 교류하는 결합은 결합의 정도가 강한 결합도로, 모듈 독립성을 떨어뜨린다.'
  },
  {
    id: 212,
    subject: 'sw-design',
    question: '소프트웨어 공학에서 워크스루(Walkthrough)에 대한 설명으로 틀린 것은?',
    options: [
      '사용사례를 확장하여 명세하거나 설계 다이어그램, 원시코드, 테스트 케이스 등에 적용할 수 있다',
      '복잡한 알고리즘 또는 반복, 실시간 동작, 병행 처리와 같은 기능이나 동작을 이해하려고 할 때 유용하다',
      '인스펙션(Inspection)과 동일한 의미를 가진다',
      '단순한 테스트 케이스를 이용하여 프로덕트를 수작업으로 수행해 보는 것이다'
    ],
    answer: 2,
    explanation: '인스펙션은 워크스루를 발전시킨 형태로, 산출물의 품질을 평가하고 개선 방법을 제시하는 공식적 검토 방법이므로 워크스루와 동일하지 않다.'
  },
  {
    id: 213,
    subject: 'sw-design',
    question: '객체지향 설계에서 정보 은닉(Information Hiding)과 관련한 설명으로 틀린 것은?',
    options: [
      '필요하지 않은 정보는 접근할 수 없도록 하여 한 모듈 또는 하부 시스템이 다른 모듈의 구현에 영향을 받지 않게 설계되는 것을 의미한다',
      '모듈들 사이의 독립성을 유지시키는 데 도움이 된다',
      '설계에서 은닉되어야 할 기본 정보로는 IP 주소와 같은 물리적 코드, 상세 데이터 구조 등이 있다',
      '모듈 내부의 자료 구조와 접근 동작들에만 수정을 국한하기 때문에 요구사항 등 변화에 따른 수정이 불가능하다'
    ],
    answer: 3,
    explanation: '정보 은닉은 모듈이 독립성을 갖게 해주므로 요구사항 등 변화에 따른 수정이 가능하다.'
  },
  {
    id: 214,
    subject: 'sw-design',
    question: '요구 분석(Requirement Analysis)에 대한 설명으로 틀린 것은?',
    options: [
      '요구 분석은 소프트웨어 개발의 실제적인 첫 단계로, 사용자의 요구에 대해 이해하는 단계라 할 수 있다',
      '요구 추출(Requirement Elicitation)은 프로젝트 계획 단계에 정의한 문제의 범위 안에 있는 사용자의 요구를 찾는 단계이다',
      '도메인 분석(Domain Analysis)은 요구에 대한 정보를 수집하고 배경을 분석하여 이를 토대로 모델링을 하게 된다',
      '기능적(Functional) 요구에서 시스템 구축에 대한 성능, 보안, 품질, 안정 등에 대한 요구사항을 도출한다'
    ],
    answer: 3,
    explanation: '기능적 요구사항은 시스템이 수행할 기능과 관련된 요구사항이며, 성능·보안·품질·안정 등은 비기능적(Non-functional) 요구사항에 해당한다.'
  },
  {
    id: 215,
    subject: 'sw-design',
    question: '프로그램 설계도의 하나인 NS Chart에 대한 설명으로 가장 거리가 먼 것은?',
    options: [
      '논리의 기술에 중점을 두고 도형을 이용한 표현 방법이다',
      '이해하기 쉽고 코드 변환이 용이하다',
      '화살표나 GOTO를 사용하여 이해하기 쉽다',
      '연속, 선택, 반복 등의 제어 논리 구조를 표현한다'
    ],
    answer: 2,
    explanation: 'N-S 차트는 구조적 프로그래밍을 표현하기 위한 도형식 표기법으로, GOTO나 화살표를 사용하지 않는다.'
  },
  {
    id: 216,
    subject: 'sw-design',
    question: '사용자 인터페이스(User Interface)에 대한 설명으로 틀린 것은?',
    options: [
      '사용자와 시스템이 정보를 주고받는 상호 작용이 잘 이루어지도록 하는 장치나 소프트웨어를 의미한다',
      '편리한 유지보수를 위해 개발자 중심으로 설계되어야 한다',
      '배우기가 용이하고 쉽게 사용할 수 있도록 만들어져야 한다',
      '사용자 요구사항이 UI에 반영될 수 있도록 구성해야 한다'
    ],
    answer: 1,
    explanation: 'UI는 사용자가 쉽게 이해하고 편리하게 사용할 수 있도록 사용자 중심으로 설계되어야 한다.'
  },
  {
    id: 217,
    subject: 'sw-design',
    question: '소프트웨어 개발에서 모듈(Module)이 되기 위한 주요 특징에 해당하지 않는 것은?',
    options: [
      '다른 것들과 구별될 수 있는 독립적인 기능을 가진 단위(Unit)이다',
      '독립적인 컴파일이 가능하다',
      '유일한 이름을 가져야 한다',
      '다른 모듈에서의 접근이 불가능해야 한다'
    ],
    answer: 3,
    explanation: '각 모듈은 상호 작용을 통해 더 큰 시스템을 구성해야 하므로 모듈은 상호 접근이 가능해야 한다.'
  },
  {
    id: 218,
    subject: 'sw-design',
    question: '공학적으로 잘된 소프트웨어(Well Engineered Software)의 설명 중 틀린 것은?',
    options: [
      '소프트웨어는 유지보수가 용이해야 한다',
      '소프트웨어는 신뢰성이 높아야 한다',
      '소프트웨어는 사용자 수준에 무관하게 일관된 인터페이스를 제공해야 한다',
      '소프트웨어는 충분한 테스팅을 거쳐야 한다'
    ],
    answer: 2,
    explanation: '공학적으로 잘 작성된 소프트웨어는 사용자의 요구사항과 수준을 고려하여 그에 맞는 쉬운 인터페이스를 제공해야 한다.'
  },
  {
    id: 219,
    subject: 'sw-design',
    question: '소프트웨어 모델링과 관련한 설명으로 틀린 것은?',
    options: [
      '모델링 작업의 결과물은 다른 모델링 작업에 영향을 줄 수 없다',
      '구조적 방법론에서는 DFD(Data Flow Diagram), DD(Data Dictionary) 등을 사용하여 요구사항의 결과를 표현한다',
      '객체지향 방법론에서는 UML 표기법을 사용한다',
      '소프트웨어 모델을 사용할 경우 개발될 소프트웨어에 대한 이해도 및 이해 당사자 간의 의사소통 향상에 도움이 된다'
    ],
    answer: 0,
    explanation: '모델링 작업의 결과물은 이후 진행되는 다른 모델링 작업에 영향을 줄 수 있다.'
  },
  {
    id: 220,
    subject: 'sw-design',
    question: '요구사항 명세 기법에 대한 설명으로 틀린 것은?',
    options: [
      '비정형 명세 기법은 사용자의 요구를 표현할 때 자연어를 기반으로 서술한다',
      '비정형 명세 기법은 사용자의 요구를 표현할 때 Z 비정형 명세 기법을 사용한다',
      '정형 명세 기법은 사용자의 요구를 표현할 때 수학적인 원리와 표기법을 이용한다',
      '정형 명세 기법은 비정형 명세 기법에 비해 표현이 간결하다'
    ],
    answer: 1,
    explanation: 'Z 명세 기법은 비정형 명세가 아니라 수학적 표기를 사용하는 정형 명세 기법의 한 종류이다.'
  },
  {
    id: 221,
    subject: 'sw-design',
    question: '분산 시스템에서의 미들웨어(Middleware)와 관련한 설명으로 틀린 것은?',
    options: [
      '분산 시스템에서 다양한 부분을 관리하고 통신하며 데이터를 교환하게 해주는 소프트웨어로 볼 수 있다',
      '위치 투명성(Location Transparency)을 제공한다',
      '분산 시스템의 여러 컴포넌트가 요구하는 재사용 가능한 서비스의 구현을 제공한다',
      '애플리케이션과 사용자 사이에서만 분산 서비스를 제공한다'
    ],
    answer: 3,
    explanation: '미들웨어는 애플리케이션과 사용자 사이뿐만 아니라 클라이언트와 서버, 운영체제와 응용 프로그램 등 두 시스템 사이에서 다양한 서비스를 제공한다.'
  },
  {
    id: 222,
    subject: 'sw-design',
    question: 'GoF(Gang of Four) 디자인 패턴과 관련한 설명으로 틀린 것은?',
    options: [
      '디자인 패턴을 목적(Purpose)으로 분류할 때 생성, 구조, 행위로 분류할 수 있다',
      'Strategy 패턴은 대표적인 구조 패턴으로 인스턴스를 복제하여 사용하는 구조를 말한다',
      '행위 패턴은 클래스나 객체들이 상호작용하는 방법과 책임을 분산하는 방법을 정의한다',
      'Singleton 패턴은 특정 클래스의 인스턴스가 오직 하나임을 보장하고, 이 인스턴스에 대한 접근 방법을 제공한다'
    ],
    answer: 1,
    explanation: '전략(Strategy) 패턴은 동일 계열의 알고리즘들을 캡슐화하여 상호 교환할 수 있게 하는 행위 패턴이며, 인스턴스를 복제하여 사용하는 것은 생성 패턴인 프로토타입(Prototype) 패턴이다.'
  },
  {
    id: 223,
    subject: 'sw-design',
    question: '객체지향 분석 기법과 관련한 설명으로 틀린 것은?',
    options: [
      '동적 모델링 기법이 사용될 수 있다',
      '기능 중심으로 시스템을 파악하며 순차적인 처리가 중요시되는 하향식(Top-down) 방식으로 볼 수 있다',
      '데이터와 행위를 하나로 묶어 객체를 정의하고 추상화시키는 작업이라 할 수 있다',
      '코드 재사용에 의한 프로그램 생산성 향상 및 요구에 따른 시스템의 쉬운 변경이 가능하다'
    ],
    answer: 1,
    explanation: '객체지향 분석 기법은 순차적인 처리가 아니라 클래스를 조립하는 방식으로 처리하며, 하향식과 상향식 방식을 모두 사용할 수 있다.'
  },
  {
    id: 224,
    subject: 'sw-design',
    question: '소프트웨어 모듈화의 장점이 아닌 것은?',
    options: [
      '오류의 파급 효과를 최소화한다',
      '기능의 분리가 가능하여 인터페이스가 복잡하다',
      '모듈의 재사용 가능으로 개발과 유지보수가 용이하다',
      '프로그램의 효율적인 관리가 가능하다'
    ],
    answer: 1,
    explanation: '모듈화의 장점은 기능의 분리가 가능하여 인터페이스가 단순해진다는 것이다.'
  },
  {
    id: 225,
    subject: 'sw-design',
    question: '객체에 대한 설명으로 틀린 것은?',
    options: [
      '객체는 상태, 동작, 고유 식별자를 가진 모든 것이라 할 수 있다',
      '객체는 공통 속성을 공유하는 클래스들의 집합이다',
      '객체는 필요한 자료 구조와 이에 수행되는 함수들을 가진 하나의 독립된 존재이다',
      '객체의 상태는 속성값에 의해 정의된다'
    ],
    answer: 1,
    explanation: '객체가 클래스의 집합인 것이 아니라, 클래스가 공통된 속성과 연산(행위)을 갖는 객체들의 집합이다.'
  },
  {
    id: 226,
    subject: 'sw-design',
    question: 'CASE(Computer-Aided Software Engineering) 도구에 대한 설명으로 거리가 먼 것은?',
    options: [
      '소프트웨어 개발 과정의 일부 또는 전체를 자동화하기 위한 도구이다',
      '표준화된 개발 환경 구축 및 문서 자동화 기능을 제공한다',
      '작업 과정 및 데이터 공유를 통해 작업자 간 커뮤니케이션을 증대한다',
      '2000년대 이후 소개되었으며, 객체지향 시스템에 한해 효과적으로 활용된다'
    ],
    answer: 3,
    explanation: 'CASE는 객체지향 시스템뿐만 아니라 구조적 시스템 등 다양한 시스템에서 활용되는 자동화 도구이다.'
  },
  {
    id: 227,
    subject: 'sw-design',
    question: '애자일 소프트웨어 개발 기법의 가치가 아닌 것은?',
    options: [
      '프로세스의 도구보다는 개인과 상호 작용에 더 가치를 둔다',
      '계약 협상보다는 고객과의 협업에 더 가치를 둔다',
      '실제 작동하는 소프트웨어보다는 이해하기 좋은 문서에 더 가치를 둔다',
      '계획을 따르기보다는 변화에 대응하는 것에 더 가치를 둔다'
    ],
    answer: 2,
    explanation: '애자일은 방대한 문서보다는 실행되는 소프트웨어에 더 가치를 둔다.'
  },
  {
    id: 228,
    subject: 'sw-design',
    question: '분산 시스템을 위한 마스터-슬레이브(Master-Slave) 아키텍처에 대한 설명으로 틀린 것은?',
    options: [
      '일반적으로 실시간 시스템에서 사용된다',
      '마스터 프로세스는 일반적으로 연산, 통신, 조정을 책임진다',
      '슬레이브 프로세스는 데이터 수집 기능을 수행할 수 없다',
      '마스터 프로세스는 슬레이브 프로세스들을 제어할 수 있다'
    ],
    answer: 2,
    explanation: '슬레이브 프로세스는 마스터가 수행하는 연산·통신·제어 기능을 제외하면 별도로 제한되는 기능이 없으므로 데이터 수집 기능을 수행할 수 있다.'
  },
  {
    id: 229,
    subject: 'sw-design',
    question: '소프트웨어 개발에 이용되는 모델(Model)에 대한 설명 중 거리가 먼 것은?',
    options: [
      '모델은 개발 대상을 추상화하고 기호나 그림 등으로 시각적으로 표현한다',
      '모델을 통해 소프트웨어에 대한 이해도를 향상시킬 수 있다',
      '모델을 통해 이해 당사자 간의 의사소통이 향상된다',
      '모델을 통해 향후 개발될 시스템의 유추는 불가능하다'
    ],
    answer: 3,
    explanation: '모델은 개발될 소프트웨어의 견본 형태로 만든 것이므로 최종 결과물에 대한 예측(유추)이 가능하다.'
  },
  {
    id: 230,
    subject: 'sw-design',
    question: '객체지향 개념에서 다형성(Polymorphism)과 관련한 설명으로 틀린 것은?',
    options: [
      '다형성은 현재 코드를 변경하지 않고 새로운 클래스를 쉽게 추가할 수 있게 한다',
      '다형성이란 여러 가지 형태를 가지고 있다는 의미로, 여러 형태를 받아들일 수 있는 특징을 말한다',
      '메소드 오버라이딩(Overriding)은 상위 클래스에서 정의한 일반 메소드의 구현을 하위 클래스에서 무시하고 재정의할 수 있다',
      '메소드 오버로딩(Overloading)의 경우 매개 변수 타입은 동일하지만 메소드명을 다르게 함으로써 구현, 구분할 수 있다'
    ],
    answer: 3,
    explanation: '메소드 오버로딩은 메소드명은 같지만 매개 변수의 개수나 타입을 다르게 함으로써 구현·구분하는 기법이다.'
  },
  {
    id: 231,
    subject: 'sw-design',
    question: '정형 기술 검토(FTR)의 지침으로 틀린 것은?',
    options: [
      '의제를 제한한다',
      '논쟁과 반박을 제한한다',
      '문제 영역을 명확히 표현한다',
      '참가자의 수를 제한하지 않는다'
    ],
    answer: 3,
    explanation: '정형 기술 검토(FTR)는 검토의 효율을 위해 의제와 참가자의 수를 제한한다.'
  },
  {
    id: 232,
    subject: 'sw-design',
    question: '사용자 인터페이스를 설계할 경우 고려해야 할 가이드라인과 가장 거리가 먼 것은?',
    options: [
      '심미성을 사용성보다 우선하여 설계해야 한다',
      '효율성을 높이게 설계해야 한다',
      '발생하는 오류를 쉽게 수정할 수 있어야 한다',
      '사용자에게 피드백을 제공해야 한다'
    ],
    answer: 0,
    explanation: 'UI를 설계할 경우 심미성보다는 사용성을 우선하여 설계해야 한다.'
  },
  {
    id: 233,
    subject: 'sw-design',
    question: 'UML(Unified Modeling Language)에 대한 설명 중 틀린 것은?',
    options: [
      '기능적 모델은 사용자 측면에서 본 시스템 기능이며, UML에서는 Use case Diagram을 사용한다',
      '정적 모델은 객체, 속성, 연관 관계, 오퍼레이션의 시스템의 구조를 나타내며, UML에서는 Class Diagram을 사용한다',
      '동적 모델은 시스템의 내부 동작을 말하며, UML에서는 Sequence Diagram, State Diagram, Activity Diagram을 사용한다',
      'State Diagram은 객체들 사이의 메시지 교환을 나타내며, Sequence Diagram은 하나의 객체가 가진 상태와 그 상태의 변화에 의한 동작 순서를 나타낸다'
    ],
    answer: 3,
    explanation: '상태 다이어그램은 하나의 객체가 가진 상태와 상태 변화에 의한 동작 순서를, 시퀀스 다이어그램은 객체들 사이의 메시지 교환을 나타낸다. 두 설명이 서로 바뀌었다.'
  },
  {
    id: 234,
    subject: 'sw-design',
    question: 'UI의 설계 지침으로 틀린 것은?',
    options: [
      '이해하기 편하고 쉽게 사용할 수 있는 환경을 제공해야 한다',
      '주요 기능을 메인 화면에 노출하여 조작이 쉽도록 하여야 한다',
      '치명적인 오류에 대한 부정적인 사항은 사용자가 인지할 수 없도록 한다',
      '사용자의 직무, 연령, 성별 등 다양한 계층을 수용하여야 한다'
    ],
    answer: 2,
    explanation: '오류가 발생하면 사용자가 쉽게 인지할 수 있도록 설계해야 한다.'
  },
  {
    id: 235,
    subject: 'sw-design',
    question: '소프트웨어 개발 방법 중 요구사항 분석(Requirements Analysis)과 거리가 먼 것은?',
    options: [
      '비용과 일정에 대한 제약 설정',
      '타당성 조사',
      '요구사항 정의 문서화',
      '설계 명세서 작성'
    ],
    answer: 3,
    explanation: '설계 명세서를 작성하는 과정은 요구사항 분석이 아니라 설계 단계에 해당한다.'
  },
  {
    id: 236,
    subject: 'sw-design',
    question: '요구사항 검증(Requirements Validation)과 관련한 설명으로 틀린 것은?',
    options: [
      '요구사항이 고객이 정말 원하는 시스템을 제대로 정의하고 있는지 점검하는 과정이다',
      '개발 완료 이후에 문제점이 발견될 경우 막대한 재작업 비용이 들 수 있기 때문에 요구사항 검증은 매우 중요하다',
      '요구사항이 실제 요구를 반영하는지, 문서상의 요구사항은 서로 상충되지 않는지 등을 점검한다',
      '요구사항 검증 과정을 통해 모든 요구사항 문제를 발견할 수 있다'
    ],
    answer: 3,
    explanation: '요구사항 검증을 정밀하게 수행하면 대부분의 문제를 발견할 수 있으나 모든 문제를 발견할 수 있는 것은 아니다.'
  },
  {
    id: 237,
    subject: 'sw-design',
    question: '유스케이스 다이어그램(Use Case Diagram)에 관련된 내용으로 틀린 것은?',
    options: [
      '시스템과 상호 작용하는 외부 시스템은 액터로 파악해서는 안 된다',
      '유스케이스는 사용자 측면에서의 요구사항으로, 사용자가 원하는 목표를 달성하기 위해 수행할 내용을 기술한다',
      '시스템 액터는 다른 프로젝트에서 이미 개발되어 사용되고 있으며, 본 시스템과 데이터를 주고받는 등 서로 연동되는 시스템을 말한다',
      '액터가 인식할 수 없는 시스템 내부의 기능을 하나의 유스케이스로 파악해서는 안 된다'
    ],
    answer: 0,
    explanation: '시스템과 상호 작용하는 모든 외부 요소(사람, 외부 시스템)는 액터가 될 수 있다.'
  },
  {
    id: 238,
    subject: 'sw-design',
    question: '객체지향 기법의 캡슐화(Encapsulation)에 대한 설명으로 틀린 것은?',
    options: [
      '인터페이스가 단순화된다',
      '소프트웨어 재사용성이 높아진다',
      '변경 발생 시 오류의 파급 효과가 적다',
      '상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 것을 의미한다'
    ],
    answer: 3,
    explanation: '상위 클래스의 속성과 연산을 하위 클래스가 물려받는 것은 캡슐화가 아니라 상속(Inheritance)에 대한 설명이다.'
  },
  {
    id: 239,
    subject: 'sw-design',
    question: 'User Interface 설계 시 오류 메시지나 경고에 관한 지침으로 가장 거리가 먼 것은?',
    options: [
      '메시지는 이해하기 쉬워야 한다',
      '오류로부터 회복을 위한 구체적인 설명이 제공되어야 한다',
      '오류로 인해 발생될 수 있는 부정적인 내용을 적극적으로 사용자들에게 알려야 한다',
      '소리나 색의 사용을 줄이고 텍스트로만 전달하도록 한다'
    ],
    answer: 3,
    explanation: '오류 메시지나 경고는 소리나 색 등을 함께 이용하여 듣거나 보기 쉽게 의미를 전달해야 한다.'
  },
  {
    id: 240,
    subject: 'sw-design',
    question: '익스트림 프로그래밍(XP)에 대한 설명으로 틀린 것은?',
    options: [
      '빠른 개발을 위해 테스트를 수행하지 않는다',
      '사용자의 요구사항은 언제든지 변할 수 있다',
      '고객과 직접 대면하며 요구사항을 이야기하기 위해 사용자 스토리(User Story)를 활용할 수 있다',
      '기존의 방법론에 비해 실용성(Pragmatism)을 강조한 것이라고 볼 수 있다'
    ],
    answer: 0,
    explanation: 'XP는 릴리즈 기간을 짧게 반복하며 그 동안 지속적으로 테스트가 진행되도록 자동화된 테스팅 구조를 사용한다.'
  },
  {
    id: 241,
    subject: 'sw-design',
    question: '바람직한 소프트웨어 설계 지침이 아닌 것은?',
    options: [
      '모듈의 기능을 예측할 수 있도록 정의한다',
      '이식성을 고려한다',
      '적당한 모듈의 크기를 유지한다',
      '가능한 모듈을 독립적으로 생성하고 결합도를 최대화한다'
    ],
    answer: 3,
    explanation: '바람직한 소프트웨어 설계를 위해서는 모듈의 결합도는 줄이고 응집도는 높여야 한다.'
  },
  {
    id: 242,
    subject: 'sw-design',
    question: 'DFD(Data Flow Diagram)에 대한 설명으로 틀린 것은?',
    options: [
      '자료 흐름 그래프 또는 버블(Bubble) 차트라고도 한다',
      '구조적 분석 기법에 이용된다',
      '시간 흐름을 명확하게 표현할 수 있다',
      'DFD의 요소는 화살표, 원, 사각형, 직선(단선/이중선)으로 표시한다'
    ],
    answer: 2,
    explanation: '자료 흐름도(DFD)는 자료의 흐름과 변환 과정, 기능을 도형 중심으로 기술하는 방법으로, 시간의 흐름은 명확히 표현되지 않는다.'
  },
  {
    id: 243,
    subject: 'sw-design',
    question: 'CASE(Computer Aided Software Engineering)에 대한 설명으로 틀린 것은?',
    options: [
      '소프트웨어 모듈의 재사용성이 향상된다',
      '자동화된 기법을 통해 소프트웨어 품질이 향상된다',
      '소프트웨어 사용자들에게 사용 방법을 신속히 숙지시키기 위해 사용된다',
      '소프트웨어 유지보수를 간편하게 수행할 수 있다'
    ],
    answer: 2,
    explanation: 'CASE는 소프트웨어 개발 과정의 전체 또는 일부를 자동화하는 도구로, 사용자의 사용 방법 숙지와는 무관하다.'
  },
  {
    id: 244,
    subject: 'sw-design',
    question: '익스트림 프로그래밍에 대한 설명으로 틀린 것은?',
    options: [
      '대표적인 구조적 방법론 중 하나이다',
      '소규모 개발 조직이 불확실하고 변경이 많은 요구를 접하였을 때 적절한 방법이다',
      '익스트림 프로그래밍을 구동시키는 원리는 상식적인 원리와 경험을 최대한 끌어올리는 것이다',
      '구체적인 실천 방법을 정의하고 있으며, 개발 문서보다는 소스 코드에 중점을 둔다'
    ],
    answer: 0,
    explanation: 'XP는 구조적 방법론이 아니라 애자일 개발 방법론을 기반으로 하는 소프트웨어 개발 모형이다.'
  },
  {
    id: 245,
    subject: 'sw-design',
    question: '객체지향 개념을 활용한 소프트웨어 구현과 관련한 설명 중 틀린 것은?',
    options: [
      '객체(Object)란 필요한 자료 구조와 수행되는 함수들을 가진 하나의 독립된 존재이다',
      'JAVA에서 정보 은닉(Information Hiding)을 표기할 때 private의 의미는 공개이다',
      '상속(Inheritance)은 개별 클래스를 상속 관계로 묶음으로써 클래스 간의 체계화된 전체 구조를 파악하기 쉽다는 장점이 있다',
      '같은 클래스에 속하는 개개의 객체이자 하나의 클래스에서 생성된 객체를 인스턴스(Instance)라고 한다'
    ],
    answer: 1,
    explanation: 'JAVA에서 private는 외부로부터의 접근을 제한하는 접근 제어자로 은닉을 의미하며, 공개를 의미하는 접근 제어자는 public이다.'
  },
  {
    id: 246,
    subject: 'sw-design',
    question: '소프트웨어 공학에서 모델링(Modeling)과 관련한 설명으로 틀린 것은?',
    options: [
      '개발팀이 응용문제를 이해하는 데 도움을 줄 수 있다',
      '유지보수 단계에서만 모델링 기법을 활용한다',
      '개발될 시스템에 대하여 여러 분야의 엔지니어들이 공통된 개념을 공유하는 데 도움을 준다',
      '절차적인 프로그램을 위한 자료 흐름도는 프로세스 위주의 모델링 방법이다'
    ],
    answer: 1,
    explanation: '모델링은 분석 및 설계 단계에서 개발 대상을 시각적으로 표현하는 것으로, 소프트웨어 개발의 전 과정에서 지속적으로 사용된다.'
  },
  {
    id: 247,
    subject: 'sw-design',
    question: '미들웨어(Middleware)에 대한 설명으로 틀린 것은?',
    options: [
      '여러 운영체제에서 응용 프로그램들 사이에 위치한 소프트웨어이다',
      '미들웨어의 서비스 이용을 위해 사용자가 정보 교환 방법 등의 내부 동작을 쉽게 확인할 수 있어야 한다',
      '소프트웨어 컴포넌트를 연결하기 위한 준비된 인프라 구조를 제공한다',
      '여러 컴포넌트를 1 대 1, 1 대 다, 다 대 다 등 여러 가지 형태로 연결이 가능하다'
    ],
    answer: 1,
    explanation: '미들웨어의 내부 동작을 확인하려면 별도의 응용 소프트웨어가 필요하므로, 사용자가 내부 동작을 쉽게 확인할 수 있는 것은 아니다.'
  },
  {
    id: 248,
    subject: 'sw-design',
    question: '모듈화(Modularity)와 관련한 설명으로 틀린 것은?',
    options: [
      '시스템을 모듈로 분할하면 각각의 모듈을 별개로 만들고 수정할 수 있기 때문에 좋은 구조가 된다',
      '응집도는 모듈과 모듈 사이의 상호 의존 또는 연관 정도를 의미한다',
      '모듈 간의 결합도가 약해야 독립적인 모듈이 될 수 있다',
      '모듈 내 구성 요소들 간의 응집도가 강해야 좋은 모듈 설계이다'
    ],
    answer: 1,
    explanation: '응집도는 모듈 내부 요소들이 서로 관련되어 있는 정도를 의미하며, 모듈과 모듈 사이의 상호 의존 정도는 결합도에 대한 설명이다.'
  },
  {
    id: 249,
    subject: 'sw-design',
    question: '요구사항 분석이 어려운 이유가 아닌 것은?',
    options: [
      '개발자와 사용자 간의 지식이나 표현의 차이가 커서 상호 이해가 쉽지 않다',
      '사용자의 요구는 예외가 거의 없어 열거와 구조화가 어렵지 않다',
      '사용자의 요구사항이 모호하고 불명확하다',
      '소프트웨어 개발 과정 중에 요구사항이 계속 변할 수 있다'
    ],
    answer: 1,
    explanation: '요구사항은 예외가 많고 모호하며 중복·상충되는 사항이 있어 열거와 구조화가 어렵다.'
  },
  {
    id: 250,
    subject: 'sw-design',
    question: '효과적인 모듈 설계를 위한 유의사항으로 거리가 먼 것은?',
    options: [
      '모듈 간의 결합도를 약하게 하면 모듈 독립성이 향상된다',
      '복잡도와 중복성을 줄이고 일관성을 유지시킨다',
      '모듈의 기능은 예측이 가능해야 하며 지나치게 제한적이어야 한다',
      '유지보수가 용이해야 한다'
    ],
    answer: 2,
    explanation: '모듈의 기능은 예측 가능해야 하지만 지나치게 제한적으로 설계할 필요는 없다.'
  },
  {
    id: 251,
    subject: 'sw-design',
    question: 'HIPO(Hierarchy Input Process Output)에 대한 설명으로 거리가 먼 것은?',
    options: [
      '상향식 소프트웨어 개발을 위한 문서화 도구이다',
      'HIPO 차트 종류에는 가시적 도표, 총체적 도표, 세부적 도표가 있다',
      '기능과 자료의 의존 관계를 동시에 표현할 수 있다',
      '보기 쉽고 이해하기 쉽다'
    ],
    answer: 0,
    explanation: 'HIPO는 시스템의 분석·설계·문서화에 사용되는 기법으로, 하향식 소프트웨어 개발을 위한 문서화 도구이다.'
  },
  {
    id: 252,
    subject: 'sw-design',
    question: '소프트웨어 개발 단계에서 요구 분석 과정에 대한 설명으로 거리가 먼 것은?',
    options: [
      '분석 결과의 문서화를 통해 향후 유지보수에 유용하게 활용할 수 있다',
      '개발 비용이 가장 많이 소요되는 단계이다',
      '자료 흐름도, 자료 사전 등이 효과적으로 이용될 수 있다',
      '보다 구체적인 명세를 위해 소단위 명세서(Mini-Spec)가 활용될 수 있다'
    ],
    answer: 1,
    explanation: '소프트웨어 생명 주기에서 개발 비용이 가장 많이 소요되는 단계는 유지보수 단계이다.'
  },
  {
    id: 253,
    subject: 'sw-design',
    question: '메시지 지향 미들웨어(MOM; Message-Oriented Middleware)에 대한 설명으로 틀린 것은?',
    options: [
      '느리고 안정적인 응답보다는 즉각적인 응답이 필요한 온라인 업무에 적합하다',
      '독립적인 애플리케이션을 하나의 통합된 시스템으로 묶기 위한 역할을 한다',
      '송신측과 수신측의 연결 시 메시지 큐를 활용하는 방법이 있다',
      '상이한 애플리케이션 간 통신을 비동기 방식으로 지원한다'
    ],
    answer: 0,
    explanation: 'MOM은 즉각적인 응답이 필요한 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용된다.'
  },
  {
    id: 254,
    subject: 'sw-design',
    question: 'EAI(Enterprise Application Integration) 구축 유형 중 Hybrid에 대한 설명으로 틀린 것은?',
    options: [
      'Hub & Spoke와 Message Bus의 혼합 방식이다',
      '필요한 경우 한 가지 방식으로 EAI 구현이 가능하다',
      '데이터 병목 현상을 최소화할 수 있다',
      '중간에 미들웨어를 두지 않고 각 애플리케이션을 Point to Point로 연결한다'
    ],
    answer: 3,
    explanation: 'Hybrid는 단말들 사이에 버스와 허브를 미들웨어로 두어 애플리케이션을 연결하는 방식이며, 미들웨어 없이 직접 연결하는 것은 Point-to-Point 방식이다.'
  },
  {
    id: 255,
    subject: 'sw-design',
    question: '시스템에서 모듈 사이의 결합도(Coupling)에 대한 설명으로 옳은 것은?',
    options: [
      '한 모듈 내에 있는 처리 요소들 사이의 기능적인 연관 정도를 나타낸다',
      '결합도가 높으면 시스템 구현 및 유지보수 작업이 쉽다',
      '모듈 간의 결합도를 약하게 하면 모듈 독립성이 향상된다',
      '자료 결합도는 내용 결합도보다 결합도가 높다'
    ],
    answer: 2,
    explanation: '결합도는 모듈 상호 간에 의존하는 정도를 의미하며, 결합도를 약하게 하면 모듈 독립성이 향상된다. 모듈 내부 요소 간 연관 정도는 응집도이고, 자료 결합도는 내용 결합도보다 결합도가 낮다.'
  },
  {
    id: 256,
    subject: 'sw-design',
    question: '유스케이스(Usecase)에 대한 설명 중 옳은 것은?',
    options: [
      '유스케이스 다이어그램은 개발자의 요구를 추출하고 분석하기 위해 주로 사용한다',
      '액터는 대상 시스템과 상호 작용하는 사람이나 다른 시스템에 의한 역할이다',
      '사용자 액터는 본 시스템과 데이터를 주고받는 연동 시스템을 의미한다',
      '연동의 개념은 일방적으로 데이터를 파일이나 정해진 형식으로 넘겨주는 것을 의미한다'
    ],
    answer: 1,
    explanation: '액터는 시스템과 상호 작용하는 사람이나 다른 시스템의 역할이다. 유스케이스 다이어그램은 사용자의 요구 분석에 사용되고, 연동 시스템은 시스템 액터(부액터)이며, 연동은 상호 간에 영향을 주도록 연결망을 구성하는 것이다.'
  },
  {
    id: 257,
    subject: 'sw-design',
    question: '요구사항 분석에서 비기능적(Nonfunctional) 요구에 대한 설명으로 옳은 것은?',
    options: [
      '시스템의 처리량(Throughput), 반응 시간 등의 성능 요구나 품질 요구는 비기능적 요구에 해당하지 않는다',
      '차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다는 요구는 비기능적 요구이다',
      '시스템 구축과 관련된 안전, 보안에 대한 요구사항들은 비기능적 요구에 해당하지 않는다',
      '금융 시스템은 조회, 인출, 입금, 송금의 기능이 있어야 한다는 요구는 비기능적 요구이다'
    ],
    answer: 1,
    explanation: '화면 표시 시간 3초 이내와 같은 성능 요구는 비기능적 요구사항이다. 성능·품질·안전·보안 요구는 비기능 요구이고, 조회·인출 등 기능 자체에 대한 요구는 기능적 요구이다.'
  },
  {
    id: 258,
    subject: 'sw-design',
    question: '명령어를 직접 입력해서 명령을 수행하는 CLI(CUI) 방식과 달리, 마우스로 아이콘이나 메뉴를 선택하여 명령을 수행하는 사용자 인터페이스 방식은?',
    options: [
      'CUI(Command User Interface)',
      'GUI(Graphic User Interface)',
      'NUI(Natural User Interface)',
      'VUI(Voice User Interface)'
    ],
    answer: 1,
    explanation: 'GUI는 아이콘·메뉴 등 그래픽 요소를 마우스로 선택하여 명령을 수행하는 인터페이스 방식으로, Windows 등에서 주로 사용된다.'
  },
  // ===== sw-dev (소프트웨어 개발) 문제집 추가 : 259~306 =====
  {
    id: 259,
    subject: 'sw-dev',
    question: '소프트웨어 품질 관련 국제 표준인 ISO/IEC 25000에 관한 설명으로 옳지 않은 것은?',
    options: [
      '소프트웨어 품질 평가를 위한 소프트웨어 품질 평가 통합 모델 표준이다',
      'System and Software Quality Requirements and Evaluation으로 줄여서 SQuaRE라고도 한다',
      'ISO/IEC 2501n에서는 소프트웨어의 내부 측정, 외부 측정, 사용 품질 측정, 품질 측정 요소 등을 다룬다',
      '기존 소프트웨어 품질 평가 모델과 소프트웨어 평가 절차 모델인 ISO/IEC 9126과 ISO/IEC 14598을 통합하였다'
    ],
    answer: 2,
    explanation: 'ISO/IEC 2501n은 품질 모델 부분을 다루며, 내부 측정·외부 측정·사용 품질 측정 등 품질 측정 부분을 다루는 것은 ISO/IEC 2502n이다.'
  },
  {
    id: 260,
    subject: 'sw-dev',
    question: '소프트웨어 설치 매뉴얼에 대한 설명으로 틀린 것은?',
    options: [
      '설치 과정에서 표시될 수 있는 예외 상황에 관련 내용을 별도로 구분하여 설명한다',
      '설치 시작부터 완료할 때까지의 전 과정을 빠짐없이 순서대로 설명한다',
      '설치 매뉴얼은 개발자 기준으로 작성한다',
      '설치 매뉴얼에는 목차, 개요, 기본사항 등이 기본적으로 포함되어야 한다'
    ],
    answer: 2,
    explanation: '설치 매뉴얼을 보는 사람은 사용자이므로 사용자 기준으로 작성해야 한다.'
  },
  {
    id: 261,
    subject: 'sw-dev',
    question: '저작권 관리 구성 요소에 대한 설명이 틀린 것은?',
    options: [
      '콘텐츠 제공자(Contents Provider) : 콘텐츠를 제공하는 저작권자',
      '콘텐츠 분배자(Contents Distributor) : 콘텐츠를 메타 데이터와 함께 배포 가능한 단위로 묶는 기능',
      '클리어링 하우스(Clearing House) : 키 관리 및 라이선스 발급 관리',
      'DRM 컨트롤러 : 배포된 콘텐츠의 이용 권한을 통제'
    ],
    answer: 1,
    explanation: '콘텐츠 분배자는 암호화된 콘텐츠를 유통하는 곳이나 사람을 의미하며, 콘텐츠를 메타 데이터와 함께 배포 가능한 단위로 묶는 기능은 패키저(Packager)가 수행한다.'
  },
  {
    id: 262,
    subject: 'sw-dev',
    question: '단위 테스트(Unit Test)와 관련한 설명으로 틀린 것은?',
    options: [
      '구현 단계에서 각 모듈의 개발을 완료한 후 개발자가 명세서의 내용대로 정확히 구현되었는지 테스트한다',
      '모듈 내부의 구조를 구체적으로 볼 수 있는 구조적 테스트를 주로 시행한다',
      '필요 데이터를 인자를 통해 넘겨주고, 테스트 완료 후 그 결과값을 받는 역할을 하는 가상의 모듈을 테스트 스텁(Stub)이라고 한다',
      '테스트할 모듈을 호출하는 모듈도 있고, 테스트할 모듈이 호출하는 모듈도 있다'
    ],
    answer: 2,
    explanation: '필요 데이터를 인자로 넘겨주고 결과값을 받는 가상의 모듈은 테스트 드라이버(Test Driver)이며, 스텁은 제어 모듈이 호출하는 하위 모듈을 대신하는 시험용 모듈이다.'
  },
  {
    id: 263,
    subject: 'sw-dev',
    question: '소프트웨어 테스트와 관련한 설명으로 틀린 것은?',
    options: [
      '화이트박스 테스트는 모듈의 논리적인 구조를 체계적으로 점검할 수 있다',
      '블랙박스 테스트는 프로그램의 구조를 고려하지 않는다',
      '테스트 케이스에는 일반적으로 시험 조건, 테스트 데이터, 예상 결과가 포함되어야 한다',
      '화이트박스 테스트에서 기본 경로(Basis Path)란 흐름 그래프의 시작 노드에서 종료 노드까지의 서로 독립된 경로로 싸이클을 허용하지 않는 경로를 말한다'
    ],
    answer: 3,
    explanation: '기본 경로(Basis Path)는 수행 가능한 모든 경로를 의미하며, 싸이클을 허용하지 않는다는 설명은 옳지 않다.'
  },
  {
    id: 264,
    subject: 'sw-dev',
    question: '이진 검색 알고리즘에 대한 설명으로 틀린 것은?',
    options: [
      '탐색 효율이 좋고 탐색 시간이 적게 소요된다',
      '검색할 데이터가 정렬되어 있어야 한다',
      '피보나치 수열에 따라 다음에 비교할 대상을 선정하여 검색한다',
      '비교 횟수를 거듭할 때마다 검색 대상이 되는 데이터의 수가 절반으로 줄어든다'
    ],
    answer: 2,
    explanation: '이진 검색은 검색 범위의 중간값과 비교하여 범위를 절반씩 줄여가는 방식으로, 피보나치 수열과는 관계가 없다.'
  },
  {
    id: 265,
    subject: 'sw-dev',
    question: '소프트웨어 패키징 도구 활용 시 고려사항으로 틀린 것은?',
    options: [
      '반드시 내부 콘텐츠에 대한 암호화 및 보안을 고려한다',
      '보안을 위하여 이기종 연동을 고려하지 않아도 된다',
      '사용자 편의성을 위한 복잡성 및 비효율성 문제를 고려한다',
      '제품 소프트웨어 종류에 적합한 암호화 알고리즘을 적용한다'
    ],
    answer: 1,
    explanation: '패키징 도구 활용 시에는 다른 여러 콘텐츠 및 단말기 간 연동을 고려해야 한다.'
  },
  {
    id: 266,
    subject: 'sw-dev',
    question: '소프트웨어 패키징에 대한 설명으로 틀린 것은?',
    options: [
      '패키징은 개발자 중심으로 진행한다',
      '신규 및 변경 개발 소스를 식별하고, 이를 모듈화하여 상용제품으로 패키징한다',
      '고객의 편의성을 위해 매뉴얼 및 버전 관리를 지속적으로 한다',
      '범용 환경에서 사용이 가능하도록 일반적인 배포 형태로 패키징이 진행된다'
    ],
    answer: 0,
    explanation: '패키징을 포함한 모든 개발 과정에서 가장 먼저 고려되어야 할 대상은 소프트웨어를 사용할 사용자이므로, 패키징은 사용자 중심으로 진행한다.'
  },
  {
    id: 267,
    subject: 'sw-dev',
    question: '연결 리스트(Linked List)에 대한 설명으로 거리가 먼 것은?',
    options: [
      '노드의 삽입이나 삭제가 쉽다',
      '노드들이 포인터로 연결되어 검색이 빠르다',
      '연결을 해주는 포인터(Pointer)를 위한 추가 공간이 필요하다',
      '연결 리스트 중에서 중간 노드 연결이 끊어지면 다음 노드를 찾기 힘들다'
    ],
    answer: 1,
    explanation: '연결 리스트는 포인터를 찾아가는 시간이 필요하므로 선형 리스트(배열)에 비해 검색 속도가 느리다.'
  },
  {
    id: 268,
    subject: 'sw-dev',
    question: '클린 코드(Clean Code)를 작성하기 위한 원칙으로 틀린 것은?',
    options: [
      '추상화 : 하위 클래스/메소드/함수를 통해 애플리케이션의 특성을 간략하게 나타내고, 상세 내용은 상위 클래스/메소드/함수에서 구현한다',
      '의존성 : 다른 모듈에 미치는 영향을 최소화하도록 작성한다',
      '가독성 : 누구든지 읽기 쉽게 코드를 작성한다',
      '중복성 : 중복을 최소화할 수 있는 코드를 작성한다'
    ],
    answer: 0,
    explanation: '추상화는 상위 클래스/메소드/함수에서 애플리케이션의 특성을 간략하게 나타내고, 상세 내용은 하위 클래스/메소드/함수에서 구현하는 것이다.'
  },
  {
    id: 269,
    subject: 'sw-dev',
    question: '빌드 자동화 도구에 대한 설명으로 틀린 것은?',
    options: [
      'Gradle은 실행할 처리 명령들을 모아 태스크로 만든 후 태스크 단위로 실행한다',
      '빌드 자동화 도구는 지속적인 통합 개발 환경에서 유용하게 활용된다',
      '빌드 자동화 도구에는 Ant, Gradle, Jenkins 등이 있다',
      'Jenkins는 Groovy를 기반으로 한 오픈 소스로 안드로이드 앱 개발 환경에서 사용된다'
    ],
    answer: 3,
    explanation: 'Jenkins는 Java 기반 오픈 소스 서버 기반 도구이며, Groovy 기반으로 안드로이드 앱 개발 환경에서 사용되는 것은 Gradle에 대한 설명이다.'
  },
  {
    id: 270,
    subject: 'sw-dev',
    question: '테스트 드라이버(Test Driver)에 대한 설명으로 틀린 것은?',
    options: [
      '시험 대상 모듈을 호출하는 간이 소프트웨어이다',
      '필요에 따라 매개 변수를 전달하고 모듈을 수행한 후의 결과를 보여줄 수 있다',
      '상향식 통합 테스트에서 사용된다',
      '테스트 대상 모듈이 호출하는 하위 모듈의 역할을 한다'
    ],
    answer: 3,
    explanation: '테스트 대상 모듈이 호출하는 하위 모듈을 대체하는 것은 스텁(Stub)이며, 드라이버는 상위 모듈을 대체하여 대상 모듈을 호출한다.'
  },
  {
    id: 271,
    subject: 'sw-dev',
    question: 'White Box Testing에 대한 설명으로 옳지 않은 것은?',
    options: [
      'Base Path Testing, Boundary Value Analysis가 대표적인 기법이다',
      'Source Code의 모든 문장을 한 번 이상 수행함으로써 진행된다',
      '모듈 안의 작동을 직접 관찰할 수 있다',
      '산출물의 각 기능별로 적절한 프로그램의 제어 구조에 따라 선택, 반복 등의 부분들을 수행함으로써 논리적 경로를 점검한다'
    ],
    answer: 0,
    explanation: '경계값 분석(Boundary Value Analysis)은 블랙박스 테스트 기법에 해당하므로 화이트박스 테스트의 대표 기법이라는 설명은 옳지 않다.'
  },
  {
    id: 272,
    subject: 'sw-dev',
    question: '테스트 케이스와 관련한 설명으로 틀린 것은?',
    options: [
      '테스트의 목표 및 테스트 방법을 결정하기 전에 테스트 케이스를 작성해야 한다',
      '프로그램에 결함이 있더라도 입력에 대해 정상적인 결과를 낼 수 있기 때문에 결함을 검사할 수 있는 테스트 케이스를 찾는 것이 중요하다',
      '개발된 서비스가 정의된 요구사항을 준수하는지 확인하기 위한 입력 값과 실행 조건, 예상 결과의 집합으로 볼 수 있다',
      '테스트 케이스 실행이 통과되었는지 실패하였는지 판단하기 위한 기준을 테스트 오라클(Test Oracle)이라고 한다'
    ],
    answer: 0,
    explanation: '테스트 케이스는 테스트의 목표와 방법을 결정한 후에 작성한다.'
  },
  {
    id: 273,
    subject: 'sw-dev',
    question: '자료 구조에 대한 설명으로 틀린 것은?',
    options: [
      '큐는 비선형 구조에 해당한다',
      '큐는 First In-First Out 처리를 수행한다',
      '스택은 Last In-First Out 처리를 수행한다',
      '스택은 서브루틴 호출, 인터럽트 처리, 수식 계산 및 수식 표기법에 응용된다'
    ],
    answer: 0,
    explanation: '큐(Queue)는 한쪽에서는 삽입이, 다른 한쪽에서는 인출이 이루어지는 선형 자료 구조이다.'
  },
  {
    id: 274,
    subject: 'sw-dev',
    question: '소프트웨어 테스트에서 검증(Verification)과 확인(Validation)에 대한 설명으로 틀린 것은?',
    options: [
      '소프트웨어 테스트에서 검증과 확인을 구별하면 찾고자 하는 결함 유형을 명확하게 하는 데 도움이 된다',
      '검증은 소프트웨어 개발 과정을 테스트하는 것이고, 확인은 소프트웨어 결과를 테스트하는 것이다',
      '검증은 작업 제품이 요구 명세의 기능, 비기능 요구사항을 얼마나 잘 준수하는지 측정하는 작업이다',
      '검증은 작업 제품이 사용자의 요구에 적합한지 측정하며, 확인은 작업 제품이 개발자의 기대를 충족시키는지를 측정한다'
    ],
    answer: 3,
    explanation: '검증(Verification)은 개발자 입장에서 명세서대로 만들어졌는지를, 확인(Validation)은 사용자 입장에서 요구사항에 맞게 구현되었는지를 점검하는 것이므로 설명이 서로 바뀌었다.'
  },
  {
    id: 275,
    subject: 'sw-dev',
    question: 'DRM(Digital Rights Management)과 관련한 설명으로 틀린 것은?',
    options: [
      '디지털 콘텐츠와 디바이스의 사용을 제한하기 위해 하드웨어 제조업자, 저작권자, 출판업자 등이 사용할 수 있는 접근 제어 기술을 의미한다',
      '디지털 미디어의 생명 주기 동안 발생하는 사용 권한 관리, 과금, 유통 단계를 관리하는 기술로도 볼 수 있다',
      '클리어링 하우스(Clearing House)는 사용자에게 콘텐츠 라이센스를 발급하고 권한을 부여해주는 시스템을 말한다',
      '원본을 안전하게 유통하기 위한 전자적 보안은 고려하지 않기 때문에 불법 유통과 복제의 방지는 불가능하다'
    ],
    answer: 3,
    explanation: 'DRM은 전자적 보안 장치인 보안 컨테이너(Security Container)를 통해 콘텐츠의 불법 유통과 복제를 방지할 수 있다.'
  },
  {
    id: 276,
    subject: 'sw-dev',
    question: '소프트웨어 형상 관리(Configuration Management)에 관한 설명으로 틀린 것은?',
    options: [
      '소프트웨어에서 일어나는 수정이나 변경을 알아내고 제어하는 것을 의미한다',
      '소프트웨어 개발의 전체 비용을 줄이고, 개발 과정의 여러 방해 요인이 최소화되도록 보증하는 것을 목적으로 한다',
      '형상 관리를 위하여 구성된 팀을 Chief Programmer Team이라고 한다',
      '형상 관리의 기능 중 하나는 버전 제어 기술이다'
    ],
    answer: 2,
    explanation: 'Chief Programmer Team은 책임 프로그래머를 중심으로 구성한 개발팀 구성 방식으로, 형상 관리와는 관계가 없다.'
  },
  {
    id: 277,
    subject: 'sw-dev',
    question: '화이트박스 테스트와 관련한 설명으로 틀린 것은?',
    options: [
      '화이트박스 테스트의 이해를 위해 논리 흐름도(Logic-Flow Diagram)를 이용할 수 있다',
      '테스트 데이터를 이용해 실제 프로그램을 실행함으로써 오류를 찾는 동적 테스트(Dynamic Test)에 해당한다',
      '프로그램의 구조를 고려하지 않기 때문에 테스트 케이스는 프로그램 또는 모듈의 요구나 명세를 기초로 결정한다',
      '테스트 데이터를 선택하기 위하여 검증 기준(Test Coverage)을 정한다'
    ],
    answer: 2,
    explanation: '프로그램 구조를 고려하지 않고 요구나 명세를 기초로 테스트 케이스를 결정하는 것은 블랙박스 테스트에 대한 설명이다.'
  },
  {
    id: 278,
    subject: 'sw-dev',
    question: '통합 테스트(Integration Test)와 관련한 설명으로 틀린 것은?',
    options: [
      '시스템을 구성하는 모듈의 인터페이스와 결합을 테스트하는 것이다',
      '하향식 통합 테스트의 경우 넓이 우선(Breadth First) 방식으로 테스트를 할 모듈을 선택할 수 있다',
      '상향식 통합 테스트의 경우 시스템 구조도의 최상위에 있는 모듈을 먼저 구현하고 테스트한다',
      '모듈 간의 인터페이스와 시스템의 동작이 정상적으로 잘되고 있는지를 빨리 파악하고자 할 때 상향식보다는 하향식 통합 테스트를 사용하는 것이 좋다'
    ],
    answer: 2,
    explanation: '상향식 통합 테스트는 프로그램의 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트하는 기법이다.'
  },
  {
    id: 279,
    subject: 'sw-dev',
    question: '제품 소프트웨어의 형상 관리 역할로 틀린 것은?',
    options: [
      '형상 관리를 통해 이전 리버전이나 버전에 대한 정보에 접근 가능하여 배포본 관리에 유용하다',
      '불필요한 사용자의 소스 수정을 제한한다',
      '프로젝트 개발 비용을 효율적으로 관리한다',
      '동일한 프로젝트에 대해 여러 개발자의 동시 개발이 가능하다'
    ],
    answer: 2,
    explanation: '형상 관리(SCM)는 소프트웨어의 변경 사항을 관리하기 위한 활동으로, 프로젝트 개발 비용의 효율적인 관리와는 무관하다.'
  },
  {
    id: 280,
    subject: 'sw-dev',
    question: '스택에 대한 설명으로 틀린 것은?',
    options: [
      '입출력이 한쪽 끝으로만 제한된 리스트이다',
      'Head(front)와 Tail(rear)의 2개 포인터를 갖고 있다',
      'LIFO 구조이다',
      '더 이상 삭제할 데이터가 없는 상태에서 데이터를 삭제하면 언더플로(Underflow)가 발생한다'
    ],
    answer: 1,
    explanation: 'Front와 Rear의 2개 포인터를 갖고 있는 자료 구조는 큐(Queue)이다.'
  },
  {
    id: 281,
    subject: 'sw-dev',
    question: '다음 중 테스트 오라클에 대한 설명으로 옳지 않은 것은?',
    options: [
      '샘플링 오라클 : 특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클이다',
      '토탈 오라클 : 모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클이다',
      '휴리스틱 오라클 : 특정 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 나머지 입력 값들에 대해서는 추정으로 처리하는 오라클이다',
      '일관성 검사 오라클 : 애플리케이션의 변경이 있을 경우 테스트 케이스의 수행 전과 후의 결과 값이 동일한지를 확인하는 오라클이다'
    ],
    answer: 1,
    explanation: '모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클은 참 오라클(True Oracle)이며, 토탈 오라클이라는 유형은 없다.'
  },
  {
    id: 282,
    subject: 'sw-dev',
    question: '블랙박스 테스트를 이용하여 발견할 수 있는 오류가 아닌 것은?',
    options: [
      '비정상적인 자료를 입력해도 오류 처리를 수행하지 않는 경우',
      '정상적인 자료를 입력해도 요구된 기능이 제대로 수행되지 않는 경우',
      '반복 조건을 만족하는데도 루프 내의 문장이 수행되지 않는 경우',
      '경계값을 입력할 경우 요구된 출력 결과가 나오지 않는 경우'
    ],
    answer: 2,
    explanation: '루프 내 문장의 수행 여부와 같은 내부 로직의 오류는 화이트박스 테스트를 통해서만 확인할 수 있다.'
  },
  {
    id: 283,
    subject: 'sw-dev',
    question: '코드의 간결성을 유지하기 위해 사용되는 지침으로 틀린 것은?',
    options: [
      '공백을 이용하여 실행문 그룹과 주석을 명확히 구분한다',
      '복잡한 논리식과 산술식은 괄호와 들여쓰기(Indentation)를 통해 명확히 표현한다',
      '빈 줄을 사용하여 선언부와 구현부를 구별한다',
      '한 줄에 최대한 많은 문장을 코딩한다'
    ],
    answer: 3,
    explanation: '소스 코드는 가독성을 위해 줄 나눔과 들여쓰기, 괄호를 적절하게 사용해야 하며, 한 줄에 많은 문장을 넣는 것은 간결성을 해친다.'
  },
  {
    id: 284,
    subject: 'sw-dev',
    question: '소프트웨어 형상 관리에 대한 설명으로 거리가 먼 것은?',
    options: [
      '소프트웨어에 가해지는 변경을 제어하고 관리한다',
      '프로젝트 계획, 분석서, 설계서, 프로그램, 테스트 케이스 모두 관리 대상이다',
      '대표적인 형상 관리 도구로 Ant, Maven, Gradle 등이 있다',
      '유지보수 단계뿐만 아니라 개발 단계에도 적용할 수 있다'
    ],
    answer: 2,
    explanation: '형상 관리 도구에는 Git, CVS, Subversion 등이 있으며, Ant, Maven, Gradle은 빌드 자동화 도구이다.'
  },
  {
    id: 285,
    subject: 'sw-dev',
    question: 'IDE(Integrated Development Environment) 도구의 각 기능에 대한 설명으로 틀린 것은?',
    options: [
      'Coding - 프로그래밍 언어를 가지고 컴퓨터 프로그램을 작성할 수 있는 환경을 제공',
      'Compile - 저급 언어의 프로그램을 고급 언어 프로그램으로 변환하는 기능',
      'Debugging - 프로그램에서 발견되는 버그를 찾아 수정할 수 있는 기능',
      'Deployment - 소프트웨어를 최종 사용자에게 전달하기 위한 기능'
    ],
    answer: 1,
    explanation: '컴파일(Compile)은 고급 언어로 작성한 프로그램을 컴퓨터가 이해할 수 있는 기계어(저급 언어)로 변환하는 기능이다.'
  },
  {
    id: 286,
    subject: 'sw-dev',
    question: '클린 코드 작성 원칙에 대한 설명으로 틀린 것은?',
    options: [
      '코드의 중복을 최소화한다',
      '코드가 다른 모듈에 미치는 영향을 최대화하도록 작성한다',
      '누구든지 코드를 쉽게 읽을 수 있도록 작성한다',
      '간단하게 코드를 작성한다'
    ],
    answer: 1,
    explanation: '클린 코드는 의존성 배제 원칙에 따라 코드가 다른 모듈에 미치는 영향을 최소화해야 한다.'
  },
  {
    id: 287,
    subject: 'sw-dev',
    question: '알고리즘과 관련한 설명으로 틀린 것은?',
    options: [
      '주어진 작업을 수행하는 컴퓨터 명령어를 순서대로 나열한 것으로 볼 수 있다',
      '검색(Searching)은 정렬이 되지 않은 데이터 혹은 정렬이 된 데이터 중에서 키값에 해당되는 데이터를 찾는 알고리즘이다',
      '정렬(Sorting)은 흩어져 있는 데이터를 키값을 이용하여 순서대로 열거하는 알고리즘이다',
      '선형 검색은 검색을 수행하기 전에 반드시 데이터의 집합이 정렬되어 있어야 한다'
    ],
    answer: 3,
    explanation: '선형 검색(Linear Search)은 정렬되지 않은 파일에서도 첫 번째 레코드부터 차례로 비교하며 검색할 수 있는 방식이다.'
  },
  {
    id: 288,
    subject: 'sw-dev',
    question: '소스 코드 정적 분석(Static Analysis)에 대한 설명으로 틀린 것은?',
    options: [
      '소스 코드를 실행시키지 않고 분석한다',
      '코드에 있는 오류나 잠재적인 오류를 찾아내기 위한 활동이다',
      '하드웨어적인 방법으로만 코드 분석이 가능하다',
      '자료 흐름이나 논리 흐름을 분석하여 비정상적인 패턴을 찾을 수 있다'
    ],
    answer: 2,
    explanation: 'pmd, cppcheck 등 소프트웨어 도구를 이용해 코드를 분석할 수 있으므로 하드웨어적인 방법으로만 가능하다는 설명은 틀렸다.'
  },
  {
    id: 289,
    subject: 'sw-dev',
    question: '힙 정렬(Heap Sort)에 대한 설명으로 틀린 것은?',
    options: [
      '정렬할 입력 레코드들로 힙을 구성하고 가장 큰 키 값을 갖는 루트 노드를 제거하는 과정을 반복하여 정렬하는 기법이다',
      '평균 수행 시간은 O(nlog2n)이다',
      '완전 이진 트리(Complete Binary Tree)로 입력 자료의 레코드를 구성한다',
      '최악의 수행 시간은 O(2n4)이다'
    ],
    answer: 3,
    explanation: '힙 정렬의 시간 복잡도는 평균과 최악 모두 O(nlog2n)이다.'
  },
  {
    id: 290,
    subject: 'sw-dev',
    question: '형상 관리의 개념과 절차에 대한 설명으로 틀린 것은?',
    options: [
      '형상 식별은 형상 관리 계획을 근거로 형상 관리의 대상이 무엇인지 식별하는 과정이다',
      '형상 관리를 통해 가시성과 추적성을 보장함으로써 소프트웨어의 생산성과 품질을 높일 수 있다',
      '형상 통제 과정에서는 형상 목록의 변경 요구를 즉시 수용 및 반영해야 한다',
      '형상 감사는 형상 관리 계획대로 형상 관리가 진행되고 있는지, 형상 항목의 변경이 요구사항에 맞도록 제대로 이뤄졌는지 등을 살펴보는 활동이다'
    ],
    answer: 2,
    explanation: '형상 통제는 변경 요구를 검토하여 현재의 기준선(Base Line)에 잘 반영되도록 조정하는 작업으로, 변경 요구를 즉시 수용·반영하는 것이 아니다.'
  },
  {
    id: 291,
    subject: 'sw-dev',
    question: '배치 프로그램의 필수 요소에 대한 설명으로 틀린 것은?',
    options: [
      '자동화는 심각한 오류 상황 외에는 사용자의 개입 없이 동작해야 한다',
      '안정성은 어떤 문제가 생겼는지, 언제 발생했는지 등을 추적할 수 있어야 한다',
      '대용량 데이터는 대용량의 데이터를 처리할 수 있어야 한다',
      '무결성은 주어진 시간 내에 처리를 완료할 수 있어야 하고, 동시에 동작하고 있는 다른 애플리케이션을 방해하지 말아야 한다'
    ],
    answer: 3,
    explanation: '주어진 시간 내 처리 완료와 타 애플리케이션 비방해는 배치 프로그램의 필수 요소 중 성능에 대한 설명이다.'
  },
  {
    id: 292,
    subject: 'sw-dev',
    question: '스택(Stack)에 대한 옳은 내용으로만 나열된 것은?\n\n㉠ FIFO 방식으로 처리된다.\n㉡ 순서 리스트의 뒤(Rear)에서 노드가 삽입되며, 앞(Front)에서 노드가 제거된다.\n㉢ 선형 리스트의 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조이다.\n㉣ 인터럽트 처리, 서브루틴 호출 작업 등에 응용된다.',
    options: [
      '㉠, ㉡',
      '㉡, ㉢',
      '㉣',
      '㉠, ㉡, ㉢, ㉣'
    ],
    answer: 2,
    explanation: '스택은 후입선출(LIFO) 방식으로 처리되며, ㉡은 큐(Queue), ㉢은 데크(Deque)에 대한 설명이다. 옳은 것은 ㉣뿐이다.'
  },
  {
    id: 293,
    subject: 'sw-dev',
    question: '인간의 실수 등을 통해 원래의 의도와 다르게 소프트웨어가 예정된 설계를 벗어나 발생하는 오류를 가리키는 용어는?',
    options: [
      '휴먼 에러(Human Error)',
      '시스템 폴트(System Fault)',
      '하드웨어 장애(Hardware Failure)',
      '네트워크 오류(Network Error)'
    ],
    answer: 0,
    explanation: '휴먼 에러는 사람의 실수로 인해 소프트웨어가 예정된 설계를 벗어나 발생하는 오류를 말한다.'
  },
  {
    id: 294,
    subject: 'sw-dev',
    question: '소프트웨어 개발 생명주기 전반에 걸쳐 생성되는 모든 산출물의 종합 및 변경 과정을 체계적으로 관리하고 유지하는 일련의 개발 관리 활동으로, 소프트웨어에 가시성과 추적 가능성을 부여하여 제품의 품질과 안정성을 높이는 활동은?',
    options: [
      '형상 관리(SCM)',
      '릴리즈 관리',
      '요구사항 관리',
      '이슈 관리'
    ],
    answer: 0,
    explanation: '형상 관리(SCM; Software Configuration Management)는 개발 전 과정의 산출물과 변경 사항을 체계적으로 관리하여 가시성과 추적성을 부여하는 활동이다.'
  },
  {
    id: 295,
    subject: 'sw-dev',
    question: '기능 명세서를 보고 결함(Defect)으로 판단할 수 있는 기준을 모두 고른 것은?\n\n㉠ 기능 명세서에 가능하다고 명시된 기능이 수행되지 않는 경우\n㉡ 기능 명세서에 불가능하다고 명시된 기능이 수행되지 않는 경우\n㉢ 기능 명세서에 명시되어 있지 않지만, 수행해야만 하는 기능이 수행되지 않는 경우\n㉣ 테스트 시각에서 보았을 때, 문제가 있다고 판단되는 경우',
    options: [
      '㉠, ㉡',
      '㉠, ㉢, ㉣',
      '㉡, ㉢',
      '㉠, ㉡, ㉢, ㉣'
    ],
    answer: 1,
    explanation: '명시된 기능이 수행되지 않거나, 명시되지 않았어도 수행해야 할 기능이 수행되지 않거나, 테스트 관점에서 문제가 있다고 판단되는 경우가 결함이다. 불가능하다고 명시된 기능이 수행되지 않는 것은 정상 동작이다.'
  },
  {
    id: 296,
    subject: 'sw-dev',
    question: '소프트웨어의 각 기능이 완전히 작동되는 것을 입증하는 테스트로, 동치 분할 검사, 경계값 분석, 원인-효과 그래프 검사, 오류 예측 검사, 비교 검사 등이 속하며, 사용자의 요구사항 명세를 보면서 구현된 기능을 검사하는 테스트는?',
    options: [
      '화이트박스 테스트',
      '블랙박스 테스트',
      '구조 기반 테스트',
      '뮤테이션 테스트'
    ],
    answer: 1,
    explanation: '블랙박스 테스트는 프로그램 내부 구조를 고려하지 않고 요구사항 명세를 기반으로 기능을 검사하는 테스트로, 동치 분할·경계값 분석 등이 대표 기법이다.'
  },
  {
    id: 297,
    subject: 'sw-dev',
    question: '결함(Defect) 조치 상태 중 Fixed(Resolved)의 의미로 옳은 것은?',
    options: [
      '결함이 처음 발견되어 등록되었지만 아직 분석되지 않은 상태',
      '결함을 수정하기 위해 개발자에게 결함이 할당된 상태',
      '개발자가 필요한 변경 작업을 수행하여 결함 수정 작업을 완료한 상태',
      '결함이 해결되어 테스터와 품질 관리 담당자가 종료를 승인한 상태'
    ],
    answer: 2,
    explanation: 'Fixed(Resolved)는 개발자가 결함 수정 작업을 완료한 상태를 의미한다. 등록 직후는 Open, 할당은 Assigned, 종료 승인은 Closed이다.'
  },
  {
    id: 298,
    subject: 'sw-dev',
    question: '알파/베타 테스트가 포함된 테스트 단계로, 모든 테스트 단계 중 가장 마지막에 진행되는 테스트는?',
    options: [
      '단위 테스트',
      '통합 테스트',
      '시스템 테스트',
      '인수 테스트'
    ],
    answer: 3,
    explanation: '인수 테스트는 사용자의 요구사항 충족 여부를 사용자가 직접 확인하는 최종 단계의 테스트로, 알파 테스트와 베타 테스트가 여기에 포함된다.'
  },
  {
    id: 299,
    subject: 'sw-dev',
    question: '결함이 해결되어 테스터와 품질 관리(QA) 담당자가 종료를 승인한 상태로, 회귀 테스트에서 결함이 다시 발견되면 상태를 다시 OPEN으로 변경하게 되는 결함 조치 상태는?',
    options: [
      'Assigned',
      'Deferred',
      'Closed',
      'Clarified'
    ],
    answer: 2,
    explanation: 'Closed(결함 종료)는 결함이 해결되어 테스터와 QA 담당자가 종료를 승인한 상태이며, 수정 결과가 만족스럽지 않으면 다시 Open으로 변경한다.'
  },
  {
    id: 300,
    subject: 'sw-dev',
    question: '생선뼈처럼 생긴 모양 때문에 피쉬본 다이어그램이라고도 불리며, 다양한 요인과 잠재적 문제 및 결과 간의 연결 가능성을 시각화하여 원인과 결과를 확인하기 위해 사용하는 자료 분석 도구는?',
    options: [
      '파레토 차트',
      '이시카와 다이어그램',
      '간트 차트',
      '순서도(Flowchart)'
    ],
    answer: 1,
    explanation: '이시카와 다이어그램(피쉬본 다이어그램)은 문제를 큰 가시로, 원인·영향을 잔가시로 표현하여 원인과 결과의 관계를 시각화하는 분석 도구이다.'
  },
  {
    id: 301,
    subject: 'sw-dev',
    question: '결함 조치 상태에서 테스터와 품질관리(QA) 담당자에 의해 결함이 처음 발견되어 등록되었지만, 아직 분석되지 않은 상태를 표현하는 용어는?',
    options: [
      'OPEN',
      'FIXED',
      'CLOSED',
      'DEFERRED'
    ],
    answer: 0,
    explanation: 'OPEN(결함 등록)은 결함이 발견되어 등록되었지만 아직 분석되지 않은 상태를 의미한다.'
  },
  {
    id: 302,
    subject: 'sw-dev',
    question: '동시 접속으로 시스템에 많은 요청이 발생할 때 어떻게 가동되는지 확인하고, 시스템에 과다 정보량을 부과하여 과부하 시에도 시스템이 정상적으로 작동되는지 검증하는 테스트는?',
    options: [
      '회복 테스트',
      '보안 테스트',
      '부하 테스트',
      '호환성 테스트'
    ],
    answer: 2,
    explanation: '부하 테스트(Load Test)는 동시 접속 등 많은 요청 상황에서 시스템이 정상적으로 작동하는지 검증하는 성능 테스트이다.'
  },
  {
    id: 303,
    subject: 'sw-dev',
    question: '하위 모듈은 있지만 상위 모듈이 없는 경우, 상위 모듈에서의 데이터 입력과 출력을 확인하기 위해 사용하는 더미 모듈로 상향식 통합 테스트에 사용되는 것은?',
    options: [
      '스텁(Stub)',
      '드라이버(Driver)',
      '목(Mock) 객체',
      '하네스(Harness)'
    ],
    answer: 1,
    explanation: '드라이버(Driver)는 상향식 통합 테스트에서 아직 없는 상위 모듈을 대신하여 하위 모듈을 호출하고 결과를 확인하는 더미 모듈이다.'
  },
  {
    id: 304,
    subject: 'sw-dev',
    question: '사용자의 요구사항 분석서(명세)를 기반으로 테스트 케이스를 선정하여 테스트하는 기법으로, 동등 분할, 경계값 분석, 상태 전이 등이 해당하는 테스트 유형은?',
    options: [
      '명세 기반 테스트',
      '구조 기반 테스트',
      '경험 기반 테스트',
      '변경 기반 테스트'
    ],
    answer: 0,
    explanation: '명세 기반 테스트는 요구사항 명세를 기반으로 테스트 케이스를 선정하는 블랙박스 계열의 테스트 기법으로, 동등 분할·경계값 분석·상태 전이 등이 있다.'
  },
  {
    id: 305,
    subject: 'sw-dev',
    question: '다음 두 설명에 해당하는 테스트 기법을 순서대로 짝지은 것은?\n\n㉠ 소프트웨어 내부 논리 흐름에 따라 테스트 케이스를 작성하고 확인하는 테스트 기법\n㉡ 유사 소프트웨어나 유사 기술 평가에서 테스터의 경험을 토대로 직관과 기술 능력을 기반으로 수행하는 테스트 기법',
    options: [
      '㉠ 명세 기반 테스트, ㉡ 구조 기반 테스트',
      '㉠ 구조 기반 테스트, ㉡ 경험 기반 테스트',
      '㉠ 경험 기반 테스트, ㉡ 명세 기반 테스트',
      '㉠ 구조 기반 테스트, ㉡ 명세 기반 테스트'
    ],
    answer: 1,
    explanation: '내부 논리 흐름에 따라 테스트하는 것은 구조 기반(화이트박스) 테스트이고, 테스터의 경험과 직관을 기반으로 하는 것은 경험 기반 테스트이다.'
  },
  {
    id: 306,
    subject: 'sw-dev',
    question: '환경적인 장애 리스크를 최소화하기 위해 실제 사용 환경과 유사하게 만든 테스트 환경에서 수행되며, 개발된 소프트웨어가 해당 컴퓨터 시스템에서 완벽하게 수행되는가를 점검하는 테스트는?',
    options: [
      '단위 테스트',
      '통합 테스트',
      '시스템 테스트',
      '스모크 테스트'
    ],
    answer: 2,
    explanation: '시스템 테스트는 실제 사용 환경과 유사한 환경에서 전체 시스템이 정상적으로 수행되는지를 점검하는 테스트 단계이다.'
  },
  // ===== db (데이터베이스 구축) 문제집 추가 : 307~381 =====
  {
    id: 307,
    subject: 'db',
    question: '정규화에 대한 설명으로 적절하지 않은 것은?',
    options: [
      '데이터베이스의 개념적 설계 단계 이전에 수행한다',
      '데이터 구조의 안정성을 최대화한다',
      '중복을 배제하여 삽입, 삭제, 갱신 이상의 발생을 방지한다',
      '데이터 삽입 시 릴레이션을 재구성할 필요성을 줄인다'
    ],
    answer: 0,
    explanation: '정규화는 개념적 설계 다음에 수행하는 논리적 설계 단계에서 수행하는 작업이다.'
  },
  {
    id: 308,
    subject: 'db',
    question: '정규화의 필요성으로 거리가 먼 것은?',
    options: [
      '데이터 구조의 안정성 최대화',
      '중복 데이터의 활성화',
      '수정, 삭제 시 이상 현상의 최소화',
      '테이블 불일치 위험의 최소화'
    ],
    answer: 1,
    explanation: '정규화는 중복을 배제함으로써 삽입, 삭제, 갱신 이상의 발생을 최소화하는 것이므로 중복 데이터의 활성화는 필요성이 아니다.'
  },
  {
    id: 309,
    subject: 'db',
    question: '물리적 데이터베이스 설계에 대한 설명으로 거리가 먼 것은?',
    options: [
      '물리적 설계의 목적은 효율적인 방법으로 데이터를 저장하는 것이다',
      '트랜잭션 처리량과 응답시간, 디스크 용량 등을 고려해야 한다',
      '저장 레코드의 형식, 순서, 접근 경로와 같은 정보를 사용하여 설계한다',
      '트랜잭션의 인터페이스를 설계하며, 데이터 타입 및 데이터 타입들 간의 관계로 표현한다'
    ],
    answer: 3,
    explanation: '트랜잭션의 인터페이스 설계와 데이터 타입 간의 관계 표현은 논리적 데이터베이스 설계에서 수행하는 작업이다.'
  },
  {
    id: 310,
    subject: 'db',
    question: '개체-관계(E-R) 모델에 대한 설명으로 잘못된 것은?',
    options: [
      '특정 DBMS를 고려하여 제작하지 않는다',
      '개체는 마름모, 속성은 사각형을 이용하여 표현한다',
      '개념적 데이터베이스 설계 단계에서 제작된다',
      'E-R 모델의 기본적인 아이디어를 시각적으로 가장 잘 나타낸 것이 E-R 다이어그램이다'
    ],
    answer: 1,
    explanation: 'E-R 다이어그램에서 개체 타입은 사각형, 관계 타입은 마름모, 속성은 타원으로 표현한다.'
  },
  {
    id: 311,
    subject: 'db',
    question: 'SQL 문에서 SELECT에 대한 설명으로 옳지 않은 것은?',
    options: [
      'FROM 절에는 질의에 의해 검색될 데이터들을 포함하는 테이블명을 기술한다',
      '검색 결과에 중복되는 레코드를 없애기 위해서는 WHERE 절에 DISTINCT 키워드를 사용한다',
      'HAVING 절은 GROUP BY 절과 함께 사용되며, 그룹에 대한 조건을 지정한다',
      'ORDER BY 절은 특정 속성을 기준으로 정렬하여 검색할 때 사용한다'
    ],
    answer: 1,
    explanation: 'DISTINCT는 WHERE 절이 아니라 SELECT 절의 속성명 앞에 사용하는 예약어이다.'
  },
  {
    id: 312,
    subject: 'db',
    question: '뷰(View)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '뷰는 CREATE 문을 사용하여 정의한다',
      '뷰는 데이터의 논리적 독립성을 제공한다',
      '뷰를 제거할 때는 DROP 문을 사용한다',
      '뷰는 저장장치 내에 물리적으로 존재한다'
    ],
    answer: 3,
    explanation: '뷰는 저장장치 내에 물리적으로 존재하지 않는 가상 테이블이다.'
  },
  {
    id: 313,
    subject: 'db',
    question: '속성(Attribute)에 대한 설명으로 틀린 것은?',
    options: [
      '속성은 개체의 특성을 기술한다',
      '속성은 데이터베이스를 구성하는 가장 작은 논리적 단위이다',
      '속성은 파일 구조상 데이터 항목 또는 데이터 필드에 해당된다',
      '속성의 수를 카디널리티(Cardinality)라고 한다'
    ],
    answer: 3,
    explanation: '속성의 수는 디그리(Degree)이고, 카디널리티(Cardinality)는 튜플(Tuple)의 수이다.'
  },
  {
    id: 314,
    subject: 'db',
    question: '뷰(VIEW)에 대한 설명으로 옳지 않은 것은?',
    options: [
      'DBA는 보안 측면에서 뷰를 활용할 수 있다',
      '뷰 위에 또 다른 뷰를 정의할 수 있다',
      '뷰에 대한 삽입, 갱신, 삭제 연산 시 제약사항이 따르지 않는다',
      '독립적인 인덱스를 가질 수 없다'
    ],
    answer: 2,
    explanation: '뷰는 기본 테이블이나 다른 뷰를 이용해 만든 가상 테이블로서, 삽입·삭제·갱신 연산에 제약이 따른다.'
  },
  {
    id: 315,
    subject: 'db',
    question: '데이터베이스의 무결성 규정(Integrity Rule)과 관련한 설명으로 틀린 것은?',
    options: [
      '무결성 규정에는 데이터가 만족해야 될 제약 조건, 규정을 참조할 때 사용하는 식별자 등의 요소가 포함될 수 있다',
      '무결성 규정의 대상으로는 도메인, 키, 종속성 등이 있다',
      '정식으로 허가받은 사용자가 아닌 불법적인 사용자에 의한 갱신으로부터 데이터베이스를 보호하기 위한 규정이다',
      '릴레이션 무결성 규정(Relation Integrity Rules)은 릴레이션을 조작하는 과정에서의 의미적 관계(Semantic Relationship)를 명세한 것이다'
    ],
    answer: 2,
    explanation: '허가받은 사용자만 갱신할 수 있다는 것은 데이터베이스의 무결성 규정이 아니라 보안 요소로서의 무결성(Integrity)에 대한 설명이다.'
  },
  {
    id: 316,
    subject: 'db',
    question: '데이터베이스에서 병행제어의 목적으로 틀린 것은?',
    options: [
      '시스템 활용도 최대화',
      '사용자에 대한 응답시간 최소화',
      '데이터베이스 공유 최소화',
      '데이터베이스 일관성 유지'
    ],
    answer: 2,
    explanation: '병행제어의 목적 중 하나는 데이터베이스 공유의 최소화가 아니라 최대화이다.'
  },
  {
    id: 317,
    subject: 'db',
    question: 'DELETE 명령에 대한 설명으로 틀린 것은?',
    options: [
      '테이블의 행을 삭제할 때 사용한다',
      'WHERE 조건절이 없는 DELETE 명령을 수행하면 DROP TABLE 명령을 수행했을 때와 동일한 효과를 얻을 수 있다',
      'SQL을 사용 용도에 따라 분류할 경우 DML에 해당한다',
      '기본 사용 형식은 DELETE FROM 테이블 [WHERE 조건]; 이다'
    ],
    answer: 1,
    explanation: 'DROP은 테이블 자체를 삭제하고, DELETE는 레코드를 삭제한다. WHERE 절을 생략한 DELETE는 테이블은 남긴 채 모든 레코드만 삭제한다.'
  },
  {
    id: 318,
    subject: 'db',
    question: '분산 데이터베이스 시스템(Distributed Database System)에 대한 설명으로 틀린 것은?',
    options: [
      '분산 데이터베이스는 논리적으로는 하나의 시스템에 속하지만, 물리적으로는 여러 개의 컴퓨터 사이트에 분산되어 있다',
      '위치 투명성, 중복 투명성, 병행 투명성, 장애 투명성을 목표로 한다',
      '데이터베이스의 설계가 비교적 어렵고, 개발 비용과 처리 비용이 증가한다는 단점이 있다',
      '분산 데이터베이스 시스템의 주요 구성 요소는 분산 처리기, P2P 시스템, 단일 데이터베이스 등이 있다'
    ],
    answer: 3,
    explanation: '분산 데이터베이스 시스템의 주요 구성 요소는 분산 처리기, 분산 데이터베이스, 통신 네트워크이다.'
  },
  {
    id: 319,
    subject: 'db',
    question: '관계대수와 관계해석에 대한 설명으로 옳지 않은 것은?',
    options: [
      '관계대수는 원래 수학의 프레디킷 해석에 기반을 두고 있다',
      '관계대수로 표현한 식은 관계해석으로 표현할 수 있다',
      '관계해석은 관계 데이터의 연산을 표현하는 방법이다',
      '관계해석은 원하는 정보가 무엇이라는 것만 정의하는 비절차적인 특징을 가지고 있다'
    ],
    answer: 0,
    explanation: '수학의 프레디킷 해석(Predicate Calculus)에 기반을 두고 있는 것은 관계대수가 아니라 관계해석이다.'
  },
  {
    id: 320,
    subject: 'db',
    question: '시스템 카탈로그에 대한 설명으로 옳지 않은 것은?',
    options: [
      '시스템 자체에 관련 있는 다양한 객체에 관한 정보를 포함하는 시스템 데이터베이스이다',
      '데이터 사전이라고도 한다',
      '기본 테이블, 뷰, 인덱스, 패키지, 접근 권한 등의 정보를 저장한다',
      '시스템을 위한 정보를 포함하는 시스템 데이터베이스이므로 일반 사용자는 SQL을 이용하여 내용을 검색해 볼 수 없다'
    ],
    answer: 3,
    explanation: '시스템 카탈로그 자체도 시스템 테이블로 구성되어 있어 일반 사용자도 SQL을 이용하여 내용을 검색할 수 있다.'
  },
  {
    id: 321,
    subject: 'db',
    question: '데이터베이스의 인덱스와 관련한 설명으로 틀린 것은?',
    options: [
      '문헌의 색인, 사전과 같이 데이터를 쉽고 빠르게 찾을 수 있도록 만든 데이터 구조이다',
      '테이블에 붙여진 색인으로 데이터 검색 시 처리 속도 향상에 도움이 된다',
      '인덱스의 추가, 삭제 명령어는 각각 ADD, DELETE이다',
      '대부분의 데이터베이스에서 테이블을 삭제하면 인덱스도 같이 삭제된다'
    ],
    answer: 2,
    explanation: '인덱스를 추가하는 명령어는 CREATE, 삭제하는 명령어는 DROP이다.'
  },
  {
    id: 322,
    subject: 'db',
    question: '관계형 데이터 모델의 릴레이션에 대한 설명으로 틀린 것은?',
    options: [
      '모든 속성 값은 원자 값을 갖는다',
      '한 릴레이션에 포함된 튜플은 모두 상이하다',
      '한 릴레이션에 포함된 튜플 사이에는 순서가 없다',
      '한 릴레이션을 구성하는 속성 사이에는 순서가 존재한다'
    ],
    answer: 3,
    explanation: '릴레이션을 구성하는 속성들 간에는 특별한 순서가 없다.'
  },
  {
    id: 323,
    subject: 'db',
    question: '정규화를 거치지 않아 발생하게 되는 이상(Anomaly) 현상의 종류에 대한 설명으로 옳지 않은 것은?',
    options: [
      '삭제 이상이란 릴레이션에서 한 튜플을 삭제할 때 의도와는 상관없는 값들도 함께 삭제되는 연쇄 삭제 현상이다',
      '삽입 이상이란 릴레이션에서 데이터를 삽입할 때 의도와는 상관없이 원하지 않는 값들도 함께 삽입되는 현상이다',
      '갱신 이상이란 릴레이션에서 튜플에 있는 속성값을 갱신할 때 일부 튜플의 정보만 갱신되어 정보에 모순이 생기는 현상이다',
      '종속 이상이란 하나의 릴레이션에 하나 이상의 함수적 종속성이 존재하는 현상이다'
    ],
    answer: 3,
    explanation: '이상 현상의 종류에는 삽입 이상, 삭제 이상, 갱신 이상이 있으며, 종속 이상이라는 것은 존재하지 않는다.'
  },
  {
    id: 324,
    subject: 'db',
    question: 'SQL의 TRUNCATE 명령어에 대한 설명으로 옳지 않은 것은?',
    options: [
      'DELETE와 같이 테이블의 모든 데이터를 삭제한다',
      'DROP과 달리 테이블 스키마는 제거되지 않고 유지된다',
      'DELETE에 비해 빠르게 데이터를 제거하는 것이 가능하다',
      'DELETE와 동일하게 ROLLBACK 명령어로 삭제된 데이터를 되살릴 수 있다'
    ],
    answer: 3,
    explanation: 'DELETE로 삭제한 데이터는 ROLLBACK으로 되살릴 수 있지만, TRUNCATE로 삭제한 데이터는 되살릴 수 없다.'
  },
  {
    id: 325,
    subject: 'db',
    question: '시스템 카탈로그에 대한 설명으로 옳지 않은 것은?',
    options: [
      '사용자가 직접 시스템 카탈로그의 내용을 갱신하여 데이터베이스 무결성을 유지한다',
      '시스템 자신이 필요로 하는 스키마 및 여러 가지 객체에 관한 정보를 포함하고 있는 시스템 데이터베이스이다',
      '시스템 카탈로그에 저장되는 내용을 메타 데이터라고도 한다',
      '시스템 카탈로그는 DBMS가 스스로 생성하고 유지한다'
    ],
    answer: 0,
    explanation: '시스템 카탈로그는 사용자가 조회할 수는 있으나 직접 갱신할 수는 없으며, DBMS가 자동으로 갱신한다.'
  },
  {
    id: 326,
    subject: 'db',
    question: '데이터베이스에서 개념적 설계 단계에 대한 설명으로 틀린 것은?',
    options: [
      '산출물로 E-R Diagram을 만들 수 있다',
      'DBMS에 독립적인 개념 스키마를 설계한다',
      '트랜잭션 인터페이스를 설계 및 작성한다',
      '논리적 설계 단계의 앞 단계에서 수행된다'
    ],
    answer: 2,
    explanation: '트랜잭션의 인터페이스 설계는 논리적 설계 단계에서 수행하는 작업이다.'
  },
  {
    id: 327,
    subject: 'db',
    question: '관계대수에 대한 설명으로 틀린 것은?',
    options: [
      '원하는 릴레이션을 정의하는 방법을 제공하며 비절차적 언어이다',
      '릴레이션 조작을 위한 연산의 집합으로 피연산자와 결과가 모두 릴레이션이다',
      '일반 집합 연산과 순수 관계 연산으로 구분된다',
      '질의에 대한 해를 구하기 위해 수행해야 할 연산의 순서를 명시한다'
    ],
    answer: 0,
    explanation: '원하는 릴레이션을 정의하는 방법을 제공하는 비절차적 언어는 관계해석이며, 관계대수는 연산의 순서를 명시하는 절차적 언어이다.'
  },
  {
    id: 328,
    subject: 'db',
    question: '데이터베이스의 논리적 설계(Logical Design) 단계에서 수행하는 작업이 아닌 것은?',
    options: [
      '레코드 집중의 분석 및 설계',
      '논리적 데이터베이스 구조로 매핑(Mapping)',
      '트랜잭션 인터페이스 설계',
      '스키마의 평가 및 정제'
    ],
    answer: 0,
    explanation: '레코드 집중의 분석 및 설계는 물리적 설계 단계에서 수행하는 작업이다.'
  },
  {
    id: 329,
    subject: 'db',
    question: '데이터 제어 언어(DCL)의 기능으로 옳지 않은 것은?',
    options: [
      '데이터 보안',
      '논리적, 물리적 데이터 구조 정의',
      '무결성 유지',
      '병행수행 제어'
    ],
    answer: 1,
    explanation: '논리적, 물리적 데이터 구조를 정의하는 것은 데이터 정의 언어(DDL)의 기능이다.'
  },
  {
    id: 330,
    subject: 'db',
    question: 'CREATE TABLE문에 포함되지 않는 기능은?',
    options: [
      '속성 타입 변경',
      '속성의 NOT NULL 여부 지정',
      '기본키를 구성하는 속성 지정',
      'CHECK 제약조건의 정의'
    ],
    answer: 0,
    explanation: '속성 타입 변경은 ALTER TABLE문의 기능이며, CREATE TABLE문에서는 할 수 없다.'
  },
  {
    id: 331,
    subject: 'db',
    question: '무결성을 보장하기 위해 트랜잭션이 가져야 할 특성에 대한 설명으로 옳지 않은 것은?',
    options: [
      '트랜잭션 내의 모든 명령은 반드시 완벽히 수행되어야 하며, 어느 하나라도 오류가 발생하면 트랜잭션 전부가 취소되어야 한다',
      '트랜잭션의 수행과 관계없이 데이터베이스가 가지고 있는 고정 요소는 일관되어야 한다',
      '둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행 중에 다른 트랜잭션의 연산이 끼어들 수 없다',
      'Commit과 Rollback 명령어에 의해 보장받는 트랜잭션의 특성은 일관성이다'
    ],
    answer: 3,
    explanation: 'Commit과 Rollback 명령어에 의해 보장받는 트랜잭션의 특성은 일관성이 아니라 원자성(Atomicity)이다.'
  },
  {
    id: 332,
    subject: 'db',
    question: '데이터베이스 설계 시 물리적 설계 단계에서 수행하는 사항이 아닌 것은?',
    options: [
      '저장 레코드 양식 설계',
      '레코드 집중의 분석 및 설계',
      '접근 경로 설계',
      '목표 DBMS에 맞는 스키마 설계'
    ],
    answer: 3,
    explanation: '목표 DBMS에 맞는 스키마 설계는 논리적 설계 단계에서 수행하는 사항이다.'
  },
  {
    id: 333,
    subject: 'db',
    question: '분산 데이터베이스 시스템과 관련한 설명으로 틀린 것은?',
    options: [
      '물리적으로 분산된 데이터베이스 시스템을 논리적으로 하나의 데이터베이스 시스템처럼 사용할 수 있도록 한 것이다',
      '물리적으로 분산되어 지역별로 필요한 데이터를 처리할 수 있는 지역 컴퓨터(Local Computer)를 분산 처리기(Distributed Processor)라고 한다',
      '분산 데이터베이스 시스템을 위한 통신 네트워크 구조가 데이터 통신에 영향을 주므로 효율적으로 설계해야 한다',
      '데이터베이스가 분산되어 있음을 사용자가 인식할 수 있도록 분산 투명성(Distribution Transparency)을 배제해야 한다'
    ],
    answer: 3,
    explanation: '분산 데이터베이스는 분산 투명성을 제공하여 사용자가 데이터베이스가 분산되어 있음을 인식할 필요가 없도록 해야 한다.'
  },
  {
    id: 334,
    subject: 'db',
    question: '테이블의 기본키(Primary Key)로 지정된 속성에 관한 설명으로 가장 거리가 먼 것은?',
    options: [
      'NOT NULL로 널 값을 가지지 않는다',
      '릴레이션에서 튜플을 구별할 수 있다',
      '외래키로 참조될 수 있다',
      '검색할 때 반드시 필요하다'
    ],
    answer: 3,
    explanation: '기본키가 지정되어 있지 않아도 검색은 할 수 있으므로, 검색 시 반드시 필요한 것은 아니다.'
  },
  {
    id: 335,
    subject: 'db',
    question: 'SQL과 관련한 설명으로 틀린 것은?',
    options: [
      'REVOKE 키워드를 사용하여 열 이름을 다시 부여할 수 있다',
      '데이터 정의어는 기본 테이블, 뷰 테이블, 또는 인덱스 등을 생성, 변경, 제거하는 데 사용되는 명령어이다',
      'DISTINCT를 활용하여 중복 값을 제거할 수 있다',
      'JOIN을 통해 여러 테이블의 레코드를 조합하여 표현할 수 있다'
    ],
    answer: 0,
    explanation: 'REVOKE는 열 이름을 다시 부여하는 것이 아니라 데이터베이스 사용자의 사용 권한을 취소하는 명령어이다.'
  },
  {
    id: 336,
    subject: 'db',
    question: '데이터베이스에서 인덱스(Index)와 관련한 설명으로 틀린 것은?',
    options: [
      '인덱스의 기본 목적은 검색 성능을 최적화하는 것으로 볼 수 있다',
      'B-트리 인덱스는 분기를 목적으로 하는 Branch Block을 가지고 있다',
      'BETWEEN 등 범위(Range) 검색에 활용될 수 있다',
      '시스템이 자동으로 생성하여 사용자가 변경할 수 없다'
    ],
    answer: 3,
    explanation: '인덱스는 사용자가 데이터 정의어(DDL)를 이용하여 생성, 변경, 제거할 수 있다.'
  },
  {
    id: 337,
    subject: 'db',
    question: '무결성 제약 조건 중 개체 무결성 제약 조건에 대한 설명으로 옳은 것은?',
    options: [
      '릴레이션 내의 튜플들이 각 속성의 도메인에 정해진 값만을 가져야 한다',
      '기본키는 NULL 값을 가져서는 안 되며 릴레이션 내에 오직 하나의 값만 존재해야 한다',
      '자식 릴레이션의 외래키는 부모 릴레이션의 기본키와 도메인이 동일해야 한다',
      '자식 릴레이션의 값이 변경될 때 부모 릴레이션의 제약을 받는다'
    ],
    answer: 1,
    explanation: '개체 무결성은 기본키를 구성하는 어떤 속성도 NULL 값이나 중복 값을 가질 수 없다는 규정이다. 도메인 관련 설명은 도메인 무결성, 나머지는 참조 무결성에 대한 설명이다.'
  },
  {
    id: 338,
    subject: 'db',
    question: '관계 데이터 모델에서 릴레이션(Relation)에 관한 설명으로 옳은 것은?',
    options: [
      '릴레이션의 각 행을 스키마(Schema)라 하며, 예로 도서 릴레이션을 구성하는 스키마에는 도서번호, 도서명, 저자, 가격 등이 있다',
      '릴레이션의 각 열을 튜플(Tuple)이라 하며, 하나의 튜플은 각 속성에서 정의된 값을 이용하여 구성된다',
      '도메인(Domain)은 하나의 속성이 가질 수 있는 같은 타입의 모든 값의 집합으로 각 속성의 도메인은 원자값을 갖는다',
      '속성(Attribute)은 한 개의 릴레이션의 논리적인 구조를 정의한 것으로 릴레이션의 이름과 릴레이션에 포함된 속성들의 집합을 의미한다'
    ],
    answer: 2,
    explanation: '릴레이션의 행은 튜플, 열은 속성이며, 릴레이션의 논리적 구조를 정의한 것은 릴레이션 스키마이다. 도메인에 대한 설명만 옳다.'
  },
  {
    id: 339,
    subject: 'db',
    question: '다음 <학생> 릴레이션의 차수(Degree)와 카디널리티(Cardinality)로 옳은 것은?\n\n[학생]\n순번 | 성명 | 학과 | 점수 | 평가\n1 | 김흥식 | 컴퓨터공학과 | 90 | 합격\n2 | 추연국 | 정보처리과 | 88 | 합격\n3 | 유달님 | 정보통신과 | 88 | 합격\n4 | 박명수 | 무한도전과 | 57 | 불합격',
    options: [
      '차수 4, 카디널리티 5',
      '차수 5, 카디널리티 4',
      '차수 5, 카디널리티 5',
      '차수 4, 카디널리티 4'
    ],
    answer: 1,
    explanation: '차수(Degree)는 속성의 수로 5(순번, 성명, 학과, 점수, 평가)이고, 카디널리티(Cardinality)는 튜플의 수로 4이다.'
  },
  {
    id: 340,
    subject: 'db',
    question: 'SQL의 데이터 정의어(DDL) 중 테이블 구조 자체를 제거하는 명령어는?',
    options: [
      'DELETE',
      'TRUNCATE',
      'DROP',
      'REMOVE'
    ],
    answer: 2,
    explanation: 'DROP은 테이블 구조 자체를 제거하는 DDL 명령어이다. DELETE는 레코드를 삭제하는 DML이고, TRUNCATE는 구조는 남기고 데이터만 제거한다.'
  },
  {
    id: 341,
    subject: 'db',
    question: '데이터베이스 전반에 대해 책임을 갖는 사람 또는 조직으로, 데이터 정의 언어를 사용하여 데이터베이스를 DBMS에 표현하고 관리하는 목적으로 데이터베이스에 접근하는 사용자는?',
    options: [
      '응용 프로그래머',
      'DBA(데이터베이스 관리자)',
      '일반 사용자(End User)',
      '데이터 분석가'
    ],
    answer: 1,
    explanation: 'DBA(Database Administrator)는 데이터베이스 전반에 대한 책임을 지고 데이터 정의 언어(DDL) 등을 사용하여 데이터베이스를 정의·관리하는 관리자이다.'
  },
  {
    id: 342,
    subject: 'db',
    question: '집합 연산자(SET Operation) 중 여러 개의 SQL문의 결과에 대한 합집합을 구하되, 모든 중복된 행은 하나의 행으로 만드는 연산자는?',
    options: [
      'UNION',
      'UNION ALL',
      'INTERSECT',
      'MINUS'
    ],
    answer: 0,
    explanation: 'UNION은 여러 SELECT문 결과의 합집합을 구하며 중복된 행을 하나로 만든다. UNION ALL은 중복을 제거하지 않는다.'
  },
  {
    id: 343,
    subject: 'db',
    question: 'DCL(데이터 제어어)에서 관리자가 사용자에게 데이터베이스에 대한 권한을 부여하는 명령어와 권한을 회수하는 명령어를 순서대로 짝지은 것은?',
    options: [
      'COMMIT, ROLLBACK',
      'GRANT, REVOKE',
      'REVOKE, GRANT',
      'ALLOW, DENY'
    ],
    answer: 1,
    explanation: 'GRANT는 사용자에게 권한을 부여하는 명령어이고, REVOKE는 부여한 권한을 회수하는 명령어이다.'
  },
  {
    id: 344,
    subject: 'db',
    question: '이미 생성된 테이블의 구조(속성 추가·변경 등)를 변경하는 DDL 명령어는?',
    options: [
      'UPDATE',
      'MODIFY',
      'ALTER',
      'CHANGE'
    ],
    answer: 2,
    explanation: 'ALTER는 테이블의 구조를 변경하는 DDL 명령어이다. UPDATE는 테이블의 데이터(레코드) 값을 변경하는 DML이다.'
  },
  {
    id: 345,
    subject: 'db',
    question: '데이터베이스의 구성 요소에 대한 다음 설명에서 ㉠, ㉡에 들어갈 용어를 순서대로 짝지은 것은?\n\n㉠ : 개체가 가지고 있는 특성 또는 상태를 기술하는 것을 말한다.\n㉡ : 2개 이상의 개체 사이 또는 속성 간의 상호 연관성을 말한다.',
    options: [
      '㉠ 속성(Attribute), ㉡ 관계(Relationship)',
      '㉠ 개체(Entity), ㉡ 속성(Attribute)',
      '㉠ 관계(Relationship), ㉡ 개체(Entity)',
      '㉠ 튜플(Tuple), ㉡ 도메인(Domain)'
    ],
    answer: 0,
    explanation: '속성(Attribute)은 개체가 가진 특성이나 상태를 기술하고, 관계(Relationship)는 개체 사이 또는 속성 간의 상호 연관성을 의미한다.'
  },
  {
    id: 346,
    subject: 'db',
    question: '다음 중 DML(데이터 조작어) 명령어로만 짝지어진 것은?',
    options: [
      'GRANT, COMMIT',
      'SELECT, INSERT',
      'CREATE, ALTER',
      'DROP, SAVEPOINT'
    ],
    answer: 1,
    explanation: 'SELECT와 INSERT는 데이터를 조회·삽입하는 DML이다. GRANT·COMMIT·SAVEPOINT는 DCL(TCL), CREATE·ALTER·DROP은 DDL에 해당한다.'
  },
  {
    id: 347,
    subject: 'db',
    question: '데이터베이스 설계 과정을 수행되는 순서대로 올바르게 나열한 것은?',
    options: [
      '논리적 설계 → 개념적 설계 → 물리적 설계',
      '개념적 설계 → 논리적 설계 → 물리적 설계',
      '물리적 설계 → 논리적 설계 → 개념적 설계',
      '개념적 설계 → 물리적 설계 → 논리적 설계'
    ],
    answer: 1,
    explanation: '데이터베이스 설계는 요구 조건 분석 후 개념적 설계, 논리적 설계, 물리적 설계의 순서로 진행된다.'
  },
  {
    id: 348,
    subject: 'db',
    question: '다음 <학생> 릴레이션의 카디널리티(Cardinality)와 차수(Degree)로 옳은 것은?\n\n[학생]\n번호 | 성명 | 전화번호 | 과목\n1 | 홍길동 | 111-1111 | 정보처리\n2 | 임꺽정 | 222-2222 | 컴활1급\n3 | 아무개 | 333-3333 | 컴활2급\n4 | 김조아 | 444-4444 | 워드\n5 | 이문이 | 555-5555 | 그래픽스\n6 | 계두식 | 666-6666 | 사무자동화\n7 | 김유식 | 777-7777 | COS PRO',
    options: [
      '카디널리티 4, 차수 7',
      '카디널리티 7, 차수 4',
      '카디널리티 7, 차수 7',
      '카디널리티 4, 차수 4'
    ],
    answer: 1,
    explanation: '카디널리티는 튜플(행)의 수로 7이고, 차수는 속성(열)의 수로 4(번호, 성명, 전화번호, 과목)이다.'
  },
  {
    id: 349,
    subject: 'db',
    question: 'SQL 구문 중 검색 결과에서 중복된 값을 제거할 때 사용하는 명령어는?',
    options: [
      'UNIQUE',
      'DISTINCT',
      'REMOVE',
      'ONLY'
    ],
    answer: 1,
    explanation: 'DISTINCT는 SELECT 절에서 속성명 앞에 사용하여 검색 결과의 중복 레코드를 제거하는 예약어이다.'
  },
  {
    id: 350,
    subject: 'db',
    question: '데이터베이스에서 표현하고자 하는 정보의 대상으로, 현실 세계에 존재하는 유형 혹은 무형 정보의 대상이며 서로 구별되는 하나하나의 대상을 가리키는 용어는?',
    options: [
      '속성(Attribute)',
      '개체(Entity)',
      '도메인(Domain)',
      '스키마(Schema)'
    ],
    answer: 1,
    explanation: '개체(Entity)는 데이터베이스에서 표현하려는 현실 세계의 대상체로, 서로 구별되는 하나하나의 정보 단위이다.'
  },
  {
    id: 351,
    subject: 'db',
    question: 'SQL 언어의 분류에 대한 설명으로 ㉠~㉢에 들어갈 용어를 순서대로 짝지은 것은?\n\n- 데이터베이스의 구조를 정의·수정·삭제하기 위해 사용되는 언어를 ( ㉠ )이라 한다.\n- 데이터베이스의 자료를 검색·갱신·추가·삭제 및 질의하기 위한 언어를 ( ㉡ )이라 한다.\n- 무결성 유지, 보안과 권한 검사, 병행 수행 제어 등을 위해 사용되는 언어를 ( ㉢ )이라 한다.',
    options: [
      '㉠ DML, ㉡ DDL, ㉢ DCL',
      '㉠ DDL, ㉡ DML, ㉢ DCL',
      '㉠ DCL, ㉡ DML, ㉢ DDL',
      '㉠ DDL, ㉡ DCL, ㉢ DML'
    ],
    answer: 1,
    explanation: '구조 정의는 DDL(데이터 정의어), 자료 조작은 DML(데이터 조작어), 보안·권한·병행 제어는 DCL(데이터 제어어)이다.'
  },
  {
    id: 352,
    subject: 'db',
    question: '데이터베이스의 구조와 관련된 전반적인 정의로서, 데이터베이스를 구성하는 개체, 속성, 이들 간에 존재하는 관계, 데이터 구조와 데이터들이 갖는 제약 조건에 관한 정의를 총칭하는 용어는?',
    options: [
      '인스턴스(Instance)',
      '스키마(Schema)',
      '트랜잭션(Transaction)',
      '메타버스(Metaverse)'
    ],
    answer: 1,
    explanation: '스키마(Schema)는 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세를 총칭하는 용어이다.'
  },
  {
    id: 353,
    subject: 'db',
    question: '데이터베이스 설계 단계에 대한 다음 설명에서 ㉠, ㉡에 들어갈 용어를 순서대로 짝지은 것은?\n\n- ( ㉠ )는 데이터베이스를 구성할 구성 요소를 결정하고 구축하고자 하는 데이터베이스를 개념적으로 표현하는 단계이다.\n- 논리적 설계에서 만들어진 구조를 실제 처리하기에 알맞도록 내부 저장 장치 구조와 접근 경로 등을 설계하는 단계를 ( ㉡ )라고 한다.',
    options: [
      '㉠ 논리적 설계, ㉡ 개념적 설계',
      '㉠ 개념적 설계, ㉡ 물리적 설계',
      '㉠ 물리적 설계, ㉡ 논리적 설계',
      '㉠ 개념적 설계, ㉡ 논리적 설계'
    ],
    answer: 1,
    explanation: '개념적 설계는 데이터베이스를 개념적으로 표현하는 단계이고, 물리적 설계는 내부 저장 장치 구조와 접근 경로를 설계하는 단계이다.'
  },
  {
    id: 354,
    subject: 'db',
    question: '릴레이션(테이블)을 구성하는 하나의 속성이 가질 수 있는 값들의 범위를 가리키는 용어는? (예: 학년 속성의 값으로 1, 2, 3, 4만 올 수 있는 경우)',
    options: [
      '차수(Degree)',
      '카디널리티(Cardinality)',
      '도메인(Domain)',
      '튜플(Tuple)'
    ],
    answer: 2,
    explanation: '도메인(Domain)은 하나의 속성이 취할 수 있는 같은 타입의 원자값들의 집합(범위)을 말한다.'
  },
  {
    id: 355,
    subject: 'db',
    question: '두 릴레이션으로부터 조건에 맞는 관련된 튜플들을 하나의 튜플로 결합하여 하나의 릴레이션으로 만드는 관계 데이터 연산으로, 연산 기호로 ⋈를 사용하는 것은?',
    options: [
      '셀렉트(Select)',
      '프로젝트(Project)',
      '조인(Join)',
      '디비전(Division)'
    ],
    answer: 2,
    explanation: '조인(Join)은 두 릴레이션에서 조건에 맞는 튜플들을 결합하여 하나의 릴레이션으로 만드는 연산으로, 기호 ⋈를 사용한다.'
  },
  {
    id: 356,
    subject: 'db',
    question: '산술 연산자, 관계 연산자, 논리 연산자를 연산 우선순위가 높은 것부터 순서대로 나열한 것은?',
    options: [
      '산술 연산자 → 관계 연산자 → 논리 연산자',
      '관계 연산자 → 산술 연산자 → 논리 연산자',
      '논리 연산자 → 관계 연산자 → 산술 연산자',
      '산술 연산자 → 논리 연산자 → 관계 연산자'
    ],
    answer: 0,
    explanation: '연산자 우선순위는 산술 연산자가 가장 높고, 그 다음 관계(비교) 연산자, 논리 연산자 순이다.'
  },
  {
    id: 357,
    subject: 'db',
    question: '데이터를 빠르게 찾을 수 있는 수단으로서 테이블에 대한 조회 속도를 높여주며, 테이블의 특정 레코드 위치를 알려주는 용도로 사용하는 자료 구조는?',
    options: [
      '뷰(View)',
      '인덱스(Index)',
      '트리거(Trigger)',
      '커서(Cursor)'
    ],
    answer: 1,
    explanation: '인덱스(Index)는 테이블의 조회 속도를 높이고 특정 레코드의 위치를 알려주는 자료 구조이다.'
  },
  {
    id: 358,
    subject: 'db',
    question: 'TCL(Transaction Control Language)의 명령어 중 COMMIT되지 않은 변경된 모든 내용들을 취소하고 데이터베이스를 이전 상태로 되돌리는 명령어는?',
    options: [
      'COMMIT',
      'ROLLBACK',
      'SAVEPOINT',
      'CHECKPOINT'
    ],
    answer: 1,
    explanation: 'ROLLBACK은 COMMIT되지 않은 변경 내용을 모두 취소하고 데이터베이스를 이전 상태로 되돌려 트랜잭션의 일관성을 지키는 명령어이다.'
  },
  {
    id: 359,
    subject: 'db',
    question: '시스템 그 자체에 관련이 있는 다양한 객체에 관한 메타 데이터(Meta-Data)를 포함하는 시스템 데이터베이스로, 좁은 의미로는 데이터 사전(Data Dictionary)이라고도 불리는 것은?',
    options: [
      '데이터 웨어하우스',
      '시스템 카탈로그',
      '데이터 마트',
      '트랜잭션 로그'
    ],
    answer: 1,
    explanation: '시스템 카탈로그는 DBMS가 지원하는 모든 데이터 객체에 대한 정의와 명세 정보를 유지하는 시스템 데이터베이스로, 데이터 사전이라고도 한다.'
  },
  {
    id: 360,
    subject: 'db',
    question: '다음은 <학생> 테이블로부터 2학년 학생들의 성명, 사진, 학년을 가져와 <출석부> 뷰를 생성하는 SQL문이다. 괄호에 들어갈 예약어는?\n\nCREATE VIEW 출석부 ( ) 성명, 사진, 학년\nFROM 학생\nWHERE 학년 = 2;',
    options: [
      'AS SELECT',
      'IN SELECT',
      'TO SELECT',
      'BY SELECT'
    ],
    answer: 0,
    explanation: '뷰를 생성할 때는 CREATE VIEW 뷰명 AS SELECT ... 형식을 사용하므로 괄호에는 AS SELECT가 들어간다.'
  },
  {
    id: 361,
    subject: 'db',
    question: 'SELECT문의 실행(작동) 순서를 나타낸 다음 괄호에 들어갈 절을 순서대로 짝지은 것은?\n\nFROM → ( ㉠ ) → ( ㉡ ) → ( ㉢ ) → SELECT → ORDER BY',
    options: [
      '㉠ GROUP BY, ㉡ WHERE, ㉢ HAVING',
      '㉠ WHERE, ㉡ GROUP BY, ㉢ HAVING',
      '㉠ HAVING, ㉡ GROUP BY, ㉢ WHERE',
      '㉠ WHERE, ㉡ HAVING, ㉢ GROUP BY'
    ],
    answer: 1,
    explanation: 'SELECT문은 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 순서로 실행된다.'
  },
  {
    id: 362,
    subject: 'db',
    question: '다음 SQL문의 실행 결과는?\n\nSELECT 가격 FROM 도서가격\nWHERE 책번호 = (SELECT 책번호 FROM 도서 WHERE 도서명 = \'데이터베이스\');\n\n[도서]\n책번호 | 도서명\n1111 | 데이터베이스\n2222 | 운영체제\n3333 | 자료구조\n\n[도서가격]\n책번호 | 가격\n1111 | 18000\n2222 | 20000\n3333 | 10000\n4444 | 15000',
    options: [
      '10000',
      '15000',
      '18000',
      '20000'
    ],
    answer: 2,
    explanation: '서브쿼리에서 도서명이 데이터베이스인 책번호 1111을 구하고, 도서가격 테이블에서 책번호 1111의 가격인 18000이 검색된다.'
  },
  {
    id: 363,
    subject: 'db',
    question: '<HRD> 테이블의 생년월일 속성 크기를 6으로 변경하려고 한다. 다음 SQL문의 괄호에 들어갈 명령어는?\n\nALTER TABLE HRD ( ) 생년월일 NUMBER(6);',
    options: [
      'ADD',
      'MODIFY',
      'UPDATE',
      'RENAME'
    ],
    answer: 1,
    explanation: '기존 속성의 정의(크기 등)를 변경할 때는 ALTER TABLE ... MODIFY를 사용한다. ADD는 새 속성을 추가할 때 사용한다.'
  },
  {
    id: 364,
    subject: 'db',
    question: '<topic> 테이블을 기준으로 <auth> 테이블을 결합하되, 왼쪽 테이블의 모든 행을 유지하며 검색하는 다음 SQL문의 괄호에 들어갈 명령은?\n\nSELECT * FROM topic LEFT ( ) auth ON topic.auth_id = auth.id;',
    options: [
      'INNER JOIN',
      'OUTER JOIN',
      'CROSS JOIN',
      'SELF JOIN'
    ],
    answer: 1,
    explanation: '왼쪽 테이블의 모든 행을 유지하는 결합은 LEFT OUTER JOIN이므로 괄호에는 OUTER JOIN이 들어간다.'
  },
  {
    id: 365,
    subject: 'db',
    question: '<회원> 테이블 생성 후 주소 속성이 누락된 것을 발견하여 속성을 추가하려고 한다. 다음 SQL문의 괄호에 들어갈 명령어는?\n\nALTER TABLE 회원 ( ) 주소 CHAR(30);',
    options: [
      'MODIFY',
      'INSERT',
      'ADD',
      'APPEND'
    ],
    answer: 2,
    explanation: '기존 테이블에 새로운 속성을 추가할 때는 ALTER TABLE ... ADD를 사용한다.'
  },
  {
    id: 366,
    subject: 'db',
    question: '아래 두 릴레이션 <단가표>와 <주변기기 판매표>에서 외래키(Foreign Key)로 사용된 속성은?\n\n[단가표]\n제품코드 | 제품명 | 단가\nA001 | 마우스 | 25,000\nA002 | 키보드 | 30,000\nA003 | 스피커 | 35,000\n\n[주변기기 판매표]\n판매일자 | 제품코드 | 제품명 | 판매수량 | 판매금액\n21/1/2 | A001 | 마우스 | 7 | 175,000\n21/1/3 | A002 | 키보드 | 12 | 360,000\n21/1/4 | A001 | 마우스 | 8 | 200,000',
    options: [
      '판매일자',
      '제품명',
      '제품코드',
      '판매수량'
    ],
    answer: 2,
    explanation: '주변기기 판매표의 제품코드는 단가표의 기본키인 제품코드를 참조하는 외래키이다.'
  },
  {
    id: 367,
    subject: 'db',
    question: '다음 테이블을 참고할 때 아래 SQL문의 실행 결과로 검색되는 (성명, 전화번호) 튜플이 아닌 것은?\n\nSELECT 회원.성명, 회원.전화번호 FROM 회원, 대여\nWHERE 회원.회원번호 = 대여.회원번호 AND 대여.테이프번호 = \'T3\';\n\n[회원]\n회원번호 | 성명 | 전화번호\nS1 | 이동국 | 111-1111\nS2 | 홍길동 | 222-2222\nS3 | 이동국 | 333-3333\nS4 | 박찬성 | 444-4444\nS5 | 성춘향 | 555-5555\n\n[대여]\n회원번호 | 성명 | 테이프번호\nS1 | 이동국 | T2\nS1 | 이동국 | T3\nS2 | 홍길동 | T4\nS3 | 이동국 | T1\nS3 | 이동국 | T3\nS4 | 박찬성 | T3\nS5 | 성춘향 | T5',
    options: [
      '이동국, 111-1111',
      '이동국, 333-3333',
      '박찬성, 444-4444',
      '홍길동, 222-2222'
    ],
    answer: 3,
    explanation: '테이프번호 T3를 대여한 회원번호는 S1, S3, S4이므로 이동국(111-1111), 이동국(333-3333), 박찬성(444-4444)이 검색되며, 홍길동은 T3를 대여하지 않아 검색되지 않는다.'
  },
  {
    id: 368,
    subject: 'db',
    question: '학생 테이블에서 ID가 01인 레코드를 삭제하는 다음 SQL문의 괄호에 들어갈 명령어는?\n\nDELETE FROM 학생 ( ) ID = \'01\';',
    options: [
      'HAVING',
      'WHERE',
      'IF',
      'ON'
    ],
    answer: 1,
    explanation: 'DELETE문에서 삭제할 레코드의 조건은 WHERE 절로 지정한다.'
  },
  {
    id: 369,
    subject: 'db',
    question: '<student>, <score> 두 테이블을 no 속성으로 연결하여 검색하는 다음 SQL문의 괄호에 들어갈 명령어는?\n\nSELECT no, s_name, depart, score FROM test00.student, test00.score\n( ) test00.student.no = test00.score.no;',
    options: [
      'WHERE',
      'GROUP BY',
      'HAVING',
      'ORDER BY'
    ],
    answer: 0,
    explanation: 'FROM 절에 두 테이블을 나열하는 조인에서는 WHERE 절에 조인 조건을 기술한다.'
  },
  {
    id: 370,
    subject: 'db',
    question: '<고객> 테이블에서 주소가 안산시인 고객들의 성명과 전화번호를 <안산고객>이라는 뷰로 정의하는 SQL문으로 올바른 것은?',
    options: [
      'CREATE VIEW 안산고객(성명, 전화번호) AS SELECT 성명, 전화번호 FROM 고객 WHERE 주소 = \'안산시\'',
      'CREATE DOMAIN 안산고객(성명, 전화번호) AS SELECT 성명, 전화번호 FROM 고객 WHERE 주소 = \'안산시\'',
      'CREATE INDEX 안산고객(성명, 전화번호) AS SELECT 성명, 전화번호 FROM 고객 WHERE 주소 = \'안산시\'',
      'CREATE VIEW 안산고객(성명, 전화번호) SELECT 성명, 전화번호 FROM 고객 WHERE 주소 = \'안산시\''
    ],
    answer: 0,
    explanation: '뷰 생성은 CREATE VIEW 뷰명(속성...) AS SELECT ... 형식을 사용하며, AS가 누락되거나 DOMAIN·INDEX를 사용한 것은 잘못된 문장이다.'
  },
  {
    id: 371,
    subject: 'db',
    question: '학생 테이블의 학과 속성값을 오름차순 정렬하여 중복을 허용하지 않는 stud_idx라는 이름의 인덱스를 정의하는 다음 SQL문의 괄호에 들어갈 명령어는?\n\nCREATE UNIQUE ( ) stud_idx ON 학생(학과 ASC);',
    options: [
      'VIEW',
      'INDEX',
      'TABLE',
      'KEY'
    ],
    answer: 1,
    explanation: '인덱스 생성 구문은 CREATE [UNIQUE] INDEX 인덱스명 ON 테이블(속성) 형식이므로 괄호에는 INDEX가 들어간다.'
  },
  {
    id: 372,
    subject: 'db',
    question: '하나의 테이블에서 다른 테이블을 참조하기 위해 사용되는 속성으로, 참조되는 릴레이션의 기본키에 없는 값은 입력할 수 없도록 하여 개체 식별의 오류를 막는 제약과 관련된 키는?',
    options: [
      '기본키(Primary Key)',
      '후보키(Candidate Key)',
      '외래키(Foreign Key)',
      '슈퍼키(Super Key)'
    ],
    answer: 2,
    explanation: '외래키(Foreign Key)는 다른 릴레이션의 기본키를 참조하는 속성으로, 참조 무결성 제약 조건에 의해 참조 릴레이션의 기본키에 없는 값은 입력할 수 없다.'
  },
  {
    id: 373,
    subject: 'db',
    question: '학생 테이블의 기본키인 학생번호 속성에 대해, 중복되는 값이 없는 속성으로 인덱스를 생성하도록 다음 SQL문의 괄호에 들어갈 명령어는?\n\nCREATE ( ) INDEX 학생번호_tb ON 학생(학생번호 ASC);',
    options: [
      'ONLY',
      'UNIQUE',
      'PRIMARY',
      'DISTINCT'
    ],
    answer: 1,
    explanation: '중복 값을 허용하지 않는 인덱스는 CREATE UNIQUE INDEX 구문으로 생성한다.'
  },
  {
    id: 374,
    subject: 'db',
    question: '성적 테이블에서 점수가 NULL인 학생의 이름을 조회하는 다음 SQL문의 괄호에 들어갈 조건으로 옳은 것은?\n\nSELECT 이름 FROM 성적 WHERE ( );',
    options: [
      '점수 = NULL',
      '점수 == NULL',
      '점수 IS NULL',
      '점수 EQ NULL'
    ],
    answer: 2,
    explanation: 'NULL 값은 = 연산자로 비교할 수 없으며, IS NULL 연산자를 사용해야 한다.'
  },
  {
    id: 375,
    subject: 'db',
    question: '성적 테이블에서 점수를 내림차순으로 정렬하여 이름, 과목, 점수를 조회하는 다음 SQL문의 괄호에 들어갈 명령을 순서대로 짝지은 것은?\n\nSELECT 이름, 과목, 점수 FROM 성적 ( ㉠ ) 점수 ( ㉡ );',
    options: [
      '㉠ GROUP BY, ㉡ ASC',
      '㉠ ORDER BY, ㉡ ASC',
      '㉠ ORDER BY, ㉡ DESC',
      '㉠ SORT BY, ㉡ DESC'
    ],
    answer: 2,
    explanation: '정렬은 ORDER BY 절을 사용하며, 내림차순은 DESC로 지정한다.'
  },
  {
    id: 376,
    subject: 'db',
    question: '학번, 이름, 학과, 학년 속성으로 구성된 학생 테이블에 새로운 학생을 추가하는 다음 SQL문의 괄호에 들어갈 명령을 순서대로 짝지은 것은?\n\nINSERT ( ㉠ ) 학생 ( ㉡ ) (20210403, \'한다맨\', \'정보처리\', 1);',
    options: [
      '㉠ INTO, ㉡ VALUES',
      '㉠ IN, ㉡ VALUES',
      '㉠ INTO, ㉡ SET',
      '㉠ TO, ㉡ DATA'
    ],
    answer: 0,
    explanation: '레코드 삽입은 INSERT INTO 테이블 VALUES (값 목록) 형식을 사용한다.'
  },
  {
    id: 377,
    subject: 'db',
    question: '다음 <대여> 테이블에 대한 SQL문의 검색 결과는?\n\nSELECT DISTINCT 성명 FROM 대여 WHERE 회원번호 = \'S1\';\n\n[대여]\n회원번호 | 성명 | 테이프번호\nS1 | 이동국 | T2\nS1 | 이동국 | T3\nS2 | 홍길동 | T4\nS3 | 한다맨 | T1',
    options: [
      '이동국이 2행 검색된다',
      '이동국이 1행 검색된다',
      '이동국, 홍길동이 검색된다',
      '아무것도 검색되지 않는다'
    ],
    answer: 1,
    explanation: '회원번호 S1인 행은 2건이지만 DISTINCT에 의해 중복이 제거되어 이동국 1행만 검색된다.'
  },
  {
    id: 378,
    subject: 'db',
    question: '다음 <사원> 테이블에 대한 SQL문의 검색 결과로 옳은 것은?\n\nSELECT 성명 FROM 사원 WHERE 부서 = \'2강의실\'\nUNION ALL\nSELECT 성명 FROM 사원 WHERE 직급 = \'강사\';\n\n[사원]\n사번 | 성명 | 부서 | 직급 | 담당과목\n9909 | 김흥식 | 1강의실 | 원장 | 정보처리\n1703 | 추연국 | 3강의실 | 강사 | 그래픽스\n1912 | 유달님 | 2강의실 | 강사 | 일러스트',
    options: [
      '유달님, 추연국',
      '유달님, 추연국, 유달님',
      '추연국, 유달님',
      '김흥식, 추연국, 유달님'
    ],
    answer: 1,
    explanation: '첫 번째 질의 결과는 유달님, 두 번째 질의 결과는 추연국·유달님이며, UNION ALL은 중복을 제거하지 않으므로 유달님, 추연국, 유달님 3행이 검색된다.'
  },
  {
    id: 379,
    subject: 'db',
    question: '<학생> 테이블에서 이름이 한다맨인 튜플을 삭제하는 SQL문의 괄호에 들어갈 명령을 순서대로 짝지은 것은?\n\n( ㉠ ) ( ㉡ ) 학생 WHERE 이름 = \'한다맨\';',
    options: [
      '㉠ DROP, ㉡ TABLE',
      '㉠ DELETE, ㉡ FROM',
      '㉠ REMOVE, ㉡ FROM',
      '㉠ TRUNCATE, ㉡ TABLE'
    ],
    answer: 1,
    explanation: '특정 조건의 튜플(레코드) 삭제는 DELETE FROM 테이블 WHERE 조건 형식을 사용한다.'
  },
  {
    id: 380,
    subject: 'db',
    question: '다음 SQL문의 실행 결과로 검색되는 마지막 행(세 번째 행)은?\n\nSELECT 도서번호, 도서명, 저자 FROM 도서\nWHERE 도서번호 IN (SELECT 도서번호 FROM 도서가격 WHERE 가격 >= 18000);\n\n[도서]\n도서번호 | 도서명 | 저자\n1 | 정보처리기능사 | 한다맨\n2 | 컴퓨터활용능력 | 추연국\n3 | 워드프로세서 | 유달님\n4 | 그래픽스실기 | 김흥식\n5 | 웹디자인실기 | 추연국\n\n[도서가격]\n도서번호 | 가격\n1 | 28000\n2 | 30000\n3 | 18000\n4 | 16000\n5 | 14000',
    options: [
      '3, 워드프로세서, 유달님',
      '4, 그래픽스실기, 김흥식',
      '5, 웹디자인실기, 추연국',
      '2, 컴퓨터활용능력, 추연국'
    ],
    answer: 0,
    explanation: '가격이 18000 이상인 도서번호는 1, 2, 3이므로 결과는 세 행이며, 마지막 행은 (3, 워드프로세서, 유달님)이다.'
  },
  {
    id: 381,
    subject: 'db',
    question: '<학생> 테이블의 name 속성을 이용하여 idx_name이라는 인덱스를 생성하는 다음 SQL문의 괄호에 들어갈 명령어는?\n\nCREATE INDEX idx_name ( ) 학생(name);',
    options: [
      'AT',
      'IN',
      'ON',
      'FOR'
    ],
    answer: 2,
    explanation: '인덱스 생성 시 대상 테이블과 속성은 ON 테이블명(속성명) 형식으로 지정한다.'
  },
  // ===== sys-integration (프로그래밍 언어 활용) 문제집 추가 : 382~445 =====
  {
    id: 382,
    subject: 'sys-integration',
    question: 'C언어에서의 변수 선언으로 틀린 것은?',
    options: [
      'int else;',
      'int Test2;',
      'int pc;',
      'int True;'
    ],
    answer: 0,
    explanation: 'else는 if문에서 사용하는 예약어로, C언어에서는 예약어를 변수의 이름으로 사용할 수 없다.'
  },
  {
    id: 383,
    subject: 'sys-integration',
    question: '페이징 기법에서 페이지 크기가 작아질수록 발생하는 현상이 아닌 것은?',
    options: [
      '기억장소 이용 효율이 증가한다',
      '입·출력 시간이 늘어난다',
      '내부 단편화가 감소한다',
      '페이지 맵 테이블의 크기가 감소한다'
    ],
    answer: 3,
    explanation: '페이지 크기가 작아질수록 페이지의 개수가 많아져 주소를 저장하는 페이지 맵 테이블의 크기는 오히려 커진다.'
  },
  {
    id: 384,
    subject: 'sys-integration',
    question: 'RIP 라우팅 프로토콜에 대한 설명으로 틀린 것은?',
    options: [
      '경로 선택 메트릭은 홉 카운트(hop count)이다',
      '라우팅 프로토콜을 IGP와 EGP로 분류했을 때 EGP에 해당한다',
      '최단 경로 탐색에 Bellman-Ford 알고리즘을 사용한다',
      '각 라우터는 이웃 라우터들로부터 수신한 정보를 이용하여 라우팅 표를 갱신한다'
    ],
    answer: 1,
    explanation: 'RIP는 자율 시스템(AS) 내부에서 사용하는 IGP(내부 게이트웨이 프로토콜)에 해당한다.'
  },
  {
    id: 385,
    subject: 'sys-integration',
    question: 'IP 주소 체계와 관련한 설명으로 틀린 것은?',
    options: [
      'IPv6의 패킷 헤더는 32 octet의 고정된 길이를 가진다',
      'IPv6는 주소 자동설정(Auto Configuration) 기능을 통해 손쉽게 이용자의 단말을 네트워크에 접속시킬 수 있다',
      'IPv4는 호스트 주소를 자동으로 설정하며 유니캐스트(Unicast)를 지원한다',
      'IPv4는 클래스별로 네트워크와 호스트 주소의 길이가 다르다'
    ],
    answer: 0,
    explanation: 'IPv6의 패킷 헤더는 32옥텟이 아니라 40옥텟(octet)의 고정된 길이를 갖는다.'
  },
  {
    id: 386,
    subject: 'sys-integration',
    question: 'UNIX 운영체제에 관한 특징으로 틀린 것은?',
    options: [
      '하나 이상의 작업에 대하여 백그라운드에서 수행이 가능하다',
      'Multi-User는 지원하지만 Multi-Tasking은 지원하지 않는다',
      '트리 구조의 파일 시스템을 갖는다',
      '이식성이 높으며 장치 간의 호환성이 높다'
    ],
    answer: 1,
    explanation: 'UNIX는 다중 사용자(Multi-User)와 다중 작업(Multi-Tasking)을 모두 지원하는 운영체제이다.'
  },
  {
    id: 387,
    subject: 'sys-integration',
    question: 'JAVA에서 변수와 자료형에 대한 설명으로 틀린 것은?',
    options: [
      '변수는 어떤 값을 주기억장치에 기억하기 위해서 사용하는 공간이다',
      '변수의 자료형에 따라 저장할 수 있는 값의 종류와 범위가 달라진다',
      'char 자료형은 나열된 여러 개의 문자를 저장하고자 할 때 사용한다',
      'boolean 자료형은 조건이 참인지 거짓인지 판단하고자 할 때 사용한다'
    ],
    answer: 2,
    explanation: 'char 자료형은 문자 한 글자를 저장할 때 사용하며, 여러 문자를 저장하려면 String을 사용한다.'
  },
  {
    id: 388,
    subject: 'sys-integration',
    question: 'UNIX 시스템의 쉘(Shell)의 주요 기능에 대한 설명이 아닌 것은?',
    options: [
      '사용자 명령을 해석하고 커널로 전달하는 기능을 제공한다',
      '반복적인 명령 프로그램을 만드는 프로그래밍 기능을 제공한다',
      '쉘 프로그램 실행을 위해 프로세스와 메모리를 관리한다',
      '초기화 파일을 이용해 사용자 환경을 설정하는 기능을 제공한다'
    ],
    answer: 2,
    explanation: '프로세스와 메모리를 관리하는 것은 쉘이 아니라 커널(Kernel)의 기능이다.'
  },
  {
    id: 389,
    subject: 'sys-integration',
    question: '프로세스 적재 정책과 관련한 설명으로 틀린 것은?',
    options: [
      '반복, 스택, 부프로그램은 시간 지역성(Temporal Locality)과 관련이 있다',
      '공간 지역성(Spatial Locality)은 프로세스가 어떤 페이지를 참조했다면 이후 가상주소 공간상 그 페이지와 인접한 페이지들을 참조할 가능성이 높음을 의미한다',
      '일반적으로 페이지 교환에 보내는 시간보다 프로세스 수행에 보내는 시간이 더 크면 스레싱(Thrashing)이 발생한다',
      '스레싱(Thrashing) 현상을 방지하기 위해서는 각 프로세스가 필요로 하는 프레임을 제공할 수 있어야 한다'
    ],
    answer: 2,
    explanation: '스래싱은 프로세스의 처리 시간보다 페이지 교체에 소요되는 시간이 더 많아지는 현상이다.'
  },
  {
    id: 390,
    subject: 'sys-integration',
    question: 'TCP 헤더와 관련한 설명으로 틀린 것은?',
    options: [
      '순서 번호(Sequence Number)는 전달하는 바이트마다 번호가 부여된다',
      '수신 번호 확인(Acknowledgement Number)은 상대편 호스트에서 받으려는 바이트의 번호를 정의한다',
      '체크섬(Checksum)은 데이터를 포함한 세그먼트의 오류를 검사한다',
      '윈도우 크기는 송수신 측의 버퍼 크기로 최대 크기는 32767bit이다'
    ],
    answer: 3,
    explanation: 'TCP 헤더에서 윈도우의 최대 크기는 65,535byte이다.'
  },
  {
    id: 391,
    subject: 'sys-integration',
    question: 'JAVA의 예외(Exception)와 관련한 설명으로 틀린 것은?',
    options: [
      '문법 오류로 인해 발생한 것',
      '오동작이나 결과에 악영향을 미칠 수 있는 실행 시간 동안에 발생한 오류',
      '배열의 인덱스가 그 범위를 넘어서는 경우 발생하는 오류',
      '존재하지 않는 파일을 읽으려고 하는 경우에 발생하는 오류'
    ],
    answer: 0,
    explanation: '예외는 실행 중에 발생할 수 있는 상황들을 대비한 것으로, 문법 오류는 코드가 실행조차 되지 않으므로 예외로 처리할 수 없다.'
  },
  {
    id: 392,
    subject: 'sys-integration',
    question: 'TCP 프로토콜에 대한 설명으로 거리가 먼 것은?',
    options: [
      '신뢰성이 있는 연결 지향형 전달 서비스이다',
      '기본 헤더 크기는 100byte이고 160byte까지 확장 가능하다',
      '스트림 전송 기능을 제공한다',
      '순서 제어, 오류 제어, 흐름 제어 기능을 제공한다'
    ],
    answer: 1,
    explanation: 'TCP 프로토콜 헤더의 크기는 20~60byte이며, 기본 헤더가 100byte라는 설명은 잘못되었다.'
  },
  {
    id: 393,
    subject: 'sys-integration',
    question: 'IPv6에 대한 설명으로 틀린 것은?',
    options: [
      '32비트의 주소 체계를 사용한다',
      '멀티미디어의 실시간 처리가 가능하다',
      'IPv4보다 보안성이 강화되었다',
      '자동으로 네트워크 환경 구성이 가능하다'
    ],
    answer: 0,
    explanation: 'IPv6의 주소 체계는 16비트씩 8부분, 총 128비트로 구성되어 있다.'
  },
  {
    id: 394,
    subject: 'sys-integration',
    question: '파이썬의 변수 작성 규칙 설명으로 옳지 않은 것은?',
    options: [
      '첫 자리에 숫자를 사용할 수 없다',
      '영문 대문자/소문자, 숫자, 밑줄(_)의 사용이 가능하다',
      '변수 이름의 중간에 공백을 사용할 수 있다',
      '이미 사용되고 있는 예약어는 사용할 수 없다'
    ],
    answer: 2,
    explanation: '파이썬 변수 이름의 중간에는 공백을 넣을 수 없다.'
  },
  {
    id: 395,
    subject: 'sys-integration',
    question: 'C언어에서 사용할 수 없는 변수명은?',
    options: [
      'student2019',
      'text-color',
      '_korea',
      'amount'
    ],
    answer: 1,
    explanation: 'C언어 변수명에는 공백이나 *, +, -, / 등의 특수문자를 사용할 수 없으므로 하이픈(-)이 포함된 text-color는 사용할 수 없다.'
  },
  {
    id: 396,
    subject: 'sys-integration',
    question: '다음 중 HRN에 대한 설명으로 옳지 않은 것은?',
    options: [
      '대기 시간과 서비스 시간을 이용하는 방법이다',
      '대기 시간이 긴 프로세스일 경우 우선순위가 높다',
      '우선순위 계산식 값이 낮을수록 우선순위가 높다',
      'SJF 기법을 보완하기 위한 스케줄링 방법이다'
    ],
    answer: 2,
    explanation: 'HRN 기법은 (대기 시간 + 서비스 시간) / 서비스 시간으로 우선순위를 계산하며, 계산식 값이 클수록 우선순위가 높다.'
  },
  {
    id: 397,
    subject: 'sys-integration',
    question: '프로세스와 관련한 설명으로 틀린 것은?',
    options: [
      '프로세스가 준비 상태에서 프로세서가 배당되어 실행 상태로 변화하는 것을 디스패치(Dispatch)라고 한다',
      '프로세스 제어 블록(PCB, Process Control Block)은 프로세스 식별자, 프로세스 상태 등의 정보로 구성된다',
      '이전 프로세스의 상태 레지스터 내용을 보관하고 다른 프로세스의 레지스터를 적재하는 과정을 문맥 교환(Context Switching)이라고 한다',
      '프로세스는 스레드(Thread) 내에서 실행되는 흐름의 단위이며, 스레드와 달리 주소 공간에 실행 스택(Stack)이 없다'
    ],
    answer: 3,
    explanation: '스레드가 프로세스 내에서 실행되는 흐름(작업)의 단위이며, 설명이 서로 바뀌었다.'
  },
  {
    id: 398,
    subject: 'sys-integration',
    question: 'IPv6에 대한 특성으로 틀린 것은?',
    options: [
      '표시 방법은 8비트씩 4부분의 10진수로 표시한다',
      '2의 128제곱 개의 주소를 표현할 수 있다',
      '등급별, 서비스별로 패킷을 구분할 수 있어 품질 보장이 용이하다',
      '확장 기능을 통해 보안 기능을 제공한다'
    ],
    answer: 0,
    explanation: '8비트씩 4부분의 10진수 표기는 IPv4의 표시 방법이며, IPv6는 16비트씩 8부분을 16진수로 표현한다.'
  },
  {
    id: 399,
    subject: 'sys-integration',
    question: '파일 디스크립터(File Descriptor)에 대한 설명으로 틀린 것은?',
    options: [
      '파일 관리를 위해 시스템이 필요로 하는 정보를 가지고 있다',
      '보조기억장치에 저장되어 있다가 파일이 개방(open)되면 주기억장치로 이동된다',
      '사용자가 파일 디스크립터를 직접 참조할 수 있다',
      '파일 제어 블록(File Control Block)이라고도 한다'
    ],
    answer: 2,
    explanation: '파일 디스크립터는 시스템이 관리하는 정보로, 사용자가 직접 참조할 수 없다.'
  },
  {
    id: 400,
    subject: 'sys-integration',
    question: 'UDP 프로토콜의 특징이 아닌 것은?',
    options: [
      '비연결형 서비스를 제공한다',
      '단순한 헤더 구조로 오버헤드가 적다',
      '주로 주소를 지정하고, 경로를 설정하는 기능을 한다',
      'TCP와 같이 트랜스포트 계층에 존재한다'
    ],
    answer: 2,
    explanation: '주소 지정과 경로 설정은 네트워크 계층의 IP(Internet Protocol)에 대한 설명이다.'
  },
  {
    id: 401,
    subject: 'sys-integration',
    question: '라이브러리의 개념과 구성에 대한 설명 중 틀린 것은?',
    options: [
      '라이브러리란 필요할 때 찾아서 쓸 수 있도록 모듈화되어 제공되는 프로그램을 말한다',
      '프로그래밍 언어에 따라 일반적으로 도움말, 설치 파일, 샘플 코드 등을 제공한다',
      '외부 라이브러리는 프로그래밍 언어가 기본적으로 가지고 있는 라이브러리를 의미하며, 표준 라이브러리는 별도의 파일 설치를 필요로 하는 라이브러리를 의미한다',
      '라이브러리는 모듈과 패키지를 총칭하며, 모듈이 개별 파일이라면 패키지는 파일들을 모아 놓은 폴더라고 볼 수 있다'
    ],
    answer: 2,
    explanation: '언어가 기본적으로 가지고 있는 것이 표준 라이브러리이고, 별도의 설치가 필요한 것이 외부 라이브러리로, 설명이 서로 바뀌었다.'
  },
  {
    id: 402,
    subject: 'sys-integration',
    question: 'C언어에서 malloc() 함수에 대한 설명으로 틀린 것은?',
    options: [
      '원하는 시점에 원하는 만큼 메모리를 동적으로 할당한다',
      '사용자가 입력한 bit만큼 메모리를 할당한다',
      'free 명령어로 할당된 메모리를 해제한다',
      '메모리 할당이 불가능할 경우 NULL이 반환된다'
    ],
    answer: 1,
    explanation: 'malloc() 함수는 bit가 아니라 입력한 Byte만큼 메모리를 할당한다.'
  },
  {
    id: 403,
    subject: 'sys-integration',
    question: 'IP 프로토콜의 주요 특징에 해당하지 않는 것은?',
    options: [
      '체크섬(Checksum) 기능으로 데이터 체크섬(Data Checksum)만 제공한다',
      '패킷을 분할, 병합하는 기능을 수행하기도 한다',
      '비연결형 서비스를 제공한다',
      'Best Effort 원칙에 따른 전송 기능을 제공한다'
    ],
    answer: 0,
    explanation: 'IP는 데이터 체크섬이 아니라 헤더 체크섬(Header Checksum)만 제공한다.'
  },
  {
    id: 404,
    subject: 'sys-integration',
    question: 'OSI 7계층 중 네트워크 계층에 대한 설명으로 틀린 것은?',
    options: [
      '패킷을 발신지로부터 최종 목적지까지 전달하는 책임을 진다',
      '한 노드로부터 다른 노드로 프레임을 전송하는 책임을 진다',
      '패킷에 발신지와 목적지의 논리 주소를 추가한다',
      '라우터 또는 교환기는 패킷 전달을 위해 경로를 지정하거나 교환 기능을 제공한다'
    ],
    answer: 1,
    explanation: '네트워크 계층의 프로토콜 데이터 단위(PDU)는 패킷이며, 노드 간 프레임 전송은 데이터 링크 계층의 책임이다.'
  },
  {
    id: 405,
    subject: 'sys-integration',
    question: 'TCP 프로토콜과 관련한 설명으로 틀린 것은?',
    options: [
      '인접한 노드 사이의 프레임 전송 및 오류를 제어한다',
      '흐름 제어(Flow Control)의 기능을 수행한다',
      '전이중(Full Duplex) 방식의 양방향 가상 회선을 제공한다',
      '전송 데이터와 응답 데이터를 함께 전송할 수 있다'
    ],
    answer: 0,
    explanation: 'TCP는 패킷(세그먼트)의 전송 및 오류를 제어하며, 인접 노드 간 프레임의 전송·오류 제어는 데이터 링크 계층 프로토콜(HDLC, LLC, MAC 등)이 수행한다.'
  },
  {
    id: 406,
    subject: 'sys-integration',
    question: 'IPv6에 대한 설명으로 틀린 것은?',
    options: [
      '멀티캐스팅(Multicast) 대신 브로드캐스트(Broadcast)를 사용한다',
      '보안과 인증 확장 헤더를 사용함으로써 인터넷 계층의 보안 기능을 강화하였다',
      '애니캐스트(Anycast)는 하나의 호스트에서 그룹 내의 가장 가까운 곳에 있는 수신자에게 전달하는 방식이다',
      '128비트 주소 체계를 사용한다'
    ],
    answer: 0,
    explanation: 'IPv6는 브로드캐스트를 사용하지 않으며 유니캐스트, 멀티캐스트, 애니캐스트의 3가지 주소 체계를 사용한다.'
  },
  {
    id: 407,
    subject: 'sys-integration',
    question: '리눅스 Bash 쉘(Shell)에서 export와 관련한 설명으로 틀린 것은?',
    options: [
      '변수를 출력하고자 할 때는 export를 사용해야 한다',
      'export가 매개 변수 없이 쓰일 경우 현재 설정된 환경 변수들이 출력된다',
      '사용자가 생성하는 변수는 export 명령어로 표시하지 않는 한 현재 쉘에 국한된다',
      '변수를 export 시키면 전역(Global) 변수처럼 되어 끝까지 기억된다'
    ],
    answer: 0,
    explanation: 'export는 변수 출력용 명령이 아니라 환경 변수의 값을 변경하거나 새로운 환경 변수를 설정할 때 사용하는 명령어이다. 변수 출력에는 echo 등을 사용한다.'
  },
  {
    id: 408,
    subject: 'sys-integration',
    question: '운영체제에 대한 설명으로 거리가 먼 것은?',
    options: [
      '다중 사용자와 다중 응용 프로그램 환경 하에서 자원의 현재 상태를 파악하고 자원 분배를 위한 스케줄링을 담당한다',
      'CPU, 메모리 공간, 기억 장치, 입출력 장치 등의 자원을 관리한다',
      '운영체제의 종류로는 매크로 프로세서, 어셈블러, 컴파일러 등이 있다',
      '입·출력장치와 사용자 프로그램을 제어한다'
    ],
    answer: 2,
    explanation: '매크로 프로세서, 어셈블러, 컴파일러는 언어 번역 프로그램이며, 운영체제의 종류에는 Windows, Unix/Linux, MacOS, Android 등이 있다.'
  },
  {
    id: 409,
    subject: 'sys-integration',
    question: '다음 중 IP 버전에 대한 설명 중 틀린 것은?',
    options: [
      'IPv4는 각 부분을 옥텟으로 구성, 총 32비트로 구성된다',
      'IPv6는 각 부분을 콜론으로 구분한다',
      'IPv4는 네트워크 부분의 길이에 따라 A 클래스에서 E 클래스까지 총 5단계로 구성되어 있다',
      'IPv6는 IPv4에 비해 자료 전송 속도가 느리다'
    ],
    answer: 3,
    explanation: 'IPv6는 IPv4에 비해 헤더가 단순화되어 자료 전송 속도가 빠르다.'
  },
  {
    id: 410,
    subject: 'sys-integration',
    question: 'Windows 파일 시스템인 FAT와 비교했을 때의 NTFS의 특징이 아닌 것은?',
    options: [
      '보안에 취약',
      '대용량 볼륨에 효율적',
      '자동 압축 및 안정성',
      '저용량 볼륨에서의 속도 저하'
    ],
    answer: 0,
    explanation: 'NTFS는 FAT에 비해 성능, 보안, 안정성 면에서 뛰어나므로 보안에 취약하다는 설명은 옳지 않다.'
  },
  {
    id: 411,
    subject: 'sys-integration',
    question: '라우팅 프로토콜인 OSPF(Open Shortest Path First)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '네트워크 변화에 신속하게 대처할 수 있다',
      '거리 벡터 라우팅 프로토콜이라고 한다',
      '멀티캐스팅을 지원한다',
      '최단 경로 탐색에 Dijkstra 알고리즘을 사용한다'
    ],
    answer: 1,
    explanation: 'OSPF는 링크 상태(Link State) 라우팅 프로토콜이며, 거리 벡터 라우팅 프로토콜이라고 불리는 것은 RIP이다.'
  },
  {
    id: 412,
    subject: 'sys-integration',
    question: 'RIP(Routing Information Protocol)에 대한 설명으로 틀린 것은?',
    options: [
      '거리 벡터 라우팅 프로토콜이라고도 한다',
      '소규모 네트워크 환경에 적합하다',
      '최대 홉 카운트를 115홉 이하로 한정하고 있다',
      '최단 경로 탐색에는 Bellman-Ford 알고리즘을 사용한다'
    ],
    answer: 2,
    explanation: 'RIP의 최대 홉(Hop) 수는 115가 아니라 15이다.'
  },
  {
    id: 413,
    subject: 'sys-integration',
    question: 'C Class에 속하는 IP address는?',
    options: [
      '200.168.30.1',
      '10.3.2.14',
      '225.2.4.1',
      '172.16.98.3'
    ],
    answer: 0,
    explanation: 'C Class의 IP 주소 범위는 192.0.0.0 ~ 223.255.255.255이므로 200.168.30.1이 해당한다. 10.x는 A 클래스, 172.16.x는 B 클래스, 225.x는 D 클래스이다.'
  },
  {
    id: 414,
    subject: 'sys-integration',
    question: '스레드(Thread)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '한 개의 프로세스는 여러 개의 스레드를 가질 수 없다',
      '커널 스레드의 경우 운영체제에 의해 스레드를 운용한다',
      '사용자 스레드의 경우 사용자가 만든 라이브러리를 사용하여 스레드를 운용한다',
      '스레드를 사용함으로써 하드웨어, 운영체제의 성능과 응용 프로그램의 처리율을 향상시킬 수 있다'
    ],
    answer: 0,
    explanation: '한 개의 프로세스는 여러 개의 스레드를 가질 수 있다(멀티스레드).'
  },
  {
    id: 415,
    subject: 'sys-integration',
    question: '사용자 수준에서 지원되는 스레드(Thread)가 커널에서 지원되는 스레드에 비해 가지는 장점으로 옳은 것은?',
    options: [
      '한 프로세스가 운영체제를 호출할 때 전체 프로세스가 대기할 필요가 없으므로 시스템 성능을 높일 수 있다',
      '동시에 여러 스레드가 커널에 접근할 수 있으므로 여러 스레드가 시스템 호출을 동시에 사용할 수 있다',
      '각 스레드를 개별적으로 관리할 수 있으므로 스레드의 독립적인 스케줄링이 가능하다',
      '커널 모드로의 전환 없이 스레드 교환이 가능하므로 오버헤드가 줄어든다'
    ],
    answer: 3,
    explanation: '사용자 수준 스레드는 커널 모드로의 전환 없이 스레드 교환이 가능하여 오버헤드가 적다. 나머지는 커널 수준 스레드의 장점에 대한 설명이다.'
  },
  {
    id: 416,
    subject: 'sys-integration',
    question: 'UDP 특성에 해당되는 것은?',
    options: [
      '양방향 연결형 서비스를 제공한다',
      '송신 중에 링크를 유지 관리하므로 신뢰성이 높다',
      '순서 제어, 오류 제어, 흐름 제어 기능을 한다',
      '흐름 제어나 순서 제어가 없어 전송 속도가 빠르다'
    ],
    answer: 3,
    explanation: 'UDP는 비연결형 서비스로 흐름 제어나 순서 제어가 없어 전송 속도가 빠르며, 신뢰성보다 속도가 중요한 네트워크에서 사용된다.'
  },
  {
    id: 417,
    subject: 'sys-integration',
    question: '운영체제 시스템의 발전 과정을 순서대로 올바르게 나열한 것은?',
    options: [
      '일괄처리 → 다중처리 → 범용 → 분산처리',
      '범용 → 일괄처리 → 다중처리 → 분산처리',
      '분산처리 → 다중처리 → 일괄처리 → 범용',
      '일괄처리 → 분산처리 → 범용 → 다중처리'
    ],
    answer: 0,
    explanation: '운영체제 시스템은 일괄처리 시스템에서 시작하여 다중처리, 범용 시스템을 거쳐 분산처리 시스템으로 발전하였다.'
  },
  {
    id: 418,
    subject: 'sys-integration',
    question: '운영체제의 운영 방식을 발달 순서대로 올바르게 나열한 것은?',
    options: [
      '시분할처리 → 일괄처리 → 다중모드 → 분산처리',
      '일괄처리 → 시분할처리 → 다중모드 → 분산처리',
      '일괄처리 → 다중모드 → 시분할처리 → 분산처리',
      '다중모드 → 일괄처리 → 시분할처리 → 분산처리'
    ],
    answer: 1,
    explanation: '운영체제 운영 방식은 일괄처리, 시분할처리, 다중모드, 분산처리의 순서로 발달하였다.'
  },
  {
    id: 419,
    subject: 'sys-integration',
    question: '물리적인 리소스들을 사용자에게 하나로 보이게 하거나, 하나의 물리적인 리소스를 여러 개로 보이게 하는 기술로, 서버의 가동률을 60~70% 이상으로 올릴 수 있는 기술은?',
    options: [
      '클러스터링',
      '가상화(Virtualization)',
      '미러링',
      '스풀링(Spooling)'
    ],
    answer: 1,
    explanation: '가상화는 물리적 리소스를 논리적으로 통합하거나 분할하여 보여주는 기술로, 서버 자원의 활용률을 크게 높일 수 있다.'
  },
  {
    id: 420,
    subject: 'sys-integration',
    question: 'CPU와 주기억 장치 사이의 속도 차이를 극복하기 위해 사용하는 메모리는?',
    options: [
      '가상 메모리',
      '캐시 메모리',
      '연관 메모리',
      '플래시 메모리'
    ],
    answer: 1,
    explanation: '캐시 메모리(Cache Memory)는 CPU와 주기억장치 사이의 속도 차이를 극복하기 위해 사용하는 고속 버퍼 메모리이다.'
  },
  {
    id: 421,
    subject: 'sys-integration',
    question: 'UNIX 명령어에 대한 다음 설명에 해당하는 명령어를 순서대로 짝지은 것은?\n\n㉠ 파일의 읽기, 쓰기 등의 접근 권한(속성)을 변경한다.\n㉡ 현재 작업 디렉터리 경로를 화면에 출력한다.',
    options: [
      '㉠ chown, ㉡ ls',
      '㉠ chmod, ㉡ pwd',
      '㉠ chmod, ㉡ cd',
      '㉠ attrib, ㉡ pwd'
    ],
    answer: 1,
    explanation: 'chmod는 파일의 접근 권한(읽기·쓰기·실행)을 변경하는 명령어이고, pwd는 현재 작업 디렉터리 경로를 출력하는 명령어이다.'
  },
  {
    id: 422,
    subject: 'sys-integration',
    question: 'UNIX 명령어에 대한 다음 설명에 해당하는 명령어를 순서대로 짝지은 것은?\n\n㉠ 파일 목록을 보여준다.\n㉡ 파일을 압축하거나 풀 때 사용한다.\n㉢ 파일의 소유자와 그룹을 변경한다.\n㉣ 파일을 삭제한다.',
    options: [
      '㉠ ls, ㉡ tar, ㉢ chown, ㉣ rm',
      '㉠ dir, ㉡ zip, ㉢ chmod, ㉣ del',
      '㉠ ls, ㉡ tar, ㉢ chmod, ㉣ rm',
      '㉠ cat, ㉡ tar, ㉢ chown, ㉣ mv'
    ],
    answer: 0,
    explanation: 'ls는 파일 목록 표시, tar는 파일 묶음(압축·해제), chown은 소유자와 그룹 변경, rm은 파일 삭제 명령어이다.'
  },
  {
    id: 423,
    subject: 'sys-integration',
    question: '유닉스 시스템에서 명령어 해석기로서 사용자의 명령어를 인식하여 필요한 프로그램을 호출하고 그 명령을 수행하는 기능을 담당하는 구성 요소는?',
    options: [
      '커널(Kernel)',
      '쉘(Shell)',
      '유틸리티(Utility)',
      '디바이스 드라이버'
    ],
    answer: 1,
    explanation: '쉘(Shell)은 사용자의 명령어를 해석하여 커널에 전달하고 그 수행 결과를 돌려주는 명령어 해석기이다.'
  },
  {
    id: 424,
    subject: 'sys-integration',
    question: '유닉스 파일 시스템에서 각 파일에 대한 정보를 저장하고 있는 블록으로, 파일 소유자의 식별 번호, 파일 크기, 파일의 생성 시간, 파일의 최종 수정 시간, 파일 링크 수 등이 기록되는 것은?',
    options: [
      '부트 블록',
      '슈퍼 블록',
      'i-node 블록',
      '데이터 블록'
    ],
    answer: 2,
    explanation: 'i-node 블록은 파일 소유자, 크기, 생성·수정 시간, 링크 수 등 각 파일에 대한 정보를 저장하는 블록이다.'
  },
  {
    id: 425,
    subject: 'sys-integration',
    question: 'UNIX 또는 LINUX 시스템에서 새로운 디렉터리를 생성하는 명령어는?',
    options: [
      'rmdir',
      'mkdir',
      'mvdir',
      'newdir'
    ],
    answer: 1,
    explanation: 'mkdir는 디렉터리를 생성하는 명령어이고, rmdir는 디렉터리를 삭제하는 명령어이다.'
  },
  {
    id: 426,
    subject: 'sys-integration',
    question: 'UNIX 및 LINUX 계통 운영체제의 가장 핵심적인 부분으로, 컴퓨터가 부팅될 때 주기억장치에 적재된 후 상주하면서 프로세스 관리, 기억장치 관리, 파일 관리, 입출력 관리 등을 수행하는 것은?',
    options: [
      '쉘(Shell)',
      '커널(Kernel)',
      '데몬(Daemon)',
      '부트로더(Boot Loader)'
    ],
    answer: 1,
    explanation: '커널(Kernel)은 부팅 시 주기억장치에 적재되어 상주하면서 프로세스·기억장치·파일·입출력 관리 등 핵심 기능을 수행한다.'
  },
  {
    id: 427,
    subject: 'sys-integration',
    question: '유닉스 시스템에서 파일의 내용을 화면에 출력할 때 사용하는 명령어는?',
    options: [
      'cat',
      'cp',
      'find',
      'grep'
    ],
    answer: 0,
    explanation: 'cat 명령어는 파일의 내용을 화면에 출력한다. cp는 복사, find는 파일 검색, grep은 문자열 검색 명령어이다.'
  },
  {
    id: 428,
    subject: 'sys-integration',
    question: '리눅스 시스템에서 파일 시스템의 최상위(루트) 디렉터리를 나타내는 것은?',
    options: [
      '/',
      '~',
      '/root',
      'C:\\'
    ],
    answer: 0,
    explanation: '리눅스 파일 시스템의 최상위 디렉터리는 /(루트 디렉터리)이다. ~는 사용자 홈 디렉터리, /root는 루트 사용자의 홈 디렉터리이다.'
  },
  {
    id: 429,
    subject: 'sys-integration',
    question: 'OSI 7계층 중에서 TCP, UDP 프로토콜이 속하는 계층은?',
    options: [
      '네트워크 계층',
      '전송 계층',
      '세션 계층',
      '응용 계층'
    ],
    answer: 1,
    explanation: 'TCP와 UDP는 종단 간 신뢰성 있는 데이터 전송을 담당하는 전송(Transport) 계층의 프로토콜이다.'
  },
  {
    id: 430,
    subject: 'sys-integration',
    question: 'IPv4에서 192.168.0.100과 같은 주소는 몇 비트로 구성되는가?',
    options: [
      '16비트',
      '32비트',
      '64비트',
      '128비트'
    ],
    answer: 1,
    explanation: 'IPv4 주소는 8비트씩 4부분, 총 32비트로 구성된다. 128비트는 IPv6 주소의 길이이다.'
  },
  {
    id: 431,
    subject: 'sys-integration',
    question: '클라이언트와 서버 사이에서 요청과 응답을 주고받기 위해 사용되는 프로토콜로, 버너스리가 WWW를 고안하면서 설계하였으며 주로 HTML 문서(하이퍼텍스트)를 전송하기 위해 사용되는 통신 규약은?',
    options: [
      'FTP',
      'SMTP',
      'HTTP',
      'SNMP'
    ],
    answer: 2,
    explanation: 'HTTP(HyperText Transfer Protocol)는 하이퍼텍스트 문서를 전송하기 위한 프로토콜로, 웹에서 클라이언트와 서버 간 요청·응답에 사용된다.'
  },
  {
    id: 432,
    subject: 'sys-integration',
    question: 'TCP/IP 4계층 구조에서 괄호에 들어갈 계층은?\n\n응용 계층 → ( ) 계층 → 인터넷 계층 → 네트워크 인터페이스 계층',
    options: [
      '표현',
      '세션',
      '전송',
      '물리'
    ],
    answer: 2,
    explanation: 'TCP/IP 4계층은 응용 계층, 전송 계층, 인터넷 계층, 네트워크 인터페이스(액세스) 계층으로 구성된다.'
  },
  {
    id: 433,
    subject: 'sys-integration',
    question: 'XML의 대안으로 등장한 자바스크립트 기반의 개방형 표준 포맷으로, 속성-값 쌍(Attribute-Value Pairs) 형태의 구조적인 데이터 교환을 위해 사람이 읽을 수 있는 텍스트를 사용하며, 웹 브라우저와 웹 서버 간의 비동기 통신 등에 주로 사용되는 것은?',
    options: [
      'YAML',
      'JSON',
      'CSV',
      'SOAP'
    ],
    answer: 1,
    explanation: 'JSON(JavaScript Object Notation)은 속성-값 쌍으로 이루어진 데이터를 교환하기 위한 경량의 개방형 표준 포맷이다.'
  },
  {
    id: 434,
    subject: 'sys-integration',
    question: 'RSH, RCP, RLOGIN, TELNET, FTP 서비스 등을 대체하기 위한 네트워크 보안 도구 중 하나로, 기본적으로 22번 포트를 사용하며 다른 네트워크상의 컴퓨터에 암호화된 원격 접속을 가능하게 해주는 프로토콜은?',
    options: [
      'TELNET',
      'SSH(Secure Shell)',
      'SSL',
      'RDP'
    ],
    answer: 1,
    explanation: 'SSH는 22번 포트를 사용하여 원격 접속과 파일 복사를 암호화된 채널로 수행하는 보안 프로토콜이다.'
  },
  {
    id: 435,
    subject: 'sys-integration',
    question: '클라이언트와 서버 간 자바스크립트 및 XML을 비동기 방식으로 처리하며, 전체 페이지를 새로 고치지 않고도 웹페이지 일부 영역만을 업데이트할 수 있게 하는 기술은?',
    options: [
      'AJAX',
      'JSP',
      'CGI',
      'WebSocket'
    ],
    answer: 0,
    explanation: 'AJAX(Asynchronous JavaScript and XML)는 비동기 통신으로 페이지 전체를 새로 고치지 않고 일부 영역만 갱신하는 기술이다.'
  },
  {
    id: 436,
    subject: 'sys-integration',
    question: 'OSI 7계층 중에서 IP, ARP, ICMP, IGMP 프로토콜이 속하는 계층은?',
    options: [
      '데이터 링크 계층',
      '네트워크 계층',
      '전송 계층',
      '세션 계층'
    ],
    answer: 1,
    explanation: 'IP, ARP, ICMP, IGMP는 경로 설정과 논리 주소를 담당하는 네트워크 계층의 프로토콜이다.'
  },
  {
    id: 437,
    subject: 'sys-integration',
    question: 'OSI 7계층에 대한 다음 설명 중 옳지 않은 것은?',
    options: [
      '응용 계층은 사용자가 OSI 환경에 접근할 수 있도록 서비스를 제공한다',
      '물리 계층은 전송에 필요한 장치 간의 접속과 단절 등 기계적, 전기적 특성에 대한 규칙을 정의한다',
      '데이터 링크 계층은 개방 시스템들 간의 네트워크 연결을 관리하고 데이터의 교환 및 중계 기능을 한다',
      '표현 계층은 서로 다른 데이터 표현 형태를 갖는 시스템 간의 상호 접속을 위해 필요한 계층이다'
    ],
    answer: 2,
    explanation: '개방 시스템 간의 네트워크 연결 관리와 데이터 교환·중계는 네트워크 계층의 기능이며, 데이터 링크 계층은 인접한 두 시스템 간의 신뢰성 있는 정보 전송을 지원한다.'
  },
  {
    id: 438,
    subject: 'sys-integration',
    question: '다음 설명에 해당하는 용어를 순서대로 짝지은 것은?\n\n㉠ 컴퓨터의 네트워크가 정상적으로 동작 중인지 확인할 때 사용하는 명령어\n㉡ 1계층(물리 계층) 장비로 디지털 신호를 증폭시켜 신호가 약해지지 않고 수신되도록 하는 장비',
    options: [
      '㉠ ping, ㉡ 리피터(Repeater)',
      '㉠ tracert, ㉡ 라우터(Router)',
      '㉠ ping, ㉡ 브리지(Bridge)',
      '㉠ netstat, ㉡ 리피터(Repeater)'
    ],
    answer: 0,
    explanation: 'ping은 네트워크 연결 상태를 확인하는 명령어이고, 리피터는 물리 계층에서 신호를 증폭·재생하는 장비이다.'
  },
  {
    id: 439,
    subject: 'sys-integration',
    question: '도메인 주소와 IP 주소를 서로 변환하는 역할을 하는 시스템은?',
    options: [
      'DHCP',
      'NAT',
      'DNS',
      'ARP'
    ],
    answer: 2,
    explanation: 'DNS(Domain Name System)는 문자로 된 도메인 주소와 숫자로 된 IP 주소를 서로 변환해 주는 시스템이다.'
  },
  {
    id: 440,
    subject: 'sys-integration',
    question: '프로토콜의 기본 요소에 대한 다음 설명에 해당하는 용어를 순서대로 짝지은 것은?\n\n㉠ 시스템 간의 정보 전송을 위한 데이터 형식, 코딩, 신호 레벨 등의 규정\n㉡ 시스템 간의 정보 전송을 위한 제어 정보로 조정과 에러 처리를 위한 규정\n㉢ 시스템 간의 정보 전송을 위한 속도 조절과 순서 관리 규정',
    options: [
      '㉠ 의미(Semantic), ㉡ 구문(Syntax), ㉢ 순서(Timing)',
      '㉠ 구문(Syntax), ㉡ 의미(Semantic), ㉢ 순서(Timing)',
      '㉠ 순서(Timing), ㉡ 의미(Semantic), ㉢ 구문(Syntax)',
      '㉠ 구문(Syntax), ㉡ 순서(Timing), ㉢ 의미(Semantic)'
    ],
    answer: 1,
    explanation: '프로토콜의 3대 기본 요소는 데이터 형식을 규정하는 구문(Syntax), 제어 정보를 규정하는 의미(Semantic), 속도와 순서를 규정하는 순서(Timing)이다.'
  },
  {
    id: 441,
    subject: 'sys-integration',
    question: '신뢰성 있는 통신을 보장하며 데이터 분할과 재조립, 흐름 제어, 오류 제어, 혼잡 제어 등을 담당하고, 전송 단위로 세그먼트를 사용하여 종단 시스템(End to End) 간에 투명한 데이터 전송을 가능하게 하는 OSI 7계층의 계층은?',
    options: [
      '네트워크 계층',
      '전송 계층',
      '세션 계층',
      '데이터 링크 계층'
    ],
    answer: 1,
    explanation: '전송(Transport) 계층은 세그먼트를 전송 단위로 하여 종단 간 신뢰성 있는 데이터 전송, 흐름 제어, 오류 제어 등을 담당한다.'
  },
  {
    id: 442,
    subject: 'sys-integration',
    question: '전송 중 패킷 충돌이 일어나지 않도록 MAC 주소 테이블을 이용해 목적지 MAC 주소를 가진 장비 측 포트로만 프레임을 전송하며, Store and Forwarding, Cut Through, Fragment Free 방식을 사용하는 네트워크 장비는?',
    options: [
      '허브(Hub)',
      '리피터(Repeater)',
      '스위치(Switch)',
      '게이트웨이(Gateway)'
    ],
    answer: 2,
    explanation: '스위치(Switch)는 MAC 주소 테이블을 이용해 목적지 포트로만 프레임을 전달하는 2계층 장비로, 브리지보다 많은 포트를 제공한다.'
  },
  {
    id: 443,
    subject: 'sys-integration',
    question: 'OSI 7계층의 네트워크 계층에 속하는 프로토콜로, IP와 조합하여 통신 중에 발생하는 오류의 처리와 전송 경로 변경 등을 위한 제어 메시지를 관리하는 프로토콜은?',
    options: [
      'ARP',
      'IGMP',
      'ICMP',
      'SNMP'
    ],
    answer: 2,
    explanation: 'ICMP(Internet Control Message Protocol)는 IP와 함께 사용되어 오류 처리와 경로 변경 등을 위한 제어 메시지를 관리한다.'
  },
  {
    id: 444,
    subject: 'sys-integration',
    question: 'OSI 7계층의 전송 계층에 속하는 프로토콜로, 오류 정정이나 재송신 기능이 없고 연결을 설정하지 않는 비연결형 서비스이며, 단순한 헤더 구조로 오버헤드가 적어 실시간 전송에 주로 사용되는 프로토콜은?',
    options: [
      'TCP',
      'UDP',
      'SCTP',
      'IP'
    ],
    answer: 1,
    explanation: 'UDP는 비연결형 전송 계층 프로토콜로, 오류 정정과 재송신 기능이 없는 대신 오버헤드가 적어 실시간 전송과 속도가 중요한 곳에 사용된다.'
  },
  {
    id: 445,
    subject: 'sys-integration',
    question: 'OSI 전 계층에서 프로토콜 구조가 다른 네트워크의 연결을 수행하며, 데이터 타입 변환, 주소 변환, 프로토콜 변환 등의 작업을 수행하여 네트워크들 사이에서 출입구 역할을 하는 장비는?',
    options: [
      '스위치(Switch)',
      '브리지(Bridge)',
      '라우터(Router)',
      '게이트웨이(Gateway)'
    ],
    answer: 3,
    explanation: '게이트웨이(Gateway)는 프로토콜 구조가 서로 다른 네트워크를 연결하며 전 계층에서 프로토콜 변환 등을 수행하는 출입구 역할의 장비이다.'
  },
  // ===== info-security (정보시스템 구축관리) 문제집 추가 : 446~477 =====
  {
    id: 446,
    subject: 'info-security',
    question: 'IPSec(IP Security)에 대한 설명으로 틀린 것은?',
    options: [
      '암호화 수행 시 일방향 암호화만 지원한다',
      'ESP는 발신지 인증, 데이터 무결성, 기밀성 모두를 보장한다',
      '운영 모드는 Tunnel 모드와 Transport 모드로 분류된다',
      'AH는 발신지 호스트를 인증하고, IP 패킷의 무결성을 보장한다'
    ],
    answer: 0,
    explanation: 'IPSec는 암호화와 복호화가 모두 가능한 양방향 암호 방식이다.'
  },
  {
    id: 447,
    subject: 'info-security',
    question: '소프트웨어 개발 프레임워크를 적용할 경우 기대 효과로 거리가 먼 것은?',
    options: [
      '품질 보증',
      '시스템 복잡도 증가',
      '개발 용이성',
      '변경 용이성'
    ],
    answer: 1,
    explanation: '소프트웨어 개발 프레임워크를 적용하면 시스템 복잡도는 증가가 아니라 감소하는 효과를 기대할 수 있다.'
  },
  {
    id: 448,
    subject: 'info-security',
    question: '소프트웨어 개발 프레임워크와 관련한 설명으로 가장 적절하지 않은 것은?',
    options: [
      '반제품 상태의 제품을 토대로 도메인별로 필요한 서비스 컴포넌트를 사용하여 재사용성 확대와 성능을 보장받을 수 있게 하는 개발 소프트웨어이다',
      '라이브러리와는 달리 사용자 코드에서 프레임워크를 호출해서 사용하고, 그에 대한 제어도 사용자 코드가 가지는 방식이다',
      '설계 관점에 개발 방식을 패턴화시키기 위한 노력의 결과물인 소프트웨어 디자인 패턴을 반제품 소프트웨어 상태로 집적화시킨 것으로 볼 수 있다',
      '프레임워크의 동작 원리를 그 제어 흐름의 일반적인 프로그램 흐름과 반대로 동작한다고 해서 IoC(Inversion of Control)라고 설명하기도 한다'
    ],
    answer: 1,
    explanation: '사용자 코드가 제어를 갖고 직접 호출해서 사용하는 것은 라이브러리이며, 프레임워크는 제어의 역전(IoC)에 따라 프레임워크가 사용자 코드를 호출한다.'
  },
  {
    id: 449,
    subject: 'info-security',
    question: '해쉬(Hash) 기법에 대한 설명으로 틀린 것은?',
    options: [
      '임의의 길이의 입력 데이터를 받아 고정된 길이의 해쉬 값으로 변환한다',
      '주로 공개키 암호화 방식에서 키 생성을 위해 사용한다',
      '대표적인 해쉬 알고리즘으로 HAVAL, SHA-1 등이 있다',
      '해쉬 함수는 일방향 함수(One-way function)이다'
    ],
    answer: 1,
    explanation: '공개키 암호화 알고리즘은 소인수 분해나 이산대수 등 고유의 방법으로 키를 생성하며, 해시 기법을 키 생성에 사용하지 않는다.'
  },
  {
    id: 450,
    subject: 'info-security',
    question: 'Secure OS의 보안 기능으로 거리가 먼 것은?',
    options: [
      '식별 및 인증',
      '임의적 접근 통제',
      '고가용성 지원',
      '강제적 접근 통제'
    ],
    answer: 2,
    explanation: 'Secure OS의 보안 기능에는 식별 및 인증, 임의적/강제적 접근 통제, 객체 재사용 보호, 완전한 조정, 신뢰 경로, 감사 기록 등이 있으며 고가용성 지원은 해당하지 않는다.'
  },
  {
    id: 451,
    subject: 'info-security',
    question: '소프트웨어 개발 방법론의 테일러링(Tailoring)과 관련한 설명으로 틀린 것은?',
    options: [
      '프로젝트 수행 시 예상되는 변화를 배제하고 신속히 진행하여야 한다',
      '프로젝트에 최적화된 개발 방법론을 적용하기 위해 절차, 산출물 등을 적절히 변경하는 활동이다',
      '관리 측면에서의 목적 중 하나는 최단기간에 안정적인 프로젝트 진행을 위한 사전 위험을 식별하고 제거하는 것이다',
      '기술적 측면에서의 목적 중 하나는 프로젝트에 최적화된 기술 요소를 도입하여 프로젝트 특성에 맞는 최적의 기법과 도구를 사용하는 것이다'
    ],
    answer: 0,
    explanation: '테일러링은 프로젝트 상황과 특성에 맞추어 기존 방법론을 수정하는 것이므로 예상되는 변화를 충분히 고려해야 한다.'
  },
  {
    id: 452,
    subject: 'info-security',
    question: 'SPICE 모델의 프로세스 수행 능력 수준의 단계별 설명이 틀린 것은?',
    options: [
      '수준 7 - 미완성 단계',
      '수준 5 - 최적화 단계',
      '수준 4 - 예측 단계',
      '수준 3 - 확립 단계'
    ],
    answer: 0,
    explanation: 'SPICE 모델의 프로세스 수행 능력 수준은 불완전(0), 수행(1), 관리(2), 확립(3), 예측(4), 최적화(5)의 6단계로 구분되며 수준 7은 존재하지 않는다.'
  },
  {
    id: 453,
    subject: 'info-security',
    question: '공개키 암호에 대한 설명으로 틀린 것은?',
    options: [
      '10명이 공개키 암호를 사용할 경우 5개의 키가 필요하다',
      '복호화키는 비공개되어 있다',
      '송신자는 수신자의 공개키로 문서를 암호화한다',
      '공개키 암호로 널리 알려진 알고리즘은 RSA가 있다'
    ],
    answer: 0,
    explanation: '공개키 암호화 방식에서 키의 개수는 2n개로, 10명이 사용할 경우 20개의 키가 필요하다.'
  },
  {
    id: 454,
    subject: 'info-security',
    question: 'COCOMO 모델에 의한 비용 산정에 대한 설명으로 옳지 않은 것은?',
    options: [
      '보헴이 제안한 원시 프로그램의 규모에 의한 비용 예측 모형이다',
      '같은 규모의 소프트웨어라도 그 유형에 따라 비용이 다르게 산정된다',
      '비용 산정 유형으로 Organic Mode, Embedded Mode, Semi-Detached Mode가 있다',
      'UFP(Unadjusted Function Point)를 계산한다'
    ],
    answer: 3,
    explanation: 'UFP는 기능 점수(Function Point) 모델에서 기능 점수를 산출하는 과정에 계산되는 값으로, COCOMO 모델과는 관계가 없다.'
  },
  {
    id: 455,
    subject: 'info-security',
    question: '소프트웨어 공학에 대한 설명으로 거리가 먼 것은?',
    options: [
      '소프트웨어 공학이란 소프트웨어의 개발, 운용, 유지보수 및 파기에 대한 체계적인 접근 방법이다',
      '소프트웨어 공학은 소프트웨어 제품의 품질을 향상시키고 소프트웨어 생산성과 작업 만족도를 증대시키는 것이 목적이다',
      '소프트웨어 공학의 궁극적 목표는 최대의 비용으로 계획된 일정보다 가능한 빠른 시일 내에 소프트웨어를 개발하는 것이다',
      '소프트웨어 공학은 신뢰성 있는 소프트웨어를 경제적인 비용으로 획득하기 위해 공학적 원리를 정립하고 이를 이용하는 것이다'
    ],
    answer: 2,
    explanation: '소프트웨어 공학의 목표는 최대 비용이 아니라 최소의 비용으로 품질 좋은 소프트웨어를 개발하는 것이다.'
  },
  {
    id: 456,
    subject: 'info-security',
    question: '정보 보안을 위한 접근 제어(Access Control)와 관련한 설명으로 틀린 것은?',
    options: [
      '적절한 권한을 가진 인가자만 특정 시스템이나 정보에 접근할 수 있도록 통제하는 것이다',
      '시스템 및 네트워크에 대한 접근 제어의 가장 기본적인 수단은 IP와 서비스 포트로 볼 수 있다',
      'DBMS에 보안 정책을 적용하는 도구인 XDMCP를 통해 데이터베이스에 대한 접근 제어를 수행할 수 있다',
      '네트워크 장비에서 수행하는 IP에 대한 접근 제어로는 관리 인터페이스의 접근 제어와 ACL(Access Control List) 등이 있다'
    ],
    answer: 2,
    explanation: 'XDMCP는 GUI 환경의 UNIX/LINUX 시스템에서 디스플레이 관리자(XDM)와 통신하는 데 사용하는 프로토콜로, DBMS 접근 제어 도구가 아니다.'
  },
  {
    id: 457,
    subject: 'info-security',
    question: '대칭 암호 알고리즘과 비대칭 암호 알고리즘에 대한 설명으로 틀린 것은?',
    options: [
      '대칭 암호 알고리즘은 비교적 실행 속도가 빠르기 때문에 다양한 암호의 핵심 함수로 사용될 수 있다',
      '대칭 암호 알고리즘은 비밀키 전달을 위한 키 교환이 필요하지 않아 암호화 및 복호화의 속도가 빠르다',
      '비대칭 암호 알고리즘은 자신만이 보관하는 비밀키를 이용하여 인증, 전자서명 등에 적용이 가능하다',
      '대표적인 대칭키 암호 알고리즘으로는 AES, IDEA 등이 있다'
    ],
    answer: 1,
    explanation: '대칭 암호 알고리즘은 송수신자가 동일한 비밀키를 공유해야 하므로 키 교환이 필요하다.'
  },
  {
    id: 458,
    subject: 'info-security',
    question: 'CBD(Component Based Development)에 대한 설명으로 틀린 것은?',
    options: [
      '개발 기간 단축으로 인한 생산성 향상',
      '새로운 기능 추가가 쉬운 확장성',
      '소프트웨어 재사용이 가능',
      '1960년대까지 가장 많이 적용되었던 소프트웨어 개발 방법'
    ],
    answer: 3,
    explanation: '1960년대까지 가장 많이 적용된 것은 구조적 방법론 이전의 개발 방식이며, CBD는 컴포넌트 재사용을 기반으로 하는 현대적 개발 방법론이다.'
  },
  {
    id: 459,
    subject: 'info-security',
    question: '소프트웨어 개발 방법론 중 CBD(Component Based Development)에 대한 설명으로 틀린 것은?',
    options: [
      '생산성과 품질을 높이고, 유지보수 비용을 최소화할 수 있다',
      '컴포넌트 제작 기법을 통해 재사용성을 향상시킨다',
      '모듈의 분할과 정복에 의한 하향식 설계 방식이다',
      '독립적인 컴포넌트 단위의 관리로 복잡성을 최소화할 수 있다'
    ],
    answer: 2,
    explanation: '분할과 정복(Divide and Conquer) 원리에 의한 하향식 설계 방식은 구조적 방법론에 대한 설명이다.'
  },
  {
    id: 460,
    subject: 'info-security',
    question: '공개키 암호화 방식에 대한 설명으로 틀린 것은?',
    options: [
      '공개키로 암호화된 메시지는 반드시 공개키로 복호화해야 한다',
      '비대칭 암호 기법이라고도 한다',
      '대표적인 기법은 RSA 기법이 있다',
      '키 분배가 용이하고, 관리해야 할 키 개수가 적다'
    ],
    answer: 0,
    explanation: '공개키 암호화 기법은 암호화할 때는 공개키를, 복호화할 때는 비밀키를 사용한다.'
  },
  {
    id: 461,
    subject: 'info-security',
    question: '소프트웨어 정의 데이터센터(SDDC; Software Defined Data Center)에 대한 설명으로 틀린 것은?',
    options: [
      '컴퓨팅, 네트워킹, 스토리지, 관리 등을 모두 소프트웨어로 정의한다',
      '인력 개입 없이 소프트웨어 조작만으로 자동 제어 관리한다',
      '데이터센터 내 모든 자원을 가상화하여 서비스한다',
      '특정 하드웨어에 종속되어 특화된 업무를 서비스하기에 적합하다'
    ],
    answer: 3,
    explanation: 'SDDC는 데이터센터의 모든 자원을 가상화하여 서비스하므로 특정 하드웨어에 종속되지 않고 독립적으로 서비스를 제공할 수 있다.'
  },
  {
    id: 462,
    subject: 'info-security',
    question: '클라우드 기반 HSM(Cloud-based Hardware Security Module)에 대한 설명으로 틀린 것은?',
    options: [
      '클라우드(데이터센터) 기반 암호화 키 생성, 처리, 저장 등을 하는 보안 기기이다',
      '국내에서는 공인인증제의 폐지와 전자서명법 개정을 추진하면서 클라우드 HSM 용어가 자주 등장하였다',
      '클라우드에 인증서를 저장하므로 기존 HSM 기기나 휴대폰에 인증서를 저장해 다닐 필요가 없다',
      '하드웨어가 아닌 소프트웨어적으로만 구현되기 때문에 소프트웨어식 암호 기술에 내재된 보안 취약점을 해결할 수 없다는 것이 주요 단점이다'
    ],
    answer: 3,
    explanation: '클라우드 기반 HSM은 암호화 키 생성이 하드웨어적으로 구현되므로 소프트웨어식 암호 기술에 내재된 보안 취약점을 해결할 수 있다.'
  },
  {
    id: 463,
    subject: 'info-security',
    question: '스트림 암호화 방식의 설명으로 옳지 않은 것은?',
    options: [
      '비트/바이트/단어들을 순차적으로 암호화한다',
      '해쉬 함수를 이용한 해쉬 암호화 방식을 사용한다',
      'RC4는 스트림 암호화 방식에 해당한다',
      '대칭키 암호화 방식이다'
    ],
    answer: 1,
    explanation: '해쉬 암호화 방식은 스트림 암호화 방식과 무관하며, 스트림 암호는 평문과 키 스트림을 순차적으로 결합하여 암호화한다.'
  },
  {
    id: 464,
    subject: 'info-security',
    question: '취약점 관리를 위한 응용 프로그램의 보안 설정과 가장 거리가 먼 것은?',
    options: [
      '서버 관리실 출입 통제',
      '실행 프로세스 권한 설정',
      '운영체제의 접근 제한',
      '운영체제의 정보 수집 제한'
    ],
    answer: 0,
    explanation: '서버 관리실 출입 통제는 응용 프로그램 보안 설정이 아니라 물리적 보안에 포함되는 보안 조치이다.'
  },
  {
    id: 465,
    subject: 'info-security',
    question: '소프트웨어 생명 주기 모형 중 Spiral Model에 대한 설명으로 틀린 것은?',
    options: [
      '비교적 대규모 시스템에 적합하다',
      '개발 순서는 계획 및 정의, 위험 분석, 공학적 개발, 고객 평가 순으로 진행된다',
      '소프트웨어를 개발하면서 발생할 수 있는 위험을 관리하고 최소화하는 것을 목적으로 한다',
      '계획, 설계, 개발, 평가의 개발 주기가 한 번만 수행된다'
    ],
    answer: 3,
    explanation: '나선형 모델은 계획 수립, 위험 분석, 개발 및 검증, 고객 평가 과정을 반복하며 수행하는 개발 모형이다.'
  },
  {
    id: 466,
    subject: 'info-security',
    question: 'SSH(Secure Shell)에 대한 설명으로 틀린 것은?',
    options: [
      'SSH의 기본 네트워크 포트는 220번을 사용한다',
      '전송되는 데이터는 암호화된다',
      '키를 통한 인증은 클라이언트의 공개키를 서버에 등록해야 한다',
      '서로 연결되어 있는 컴퓨터 간 원격 명령 실행이나 셸 서비스 등을 수행한다'
    ],
    answer: 0,
    explanation: 'SSH의 기본 네트워크 포트는 220번이 아니라 22번이다.'
  },
  {
    id: 467,
    subject: 'info-security',
    question: 'CPM(Critical Path Method)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '프로젝트 내에서 각 작업이 수행되는 시간과 각 작업 사이의 관계를 파악할 수 있다',
      '작업 일정을 한눈에 볼 수 있도록 해주며 막대 그래프의 형태로 표현한다',
      '효과적인 프로젝트의 통제를 가능하게 해 준다',
      '경영층의 과학적인 의사 결정을 지원한다'
    ],
    answer: 1,
    explanation: '작업 일정을 막대 그래프 형태로 표현하는 것은 간트 차트(Gantt Chart)에 대한 설명이다.'
  },
  {
    id: 468,
    subject: 'info-security',
    question: '간트 차트(Gantt Chart)에 대한 설명으로 틀린 것은?',
    options: [
      '프로젝트를 이루는 소작업 별로 언제 시작되고 언제 끝나야 하는지를 한눈에 볼 수 있도록 도와준다',
      '자원 배치 계획에 유용하게 사용된다',
      'CPM 네트워크로부터 만드는 것이 가능하다',
      '수평 막대의 길이는 각 작업(Task)에 필요한 인원수를 나타낸다'
    ],
    answer: 3,
    explanation: '간트 차트에서 수평 막대의 길이는 인원수가 아니라 각 작업의 기간을 나타낸다.'
  },
  {
    id: 469,
    subject: 'info-security',
    question: '소프트웨어 생명 주기 모델 중 V 모델과 관련한 설명으로 틀린 것은?',
    options: [
      '요구 분석 및 설계 단계를 거치지 않으며 항상 통합 테스트를 중심으로 V 형태를 이룬다',
      'Perry에 의해 제안되었으며 세부적인 테스트 과정으로 구성되어 신뢰도 높은 시스템을 개발하는 데 효과적이다',
      '개발 작업과 검증 작업 사이의 관계를 명확히 드러내 놓은 폭포수 모델의 변형이라고 볼 수 있다',
      '폭포수 모델이 산출물 중심이라면 V 모델은 작업과 결과의 검증에 초점을 둔다'
    ],
    answer: 0,
    explanation: 'V 모델은 요구사항, 분석, 설계, 구현 단계를 수행하며 각 단계를 그에 대응하는 테스트 단계와 연결하여 표현한다.'
  },
  {
    id: 470,
    subject: 'info-security',
    question: '소프트웨어 개발 프레임워크의 적용 효과로 볼 수 없는 것은?',
    options: [
      '공통 컴포넌트 재사용으로 중복 예산 절감',
      '기술 종속으로 인한 선행 사업자 의존도 증대',
      '표준화된 연계 모듈 활용으로 상호 운용성 향상',
      '개발 표준에 의한 모듈화로 유지보수 용이'
    ],
    answer: 1,
    explanation: '프레임워크를 통한 표준화된 개발 기반은 선행 사업자에 대한 의존도를 감소시키고 사업자 종속성을 해소한다.'
  },
  {
    id: 471,
    subject: 'info-security',
    question: 'SQL Injection 공격과 관련한 설명으로 틀린 것은?',
    options: [
      'SQL Injection은 임의로 작성한 SQL 구문을 애플리케이션에 삽입하는 공격 방식이다',
      'SQL Injection 취약점이 발생하는 곳은 주로 웹 애플리케이션과 데이터베이스가 연동되는 부분이다',
      'DBMS의 종류와 관계없이 SQL Injection 공격 기법은 모두 동일하다',
      '로그인과 같이 웹에서 사용자의 입력값을 받아 데이터베이스 SQL문으로 데이터를 요청하는 경우 SQL Injection을 수행할 수 있다'
    ],
    answer: 2,
    explanation: 'SQL Injection은 DBMS의 종류에 따라 접근 방법이 달라지므로 공격 기법이 모두 동일하다는 설명은 잘못되었다.'
  },
  {
    id: 472,
    subject: 'info-security',
    question: '물리적 위협으로 인한 문제에 해당하지 않는 것은?',
    options: [
      '화재, 홍수 등 천재지변으로 인한 위협',
      '하드웨어 파손, 고장으로 인한 장애',
      '방화, 테러로 인한 하드웨어와 기록장치를 물리적으로 파괴하는 행위',
      '방화벽 설정의 잘못된 조작으로 인한 네트워크, 서버 보안 위협'
    ],
    answer: 3,
    explanation: '방화벽 설정의 잘못된 조작으로 인한 보안 위협은 물리적 위협이 아니라 기술적(관리적) 위협에 해당한다.'
  },
  {
    id: 473,
    subject: 'info-security',
    question: '침입 탐지 시스템(IDS; Intrusion Detection System)과 관련한 설명으로 틀린 것은?',
    options: [
      '이상 탐지 기법(Anomaly Detection)은 Signature Base나 Knowledge Base라고도 불리며 이미 발견되고 정립된 공격 패턴을 입력해두었다가 탐지 및 차단한다',
      'HIDS(Host-Based Intrusion Detection)는 운영체제에 설정된 사용자 계정에 따라 어떤 사용자가 어떤 접근을 시도하고 어떤 작업을 했는지에 대한 기록을 남기고 추적한다',
      'NIDS(Network-Based Intrusion Detection System)로는 대표적으로 Snort가 있다',
      '외부 인터넷에 서비스를 제공하는 서버가 위치하는 네트워크인 DMZ(Demilitarized Zone)에는 IDS가 설치될 수 있다'
    ],
    answer: 0,
    explanation: '정립된 공격 패턴을 기반으로 탐지하는 것은 오용 탐지 기법(Misuse Detection)이며, 이상 탐지 기법은 평균적인 시스템 상태를 기준으로 비정상 행위를 탐지한다.'
  },
  {
    id: 474,
    subject: 'info-security',
    question: '프레임워크(Framework)에 대한 설명으로 옳은 것은?',
    options: [
      '소프트웨어 구성에 필요한 기본 구조를 제공함으로써 재사용이 가능하게 해준다',
      '소프트웨어 개발 시 구조가 잡혀 있기 때문에 확장이 불가능하다',
      '소프트웨어 아키텍처(Architecture)와 동일한 개념이다',
      '모듈화(Modularity)가 불가능하다'
    ],
    answer: 0,
    explanation: '프레임워크는 소프트웨어 구성에 필요한 기본 구조를 제공하여 재사용을 가능하게 하며, 모듈화가 잘 되어 있어 자유로운 확장이 가능하다.'
  },
  {
    id: 475,
    subject: 'info-security',
    question: 'DES는 몇 비트의 암호화 알고리즘인가?',
    options: [
      '8',
      '24',
      '64',
      '132'
    ],
    answer: 2,
    explanation: 'DES(Data Encryption Standard)는 한 번에 암호화하는 블록의 크기가 64비트인 대칭키 블록 암호 알고리즘이다.'
  },
  {
    id: 476,
    subject: 'info-security',
    question: '프로젝트 일정 관리 시 사용하는 PERT 차트에 대한 설명에 해당하는 것은?',
    options: [
      '각 작업들이 언제 시작하고 언제 종료되는지에 대한 일정을 막대 도표를 이용하여 표시한다',
      '시간선(Time-Line) 차트라고도 한다',
      '수평 막대의 길이는 각 작업의 기간을 나타낸다',
      '작업들 간의 상호 관련성, 결정 경로, 경계 시간, 자원 할당 등을 제시한다'
    ],
    answer: 3,
    explanation: 'PERT 차트는 작업들 간의 상호 관련성과 결정 경로, 경계 시간, 자원 할당을 제시하며, 막대 도표와 시간선 차트 관련 설명은 간트 차트에 해당한다.'
  },
  {
    id: 477,
    subject: 'info-security',
    question: 'Windows 10 Pro에서 제공하는 기능으로, 128비트 키의 CBC 모드에서 AES 암호화 알고리즘을 사용하여 드라이브(장치)의 데이터를 보호하며, 장치를 분실하거나 도난당하더라도 다른 사람이 데이터에 접근할 수 없도록 하는 기능은?',
    options: [
      'Windows Defender',
      'BitLocker',
      'EFS(Encrypting File System)',
      'Secure Boot'
    ],
    answer: 1,
    explanation: 'BitLocker는 AES 암호화 알고리즘으로 드라이브 전체를 암호화하여 장치 분실·도난 시에도 데이터 접근을 차단하는 Windows의 장치 암호화 기능이다.'
  }
]
