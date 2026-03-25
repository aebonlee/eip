export const functionalQuestions = [
  // ============================================================
  // programming-basic (정보처리와 컴퓨터 일반) - Questions 1~15
  // ============================================================
  {
    id: 1,
    subject: 'programming-basic',
    question: 'CPU의 구성 요소가 아닌 것은?',
    options: ['제어장치(CU)', '연산장치(ALU)', '레지스터', '하드디스크'],
    answer: 3,
    explanation: 'CPU는 제어장치(CU), 연산장치(ALU), 레지스터로 구성되며, 하드디스크는 보조기억장치에 해당한다.'
  },
  {
    id: 2,
    subject: 'programming-basic',
    question: 'ALU(산술논리연산장치)에서 수행하는 연산이 아닌 것은?',
    options: ['산술 연산', '논리 연산', '비교 연산', '명령어 해독'],
    answer: 3,
    explanation: '명령어 해독은 제어장치(CU)의 역할이며, ALU는 산술·논리·비교·시프트 연산 등을 수행한다.'
  },
  {
    id: 3,
    subject: 'programming-basic',
    question: '다음 중 CPU 내부 레지스터로서 다음에 실행할 명령어의 주소를 저장하는 것은?',
    options: ['누산기(ACC)', '프로그램 카운터(PC)', '명령어 레지스터(IR)', '메모리 주소 레지스터(MAR)'],
    answer: 1,
    explanation: '프로그램 카운터(PC)는 다음에 실행할 명령어의 주소를 저장하는 레지스터이다.'
  },
  {
    id: 4,
    subject: 'programming-basic',
    question: '기억장치의 접근 속도가 빠른 순서대로 올바르게 나열한 것은?',
    options: [
      '레지스터 → 캐시 → 주기억장치 → 보조기억장치',
      '캐시 → 레지스터 → 주기억장치 → 보조기억장치',
      '주기억장치 → 캐시 → 레지스터 → 보조기억장치',
      '보조기억장치 → 주기억장치 → 캐시 → 레지스터'
    ],
    answer: 0,
    explanation: '기억장치 속도 순서는 레지스터 > 캐시 > 주기억장치(RAM) > 보조기억장치(HDD/SSD) 순이다.'
  },
  {
    id: 5,
    subject: 'programming-basic',
    question: '10진수 13을 2진수로 변환하면?',
    options: ['1011', '1101', '1110', '1010'],
    answer: 1,
    explanation: '13 = 8+4+1 이므로 2진수로 변환하면 1101이 된다.'
  },
  {
    id: 6,
    subject: 'programming-basic',
    question: '8비트 2의 보수 표현에서 -5를 나타낸 것은?',
    options: ['11111010', '11111011', '00000101', '10000101'],
    answer: 1,
    explanation: '+5는 00000101이고, 1의 보수는 11111010이며, 여기에 1을 더한 2의 보수는 11111011이다.'
  },
  {
    id: 7,
    subject: 'programming-basic',
    question: '운영체제의 프로세스 상태 전이에서, 준비(Ready) 상태의 프로세스가 CPU를 할당받아 실행 상태로 전이되는 것을 무엇이라 하는가?',
    options: ['디스패치(Dispatch)', '블록(Block)', '웨이크업(Wake-up)', '타임아웃(Time-out)'],
    answer: 0,
    explanation: '디스패치(Dispatch)는 준비 상태의 프로세스가 CPU를 배정받아 실행 상태로 전이되는 것을 말한다.'
  },
  {
    id: 8,
    subject: 'programming-basic',
    question: 'CPU 스케줄링 기법 중 비선점(Non-preemptive) 방식에 해당하는 것은?',
    options: ['라운드 로빈(Round Robin)', 'SRT(Shortest Remaining Time)', 'FCFS(First Come First Served)', '다단계 피드백 큐'],
    answer: 2,
    explanation: 'FCFS는 먼저 도착한 프로세스를 먼저 처리하는 비선점 스케줄링 기법이다.'
  },
  {
    id: 9,
    subject: 'programming-basic',
    question: '가상 메모리(Virtual Memory) 관리 기법에서, 프로세스가 필요로 하는 페이지가 주기억장치에 없을 때 발생하는 현상은?',
    options: ['세그먼테이션 오류', '페이지 폴트(Page Fault)', '교착 상태(Deadlock)', '스래싱(Thrashing)'],
    answer: 1,
    explanation: '페이지 폴트(Page Fault)는 필요한 페이지가 주기억장치에 존재하지 않을 때 발생하는 인터럽트이다.'
  },
  {
    id: 10,
    subject: 'programming-basic',
    question: '논리 게이트에서 두 입력이 모두 1일 때만 출력이 1이 되는 게이트는?',
    options: ['OR 게이트', 'AND 게이트', 'XOR 게이트', 'NAND 게이트'],
    answer: 1,
    explanation: 'AND 게이트는 모든 입력이 1일 때만 출력이 1이 되는 논리 회로이다.'
  },
  {
    id: 11,
    subject: 'programming-basic',
    question: 'ASCII 코드에서 영문 대문자 \'A\'의 코드 값은?',
    options: ['55', '65', '75', '97'],
    answer: 1,
    explanation: 'ASCII 코드에서 대문자 A는 65이며, 소문자 a는 97이다.'
  },
  {
    id: 12,
    subject: 'programming-basic',
    question: '인터럽트(Interrupt)에 대한 설명으로 옳지 않은 것은?',
    options: [
      'CPU가 현재 처리 중인 작업을 일시 중단하게 하는 신호이다',
      '외부 인터럽트에는 전원 이상, 타이머 인터럽트 등이 있다',
      '인터럽트 발생 시 현재 상태를 스택에 저장한다',
      '인터럽트는 소프트웨어적으로만 발생한다'
    ],
    answer: 3,
    explanation: '인터럽트는 하드웨어(외부) 인터럽트와 소프트웨어(내부) 인터럽트 모두 발생할 수 있다.'
  },
  {
    id: 13,
    subject: 'programming-basic',
    question: '2진수 1011과 1101의 AND 연산 결과는?',
    options: ['1111', '1001', '0110', '1000'],
    answer: 1,
    explanation: 'AND 연산은 두 비트가 모두 1일 때만 1이 되므로 1011 AND 1101 = 1001이다.'
  },
  {
    id: 14,
    subject: 'programming-basic',
    question: '입출력 방식 중 CPU의 개입 없이 주기억장치와 입출력 장치 사이에서 직접 데이터를 전송하는 방식은?',
    options: ['프로그램에 의한 I/O', '인터럽트에 의한 I/O', 'DMA(Direct Memory Access)', '채널(Channel)에 의한 I/O'],
    answer: 2,
    explanation: 'DMA는 CPU를 거치지 않고 메모리와 입출력 장치 간에 직접 데이터를 전송하는 방식이다.'
  },
  {
    id: 15,
    subject: 'programming-basic',
    question: '16진수 2F를 10진수로 변환하면?',
    options: ['37', '42', '47', '52'],
    answer: 2,
    explanation: '16진수 2F = 2×16 + 15 = 32 + 15 = 47이다.'
  },

  // ============================================================
  // algorithm (알고리즘) - Questions 16~30
  // ============================================================
  {
    id: 16,
    subject: 'algorithm',
    question: '순서도(Flowchart)에서 판단(조건 분기)을 나타내는 기호의 모양은?',
    options: ['직사각형', '마름모', '평행사변형', '원'],
    answer: 1,
    explanation: '마름모는 순서도에서 조건을 판단하여 분기하는 처리를 나타내는 기호이다.'
  },
  {
    id: 17,
    subject: 'algorithm',
    question: '다음 순서도 추적표에서 S의 최종 값은?\n[시작] → S=0, i=1 → (i<=5?) → 예: S=S+i, i=i+1 → [반복] → 아니오: [끝]',
    options: ['10', '15', '20', '25'],
    answer: 1,
    explanation: 'S = 1+2+3+4+5 = 15이다. 1부터 5까지의 합을 구하는 순서도이다.'
  },
  {
    id: 18,
    subject: 'algorithm',
    question: '버블 정렬(Bubble Sort)에 대한 설명으로 올바른 것은?',
    options: [
      '분할 정복 방식을 사용하는 정렬이다',
      '인접한 두 원소를 비교하여 교환하는 방식이다',
      '최솟값을 찾아 앞쪽에 배치하는 정렬이다',
      '삽입할 위치를 찾아 해당 위치에 삽입하는 정렬이다'
    ],
    answer: 1,
    explanation: '버블 정렬은 인접한 두 원소를 비교하여 순서가 잘못되어 있으면 교환하는 방식의 정렬 알고리즘이다.'
  },
  {
    id: 19,
    subject: 'algorithm',
    question: '배열 [5, 3, 8, 1, 2]에 대해 선택 정렬(Selection Sort)을 오름차순으로 1회전 수행한 결과는?',
    options: [
      '[1, 3, 8, 5, 2]',
      '[3, 5, 8, 1, 2]',
      '[1, 5, 3, 8, 2]',
      '[3, 5, 1, 2, 8]'
    ],
    answer: 0,
    explanation: '선택 정렬 1회전에서 전체 배열의 최솟값 1을 찾아 첫 번째 원소 5와 교환하여 [1, 3, 8, 5, 2]가 된다.'
  },
  {
    id: 20,
    subject: 'algorithm',
    question: '삽입 정렬(Insertion Sort)의 시간 복잡도로 올바른 것은?',
    options: [
      '최선: O(n), 최악: O(n²)',
      '최선: O(n log n), 최악: O(n²)',
      '최선: O(n²), 최악: O(n²)',
      '최선: O(n log n), 최악: O(n log n)'
    ],
    answer: 0,
    explanation: '삽입 정렬은 이미 정렬된 경우 O(n), 역순 정렬된 최악의 경우 O(n²)의 시간 복잡도를 가진다.'
  },
  {
    id: 21,
    subject: 'algorithm',
    question: '퀵 정렬(Quick Sort)에서 분할의 기준이 되는 원소를 무엇이라 하는가?',
    options: ['키(Key)', '루트(Root)', '피벗(Pivot)', '인덱스(Index)'],
    answer: 2,
    explanation: '퀵 정렬에서 피벗(Pivot)은 배열을 분할하는 기준 원소를 말한다.'
  },
  {
    id: 22,
    subject: 'algorithm',
    question: '순차 검색(Sequential Search)으로 정렬되지 않은 10개의 데이터에서 특정 값을 찾을 때, 평균 비교 횟수는?',
    options: ['3회', '5회', '5.5회', '10회'],
    answer: 2,
    explanation: '순차 검색의 평균 비교 횟수는 (n+1)/2이므로 (10+1)/2 = 5.5회이다.'
  },
  {
    id: 23,
    subject: 'algorithm',
    question: '이진 검색(Binary Search)의 전제 조건으로 올바른 것은?',
    options: [
      '데이터가 연결 리스트에 저장되어야 한다',
      '데이터가 반드시 정렬되어 있어야 한다',
      '데이터의 개수가 2의 거듭제곱이어야 한다',
      '데이터에 중복 값이 없어야 한다'
    ],
    answer: 1,
    explanation: '이진 검색은 데이터가 반드시 정렬되어 있어야 적용할 수 있는 검색 알고리즘이다.'
  },
  {
    id: 24,
    subject: 'algorithm',
    question: '재귀 함수로 구현한 팩토리얼에서 factorial(5)의 결과 값은?',
    options: ['24', '60', '100', '120'],
    answer: 3,
    explanation: '5! = 5×4×3×2×1 = 120이다.'
  },
  {
    id: 25,
    subject: 'algorithm',
    question: '피보나치 수열에서 F(1)=1, F(2)=1일 때, F(7)의 값은?',
    options: ['8', '11', '13', '15'],
    answer: 2,
    explanation: 'F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13이다.'
  },
  {
    id: 26,
    subject: 'algorithm',
    question: '스택(Stack)에 순서대로 A, B, C, D를 push한 후 pop 연산을 2회 수행하면 꺼내지는 데이터 순서는?',
    options: ['A, B', 'C, D', 'D, C', 'B, A'],
    answer: 2,
    explanation: '스택은 후입선출(LIFO) 구조이므로 마지막에 들어간 D가 먼저 나오고, 그다음 C가 나온다.'
  },
  {
    id: 27,
    subject: 'algorithm',
    question: '큐(Queue)에 순서대로 10, 20, 30을 삽입한 후 삭제(dequeue) 연산을 1회 수행하면 삭제되는 값은?',
    options: ['10', '20', '30', '삭제 불가'],
    answer: 0,
    explanation: '큐는 선입선출(FIFO) 구조이므로 가장 먼저 삽입된 10이 먼저 삭제된다.'
  },
  {
    id: 28,
    subject: 'algorithm',
    question: '다음 이진 트리를 중위 순회(Inorder Traversal)한 결과는?\n       A\n      / \\\n     B   C\n    / \\\n   D   E',
    options: ['A B D E C', 'D B E A C', 'D E B C A', 'A B C D E'],
    answer: 1,
    explanation: '중위 순회는 왼쪽→루트→오른쪽 순서이므로 D→B→E→A→C가 된다.'
  },
  {
    id: 29,
    subject: 'algorithm',
    question: '다음 이진 트리를 후위 순회(Postorder Traversal)한 결과는?\n       A\n      / \\\n     B   C\n    / \\\n   D   E',
    options: ['D E B C A', 'A B D E C', 'D B E A C', 'A B C D E'],
    answer: 0,
    explanation: '후위 순회는 왼쪽→오른쪽→루트 순서이므로 D→E→B→C→A가 된다.'
  },
  {
    id: 30,
    subject: 'algorithm',
    question: '알고리즘의 시간 복잡도 중 가장 효율적인(빠른) 것은?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    answer: 3,
    explanation: 'O(log n) < O(n) < O(n log n) < O(n²) 순서이므로 O(log n)이 가장 효율적이다.'
  },

  // ============================================================
  // db-basic (데이터베이스) - Questions 31~45
  // ============================================================
  {
    id: 31,
    subject: 'db-basic',
    question: 'DBMS(데이터베이스 관리 시스템)의 장점이 아닌 것은?',
    options: [
      '데이터의 중복을 최소화할 수 있다',
      '데이터의 일관성을 유지할 수 있다',
      '데이터의 보안성을 향상시킬 수 있다',
      '시스템이 단순해지고 비용이 감소한다'
    ],
    answer: 3,
    explanation: 'DBMS 도입은 시스템이 복잡해지고 운영 비용이 증가하는 단점이 있다.'
  },
  {
    id: 32,
    subject: 'db-basic',
    question: '데이터베이스 스키마 중 사용자나 응용 프로그래머가 접근하는 데이터베이스의 정의를 나타내는 것은?',
    options: ['외부 스키마', '개념 스키마', '내부 스키마', '물리 스키마'],
    answer: 0,
    explanation: '외부 스키마(서브 스키마)는 개별 사용자나 응용 프로그램 관점에서 본 데이터베이스의 논리적 구조이다.'
  },
  {
    id: 33,
    subject: 'db-basic',
    question: '데이터 독립성 중, 개념 스키마가 변경되어도 외부 스키마에 영향을 미치지 않는 것을 무엇이라 하는가?',
    options: ['물리적 데이터 독립성', '논리적 데이터 독립성', '저장 데이터 독립성', '접근 데이터 독립성'],
    answer: 1,
    explanation: '논리적 데이터 독립성은 개념 스키마가 변경되어도 외부 스키마에 영향을 주지 않는 것을 말한다.'
  },
  {
    id: 34,
    subject: 'db-basic',
    question: 'ER(Entity-Relationship) 다이어그램에서 개체(Entity)를 나타내는 기호는?',
    options: ['직사각형', '마름모', '타원', '이중 직사각형'],
    answer: 0,
    explanation: 'ER 다이어그램에서 개체는 직사각형, 관계는 마름모, 속성은 타원으로 나타낸다.'
  },
  {
    id: 35,
    subject: 'db-basic',
    question: '관계형 데이터베이스에서 튜플(Tuple)에 대한 설명으로 올바른 것은?',
    options: [
      '릴레이션의 열(Column)을 의미한다',
      '릴레이션의 행(Row)을 의미한다',
      '속성이 가질 수 있는 값의 범위이다',
      '릴레이션의 이름이다'
    ],
    answer: 1,
    explanation: '튜플은 릴레이션에서 하나의 행(Row)을 의미하며, 하나의 레코드에 해당한다.'
  },
  {
    id: 36,
    subject: 'db-basic',
    question: '다음 중 후보키(Candidate Key)에 대한 설명으로 올바른 것은?',
    options: [
      '외래키 중에서 기본키가 될 수 있는 키이다',
      '유일성과 최소성을 만족하는 속성 또는 속성의 집합이다',
      '릴레이션에서 튜플을 구분하는 모든 속성의 집합이다',
      '다른 릴레이션의 기본키를 참조하는 키이다'
    ],
    answer: 1,
    explanation: '후보키는 릴레이션에서 유일성과 최소성을 모두 만족하는 속성 또는 속성의 집합이다.'
  },
  {
    id: 37,
    subject: 'db-basic',
    question: '다음 SQL 문의 실행 결과로 올바른 것은?\nSELECT COUNT(*) FROM 학생 WHERE 학년 >= 3;',
    options: [
      '학생 테이블의 전체 행 수를 조회한다',
      '학년이 3 이상인 학생의 수를 조회한다',
      '학년이 3인 학생의 모든 정보를 조회한다',
      '학년이 3 이상인 학생의 모든 컬럼을 조회한다'
    ],
    answer: 1,
    explanation: 'WHERE 학년 >= 3 조건을 만족하는 행의 수를 COUNT(*) 함수로 집계하여 반환한다.'
  },
  {
    id: 38,
    subject: 'db-basic',
    question: '다음 SQL 문에서 빈칸에 들어갈 명령어로 올바른 것은?\n(   ) INTO 학생(학번, 이름, 학년) VALUES(\'2024001\', \'홍길동\', 1);',
    options: ['SELECT', 'INSERT', 'UPDATE', 'CREATE'],
    answer: 1,
    explanation: 'INSERT INTO 테이블명 VALUES(...)는 새로운 데이터를 테이블에 삽입하는 SQL 명령문이다.'
  },
  {
    id: 39,
    subject: 'db-basic',
    question: '다음 SQL 문의 역할은?\nUPDATE 학생 SET 학년 = 2 WHERE 학번 = \'2024001\';',
    options: [
      '학번이 2024001인 학생을 삭제한다',
      '학번이 2024001인 학생의 학년을 2로 수정한다',
      '학년이 2인 학생의 학번을 변경한다',
      '학번이 2024001인 학생을 새로 추가한다'
    ],
    answer: 1,
    explanation: 'UPDATE 문은 기존 데이터를 수정하며, 학번이 2024001인 학생의 학년을 2로 변경한다.'
  },
  {
    id: 40,
    subject: 'db-basic',
    question: '다음 SQL 문에서 학과별 학생 수를 조회하려 할 때 빈칸에 들어갈 절은?\nSELECT 학과, COUNT(*) FROM 학생 (      ) 학과;',
    options: ['ORDER BY', 'GROUP BY', 'HAVING', 'WHERE'],
    answer: 1,
    explanation: 'GROUP BY는 특정 컬럼을 기준으로 데이터를 그룹화하여 집계 함수와 함께 사용한다.'
  },
  {
    id: 41,
    subject: 'db-basic',
    question: '다음 SQL 문의 실행 결과로 올바른 것은?\nSELECT 이름 FROM 학생 ORDER BY 학년 DESC;',
    options: [
      '학년을 오름차순으로 정렬하여 이름을 조회한다',
      '학년을 내림차순으로 정렬하여 이름을 조회한다',
      '이름을 오름차순으로 정렬하여 조회한다',
      '이름을 내림차순으로 정렬하여 조회한다'
    ],
    answer: 1,
    explanation: 'ORDER BY 학년 DESC는 학년을 기준으로 내림차순(높은 값부터) 정렬하여 결과를 반환한다.'
  },
  {
    id: 42,
    subject: 'db-basic',
    question: 'DELETE FROM 학생 WHERE 학년 = 4; 이 SQL 문에 대한 설명으로 올바른 것은?',
    options: [
      '학생 테이블 자체를 삭제한다',
      '학년 컬럼을 삭제한다',
      '학년이 4인 학생의 데이터(행)를 삭제한다',
      '학년이 4가 아닌 모든 데이터를 삭제한다'
    ],
    answer: 2,
    explanation: 'DELETE FROM 테이블 WHERE 조건은 조건을 만족하는 행(튜플)을 삭제하는 명령문이다.'
  },
  {
    id: 43,
    subject: 'db-basic',
    question: '제1정규형(1NF)의 조건으로 올바른 것은?',
    options: [
      '부분 함수 종속을 제거해야 한다',
      '이행 함수 종속을 제거해야 한다',
      '모든 속성의 도메인이 원자값(Atomic Value)이어야 한다',
      '다치 종속을 제거해야 한다'
    ],
    answer: 2,
    explanation: '제1정규형(1NF)은 릴레이션의 모든 속성 값이 더 이상 분해할 수 없는 원자값이어야 한다는 조건이다.'
  },
  {
    id: 44,
    subject: 'db-basic',
    question: '제2정규형(2NF)을 만족시키기 위해 제거해야 하는 종속 관계는?',
    options: [
      '이행 함수 종속',
      '부분 함수 종속',
      '다치 종속',
      '조인 종속'
    ],
    answer: 1,
    explanation: '제2정규형(2NF)은 1NF를 만족하면서 기본키에 대한 부분 함수 종속을 제거한 것이다.'
  },
  {
    id: 45,
    subject: 'db-basic',
    question: '제3정규형(3NF)을 만족시키기 위해 제거해야 하는 종속 관계는?',
    options: [
      '부분 함수 종속',
      '이행 함수 종속(Transitive Dependency)',
      '다치 종속',
      '후보키 종속'
    ],
    answer: 1,
    explanation: '제3정규형(3NF)은 2NF를 만족하면서 이행 함수 종속(A→B, B→C이면 A→C)을 제거한 것이다.'
  }
]
