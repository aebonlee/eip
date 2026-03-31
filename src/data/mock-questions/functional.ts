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
  },

  // ============================================================
  // programming-basic (정보처리와 컴퓨터 일반) - Questions 46~70
  // ============================================================
  {
    id: 46,
    subject: 'programming-basic',
    question: '운영체제의 메모리 분할 기법 중, 메모리를 동일한 크기로 나누어 프로세스에 할당하는 방식은?',
    options: ['가변 분할', '버디 시스템', '페이징', '고정 분할'],
    answer: 3,
    explanation: '고정 분할(Fixed Partition) 방식은 메모리를 미리 동일한 크기의 블록으로 나누어 프로세스에 할당하는 기법이다.'
  },
  {
    id: 47,
    subject: 'programming-basic',
    question: '메모리 배치 전략 중 최초 적합(First Fit)에 대한 설명으로 올바른 것은?',
    options: [
      '빈 공간 중 가장 큰 곳에 배치한다',
      '빈 공간 중 가장 작은 곳에 배치한다',
      '빈 공간 중 가장 먼저 발견된 곳에 배치한다',
      '마지막으로 사용한 위치부터 탐색하여 배치한다'
    ],
    answer: 2,
    explanation: '최초 적합(First Fit)은 메모리의 빈 공간을 처음부터 탐색하여 프로세스가 들어갈 수 있는 첫 번째 공간에 배치하는 전략이다.'
  },
  {
    id: 48,
    subject: 'programming-basic',
    question: '디스크 스케줄링 기법 중 현재 헤드 위치에서 가장 가까운 트랙을 먼저 서비스하는 방식은?',
    options: ['FCFS', 'SCAN', 'C-SCAN', 'SSTF'],
    answer: 3,
    explanation: 'SSTF(Shortest Seek Time First)는 현재 헤드 위치에서 탐색 시간이 가장 짧은(가장 가까운) 트랙을 먼저 서비스하는 디스크 스케줄링 기법이다.'
  },
  {
    id: 49,
    subject: 'programming-basic',
    question: '파일 시스템에서 파일에 대한 정보(소유자, 크기, 생성 날짜 등)를 저장하는 구조를 무엇이라 하는가?',
    options: ['디렉터리', '파일 디스크립터', '클러스터', '섹터'],
    answer: 1,
    explanation: '파일 디스크립터(File Descriptor)는 파일의 이름, 크기, 소유자, 생성 날짜, 접근 권한 등 파일에 관한 정보를 저장하는 구조이다.'
  },
  {
    id: 50,
    subject: 'programming-basic',
    question: '명령어 사이클(Instruction Cycle)의 순서로 올바른 것은?',
    options: [
      '인출(Fetch) → 해독(Decode) → 실행(Execute)',
      '해독(Decode) → 인출(Fetch) → 실행(Execute)',
      '실행(Execute) → 인출(Fetch) → 해독(Decode)',
      '인출(Fetch) → 실행(Execute) → 해독(Decode)'
    ],
    answer: 0,
    explanation: '명령어 사이클은 인출(Fetch) → 해독(Decode) → 실행(Execute) 단계로 구성된다. 필요시 간접(Indirect) 사이클이 추가될 수 있다.'
  },
  {
    id: 51,
    subject: 'programming-basic',
    question: '명령어의 주소지정 방식 중, 오퍼랜드 필드에 실제 데이터(피연산자) 값이 직접 포함된 방식은?',
    options: ['직접 주소지정', '간접 주소지정', '즉시 주소지정', '레지스터 주소지정'],
    answer: 2,
    explanation: '즉시 주소지정(Immediate Addressing) 방식은 명령어의 오퍼랜드 필드에 실제 데이터 값이 바로 들어있는 방식으로, 메모리 접근이 필요 없어 가장 빠르다.'
  },
  {
    id: 52,
    subject: 'programming-basic',
    question: '간접 주소지정 방식(Indirect Addressing Mode)에 대한 설명으로 올바른 것은?',
    options: [
      '오퍼랜드에 데이터의 값이 직접 들어있다',
      '오퍼랜드가 데이터의 주소를 가리키는 주소를 포함한다',
      '오퍼랜드가 레지스터 번호를 나타낸다',
      '오퍼랜드에 기준 주소와 변위값이 들어있다'
    ],
    answer: 1,
    explanation: '간접 주소지정 방식은 오퍼랜드 필드에 기억된 값이 데이터가 저장된 실제 주소를 담고 있는 주소이다. 즉, 주소의 주소를 사용하므로 메모리 접근이 2회 필요하다.'
  },
  {
    id: 53,
    subject: 'programming-basic',
    question: '컴퓨터 시스템 버스의 종류에 해당하지 않는 것은?',
    options: ['데이터 버스', '주소 버스', '제어 버스', '메모리 버스'],
    answer: 3,
    explanation: '시스템 버스는 데이터 버스, 주소 버스, 제어 버스의 3가지로 구성된다. 메모리 버스는 시스템 버스의 기본 분류에 해당하지 않는다.'
  },
  {
    id: 54,
    subject: 'programming-basic',
    question: 'BCD(Binary Coded Decimal) 코드에서 10진수 9를 표현한 것은?',
    options: ['1010', '1011', '1000', '1001'],
    answer: 3,
    explanation: 'BCD 코드는 10진수 한 자리를 4비트 2진수로 표현하는 코드이다. 10진수 9는 BCD로 1001이다.'
  },
  {
    id: 55,
    subject: 'programming-basic',
    question: '해밍 코드(Hamming Code)의 주요 기능으로 올바른 것은?',
    options: [
      '데이터를 압축하는 기능',
      '오류를 검출만 할 수 있는 기능',
      '오류를 검출하고 1비트 오류를 수정할 수 있는 기능',
      '데이터를 암호화하는 기능'
    ],
    answer: 2,
    explanation: '해밍 코드는 오류를 검출할 뿐만 아니라 1비트 오류의 위치를 찾아 자동으로 수정할 수 있는 자기 정정(Self-Correcting) 코드이다.'
  },
  {
    id: 56,
    subject: 'programming-basic',
    question: '패리티 비트(Parity Bit)에 대한 설명으로 올바른 것은?',
    options: [
      '오류를 검출하고 수정할 수 있다',
      '2비트 이상의 오류도 검출할 수 있다',
      '1비트의 오류를 검출할 수 있지만 수정은 불가능하다',
      '데이터 전송 속도를 향상시키는 역할을 한다'
    ],
    answer: 2,
    explanation: '패리티 비트는 전송 데이터에 1비트를 추가하여 1비트의 오류를 검출할 수 있지만, 오류의 위치를 알 수 없어 수정은 불가능하다.'
  },
  {
    id: 57,
    subject: 'programming-basic',
    question: '짝수 패리티(Even Parity) 방식에서 데이터 비트가 1010111일 때 패리티 비트의 값은?',
    options: ['0', '1', '데이터에 따라 다름', '항상 1'],
    answer: 1,
    explanation: '데이터 1010111에서 1의 개수는 5개(홀수)이다. 짝수 패리티는 전체 1의 개수를 짝수로 맞추므로 패리티 비트는 1이 되어 총 1의 개수가 6개(짝수)가 된다.'
  },
  {
    id: 58,
    subject: 'programming-basic',
    question: '고급 프로그래밍 언어로 작성된 프로그램 전체를 한꺼번에 기계어로 번역하는 언어 번역 프로그램은?',
    options: ['컴파일러', '인터프리터', '어셈블러', '링커'],
    answer: 0,
    explanation: '컴파일러(Compiler)는 고급 언어로 작성된 원시 프로그램 전체를 한꺼번에 목적 프로그램(기계어)으로 번역하는 프로그램이다.'
  },
  {
    id: 59,
    subject: 'programming-basic',
    question: '인터프리터(Interpreter)에 대한 설명으로 올바른 것은?',
    options: [
      '프로그램 전체를 한 번에 기계어로 번역한다',
      '목적 프로그램(Object Program)을 생성한다',
      '프로그램을 한 줄씩 번역하여 즉시 실행한다',
      '어셈블리어를 기계어로 번역한다'
    ],
    answer: 2,
    explanation: '인터프리터는 고급 언어 프로그램을 한 줄씩 해석하여 즉시 실행하는 방식으로, 별도의 목적 프로그램을 생성하지 않는다.'
  },
  {
    id: 60,
    subject: 'programming-basic',
    question: '링커(Linker)의 역할로 올바른 것은?',
    options: [
      '원시 프로그램을 목적 프로그램으로 번역한다',
      '목적 프로그램과 라이브러리를 연결하여 실행 가능한 파일을 생성한다',
      '실행 파일을 주기억장치에 적재한다',
      '프로그램의 문법 오류를 검사한다'
    ],
    answer: 1,
    explanation: '링커(Linker)는 컴파일된 목적 프로그램과 라이브러리 모듈 등을 결합하여 하나의 실행 가능한 프로그램을 만드는 역할을 한다.'
  },
  {
    id: 61,
    subject: 'programming-basic',
    question: '로더(Loader)의 기능이 아닌 것은?',
    options: ['할당(Allocation)', '연결(Linking)', '재배치(Relocation)', '컴파일(Compilation)'],
    answer: 3,
    explanation: '로더의 기능은 할당(Allocation), 연결(Linking), 재배치(Relocation), 적재(Loading)이다. 컴파일은 컴파일러의 기능이다.'
  },
  {
    id: 62,
    subject: 'programming-basic',
    question: 'OSI 7계층 모델에서 데이터 전송을 위한 물리적 연결을 담당하는 계층은?',
    options: ['데이터링크 계층', '네트워크 계층', '물리 계층', '전송 계층'],
    answer: 2,
    explanation: '물리 계층(Physical Layer)은 OSI 7계층의 최하위 계층으로, 전기적·기계적 신호를 통해 물리적 데이터 전송을 담당한다.'
  },
  {
    id: 63,
    subject: 'programming-basic',
    question: '다음 중 네트워크 프로토콜에 대한 설명으로 올바른 것은?',
    options: [
      '하드웨어만을 의미하는 용어이다',
      '통신을 위해 미리 정해놓은 규칙이나 약속이다',
      '데이터를 저장하는 방법을 정의한 것이다',
      '프로그램을 실행하는 순서를 정의한 것이다'
    ],
    answer: 1,
    explanation: '프로토콜(Protocol)은 컴퓨터 간 데이터 통신을 위해 미리 정해놓은 규칙, 규약, 약속의 집합이다.'
  },
  {
    id: 64,
    subject: 'programming-basic',
    question: 'IPv4 주소의 비트 수는?',
    options: ['16비트', '64비트', '32비트', '128비트'],
    answer: 2,
    explanation: 'IPv4 주소는 32비트로 구성되며, 약 43억 개의 주소를 표현할 수 있다. 참고로 IPv6는 128비트이다.'
  },
  {
    id: 65,
    subject: 'programming-basic',
    question: 'IP 주소 클래스 중 대규모 네트워크에 사용되며, 첫 번째 옥텟이 0~127 범위인 것은?',
    options: ['A 클래스', 'B 클래스', 'C 클래스', 'D 클래스'],
    answer: 0,
    explanation: 'A 클래스는 첫 번째 옥텟이 0~127 범위이며, 대규모 네트워크에 사용된다. 네트워크 부분 8비트, 호스트 부분 24비트로 구성된다.'
  },
  {
    id: 66,
    subject: 'programming-basic',
    question: '운영체제의 페이지 교체 알고리즘 중, 가장 오랫동안 사용되지 않은 페이지를 교체하는 기법은?',
    options: ['FIFO', 'LRU', 'LFU', 'OPT'],
    answer: 1,
    explanation: 'LRU(Least Recently Used)는 가장 오랫동안 사용되지 않은 페이지를 교체 대상으로 선택하는 알고리즘이다.'
  },
  {
    id: 67,
    subject: 'programming-basic',
    question: '교착 상태(Deadlock)의 발생 필요 조건이 아닌 것은?',
    options: ['상호 배제(Mutual Exclusion)', '점유와 대기(Hold and Wait)', '선점(Preemption)', '환형 대기(Circular Wait)'],
    answer: 2,
    explanation: '교착 상태의 4가지 필요 조건은 상호 배제, 점유와 대기, 비선점(Non-preemption), 환형 대기이다. 선점은 교착 상태 조건이 아니라 비선점이 조건이다.'
  },
  {
    id: 68,
    subject: 'programming-basic',
    question: '그레이 코드(Gray Code)의 특징으로 올바른 것은?',
    options: [
      '가중치가 있는 코드이다',
      '인접한 코드 간에 1비트만 변화한다',
      '오류 수정이 가능한 코드이다',
      '음수 표현에 특화된 코드이다'
    ],
    answer: 1,
    explanation: '그레이 코드는 인접한 두 코드 값 사이에서 1비트만 변화하는 특징이 있어 아날로그-디지털 변환이나 입출력 장치에 사용된다.'
  },
  {
    id: 69,
    subject: 'programming-basic',
    question: '주소 버스(Address Bus)가 16비트일 때 접근 가능한 최대 메모리 용량은?',
    options: ['32KB', '128KB', '256KB', '64KB'],
    answer: 3,
    explanation: '주소 버스가 16비트이면 2^16 = 65,536개의 주소를 지정할 수 있으므로 최대 64KB의 메모리에 접근할 수 있다.'
  },
  {
    id: 70,
    subject: 'programming-basic',
    question: 'SCAN 디스크 스케줄링에 대한 설명으로 올바른 것은?',
    options: [
      '요청이 들어온 순서대로 서비스한다',
      '현재 위치에서 가장 가까운 요청을 먼저 서비스한다',
      '한쪽 끝에서 다른 쪽 끝으로 이동하며 요청을 서비스한 후 방향을 바꾼다',
      '바깥쪽에서 안쪽으로만 이동하며 서비스한다'
    ],
    answer: 2,
    explanation: 'SCAN(엘리베이터 알고리즘)은 헤드가 한 방향으로 끝까지 이동하면서 요청을 서비스한 후 반대 방향으로 전환하여 다시 서비스하는 방식이다.'
  },

  // ============================================================
  // algorithm (알고리즘) - Questions 71~95
  // ============================================================
  {
    id: 71,
    subject: 'algorithm',
    question: '합병 정렬(Merge Sort)의 시간 복잡도로 올바른 것은?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
    answer: 3,
    explanation: '합병 정렬은 분할 정복 방식을 사용하며, 최선·평균·최악 모두 O(n log n)의 시간 복잡도를 가진다.'
  },
  {
    id: 72,
    subject: 'algorithm',
    question: '합병 정렬(Merge Sort)의 특징으로 옳지 않은 것은?',
    options: [
      '분할 정복 방식을 사용한다',
      '안정 정렬(Stable Sort)이다',
      '추가적인 메모리 공간이 필요하지 않다',
      '항상 O(n log n)의 시간 복잡도를 보장한다'
    ],
    answer: 2,
    explanation: '합병 정렬은 병합 과정에서 임시 배열이 필요하므로 추가적인 메모리 공간(O(n))이 필요하다는 단점이 있다.'
  },
  {
    id: 73,
    subject: 'algorithm',
    question: '힙 정렬(Heap Sort)에서 사용하는 자료구조는?',
    options: ['이진 탐색 트리', 'B-트리', 'AVL 트리', '완전 이진 트리'],
    answer: 3,
    explanation: '힙 정렬은 완전 이진 트리 형태의 힙(Heap) 자료구조를 이용하여 정렬하는 알고리즘이다.'
  },
  {
    id: 74,
    subject: 'algorithm',
    question: '최대 힙(Max Heap)에서 항상 성립하는 조건은?',
    options: [
      '부모 노드의 값이 자식 노드의 값보다 작거나 같다',
      '부모 노드의 값이 자식 노드의 값보다 크거나 같다',
      '왼쪽 자식이 오른쪽 자식보다 항상 크다',
      '모든 리프 노드의 값이 동일하다'
    ],
    answer: 1,
    explanation: '최대 힙(Max Heap)은 부모 노드의 키 값이 자식 노드의 키 값보다 항상 크거나 같은 완전 이진 트리이다.'
  },
  {
    id: 75,
    subject: 'algorithm',
    question: '기수 정렬(Radix Sort)에 대한 설명으로 올바른 것은?',
    options: [
      '비교 기반 정렬 알고리즘이다',
      '자릿수(기수)를 이용하여 정렬하며, 비교 연산을 하지 않는다',
      '최악의 경우 시간 복잡도가 O(n²)이다',
      '제자리 정렬(In-place Sort)이다'
    ],
    answer: 1,
    explanation: '기수 정렬은 낮은 자릿수부터(또는 높은 자릿수부터) 각 자릿수를 기준으로 정렬하는 비비교 정렬 알고리즘이다.'
  },
  {
    id: 76,
    subject: 'algorithm',
    question: '해싱(Hashing)에서 서로 다른 키 값이 동일한 해시 주소로 변환되는 현상을 무엇이라 하는가?',
    options: ['충돌(Collision)', '오버플로우', '해시 폴딩', '동의어(Synonym)'],
    answer: 0,
    explanation: '충돌(Collision)은 서로 다른 두 개의 키가 해시 함수에 의해 같은 해시 주소로 매핑되는 현상이다.'
  },
  {
    id: 77,
    subject: 'algorithm',
    question: '해시 충돌 해결 기법 중 개방 주소법(Open Addressing)에 해당하는 것은?',
    options: ['체이닝(Chaining)', '선형 탐사(Linear Probing)', '버킷(Bucket)', '오버플로우 영역'],
    answer: 1,
    explanation: '선형 탐사(Linear Probing)는 충돌 발생 시 바로 다음 빈 공간을 순차적으로 탐색하여 데이터를 저장하는 개방 주소법이다.'
  },
  {
    id: 78,
    subject: 'algorithm',
    question: '그래프의 인접 행렬(Adjacency Matrix)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '정점 수가 n일 때 n×n 크기의 2차원 배열을 사용한다',
      '간선의 존재 여부를 O(1) 시간에 확인할 수 있다',
      '희소 그래프(Sparse Graph)에서 메모리 효율이 좋다',
      '무방향 그래프의 경우 대칭 행렬이 된다'
    ],
    answer: 2,
    explanation: '인접 행렬은 정점 수의 제곱만큼 메모리를 사용하므로 간선 수가 적은 희소 그래프에서는 메모리 낭비가 크다. 희소 그래프에는 인접 리스트가 더 효율적이다.'
  },
  {
    id: 79,
    subject: 'algorithm',
    question: '깊이 우선 탐색(DFS)에서 주로 사용하는 자료구조는?',
    options: ['큐(Queue)', '히프(Heap)', '해시 테이블', '스택(Stack)'],
    answer: 3,
    explanation: '깊이 우선 탐색(DFS)은 스택(Stack)을 사용하거나 재귀 호출을 이용하여 구현한다.'
  },
  {
    id: 80,
    subject: 'algorithm',
    question: '너비 우선 탐색(BFS)에서 주로 사용하는 자료구조는?',
    options: ['큐(Queue)', '스택(Stack)', '트리(Tree)', '배열(Array)'],
    answer: 0,
    explanation: '너비 우선 탐색(BFS)은 큐(Queue)를 사용하여 현재 정점과 인접한 모든 정점을 먼저 방문한 후, 다음 단계로 넘어가는 방식이다.'
  },
  {
    id: 81,
    subject: 'algorithm',
    question: '다익스트라(Dijkstra) 알고리즘에 대한 설명으로 올바른 것은?',
    options: [
      '모든 정점 쌍 간의 최단 경로를 구한다',
      '음의 가중치가 있는 그래프에서도 사용 가능하다',
      '하나의 출발 정점에서 다른 모든 정점까지의 최단 경로를 구한다',
      '최소 신장 트리를 구하는 알고리즘이다'
    ],
    answer: 2,
    explanation: '다익스트라 알고리즘은 하나의 출발점에서 다른 모든 정점까지의 최단 경로를 구하는 알고리즘으로, 음의 가중치가 없는 그래프에서 사용된다.'
  },
  {
    id: 82,
    subject: 'algorithm',
    question: '동적 프로그래밍(Dynamic Programming)의 핵심 원리는?',
    options: [
      '문제를 무작위로 분할하여 해결한다',
      '이미 계산한 결과를 저장하여 중복 계산을 피한다',
      '항상 가장 큰 값을 먼저 선택한다',
      '문제를 정렬한 후 순차적으로 해결한다'
    ],
    answer: 1,
    explanation: '동적 프로그래밍은 큰 문제를 작은 부분 문제로 나누고, 이미 계산한 부분 문제의 결과를 메모이제이션(저장)하여 중복 계산을 방지하는 기법이다.'
  },
  {
    id: 83,
    subject: 'algorithm',
    question: '분할 정복(Divide and Conquer) 알고리즘의 단계를 올바르게 나열한 것은?',
    options: [
      '정복 → 분할 → 결합',
      '분할 → 정복 → 결합',
      '결합 → 분할 → 정복',
      '분할 → 결합 → 정복'
    ],
    answer: 1,
    explanation: '분할 정복은 문제를 작은 부분으로 분할(Divide)하고, 각 부분을 정복(Conquer)한 후, 결과를 결합(Combine)하는 3단계로 수행된다.'
  },
  {
    id: 84,
    subject: 'algorithm',
    question: '다음 순서도를 추적했을 때 출력되는 S의 값은?\n[시작] → S=1, i=1 → (i<=5?) → 예: S=S*i, i=i+1 → [반복] → 아니오: S 출력 → [끝]',
    options: ['15', '55', '120', '720'],
    answer: 2,
    explanation: 'S = 1*1*2*3*4*5 = 120이다. 이것은 5!(5 팩토리얼)을 구하는 순서도이다.'
  },
  {
    id: 85,
    subject: 'algorithm',
    question: '다음 순서도를 추적했을 때 K의 최종 값은?\n[시작] → K=0, i=1 → (i<=10?) → 예: i가 짝수이면 K=K+i, i=i+1 → [반복] → 아니오: [끝]',
    options: ['25', '30', '45', '55'],
    answer: 1,
    explanation: '1부터 10까지의 짝수(2+4+6+8+10)의 합을 구하므로 K = 2+4+6+8+10 = 30이다.'
  },
  {
    id: 86,
    subject: 'algorithm',
    question: '재귀 함수 f(n) = f(n-1) + f(n-2), f(1)=2, f(2)=3일 때 f(6)의 값은?',
    options: ['11', '15', '21', '29'],
    answer: 2,
    explanation: 'f(1)=2, f(2)=3, f(3)=f(2)+f(1)=5, f(4)=f(3)+f(2)=8, f(5)=f(4)+f(3)=13, f(6)=f(5)+f(4)=13+8=21이다.'
  },
  {
    id: 87,
    subject: 'algorithm',
    question: '원형 큐(Circular Queue)를 사용하는 주된 이유는?',
    options: [
      '스택처럼 사용할 수 있기 때문이다',
      '선형 큐에서 발생하는 메모리 낭비 문제를 해결하기 위해서이다',
      '데이터의 정렬이 자동으로 이루어지기 때문이다',
      '삽입과 삭제를 양쪽 끝에서 할 수 있기 때문이다'
    ],
    answer: 1,
    explanation: '선형 큐는 삭제 시 앞쪽 공간이 비어도 재사용하기 어렵다. 원형 큐는 배열의 끝과 처음을 연결하여 이러한 메모리 낭비 문제를 해결한다.'
  },
  {
    id: 88,
    subject: 'algorithm',
    question: '원형 큐에서 크기가 n인 배열을 사용할 때, 큐가 가득 찬 조건은? (front: 앞, rear: 뒤)',
    options: [
      'front == rear',
      '(rear + 1) % n == front',
      'rear == n - 1',
      'front == 0 && rear == n'
    ],
    answer: 1,
    explanation: '원형 큐에서 포화(Full) 상태의 조건은 (rear + 1) % n == front이다. 하나의 공간을 비워두어 공백과 포화 상태를 구분한다.'
  },
  {
    id: 89,
    subject: 'algorithm',
    question: '이중 연결 리스트(Doubly Linked List)에서 각 노드가 가지는 포인터의 개수는?',
    options: ['0개', '1개', '2개', '3개'],
    answer: 2,
    explanation: '이중 연결 리스트의 각 노드는 이전 노드를 가리키는 포인터(prev)와 다음 노드를 가리키는 포인터(next), 총 2개의 포인터를 가진다.'
  },
  {
    id: 90,
    subject: 'algorithm',
    question: '이중 연결 리스트의 장점으로 올바른 것은?',
    options: [
      '메모리 사용량이 단일 연결 리스트보다 적다',
      '삽입과 삭제가 불가능하다',
      '양방향으로 탐색이 가능하다',
      '순환 구조를 만들 수 없다'
    ],
    answer: 2,
    explanation: '이중 연결 리스트는 각 노드에 이전 노드와 다음 노드에 대한 포인터가 있어 양방향으로 탐색이 가능하다는 장점이 있다.'
  },
  {
    id: 91,
    subject: 'algorithm',
    question: '배열 [38, 27, 43, 3, 9, 82, 10]을 합병 정렬로 오름차순 정렬할 때, 첫 번째 분할 결과는?',
    options: [
      '[38, 27, 43] 과 [3, 9, 82, 10]',
      '[38, 27] 과 [43, 3, 9, 82, 10]',
      '[38] 과 [27, 43, 3, 9, 82, 10]',
      '[3, 9, 10, 27] 과 [38, 43, 82]'
    ],
    answer: 0,
    explanation: '합병 정렬은 배열을 반으로 분할하므로 7개의 원소를 [38, 27, 43]과 [3, 9, 82, 10]으로 나눈다.'
  },
  {
    id: 92,
    subject: 'algorithm',
    question: '다음 그래프에서 정점 A부터 시작하여 BFS로 방문하는 순서로 올바른 것은?\n(인접 관계: A-B, A-C, B-D, C-D, C-E)',
    options: [
      'A → B → D → C → E',
      'A → B → C → D → E',
      'A → C → E → B → D',
      'A → C → B → E → D'
    ],
    answer: 1,
    explanation: 'BFS는 시작 정점에서 가까운 정점부터 방문한다. A에서 인접한 B, C를 먼저 방문하고, 그 다음 D, E를 방문하므로 A→B→C→D→E 순서이다.'
  },
  {
    id: 93,
    subject: 'algorithm',
    question: '다음 그래프에서 정점 A부터 시작하여 DFS로 방문하는 순서로 올바른 것은?\n(인접 관계: A-B, A-C, B-D, C-D, C-E, 알파벳 순 탐색)',
    options: [
      'A → B → C → D → E',
      'A → B → D → C → E',
      'A → C → E → D → B',
      'A → C → D → B → E'
    ],
    answer: 1,
    explanation: 'DFS는 한 방향으로 깊이 탐색한다. A에서 B로, B에서 D로, D에서 C로(미방문), C에서 E로 방문하므로 A→B→D→C→E 순서이다.'
  },
  {
    id: 94,
    subject: 'algorithm',
    question: '재귀 함수에서 반드시 필요한 요소는?',
    options: [
      '반복문(for 또는 while)',
      '종료 조건(Base Case)',
      '전역 변수',
      '배열 자료구조'
    ],
    answer: 1,
    explanation: '재귀 함수는 자기 자신을 호출하므로, 무한 호출을 방지하기 위해 반드시 종료 조건(Base Case)이 있어야 한다.'
  },
  {
    id: 95,
    subject: 'algorithm',
    question: '다음 중 힙(Heap) 자료구조의 삽입 연산 시간 복잡도는?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 2,
    explanation: '힙에서 삽입 연산은 새 노드를 마지막에 추가한 후, 부모와 비교하며 위로 이동(상향식 재구성)하므로 트리의 높이인 O(log n)의 시간 복잡도를 가진다.'
  },

  // ============================================================
  // db-basic (데이터베이스) - Questions 96~120
  // ============================================================
  {
    id: 96,
    subject: 'db-basic',
    question: 'SQL에서 특정 패턴을 검색할 때 사용하는 연산자는?',
    options: ['IN', 'BETWEEN', 'LIKE', 'EXISTS'],
    answer: 2,
    explanation: 'LIKE 연산자는 문자열의 특정 패턴을 검색할 때 사용하며, %는 0개 이상의 문자, _는 1개의 문자를 대체한다.'
  },
  {
    id: 97,
    subject: 'db-basic',
    question: '다음 SQL에서 LIKE 연산자의 패턴 \'김%\'의 의미는?\nSELECT * FROM 학생 WHERE 이름 LIKE \'김%\';',
    options: [
      '이름이 "김"으로 시작하는 학생',
      '이름에 "김"이 포함된 학생',
      '이름이 "김"으로 끝나는 학생',
      '이름이 정확히 "김"인 학생'
    ],
    answer: 0,
    explanation: '\'김%\'는 "김"으로 시작하는 모든 문자열을 의미한다. %는 0개 이상의 임의의 문자를 대체하는 와일드카드이다.'
  },
  {
    id: 98,
    subject: 'db-basic',
    question: 'SQL에서 BETWEEN 연산자의 사용법으로 올바른 것은?',
    options: [
      'WHERE 점수 BETWEEN 80 OR 90',
      'WHERE 점수 BETWEEN 80 AND 90',
      'WHERE 점수 BETWEEN (80, 90)',
      'WHERE 점수 BETWEEN 80 TO 90'
    ],
    answer: 1,
    explanation: 'BETWEEN은 특정 범위 내의 값을 검색할 때 사용하며, 형식은 컬럼 BETWEEN 시작값 AND 끝값이다. 시작값과 끝값 모두 포함된다.'
  },
  {
    id: 99,
    subject: 'db-basic',
    question: 'SQL에서 IN 연산자에 대한 설명으로 올바른 것은?',
    options: [
      '범위 내의 값을 검색한다',
      '패턴 매칭을 수행한다',
      '지정한 값 목록 중 하나와 일치하는 행을 검색한다',
      'NULL 값을 확인한다'
    ],
    answer: 2,
    explanation: 'IN 연산자는 WHERE 컬럼 IN (값1, 값2, 값3) 형태로 사용하며, 지정한 값 목록 중 하나라도 일치하는 행을 반환한다.'
  },
  {
    id: 100,
    subject: 'db-basic',
    question: '다음 SQL에서 서브쿼리(중첩질의)의 결과가 올바르게 설명된 것은?\nSELECT 이름 FROM 학생 WHERE 학과코드 IN (SELECT 학과코드 FROM 학과 WHERE 학과명 = \'컴퓨터공학\');',
    options: [
      '컴퓨터공학과의 학과코드를 조회한다',
      '모든 학과의 학생 이름을 조회한다',
      '컴퓨터공학과에 속한 학생의 이름을 조회한다',
      '학과 테이블의 모든 정보를 조회한다'
    ],
    answer: 2,
    explanation: '서브쿼리가 먼저 실행되어 컴퓨터공학과의 학과코드를 구하고, 외부 쿼리에서 해당 학과코드를 가진 학생의 이름을 조회한다.'
  },
  {
    id: 101,
    subject: 'db-basic',
    question: '뷰(VIEW)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '하나 이상의 기본 테이블로부터 유도된 가상 테이블이다',
      '데이터의 논리적 독립성을 제공한다',
      '뷰를 통해 항상 데이터의 삽입, 삭제, 갱신이 가능하다',
      '보안 측면에서 특정 컬럼을 숨기는 데 활용할 수 있다'
    ],
    answer: 2,
    explanation: '뷰를 통한 데이터 변경에는 제약이 있다. 집계 함수, GROUP BY, DISTINCT, JOIN 등이 포함된 뷰는 일반적으로 데이터 변경이 불가능하다.'
  },
  {
    id: 102,
    subject: 'db-basic',
    question: '뷰(VIEW)를 생성하는 SQL 문으로 올바른 것은?',
    options: [
      'MAKE VIEW 뷰명 AS SELECT ...',
      'CREATE VIEW 뷰명 AS SELECT ...',
      'INSERT VIEW 뷰명 AS SELECT ...',
      'ALTER VIEW 뷰명 AS SELECT ...'
    ],
    answer: 1,
    explanation: 'CREATE VIEW 뷰명 AS SELECT 문으로 뷰를 생성한다. SELECT 문의 결과가 뷰의 내용이 된다.'
  },
  {
    id: 103,
    subject: 'db-basic',
    question: '데이터베이스에서 인덱스(Index)를 사용하는 주된 목적은?',
    options: [
      '데이터의 보안성을 향상시키기 위해',
      '데이터 중복을 제거하기 위해',
      '데이터 무결성을 보장하기 위해',
      '데이터 검색 속도를 향상시키기 위해'
    ],
    answer: 3,
    explanation: '인덱스는 데이터를 빠르게 검색하기 위해 만드는 별도의 자료구조로, 테이블의 특정 컬럼에 대해 빠른 조회를 가능하게 한다.'
  },
  {
    id: 104,
    subject: 'db-basic',
    question: '인덱스(Index)에 대한 설명으로 옳지 않은 것은?',
    options: [
      '데이터 검색 속도를 향상시킨다',
      '인덱스를 많이 만들수록 검색 성능이 항상 좋아진다',
      '삽입, 삭제, 갱신 시 인덱스도 함께 관리되어야 한다',
      'B-트리 구조가 많이 사용된다'
    ],
    answer: 1,
    explanation: '인덱스를 과도하게 많이 만들면 삽입, 삭제, 갱신 시 인덱스 유지 비용이 증가하여 오히려 전체 성능이 저하될 수 있다.'
  },
  {
    id: 105,
    subject: 'db-basic',
    question: '트랜잭션(Transaction)의 특성 중 ACID에 해당하지 않는 것은?',
    options: ['원자성(Atomicity)', '일관성(Consistency)', '의존성(Dependency)', '지속성(Durability)'],
    answer: 2,
    explanation: '트랜잭션의 ACID 특성은 원자성(Atomicity), 일관성(Consistency), 격리성(Isolation), 지속성(Durability)이다. 의존성은 ACID에 포함되지 않는다.'
  },
  {
    id: 106,
    subject: 'db-basic',
    question: '트랜잭션의 원자성(Atomicity)에 대한 설명으로 올바른 것은?',
    options: [
      '트랜잭션의 결과는 다른 트랜잭션에 영향을 받지 않는다',
      '트랜잭션이 완료되면 결과가 영구적으로 반영된다',
      '트랜잭션은 모두 실행되거나 모두 취소되어야 한다',
      '트랜잭션 전후로 데이터베이스가 일관된 상태를 유지해야 한다'
    ],
    answer: 2,
    explanation: '원자성(Atomicity)은 트랜잭션의 연산이 모두 정상적으로 실행되거나, 하나라도 실패하면 전체를 취소(Rollback)해야 한다는 All or Nothing 원칙이다.'
  },
  {
    id: 107,
    subject: 'db-basic',
    question: 'SQL에서 COMMIT 명령어의 역할은?',
    options: [
      '트랜잭션의 변경 내용을 취소한다',
      '특정 저장점까지만 되돌린다',
      '새로운 트랜잭션을 시작한다',
      '트랜잭션의 변경 내용을 영구적으로 데이터베이스에 반영한다'
    ],
    answer: 3,
    explanation: 'COMMIT은 트랜잭션에서 수행한 모든 변경 사항(INSERT, UPDATE, DELETE 등)을 데이터베이스에 영구적으로 저장하는 명령이다.'
  },
  {
    id: 108,
    subject: 'db-basic',
    question: 'SQL에서 ROLLBACK 명령어에 대한 설명으로 올바른 것은?',
    options: [
      '트랜잭션의 결과를 영구적으로 저장한다',
      '데이터베이스 구조를 변경한다',
      '트랜잭션의 변경 내용을 취소하고 이전 상태로 되돌린다',
      '트랜잭션에 대한 잠금을 설정한다'
    ],
    answer: 2,
    explanation: 'ROLLBACK은 트랜잭션이 실패하거나 취소해야 할 때, 트랜잭션의 모든 변경 사항을 취소하고 이전의 일관된 상태로 되돌리는 명령이다.'
  },
  {
    id: 109,
    subject: 'db-basic',
    question: '기본키(Primary Key)의 특성으로 옳지 않은 것은?',
    options: [
      '각 튜플을 유일하게 식별할 수 있다',
      'NULL 값을 가질 수 없다',
      '하나의 릴레이션에 여러 개 지정할 수 있다',
      '후보키 중에서 선택된다'
    ],
    answer: 2,
    explanation: '기본키는 하나의 릴레이션에 오직 하나만 지정할 수 있다. 유일성과 NOT NULL 제약 조건을 만족해야 하며, 후보키 중에서 선택된다.'
  },
  {
    id: 110,
    subject: 'db-basic',
    question: '외래키(Foreign Key)에 대한 설명으로 올바른 것은?',
    options: [
      '한 릴레이션의 기본키를 구성하는 속성이다',
      '모든 속성의 집합으로 구성된다',
      '다른 릴레이션의 기본키를 참조하는 속성이다',
      'NULL 값을 허용하지 않는다'
    ],
    answer: 2,
    explanation: '외래키(Foreign Key)는 다른 릴레이션의 기본키를 참조하여 릴레이션 간의 관계를 표현하는 속성이다.'
  },
  {
    id: 111,
    subject: 'db-basic',
    question: '참조 무결성(Referential Integrity)에 대한 설명으로 올바른 것은?',
    options: [
      '기본키 값은 중복될 수 없다는 규칙이다',
      '외래키 값은 참조 릴레이션의 기본키 값이거나 NULL이어야 한다는 규칙이다',
      '모든 속성 값이 원자값이어야 한다는 규칙이다',
      '릴레이션의 이름은 유일해야 한다는 규칙이다'
    ],
    answer: 1,
    explanation: '참조 무결성은 외래키 값이 참조하는 릴레이션의 기본키에 존재하는 값이거나 NULL이어야 한다는 무결성 제약 조건이다.'
  },
  {
    id: 112,
    subject: 'db-basic',
    question: '관계대수에서 릴레이션의 특정 튜플(행)을 선택하는 연산은?',
    options: ['셀렉트(Select)', '프로젝트(Project)', '조인(Join)', '디비전(Division)'],
    answer: 0,
    explanation: '셀렉트(Select, σ)는 릴레이션에서 주어진 조건을 만족하는 튜플(행)을 선택하는 관계대수 연산이다.'
  },
  {
    id: 113,
    subject: 'db-basic',
    question: '관계대수에서 릴레이션의 특정 속성(열)만 추출하는 연산은?',
    options: ['셀렉트(Select)', '프로젝트(Project)', '카티션 프로덕트(Cartesian Product)', '유니온(Union)'],
    answer: 1,
    explanation: '프로젝트(Project, π)는 릴레이션에서 원하는 속성(열)만을 추출하는 관계대수 연산이다.'
  },
  {
    id: 114,
    subject: 'db-basic',
    question: '데이터베이스 설계 과정의 순서로 올바른 것은?',
    options: [
      '물리적 설계 → 논리적 설계 → 개념적 설계 → 요구사항 분석',
      '요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계',
      '논리적 설계 → 개념적 설계 → 요구사항 분석 → 물리적 설계',
      '개념적 설계 → 요구사항 분석 → 물리적 설계 → 논리적 설계'
    ],
    answer: 1,
    explanation: '데이터베이스 설계 과정은 요구사항 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현 순서로 진행된다.'
  },
  {
    id: 115,
    subject: 'db-basic',
    question: '개념적 설계 단계에서 주로 사용하는 모델은?',
    options: ['관계 데이터 모델', '네트워크 모델', '물리적 데이터 모델', 'E-R 모델'],
    answer: 3,
    explanation: '개념적 설계 단계에서는 E-R(Entity-Relationship) 모델을 사용하여 현실 세계의 데이터를 개체, 속성, 관계로 표현한다.'
  },
  {
    id: 116,
    subject: 'db-basic',
    question: '논리적 설계에 대한 설명으로 올바른 것은?',
    options: [
      '하드웨어와 운영체제를 선택하는 단계이다',
      '개념적 스키마를 특정 DBMS에 맞는 논리적 스키마로 변환하는 단계이다',
      '저장 구조와 접근 경로를 결정하는 단계이다',
      '사용자의 요구사항을 수집하고 분석하는 단계이다'
    ],
    answer: 1,
    explanation: '논리적 설계는 개념적 설계의 결과인 E-R 다이어그램을 특정 DBMS가 지원하는 데이터 모델(관계형 등)의 논리적 스키마로 변환하는 단계이다.'
  },
  {
    id: 117,
    subject: 'db-basic',
    question: '물리적 설계에서 결정하는 사항이 아닌 것은?',
    options: [
      '저장 레코드의 구조',
      '접근 경로(인덱스 등)',
      '개체 간의 관계(Relationship)',
      '저장 공간의 배치'
    ],
    answer: 2,
    explanation: '개체 간의 관계는 개념적 설계 단계에서 결정하는 사항이다. 물리적 설계에서는 저장 구조, 접근 경로, 저장 공간 배치 등을 결정한다.'
  },
  {
    id: 118,
    subject: 'db-basic',
    question: 'SQL에서 테이블을 삭제하는 명령어는?',
    options: ['DELETE TABLE', 'REMOVE TABLE', 'DROP TABLE', 'DESTROY TABLE'],
    answer: 2,
    explanation: 'DROP TABLE 테이블명은 테이블의 구조와 데이터를 모두 삭제하는 DDL(데이터 정의어) 명령이다. DELETE는 데이터(행)만 삭제하는 DML이다.'
  },
  {
    id: 119,
    subject: 'db-basic',
    question: 'SQL에서 테이블의 구조를 변경할 때 사용하는 명령어는?',
    options: ['UPDATE', 'MODIFY', 'ALTER', 'CHANGE'],
    answer: 2,
    explanation: 'ALTER TABLE 명령어는 기존 테이블의 구조를 변경(컬럼 추가, 삭제, 수정 등)할 때 사용하는 DDL(데이터 정의어)이다.'
  },
  {
    id: 120,
    subject: 'db-basic',
    question: '개체 무결성(Entity Integrity) 제약 조건에 대한 설명으로 올바른 것은?',
    options: [
      '외래키는 참조하는 릴레이션의 기본키 값이어야 한다',
      '기본키를 구성하는 속성은 NULL 값을 가질 수 없다',
      '모든 속성의 값은 도메인에 속해야 한다',
      '릴레이션에는 중복된 튜플이 있어도 된다'
    ],
    answer: 1,
    explanation: '개체 무결성은 기본키를 구성하는 어떠한 속성도 NULL 값이나 중복된 값을 가질 수 없다는 제약 조건이다.'
  }
]
