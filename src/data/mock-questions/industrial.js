export const industrialQuestions = [
  // ========================================
  // info-sys (정보시스템 기반 기술) - 15문항
  // ========================================
  {
    id: 1,
    subject: 'info-sys',
    question: '운영체제에서 프로세스의 상태 전이 중, 준비(Ready) 상태에서 실행(Running) 상태로 전이되는 것을 무엇이라 하는가?',
    options: ['디스패치(Dispatch)', '블록(Block)', '웨이크업(Wake-up)', '타이머 런아웃(Timer Run-out)'],
    answer: 0,
    explanation: '준비 상태의 프로세스가 CPU를 할당받아 실행 상태로 전이되는 것을 디스패치(Dispatch)라 한다.'
  },
  {
    id: 2,
    subject: 'info-sys',
    question: 'FCFS(First Come First Served) 스케줄링에서 프로세스 도착 순서가 P1(실행시간 24), P2(실행시간 3), P3(실행시간 3)일 때 평균 대기시간은?',
    options: ['17', '3', '10', '27'],
    answer: 0,
    explanation: 'P1 대기시간=0, P2 대기시간=24, P3 대기시간=27이므로 평균 대기시간은 (0+24+27)/3 = 17이다.'
  },
  {
    id: 3,
    subject: 'info-sys',
    question: 'SJF(Shortest Job First) 스케줄링 알고리즘의 특징으로 옳은 것은?',
    options: [
      '실행 시간이 가장 짧은 프로세스에 먼저 CPU를 할당한다',
      '도착 순서대로 CPU를 할당한다',
      '우선순위가 높은 프로세스에 먼저 CPU를 할당한다',
      '일정 시간 간격으로 CPU를 교대로 할당한다'
    ],
    answer: 0,
    explanation: 'SJF는 대기 중인 프로세스 중 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 비선점형 스케줄링 기법이다.'
  },
  {
    id: 4,
    subject: 'info-sys',
    question: 'Round Robin 스케줄링에서 시간 할당량(Time Quantum)이 매우 커지면 어떤 스케줄링과 같아지는가?',
    options: ['FCFS', 'SJF', 'SRT', 'HRN'],
    answer: 0,
    explanation: '시간 할당량이 매우 크면 프로세스가 끝날 때까지 CPU를 점유하게 되므로 FCFS 스케줄링과 동일해진다.'
  },
  {
    id: 5,
    subject: 'info-sys',
    question: '교착상태(Deadlock)의 발생 조건에 해당하지 않는 것은?',
    options: ['선점(Preemption)', '상호 배제(Mutual Exclusion)', '점유와 대기(Hold and Wait)', '환형 대기(Circular Wait)'],
    answer: 0,
    explanation: '교착상태의 4가지 필요조건은 상호 배제, 점유와 대기, 비선점, 환형 대기이다. 선점은 교착상태 조건이 아니라 비선점이 조건이다.'
  },
  {
    id: 6,
    subject: 'info-sys',
    question: '페이지 참조열이 1, 2, 3, 4, 1, 2, 5, 1, 2, 3이고 프레임 수가 3일 때, FIFO 페이지 교체 알고리즘의 페이지 부재 횟수는?',
    options: ['9', '7', '6', '8'],
    answer: 0,
    explanation: 'FIFO 알고리즘으로 순서대로 교체하면 총 9번의 페이지 부재가 발생한다. 이는 Belady의 모순 현상이 나타나는 대표적인 사례이다.'
  },
  {
    id: 7,
    subject: 'info-sys',
    question: 'LRU(Least Recently Used) 페이지 교체 알고리즘의 설명으로 옳은 것은?',
    options: [
      '가장 오랫동안 사용되지 않은 페이지를 교체한다',
      '가장 먼저 들어온 페이지를 교체한다',
      '사용 빈도가 가장 적은 페이지를 교체한다',
      '앞으로 가장 오랫동안 사용되지 않을 페이지를 교체한다'
    ],
    answer: 0,
    explanation: 'LRU는 최근에 가장 오랫동안 사용하지 않은 페이지를 교체하는 알고리즘으로, 시간 지역성(Temporal Locality)에 기반한다.'
  },
  {
    id: 8,
    subject: 'info-sys',
    question: 'OSI 7계층에서 데이터 링크 계층의 전송 단위는?',
    options: ['프레임(Frame)', '패킷(Packet)', '세그먼트(Segment)', '비트(Bit)'],
    answer: 0,
    explanation: '데이터 링크 계층의 전송 단위는 프레임이다. 패킷은 네트워크 계층, 세그먼트는 전송 계층, 비트는 물리 계층의 전송 단위이다.'
  },
  {
    id: 9,
    subject: 'info-sys',
    question: 'TCP/IP 프로토콜에서 전송 계층에 해당하는 프로토콜이 아닌 것은?',
    options: ['IP', 'TCP', 'UDP', 'SCTP'],
    answer: 0,
    explanation: 'IP는 인터넷 계층에 해당하는 프로토콜이며, TCP, UDP, SCTP는 전송 계층 프로토콜이다.'
  },
  {
    id: 10,
    subject: 'info-sys',
    question: 'CPU의 구성 요소 중 산술 및 논리 연산을 수행하는 장치는?',
    options: ['ALU', '제어장치', '레지스터', '캐시'],
    answer: 0,
    explanation: 'ALU(Arithmetic Logic Unit)는 산술 연산과 논리 연산을 수행하는 CPU의 핵심 구성 요소이다.'
  },
  {
    id: 11,
    subject: 'info-sys',
    question: '다음 중 프로그램 카운터(PC)의 역할로 올바른 것은?',
    options: [
      '다음에 실행할 명령어의 주소를 저장한다',
      '현재 실행 중인 명령어를 저장한다',
      '연산 결과를 임시로 저장한다',
      '메모리 주소를 저장한다'
    ],
    answer: 0,
    explanation: '프로그램 카운터(PC)는 다음에 인출하여 실행할 명령어의 주소를 가지고 있는 레지스터이다.'
  },
  {
    id: 12,
    subject: 'info-sys',
    question: '주소지정방식 중 명령어 내의 오퍼랜드가 실제 데이터인 방식은?',
    options: ['즉시 주소지정(Immediate)', '직접 주소지정(Direct)', '간접 주소지정(Indirect)', '레지스터 주소지정(Register)'],
    answer: 0,
    explanation: '즉시 주소지정방식은 오퍼랜드 필드에 실제 데이터(피연산자)가 들어있어 메모리 접근이 필요 없는 방식이다.'
  },
  {
    id: 13,
    subject: 'info-sys',
    question: '인터럽트 발생 시 현재 수행 중인 프로세스의 상태를 저장하는 장소는?',
    options: ['스택(Stack)', '큐(Queue)', '힙(Heap)', '레지스터 파일'],
    answer: 0,
    explanation: '인터럽트 발생 시 프로그램 카운터, 레지스터 값 등 현재 프로세스의 상태 정보를 스택에 저장한 후 인터럽트를 처리한다.'
  },
  {
    id: 14,
    subject: 'info-sys',
    question: '소프트웨어 개발 생명주기(SDLC) 모델 중 폭포수 모델의 특징이 아닌 것은?',
    options: [
      '각 단계를 반복적으로 수행한다',
      '단계별로 산출물이 명확하다',
      '각 단계가 순차적으로 진행된다',
      '관리가 용이하다'
    ],
    answer: 0,
    explanation: '폭포수 모델은 각 단계를 순차적으로 한 번만 수행하는 것이 특징이며, 반복적 수행은 나선형 모델 등의 특징이다.'
  },
  {
    id: 15,
    subject: 'info-sys',
    question: '소프트웨어 테스트 중 모듈 간의 인터페이스를 검증하는 테스트는?',
    options: ['통합 테스트', '단위 테스트', '시스템 테스트', '인수 테스트'],
    answer: 0,
    explanation: '통합 테스트는 단위 테스트를 통과한 모듈들을 결합하여 모듈 간의 인터페이스와 상호작용을 검증하는 테스트이다.'
  },

  // ========================================
  // programming (프로그래밍 언어 활용) - 15문항
  // ========================================
  {
    id: 16,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    int *p = &a;\n    *p = *p + b;\n    printf("%d", a);\n    return 0;\n}',
    options: ['8', '5', '3', '15'],
    answer: 0,
    explanation: '포인터 p는 a의 주소를 가리키고, *p = *p + b는 a = a + b와 같으므로 a는 5+3=8이 된다.'
  },
  {
    id: 17,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    printf("%d", *(p + 3));\n    return 0;\n}',
    options: ['40', '30', '20', '50'],
    answer: 0,
    explanation: 'p는 배열의 시작 주소를 가리키고, p+3은 배열의 4번째 요소(인덱스 3)를 가리키므로 *(p+3)은 40이다.'
  },
  {
    id: 18,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a[3][2] = {{1,2},{3,4},{5,6}};\n    printf("%d", a[1][0] + a[2][1]);\n    return 0;\n}',
    options: ['9', '7', '8', '10'],
    answer: 0,
    explanation: 'a[1][0]은 3이고 a[2][1]은 6이므로 합은 3+6=9이다.'
  },
  {
    id: 19,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nstruct Point { int x; int y; };\nint main() {\n    struct Point p = {10, 20};\n    p.x += 5;\n    printf("%d %d", p.x, p.y);\n    return 0;\n}',
    options: ['15 20', '10 20', '5 20', '10 25'],
    answer: 0,
    explanation: '구조체 p의 x 멤버를 5 증가시키므로 p.x는 15, p.y는 그대로 20이다.'
  },
  {
    id: 20,
    subject: 'programming',
    question: 'C 언어에서 문자열 함수 strlen("Hello")의 반환 값은?',
    options: ['5', '6', '4', '7'],
    answer: 0,
    explanation: 'strlen 함수는 널 문자(\\0)를 제외한 문자열의 길이를 반환하므로 "Hello"의 길이인 5를 반환한다.'
  },
  {
    id: 21,
    subject: 'programming',
    question: 'C 언어에서 strcmp("abc", "abd")의 반환 값은?',
    options: ['음수', '0', '양수', '1'],
    answer: 0,
    explanation: 'strcmp는 두 문자열을 사전순으로 비교하며, 첫 번째 문자열이 작으면 음수를 반환한다. "abc"의 c(99)가 "abd"의 d(100)보다 작으므로 음수이다.'
  },
  {
    id: 22,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\nclass A {\n    int x = 10;\n    void show() { System.out.print(x); }\n}\nclass B extends A {\n    int x = 20;\n}\npublic class Main {\n    public static void main(String[] args) {\n        B b = new B();\n        b.show();\n    }\n}',
    options: ['10', '20', '30', '컴파일 오류'],
    answer: 0,
    explanation: '클래스 B는 show() 메서드를 오버라이드하지 않았으므로 부모 클래스 A의 show()가 호출되어 A의 x값인 10이 출력된다.'
  },
  {
    id: 23,
    subject: 'programming',
    question: 'Java에서 인터페이스(interface)에 대한 설명으로 옳은 것은?',
    options: [
      '다중 구현(implements)이 가능하다',
      '객체를 직접 생성할 수 있다',
      '멤버 변수를 가질 수 없다',
      '접근 제어자를 자유롭게 지정할 수 있다'
    ],
    answer: 0,
    explanation: 'Java의 인터페이스는 다중 구현이 가능하며, 이를 통해 다중 상속의 효과를 얻을 수 있다.'
  },
  {
    id: 24,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 == 0) sum += i;\n        }\n        System.out.print(sum);\n    }\n}',
    options: ['30', '55', '25', '20'],
    answer: 0,
    explanation: '1~10 중 짝수(2+4+6+8+10)의 합은 30이다.'
  },
  {
    id: 25,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\na = [1, 2, 3, 4, 5]\nprint(a[1:4])',
    options: ['[2, 3, 4]', '[1, 2, 3, 4]', '[2, 3, 4, 5]', '[1, 2, 3]'],
    answer: 0,
    explanation: 'Python의 슬라이싱 a[1:4]는 인덱스 1부터 3까지(4 미포함)의 요소를 반환하므로 [2, 3, 4]이다.'
  },
  {
    id: 26,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\nd = {"a": 1, "b": 2, "c": 3}\nprint(d.get("d", 0))',
    options: ['0', 'None', '에러 발생', '3'],
    answer: 0,
    explanation: 'get 메서드는 키가 존재하지 않을 때 두 번째 인자(기본값)를 반환한다. "d" 키가 없으므로 기본값 0을 반환한다.'
  },
  {
    id: 27,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\na = [3, 1, 4, 1, 5]\na.sort()\nprint(a[-1])',
    options: ['5', '3', '1', '4'],
    answer: 0,
    explanation: 'sort()로 오름차순 정렬하면 [1, 1, 3, 4, 5]가 되고, a[-1]은 마지막 요소인 5이다.'
  },
  {
    id: 28,
    subject: 'programming',
    question: '스택(Stack)에 순서대로 A, B, C, D를 push한 후 2번 pop했을 때 꺼내지는 데이터의 순서는?',
    options: ['D, C', 'A, B', 'C, D', 'B, A'],
    answer: 0,
    explanation: '스택은 LIFO(Last In First Out) 구조이므로 가장 나중에 들어간 D가 먼저 나오고, 그 다음 C가 나온다.'
  },
  {
    id: 29,
    subject: 'programming',
    question: '이진 탐색 트리에서 다음 데이터를 순서대로 삽입했을 때 중위 순회(Inorder) 결과는?\n삽입 순서: 5, 3, 7, 1, 4',
    options: ['1, 3, 4, 5, 7', '5, 3, 1, 4, 7', '1, 4, 3, 7, 5', '5, 3, 7, 1, 4'],
    answer: 0,
    explanation: '이진 탐색 트리의 중위 순회는 항상 오름차순으로 데이터를 출력하므로 1, 3, 4, 5, 7이 된다.'
  },
  {
    id: 30,
    subject: 'programming',
    question: '버블 정렬(Bubble Sort)의 시간 복잡도가 최악의 경우일 때는?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    answer: 0,
    explanation: '버블 정렬은 최악의 경우(역순 정렬) 모든 요소를 비교해야 하므로 O(n²)의 시간 복잡도를 갖는다.'
  },

  // ========================================
  // db (데이터베이스 활용) - 15문항
  // ========================================
  {
    id: 31,
    subject: 'db',
    question: 'ER(Entity-Relationship) 모델에서 개체(Entity) 간의 관계를 나타내는 기호는?',
    options: ['마름모', '직사각형', '타원', '이중 타원'],
    answer: 0,
    explanation: 'ER 다이어그램에서 마름모는 관계(Relationship)를 나타내고, 직사각형은 개체, 타원은 속성을 나타낸다.'
  },
  {
    id: 32,
    subject: 'db',
    question: '관계 데이터 모델에서 릴레이션의 행(Row)을 의미하는 용어는?',
    options: ['튜플(Tuple)', '속성(Attribute)', '도메인(Domain)', '차수(Degree)'],
    answer: 0,
    explanation: '릴레이션에서 행은 튜플이라 하며, 열은 속성(Attribute), 속성이 가질 수 있는 값의 범위는 도메인이라 한다.'
  },
  {
    id: 33,
    subject: 'db',
    question: '관계 데이터 모델에서 후보키(Candidate Key)에 대한 설명으로 옳은 것은?',
    options: [
      '유일성과 최소성을 만족하는 속성의 집합이다',
      '유일성만 만족하면 된다',
      '릴레이션에서 반드시 하나만 존재한다',
      'NULL 값을 허용하는 키이다'
    ],
    answer: 0,
    explanation: '후보키는 릴레이션의 튜플을 유일하게 식별할 수 있는 속성의 집합으로, 유일성과 최소성을 모두 만족해야 한다.'
  },
  {
    id: 34,
    subject: 'db',
    question: '다음 SQL문의 종류는?\n\nCREATE TABLE 학생 (학번 INT, 이름 VARCHAR(20));',
    options: ['DDL', 'DML', 'DCL', 'TCL'],
    answer: 0,
    explanation: 'CREATE는 테이블 등 데이터베이스 객체를 생성하는 DDL(Data Definition Language)에 해당한다.'
  },
  {
    id: 35,
    subject: 'db',
    question: '다음 SQL문의 실행 결과로 올바른 것은?\n\nSELECT COUNT(*) FROM 학생 WHERE 학과 = \'컴퓨터\' OR 학과 = \'전자\';',
    options: [
      '컴퓨터 또는 전자 학과 학생 수를 반환한다',
      '모든 학생 수를 반환한다',
      '컴퓨터 학과 학생 수만 반환한다',
      '전자 학과 학생 수만 반환한다'
    ],
    answer: 0,
    explanation: 'WHERE 절의 OR 조건으로 컴퓨터 또는 전자 학과에 해당하는 학생의 수를 COUNT(*)로 반환한다.'
  },
  {
    id: 36,
    subject: 'db',
    question: 'SQL에서 두 테이블의 공통 컬럼을 기반으로 일치하는 행만 결합하는 JOIN은?',
    options: ['INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'CROSS JOIN'],
    answer: 0,
    explanation: 'INNER JOIN은 두 테이블에서 조인 조건을 만족하는 행(공통된 값이 있는 행)만 결과에 포함한다.'
  },
  {
    id: 37,
    subject: 'db',
    question: '다음 SQL문에서 서브쿼리의 역할은?\n\nSELECT 이름 FROM 학생 WHERE 학번 IN (SELECT 학번 FROM 수강 WHERE 과목명 = \'데이터베이스\');',
    options: [
      '데이터베이스 과목을 수강하는 학생의 학번 목록을 반환한다',
      '모든 학생의 학번을 반환한다',
      '수강 테이블의 모든 행을 반환한다',
      '학생 테이블을 삭제한다'
    ],
    answer: 0,
    explanation: '서브쿼리는 수강 테이블에서 과목명이 데이터베이스인 학생의 학번 목록을 반환하여 메인쿼리의 IN 조건에 사용된다.'
  },
  {
    id: 38,
    subject: 'db',
    question: 'SQL 집계함수 중 NULL 값을 포함하여 행의 수를 세는 것은?',
    options: ['COUNT(*)', 'COUNT(컬럼명)', 'SUM(컬럼명)', 'AVG(컬럼명)'],
    answer: 0,
    explanation: 'COUNT(*)는 NULL을 포함한 전체 행의 수를 세고, COUNT(컬럼명)은 해당 컬럼이 NULL이 아닌 행만 센다.'
  },
  {
    id: 39,
    subject: 'db',
    question: '다음 SQL문 중 사용자에게 테이블 조회 권한을 부여하는 것은?',
    options: [
      'GRANT SELECT ON 학생 TO 사용자A;',
      'REVOKE SELECT ON 학생 FROM 사용자A;',
      'INSERT INTO 학생 VALUES(1, \'홍길동\');',
      'DROP TABLE 학생;'
    ],
    answer: 0,
    explanation: 'GRANT는 사용자에게 특정 권한을 부여하는 DCL(Data Control Language)이다.'
  },
  {
    id: 40,
    subject: 'db',
    question: '제1정규형(1NF)의 조건으로 올바른 것은?',
    options: [
      '모든 속성의 값이 원자값(Atomic Value)이어야 한다',
      '부분 함수 종속이 제거되어야 한다',
      '이행 함수 종속이 제거되어야 한다',
      '다치 종속이 제거되어야 한다'
    ],
    answer: 0,
    explanation: '제1정규형은 릴레이션의 모든 속성 값이 더 이상 분해할 수 없는 원자값으로 구성되어야 하는 조건이다.'
  },
  {
    id: 41,
    subject: 'db',
    question: '제2정규형(2NF)에서 제거해야 하는 종속성은?',
    options: ['부분 함수 종속', '이행 함수 종속', '다치 종속', '조인 종속'],
    answer: 0,
    explanation: '제2정규형은 제1정규형을 만족하면서 기본키의 일부에 대한 부분 함수 종속을 제거한 것이다.'
  },
  {
    id: 42,
    subject: 'db',
    question: '제3정규형(3NF)을 만족하기 위해 제거해야 하는 것은?',
    options: ['이행 함수 종속', '부분 함수 종속', '다치 종속', '후보키가 아닌 결정자'],
    answer: 0,
    explanation: '제3정규형은 제2정규형을 만족하면서 이행적 함수 종속(A→B, B→C일 때 A→C)을 제거한 것이다.'
  },
  {
    id: 43,
    subject: 'db',
    question: '데이터베이스의 이상(Anomaly) 현상 중 삽입 이상에 대한 설명으로 옳은 것은?',
    options: [
      '불필요한 데이터를 함께 삽입해야만 원하는 데이터를 삽입할 수 있는 현상',
      '데이터 삭제 시 의도하지 않은 데이터도 함께 삭제되는 현상',
      '데이터 수정 시 일부만 수정되어 불일치가 발생하는 현상',
      '데이터 검색 시 잘못된 결과가 반환되는 현상'
    ],
    answer: 0,
    explanation: '삽입 이상은 원하는 데이터만 삽입할 수 없고 불필요한 데이터까지 함께 삽입해야 하는 문제를 말한다.'
  },
  {
    id: 44,
    subject: 'db',
    question: '트랜잭션의 ACID 특성 중 트랜잭션이 완료되면 그 결과가 영구적으로 반영되어야 하는 성질은?',
    options: ['지속성(Durability)', '원자성(Atomicity)', '일관성(Consistency)', '격리성(Isolation)'],
    answer: 0,
    explanation: '지속성(Durability)은 트랜잭션이 성공적으로 완료된 후에는 시스템 장애가 발생하더라도 결과가 영구적으로 반영되어야 함을 의미한다.'
  },
  {
    id: 45,
    subject: 'db',
    question: '데이터베이스 로킹(Locking)에서 교착상태(Deadlock)가 발생하는 상황은?',
    options: [
      '두 트랜잭션이 서로 상대방이 잠근 자원을 요청하며 무한 대기하는 상태',
      '하나의 트랜잭션이 모든 자원을 독점하는 상태',
      '트랜잭션이 잠금 없이 데이터에 접근하는 상태',
      '트랜잭션이 정상적으로 완료되는 상태'
    ],
    answer: 0,
    explanation: '교착상태는 두 개 이상의 트랜잭션이 서로 상대방이 잠금을 해제하기를 무한히 기다리는 상태이다.'
  },

  // ========================================
  // info-comm (정보통신 활용) - 15문항
  // ========================================
  {
    id: 46,
    subject: 'info-comm',
    question: '근거리 통신망(LAN)의 표준 규격인 IEEE 802.3은 어떤 기술에 관한 것인가?',
    options: ['이더넷(Ethernet)', '토큰 링(Token Ring)', '무선 LAN', '블루투스'],
    answer: 0,
    explanation: 'IEEE 802.3은 이더넷(Ethernet)에 대한 표준으로, CSMA/CD 방식을 사용하는 LAN 기술이다.'
  },
  {
    id: 47,
    subject: 'info-comm',
    question: '네트워크 토폴로지(Topology) 중 중앙에 허브가 있고 모든 노드가 허브에 연결되는 형태는?',
    options: ['성형(Star)', '버스형(Bus)', '링형(Ring)', '메시형(Mesh)'],
    answer: 0,
    explanation: '성형(Star) 토폴로지는 중앙 허브에 모든 노드가 점대점으로 연결되는 형태로, 장애 격리가 용이하다.'
  },
  {
    id: 48,
    subject: 'info-comm',
    question: '라우팅 프로토콜 중 거리 벡터(Distance Vector) 알고리즘을 사용하는 것은?',
    options: ['RIP', 'OSPF', 'IS-IS', 'BGP'],
    answer: 0,
    explanation: 'RIP(Routing Information Protocol)은 홉 수를 기준으로 최단 경로를 결정하는 대표적인 거리 벡터 라우팅 프로토콜이다.'
  },
  {
    id: 49,
    subject: 'info-comm',
    question: 'WAN(Wide Area Network)에서 사용되는 교환 방식이 아닌 것은?',
    options: ['토큰 패싱', '회선 교환', '패킷 교환', '메시지 교환'],
    answer: 0,
    explanation: '토큰 패싱은 LAN에서 사용되는 매체 접근 제어 방식이며, WAN에서는 회선 교환, 패킷 교환, 메시지 교환 방식을 사용한다.'
  },
  {
    id: 50,
    subject: 'info-comm',
    question: 'IPv4 주소 중 클래스 C의 기본 서브넷 마스크는?',
    options: ['255.255.255.0', '255.0.0.0', '255.255.0.0', '255.255.255.128'],
    answer: 0,
    explanation: '클래스 C의 기본 서브넷 마스크는 255.255.255.0이며, 호스트 부분은 마지막 8비트이다.'
  },
  {
    id: 51,
    subject: 'info-comm',
    question: 'DNS(Domain Name System)의 주요 기능은?',
    options: [
      '도메인 이름을 IP 주소로 변환한다',
      '데이터를 암호화한다',
      '이메일을 전송한다',
      '웹 페이지를 렌더링한다'
    ],
    answer: 0,
    explanation: 'DNS는 사람이 이해하기 쉬운 도메인 이름을 컴퓨터가 이해하는 IP 주소로 변환(해석)하는 시스템이다.'
  },
  {
    id: 52,
    subject: 'info-comm',
    question: 'HTTP 상태 코드 중 "404"가 의미하는 것은?',
    options: ['요청한 페이지를 찾을 수 없음', '서버 내부 오류', '접근 권한 없음', '요청 성공'],
    answer: 0,
    explanation: 'HTTP 404는 클라이언트가 요청한 리소스(페이지)를 서버에서 찾을 수 없을 때 반환되는 상태 코드이다.'
  },
  {
    id: 53,
    subject: 'info-comm',
    question: 'HTTPS에서 사용하는 보안 프로토콜은?',
    options: ['SSL/TLS', 'FTP', 'SMTP', 'SNMP'],
    answer: 0,
    explanation: 'HTTPS는 HTTP에 SSL(Secure Sockets Layer) 또는 TLS(Transport Layer Security)를 적용하여 데이터를 암호화하는 프로토콜이다.'
  },
  {
    id: 54,
    subject: 'info-comm',
    question: '대칭키 암호화 방식의 특징으로 옳은 것은?',
    options: [
      '암호화와 복호화에 같은 키를 사용한다',
      '공개키와 개인키를 사용한다',
      '키 분배 문제가 없다',
      '비대칭키 방식보다 속도가 느리다'
    ],
    answer: 0,
    explanation: '대칭키 암호화는 암호화와 복호화에 동일한 키를 사용하며, 비대칭키 방식보다 처리 속도가 빠르다는 장점이 있다.'
  },
  {
    id: 55,
    subject: 'info-comm',
    question: '다음 중 서비스 거부 공격(DoS)에 대한 설명으로 올바른 것은?',
    options: [
      '대량의 트래픽을 발생시켜 시스템의 정상적인 서비스를 방해한다',
      '데이터를 몰래 복사하여 유출한다',
      '사용자의 키보드 입력을 가로챈다',
      '시스템의 관리자 권한을 탈취한다'
    ],
    answer: 0,
    explanation: 'DoS 공격은 대량의 데이터나 요청을 보내 시스템의 자원을 소모시켜 정상적인 서비스를 불가능하게 만드는 공격이다.'
  },
  {
    id: 56,
    subject: 'info-comm',
    question: '방화벽(Firewall)의 주요 기능은?',
    options: [
      '내부 네트워크와 외부 네트워크 간의 트래픽을 제어한다',
      '데이터를 압축하여 전송 속도를 높인다',
      '바이러스를 치료한다',
      '네트워크 속도를 증가시킨다'
    ],
    answer: 0,
    explanation: '방화벽은 사전에 정의된 보안 규칙에 따라 내부와 외부 네트워크 간의 트래픽을 모니터링하고 제어하는 보안 시스템이다.'
  },
  {
    id: 57,
    subject: 'info-comm',
    question: '클라우드 컴퓨팅 서비스 모델 중 운영체제, 미들웨어, 런타임 등의 플랫폼을 제공하는 것은?',
    options: ['PaaS', 'IaaS', 'SaaS', 'DaaS'],
    answer: 0,
    explanation: 'PaaS(Platform as a Service)는 애플리케이션 개발에 필요한 플랫폼 환경을 클라우드로 제공하는 서비스 모델이다.'
  },
  {
    id: 58,
    subject: 'info-comm',
    question: 'IoT(Internet of Things)에 대한 설명으로 올바른 것은?',
    options: [
      '사물에 센서와 통신 기능을 내장하여 인터넷에 연결하는 기술이다',
      '초고속 인터넷 서비스를 제공하는 기술이다',
      '데이터를 암호화하여 전송하는 기술이다',
      '인공지능을 활용한 자연어 처리 기술이다'
    ],
    answer: 0,
    explanation: 'IoT는 각종 사물에 센서와 통신 기능을 내장하여 인터넷으로 연결함으로써 정보를 수집하고 제어하는 기술이다.'
  },
  {
    id: 59,
    subject: 'info-comm',
    question: '빅데이터의 3대 특성(3V)에 해당하지 않는 것은?',
    options: ['Verification', 'Volume', 'Velocity', 'Variety'],
    answer: 0,
    explanation: '빅데이터의 3V는 Volume(규모), Velocity(속도), Variety(다양성)이며, Verification은 3V에 포함되지 않는다.'
  },
  {
    id: 60,
    subject: 'info-comm',
    question: '인공지능(AI)에서 대량의 데이터를 학습하여 패턴을 인식하고 예측하는 기술은?',
    options: ['머신러닝(Machine Learning)', '블록체인(Blockchain)', 'RFID', 'VPN'],
    answer: 0,
    explanation: '머신러닝은 데이터를 기반으로 학습하고 패턴을 인식하여 예측이나 의사결정을 수행하는 인공지능의 한 분야이다.'
  }
]
