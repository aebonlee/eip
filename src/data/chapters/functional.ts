export const functionalChapters = {
  'programming-basic': [
    {
      id: 'ch1',
      name: '컴퓨터 구조',
      topics: [
        'CPU 구성요소',
        '명령어 실행 주기',
        '주소지정방식',
        '기억장치 계층구조',
        '입출력 장치',
        '인터럽트',
        '버스 시스템',
      ],
      content: `## 컴퓨터 구조

### CPU 구성요소
- **ALU(산술논리연산장치)**: 산술 연산(+, -, ×, ÷)과 논리 연산(AND, OR, NOT)을 수행하는 장치
- **CU(제어장치)**: 명령어를 해독하고 각 장치에 제어 신호를 보내 동작을 지시하는 장치
- **레지스터**: CPU 내부의 초고속 임시 기억장치
  - **PC(프로그램 카운터)**: 다음에 실행할 명령어의 주소를 저장
  - **IR(명령어 레지스터)**: 현재 실행 중인 명령어를 저장
  - **MAR(메모리 주소 레지스터)**: 접근할 메모리의 주소를 저장
  - **MBR(메모리 버퍼 레지스터)**: 메모리에서 읽거나 쓸 데이터를 저장
  - **AC(누산기)**: 연산 결과를 임시로 저장

### 명령어 실행 주기 (Instruction Cycle)
- **인출(Fetch)**: PC가 가리키는 주소에서 명령어를 가져와 IR에 저장
- **해독(Decode)**: 제어장치가 IR에 있는 명령어를 해독
- **실행(Execute)**: 해독된 명령어에 따라 연산 수행
- **저장(Store)**: 실행 결과를 메모리나 레지스터에 저장

### 주소지정방식 (Addressing Mode)
- **즉시 주소지정(Immediate)**: 명령어 자체에 실제 데이터(오퍼랜드)가 포함됨, 가장 빠름
- **직접 주소지정(Direct)**: 명령어에 데이터가 있는 메모리 주소가 직접 포함됨
- **간접 주소지정(Indirect)**: 명령어의 주소가 실제 데이터 주소를 가리키는 주소를 담고 있음, 메모리 접근 2회 필요
- **레지스터 주소지정(Register)**: 데이터가 레지스터에 있으며, 명령어에 레지스터 번호가 포함됨

### 기억장치 계층구조 (빠른 순서)
1. **레지스터**: CPU 내부, 가장 빠르고 용량이 가장 작음
2. **캐시 메모리(Cache)**: CPU와 주기억장치 사이의 속도 차이를 줄여주는 고속 버퍼 메모리
3. **주기억장치(RAM/ROM)**: 현재 실행 중인 프로그램과 데이터를 저장, 전원이 꺼지면 RAM은 내용 소멸
4. **보조기억장치(HDD/SSD)**: 대용량, 영구 저장, 속도가 가장 느림

### 입출력 장치와 인터럽트
- **입력 장치**: 키보드, 마우스, 스캐너
- **출력 장치**: 모니터, 프린터, 스피커
- **인터럽트**: 프로그램 실행 중 예기치 않은 상황이 발생하여 현재 작업을 중단하고 우선 처리하는 것
  - **외부 인터럽트**: 전원 이상, 입출력 장치 등 하드웨어에서 발생
  - **내부 인터럽트**: 0으로 나누기, 오버플로우 등 프로그램 오류로 발생
  - **소프트웨어 인터럽트**: 프로그램에서 의도적으로 발생시키는 인터럽트 (SVC)

### 버스 시스템
- **데이터 버스**: CPU와 메모리 사이에서 데이터를 전달하는 통로 (양방향)
- **주소 버스**: CPU가 메모리나 입출력 장치의 주소를 지정하는 통로 (단방향)
- **제어 버스**: 읽기/쓰기 등 제어 신호를 전달하는 통로 (양방향)`,
    },
    {
      id: 'ch2',
      name: '운영체제',
      topics: [
        '운영체제 종류',
        '프로세스 상태',
        'CPU 스케줄링',
        '교착상태',
        '메모리 관리',
        '페이지 교체 알고리즘',
      ],
      content: `## 운영체제

### 운영체제의 종류
- **일괄처리 시스템(Batch)**: 일정량의 작업을 모아서 한꺼번에 처리하는 방식
- **시분할 시스템(Time Sharing)**: CPU 시간을 여러 사용자에게 번갈아 배분하여 동시에 사용하는 것처럼 느끼게 하는 방식, 라운드 로빈 방식 사용
- **실시간 시스템(Real-Time)**: 정해진 시간 내에 반드시 결과를 내야 하는 시스템 (예: 미사일 제어, 항공기 운항)
- **다중 프로그래밍**: 메모리에 여러 프로그램을 동시에 적재하여 CPU 활용도를 높이는 방식
- **분산처리 시스템**: 여러 컴퓨터를 네트워크로 연결하여 작업을 분산 처리

### 프로세스 상태 전이
- **생성(New)**: 프로세스가 새로 만들어진 상태
- **준비(Ready)**: CPU를 할당받기 위해 대기 중인 상태
- **실행(Running)**: CPU를 할당받아 명령어를 수행하는 상태
- **대기(Waiting/Block)**: 입출력 처리 등을 기다리는 상태
- **완료(Terminated)**: 프로세스 실행이 끝난 상태
- 상태 전이: 준비→실행(**디스패치**), 실행→준비(**타임아웃**), 실행→대기(**블록/입출력 요청**), 대기→준비(**깨움/Wake-up**)

### CPU 스케줄링 알고리즘
- **비선점형** (실행 중인 프로세스를 강제로 빼앗지 않음)
  - **FCFS(First Come First Served)**: 먼저 도착한 프로세스 먼저 처리, 호위 효과(Convoy Effect) 발생 가능
  - **SJF(Shortest Job First)**: 실행 시간이 가장 짧은 프로세스 먼저 처리, 기아 현상 발생 가능
  - **Priority(우선순위)**: 우선순위가 높은 프로세스 먼저 처리, 기아 현상 → 에이징(Aging)으로 해결
- **선점형** (실행 중인 프로세스를 강제로 빼앗을 수 있음)
  - **RR(Round Robin)**: 각 프로세스에 동일한 시간 할당량(Time Quantum)을 부여하여 순환 처리
  - **SRT(Shortest Remaining Time)**: 남은 실행 시간이 가장 짧은 프로세스에 CPU 할당

### 교착상태 (Deadlock)
- **교착상태 4가지 필요조건** (4가지가 모두 충족되어야 교착 발생)
  - **상호배제(Mutual Exclusion)**: 자원을 한 번에 하나의 프로세스만 사용
  - **점유와 대기(Hold and Wait)**: 자원을 가진 채로 다른 자원을 기다림
  - **비선점(Non-preemption)**: 사용 중인 자원을 강제로 빼앗을 수 없음
  - **환형 대기(Circular Wait)**: 프로세스들이 원형으로 서로의 자원을 기다림
- 해결 방법: **예방**(조건 제거), **회피**(은행원 알고리즘), **탐지**, **복구**

### 메모리 관리
- **페이징(Paging)**: 프로세스를 동일한 크기의 **페이지**로 나누고, 메모리를 동일한 크기의 **프레임**으로 나누어 적재, 내부 단편화 발생 가능
- **세그먼테이션(Segmentation)**: 프로세스를 논리적 단위인 **세그먼트**로 나누어 적재, 외부 단편화 발생 가능

### 페이지 교체 알고리즘
- **FIFO(First In First Out)**: 가장 먼저 들어온 페이지를 교체, 벨레이디의 모순(Belady's Anomaly) 발생 가능
- **LRU(Least Recently Used)**: 가장 오래전에 사용된 페이지를 교체
- **LFU(Least Frequently Used)**: 사용 빈도가 가장 낮은 페이지를 교체
- **OPT(Optimal)**: 앞으로 가장 오랫동안 사용되지 않을 페이지를 교체, 실현 불가능한 이론적 최적 방법`,
    },
    {
      id: 'ch3',
      name: '자료 표현',
      topics: [
        '진법 변환',
        '보수',
        '고정소수점과 부동소수점',
        '문자 코드',
        '논리 회로',
        '불 대수',
      ],
      content: `## 자료 표현

### 진법 변환
- **2진법(Binary)**: 0과 1로 표현, 컴퓨터 내부에서 사용
- **8진법(Octal)**: 0~7로 표현, 2진수 3자리를 1자리로 묶어 변환
- **10진법(Decimal)**: 일상에서 사용하는 수 체계
- **16진법(Hexadecimal)**: 0~9, A~F로 표현, 2진수 4자리를 1자리로 묶어 변환
- **10진수 → 2진수 변환**: 10진수를 2로 계속 나누어 나머지를 역순으로 읽음
  - 예: 13 → 13÷2=6…1, 6÷2=3…0, 3÷2=1…1, 1÷2=0…1 → **1101(2)**
- **2진수 → 10진수 변환**: 각 자리에 2의 거듭제곱을 곱하여 합산
  - 예: 1101(2) → 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = **13**
- **2진수 → 8진수**: 오른쪽부터 3자리씩 묶어 변환
- **2진수 → 16진수**: 오른쪽부터 4자리씩 묶어 변환

### 보수 (Complement)
- **1의 보수**: 2진수에서 각 비트를 반전 (0→1, 1→0)
  - 예: 0101의 1의 보수 = **1010**
- **2의 보수**: 1의 보수에 1을 더한 값, 컴퓨터에서 음수를 표현하는 방법
  - 예: 0101의 2의 보수 = 1010 + 1 = **1011**
- **뺄셈을 덧셈으로**: A - B = A + (B의 2의 보수)

### 고정소수점과 부동소수점
- **고정소수점(Fixed Point)**: 소수점의 위치가 고정된 방식, 정수 표현에 주로 사용
  - 구성: 부호 비트 + 정수부
- **부동소수점(Floating Point)**: 소수점이 떠다니는 방식, 실수 표현에 사용
  - 구성: **부호 비트** + **지수부(Exponent)** + **가수부(Mantissa)**
  - 표현 범위가 넓지만 정밀도에 오차가 발생할 수 있음

### 문자 코드
- **ASCII**: 7비트로 128개 문자 표현 (영문자, 숫자, 특수문자, 제어문자)
  - 숫자 '0' = 48, 대문자 'A' = 65, 소문자 'a' = 97
- **유니코드(Unicode)**: 전 세계 모든 문자를 표현하기 위한 국제 표준 코드, 한글 포함
- **EBCDIC**: 8비트, IBM 메인프레임에서 사용
- **BCD(Binary Coded Decimal)**: 10진수 한 자리를 4비트 2진수로 표현

### 논리 회로 (Logic Gate)
- **AND 게이트**: 입력이 모두 1일 때 출력 1 (논리곱, A·B)
- **OR 게이트**: 입력 중 하나라도 1이면 출력 1 (논리합, A+B)
- **NOT 게이트**: 입력의 반대를 출력 (부정, A')
- **NAND 게이트**: AND의 부정, 입력이 모두 1일 때만 출력 0 → 만능 게이트
- **NOR 게이트**: OR의 부정, 입력이 모두 0일 때만 출력 1 → 만능 게이트
- **XOR 게이트**: 입력이 서로 다를 때 출력 1 (배타적 논리합)

### 불 대수 (Boolean Algebra) 기본 법칙
- **교환법칙**: A+B = B+A, A·B = B·A
- **결합법칙**: (A+B)+C = A+(B+C)
- **분배법칙**: A·(B+C) = A·B + A·C
- **흡수법칙**: A + A·B = A, A·(A+B) = A
- **드모르간 법칙**: (A·B)' = A'+B', (A+B)' = A'·B'
- **멱등법칙**: A+A = A, A·A = A
- **보수법칙**: A+A' = 1, A·A' = 0`,
    },
    {
      id: 'ch4',
      name: '전산영어 (구 출제기준 참고 자료)',
      topics: [
        '하드웨어 영어 용어',
        '소프트웨어·프로그래밍 영어 용어',
        '데이터베이스 영어 용어',
        '네트워크·인터넷 영어 용어',
        '보안·시스템 영어 용어',
        '영어 지문 핵심 표현',
      ],
      content: `## 전산영어

    먼저 알아 둘 점이 있습니다. 이 장은 구 정보처리기능사 필답형 실기 출제기준의 "전산영어" 과목 원고를 정리한 **구 출제기준 참고 자료**로, 현행 시험 기준과는 다릅니다. 그래도 영어 지문을 읽고 IT 용어를 답하는 훈련은 지금도 용어 실력을 탄탄하게 만들어 줍니다. 영어 문장이 어려워 보여도 괜찮습니다. 지문마다 정답을 가리키는 **핵심 영어 표현**이 한두 개씩 숨어 있고, 그 표현만 찾으면 답이 보입니다.

    ### 공부 방법 세 단계

    - 첫째, 영어 지문을 처음부터 끝까지 해석하려 하지 말고 아는 단어부터 동그라미를 치세요.
    - 둘째, 핵심 표현(예: brains of the computer)을 우리말 뜻과 짝지어 외우세요.
    - 셋째, 아래 확인 문제에서 지문만 보고 용어를 답하는 연습을 반복하세요.

    ### 하드웨어 용어

    - **CPU(중앙처리장치)** — The CPU is the brains of the computer. Also called the processor, it is made up of the control unit and ALU.
      - 풀이: CPU는 컴퓨터의 두뇌입니다. 프로세서라고도 불리며 제어장치(control unit)와 산술논리연산장치(ALU)로 구성됩니다.
      - 핵심 표현: brains of the computer(컴퓨터의 두뇌)
    - **ROM** — ROM is the permanent part of a computer's memory. The information stored there can be read but not changed.
      - 풀이: ROM은 컴퓨터 기억장치의 영구적인 부분입니다. 저장된 정보는 읽을 수 있지만 바꿀 수는 없습니다.
      - 핵심 표현: can be read but not changed(읽을 수는 있지만 변경 불가)
    - **플래시 메모리(Flash Memory)** — Flash memory is a special type of EEPROM. It is nonvolatile, energy-efficient memory, which maintains data without any external source of power.
      - 풀이: 플래시 메모리는 EEPROM의 특수한 형태로, 외부 전원이 없어도 데이터를 유지하는 비휘발성 메모리입니다. MP3 플레이어, PDA, 휴대전화, 디지털 카메라에 널리 쓰입니다.
      - 핵심 표현: nonvolatile(비휘발성), without any external source of power(외부 전원 없이)
    - **레지스터(Register)** — A register is a special, high-speed storage area within the CPU which stores data to be processed or intermediate results of an operation.
      - 풀이: 레지스터는 CPU 안에 있는 특별한 고속 저장 공간으로, 처리할 데이터나 연산의 중간 결과를 담습니다.
      - 핵심 표현: high-speed storage area within the CPU(CPU 내부의 고속 저장 영역)
    - **누산기(Accumulator)** — In a computer's CPU, an accumulator is a register in which intermediate arithmetic and logic results are stored.
      - 풀이: 누산기는 산술·논리 연산의 중간 결과를 일시적으로 저장하는 레지스터입니다.
      - 핵심 표현: intermediate arithmetic and logic results(산술·논리 연산의 중간 결과)
    - **캐시(Cache)** — A memory cache, or CPU cache, is a memory bank that bridges main memory and the CPU.
      - 풀이: 캐시는 주기억장치와 CPU 사이의 속도 차이를 메워 주는 다리 역할의 기억장치입니다.
      - 핵심 표현: bridges main memory and the CPU(주기억장치와 CPU를 이어 줌)
    - **비트(Bit)** — A bit is the basic unit of information in computing and telecommunications.
      - 풀이: 비트는 컴퓨팅과 통신에서 정보를 나타내는 가장 기본이 되는 단위입니다.
      - 핵심 표현: basic unit of information(정보의 기본 단위)
    - **LCD** — An LCD is a thin, flat electronic visual display that uses the light modulating properties of liquid crystals.
      - 풀이: LCD는 액정(liquid crystal)이 빛을 조절하는 성질을 이용한 얇고 평평한 전자 표시장치입니다.
      - 핵심 표현: liquid crystals(액정)
    - **USB** — USB replaces all the different kinds of serial, parallel and PS/2 port connectors with one standardized plug and port combination.
      - 풀이: USB는 여러 종류의 직렬·병렬·PS/2 포트를 하나의 표준화된 플러그와 포트로 통일한 규격입니다.
      - 핵심 표현: one standardized plug and port(하나로 표준화된 플러그와 포트)
    - **모뎀(MODEM)** — A modem, which is a portmanteau word constructed from modulator and demodulator, is a device that modulates digital information.
      - 풀이: 모뎀은 변조기(modulator)와 복조기(demodulator)의 합성어로, 디지털 신호를 변조·복조하는 장치입니다.
      - 핵심 표현: modulator and demodulator(변조기와 복조기)

    ### 소프트웨어·프로그래밍 용어

    - **C 언어** — C is a high-level programming language developed by Dennis Ritchie and Brian Kernighan at Bell Labs in the mid 1970s.
      - 풀이: C는 1970년대 중반 벨 연구소의 데니스 리치와 브라이언 커니핸이 개발한 고급 프로그래밍 언어입니다.
      - 핵심 표현: developed at Bell Labs(벨 연구소에서 개발)
    - **컴파일러(Compiler)** — A compiler is the software that translates a program written in a high-level programming language into machine language.
      - 풀이: 컴파일러는 고급 언어로 작성한 프로그램(원시 프로그램)을 기계어(목적 프로그램)로 번역하는 소프트웨어입니다.
      - 핵심 표현: translates into machine language(기계어로 번역)
    - **원시 프로그램(Source Program)** — The original program is called the source program and the resulting program is called the object program.
      - 풀이: 번역되기 전의 원래 프로그램을 원시 프로그램, 번역 결과로 나온 프로그램을 목적 프로그램(object program)이라고 합니다.
      - 핵심 표현: original program(원래 프로그램)
    - **디버깅(Debugging)** — Debugging is to find and remove errors from a software program.
      - 풀이: 디버깅은 프로그램에서 오류(버그)를 찾아 없애는 작업입니다. 벌레(bug)를 잡는 일이라는 이름 그대로입니다.
      - 핵심 표현: find and remove errors(오류를 찾아 제거)
    - **알고리즘(Algorithm)** — An algorithm is a formula or set of steps for solving a particular problem.
      - 풀이: 알고리즘은 특정 문제를 풀기 위한 공식 또는 단계의 모음입니다. 요리 레시피처럼 순서가 정해진 절차입니다.
      - 핵심 표현: set of steps for solving a problem(문제 해결 단계의 모음)
    - **커널(Kernel)** — In computing, the kernel is the central component of most computer operating systems.
      - 풀이: 커널은 운영체제의 가장 중심이 되는 구성 요소입니다. 과일의 씨앗(kernel)처럼 한가운데 있다고 기억하세요.
      - 핵심 표현: central component of operating systems(운영체제의 중심 구성 요소)
    - **리눅스(LINUX)** — Linux is a very popular version of the Unix operating system that runs on a variety of hardware platforms.
      - 풀이: 리눅스는 다양한 하드웨어에서 동작하는, 널리 쓰이는 유닉스 계열 운영체제입니다.
      - 핵심 표현: version of the Unix operating system(유닉스 계열 운영체제)
    - **스택(STACK)** — This is also called last-in, first-out(LIFO).
      - 풀이: 스택은 나중에 넣은 것을 먼저 꺼내는 후입선출 구조입니다. 접시를 쌓았다가 맨 위부터 꺼내는 것과 같습니다.
      - 핵심 표현: last-in, first-out(후입선출)
    - **스풀러(Spooler)** — A memory buffer in the print server's RAM that holds the print job until the printer is ready is called a spooler.
      - 풀이: 스풀러는 프린터가 준비될 때까지 인쇄 작업을 담아 두는 메모리 버퍼입니다.
      - 핵심 표현: holds the print job until the printer is ready(프린터가 준비될 때까지 작업 보관)
    - **캐드(CAD)** — CAD is an important industrial art extensively used in many applications, including automotive, shipbuilding, and aerospace industries.
      - 풀이: CAD는 자동차, 조선, 항공우주 산업과 산업·건축 설계에서 널리 쓰이는 컴퓨터 지원 설계 기술입니다.
      - 핵심 표현: automotive, shipbuilding, and aerospace(자동차·조선·항공우주)

    ### 데이터베이스 용어

    - **SQL** — This is the initial of Structured Query Language and is the standard language of relational databases.
      - 풀이: SQL은 Structured Query Language의 머리글자로, 관계형 데이터베이스의 표준 언어입니다.
      - 핵심 표현: standard language of relational database(관계형 데이터베이스의 표준 언어)
    - **DDL(데이터 정의어)** — A DDL is a language used to define data and their relationships to other data. It is used to create the data structure in a database.
      - 풀이: DDL은 데이터와 데이터 사이의 관계를 정의하는 언어로, 데이터베이스의 구조를 만드는 데 사용합니다. 조작어인 DML과 구분하세요.
      - 핵심 표현: define data(데이터를 정의), create the data structure(데이터 구조를 생성)
    - **DBMS(데이터베이스 관리 시스템)** — A DBMS is software that plays the role of an interface between the user and a database.
      - 풀이: DBMS는 사용자와 데이터베이스 사이에서 인터페이스(중간 통로) 역할을 하는 소프트웨어입니다.
      - 핵심 표현: interface between the user and a database(사용자와 데이터베이스 사이의 인터페이스)

    ### 네트워크·인터넷 용어

    - **프로토콜(Protocol)** — Protocol is rules governing transmitting and receiving of data in a telecommunication connection.
      - 풀이: 프로토콜은 통신에서 데이터를 주고받는 방법을 다스리는 규칙, 곧 통신 규약입니다.
      - 핵심 표현: rules governing transmitting and receiving of data(데이터 송수신을 다스리는 규칙)
    - **TCP/IP** — TCP/IP is the basic communication language or protocol of the Internet.
      - 풀이: TCP/IP는 인터넷의 기본 통신 언어(프로토콜)입니다.
      - 핵심 표현: basic protocol of the Internet(인터넷의 기본 프로토콜)
    - **게이트웨이(Gateway)** — A gateway is a network point that acts as an entrance to another network.
      - 풀이: 게이트웨이는 다른 네트워크로 들어가는 입구 역할을 하는 지점입니다. Gate(문)라는 이름 그대로입니다.
      - 핵심 표현: entrance to another network(다른 네트워크로 가는 입구)
    - **URL** — A URL is the unique address for a file that is accessible on the Internet.
      - 풀이: URL은 인터넷에서 파일을 찾아가기 위한 고유 주소입니다.
      - 핵심 표현: unique address for a file(파일의 고유 주소)
    - **HTML** — HTML is a language for describing the format of a hypertext document.
      - 풀이: HTML은 하이퍼텍스트 문서의 형식을 표현하는 언어입니다.
      - 핵심 표현: hypertext document(하이퍼텍스트 문서)
    - **XML** — XML has been developed to overcome the shortcomings of HTML and allows the exchange of hierarchically structured documents in various formats.
      - 풀이: XML은 HTML의 단점을 보완하기 위해 개발되었으며, 계층 구조를 가진 문서를 다양한 형식으로 교환할 수 있게 합니다.
      - 핵심 표현: overcome the shortcomings of HTML(HTML의 단점을 극복)
    - **WML** — Based on WAP, WML is a programming language to specify the content and the user interface for small wireless devices such as cell phones, PDAs and two-way pagers.
      - 풀이: WML은 WAP에 기초해 휴대전화, PDA처럼 대역폭이 좁은 소형 무선 기기의 콘텐츠와 화면을 기술하는 언어입니다.
      - 핵심 표현: based on WAP(WAP에 기초), small wireless devices(소형 무선 기기)
    - **웹 브라우저(Web Browser)** — A web browser is an application program that provides a way to look at and interact with all the information on the World Wide Web.
      - 풀이: 웹 브라우저는 월드와이드웹의 모든 정보를 보고 상호작용할 수 있게 해 주는 응용 프로그램입니다.
      - 핵심 표현: look at and interact with the World Wide Web(웹의 정보를 보고 상호작용)
    - **블로그(Blog)** — A blog is the short for Web log.
      - 풀이: 블로그는 Web log(웹에 남기는 기록)를 줄인 말입니다.
      - 핵심 표현: short for Web log(웹 로그의 준말)
    - **POP3** — POP3 is short for Post Office Protocol 3.
      - 풀이: POP3는 Post Office Protocol 3의 약어로, 메일 서버에서 메일을 받아 오는 수신용 프로토콜입니다. 보내는 쪽 프로토콜은 SMTP입니다.
      - 핵심 표현: Post Office Protocol(우체국 프로토콜)
    - **EDI(전자 문서 교환)** — EDI is the transfer of data between different companies using networks, such as the Internet.
      - 풀이: EDI는 인터넷 같은 네트워크를 이용해 서로 다른 회사 사이에 데이터를 전송하는 전자 문서 교환입니다.
      - 핵심 표현: between different companies(서로 다른 회사 사이의) 데이터 전송
    - **VPN(가상 사설망)** — A VPN is a network that is constructed by using public wires to connect nodes.
      - 풀이: VPN은 공공 회선(공중망)을 이용해 노드를 연결하면서도 전용망처럼 쓰는 네트워크입니다.
      - 핵심 표현: constructed by using public wires(공공 회선으로 구축)
    - **DMB** — DMB is a broadcasting and communication fusion service that lets people watch multi-channel TV on portable or vehicle terminals while moving.
      - 풀이: DMB는 이동 중에도 휴대용·차량용 단말기로 다채널 TV를 시청하게 해 주는 방송·통신 융합 서비스입니다.
      - 핵심 표현: watch multi-channel TV while moving(이동 중 다채널 TV 시청)
    - **아스키 코드(ASCII Code)** — ASCII is a 7-bit character code developed by the American National Standards Institute and commonly used for plain-text files.
      - 풀이: 아스키 코드는 미국표준협회(ANSI)가 만든 7비트 문자 코드로, 인터넷과 일상 컴퓨팅의 일반 텍스트 파일에 널리 쓰입니다.
      - 핵심 표현: 7-bit character code(7비트 문자 코드)

    ### 보안·시스템 용어

    - **바이러스(VIRUS)** — A virus is not a biological virus, but a self-replicating program that is designed to harm its host computer's operating system or data and spreads by infecting other programs.
      - 풀이: 컴퓨터 바이러스는 생물학적 바이러스가 아니라, 스스로 복제하며 운영체제와 데이터를 해치고 다른 프로그램을 감염시키며 퍼지는 프로그램입니다.
      - 핵심 표현: self-replicating program(자기 복제 프로그램), destroys various programs(여러 프로그램을 파괴)
    - **방화벽(Firewall)** — The firewall is the primary method for keeping a computer secure from intruders.
      - 풀이: 방화벽은 침입자로부터 컴퓨터를 안전하게 지키는 기본 수단입니다.
      - 핵심 표현: secure from intruders(침입자로부터 안전하게)
    - **처리량(Throughput)** — Throughput is the quantity of work which a computer system can process within a given time.
      - 풀이: 처리량은 컴퓨터 시스템이 주어진 시간 안에 처리할 수 있는 일의 양입니다.
      - 핵심 표현: quantity of work within a given time(주어진 시간 안의 일의 양)
    - **교착상태(Deadlock)** — Deadlock is when every process in the set is waiting for an event that can only be caused by another process in the set.
      - 풀이: 교착상태는 집합 안의 모든 프로세스가 서로 상대방만 일으킬 수 있는 사건을 기다리며 다 함께 멈춰 있는 상태입니다. 좁은 길에서 마주 선 두 자동차가 서로 비켜 주기만 기다리는 모습과 같습니다.
      - 핵심 표현: waiting for an event caused by another process(다른 프로세스가 일으킬 사건을 기다림)

    ### 자주 나오는 영어 표현 사전 — 표현만 봐도 답이 보인다

    | 지문 속 영어 표현 | 우리말 뜻 | 가리키는 용어 |
    | --- | --- | --- |
    | brains of the computer | 컴퓨터의 두뇌 | CPU |
    | can be read but not changed | 읽기만 되고 변경 불가 | ROM |
    | nonvolatile memory | 비휘발성 메모리 | Flash Memory |
    | high-speed storage area within the CPU | CPU 내부 고속 저장 영역 | Register |
    | bridges main memory and the CPU | 주기억장치와 CPU의 다리 | Cache |
    | rules governing transmitting and receiving of data | 데이터 송수신 규칙 | Protocol |
    | quantity of work | 일의 양 | Throughput |
    | waiting for an event | 사건을 기다림 | Deadlock |
    | find and remove errors | 오류를 찾아 제거 | Debugging |
    | last-in, first-out | 후입선출 | Stack |
    | translates into machine language | 기계어로 번역 | Compiler |
    | unique address for a file on the Internet | 인터넷 파일의 고유 주소 | URL |
    | entrance to another network | 다른 네트워크로 가는 입구 | Gateway |
    | short for Web log | 웹 로그의 준말 | Blog |
    | self-replicating program | 자기 복제 프로그램 | Virus |
    | secure from intruders | 침입자로부터 보호 | Firewall |
    | 7-bit character code | 7비트 문자 코드 | ASCII Code |
    | standard language of relational database | 관계형 DB의 표준 언어 | SQL |

    ### 확인 문제 — 영어 지문 읽고 용어 답하기

    원고의 예상 문제를 풀어 쓴 것입니다. 괄호에 들어갈 용어를 영어로 답해 보세요. 답을 가리고 지문의 핵심 표현부터 찾는 것이 요령입니다.

    **문제 1.** ( ) is a special type of EEPROM. It is nonvolatile, energy-efficient memory, which maintains data without any external source of power. It is popular in MP3 players, PDAs, cell phones and digital cameras.

    - 정답: **Flash Memory(플래시 메모리)**
    - 해설: nonvolatile(비휘발성)과 without any external source of power(외부 전원 없이 데이터 유지)가 결정적 힌트입니다. EEPROM의 일종이라는 표현도 플래시 메모리를 가리킵니다.

    **문제 2.** The ( ) is the brains of the computer. Also called the processor, it is made up of the control unit and ALU.

    - 정답: **CPU**
    - 해설: brains(두뇌)라는 단어가 보이면 CPU입니다. control unit(제어장치)과 ALU로 구성된다는 설명도 힌트입니다.

    **문제 3.** ( ) is rules governing transmitting and receiving of data in a telecommunication connection when they communicate.

    - 정답: **Protocol(프로토콜)**
    - 해설: rules(규칙)와 transmitting and receiving(송수신)이 힌트입니다. 통신 규약을 뜻합니다.

    **문제 4.** ( ) is quantity of work which a computer system can process within a given time.

    - 정답: **Throughput(처리량)**
    - 해설: quantity of work(일의 양)와 within a given time(주어진 시간 안에)이 힌트입니다.

    **문제 5.** ( ) is every process in the set is waiting for an event that can only be caused by another process in the set.

    - 정답: **Deadlock(교착상태)**
    - 해설: waiting(기다림)과 another process(다른 프로세스)가 힌트입니다. 서로가 서로를 기다려 아무도 움직이지 못하는 상태입니다.

    **문제 6.** ( ) is the permanent part of a computer's memory. The information stored there can be read but not changed.

    - 정답: **ROM**
    - 해설: permanent(영구적인)와 read but not changed(읽기만 가능)가 힌트입니다.

    **문제 7.** ( ) is a high-level programming language developed by Dennis Ritchie and Brian Kernighan at Bell Labs in the mid 1970s.

    - 정답: **C(C 언어)**
    - 해설: Bell Labs(벨 연구소)와 개발자 이름 Dennis Ritchie(데니스 리치)가 결정적 힌트입니다.

    **문제 8.** This is the initial of Structured Query Language and is the standard language of relational database.

    - 정답: **SQL**
    - 해설: initial(머리글자)이라는 표현과 relational database(관계형 데이터베이스)가 힌트입니다.

    **문제 9.** A ( ) is a program which interferes with the regular operation of the computer or destroys various programs by duplicating itself onto the system or user's programs.

    - 정답: **VIRUS(바이러스)**
    - 해설: destroys various programs(여러 프로그램을 파괴)와 duplicating itself(자기 복제)가 힌트입니다.

    **문제 10.** ( ) is the short for Web log.

    - 정답: **Blog(블로그)**
    - 해설: Web log를 줄인 말이 blog라는, 이름의 유래를 그대로 묻는 문제입니다.

    **문제 11.** A ( ) is a program that generates object programs, converting the commands of a source program into machine language.

    - 정답: **Compiler(컴파일러)**
    - 해설: source program(원시 프로그램)을 machine language(기계어)로 바꿔 object program(목적 프로그램)을 만든다는 표현이 힌트입니다.

    **문제 12.** A ( ) is an application program that provides a way to look at and interact with all the information on the World Wide Web.

    - 정답: **Web Browser(웹 브라우저)**
    - 해설: World Wide Web의 정보를 보고(look at) 상호작용한다(interact)는 표현이 힌트입니다.

    **문제 13.** A ( ) is a language used to define data and their relationships to other data. It is used to create the data structure in a database.

    - 정답: **DDL(Data Definition Language, 데이터 정의어)**
    - 해설: define data(데이터를 정의)와 create the data structure(데이터 구조를 생성)가 힌트입니다. 데이터를 조작하는 DML과 구분하세요.

    **문제 14.** ( ) is a language for describing the format of a hypertext document.

    - 정답: **HTML**
    - 해설: hypertext document(하이퍼텍스트 문서)가 힌트입니다.

    **문제 15.** ( ) is to find and remove errors from a software program.

    - 정답: **Debugging(디버깅)**
    - 해설: find and remove errors(오류를 찾아 제거)가 그대로 정의입니다. 버그(벌레)를 잡는 작업이라고 기억하세요.

    **문제 16.** In a computer's central processing unit, an ( ) is a register in which intermediate arithmetic and logic results are stored.

    - 정답: **Accumulator(누산기)**
    - 해설: intermediate results(중간 결과)를 저장하는 register(레지스터)라는 표현이 힌트입니다.

    **문제 17.** In computing, the ( ) is the central component of most computer operating systems.

    - 정답: **Kernel(커널)**
    - 해설: central component(중심 구성 요소)와 operating systems(운영체제)가 힌트입니다.

    **문제 18.** ( ) is the basic communicational language or protocol of the Internet.

    - 정답: **TCP/IP**
    - 해설: basic protocol of the Internet(인터넷의 기본 프로토콜)이 힌트입니다.

    **문제 19.** A ( ) is a network point that acts as an entrance to another network.

    - 정답: **Gateway(게이트웨이)**
    - 해설: entrance(입구)라는 단어가 결정적입니다. Gate(문)라는 이름 그대로입니다.

    **문제 20.** A memory ( ), or CPU ( ), is a memory bank that bridges main memory and the CPU.

    - 정답: **Cache(캐시)**
    - 해설: bridges(다리를 놓는다)라는 표현이 힌트입니다. 속도 차이를 메우는 중간 창고입니다.

    **문제 21.** ( ) has been developed to overcome the shortcomings of HTML and allows the exchange of hierarchically structured documents in various formats.

    - 정답: **XML**
    - 해설: overcome the shortcomings of HTML(HTML의 단점을 극복)이 결정적 힌트입니다.

    **문제 22.** This is also called last-in, first-out(LIFO).

    - 정답: **STACK(스택)**
    - 해설: LIFO(후입선출)는 스택, FIFO(선입선출)는 큐입니다. 짝으로 외워 두세요.

    **문제 23.** A ( ) is the unique address for a file that is accessible on the Internet.

    - 정답: **URL**
    - 해설: unique address(고유 주소)가 힌트입니다.

    **문제 24.** ( ) is a 7-bit character code developed by the American National Standards Institute and commonly used for plain-text files found on the Internet or in everyday computing.

    - 정답: **ASCII Code(아스키 코드)**
    - 해설: 7-bit character code(7비트 문자 코드)가 결정적 힌트입니다.

    **문제 25.** ( ) is a network that is constructed by using public wires to connect nodes.

    - 정답: **VPN(가상 사설망)**
    - 해설: public wires(공공 회선)로 만든 network라는 표현이 힌트입니다. 공중망을 전용망처럼 쓰는 기술입니다.

    **문제 26.** Short for Post Office Protocol 3.

    - 정답: **POP3**
    - 해설: 메일을 받아 오는 수신용 프로토콜입니다. 보내는 쪽은 SMTP라는 것도 함께 기억하세요.

    **문제 27.** ( ) is the transfer of data between different companies using networks, such as the Internet.

    - 정답: **EDI(전자 문서 교환)**
    - 해설: between different companies(서로 다른 회사 사이의) 데이터 전송이라는 표현이 힌트입니다.

    **문제 28.** A ( ), which is a portmanteau word constructed from modulator and demodulator, is a device that modulates digital information.

    - 정답: **MODEM(모뎀)**
    - 해설: modulator와 demodulator의 합성어(portmanteau word)라는 표현이 결정적입니다.

    **문제 29.** A memory buffer in the print server's RAM that holds the print job until the printer is ready is called a ( ).

    - 정답: **Spooler(스풀러)**
    - 해설: print job(인쇄 작업)을 잠시 담아 두는 buffer(버퍼)라는 표현이 힌트입니다.

    **문제 30.** A ( ) is software that plays the role of an interface between the user and a database.

    - 정답: **DBMS(데이터베이스 관리 시스템)**
    - 해설: between the user and a database(사용자와 데이터베이스 사이)의 interface(인터페이스)라는 표현이 힌트입니다.

    **문제 31.** ( ) is a formula or set of steps for solving a particular problem.

    - 정답: **Algorithm(알고리즘)**
    - 해설: set of steps(단계의 모음)와 solving a problem(문제 해결)이 힌트입니다.

    **문제 32.** The ( ) is the primary method for keeping a computer secure from intruders.

    - 정답: **Firewall(방화벽)**
    - 해설: secure from intruders(침입자로부터 안전하게)가 결정적 힌트입니다.

    ### 실기 답안 포인트

    - 영어 지문 문제는 전체 해석이 아니라 **핵심 표현 한두 개를 찾는 게임**입니다. brains는 CPU, LIFO는 Stack처럼 표현과 용어를 1대1로 짝지어 외우세요.
    - 정답은 영문 표기를 정확히 쓰는 것이 원칙입니다. 철자가 긴 용어(Accumulator, Algorithm)는 손으로 여러 번 써 보세요.
    - 같은 용어가 다른 문장으로 반복 출제됩니다(VIRUS, Protocol, Throughput, Deadlock 등). 정의의 뼈대를 익히면 문장이 바뀌어도 답할 수 있습니다.`,
    },
  ],

  'algorithm': [
    {
      id: 'ch1',
      name: '순서도',
      topics: [
        '순서도 기호',
        '알고리즘 표현 방법',
        '기본 제어 구조',
        '순서도 작성법',
        '추적표 작성',
      ],
      content: `## 순서도 (Flowchart)

### 순서도 기호
- **타원(단말 기호)**: 시작(Start)과 끝(End)을 나타냄
- **직사각형(처리 기호)**: 연산, 대입 등 처리 과정을 나타냄 (예: A ← A + 1)
- **마름모(판단 기호)**: 조건에 따른 분기를 나타냄 (예: A > 0? → Yes/No)
- **평행사변형(입출력 기호)**: 데이터의 입력 또는 출력을 나타냄
- **원(연결 기호)**: 순서도의 흐름이 다른 곳으로 이어질 때 연결점을 나타냄
- **화살표(흐름선)**: 처리의 흐름 방향을 나타냄
- **사다리꼴(화면 표시)**: 모니터 등에 결과를 표시

### 알고리즘 표현 방법
- **자연어**: 일상 언어로 절차를 서술, 이해하기 쉬우나 모호함이 있을 수 있음
- **순서도(Flowchart)**: 기호를 사용하여 알고리즘을 시각적으로 표현, 흐름을 한눈에 파악 가능
- **의사코드(Pseudocode)**: 프로그래밍 언어와 유사하지만 특정 언어에 종속되지 않는 표현 방식

### 기본 제어 구조
- **순차 구조(Sequence)**: 명령을 위에서 아래로 순서대로 실행
  - 예: A ← 1, B ← 2, C ← A + B
- **선택 구조(Selection)**: 조건에 따라 서로 다른 처리를 수행
  - **단일 선택**: IF 조건 THEN 처리
  - **이중 선택**: IF 조건 THEN 처리1 ELSE 처리2
- **반복 구조(Iteration)**: 조건이 만족되는 동안 같은 처리를 반복
  - **전검사 반복**: 조건을 먼저 검사한 후 반복 (WHILE문)
  - **후검사 반복**: 처리를 먼저 실행한 후 조건 검사 (DO~WHILE문)

### 순서도 작성 예시 - 1부터 N까지의 합
1. 시작
2. N 입력
3. S ← 0, I ← 1
4. I ≤ N 인가? → No이면 6단계로
5. S ← S + I, I ← I + 1 → 4단계로 돌아감
6. S 출력
7. 끝

### 추적표 작성
- 알고리즘의 각 단계에서 변수 값의 변화를 표로 기록하는 것
- 순서도가 올바르게 동작하는지 검증하는 데 사용
- 예: N=3일 때 1~N 합계 추적표

| 단계 | I | S | 조건(I≤N) |
|------|---|---|-----------|
| 초기 | 1 | 0 | - |
| 1회  | 2 | 1 | 참 |
| 2회  | 3 | 3 | 참 |
| 3회  | 4 | 6 | 거짓 |
| 결과: S = 6 |`,
    },
    {
      id: 'ch2',
      name: '정렬과 검색',
      topics: [
        '버블정렬',
        '선택정렬',
        '삽입정렬',
        '퀵정렬',
        '합병정렬',
        '순차검색',
        '이진검색',
        '해싱',
        '시간복잡도',
      ],
      content: `## 정렬과 검색

### 버블정렬 (Bubble Sort)
- 인접한 두 원소를 비교하여 큰 값을 뒤로 보내는 과정을 반복
- 한 회전마다 가장 큰 값이 맨 뒤로 확정됨
- 시간복잡도: 평균 **O(n²)**, 최악 **O(n²)**
- 가장 구현이 간단하지만 효율이 낮음

### 선택정렬 (Selection Sort)
- 전체 데이터에서 최솟값을 찾아 맨 앞 원소와 교환하는 과정을 반복
- 1회전: 전체에서 최솟값 → 1번 위치, 2회전: 나머지에서 최솟값 → 2번 위치
- 시간복잡도: 평균 **O(n²)**, 최악 **O(n²)**
- 교환 횟수는 적지만 비교 횟수가 많음

### 삽입정렬 (Insertion Sort)
- 정렬된 부분에 새로운 원소를 올바른 위치에 삽입하는 방식
- 두 번째 원소부터 시작하여 앞의 정렬된 부분과 비교하며 삽입
- 시간복잡도: 평균 **O(n²)**, 최선(이미 정렬된 경우) **O(n)**
- 데이터가 거의 정렬되어 있을 때 효율적

### 퀵정렬 (Quick Sort)
- **피봇(Pivot)**을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 분할하여 재귀적으로 정렬
- **분할 정복(Divide and Conquer)** 전략 사용
- 시간복잡도: 평균 **O(n log n)**, 최악(이미 정렬된 경우) **O(n²)**
- 실제로 가장 빠른 정렬 중 하나

### 합병정렬 (Merge Sort)
- 배열을 반으로 나누고, 각각 정렬한 뒤 합병하는 방식
- 분할 정복 전략 사용, 항상 균등하게 분할
- 시간복잡도: 평균 **O(n log n)**, 최악 **O(n log n)**으로 안정적
- 추가 메모리 공간이 필요함

### 순차검색 (Sequential Search)
- 처음부터 끝까지 하나씩 비교하며 원하는 값을 찾는 방법
- 정렬되지 않은 데이터에서도 사용 가능
- 시간복잡도: 평균 **O(n)**, 최악 **O(n)**

### 이진검색 (Binary Search)
- **반드시 정렬된 데이터**에서만 사용 가능
- 중간 값과 비교하여 검색 범위를 절반씩 줄여나가는 방법
- 시간복잡도: **O(log n)**
- 과정: 중간값 = (시작 + 끝) / 2, 찾는 값이 중간값보다 작으면 왼쪽, 크면 오른쪽 탐색

### 해싱 (Hashing)
- **해시 함수(Hash Function)**를 사용하여 키 값으로부터 저장 주소를 직접 계산
- 시간복잡도: 이상적인 경우 **O(1)**
- **충돌(Collision)**: 서로 다른 키가 같은 주소를 생성하는 경우
- 충돌 해결 방법: **체이닝(Chaining)**, **개방 주소법(Open Addressing)**

### 시간복잡도 요약
| 알고리즘 | 평균 | 최악 |
|----------|------|------|
| 버블정렬 | O(n²) | O(n²) |
| 선택정렬 | O(n²) | O(n²) |
| 삽입정렬 | O(n²) | O(n²) |
| 퀵정렬 | O(n log n) | O(n²) |
| 합병정렬 | O(n log n) | O(n log n) |
| 순차검색 | O(n) | O(n) |
| 이진검색 | O(log n) | O(log n) |`,
    },
    {
      id: 'ch3',
      name: '재귀와 반복',
      topics: [
        '재귀 호출 원리',
        '팩토리얼',
        '피보나치 수열',
        '하노이의 탑',
        '최대공약수 유클리드',
        '반복문 while/for',
        '재귀 vs 반복 비교',
      ],
      content: `## 재귀와 반복

### 재귀 호출(Recursion)의 원리
- 함수가 자기 자신을 다시 호출하는 것
- 반드시 **종료 조건(Base Case)**이 있어야 무한 반복을 방지할 수 있음
- 호출될 때마다 **스택(Stack)**에 복귀 주소와 지역변수가 저장됨
- 종료 조건에 도달하면 스택에서 하나씩 꺼내며 역순으로 처리

### 팩토리얼 (Factorial)
- n! = n × (n-1) × (n-2) × ... × 1, 단 0! = 1
- **재귀 정의**: factorial(n) = n × factorial(n-1), factorial(0) = 1
- 예: 5! = 5 × 4 × 3 × 2 × 1 = **120**
- 의사코드:
  - factorial(n): if n ≤ 1 then return 1, else return n × factorial(n-1)

### 피보나치 수열 (Fibonacci)
- 앞의 두 수를 더해 다음 수를 만드는 수열: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
- **재귀 정의**: fib(0)=0, fib(1)=1, fib(n) = fib(n-1) + fib(n-2) (n≥2)
- 재귀로 구현 시 같은 값을 여러 번 중복 계산하여 비효율적
- 반복문이나 **메모이제이션(Memoization)**으로 효율 개선 가능

### 하노이의 탑 (Tower of Hanoi)
- 3개의 기둥과 n개의 원판이 있을 때, 모든 원판을 한 기둥에서 다른 기둥으로 옮기는 문제
- 규칙: 한 번에 한 개의 원판만 이동, 큰 원판이 작은 원판 위에 올 수 없음
- 원판 n개를 옮기는 데 필요한 최소 이동 횟수: **2ⁿ - 1**
  - 예: 원판 3개 → 2³-1 = **7회**, 원판 4개 → 2⁴-1 = **15회**
- 재귀적 풀이:
  1. n-1개의 원판을 보조 기둥으로 이동
  2. 가장 큰 원판을 목적 기둥으로 이동
  3. n-1개의 원판을 보조 기둥에서 목적 기둥으로 이동

### 최대공약수 - 유클리드 호제법
- 두 수의 **최대공약수(GCD)**를 구하는 알고리즘
- **원리**: GCD(a, b) = GCD(b, a mod b), b가 0이면 a가 최대공약수
- 예: GCD(48, 18) → GCD(18, 12) → GCD(12, 6) → GCD(6, 0) → **GCD = 6**
- 의사코드:
  - gcd(a, b): if b = 0 then return a, else return gcd(b, a mod b)

### 반복문 (while / for)
- **while문**: 조건이 참인 동안 반복 실행, 조건을 먼저 검사
  - while(조건) { 처리 }
- **for문**: 초기값, 조건, 증감식을 한 줄에 지정하여 반복
  - for(초기값; 조건; 증감식) { 처리 }
- **do-while문**: 처리를 먼저 실행한 후 조건 검사, 최소 1회 실행 보장

### 재귀 vs 반복 비교
| 구분 | 재귀 | 반복 |
|------|------|------|
| 코드 | 간결하고 직관적 | 상대적으로 복잡할 수 있음 |
| 메모리 | 스택 사용으로 메모리 소비 큼 | 메모리 효율적 |
| 속도 | 함수 호출 오버헤드로 느림 | 상대적으로 빠름 |
| 종료 조건 | 기저 조건(Base Case) 필요 | 반복 조건 필요 |
| 활용 | 하노이의 탑, 트리 순회 등 | 단순 반복 작업, 합계 계산 등 |
- 재귀는 문제를 잘게 나누어 풀 때 유리하고, 반복은 성능이 중요할 때 유리함`,
    },
    {
      id: 'ch4',
      name: '순서도 공식 패턴',
      topics: [
        '합계 누적',
        '개수 세기',
        '평균 계산',
        '짝수·홀수와 배수 판별',
        '최댓값·최솟값',
        '순위 산출',
        '부호 교대',
        '자릿수 분해',
        '스왑(교환)',
        '배열 최댓값·최솟값 추적',
        '2차원 배열 삼각형 채우기',
        '모래시계 패턴',
      ],
      content: `## 순서도 공식 패턴

실기 알고리즘 문제의 빈칸은 대부분 아래 공식 패턴 중 하나입니다. "언제 쓰는지 → 공식 → 추적 예시" 순서로 패턴을 통째로 익혀두면 빈칸이 보이는 순간 답이 떠오릅니다.

### 1. 합계 누적
- **언제**: 입력되는 값이나 1~N의 수를 모두 더할 때 (가장 자주 나오는 빈칸)
- **공식**: S ← S + A (합계 변수 S는 반드시 **0으로 초기화**)
- 추적 예시: A에 3, 5, 7이 차례로 입력될 때

| 회차 | A | S |
|------|---|---|
| 초기 | - | 0 |
| 1회 | 3 | 3 |
| 2회 | 5 | 8 |
| 3회 | 7 | 15 |

### 2. 개수 세기 (카운트)
- **언제**: 조건을 만족하는 데이터가 몇 개인지 셀 때
- **공식**: C ← C + 1 (C는 0으로 초기화, 판단 기호의 **Yes 쪽**에만 위치)
- 추적 예시: 5, 12, 8, 20 중 10 이상인 수의 개수

| 입력 | 10 이상? | C |
|------|----------|---|
| 5 | 아니오 | 0 |
| 12 | 예 | 1 |
| 8 | 아니오 | 1 |
| 20 | 예 | 2 |

### 3. 평균 계산
- **언제**: 여러 값의 평균을 구할 때, 합계와 개수 패턴을 먼저 완성한 뒤 사용
- **공식**: AVG ← S ÷ C (**반복이 모두 끝난 후** 딱 1회만 실행)
- **주의(자주 나오는 함정)**: 평균 계산을 반복문 안에 넣으면 매 회전마다 잘못된 값이 계산됨
- 추적 예시: 위 합계 예시에서 S = 15, C = 3이면 AVG = 15 ÷ 3 = **5**

### 4. 짝수·홀수 / 배수 판별
- **언제**: "짝수만 더하라", "3의 배수 개수를 세라"처럼 특정 수만 골라낼 때
- **공식**: A MOD 2 = 0이면 **짝수**, A MOD 2 = 1이면 **홀수**, A MOD N = 0이면 **N의 배수**
- 추적 예시

| A | 계산 | 판별 |
|---|------|------|
| 6 | 6 MOD 2 = 0 | 짝수 |
| 7 | 7 MOD 2 = 1 | 홀수 |
| 15 | 15 MOD 3 = 0 | 3의 배수 |

### 5. 최댓값·최솟값
- **언제**: 여러 값 중 가장 큰 값 또는 가장 작은 값을 찾을 때
- **공식**: 최댓값은 IF A > MAX THEN MAX ← A, 최솟값은 IF A < MIN THEN MIN ← A
- **초기값 설정 요령** (빈칸 단골)
  - 방법 1: **첫 번째 값을 그대로 대입** (MAX ← 첫 값) — 가장 안전한 방법
  - 방법 2: **극단값 대입** — 최댓값 찾기는 아주 작은 값(예: -999), 최솟값 찾기는 아주 큰 값(예: 999)으로 시작
  - 함정: 최댓값 찾기에서 MAX를 0으로 초기화하면 모든 입력이 음수일 때 틀린 답이 나옴
- 추적 예시: 4, 9, 2 입력 시 최댓값

| 입력 A | A > MAX? | MAX |
|--------|----------|-----|
| 초기 | - | 4 (첫 값) |
| 9 | 예 | 9 |
| 2 | 아니오 | 9 |

### 6. 순위 산출
- **언제**: 점수들 사이에서 어떤 값이 몇 등인지 구할 때
- **공식**: 순위 = **자기보다 큰 값의 개수 + 1** → RANK를 1로 초기화하고, 비교마다 IF B > A THEN RANK ← RANK + 1
- 동점자가 있어도 같은 순위가 나오는 방식이라 시험에 자주 출제됨
- 추적 예시: 점수 70, 90, 80 중에서 70의 순위

| 비교 대상 | 70보다 큰가? | RANK |
|-----------|--------------|------|
| 초기 | - | 1 |
| 90 | 예 | 2 |
| 80 | 예 | 3 |
- 결과: 70은 **3위**

### 7. 부호 교대
- **언제**: 1 - 2 + 3 - 4 + ... 처럼 부호가 번갈아 바뀌는 수열의 합을 구할 때
- **공식**: K ← K × (-1) — 곱할 때마다 K가 +1, -1을 번갈아 가짐. 합은 S ← S + I × K
- K의 초기값이 1이면 +부터 시작, -1이면 -부터 시작 (초기값이 빈칸으로 자주 출제)
- 추적 예시: 1 - 2 + 3 (K 초기값 1, 매 회전 끝에 K ← K × (-1))

| I | K | S |
|---|---|---|
| 1 | 1 | 1 |
| 2 | -1 | -1 |
| 3 | 1 | 2 |
- 결과: 1 - 2 + 3 = **2**

### 8. 자릿수 분해
- **언제**: 1234의 각 자리 숫자를 분리할 때 (자릿수 합, 숫자 거꾸로 뒤집기)
- **공식**: 마지막 자리 숫자 = **N MOD 10**, 마지막 자리 제거 = **N ← N ÷ 10 (몫만 취함)**
- 반복 조건: N > 0인 동안 반복, N이 0이 되면 종료
- 추적 예시: N = 123의 자릿수 합

| 회차 | N | N MOD 10 | S |
|------|-----|----------|---|
| 1회 | 123 | 3 | 3 |
| 2회 | 12 | 2 | 5 |
| 3회 | 1 | 1 | 6 |
| 종료 | 0 | - | 6 |
- 결과: 1 + 2 + 3 = **6**

### 9. 스왑 (두 값 교환)
- **언제**: 정렬 과정에서 두 변수의 값을 서로 바꿀 때
- **공식(임시변수 3단계)**: T ← A → A ← B → B ← T
- **함정**: T 없이 A ← B, B ← A로 쓰면 A의 원래 값이 사라져 두 변수가 같은 값이 됨
- 추적 예시: A = 3, B = 7 교환

| 단계 | A | B | T |
|------|---|---|---|
| 초기 | 3 | 7 | - |
| T ← A | 3 | 7 | 3 |
| A ← B | 7 | 7 | 3 |
| B ← T | 7 | 3 | 3 |
- 결과: A = 7, B = 3으로 교환 완료

### 10. 배열 최댓값·최솟값 동시 찾기 (기출 최다 출제)
- **언제**: 배열의 값을 하나씩 읽으며 최댓값·최솟값·합계·평균을 한 번에 구할 때
- 실기 기출에서 가장 여러 번 반복 출제된 유형입니다 (2005년 이후 다수 회차).
- **공식**: 준비 기호에서 MAX ← -999, MIN ← 999로 초기화합니다.
- 매 회전마다 IF A(I) > MAX THEN MAX ← A(I), IF A(I) < MIN THEN MIN ← A(I), S ← S + A(I)를 수행합니다.
- -999는 문제 해결을 위한 **가상의 가장 작은 값**, 999는 **가상의 가장 큰 값**입니다.
- 어떤 값이 들어와도 첫 비교에서 반드시 갱신되도록 극단값을 미리 넣어 두는 요령입니다.
- 추적 예시: 배열에 30, 24, 71, 41, 43, 86, 70이 기억되어 있을 때

| I | A(I) | MAX | MIN | S |
|---|------|-----|-----|---|
| 1 | 30 | 30 | 30 | 30 |
| 2 | 24 | 30 | 24 | 54 |
| 3 | 71 | 71 | 24 | 125 |
| 4 | 41 | 71 | 24 | 166 |
| 5 | 43 | 71 | 24 | 209 |
| 6 | 86 | 86 | 24 | 295 |
| 7 | 70 | 86 | 24 | 365 |
- 결과: 최댓값 86, 최솟값 24, 합계 365, 평균은 반복이 끝난 뒤 AVE ← S ÷ 7로 계산
- 빈칸 단골: 준비 기호의 -999와 999, 판단 기호의 부등호 방향, 반복이 끝난 뒤의 평균 수식

### 11. 2차원 배열 채우기 - 직각삼각형·역삼각형
- **언제**: A(행, 열) 형태의 2차원 배열에 삼각형 모양으로 값을 채울 때
- **공식(직각삼각형)**: 바깥 반복 P는 1에서 5까지, 안쪽 반복 Q는 1에서 **P까지** 돌립니다.
- 행이 한 칸 내려갈 때마다 채우는 칸이 1개씩 늘어나 계단 모양이 됩니다.
- **공식(역삼각형)**: 안쪽 반복의 범위를 바꿔 Q를 1에서 **6 - P까지** 돌리면 행이 내려갈수록 칸이 줄어듭니다.
- 추적 예시: 5행 5열 배열에 A(P, Q) ← Q를 대입하는 직각삼각형

| P | Q의 범위 | 채워지는 값 |
|---|----------|-------------|
| 1 | 1에서 1 | 1 |
| 2 | 1에서 2 | 1 2 |
| 3 | 1에서 3 | 1 2 3 |
| 4 | 1에서 4 | 1 2 3 4 |
| 5 | 1에서 5 | 1 2 3 4 5 |
- 빈칸 단골: 새 행이 시작될 때의 Q ← 1 초기화, 안쪽 반복 종료 판단(Q > P인가), 바깥 반복 종료 판단(P > 5인가)
- 변형 출제: 대입 값이 Q + 1로 바뀌어 2, 2 3, 2 3 4처럼 채우는 문제도 나왔습니다 (2008년 정기).

### 12. 2차원 배열 채우기 - 모래시계 (2010·2012 실기 기출)
- **언제**: 5행 5열 배열을 모래시계 모양으로 채울 때
- **핵심 변수**: P(행), L(열의 시작), R(열의 끝)
- 위쪽 절반은 행이 내려갈 때마다 L ← L + 1, R ← R - 1로 폭을 좁힙니다.
- 가운데 행은 L = R = 3이 되어 한 칸만 채웁니다.
- 아래쪽 절반은 L ← L - 1, R ← R + 1로 폭을 다시 넓힙니다.
- 추적 예시: 5행 5열 모래시계

| P | L | R | 채워지는 칸 수 |
|---|---|---|----------------|
| 1 | 1 | 5 | 5 |
| 2 | 2 | 4 | 3 |
| 3 | 3 | 3 | 1 |
| 4 | 2 | 4 | 3 |
| 5 | 1 | 5 | 5 |
- 칸 수의 합이 5 + 3 + 1 + 3 + 5 = 17이므로, 기출문제에서 정렬된 값 17개를 배치하라고 한 이유가 여기에 있습니다.
- **다이아몬드 모양**은 반대입니다. L과 R을 3에서 시작해 위쪽 절반에서 L ← L - 1, R ← R + 1로 넓혔다가 아래쪽 절반에서 다시 좁힙니다.
- **달팽이집 모양**은 바깥 테두리부터 오른쪽, 아래, 왼쪽, 위 순서로 돌며 채웁니다.
- 방향이 꺾일 때마다 반복 횟수 K를 1씩 줄이고, 부호 변수 S ← S × (-1)로 증가·감소 방향을 뒤집는 것이 핵심입니다.`,
    },
    {
      id: 'ch5',
      name: '알고리즘 실기 합격 전략',
      topics: [
        '출제 형태와 배점',
        '풀이 5단계 전략',
        '변수 5종 구분법',
        '빈칸 채우기 우선순위',
        '디버깅 검증',
        '시험 수학 용어',
        '부등호 읽기와 MOD 공식',
      ],
      content: `## 알고리즘 실기 합격 전략

### 출제 형태와 배점
- 알고리즘은 실기시험에서 **5문제, 각 10점, 총 50점**으로 출제됩니다.
- 100점 만점의 절반이 알고리즘이므로, 알고리즘을 잡으면 합격이 보입니다.
- 문제는 순서도의 일부를 괄호(빈칸)로 비워 두고, 40개의 답항보기 중에서 알맞은 것을 골라 채우는 형태입니다.
- 시험에는 대략 **15가지 유형**의 알고리즘이 반복해서 출제됩니다.
- 출제되었던 괄호 답만 외우지 말고 문제 자체를 이해해야 합니다.
- 숫자나 변수 이름이 바뀌어도 풀 수 있는 힘이 진짜 실력이고, 그 힘이 합격을 만듭니다.

### 1단계. 문제의 종류와 특성부터 파악
- 문제 설명을 읽고 이 문제가 어떤 종류의 알고리즘인지 먼저 분류합니다.
- 수학 알고리즘인지(합계, 배수, 소수), 수열 알고리즘인지(피보나치, 등차수열), 배열 알고리즘인지(최댓값, 정렬, 2차원 배열)를 분명히 합니다.
- 종류를 알면 그 유형의 공식 패턴이 함께 떠오릅니다.

### 2단계. 변수를 다섯 가지 역할로 구분
- 순서도에 등장하는 변수를 역할별로 나누어 봅니다.
- 요리를 시작하기 전에 재료를 용도별로 늘어놓는 것과 같습니다.
- **입력용 변수**: 어떤 값을 받아들이는가
- **출력용 변수**: 마지막에 무엇을 내보내는가
- **반복용 변수**: 몇 번 돌리는지 세는 카운터는 무엇인가
- **임시 변수**: 중간 계산을 잠깐 담아 두는 그릇은 무엇인가
- **핵심 변수**: 문제의 답을 만들어 내는 주인공은 무엇인가

### 3단계. 순서도의 전체 구조 파악
- **반복 구조**를 찾습니다. 화살표가 위로 되돌아가는 곳이 반복입니다.
- **출력 기호**를 찾습니다. 출력 기호 안에 적힌 변수가 어디에서 값을 받는지 거슬러 올라가 봅니다.
- **판단 기호**를 찾습니다. 조건 안에 반복용 변수가 들어 있으면 그 판단은 반복을 계속할지 끝낼지 정하는 자리입니다.

### 4단계. 빈칸 채우기 우선순위
- 순서도를 분석할 때는 쉬운 것부터 확정하며 퍼즐을 맞춥니다.
- 첫째, 빈칸이 없는 기호부터 읽어 전체 흐름을 확정합니다.
- 둘째, 출력 기호를 봅니다.
- 셋째, 출력 변수에 값이 대입되는 처리 기호를 봅니다.
- 넷째, 준비 기호(초기치)와 입력 기호를 봅니다.

### 5단계. 디버깅으로 검증
- 빈칸을 다 채웠으면 작은 값을 넣어 순서도를 손으로 한 바퀴 돌려 봅니다.
- 이 확인 과정을 **디버깅(Debugging)**이라고 합니다.
- 추적표를 그려 변수 값의 변화를 기록하고, 출력 값이 문제에서 원하는 값과 같으면 검증 성공입니다.
- 알고리즘 문제를 반복해서 많이 풀어 보는 것이 합격으로 가는 지름길입니다.

### 시험에 자주 나오는 수학 용어
| 용어 | 뜻 | 예 |
|------|----|----|
| 자연수 | 1부터 시작해 한없이 이어지는 수 | 1, 2, 3, 4 |
| 정수 | 0과 음수를 포함, 분수와 소수점은 제외 | -2, 0, 7 |
| 약수 | 어떤 수를 나누어떨어지게 하는 수 | 6의 약수는 1, 2, 3, 6 |
| 배수 | 어떤 수를 1배, 2배, 3배한 수 | 4의 배수는 4, 8, 12 |
| 소수 | 약수가 1과 자신뿐인 수 | 2, 3, 5, 7, 11 |
| 팩토리얼 | 1부터 그 수까지 모두 곱한 값 | 5!은 1×2×3×4×5 = 120 |
| 공약수 | 두 수에 공통인 약수 | 4와 6의 공약수는 1, 2 |
| 최대공약수 | 공약수 중 가장 큰 수 | 4와 6은 2 |
| 공배수 | 두 수에 공통인 배수 | 4와 6의 공배수는 12, 24 |
| 최소공배수 | 공배수 중 가장 작은 수 | 4와 6은 12 |
| 서로소 | 최대공약수가 1인 두 수 | 4와 9 |
| 절댓값 | 부호를 뗀 수 | -2의 절댓값은 2 |
- 0!은 1로 약속되어 있습니다.
- A!은 (A-1)! × A와 같습니다. 팩토리얼 합계 문제를 빠르게 푸는 핵심 성질입니다.
- 최대공약수 G와 최소공배수 L 사이에는 **L × G = A × B**의 관계가 있습니다.
- 예를 들어 4와 6은 G = 2, L = 12이고 2 × 12 = 4 × 6 = 24로 맞아떨어집니다.

### 부등호를 우리말로 읽는 법
| 우리말 표현 | 기호 |
|-------------|------|
| A는 B 초과 (크다) | A > B |
| A는 B 미만 (작다) | A < B |
| A는 B 이상 (크거나 같다) | A >= B |
| A는 B 이하 (작거나 같다) | A <= B |
| A는 B보다 작지 않다 | A >= B |
| A는 B보다 크지 않다 | A <= B |
- "A 초과 B 미만"은 A와 B를 모두 포함하지 않는 범위입니다.
- "A부터 B까지"와 "A 이상 B 이하"는 A와 B를 모두 포함하는 범위입니다.
- "작지 않다"처럼 부정으로 표현된 조건은 반대로 뒤집어 읽어야 함정에 빠지지 않습니다.

### MOD(나머지) 공식 모음
- MOD(A, B)는 A를 B로 나눈 나머지입니다. 예를 들어 MOD(10, 4) = 2입니다.
- 어떤 수를 B로 나눈 나머지는 0부터 B - 1까지 중 하나입니다.
- A MOD 2 = 0이면 **짝수**, A MOD 2 = 1이면 **홀수**입니다.
- MOD(A, B) = 0이면 A는 B의 배수이고, B는 A의 약수입니다.
- A가 3의 배수이면서 5의 배수인지 한 번에 확인하려면 MOD(A, 3) + MOD(A, 5) = 0인지 보면 됩니다.
- 나머지에는 음수가 없어서, 두 나머지의 합이 0이면 둘 다 0일 수밖에 없기 때문입니다.`,
    },
    {
      id: 'ch6',
      name: '순서도 기호와 반복 구조 기초',
      topics: [
        '순서도 표준 기호',
        '직선형·분기형·순환형',
        '선조건과 선처리 반복',
        '변수와 대입문',
        '초기치 유형별 암기표',
        '1차원·2차원 배열',
      ],
      content: `## 순서도 기호와 반복 구조 기초

### 알고리즘과 순서도
- **알고리즘**은 논리정연하게 정의된 규칙들의 집합, 곧 유한 번의 단계 안에 문제를 풀어내는 절차입니다.
- 컴퓨터 알고리즘은 "문제 분석 → 알고리즘 설계 → 순서도 작성 → 정확성 검증 → 효율성 분석"의 순서로 만들어집니다.
- **순서도(Flow Chart)**는 알고리즘을 표준화된 기호와 도형으로 그림처럼 표현한 것입니다.
- 요리 레시피를 그림 순서표로 바꾼 것이라고 생각하면 쉽습니다.
- 순서도의 표준 기호는 1962년 국제표준화기구(ISO)에서 정의했습니다.

### 순서도 표준 기호
| 기호 이름 | 모양 | 역할 |
|-----------|------|------|
| 단말 | 타원 | 순서도의 시작과 끝 |
| 준비 | 육각형 | 변수 선언과 초기치 설정 |
| 처리 | 직사각형 | 계산과 대입 등 처리할 작업 |
| 입출력 | 평행사변형 | 데이터의 입력 또는 결과의 출력 |
| 판단 | 마름모 | 조건에 따라 흐름선을 선택 |
| 흐름선 | 화살표 | 작업이 흘러가는 방향 |
| 연결자 | 작은 원 | 떨어져 있는 흐름을 이어 줌 |
| 수동입력 | 아랫변 기운 사각형 | 키보드를 통한 입력 |
| 서브루틴 | 양옆 겹선 사각형 | 미리 정의해 둔 부프로그램 호출 |
| 화면표시 | 볼록한 화면 모양 | 모니터로 결과 출력 |
| 프린트 | 물결 밑변 사각형 | 프린터로 지면에 출력 |
- 빈칸 문제에서 기호의 모양은 "이 자리에 어떤 종류의 문장이 오는가"를 알려 주는 힌트입니다.
- 준비 기호 안의 빈칸이라면 초기치, 마름모 안의 빈칸이라면 조건식이 답입니다.

### 순서도의 세 가지 기본 유형
- **직선형**: 위에서 아래로 한 번만 흘러가는 구조입니다. 예를 들어 직사각형의 면적을 구해 출력하는 순서도가 있습니다.
- **분기형**: 판단 기호에서 갈림길이 생기는 구조입니다. 예를 들어 60점 이상이면 합격, 미만이면 불합격을 출력합니다.
- **순환형**: 같은 처리를 여러 번 반복하는 구조입니다. 예를 들어 1에서 10까지의 자연수를 차례로 출력합니다.

### 선조건 후처리와 선처리 후조건
- **선조건 후처리**: 조건을 먼저 검사하고, 통과하면 처리합니다. 조건이 처음부터 거짓이면 한 번도 실행되지 않습니다.
- **선처리 후조건**: 처리를 먼저 하고, 조건을 나중에 검사합니다. 최소 1회는 반드시 실행됩니다.
- 같은 문제라도 어느 구조를 쓰는지에 따라 초기치와 판단 조건이 달라집니다.
- 빈칸 문제의 가장 큰 함정이 바로 이 차이입니다.

### 1에서 10까지 출력 - 초기치가 달라지는 이유
- 출력이 I ← I + 1 **뒤**에 있으면 I의 초기치는 0입니다. 먼저 1을 더한 뒤 출력하므로 0에서 시작해야 1부터 출력됩니다.
- 출력이 I ← I + 1 **앞**에 있으면 I의 초기치는 1입니다.
- 판단의 부등호도 갈립니다. "10을 이미 출력했는가, 아직인가"에 따라 I < 10과 I <= 10이 나뉩니다.
- 요령: 첫 회전과 마지막 회전을 손으로 직접 돌려 보면 초기치와 부등호가 저절로 정해집니다.

### 변수와 대입문
- **변수**는 값을 담는 그릇이고, 컴퓨터에서는 주기억장치에 확보된 저장 공간의 번지입니다.
- **상수**는 항상 같은 수, 변하지 않는 값입니다.
- **대입문**은 값을 그릇에 담는 문장입니다. A = 100은 "A라는 그릇에 100을 담아라"는 뜻입니다.
- C = A + B는 A의 값과 B의 값을 꺼내 더한 뒤 그 결과를 C에 담습니다.
- I = I + 1은 수학의 등식이 아니라 "I의 현재 값에 1을 더해 다시 I에 담아라"는 명령입니다. 반복 구조의 심장입니다.

### 조건문과 연산자
- **조건문**은 참(True)과 거짓(False)을 구분해 흐름을 나누는 문장입니다.
- **관계연산자**: 초과(>), 미만(<), 이상(>=), 이하(<=), 같다(=), 다르다(<> 또는 !=)
- **논리연산자**: AND(둘 다 참일 때 참), OR(하나라도 참이면 참), NOT(참과 거짓을 뒤집음)

### 변수의 초기치 - 유형별 암기표
| 용도 | 초기치 | 이유 |
|------|--------|------|
| 합계 S | 0 | 0에 더해야 원래 값이 그대로 쌓임 |
| 개수 C | 0 | 아직 센 것이 없음 |
| 곱셈·팩토리얼 F | 1 | 0을 곱하면 결과가 통째로 0이 됨 |
| 최댓값 MAX | -999 또는 첫 값 | 어떤 값이 와도 첫 비교에서 갱신되도록 |
| 최솟값 MIN | 999 또는 첫 값 | 어떤 값이 와도 첫 비교에서 갱신되도록 |
| 부호 스위치 S | 1 또는 -1 | 첫 항의 부호에 맞추어 결정 |
- 같은 문제라도 처리 순서가 바뀌면 초기치가 달라질 수 있습니다.
- 초기치 빈칸은 "이 변수가 처음 사용되는 순간"을 찾아 거꾸로 계산하면 풀립니다.

### 배열(Array)
- **배열**은 같은 자료형의 값들을 연속된 기억 공간에 줄지어 저장한 것입니다.
- 번호표가 붙은 사물함이 한 줄로 늘어서 있는 모습을 떠올리면 됩니다.
- 배열은 "배열명(첨자)"로 표기하고, 특별한 말이 없으면 첨자는 **1부터** 시작합니다.
- 1차원 배열 A(5)는 A(1), A(2), A(3), A(4), A(5)의 5칸입니다.
- 2차원 배열 C(3, 5)는 (행, 열) 순서로 3행 5열, 모두 15칸입니다.
- 배열 A(5)에 5, 10, 7, 9, 30이 저장되어 있을 때 첨자 I를 1에서 5까지 증가시키며 A(I)를 출력하면 저장된 값이 차례대로 출력됩니다.
- 첨자 변수(인덱스 변수)가 반복용 변수를 겸하는 것이 배열 알고리즘의 기본 형태입니다.`,
    },
    {
      id: 'ch7',
      name: '합계·수열 알고리즘 패턴',
      topics: [
        '카운트·누적·산술평균',
        '홀수합·짝수합',
        '분수의 합계',
        '부호 교대 3가지 방법',
        '부분합의 누적',
        '팩토리얼의 합',
        '등차·등비수열',
        '피보나치수열',
        '곱의 합계',
      ],
      content: `## 합계·수열 알고리즘 패턴

실기 알고리즘의 절반은 "무엇을 어떤 규칙으로 더하는가"의 문제입니다.
이 장의 패턴을 추적표와 함께 통째로 익혀 두면 수열 문제의 빈칸이 공식처럼 풀립니다.

### 카운트·누적·산술평균
- 대표 문제: 100명의 점수 중 80점 이상인 학생의 수(Cnt), 총점(Tot), 평균(Ave)을 구하라.
- 반복 안에서는 A(I) >= 80이면 Cnt ← Cnt + 1과 Tot ← Tot + A(I)를 수행합니다.
- 반복이 모두 끝난 뒤에 Ave ← Int(Tot ÷ Cnt)를 딱 1회 계산합니다.
- Int( )는 소수점 이하를 잘라 내는 함수입니다. Int(100.75)는 100입니다.
- 빈칸 단골: I의 초기치입니다. I ← I + 1이 배열을 읽기 **전**에 있으면 초기치는 0, 읽은 **후**에 있으면 1입니다.

### 홀수합·짝수합
- 1에서 100까지 짝수의 합은 I를 0에서 시작해 매 회전 **2씩** 증가시키며 더합니다.
- 1에서 100까지 홀수의 합은 I를 **-1에서 시작**해 2씩 증가시키면 1, 3, 5, ...가 만들어집니다.
- 빈칸 단골: 홀수합에서 I의 초기치 -1입니다. 첫 회전에서 I ← I + 2가 실행되어 1이 되기 때문입니다.

### 분수의 합계
- 1/2 + 1/3 + 1/4 + ... 유형은 분모가 어떤 규칙으로 커지는지만 잡으면 끝입니다.
- I가 0에서 시작해 1씩 증가하면 각 항은 1 ÷ (I + 1)로 표현합니다.
- I가 1에서 시작하면 각 항은 1 ÷ I가 되고 판단 조건의 숫자도 달라집니다.
- 초기치와 수식은 항상 한 몸으로 움직입니다. 하나가 바뀌면 다른 하나도 바뀝니다.

### 부호 교대 합계 - 방법 1. 스위칭 변수 판단
- 1 - 2 + 3 - 4 + ... 유형에서 SW 변수를 0과 1로 번갈아 바꿉니다.
- 판단 기호에서 SW 값을 검사해 더하는 길과 빼는 길로 흐름을 가릅니다.

### 부호 교대 합계 - 방법 2. 한 회전에 두 번 처리
- 한 번의 회전에서 N을 두 번 증가시켜, 앞의 N은 더하고 뒤의 N은 빼는 방식입니다.
- 주의: 이 구조는 항의 개수가 **홀수**일 때 정확히 끝납니다.
- 항이 짝수 개면 마지막 항을 처리한 뒤 종료 판단에 닿기 전에 한 번 더 계산되어 값이 틀어집니다.

### 부호 교대 합계 - 방법 3. -1 곱하기 (가장 중요)
- S ← S × (-1)을 회전마다 실행하면 S가 +1과 -1을 번갈아 가집니다.
- 양수 1에 -1을 곱하면 -1, 음수 1에 -1을 곱하면 +1이 되는 원리입니다.
- 합계는 Sum ← Sum + (I × S)로 누적합니다.
- 첫 항이 +이면 S의 초기치는 **-1**입니다. 첫 회전에서 ×(-1)이 실행되어 +1이 되기 때문입니다.
- 첫 항이 -이면 S의 초기치는 1입니다. 초기치가 빈칸으로 가장 자주 출제됩니다.
- 추적 예시: 1 - 2 + 3 - 4 + 5 (매 회전 I ← I + 1, S ← S × (-1), Sum ← Sum + I × S)

| 회전 | I | S | Sum |
|------|---|---|-----|
| 1회 | 1 | 1 | 1 |
| 2회 | 2 | -1 | -1 |
| 3회 | 3 | 1 | 2 |
| 4회 | 4 | -1 | -2 |
| 5회 | 5 | 1 | 3 |
- 결과: 1 - 2 + 3 - 4 + 5 = 3

### 부분합의 누적
- 1 + (1+2) + (1+2+3) + (1+2+3+4) + (1+2+3+4+5) 유형은 그릇이 두 개 필요합니다.
- S(부분합)에는 I를 누적하고, T(전체합)에는 S를 누적합니다.
- 추적 예시

| 회전 | I | S | T |
|------|---|---|---|
| 1회 | 1 | 1 | 1 |
| 2회 | 2 | 3 | 4 |
| 3회 | 3 | 6 | 10 |
| 4회 | 4 | 10 | 20 |
| 5회 | 5 | 15 | 35 |
- 결과: 35

### 팩토리얼과 팩토리얼의 합
- 5!은 F ← F × I를 5회 반복해 구합니다.
- F의 초기치는 반드시 **1**입니다. 0이면 무엇을 곱해도 0이 되어 버리기 때문입니다.
- 2! + 3! + ... + 20! 유형의 핵심은 A!은 (A-1)! × A라는 성질입니다.
- 이전 회전의 F에 새 I를 곱하면 곧바로 현재 항의 팩토리얼이 되고, 그때마다 Sum ← Sum + F로 누적합니다.
- 추적 예시: 2! + 3! + 4!

| 회전 | I | F | Sum |
|------|---|---|-----|
| 1회 | 2 | 2 | 2 |
| 2회 | 3 | 6 | 8 |
| 3회 | 4 | 24 | 32 |
- 결과: 2! + 3! + 4! = 32

### 등차수열과 등비수열
- **등차수열**은 같은 수(공차)를 계속 더하는 수열입니다. A ← A + 공차를 반복하며 S에 누적합니다.
- 예: 첫째 항 2, 공차 3이면 2, 5, 8, 11, 14, ...
- **등비수열**은 같은 수(공비)를 계속 곱하는 수열입니다. A ← A × 공비를 반복하며 S에 누적합니다.
- 예: 첫째 항 1, 공비 2이면 1, 2, 4, 8, 16, ...
- 빈칸 단골: 첫째 항을 초기치로 미리 누적해 두었다면 반복 횟수는 전체 항의 수보다 **1회 적어야** 합니다.
- 이미 처리한 항을 또 처리하면 값이 초과되기 때문입니다.

### 피보나치수열
- 앞의 두 항을 더해 다음 항을 만드는 수열입니다: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
- 변수 세 개로 굴립니다. C ← A + B로 새 항을 만들고, A ← B와 B ← C로 한 칸씩 밀어 줍니다.
- 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34의 합계를 구할 때 T의 초기치는 **2**입니다.
- 처음 두 항(1 + 1)은 반복에 들어가기 전에 초기치로 처리되기 때문입니다. T를 0으로 두면 앞의 두 항이 사라집니다.
- 추적 예시 (초기치 A = 1, B = 1, T = 2)

| 회전 | 새 항 C | A | B | T |
|------|---------|---|---|---|
| 1회 | 2 | 1 | 2 | 4 |
| 2회 | 3 | 2 | 3 | 7 |
| 3회 | 5 | 3 | 5 | 12 |
| 4회 | 8 | 5 | 8 | 20 |
| 5회 | 13 | 8 | 13 | 33 |
| 6회 | 21 | 13 | 21 | 54 |
| 7회 | 34 | 21 | 34 | 88 |
- 결과: 88

### 증가치가 변하는 수열
- 1 + 2 + 4 + 7 + 11 + 16 + ... 은 더하는 수 자체가 1, 2, 3, 4, ...로 커지는 수열입니다.
- I ← I + 1로 증가치를 만들고, A ← A + I로 현재 항을 만들고, T ← T + A로 누적합니다.
- 항과 증가치가 따로 논다는 점만 잡으면 등차수열과 같은 요령으로 풀립니다.

### 곱의 합계
- (77×1) + (76×2) + ... + (1×77) 유형은 한쪽은 커지고 한쪽은 작아지는 두 변수의 곱을 누적합니다.
- P는 1에서 1씩 증가시키고, Q는 **78 - P**로 만들면 77에서 1씩 감소합니다.
- M ← Q × P로 각 항을 만들고 H ← H + M으로 누적하며, P가 77을 넘으면 종료합니다.
- 작은 예로 확인: (5×1) + (4×2) + (3×3) + (2×4) + (1×5), 이때 Q = 6 - P

| P | Q | M(Q×P) | H |
|---|---|--------|---|
| 1 | 5 | 5 | 5 |
| 2 | 4 | 8 | 13 |
| 3 | 3 | 9 | 22 |
| 4 | 2 | 8 | 30 |
| 5 | 1 | 5 | 35 |
- 결과: 35`,
    },
    {
      id: 'ch8',
      name: '수 판별 알고리즘 패턴',
      topics: [
        '배수와 공배수 판별',
        '약수 구하기',
        '소수 판별',
        '완전수',
        '최대공약수·최소공배수',
        '소인수분해',
        '진법 변환',
        '1의 보수와 2의 보수',
      ],
      content: `## 수 판별 알고리즘 패턴

### 배수 판별
- A MOD B = 0이면 A는 B의 배수입니다.
- "3의 배수이면서 5의 배수"는 두 나머지를 각각 검사하거나, 두 나머지의 합이 0인지 한 번에 검사합니다.
- 나머지에는 음수가 없어서, 합이 0이면 둘 다 0일 수밖에 없기 때문입니다.
- "3의 배수이거나 4의 배수"는 판단 기호 두 개를 이어 붙이거나 OR 연산자 하나로 처리합니다.

### 약수 구하기
- N의 약수는 1부터 N까지 차례로 나누어 보며 나머지가 0인 수를 출력하면 됩니다.
- 예: N = 8이면 8 MOD 1 = 0, 8 MOD 2 = 0, 8 MOD 4 = 0, 8 MOD 8 = 0이므로 약수는 1, 2, 4, 8입니다.
- 약수에는 1과 자기 자신도 포함된다는 점을 잊지 마세요.
- 응용: 나머지를 몫으로 직접 만들 수도 있습니다. 나머지 = N - (몫 × 나눈 수)이고, 몫은 Int(N ÷ L)로 구합니다.
- MOD 연산자가 답항보기에 없을 때 이 수식이 정답으로 출제됩니다.

### 소수 판별
- 소수는 1과 자신만을 약수로 가지는 자연수입니다.
- 판별법: N을 2부터 1씩 키운 K로 나누어 가다가 **처음으로 나누어떨어지는 순간**의 K를 봅니다.
- K = N이면 자신에게 와서야 나누어떨어진 것이므로 소수입니다.
- K < N이면 중간에 다른 약수가 있다는 뜻이므로 소수가 아닙니다.
- 5의 판별: MOD(5, 2) = 1, MOD(5, 3) = 2, MOD(5, 4) = 1, MOD(5, 5) = 0 → K = 5 = N이므로 소수
- 9의 판별: MOD(9, 2) = 1, MOD(9, 3) = 0 → K = 3에서 멈췄으므로 소수가 아님
- 빈칸 단골: K의 초기치 1입니다. 1로 나누면 모두 나머지가 0이므로, 먼저 K ← K + 1을 실행해 2부터 나누기 시작하도록 만든 구조입니다.

### 완전수
- 자기 자신을 제외한 약수를 모두 더하면 자기 자신이 되는 수입니다.
- 6 = 1 + 2 + 3이고, 28 = 1 + 2 + 4 + 7 + 14입니다.
- 판별: 자신을 제외한 약수를 S에 누적한 뒤 S = SU인지 비교합니다.
- 요령: 자신을 제외한 약수는 자신의 절반을 넘을 수 없습니다.
- 그래서 반복을 Int(SU ÷ 2)까지만 돌리면 수행 횟수를 절반으로 줄일 수 있고, 답항보기에 SU/2가 있다면 그것이 정답입니다.

### 최대공약수(GCM) - 나머지 치환법(유클리드 호제법)
- 큰 수를 작은 수로 나눈 나머지가 0이면 그 작은 수가 최대공약수입니다.
- 나머지가 0이 아니면 (나눈 수, 나머지)의 짝으로 바꾸어 같은 일을 반복합니다.
- 24와 9의 추적

| 회차 | 나눗셈 | 나머지 |
|------|--------|--------|
| 1회 | 24 나누기 9 | 6 |
| 2회 | 9 나누기 6 | 3 |
| 3회 | 6 나누기 3 | 0 |
- 나머지가 0이 된 순간의 나눈 수 3이 최대공약수입니다.
- 최소공배수(LCM)는 공식 하나로 끝납니다. LCM = (A × B) ÷ GCM
- 예: 24와 9의 LCM = (24 × 9) ÷ 3 = 72
- 빈칸 단골: 두 수의 크기를 비교해 큰 수와 작은 수를 정하는 판단, 그리고 치환 처리(제수를 피제수로, 나머지를 제수로)입니다.

### 소인수분해
- 합성수를 소수들의 곱으로 나타내는 과정입니다.
- N을 2부터 나누어 보며 나누어떨어지면 그 수를 배열에 저장하고, 몫을 새 N으로 삼아 반복합니다.
- N이 1이 되면 종료합니다.
- 12의 추적: 12 ÷ 2 = 6 (2 저장) → 6 ÷ 2 = 3 (2 저장) → 3 ÷ 3 = 1 (3 저장)
- 결과: 12 = 2 × 2 × 3

### 10진수를 2진수·8진수·16진수로 변환
- 변환하려는 수를 해당 진수로 계속 나누며 **나머지**를 배열에 저장하고, 몫이 0이 되면 배열을 **역순**으로 출력합니다.
- 13을 2진수로 변환하는 추적

| 회차 | N | 몫 | 나머지 |
|------|----|----|--------|
| 1회 | 13 | 6 | 1 |
| 2회 | 6 | 3 | 0 |
| 3회 | 3 | 1 | 1 |
| 4회 | 1 | 0 | 1 |
- 나머지를 거꾸로 읽으면 1101, 곧 13은 2진수로 1101입니다.
- 8진수 변환은 나누는 수만 8로 바꾸면 됩니다.
- 16진수 변환의 함정: 나머지 10에서 15는 A에서 F 문자로 바꿔야 합니다.
- 그래서 수치문자 0에서 F까지를 담은 배열 X(16)을 두고, **나머지 + 1**을 첨자로 사용해 X(나머지 + 1)을 저장합니다.
- X(1)에 0이 담겨 있어 첨자가 1씩 밀려 있기 때문입니다.

### 2진수·8진수를 10진수로 변환
- 오른쪽 끝자리부터 가중치를 곱해 모두 더합니다.
- 2진수의 가중치는 1, 2, 4, 8, 16, ...이고 8진수의 가중치는 1, 8, 64, ...입니다.
- 예: 101010(2)은 32 + 8 + 2 = 42입니다.

### 1의 보수와 2의 보수
- **1의 보수**는 각 자리를 반대로 뒤집은 수입니다. 순서도에서는 각 자리를 "1 - 그 자리 값"으로 계산합니다.
- **2의 보수**는 1의 보수에 1을 더한 수입니다. 컴퓨터가 음수를 표현하고 뺄셈을 덧셈으로 바꿀 때 사용합니다.
- 순서도의 요령: 자리올림 변수 C의 초기치를 **1**로 둡니다.
- 1의 보수의 오른쪽 끝자리부터 (그 자리 값 + C)를 2로 나눈 나머지를 저장하고, 몫을 새 C로 삼습니다.
- 10110의 2의 보수 추적 (1의 보수는 01001, 오른쪽 자리부터 진행)

| 자리(오른쪽부터) | 1의 보수 값 | C | 합 | 저장 값 | 새 C |
|------------------|-------------|---|----|---------|------|
| 1번째 | 1 | 1 | 2 | 0 | 1 |
| 2번째 | 0 | 1 | 1 | 1 | 0 |
| 3번째 | 0 | 0 | 0 | 0 | 0 |
| 4번째 | 1 | 0 | 1 | 1 | 0 |
| 5번째 | 0 | 0 | 0 | 0 | 0 |
- 결과: 10110의 1의 보수는 01001, 2의 보수는 01010입니다.`,
    },
    {
      id: 'ch9',
      name: '대표 실기 기출 유형 상세 풀이',
      topics: [
        '최대값·최소값·합계·평균',
        '분수 부호 교대 합계',
        '두 자연수 사이의 합계',
        '피보나치·팩토리얼 합',
        '최대값 제외 평균',
        '홀수·짝수 개수',
        '범위 합계 3종',
        '보수 변환 기출',
        '2차원 배열 기출',
      ],
      content: `## 대표 실기 기출 유형 상세 풀이

2005년부터 2012년까지 실기시험에 실제로 출제된 알고리즘을 유형별로 풀어 봅니다.
순서도 그림이 없어도 "변수 → 흐름 → 빈칸 포인트 → 검증"의 순서로 읽으면 구조가 머릿속에 그려집니다.

### 기출 1. 최대값·최소값·합계·평균 (2005년 이후 최다 반복 출제)
- 문제: 배열 A에 30, 24, 71, 41, 43, 86, 70이 기억되어 있을 때 최대값, 최소값, 합계, 평균을 구하라.
- 변수: MAX(최대값), MIN(최소값), S(합계), AVE(평균), I(배열 첨자 겸 카운트)
- 흐름: MAX ← -999, MIN ← 999로 준비 → I를 1씩 증가시키며 A(I)를 읽어 MAX·MIN 갱신과 S 누적 → 7개를 다 읽으면 AVE ← S ÷ 7을 계산해 출력
- 빈칸 포인트: 준비 기호의 -999와 999, 판단 기호의 A(I) > MAX와 A(I) < MIN, 처리 기호의 MIN ← A(I)와 S ← S + A(I)
- 검증: 최대값 86, 최소값 24, 합계 365 (4장의 패턴 10 추적표 참조)

### 기출 2. 분수 부호 교대 합계 (2005년 정기검정)
- 문제: S = 1/2 - 2/3 + 3/4 - 4/5 + ... + 49/50의 합을 구하라.
- 변수: S(누적), K(항 번호), SW(부호 판단)
- 흐름: 각 항을 K ÷ (K + 1)로 만들고, SW로 부호를 번갈아 바꿔 가며 더하거나 뺌 → K가 49에 도달하면 종료
- 빈칸 포인트: K ← K + 1, 항의 수식 K/(K+1), SW = 0 판단, 종료 조건의 49
- 분자는 항 번호 그대로, 분모는 항 번호보다 1 큰 수라는 규칙만 잡으면 절반은 푼 셈입니다.

### 기출 3. 두 자연수 사이의 합계 (2006년 상시검정)
- 문제: 서로 다른 두 자연수 A, B를 입력받아 두 수 사이(양 끝 포함)의 합계를 구하라.
- 변수: A·B(입력), N(반복 처리), SUM(합계)
- 흐름: SUM ← 0으로 준비 → A와 B의 크기를 비교 → 작은 수부터 큰 수까지 N을 1씩 증가시키며 SUM ← SUM + N
- 빈칸 포인트: SUM의 초기치 0, 크기 비교 판단, 반복 범위(A가 작으면 A에서 B까지, B가 작으면 B에서 A까지), 누적식 SUM + N
- 추적 예시 (A = 3, B = 7)

| N | SUM |
|---|-----|
| 3 | 3 |
| 4 | 7 |
| 5 | 12 |
| 6 | 18 |
| 7 | 25 |
- 결과: 25

### 기출 4. 피보나치수열의 합 (2006년 상시검정)
- 문제: 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34의 결과를 구하라.
- 변수: T(전체 합), A·B(앞의 두 항), H(마지막 값 확인)
- 흐름: 새 항을 A + B로 만들어 T에 누적 → A ← B, B ← 새 항으로 한 칸씩 밀기 → 마지막 항 34까지 누적되면 종료
- 빈칸 포인트: A와 B의 초기치 1, 새 항 수식 A + B, T의 초기치 2(첫 두 항의 합), 종료 비교의 부등호 방향
- 검증: 합계는 88 (7장의 피보나치 추적표 참조)

### 기출 5. 팩토리얼의 합 (2006년 상시검정)
- 문제: 2! + 3! + 4! + ... + 19! + 20!의 결과를 출력하라.
- 변수: Sum(합계), F(각 항의 팩토리얼), I(1증가 변수)
- 흐름: I ← I + 1로 2부터 시작 → F ← F × I로 이전 팩토리얼에 새 수를 곱해 현재 항을 완성 → Sum ← Sum + F → I가 20이 될 때까지 반복
- 빈칸 포인트: I의 초기치 1(선증가 구조), F의 초기치 1, F × I, Sum + F, 종료 값 20
- 원리: 매 항을 처음부터 다시 곱하면 낭비이므로, A!은 (A-1)! × A라는 성질로 곧바로 다음 항을 만듭니다.

### 기출 6. 최대값을 제외한 평균 (2006년 상시검정)
- 문제: 10개의 자연수를 배열에 입력받아 최대값을 제외한 나머지의 평균을 출력하라.
- 변수: I·J(1증가), Sum(합계), Max(최대값), Aver(평균), Array(배열)
- 흐름: Max와 Sum의 초기치를 **첫 번째 배열 값**으로 설정 → 두 번째 값부터 Max 갱신과 Sum 누적 → 마지막에 Aver ← (Sum - Max) ÷ 9
- 빈칸 포인트: J의 초기치 1(0으로 두면 Array(1)이 두 번 누적됨), 비교를 Array(2)부터 시작하는 이유, 마지막 수식의 Sum - Max와 9
- 이 문제의 핵심은 "전체 합계에서 최대값을 빼면 최대값 제외 합계가 된다"는 발상의 전환 하나입니다.

### 기출 7. 홀수·짝수 개수 세기 (2006년 상시검정)
- 문제: 배열에 입력된 정수 10개 중 홀수의 개수와 짝수의 개수를 구하라.
- 변수: H(첨자), ARRAY(배열), EVENCNT(짝수 개수), ODDCNT(홀수 개수), REM(나머지)
- 흐름: REM ← ARRAY(H) MOD 2 → REM = 0이면 EVENCNT ← EVENCNT + 1, 아니면 ODDCNT ← ODDCNT + 1 → 개수를 늘린 뒤 H ← H + 1
- 빈칸 포인트: H의 초기치 1과 H ← H + 1의 위치(판별한 뒤 증가), MOD의 나눗수 2, ODDCNT + 1
- 추적 예시 (7, 4, 9 입력): 나머지 1 → 홀수 1개, 나머지 0 → 짝수 1개, 나머지 1 → 홀수 2개

### 기출 8. 범위 합계 3종 동시 계산 (2007년 상시검정)
- 문제: 100에서 500까지의 자연수 중 짝수 합계, 홀수 합계, 짝수이면서 10의 배수인 수의 합계를 구하라.
- 변수: NUM(숫자), totEven(짝수 합), totOdd(홀수 합), tot10Su(짝수이면서 10의 배수 합)
- 흐름: NUM ← NUM + 1로 먼저 증가시킨 뒤 판별 → NUM MOD 2가 0이 아니면 홀수 누적, 0이면 짝수 누적 → 짝수인 경우에만 NUM MOD 10 = 0을 추가로 검사해 10의 배수 합 누적
- 빈칸 포인트: NUM의 초기치 **99**(선증가 구조라 100부터 판별되게 하려면 1 작게 시작), 종료 비교 값 500, 다르다(!=) 연산자의 흐름 방향
- 함정: 판단 기호가 "다르다(!=)"로 출제되면 Yes와 No의 방향이 뒤집힙니다. 조건을 우리말로 소리 내어 읽으며 방향을 확정하세요.

### 기출 9. 5자리 2진수의 1의 보수·2의 보수 (2007년 상시검정)
- 문제: 5자리 2진수를 입력받아 1의 보수와 2의 보수로 변환해 각 배열에 저장하라.
- 변수: A(P)(입력 2진수 배열), Comp1(1의 보수), Comp2(2의 보수), P(배열 포인터), C(자리올림 수)
- 흐름: P를 1씩 증가시키며 Comp1 ← 1 - A(P)로 1의 보수 완성 → P를 5부터 1씩 감소시키며 Comp2 ← (Comp1 + C) MOD 2를 저장하고 몫을 C에 유지
- 빈칸 포인트: C의 초기치 **1**(2의 보수는 1의 보수 + 1이므로 올림수 1을 미리 준비), 1 - A(P), P ← P - 1, 나눗수 2
- 검증: 10110 → 1의 보수 01001 → 2의 보수 01010 (8장의 보수 추적표 참조)

### 기출 10. 2차원 배열 직각삼각형 채우기 (2007·2008년 반복 출제)
- 문제: 5행 5열 배열에 행이 내려갈수록 1, 1 2, 1 2 3, 1 2 3 4, 1 2 3 4 5처럼 칸이 늘어나게 값을 채워라.
- 변수: A(배열), P(행), Q(열)
- 흐름: 바깥 반복 P와 안쪽 반복 Q의 이중 순환 → 새 행이 시작될 때마다 Q ← 1로 초기화 → A(P, Q) ← Q 대입 → Q가 P보다 커지면 P ← P + 1
- 빈칸 포인트: Q ← 1 초기화의 위치, 안쪽 종료 판단 Q > P, 바깥 종료 판단 P > 5
- 변형: 저장 값이 Q + 1로 바뀌어 2, 2 3, 2 3 4처럼 채우는 문제(2008년 정기), 소수 15개를 만들어 삼각형으로 채우는 문제(2009년 상시)로도 출제되었습니다.
- 소수 채우기 변형에서는 소수 배열 TMP의 초기치로 2와 3을 미리 넣고 개수 CNT를 2에서 시작하는 것이 빈칸 포인트였습니다.

### 기출 11. 모래시계 배치 (2010·2012년 실기)
- 문제: 정렬된 17개의 값을 5행 5열 배열에 모래시계 모양으로 배치하라.
- 핵심: 행마다 열의 시작 L과 끝 R을 좁혔다가 다시 넓히는 구조입니다. 4장의 패턴 12 추적표가 그대로 정답의 뼈대입니다.
- 위쪽 절반은 L ← L + 1, R ← R - 1로 좁히고, 아래쪽 절반은 L ← L - 1, R ← R + 1로 넓힙니다.
- 행마다 채워지는 칸 수가 5, 3, 1, 3, 5로 변하므로 총 17개의 값이 정확히 들어갑니다.
- 값을 큰 수부터 채우면 모래가 쌓이듯 위가 넓고 가운데가 잘록한 모래시계가 완성됩니다.`,
    },
  ],

  'db-basic': [
    {
      id: 'ch1',
      name: '데이터베이스 개념',
      topics: [
        'DB 정의',
        'DBMS 기능',
        '스키마',
        '데이터 독립성',
        '관계형 DB 용어',
        '키의 종류',
      ],
      content: `## 데이터베이스 개념

### 데이터베이스(DB)의 정의
- **통합된 데이터(Integrated Data)**: 중복을 최소화하여 통합 관리하는 데이터
- **저장된 데이터(Stored Data)**: 컴퓨터가 접근 가능한 저장 매체에 저장된 데이터
- **운영 데이터(Operational Data)**: 조직의 업무를 수행하는 데 꼭 필요한 데이터
- **공용 데이터(Shared Data)**: 여러 사용자가 공동으로 사용하는 데이터

### DBMS(데이터베이스 관리 시스템)의 기능
- **정의 기능(Definition)**: 데이터의 구조, 타입, 제약조건 등을 정의 (DDL 사용)
- **조작 기능(Manipulation)**: 데이터의 검색, 삽입, 수정, 삭제 등의 처리 (DML 사용)
- **제어 기능(Control)**: 데이터의 보안, 무결성, 동시성 제어, 회복 등 (DCL 사용)
- DBMS의 장점: 데이터 중복 최소화, 일관성 유지, 무결성 유지, 보안 관리

### 스키마 (Schema)
- **외부 스키마(External Schema)**: 개별 사용자가 보는 데이터베이스의 논리적 구조, 사용자 뷰(View)
- **개념 스키마(Conceptual Schema)**: 데이터베이스 전체의 논리적 구조, 조직 전체 관점의 통합된 구조
- **내부 스키마(Internal Schema)**: 데이터가 물리적으로 저장되는 구조, 저장 장치 관점

### 데이터 독립성
- **논리적 독립성**: 개념 스키마가 변경되어도 외부 스키마에 영향을 주지 않음
- **물리적 독립성**: 내부 스키마가 변경되어도 개념 스키마에 영향을 주지 않음
- 독립성 확보를 위해 스키마 간의 **사상(Mapping)**을 정의함

### 관계형 데이터베이스 용어
- **릴레이션(Relation)**: 데이터를 행과 열로 구성한 2차원 테이블
- **튜플(Tuple)**: 릴레이션의 행(Row), 하나의 레코드에 해당
- **속성(Attribute)**: 릴레이션의 열(Column), 하나의 필드에 해당
- **도메인(Domain)**: 하나의 속성이 가질 수 있는 값의 범위 (예: 성별 = {남, 여})
- **차수(Degree)**: 속성(열)의 수
- **카디널리티(Cardinality)**: 튜플(행)의 수

### 키(Key)의 종류
- **슈퍼키(Super Key)**: 튜플을 유일하게 식별할 수 있는 속성의 집합, 유일성 만족
- **후보키(Candidate Key)**: 슈퍼키 중 최소성을 만족하는 키 (유일성 + 최소성)
- **기본키(Primary Key)**: 후보키 중 선택된 하나의 키, NULL 값 불가, 중복 불가
- **대체키(Alternate Key)**: 후보키 중 기본키로 선택되지 않은 나머지 키
- **외래키(Foreign Key)**: 다른 릴레이션의 기본키를 참조하는 속성, 테이블 간 관계를 형성`,
    },
    {
      id: 'ch2',
      name: 'SQL',
      topics: [
        'DDL',
        'DML',
        'DCL',
        'WHERE 조건',
        'ORDER BY',
        'GROUP BY와 HAVING',
        '집계함수',
      ],
      content: `## SQL (Structured Query Language)

### DDL (데이터 정의어)
- **CREATE**: 테이블, 뷰, 인덱스 등의 데이터베이스 객체를 생성
  - CREATE TABLE 학생 (학번 INT PRIMARY KEY, 이름 VARCHAR(20) NOT NULL, 학과 VARCHAR(30));
- **ALTER**: 기존 테이블의 구조를 변경
  - ALTER TABLE 학생 ADD 전화번호 VARCHAR(15); → 열 추가
  - ALTER TABLE 학생 DROP 전화번호; → 열 삭제
- **DROP**: 테이블, 뷰 등의 객체를 완전히 삭제
  - DROP TABLE 학생; → 테이블 삭제 (구조와 데이터 모두 삭제)
- **TRUNCATE**: 테이블의 모든 데이터를 삭제하되 구조는 유지

### DML (데이터 조작어)
- **SELECT**: 데이터를 조회 (가장 많이 사용)
  - SELECT 이름, 학과 FROM 학생 WHERE 학과 = '컴퓨터';
  - SELECT * FROM 학생; → 모든 열 조회
  - **DISTINCT**: 중복 제거, SELECT DISTINCT 학과 FROM 학생;
- **INSERT**: 새로운 데이터를 삽입
  - INSERT INTO 학생(학번, 이름, 학과) VALUES(1001, '홍길동', '컴퓨터');
- **UPDATE**: 기존 데이터를 수정
  - UPDATE 학생 SET 학과 = '전자' WHERE 학번 = 1001;
- **DELETE**: 데이터를 삭제 (구조는 유지)
  - DELETE FROM 학생 WHERE 학번 = 1001;

### DCL (데이터 제어어)
- **GRANT**: 사용자에게 권한을 부여
  - GRANT SELECT, INSERT ON 학생 TO 사용자A;
- **REVOKE**: 사용자에게 부여된 권한을 회수
  - REVOKE SELECT ON 학생 FROM 사용자A;

### WHERE 조건절
- **비교 연산자**: =, <>, <, >, <=, >=
- **BETWEEN A AND B**: A와 B 사이의 값 (A, B 포함)
- **IN (값1, 값2, ...)**: 목록에 포함된 값
- **LIKE**: 패턴 매칭, **%** (0개 이상 문자), **_** (정확히 1개 문자)
  - WHERE 이름 LIKE '김%' → 김으로 시작하는 이름
- **IS NULL / IS NOT NULL**: NULL 값 확인
- **AND, OR, NOT**: 논리 연산자

### ORDER BY (정렬)
- **ASC**: 오름차순 정렬 (기본값, 생략 가능)
- **DESC**: 내림차순 정렬
- SELECT * FROM 학생 ORDER BY 이름 ASC;
- 여러 열 기준: ORDER BY 학과 ASC, 이름 DESC;

### GROUP BY와 HAVING
- **GROUP BY**: 특정 열을 기준으로 그룹화
  - SELECT 학과, COUNT(*) FROM 학생 GROUP BY 학과;
- **HAVING**: 그룹화된 결과에 조건을 적용 (WHERE는 그룹화 전, HAVING은 그룹화 후)
  - SELECT 학과, COUNT(*) FROM 학생 GROUP BY 학과 HAVING COUNT(*) >= 3;

### 집계 함수 (Aggregate Functions)
- **COUNT(*)**: 행의 수를 구함, NULL 포함
- **COUNT(열이름)**: 해당 열에서 NULL을 제외한 행의 수
- **SUM(열이름)**: 합계
- **AVG(열이름)**: 평균
- **MAX(열이름)**: 최댓값
- **MIN(열이름)**: 최솟값`,
    },
    {
      id: 'ch3',
      name: '데이터 모델',
      topics: [
        '개체-관계 모델',
        '관계 데이터 모델',
        '정규화',
        '이상현상',
        '관계 대수',
      ],
      content: `## 데이터 모델

### 개체-관계 모델 (E-R Model)
- 현실 세계의 데이터를 **개체(Entity)**와 **관계(Relationship)**로 표현
- **ER 다이어그램 기호**:
  - **사각형**: 개체 타입 (예: 학생, 과목)
  - **마름모**: 관계 타입 (예: 수강)
  - **타원**: 속성 (예: 이름, 학번)
  - **밑줄 타원**: 기본키 속성
  - **이중 타원**: 다중값 속성
  - **선**: 개체와 속성, 개체와 관계를 연결
- **관계의 대응수(Cardinality)**: 1:1, 1:N, N:M

### 관계 데이터 모델
- 데이터를 **2차원 테이블(릴레이션)** 형태로 표현
- 릴레이션의 특성:
  - 튜플의 순서는 의미가 없음
  - 속성의 순서는 의미가 없음
  - 모든 속성 값은 **원자값(Atomic Value)**이어야 함
  - 동일한 튜플은 존재할 수 없음 (중복 불가)

### 정규화 (Normalization)
- 데이터의 중복을 최소화하고 이상현상을 방지하기 위해 릴레이션을 분해하는 과정
- **제1정규형(1NF)**: 모든 속성의 값이 **원자값**이어야 함 (반복 그룹 제거)
  - 예: 전화번호 속성에 여러 값이 있으면 1NF 위반
- **제2정규형(2NF)**: 1NF를 만족하고, **부분 함수 종속 제거** (기본키 일부에만 종속되는 속성 제거)
  - 기본키가 복합키일 때 일부 속성만으로 결정되는 종속성 제거
- **제3정규형(3NF)**: 2NF를 만족하고, **이행적 함수 종속 제거** (A→B→C에서 A→C 제거)
  - 기본키가 아닌 속성이 다른 비키 속성을 결정하는 경우 제거
- 정규화 단계: 비정규형 → 1NF → 2NF → 3NF → BCNF → 4NF → 5NF

### 이상현상 (Anomaly)
- 정규화가 되어 있지 않은 테이블에서 발생하는 문제
- **삽입 이상(Insertion Anomaly)**: 원하지 않는 데이터까지 함께 삽입해야 하는 문제
  - 예: 학생 정보 없이 학과 정보만 입력할 수 없는 경우
- **삭제 이상(Deletion Anomaly)**: 원하는 데이터만 삭제할 수 없고 다른 데이터까지 함께 삭제되는 문제
  - 예: 학생을 삭제하면 해당 학과 정보도 함께 삭제되는 경우
- **갱신 이상(Update Anomaly)**: 데이터 수정 시 일부만 수정되어 일관성이 깨지는 문제
  - 예: 학과 이름 변경 시 모든 레코드를 변경하지 않으면 불일치 발생

### 관계 대수 (Relational Algebra)
- 관계형 데이터베이스에서 원하는 데이터를 얻기 위한 **절차적** 질의 언어
- **순수 관계 연산자**:
  - **셀렉트(σ, Select)**: 조건을 만족하는 **행(튜플)**을 선택, 수평적 부분집합
    - 예: σ학과='컴퓨터'(학생) → 학과가 컴퓨터인 학생 튜플 선택
  - **프로젝트(π, Project)**: 원하는 **열(속성)**만 추출, 수직적 부분집합
    - 예: π이름,학과(학생) → 이름과 학과 속성만 추출
  - **조인(⋈, Join)**: 두 릴레이션에서 공통 속성을 기준으로 결합
    - **자연 조인(Natural Join)**: 공통 속성의 값이 같은 튜플을 결합
  - **디비전(÷, Division)**: 릴레이션 A에서 릴레이션 B의 모든 조건을 만족하는 튜플 추출
- **일반 집합 연산자**: 합집합(∪), 교집합(∩), 차집합(-), 카티션 프로덕트(×)`,
    },
  ],
};
