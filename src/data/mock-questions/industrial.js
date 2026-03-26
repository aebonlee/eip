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
  },

  // ========================================
  // info-sys (정보시스템 기반 기술) 추가 - 25문항
  // ========================================
  {
    id: 61,
    subject: 'info-sys',
    question: '세마포어(Semaphore)에 대한 설명으로 옳은 것은?',
    options: [
      '공유 자원에 대한 접근을 제어하기 위한 정수 변수와 P, V 연산으로 구성된다',
      '프로세스 간 메시지를 전달하는 통신 기법이다',
      'CPU 스케줄링 알고리즘의 한 종류이다',
      '메모리 할당 기법의 일종이다'
    ],
    answer: 0,
    explanation: '세마포어는 다익스트라(Dijkstra)가 제안한 동기화 도구로, 정수 변수 S와 P(Wait) 연산, V(Signal) 연산으로 구성되어 공유 자원에 대한 접근을 제어한다.'
  },
  {
    id: 62,
    subject: 'info-sys',
    question: '모니터(Monitor)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '공유 자원과 그에 대한 접근 함수를 하나의 모듈로 캡슐화한다',
      '세마포어와 달리 프로그래머가 직접 P, V 연산을 호출해야 한다',
      '상호 배제가 자동으로 보장된다',
      '조건 변수(Condition Variable)를 사용하여 동기화를 수행한다'
    ],
    answer: 1,
    explanation: '모니터는 공유 자원과 접근 함수를 캡슐화하여 상호 배제를 자동으로 보장하므로, 프로그래머가 직접 P, V 연산을 호출할 필요가 없다. 이는 세마포어의 단점을 보완한 것이다.'
  },
  {
    id: 63,
    subject: 'info-sys',
    question: '파일 시스템의 디렉터리 구조 중, 모든 파일이 하나의 디렉터리에 저장되는 구조는?',
    options: ['1단계 디렉터리', '2단계 디렉터리', '트리 구조 디렉터리', '비순환 그래프 디렉터리'],
    answer: 0,
    explanation: '1단계 디렉터리 구조는 모든 파일이 하나의 루트 디렉터리에 저장되며, 파일 이름이 중복될 수 없어 다수의 사용자 환경에서 불편하다는 단점이 있다.'
  },
  {
    id: 64,
    subject: 'info-sys',
    question: '세그먼테이션(Segmentation) 기법에 대한 설명으로 옳은 것은?',
    options: [
      '프로그램을 고정 크기의 블록으로 분할하여 메모리에 적재한다',
      '주기억장치를 동일한 크기의 프레임으로 나눈다',
      '프로그램을 논리적 단위인 세그먼트로 분할하여 메모리에 적재한다',
      '가상 메모리를 사용하지 않는 기법이다'
    ],
    answer: 2,
    explanation: '세그먼테이션은 프로그램을 코드, 데이터, 스택 등 논리적 의미를 가진 가변 크기의 세그먼트로 분할하여 메모리에 적재하는 가상 메모리 관리 기법이다.'
  },
  {
    id: 65,
    subject: 'info-sys',
    question: '페이징(Paging) 기법에서 페이지 테이블의 역할은?',
    options: [
      '디스크의 파일 위치를 관리한다',
      '프로세스의 실행 순서를 결정한다',
      'CPU 스케줄링 우선순위를 저장한다',
      '가상 주소를 물리 주소로 변환하는 매핑 정보를 저장한다'
    ],
    answer: 3,
    explanation: '페이지 테이블은 가상 메모리의 페이지 번호와 주기억장치의 프레임 번호를 매핑하여, 가상 주소를 실제 물리 주소로 변환하는 데 사용된다.'
  },
  {
    id: 66,
    subject: 'info-sys',
    question: '파이프라인(Pipeline) 기법에서 해저드(Hazard)에 해당하지 않는 것은?',
    options: ['세마포어 해저드(Semaphore Hazard)', '구조적 해저드(Structural Hazard)', '데이터 해저드(Data Hazard)', '제어 해저드(Control Hazard)'],
    answer: 0,
    explanation: '파이프라인 해저드에는 구조적 해저드(자원 충돌), 데이터 해저드(데이터 의존성), 제어 해저드(분기 명령)가 있다. 세마포어 해저드는 파이프라인 해저드가 아니다.'
  },
  {
    id: 67,
    subject: 'info-sys',
    question: '캐시 메모리의 매핑 방식 중 직접 매핑(Direct Mapping)의 특징은?',
    options: [
      '주기억장치의 블록이 캐시의 어떤 라인에든 적재될 수 있다',
      '주기억장치의 블록이 캐시의 정해진 하나의 라인에만 적재된다',
      '캐시를 여러 개의 세트로 나누어 세트 내에서 자유롭게 적재한다',
      '가장 적중률이 높은 매핑 방식이다'
    ],
    answer: 1,
    explanation: '직접 매핑은 주기억장치의 각 블록이 캐시의 특정 라인에만 매핑되는 방식으로, 구현이 간단하지만 충돌이 빈번하여 적중률이 낮을 수 있다.'
  },
  {
    id: 68,
    subject: 'info-sys',
    question: 'RISC(Reduced Instruction Set Computer)의 특징으로 옳지 않은 것은?',
    options: [
      '명령어의 종류가 많고 복잡한 명령어를 지원한다',
      '고정 길이 명령어를 사용한다',
      '레지스터 수가 많다',
      '하드와이어드 제어 방식을 주로 사용한다'
    ],
    answer: 0,
    explanation: '명령어의 종류가 많고 복잡한 명령어를 지원하는 것은 CISC의 특징이다. RISC는 명령어 수가 적고 단순한 명령어를 사용하며, 고정 길이 명령어와 하드와이어드 제어 방식을 채택한다.'
  },
  {
    id: 69,
    subject: 'info-sys',
    question: 'CISC(Complex Instruction Set Computer)의 특징으로 옳은 것은?',
    options: [
      '명령어의 길이가 고정되어 있다',
      '파이프라인 구현이 용이하다',
      '레지스터 수가 많다',
      '마이크로프로그래밍 제어 방식을 주로 사용한다'
    ],
    answer: 3,
    explanation: 'CISC는 명령어 종류가 많고 복잡하여 마이크로프로그래밍 방식으로 제어하며, 가변 길이 명령어를 사용한다. 파이프라인 구현이 어렵고 레지스터 수가 적은 편이다.'
  },
  {
    id: 70,
    subject: 'info-sys',
    question: '명령어 형식에서 0-주소 명령어가 사용하는 자료구조는?',
    options: ['스택(Stack)', '큐(Queue)', '연결 리스트', '트리'],
    answer: 0,
    explanation: '0-주소 명령어는 오퍼랜드 없이 연산 코드만으로 구성되며, 스택의 최상위 데이터를 이용하여 연산을 수행한다.'
  },
  {
    id: 71,
    subject: 'info-sys',
    question: '주소지정방식 중 명령어 내의 주소 필드가 실제 데이터 값을 직접 포함하는 방식은?',
    options: ['즉시 주소지정방식(Immediate Addressing)', '직접 주소지정방식(Direct Addressing)', '간접 주소지정방식(Indirect Addressing)', '레지스터 주소지정방식(Register Addressing)'],
    answer: 0,
    explanation: '즉시 주소지정방식은 명령어의 오퍼랜드 부분에 실제 데이터 값이 포함되어 있어 메모리 접근 없이 바로 데이터를 사용할 수 있어 속도가 빠르다.'
  },
  {
    id: 72,
    subject: 'info-sys',
    question: '간접 주소지정방식(Indirect Addressing)의 특징으로 옳은 것은?',
    options: [
      '명령어에 데이터가 직접 포함되어 있다',
      '메모리 접근이 한 번만 필요하다',
      '명령어에 기록된 주소가 실제 데이터의 주소를 가리키는 주소이다',
      '주소 지정 범위가 좁다'
    ],
    answer: 2,
    explanation: '간접 주소지정방식은 명령어의 주소 필드가 데이터의 실제 주소가 저장된 메모리 위치를 가리킨다. 따라서 메모리를 두 번 접근해야 하지만 주소 지정 범위가 넓다.'
  },
  {
    id: 73,
    subject: 'info-sys',
    question: '프로세스 동기화에서 임계 영역(Critical Section)의 조건에 해당하지 않는 것은?',
    options: [
      '선점(Preemption)',
      '상호 배제(Mutual Exclusion)',
      '진행(Progress)',
      '한정 대기(Bounded Waiting)'
    ],
    answer: 0,
    explanation: '임계 영역 문제의 해결 조건은 상호 배제(한 번에 하나의 프로세스만 진입), 진행(임계 영역에 프로세스가 없으면 대기 중인 프로세스가 진입 가능), 한정 대기(무한 대기 방지)이다. 선점은 해당 조건이 아니다.'
  },
  {
    id: 74,
    subject: 'info-sys',
    question: '임베디드 시스템(Embedded System)의 특징으로 옳지 않은 것은?',
    options: [
      '범용 컴퓨터와 동일한 운영체제를 사용한다',
      '특정 기능을 수행하도록 설계된 전용 시스템이다',
      '실시간 처리 능력이 요구되는 경우가 많다',
      '하드웨어와 소프트웨어가 밀접하게 결합되어 있다'
    ],
    answer: 0,
    explanation: '임베디드 시스템은 범용 운영체제가 아닌 RTOS(실시간 운영체제) 등 경량 운영체제를 사용하는 경우가 많다. 특정 목적에 최적화된 전용 시스템이다.'
  },
  {
    id: 75,
    subject: 'info-sys',
    question: '분산 시스템(Distributed System)의 장점에 해당하지 않는 것은?',
    options: [
      '자원 공유가 가능하다',
      '시스템 구조가 단순하여 관리가 쉽다',
      '신뢰성과 가용성이 향상된다',
      '점진적인 확장이 용이하다'
    ],
    answer: 1,
    explanation: '분산 시스템은 자원 공유, 신뢰성, 가용성, 확장성 면에서 장점이 있지만, 여러 노드가 네트워크로 연결된 복잡한 구조이므로 관리와 보안이 어렵다는 단점이 있다.'
  },
  {
    id: 76,
    subject: 'info-sys',
    question: '페이지 교체 알고리즘 중 LRU(Least Recently Used)에 대한 설명으로 옳은 것은?',
    options: [
      '가장 오랫동안 사용되지 않은 페이지를 교체한다',
      '가장 먼저 적재된 페이지를 교체한다',
      '앞으로 가장 오래 사용되지 않을 페이지를 교체한다',
      '사용 빈도가 가장 낮은 페이지를 교체한다'
    ],
    answer: 0,
    explanation: 'LRU는 가장 최근에 사용된 시점이 가장 오래된 페이지, 즉 가장 오랫동안 참조되지 않은 페이지를 교체 대상으로 선택하는 알고리즘이다.'
  },
  {
    id: 77,
    subject: 'info-sys',
    question: '캐시 메모리에서 연관 매핑(Associative Mapping)의 장점은?',
    options: [
      '하드웨어 구현이 가장 간단하다',
      '태그 비교에 시간이 거의 소요되지 않는다',
      '비용이 가장 저렴하다',
      '캐시의 어떤 위치에든 데이터를 저장할 수 있어 적중률이 높다'
    ],
    answer: 3,
    explanation: '연관 매핑(완전 연관 매핑)은 주기억장치의 블록을 캐시 어디에든 저장할 수 있어 적중률이 높지만, 모든 캐시 라인의 태그를 동시에 비교해야 하므로 하드웨어 비용이 높다.'
  },
  {
    id: 78,
    subject: 'info-sys',
    question: '파이프라인(Pipeline)에서 명령어 처리 단계 순서로 올바른 것은?',
    options: [
      '명령어 인출 → 명령어 해독 → 오퍼랜드 인출 → 실행 → 결과 저장',
      '명령어 해독 → 명령어 인출 → 실행 → 오퍼랜드 인출 → 결과 저장',
      '오퍼랜드 인출 → 명령어 인출 → 명령어 해독 → 실행 → 결과 저장',
      '실행 → 명령어 인출 → 명령어 해독 → 오퍼랜드 인출 → 결과 저장'
    ],
    answer: 0,
    explanation: '파이프라인의 기본 단계는 IF(명령어 인출) → ID(명령어 해독) → OF(오퍼랜드 인출) → EX(실행) → WB(결과 저장) 순서로 진행된다.'
  },
  {
    id: 79,
    subject: 'info-sys',
    question: '스래싱(Thrashing)에 대한 설명으로 옳은 것은?',
    options: [
      'CPU 사용률이 100%에 도달하는 현상이다',
      '프로세스가 교착상태에 빠지는 현상이다',
      '페이지 부재가 과도하게 발생하여 프로세스 처리 시간보다 페이지 교체 시간이 더 많아지는 현상이다',
      '메모리에 빈 공간이 충분히 남는 현상이다'
    ],
    answer: 2,
    explanation: '스래싱은 다중 프로그래밍 정도가 너무 높아져 페이지 부재가 빈번히 발생하고, 프로세스가 실제 실행보다 페이지 교체에 더 많은 시간을 소비하여 시스템 성능이 급격히 저하되는 현상이다.'
  },
  {
    id: 80,
    subject: 'info-sys',
    question: '세트 연관 매핑(Set Associative Mapping)에 대한 설명으로 옳은 것은?',
    options: [
      '직접 매핑과 연관 매핑의 장점을 결합한 방식이다',
      '주기억장치의 블록이 캐시의 특정 한 라인에만 저장된다',
      '캐시의 모든 라인을 동시에 비교해야 한다',
      '가장 단순한 캐시 매핑 방식이다'
    ],
    answer: 0,
    explanation: '세트 연관 매핑은 캐시를 여러 세트로 나누고, 주기억장치의 블록이 특정 세트 내의 어느 라인에든 저장될 수 있는 방식으로, 직접 매핑과 연관 매핑의 장점을 결합하였다.'
  },
  {
    id: 81,
    subject: 'info-sys',
    question: '2-주소 명령어 형식에서 "ADD A, B"의 의미로 옳은 것은?',
    options: [
      'B ← A + B (B에 A와 B의 합을 저장)',
      'A ← A + B (A에 A와 B의 합을 저장)',
      'ACC ← A + B (누산기에 합을 저장)',
      'A, B 두 곳 모두에 합을 저장'
    ],
    answer: 1,
    explanation: '2-주소 명령어에서 ADD A, B는 A와 B를 더한 결과를 첫 번째 오퍼랜드 A에 저장한다. 따라서 연산 후 A의 원래 값은 소실된다.'
  },
  {
    id: 82,
    subject: 'info-sys',
    question: '실시간 운영체제(RTOS)의 특징으로 옳은 것은?',
    options: [
      '정해진 시간 내에 반드시 작업을 완료해야 하는 시간 제약 조건이 있다',
      '대화형 처리를 위한 시분할 방식만 지원한다',
      '일괄 처리 시스템과 동일한 스케줄링을 사용한다',
      '응답 시간보다 처리량을 우선시한다'
    ],
    answer: 0,
    explanation: 'RTOS(Real-Time Operating System)는 정해진 데드라인 내에 작업을 완료해야 하는 시간 제약이 있으며, 항공 제어, 의료 장비 등 신뢰성이 요구되는 분야에 사용된다.'
  },
  {
    id: 83,
    subject: 'info-sys',
    question: '인터럽트(Interrupt)의 처리 과정 순서로 올바른 것은?',
    options: [
      '인터럽트 서비스 루틴 실행 → 인터럽트 요청 → 현재 상태 보존 → 상태 복귀',
      '현재 상태 보존 → 인터럽트 요청 → 상태 복귀 → 인터럽트 서비스 루틴 실행',
      '인터럽트 요청 → 인터럽트 서비스 루틴 실행 → 현재 상태 보존 → 상태 복귀',
      '인터럽트 요청 → 현재 상태 보존 → 인터럽트 서비스 루틴 실행 → 상태 복귀'
    ],
    answer: 3,
    explanation: '인터럽트는 요청 → 현재 수행 중인 프로그램의 상태(PC, 레지스터 등) 보존 → ISR(인터럽트 서비스 루틴) 실행 → 보존했던 상태로 복귀 순서로 처리된다.'
  },
  {
    id: 84,
    subject: 'info-sys',
    question: '분산 시스템의 투명성(Transparency) 중, 자원의 물리적 위치를 사용자가 알 필요 없는 것은?',
    options: ['위치 투명성', '이주 투명성', '복제 투명성', '병행 투명성'],
    answer: 0,
    explanation: '위치 투명성은 사용자가 자원의 물리적 위치를 알지 못해도 자원에 접근할 수 있는 성질이다. 이주 투명성은 자원 이동, 복제 투명성은 자원 복제를 사용자에게 숨기는 것이다.'
  },
  {
    id: 85,
    subject: 'info-sys',
    question: '워킹 세트(Working Set) 이론에 대한 설명으로 옳은 것은?',
    options: [
      '모든 페이지를 메모리에 적재하는 기법이다',
      '페이지 교체 시 무작위로 페이지를 선택하는 기법이다',
      '일정 시간 동안 자주 참조되는 페이지들의 집합을 메모리에 유지하여 스래싱을 방지한다',
      '가장 최근에 적재된 페이지를 교체하는 기법이다'
    ],
    answer: 2,
    explanation: '워킹 세트는 데닝(Denning)이 제안한 이론으로, 프로세스가 일정 시간 동안 참조하는 페이지의 집합을 메모리에 유지함으로써 페이지 부재율을 줄이고 스래싱을 방지한다.'
  },

  // ========================================
  // programming (프로그래밍 언어 활용) 추가 - 25문항
  // ========================================
  {
    id: 86,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    printf("%d", factorial(5));\n    return 0;\n}',
    options: ['120', '24', '60', '720'],
    answer: 0,
    explanation: 'factorial(5) = 5 * 4 * 3 * 2 * 1 = 120이다. 재귀함수는 자기 자신을 호출하며, n이 1 이하일 때 1을 반환하는 종료 조건이 있다.'
  },
  {
    id: 87,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\nint main() {\n    int a = 3;\n    printf("%d", SQUARE(a + 1));\n    return 0;\n}',
    options: ['7', '16', '10', '9'],
    answer: 1,
    explanation: '매크로 SQUARE(x)는 ((x) * (x))로 정의되어 있으므로, SQUARE(a+1)은 ((a+1) * (a+1)) = ((3+1) * (3+1)) = 4 * 4 = 16이다. 괄호가 없었다면 다른 결과가 나올 수 있다.'
  },
  {
    id: 88,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 12;\n    int b = a >> 2;\n    printf("%d", b);\n    return 0;\n}',
    options: ['3', '6', '48', '24'],
    answer: 0,
    explanation: '>> 연산자는 오른쪽 시프트 연산이다. 12의 이진수는 1100이고, 오른쪽으로 2비트 시프트하면 0011 즉 3이 된다. 오른쪽 시프트 n비트는 2^n으로 나누는 효과가 있다.'
  },
  {
    id: 89,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(3 * sizeof(int));\n    p[0] = 10; p[1] = 20; p[2] = 30;\n    printf("%d", *(p + 1));\n    free(p);\n    return 0;\n}',
    options: ['10', '30', '20', '0'],
    answer: 2,
    explanation: 'malloc으로 int 3개 크기의 동적 메모리를 할당하고 각각 10, 20, 30을 저장했다. *(p+1)은 p[1]과 같으므로 20이 출력된다. 사용 후 free로 메모리를 해제해야 한다.'
  },
  {
    id: 90,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\nabstract class Shape {\n    abstract double area();\n}\nclass Circle extends Shape {\n    double r = 5;\n    double area() { return 3.14 * r * r; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Circle();\n        System.out.println(s.area());\n    }\n}',
    options: ['31.4', '15.7', '3.14', '78.5'],
    answer: 3,
    explanation: 'Circle 클래스는 추상 클래스 Shape을 상속받아 area() 메서드를 구현한다. 반지름 r이 5이므로 3.14 * 5 * 5 = 78.5가 출력된다.'
  },
  {
    id: 91,
    subject: 'programming',
    question: 'Java의 컬렉션(Collection) 인터페이스 중, 순서가 있고 중복을 허용하는 것은?',
    options: ['List', 'Set', 'Map', 'Queue'],
    answer: 0,
    explanation: 'List는 순서(인덱스)가 있고 중복 요소를 허용하는 컬렉션이다. Set은 중복을 허용하지 않고, Map은 키-값 쌍으로 데이터를 저장하며 키 중복을 허용하지 않는다.'
  },
  {
    id: 92,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(10);\n        list.add(20);\n        list.add(30);\n        list.remove(1);\n        System.out.println(list.get(1));\n    }\n}',
    options: ['20', '30', '10', '에러 발생'],
    answer: 1,
    explanation: 'ArrayList에 10, 20, 30을 추가한 후 인덱스 1의 요소(20)를 제거하면 리스트는 [10, 30]이 된다. 이후 get(1)은 인덱스 1의 요소인 30을 반환한다.'
  },
  {
    id: 93,
    subject: 'programming',
    question: 'Java의 제네릭(Generic)에 대한 설명으로 옳은 것은?',
    options: [
      '실행 시간에 데이터 타입을 동적으로 결정한다',
      '기본 자료형(int, double 등)만 사용할 수 있다',
      '클래스나 메서드에서 사용할 데이터 타입을 컴파일 시에 지정하여 타입 안정성을 높인다',
      '컬렉션에서는 사용할 수 없다'
    ],
    answer: 2,
    explanation: '제네릭은 클래스, 인터페이스, 메서드에서 사용할 타입을 파라미터로 지정하여 컴파일 시 타입 체크를 수행함으로써 타입 안정성을 보장한다.'
  },
  {
    id: 94,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {\n            for (int i = 0; i < 3; i++)\n                System.out.print("A");\n        });\n        t.start();\n        for (int i = 0; i < 3; i++)\n            System.out.print("B");\n    }\n}',
    options: [
      '실행할 때마다 A와 B의 출력 순서가 달라질 수 있다',
      '항상 AAABBB가 출력된다',
      '항상 BBBAAA가 출력된다',
      '항상 ABABAB가 출력된다'
    ],
    answer: 0,
    explanation: '쓰레드는 운영체제의 스케줄러에 의해 실행 순서가 결정되므로, main 쓰레드와 새로 생성된 쓰레드의 출력 순서는 실행할 때마다 달라질 수 있다.'
  },
  {
    id: 95,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\nf = open("test.txt", "w")\nf.write("Hello")\nf.close()\nf = open("test.txt", "r")\nprint(f.read())\nf.close()',
    options: ['Hello', '에러 발생', '빈 문자열', 'None'],
    answer: 0,
    explanation: '"w" 모드로 파일을 열어 "Hello"를 쓴 후 닫고, "r" 모드로 다시 열어 읽으면 "Hello"가 출력된다. "w" 모드는 쓰기 모드, "r" 모드는 읽기 모드이다.'
  },
  {
    id: 96,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("A", end="")\nexcept Exception:\n    print("B", end="")\nfinally:\n    print("C", end="")',
    options: ['BC', 'A', 'ABC', 'AC'],
    answer: 3,
    explanation: '10/0은 ZeroDivisionError를 발생시키므로 첫 번째 except 블록이 실행되어 "A"가 출력된다. finally 블록은 예외 발생 여부와 관계없이 항상 실행되므로 "C"도 출력된다.'
  },
  {
    id: 97,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\nimport math\nprint(math.floor(3.7), math.ceil(3.2))',
    options: ['3 4', '4 3', '3 3', '4 4'],
    answer: 0,
    explanation: 'math.floor()는 내림(바닥) 함수로 3.7을 3으로, math.ceil()은 올림(천장) 함수로 3.2를 4로 변환한다.'
  },
  {
    id: 98,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\nimport re\ntext = "abc123def456"\nresult = re.findall("[0-9]+", text)\nprint(result)',
    options: ["['abc', 'def']", "['123', '456']", "['123456']", "['1', '2', '3', '4', '5', '6']"],
    answer: 1,
    explanation: 're.findall()은 정규식 패턴과 일치하는 모든 부분을 리스트로 반환한다. [0-9]+는 연속된 숫자를 의미하므로 "123"과 "456"이 각각 매칭된다.'
  },
  {
    id: 99,
    subject: 'programming',
    question: '단일 연결 리스트(Singly Linked List)에서 맨 앞에 노드를 삽입하는 시간 복잡도는?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    answer: 0,
    explanation: '단일 연결 리스트에서 맨 앞에 노드를 삽입하려면 새 노드의 next가 기존 head를 가리키도록 하고 head를 새 노드로 갱신하면 되므로 O(1)의 시간이 걸린다.'
  },
  {
    id: 100,
    subject: 'programming',
    question: '해시 테이블(Hash Table)에서 충돌(Collision) 해결 방법에 해당하지 않는 것은?',
    options: [
      '체이닝(Chaining)',
      '개방 주소법(Open Addressing)',
      '이중 해싱(Double Hashing)',
      '이진 탐색법(Binary Search)'
    ],
    answer: 3,
    explanation: '해시 충돌 해결 방법에는 체이닝(연결 리스트 활용), 개방 주소법(선형 탐사, 이차 탐사, 이중 해싱 등)이 있다. 이진 탐색법은 정렬된 배열에서 검색하는 알고리즘으로 해시 충돌 해결 방법이 아니다.'
  },
  {
    id: 101,
    subject: 'programming',
    question: '이진 탐색 트리(BST)에서 노드를 검색하는 평균 시간 복잡도는?',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
    answer: 0,
    explanation: '이진 탐색 트리는 왼쪽 자식 < 부모 < 오른쪽 자식의 성질을 가지므로 균형 잡힌 경우 검색 시 매 단계마다 탐색 범위가 절반으로 줄어 평균 O(log n)의 시간이 걸린다.'
  },
  {
    id: 102,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    int c = a & b;\n    printf("%d", c);\n    return 0;\n}',
    options: ['7', '8', '1', '15'],
    answer: 2,
    explanation: '& 연산자는 비트 AND 연산이다. 5는 이진수 101, 3은 이진수 011이다. 101 & 011 = 001 즉 1이 된다.'
  },
  {
    id: 103,
    subject: 'programming',
    question: 'DFS(깊이 우선 탐색)에 사용되는 자료구조는?',
    options: ['스택(Stack)', '큐(Queue)', '힙(Heap)', '해시 테이블'],
    answer: 0,
    explanation: 'DFS는 깊이를 우선으로 탐색하며, 재귀 호출이나 명시적 스택(Stack)을 사용하여 구현한다. 반면 BFS(너비 우선 탐색)는 큐(Queue)를 사용한다.'
  },
  {
    id: 104,
    subject: 'programming',
    question: 'BFS(너비 우선 탐색)에 사용되는 자료구조는?',
    options: ['큐(Queue)', '스택(Stack)', '힙(Heap)', '트리(Tree)'],
    answer: 0,
    explanation: 'BFS는 시작 노드와 가까운 노드부터 탐색하며, 큐(Queue)를 사용하여 방문할 노드를 관리한다. 먼저 발견된 노드를 먼저 방문하는 FIFO 방식이다.'
  },
  {
    id: 105,
    subject: 'programming',
    question: '동적 프로그래밍(Dynamic Programming)의 핵심 원리로 옳은 것은?',
    options: [
      '항상 탐욕적으로 최적해를 선택한다',
      '부분 문제의 최적 해를 저장(메모이제이션)하여 중복 계산을 피한다',
      '모든 경우의 수를 반드시 탐색한다',
      '분할한 부분 문제가 서로 독립적이어야 한다'
    ],
    answer: 1,
    explanation: '동적 프로그래밍은 최적 부분 구조와 중복 부분 문제의 특성을 가진 문제에 적용하며, 이미 계산한 부분 문제의 결과를 저장(메모이제이션)하여 중복 계산을 방지한다.'
  },
  {
    id: 106,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int b = a++;\n    int c = ++a;\n    printf("%d %d %d", a, b, c);\n    return 0;\n}',
    options: ['12 10 12', '11 10 12', '11 11 12', '12 11 12'],
    answer: 0,
    explanation: 'b = a++에서 b에 현재 a값 10이 대입된 후 a가 11이 된다. c = ++a에서 a가 먼저 12로 증가한 후 c에 12가 대입된다. 따라서 a=12, b=10, c=12이다.'
  },
  {
    id: 107,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\ndef func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(func(1))\nprint(func(2))',
    options: ['[1]\\n[2]', '[1]\\n[1]', '에러 발생', '[1]\\n[1, 2]'],
    answer: 3,
    explanation: 'Python에서 함수의 기본 매개변수가 가변 객체(리스트 등)이면 함수 정의 시 한 번만 생성되어 호출 간에 공유된다. 따라서 첫 호출에서 [1], 두 번째 호출에서 [1, 2]가 반환된다.'
  },
  {
    id: 108,
    subject: 'programming',
    question: '다음 Java 프로그램의 실행 결과는?\n\npublic class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "Hello";\n        String s3 = new String("Hello");\n        System.out.print(s1 == s2);\n        System.out.print(" ");\n        System.out.print(s1 == s3);\n    }\n}',
    options: ['true false', 'true true', 'false false', 'false true'],
    answer: 0,
    explanation: 's1과 s2는 문자열 리터럴이므로 String Pool에서 같은 객체를 참조하여 ==이 true이다. s3는 new로 생성한 새 객체이므로 s1과 주소가 다르기 때문에 ==이 false이다.'
  },
  {
    id: 109,
    subject: 'programming',
    question: '다음 C 프로그램의 실행 결과는?\n\n#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 3, y = 7;\n    swap(&x, &y);\n    printf("%d %d", x, y);\n    return 0;\n}',
    options: ['3 7', '7 3', '7 7', '3 3'],
    answer: 1,
    explanation: '포인터를 이용한 call by reference 방식으로 x와 y의 값을 교환한다. swap 함수에서 *a와 *b의 값이 교환되므로 main에서 x=7, y=3이 된다.'
  },
  {
    id: 110,
    subject: 'programming',
    question: '다음 Python 프로그램의 실행 결과는?\n\ndata = {"a": 1, "b": 2, "c": 3}\nresult = [k for k, v in data.items() if v >= 2]\nprint(result)',
    options: ["['a', 'b', 'c']", "[2, 3]", "['b', 'c']", "['a']"],
    answer: 2,
    explanation: '딕셔너리 컴프리헨션에서 value가 2 이상인 항목의 key만 리스트로 만든다. b의 값이 2, c의 값이 3이므로 조건을 만족하여 결과는 [\"b\", \"c\"]이다.'
  },

  // ========================================
  // db (데이터베이스 활용) 추가 - 25문항
  // ========================================
  {
    id: 111,
    subject: 'db',
    question: 'SQL의 서브쿼리 유형 중 메인 쿼리의 각 행에 대해 서브쿼리가 반복 실행되는 것은?',
    options: ['상관 서브쿼리(Correlated Subquery)', '비상관 서브쿼리', '인라인 뷰(Inline View)', '스칼라 서브쿼리'],
    answer: 0,
    explanation: '상관 서브쿼리는 서브쿼리가 메인 쿼리의 컬럼을 참조하며, 메인 쿼리의 각 행마다 서브쿼리가 반복 실행된다. 비상관 서브쿼리는 메인 쿼리와 독립적으로 한 번만 실행된다.'
  },
  {
    id: 112,
    subject: 'db',
    question: 'SQL에서 EXISTS와 IN의 차이점으로 옳은 것은?',
    options: [
      'EXISTS는 값을 비교하고, IN은 존재 여부를 확인한다',
      'EXISTS는 서브쿼리의 결과가 존재하는지 여부만 확인하고, IN은 값의 목록과 비교한다',
      '둘 다 기능과 성능이 완전히 동일하다',
      'EXISTS는 단일 행만 반환하고, IN은 다중 행을 반환한다'
    ],
    answer: 1,
    explanation: 'EXISTS는 서브쿼리에 결과 행이 하나라도 존재하면 TRUE를 반환하고, IN은 지정된 값의 목록 안에 해당 값이 포함되는지 비교한다. 대용량 데이터에서는 EXISTS가 더 효율적일 수 있다.'
  },
  {
    id: 113,
    subject: 'db',
    question: 'SQL의 UNION과 UNION ALL의 차이점은?',
    options: [
      'UNION은 중복 행을 제거하고, UNION ALL은 중복을 포함한다',
      'UNION은 중복을 포함하고, UNION ALL은 중복을 제거한다',
      'UNION은 정렬이 불가능하고, UNION ALL은 정렬이 가능하다',
      '둘 다 중복 처리 방식이 동일하다'
    ],
    answer: 0,
    explanation: 'UNION은 두 SELECT 결과를 합치면서 중복 행을 제거하고, UNION ALL은 중복을 제거하지 않고 모든 행을 포함한다. UNION ALL이 중복 제거 과정이 없어 성능이 더 빠르다.'
  },
  {
    id: 114,
    subject: 'db',
    question: 'SQL에서 VIEW(뷰)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '뷰는 하나 이상의 테이블로부터 유도된 가상 테이블이다',
      '뷰를 통해 데이터 보안을 강화할 수 있다',
      '뷰는 물리적으로 데이터를 저장하는 실제 테이블이다',
      '뷰에 대한 삽입, 갱신, 삭제에 제약이 있을 수 있다'
    ],
    answer: 2,
    explanation: '뷰는 논리적으로 존재하는 가상 테이블이며, 물리적으로 데이터를 저장하지 않는다. 기본 테이블에서 유도되어 정의되며, 보안, 편의성, 독립성을 제공한다.'
  },
  {
    id: 115,
    subject: 'db',
    question: '트랜잭션에서 SAVEPOINT의 역할은?',
    options: [
      '트랜잭션 내 특정 지점을 표시하여 해당 지점까지만 ROLLBACK할 수 있게 한다',
      '트랜잭션을 자동으로 커밋한다',
      '트랜잭션의 시작 지점을 설정한다',
      '트랜잭션의 격리 수준을 설정한다'
    ],
    answer: 0,
    explanation: 'SAVEPOINT는 트랜잭션 내에 중간 저장 지점을 설정하여, ROLLBACK TO SAVEPOINT 명령으로 해당 지점까지만 작업을 취소할 수 있게 한다. 전체 트랜잭션을 롤백하지 않아도 된다.'
  },
  {
    id: 116,
    subject: 'db',
    question: '트랜잭션 격리 수준(Isolation Level) 중 가장 높은 수준은?',
    options: ['REPEATABLE READ', 'READ COMMITTED', 'READ UNCOMMITTED', 'SERIALIZABLE'],
    answer: 3,
    explanation: '격리 수준은 READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE 순으로 높아진다. SERIALIZABLE은 완벽한 격리를 보장하지만 동시성이 가장 낮다.'
  },
  {
    id: 117,
    subject: 'db',
    question: '팬텀 읽기(Phantom Read) 현상을 방지할 수 있는 최소 격리 수준은?',
    options: ['SERIALIZABLE', 'REPEATABLE READ', 'READ COMMITTED', 'READ UNCOMMITTED'],
    answer: 0,
    explanation: '팬텀 읽기는 같은 쿼리를 두 번 실행할 때 처음에 없던 행이 나타나는 현상이다. 이를 방지하려면 가장 높은 격리 수준인 SERIALIZABLE이 필요하다.'
  },
  {
    id: 118,
    subject: 'db',
    question: '데이터 무결성 제약 조건 중 참조 무결성(Referential Integrity)에 대한 설명으로 옳은 것은?',
    options: [
      '기본키 값은 NULL이 될 수 있다',
      '외래키 값은 참조하는 테이블의 기본키 값이거나 NULL이어야 한다',
      '하나의 테이블에 기본키가 여러 개 존재할 수 있다',
      '속성 값은 반드시 정수형이어야 한다'
    ],
    answer: 1,
    explanation: '참조 무결성은 외래키 값이 참조되는 테이블의 기본키 값으로 존재하거나 NULL이어야 한다는 규정이다. 존재하지 않는 값을 참조할 수 없다.'
  },
  {
    id: 119,
    subject: 'db',
    question: 'B-tree 인덱스의 특징으로 옳은 것은?',
    options: [
      '범위 검색과 정렬된 데이터 접근에 효율적이다',
      '정확한 일치 검색만 가능하다',
      '데이터 삽입 시 재구성이 필요 없다',
      '리프 노드에만 키 값이 존재한다'
    ],
    answer: 0,
    explanation: 'B-tree 인덱스는 균형 트리 구조로 범위 검색, 정렬, 동등 비교 등 다양한 검색에 효율적이다. 모든 노드에 키 값이 있으며, 삽입/삭제 시 균형을 유지하기 위한 재구성이 필요할 수 있다.'
  },
  {
    id: 120,
    subject: 'db',
    question: '해시 인덱스(Hash Index)의 특징으로 옳은 것은?',
    options: [
      '범위 검색에 효율적이다',
      '데이터가 정렬되어 저장된다',
      '동등 비교(=) 검색에 매우 빠르지만 범위 검색에는 비효율적이다',
      'B-tree보다 모든 상황에서 빠르다'
    ],
    answer: 2,
    explanation: '해시 인덱스는 해시 함수를 이용하여 키를 직접 매핑하므로 동등 비교(=) 검색에 O(1)에 가까운 성능을 보이지만, 정렬되지 않아 범위 검색이나 ORDER BY에는 비효율적이다.'
  },
  {
    id: 121,
    subject: 'db',
    question: 'ER 다이어그램에서 다대다(M:N) 관계를 릴레이션으로 변환할 때 올바른 방법은?',
    options: [
      '한쪽 릴레이션에 다른 쪽의 기본키를 외래키로 추가한다',
      '두 릴레이션을 하나로 합친다',
      '변환이 불가능하므로 1:N 관계로 분해해야 한다',
      '새로운 릴레이션을 생성하고 양쪽 엔터티의 기본키를 외래키로 포함시킨다'
    ],
    answer: 3,
    explanation: 'M:N 관계는 관계 자체를 별도의 릴레이션으로 변환하고, 양쪽 엔터티의 기본키를 외래키이자 복합 기본키로 포함시켜야 한다.'
  },
  {
    id: 122,
    subject: 'db',
    question: '관계대수 연산 중 두 릴레이션의 공통 속성을 기준으로 조건에 맞는 튜플을 결합하는 연산은?',
    options: ['조인(Join)', '프로젝트(Project)', '셀렉트(Select)', '디비전(Division)'],
    answer: 0,
    explanation: '조인(Join)은 두 릴레이션에서 공통 속성이나 조건을 기준으로 관련된 튜플을 결합하는 이항 연산이다. 프로젝트는 속성 추출, 셀렉트는 조건에 맞는 튜플 추출이다.'
  },
  {
    id: 123,
    subject: 'db',
    question: '관계대수에서 프로젝트(Project) 연산의 기능으로 올바른 것은?',
    options: [
      '릴레이션에서 특정 속성(열)만 추출한다',
      '릴레이션에서 조건을 만족하는 행(튜플)만 추출한다',
      '두 릴레이션을 결합한다',
      '릴레이션에서 중복된 튜플을 추가한다'
    ],
    answer: 0,
    explanation: '프로젝트(π) 연산은 릴레이션에서 원하는 속성(열)만 선택하여 추출하는 연산으로, SQL의 SELECT 절에서 특정 컬럼을 선택하는 것과 유사하다. 결과에서 중복 튜플은 제거된다.'
  },
  {
    id: 124,
    subject: 'db',
    question: '다음 릴레이션에서 이행적 함수 종속이 존재하는 경우는?\n\n학번 → 학과, 학과 → 학과사무실',
    options: [
      '학과 → 학번',
      '학번 → 학과사무실 (학번이 학과를 거쳐 학과사무실을 결정)',
      '학과사무실 → 학번',
      '학과사무실 → 학과'
    ],
    answer: 1,
    explanation: '이행적 함수 종속은 A → B이고 B → C일 때 A → C가 성립하는 것이다. 학번 → 학과, 학과 → 학과사무실이므로 학번 → 학과사무실이 이행적 함수 종속이다. 제3정규형에서는 이를 제거한다.'
  },
  {
    id: 125,
    subject: 'db',
    question: '제2정규형(2NF)을 만족하기 위한 조건은?',
    options: [
      '제1정규형이면서 부분 함수 종속을 제거해야 한다',
      '제1정규형이면서 이행적 함수 종속을 제거해야 한다',
      '모든 속성이 원자값이어야 한다',
      '다치 종속을 제거해야 한다'
    ],
    answer: 0,
    explanation: '제2정규형은 제1정규형을 만족하면서, 기본키가 아닌 모든 속성이 기본키에 대해 완전 함수 종속이어야 한다. 즉, 부분 함수 종속(기본키의 일부에만 종속)을 제거해야 한다.'
  },
  {
    id: 126,
    subject: 'db',
    question: 'BCNF(Boyce-Codd Normal Form)에 대한 설명으로 옳은 것은?',
    options: [
      '다치 종속을 제거한 정규형이다',
      '제2정규형과 동일한 조건이다',
      '모든 결정자가 후보키여야 한다',
      '조인 종속을 제거한 정규형이다'
    ],
    answer: 2,
    explanation: 'BCNF는 제3정규형을 강화한 것으로, 릴레이션의 모든 결정자가 후보키여야 한다. 제3정규형에서 결정자가 후보키가 아닌 경우의 이상 현상을 해결한다.'
  },
  {
    id: 127,
    subject: 'db',
    question: '다음 SQL문의 실행 결과로 올바른 것은?\n\nSELECT COALESCE(NULL, NULL, 3, 4)',
    options: ['3', 'NULL', '4', '에러 발생'],
    answer: 0,
    explanation: 'COALESCE 함수는 인자들 중 첫 번째 NULL이 아닌 값을 반환한다. NULL, NULL을 건너뛰고 3이 첫 번째 NULL이 아닌 값이므로 3을 반환한다.'
  },
  {
    id: 128,
    subject: 'db',
    question: 'SQL에서 GROUP BY 절과 함께 조건을 지정할 때 사용하는 절은?',
    options: ['HAVING', 'WHERE', 'ORDER BY', 'LIMIT'],
    answer: 0,
    explanation: 'HAVING 절은 GROUP BY로 그룹화된 결과에 조건을 지정하며, 집계 함수를 조건으로 사용할 수 있다. WHERE 절은 그룹화 전에 개별 행에 대한 조건을 지정한다.'
  },
  {
    id: 129,
    subject: 'db',
    question: '다음 SQL문의 결과는?\n\nSELECT COUNT(*), COUNT(컬럼A)\nFROM 테이블\n-- 테이블: 5행, 컬럼A에 NULL 2개 포함',
    options: ['5, 5', '3, 3', '3, 5', '5, 3'],
    answer: 3,
    explanation: 'COUNT(*)는 NULL을 포함한 전체 행 수를 반환하므로 5이고, COUNT(컬럼A)는 컬럼A가 NULL이 아닌 행만 세므로 5-2=3이다.'
  },
  {
    id: 130,
    subject: 'db',
    question: '뷰(VIEW)를 사용하는 주된 이점으로 옳지 않은 것은?',
    options: [
      '물리적 저장 공간을 절약하여 대용량 데이터 저장에 유리하다',
      '사용자에게 필요한 데이터만 제공하여 보안을 강화한다',
      '복잡한 쿼리를 단순화할 수 있다',
      '논리적 데이터 독립성을 제공한다'
    ],
    answer: 0,
    explanation: '뷰는 가상 테이블로 별도의 물리적 저장 공간을 사용하지 않으므로 저장 공간 절약과는 직접적인 관련이 없다. 뷰의 주요 이점은 보안, 쿼리 단순화, 데이터 독립성이다.'
  },
  {
    id: 131,
    subject: 'db',
    question: '역정규화(Denormalization)를 수행하는 주된 이유는?',
    options: [
      '데이터 무결성을 최대화한다',
      '조회 성능을 향상시키기 위해 데이터 중복을 허용한다',
      '저장 공간을 절약한다',
      '이상 현상(Anomaly)을 제거한다'
    ],
    answer: 1,
    explanation: '역정규화는 정규화된 테이블에 의도적으로 중복을 추가하여 조인 연산을 줄이고 조회 성능을 향상시키는 것이다. 데이터 무결성이 저하될 수 있으므로 신중하게 적용해야 한다.'
  },
  {
    id: 132,
    subject: 'db',
    question: '관계대수에서 셀렉트(Select) 연산의 기능으로 올바른 것은?',
    options: [
      '릴레이션에서 조건을 만족하는 튜플(행)을 추출한다',
      '릴레이션에서 특정 속성(열)을 추출한다',
      '두 릴레이션을 합집합한다',
      '두 릴레이션을 조인한다'
    ],
    answer: 0,
    explanation: '셀렉트(σ) 연산은 릴레이션에서 주어진 조건을 만족하는 튜플(행)만 선택하여 추출하는 연산이다. SQL의 WHERE 절에 해당한다.'
  },
  {
    id: 133,
    subject: 'db',
    question: '데이터베이스에서 로킹(Locking) 기법의 단위가 클 때의 특징은?',
    options: [
      '병행성이 높아지고 관리 오버헤드도 줄어든다',
      '병행성이 높아지고 관리 오버헤드도 커진다',
      '병행성은 낮아지고 관리 오버헤드도 커진다',
      '병행성(동시성)은 낮아지고 관리 오버헤드는 줄어든다'
    ],
    answer: 3,
    explanation: '로킹 단위가 크면(예: 테이블 단위) 잠금 수가 적어 관리가 쉽지만, 다른 트랜잭션의 접근이 제한되어 병행성이 낮아진다. 반대로 단위가 작으면 병행성은 높지만 관리 비용이 증가한다.'
  },
  {
    id: 134,
    subject: 'db',
    question: '다음 SQL문에서 사용된 조인의 종류는?\n\nSELECT A.이름, B.과목명\nFROM 학생 A LEFT OUTER JOIN 수강 B\nON A.학번 = B.학번',
    options: [
      '왼쪽 외부 조인 - 학생 테이블의 모든 행이 결과에 포함된다',
      '내부 조인 - 양쪽 테이블의 일치하는 행만 포함된다',
      '오른쪽 외부 조인 - 수강 테이블의 모든 행이 결과에 포함된다',
      '자연 조인 - 공통 컬럼으로 자동 조인된다'
    ],
    answer: 0,
    explanation: 'LEFT OUTER JOIN은 왼쪽 테이블(학생)의 모든 행을 결과에 포함시키고, 오른쪽 테이블(수강)에 매칭되지 않는 경우 NULL로 채운다.'
  },
  {
    id: 135,
    subject: 'db',
    question: '다음 SQL문의 결과로 올바른 것은?\n\nCREATE VIEW v_emp AS\nSELECT 이름, 부서 FROM 직원 WHERE 부서 = \'영업\';\n\nSELECT * FROM v_emp;',
    options: [
      '직원 테이블에서 부서가 영업인 행의 이름과 부서가 조회된다',
      '직원 테이블의 모든 행이 조회된다',
      '에러가 발생한다',
      '빈 결과가 반환된다'
    ],
    answer: 0,
    explanation: '뷰 v_emp는 직원 테이블에서 부서가 영업인 행의 이름과 부서만 선택하도록 정의되었다. SELECT * FROM v_emp를 실행하면 해당 조건에 맞는 데이터가 조회된다.'
  },

  // ========================================
  // info-comm (정보통신 활용) 추가 - 25문항
  // ========================================
  {
    id: 136,
    subject: 'info-comm',
    question: 'FTP(File Transfer Protocol)의 기본 포트 번호로 옳은 것은?',
    options: ['20, 21', '80, 443', '25, 110', '53, 67'],
    answer: 0,
    explanation: 'FTP는 데이터 전송에 20번 포트, 제어(명령) 연결에 21번 포트를 사용한다. 80은 HTTP, 443은 HTTPS, 25는 SMTP, 110은 POP3 포트이다.'
  },
  {
    id: 137,
    subject: 'info-comm',
    question: 'SMTP(Simple Mail Transfer Protocol)의 역할로 옳은 것은?',
    options: [
      '이메일을 수신자가 메일 서버에서 다운로드한다',
      '이메일을 발신자에서 수신자의 메일 서버로 전송한다',
      '웹 페이지를 전송한다',
      '파일을 전송한다'
    ],
    answer: 1,
    explanation: 'SMTP는 이메일을 보내는 데 사용되는 프로토콜로, 발신자의 메일 클라이언트에서 수신자의 메일 서버로 이메일을 전송하는 역할을 한다. 포트 번호 25를 사용한다.'
  },
  {
    id: 138,
    subject: 'info-comm',
    question: 'POP3와 IMAP의 차이점으로 옳은 것은?',
    options: [
      'POP3는 메일을 다운로드 후 서버에서 삭제하는 것이 기본이고, IMAP은 서버에 메일을 유지한다',
      'POP3는 서버에 메일을 유지하고, IMAP은 다운로드 후 삭제한다',
      '둘 다 메일 발송에 사용되는 프로토콜이다',
      'POP3가 IMAP보다 더 최신 프로토콜이다'
    ],
    answer: 0,
    explanation: 'POP3(Post Office Protocol 3)는 메일을 로컬에 다운로드하고 서버에서 삭제하는 것이 기본이며, IMAP(Internet Message Access Protocol)은 서버에 메일을 유지하여 여러 기기에서 동기화할 수 있다.'
  },
  {
    id: 139,
    subject: 'info-comm',
    question: 'IPv6의 주소 길이는 몇 비트인가?',
    options: ['32비트', '64비트', '128비트', '256비트'],
    answer: 2,
    explanation: 'IPv6는 128비트 주소 체계를 사용하며, 이는 약 3.4 × 10^38개의 주소를 제공한다. IPv4는 32비트로 약 43억 개의 주소를 제공한다.'
  },
  {
    id: 140,
    subject: 'info-comm',
    question: 'NAT(Network Address Translation)의 주요 기능은?',
    options: [
      '사설 IP 주소를 공인 IP 주소로 변환하여 인터넷에 접속할 수 있게 한다',
      'MAC 주소를 IP 주소로 변환한다',
      '도메인 이름을 IP 주소로 변환한다',
      'IP 주소를 물리적 주소로 변환한다'
    ],
    answer: 0,
    explanation: 'NAT는 사설 네트워크의 IP 주소를 공인 IP 주소로 변환하여 여러 기기가 하나의 공인 IP로 인터넷에 접속할 수 있게 해주며, IP 주소 부족 문제를 완화한다.'
  },
  {
    id: 141,
    subject: 'info-comm',
    question: 'VPN(Virtual Private Network)에 대한 설명으로 옳은 것은?',
    options: [
      '물리적 전용 회선만을 사용한다',
      '데이터 암호화 기능이 없다',
      'LAN 구간에서만 사용할 수 있다',
      '공중 네트워크를 이용하여 사설 네트워크와 같은 보안 통신을 제공한다'
    ],
    answer: 3,
    explanation: 'VPN은 인터넷과 같은 공중 네트워크를 통해 터널링과 암호화 기술을 이용하여 마치 전용선처럼 안전한 사설 네트워크 통신을 구현하는 기술이다.'
  },
  {
    id: 142,
    subject: 'info-comm',
    question: 'Wi-Fi 6(802.11ax)의 주요 특징으로 옳은 것은?',
    options: [
      'OFDMA 기술을 도입하여 다수의 사용자가 동시에 효율적으로 통신할 수 있다',
      '최대 전송 속도가 54Mbps이다',
      '2.4GHz 대역만 지원한다',
      '이전 세대와 호환되지 않는다'
    ],
    answer: 0,
    explanation: 'Wi-Fi 6(802.11ax)는 OFDMA(직교 주파수 분할 다중 접속)를 도입하여 동시 다중 사용자 통신 효율을 높이고, MU-MIMO 개선, BSS Coloring 등으로 성능을 향상시켰다.'
  },
  {
    id: 143,
    subject: 'info-comm',
    question: '5G 이동통신의 핵심 특성 3가지로 올바른 것은?',
    options: [
      '초고속, 초보안, 초연결',
      '초고속(eMBB), 초저지연(URLLC), 초연결(mMTC)',
      '초저지연, 초절전, 초보안',
      '초고속, 초저지연, 초절전'
    ],
    answer: 1,
    explanation: '5G의 3대 특성은 eMBB(향상된 모바일 광대역, 최대 20Gbps), URLLC(초신뢰 저지연 통신, 1ms 이하), mMTC(대규모 기계 통신, km² 당 100만 기기)이다.'
  },
  {
    id: 144,
    subject: 'info-comm',
    question: 'IDS(Intrusion Detection System)의 역할로 옳은 것은?',
    options: [
      '네트워크나 시스템의 침입 시도를 탐지하여 관리자에게 경고한다',
      '침입을 탐지하고 자동으로 차단한다',
      '바이러스를 치료한다',
      '데이터를 암호화한다'
    ],
    answer: 0,
    explanation: 'IDS(침입 탐지 시스템)는 네트워크 트래픽이나 시스템 활동을 모니터링하여 비정상적인 침입 시도를 탐지하고 관리자에게 경고한다. 자동 차단까지 수행하는 것은 IPS이다.'
  },
  {
    id: 145,
    subject: 'info-comm',
    question: 'IPS(Intrusion Prevention System)가 IDS와 다른 점은?',
    options: [
      '탐지만 하고 차단은 하지 않는다',
      'IDS보다 탐지 정확도가 낮다',
      '침입을 탐지할 뿐만 아니라 자동으로 차단하는 기능이 있다',
      '소프트웨어 방식으로만 동작한다'
    ],
    answer: 2,
    explanation: 'IPS(침입 방지 시스템)는 IDS의 탐지 기능에 더해 탐지된 침입을 자동으로 차단(방어)하는 능동적인 보안 시스템이다.'
  },
  {
    id: 146,
    subject: 'info-comm',
    question: 'SSL/TLS에서 사용하는 암호화 방식으로 옳은 것은?',
    options: [
      '대칭키와 비대칭키 암호화를 모두 사용하는 하이브리드 방식이다',
      '대칭키 암호화만 사용한다',
      '비대칭키 암호화만 사용한다',
      '암호화를 사용하지 않고 인증만 수행한다'
    ],
    answer: 0,
    explanation: 'SSL/TLS는 핸드셰이크 과정에서 비대칭키(공개키) 암호화로 세션 키를 안전하게 교환하고, 이후 실제 데이터 전송에는 대칭키 암호화를 사용하는 하이브리드 방식이다.'
  },
  {
    id: 147,
    subject: 'info-comm',
    question: '클라우드 컴퓨팅의 배포 모델 중, 특정 조직이나 기업만 사용하는 클라우드는?',
    options: ['프라이빗 클라우드(Private Cloud)', '퍼블릭 클라우드(Public Cloud)', '하이브리드 클라우드(Hybrid Cloud)', '커뮤니티 클라우드(Community Cloud)'],
    answer: 0,
    explanation: '프라이빗 클라우드는 특정 조직이 전용으로 사용하는 클라우드 인프라로, 보안과 제어가 강화되지만 구축 및 운영 비용이 높다.'
  },
  {
    id: 148,
    subject: 'info-comm',
    question: '하이브리드 클라우드(Hybrid Cloud)에 대한 설명으로 옳은 것은?',
    options: [
      '오직 프라이빗 클라우드만 사용하는 방식이다',
      '프라이빗 클라우드와 퍼블릭 클라우드를 결합하여 사용하는 방식이다',
      '오직 퍼블릭 클라우드만 사용하는 방식이다',
      '클라우드를 사용하지 않고 온프레미스만 사용하는 방식이다'
    ],
    answer: 1,
    explanation: '하이브리드 클라우드는 프라이빗 클라우드와 퍼블릭 클라우드를 결합하여 중요 데이터는 프라이빗에, 일반 서비스는 퍼블릭에 배치하여 보안과 유연성을 동시에 확보한다.'
  },
  {
    id: 149,
    subject: 'info-comm',
    question: 'SDN(Software Defined Networking)의 핵심 개념으로 옳은 것은?',
    options: [
      '네트워크의 제어 평면과 데이터 평면을 분리하여 소프트웨어로 네트워크를 관리한다',
      '하드웨어만으로 네트워크를 구성하는 기술이다',
      '무선 네트워크를 유선으로 변환하는 기술이다',
      '네트워크 속도를 물리적으로 향상시키는 기술이다'
    ],
    answer: 0,
    explanation: 'SDN은 네트워크 장비의 제어 평면(Control Plane)을 데이터 평면(Data Plane)에서 분리하여, 중앙 집중적인 소프트웨어 컨트롤러가 네트워크를 프로그래밍 방식으로 관리하는 기술이다.'
  },
  {
    id: 150,
    subject: 'info-comm',
    question: 'NFV(Network Functions Virtualization)에 대한 설명으로 옳은 것은?',
    options: [
      '가상 사설 네트워크를 구축하는 기술이다',
      '네트워크 주소를 변환하는 기술이다',
      '네트워크 트래픽을 암호화하는 기술이다',
      '전용 하드웨어 장비의 네트워크 기능을 소프트웨어로 가상화하여 범용 서버에서 실행한다'
    ],
    answer: 3,
    explanation: 'NFV는 방화벽, 로드밸런서 등 전용 네트워크 장비의 기능을 소프트웨어로 가상화하여 범용 서버에서 실행함으로써 비용을 절감하고 유연성을 높이는 기술이다.'
  },
  {
    id: 151,
    subject: 'info-comm',
    question: '블록체인(Blockchain)의 특징으로 옳지 않은 것은?',
    options: [
      '중앙 서버가 모든 데이터를 관리하는 중앙집중형 구조이다',
      '거래 기록이 블록 단위로 연결된 체인 구조를 갖는다',
      '분산 원장 기술을 기반으로 한다',
      '데이터의 위변조가 어렵다'
    ],
    answer: 0,
    explanation: '블록체인은 중앙 서버 없이 네트워크 참여자 모두가 거래 기록을 공유하는 분산형 구조이다. 블록이 암호학적으로 연결되어 있어 위변조가 매우 어렵다.'
  },
  {
    id: 152,
    subject: 'info-comm',
    question: '엣지 컴퓨팅(Edge Computing)의 장점으로 옳은 것은?',
    options: [
      '모든 데이터를 중앙 클라우드로 전송하여 처리한다',
      '데이터를 발생 지점 근처에서 처리하여 지연 시간을 줄인다',
      '네트워크 대역폭 사용량이 증가한다',
      '보안성이 저하된다'
    ],
    answer: 1,
    explanation: '엣지 컴퓨팅은 데이터가 발생하는 단말 장치 근처(엣지)에서 데이터를 처리하여, 클라우드까지의 전송 지연을 줄이고 대역폭 사용을 절감하는 기술이다.'
  },
  {
    id: 153,
    subject: 'info-comm',
    question: 'IPv6의 주소 표기 방법으로 올바른 것은?',
    options: [
      '16비트씩 8그룹으로 나누어 콜론(:)으로 구분하고 16진수로 표기한다',
      '8비트씩 4그룹으로 나누어 점(.)으로 구분한다',
      '32비트를 하나의 10진수로 표기한다',
      '10비트씩 12그룹으로 나누어 하이픈(-)으로 구분한다'
    ],
    answer: 0,
    explanation: 'IPv6 주소는 128비트를 16비트씩 8그룹으로 나누어 콜론(:)으로 구분하고, 각 그룹을 16진수로 표기한다. 예: 2001:0db8:85a3:0000:0000:8a2e:0370:7334'
  },
  {
    id: 154,
    subject: 'info-comm',
    question: '다음 중 응용 계층(Application Layer) 프로토콜에 해당하지 않는 것은?',
    options: ['TCP', 'HTTP', 'FTP', 'SMTP'],
    answer: 0,
    explanation: 'TCP는 전송 계층(Transport Layer) 프로토콜이다. HTTP, FTP, SMTP는 모두 응용 계층 프로토콜로 사용자 애플리케이션의 데이터 통신을 담당한다.'
  },
  {
    id: 155,
    subject: 'info-comm',
    question: 'DDoS(Distributed Denial of Service) 공격의 특징으로 옳은 것은?',
    options: [
      '한 대의 컴퓨터에서만 공격을 수행한다',
      '데이터를 암호화하여 복호화 비용을 요구한다',
      '여러 대의 컴퓨터에서 동시에 대량의 트래픽을 전송하여 서비스를 마비시킨다',
      '사용자의 개인정보를 직접 탈취한다'
    ],
    answer: 2,
    explanation: 'DDoS는 다수의 감염된 좀비 컴퓨터(봇넷)를 이용하여 동시에 대량의 트래픽을 목표 서버에 전송함으로써 정상적인 서비스를 불가능하게 만드는 분산 서비스 거부 공격이다.'
  },
  {
    id: 156,
    subject: 'info-comm',
    question: '서버리스(Serverless) 컴퓨팅에 대한 설명으로 옳은 것은?',
    options: [
      '서버 관리를 클라우드 제공자가 담당하고, 사용자는 코드 실행에만 집중한다',
      '물리적 서버가 전혀 사용되지 않는다',
      '서버를 사용자가 직접 구매하여 운영해야 한다',
      'IaaS와 동일한 개념이다'
    ],
    answer: 0,
    explanation: '서버리스 컴퓨팅은 서버가 없는 것이 아니라, 클라우드 제공자가 서버 인프라를 관리하고 사용자는 코드 작성과 실행에만 집중하는 방식이다. 이벤트 기반으로 동작하며 사용한 만큼만 비용을 지불한다.'
  },
  {
    id: 157,
    subject: 'info-comm',
    question: 'OSI 7계층에서 라우팅 기능을 수행하는 계층은?',
    options: ['데이터링크 계층(2계층)', '전송 계층(4계층)', '세션 계층(5계층)', '네트워크 계층(3계층)'],
    answer: 3,
    explanation: '네트워크 계층(3계층)은 데이터의 경로 설정(라우팅)을 담당하며, IP 프로토콜과 라우터가 이 계층에서 동작한다.'
  },
  {
    id: 158,
    subject: 'info-comm',
    question: 'VLAN(Virtual LAN)의 장점으로 옳은 것은?',
    options: [
      '물리적 위치와 관계없이 논리적으로 네트워크를 분리하여 브로드캐스트 도메인을 줄인다',
      '네트워크 속도를 물리적으로 증가시킨다',
      '모든 장치를 하나의 브로드캐스트 도메인으로 통합한다',
      '라우터 없이도 서로 다른 네트워크 간 통신이 가능하다'
    ],
    answer: 0,
    explanation: 'VLAN은 스위치에서 논리적으로 네트워크를 분리하여 브로드캐스트 도메인을 줄이고, 보안을 강화하며, 물리적 위치에 관계없이 유연하게 네트워크를 구성할 수 있다.'
  },
  {
    id: 159,
    subject: 'info-comm',
    question: '랜섬웨어(Ransomware)에 대한 설명으로 옳은 것은?',
    options: [
      '사용자의 파일을 암호화하고 복호화 대가로 금전을 요구하는 악성 소프트웨어이다',
      '네트워크 트래픽을 감청하는 프로그램이다',
      '사용자 몰래 광고를 표시하는 프로그램이다',
      '시스템 자원만 소모하고 데이터에는 영향을 주지 않는다'
    ],
    answer: 0,
    explanation: '랜섬웨어는 사용자의 파일이나 시스템을 암호화하여 접근을 차단한 후, 복호화 키를 제공하는 대가로 금전(주로 암호화폐)을 요구하는 악성 소프트웨어이다.'
  },
  {
    id: 160,
    subject: 'info-comm',
    question: '컨테이너(Container) 기술의 특징으로 옳은 것은?',
    options: [
      '하드웨어를 완전히 가상화하여 별도의 운영체제를 설치한다',
      '운영체제 수준의 가상화를 통해 애플리케이션을 격리된 환경에서 실행한다',
      '가상 머신(VM)보다 시작 시간이 느리다',
      '호스트 운영체제와 다른 운영체제를 실행할 수 있다'
    ],
    answer: 1,
    explanation: '컨테이너는 운영체제 커널을 공유하면서 프로세스를 격리하는 경량 가상화 기술이다. VM보다 시작 시간이 빠르고 리소스 사용이 적으며, Docker가 대표적인 컨테이너 플랫폼이다.'
  }
]
