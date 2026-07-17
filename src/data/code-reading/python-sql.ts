import type { CodeReadingLanguage } from './types'

// 정보처리기사 실기 대비 — 코드 결과 예측 (Python / SQL)
// 모든 문제는 자체 창작본이며, Python 문제는 python3 실행으로 정답을 검증함.

export const pythonLang: CodeReadingLanguage = {
  id: 'python',
  name: 'Python',
  icon: 'fa-brands fa-python',
  description:
    '실기 최빈출 언어. 슬라이싱·리스트 메서드·컴프리헨션 등 코드를 한 줄씩 따라가며 출력 결과를 예측하는 연습을 합니다.',
  questions: [
    {
      id: 'py-r1',
      topic: '자료형·연산자',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = 17
b = 5
print(a // b, a % b, a ** 2)`,
      answer: '3 2 289',
      alternativeAnswers: ['3 2 289'],
      explanation:
        '// 는 "몫만 남기는 나눗셈"입니다. 17을 5로 나누면 3번 들어가고(몫 3), 2가 남습니다(나머지 2, % 연산). ** 는 거듭제곱이라 a ** 2는 17 × 17 = 289입니다. print에 콤마로 여러 값을 넘기면 공백 한 칸으로 이어서 출력되므로 "3 2 289"가 됩니다.',
    },
    {
      id: 'py-r2',
      topic: '자료형·연산자',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `x = 7
y = 2
print(x / y)
print(x // y * 3)
print('ab' * 2 + 'c')`,
      answer: '3.5\n9\nababc',
      alternativeAnswers: ['3.5 9 ababc'],
      explanation:
        '첫 줄: / 는 소수점까지 계산하는 "실수 나눗셈"이라 7 / 2 = 3.5입니다(정수끼리 나눠도 결과는 실수). 둘째 줄: // 는 몫만 남기므로 7 // 2 = 3이고, 여기에 3을 곱해 9가 됩니다(// 와 * 는 우선순위가 같아 왼쪽부터 계산). 셋째 줄: 문자열에 숫자를 곱하면 그만큼 반복되어 \'ab\' * 2 = \'abab\'이고, + 로 \'c\'를 이어 붙여 "ababc"가 됩니다.',
    },
    {
      id: 'py-r3',
      topic: '문자열 슬라이싱·인덱싱',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `s = 'ENGINEER'
print(s[0])
print(s[-1])
print(s[2:5])`,
      answer: 'E\nR\nGIN',
      alternativeAnswers: ['E R GIN'],
      explanation:
        '문자열의 각 글자에는 번호(인덱스)가 붙습니다. ENGINEER는 앞에서부터 0:E, 1:N, 2:G, 3:I, 4:N, 5:E, 6:E, 7:R입니다. s[0]은 첫 글자 E, s[-1]은 음수 인덱스로 "뒤에서 첫 번째"를 뜻해 R입니다. s[2:5]는 2번부터 5번 "직전"(4번)까지, 즉 G·I·N을 잘라 "GIN"이 됩니다. 끝 번호는 포함되지 않는다는 점이 핵심입니다.',
    },
    {
      id: 'py-r4',
      topic: '문자열 슬라이싱·인덱싱',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `s = 'INFORMATION'
print(s[::2])
print(s[::-1])`,
      answer: 'IFRAIN\nNOITAMROFNI',
      alternativeAnswers: ['IFRAIN NOITAMROFNI'],
      explanation:
        '슬라이싱은 [시작:끝:간격] 형태이고, 시작과 끝을 비우면 "처음부터 끝까지"입니다. INFORMATION(11글자)의 인덱스는 0:I, 1:N, 2:F, 3:O, 4:R, 5:M, 6:A, 7:T, 8:I, 9:O, 10:N입니다. s[::2]는 두 칸씩 건너뛰며 0, 2, 4, 6, 8, 10번을 뽑아 I·F·R·A·I·N = "IFRAIN"입니다. s[::-1]은 간격이 -1이라 뒤에서부터 한 글자씩, 즉 문자열을 통째로 뒤집어 "NOITAMROFNI"가 됩니다. 실기에서 가장 자주 나오는 뒤집기 패턴입니다.',
    },
    {
      id: 'py-r5',
      topic: '문자열 슬라이싱·인덱싱',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `s = 'PYTHONEXAM'
print(s[3:-2])
print(s[-4:])
print(s[1:8:3])`,
      answer: 'HONEX\nEXAM\nYOX',
      alternativeAnswers: ['HONEX EXAM YOX'],
      explanation:
        'PYTHONEXAM(10글자)의 인덱스는 0:P, 1:Y, 2:T, 3:H, 4:O, 5:N, 6:E, 7:X, 8:A, 9:M입니다. 음수 인덱스는 뒤에서 세므로 -2는 8번(A), -4는 6번(E)과 같습니다. s[3:-2]는 3번부터 8번 직전(7번)까지 → H·O·N·E·X = "HONEX". s[-4:]는 6번부터 끝까지 → E·X·A·M = "EXAM". s[1:8:3]은 1번부터 8번 직전까지 3칸 간격으로 1, 4, 7번 → Y·O·X = "YOX"입니다.',
    },
    {
      id: 'py-r6',
      topic: '리스트와 메서드',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [10, 20, 30]
a.append(40)
a.pop(1)
print(a)
print(len(a))`,
      answer: '[10, 30, 40]\n3',
      alternativeAnswers: ['[10,30,40] 3', '[10, 30, 40] 3'],
      explanation:
        'append(40)는 리스트 맨 뒤에 40을 붙여 [10, 20, 30, 40]이 됩니다. pop(1)은 "1번 인덱스의 값"을 꺼내서 제거합니다. 인덱스는 0부터 시작하므로 1번은 20이고, 20이 빠져 [10, 30, 40]이 남습니다. len(a)는 원소 개수이므로 3입니다. pop(1)이 "값 1을 지운다"가 아니라 "1번 자리를 지운다"는 점이 함정입니다.',
    },
    {
      id: 'py-r7',
      topic: '리스트와 메서드',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [5, 2, 9, 1]
a.sort()
a.reverse()
print(a[0] + a[-1])
b = sorted(a)
print(b[0])`,
      answer: '10\n1',
      alternativeAnswers: ['10 1'],
      explanation:
        'a.sort()는 리스트 자기 자신을 오름차순으로 바꿔 [1, 2, 5, 9]가 되고, a.reverse()로 뒤집어 [9, 5, 2, 1]이 됩니다. a[0]은 9, a[-1](마지막)은 1이라 9 + 1 = 10을 출력합니다. sorted(a)는 a는 그대로 두고 정렬된 "새 리스트"를 돌려주므로 b는 [1, 2, 5, 9]이고 b[0]은 1입니다. sort()는 원본을 바꾸고 sorted()는 새로 만든다는 차이가 핵심입니다.',
    },
    {
      id: 'py-r8',
      topic: '리스트와 메서드',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [1, 2, 3]
b = a
c = a[:]
b.append(4)
c.append(5)
print(a)
print(c)`,
      answer: '[1, 2, 3, 4]\n[1, 2, 3, 5]',
      alternativeAnswers: ['[1,2,3,4] [1,2,3,5]', '[1, 2, 3, 4] [1, 2, 3, 5]'],
      explanation:
        'b = a는 리스트를 복사하는 것이 아니라 "같은 리스트에 이름표를 하나 더 붙이는 것"입니다. 그래서 b.append(4)를 하면 a도 [1, 2, 3, 4]로 함께 바뀝니다. 반면 c = a[:]는 슬라이싱으로 내용을 통째로 복사한 "새 리스트"를 만듭니다. 이때 a는 아직 [1, 2, 3]이었으므로 c도 [1, 2, 3]에서 시작하고, c.append(5)는 c에만 적용되어 [1, 2, 3, 5]가 됩니다. a에는 4가 붙었지만 5는 없다는 점이 함정입니다.',
    },
    {
      id: 'py-r9',
      topic: '딕셔너리·튜플·집합',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `d = {'a': 1, 'b': 2}
d['c'] = 3
d['a'] = d['a'] + d['b']
print(d['a'])
print(len(d))
print(sum(d.values()))`,
      answer: '3\n3\n8',
      alternativeAnswers: ['3 3 8'],
      explanation:
        "딕셔너리는 키(이름표)로 값을 찾는 자료형입니다. d['c'] = 3은 없던 키 'c'를 새로 추가해 {'a': 1, 'b': 2, 'c': 3}이 됩니다. d['a'] = d['a'] + d['b']는 1 + 2 = 3을 다시 'a'에 저장하므로 d['a']는 3입니다. len(d)는 키의 개수라 3이고, d.values()는 값들의 모음 (3, 2, 3)이므로 sum은 3 + 2 + 3 = 8입니다.",
    },
    {
      id: 'py-r10',
      topic: '딕셔너리·튜플·집합',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(a & b)
print(len(a | b))
t = (1, 2, 3)
print(t[1] + max(t))`,
      answer: '{3, 4}\n5\n5',
      alternativeAnswers: ['{3,4} 5 5', '{3, 4} 5 5'],
      explanation:
        '집합(set)은 중복이 없는 모음이고, & 는 교집합, | 는 합집합입니다. a와 b에 모두 있는 값은 3과 4이므로 a & b는 {3, 4}입니다. 합집합은 {1, 2, 3, 4, 5}로 중복된 3, 4는 한 번만 세어 len은 5입니다. 튜플 t = (1, 2, 3)에서 t[1]은 두 번째 값 2이고 max(t)는 가장 큰 값 3이므로 2 + 3 = 5를 출력합니다.',
    },
    {
      id: 'py-r11',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `nums = [1, 2, 3, 4, 5, 6]
result = [n * n for n in nums if n % 2 == 0]
print(result)
print(sum(result))`,
      answer: '[4, 16, 36]\n56',
      alternativeAnswers: ['[4,16,36] 56', '[4, 16, 36] 56'],
      explanation:
        '리스트 컴프리헨션은 "조건에 맞는 것만 골라 가공해서 새 리스트를 만드는 한 줄 문법"입니다. 오른쪽 if부터 봅니다. n % 2 == 0은 2로 나눈 나머지가 0, 즉 짝수만 통과시키므로 2, 4, 6이 남습니다. 각각 n * n(제곱)으로 가공하면 4, 16, 36이라 result는 [4, 16, 36]입니다. sum은 전부 더한 값이므로 4 + 16 + 36 = 56입니다.',
    },
    {
      id: 'py-r12',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [1, 2, 3, 4]
b = list(map(lambda x: x * 2, a))
c = list(filter(lambda x: x > 4, b))
print(c)
d = list(zip(a, b))
print(d[1])`,
      answer: '[6, 8]\n(2, 4)',
      alternativeAnswers: ['[6,8] (2,4)', '[6, 8] (2, 4)'],
      explanation:
        'lambda x: x * 2는 "받은 값을 2배로 돌려주는 이름 없는 함수"입니다. map은 리스트의 모든 원소에 이 함수를 적용하므로 b = [2, 4, 6, 8]입니다. filter는 조건(x > 4)이 참인 것만 남기므로 c = [6, 8]입니다(4는 "4보다 큼"이 아니라 탈락). zip은 두 리스트를 같은 위치끼리 짝지어 (1, 2), (2, 4), (3, 6), (4, 8)을 만들고, d[1]은 그중 두 번째 짝인 (2, 4)입니다.',
    },
    {
      id: 'py-r13',
      topic: '함수·재귀·스코프',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `def calc(a, b=3):
    return a * b

print(calc(4))
print(calc(2, 5))`,
      answer: '12\n10',
      alternativeAnswers: ['12 10'],
      explanation:
        'b=3은 "기본 인자"로, 호출할 때 b를 주지 않으면 자동으로 3이 들어갑니다. calc(4)는 a=4, b=3이 되어 4 × 3 = 12입니다. calc(2, 5)는 b 자리에 5를 직접 넘겼으므로 기본값 3은 무시되고 2 × 5 = 10입니다. 기본값은 "안 줬을 때만" 쓰인다는 것이 포인트입니다.',
    },
    {
      id: 'py-r14',
      topic: '함수·재귀·스코프',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `count = 0

def f(n):
    global count
    count = count + 1
    if n <= 1:
        return 1
    return n * f(n - 1)

print(f(4))
print(count)`,
      answer: '24\n4',
      alternativeAnswers: ['24 4'],
      explanation:
        'f는 자기 자신을 다시 부르는 재귀 함수이고, global count 덕분에 함수 밖의 count를 직접 늘릴 수 있습니다. 호출을 따라가면 f(4) = 4 × f(3), f(3) = 3 × f(2), f(2) = 2 × f(1), f(1)은 n <= 1이라 1을 반환합니다. 거꾸로 계산하면 2 × 1 = 2, 3 × 2 = 6, 4 × 6 = 24 → 팩토리얼 4! = 24입니다. 함수는 f(4), f(3), f(2), f(1) 총 4번 호출되었고 매번 count가 1씩 늘어 count는 4입니다.',
    },
    {
      id: 'py-r15',
      topic: '클래스',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        return 'soundless'

class Dog(Animal):
    def sound(self):
        return 'bark'

d = Dog('Coco')
print(d.name, d.sound())`,
      answer: 'Coco bark',
      alternativeAnswers: ['Coco bark'],
      explanation:
        "Dog(Animal)은 Dog가 Animal을 물려받는(상속) 선언입니다. Dog('Coco')를 만들 때 Dog에는 __init__이 없으므로 부모 Animal의 __init__이 대신 실행되어 self.name에 'Coco'가 저장됩니다. d.sound()를 부르면 파이썬은 먼저 Dog 안에서 sound를 찾고, Dog가 자신만의 sound를 갖고 있으므로(오버라이딩) 부모 것 대신 'bark'를 돌려줍니다. 그래서 \"Coco bark\"가 출력됩니다.",
    },
  ],
}

export const sqlLang: CodeReadingLanguage = {
  id: 'sql',
  name: 'SQL',
  icon: 'fa-solid fa-table',
  description:
    '테이블 데이터를 보고 SQL 실행 결과(값·건수)를 단답으로 예측합니다. 집계함수와 JOIN 결과 계산이 실기 최빈출입니다.',
  questions: [
    {
      id: 'sql-r1',
      topic: 'SELECT·WHERE 조건',
      difficulty: 'easy',
      question: '다음 SQL의 실행 결과(값)를 쓰시오.',
      code: `[EMP]
ENAME | DEPT | SAL
------+------+-----
KIM   | 10   | 300
LEE   | 20   | 250
PARK  | 10   | 400
CHOI  | 30   | 350

SELECT COUNT(*) FROM EMP WHERE SAL >= 300;`,
      answer: '3',
      alternativeAnswers: ['3건', '3개'],
      explanation:
        'WHERE SAL >= 300은 급여가 300 이상인 행만 고릅니다. 한 행씩 확인하면 KIM 300(이상이므로 포함), LEE 250(탈락), PARK 400(포함), CHOI 350(포함)입니다. COUNT(*)는 조건을 통과한 행의 개수를 세므로 결과는 3입니다. >= 는 경계값 300도 포함한다는 점에 주의합니다.',
    },
    {
      id: 'sql-r2',
      topic: 'LIKE·BETWEEN 조건',
      difficulty: 'easy',
      question: '다음 SQL의 실행 결과(값)를 쓰시오.',
      code: `[STUDENT]
SNAME | SCORE
------+------
KANG  | 85
KO    | 70
SEO   | 92
KWON  | 60

SELECT COUNT(*) FROM STUDENT
WHERE SNAME LIKE 'K%' AND SCORE BETWEEN 70 AND 90;`,
      answer: '2',
      alternativeAnswers: ['2건', '2개'],
      explanation:
        "LIKE 'K%'는 K로 시작하는 모든 이름을 뜻합니다(%는 글자 수 상관없이 아무 문자). 통과: KANG, KO, KWON / 탈락: SEO. BETWEEN 70 AND 90은 70 이상 90 이하로, 양 끝값을 모두 포함합니다. KANG 85(포함), KO 70(경계값이라 포함), KWON 60(탈락)입니다. 두 조건을 AND로 모두 만족하는 행은 KANG, KO 2건입니다.",
    },
    {
      id: 'sql-r3',
      topic: '집계함수 SUM',
      difficulty: 'easy',
      question: '다음 SQL의 실행 결과(값)를 쓰시오.',
      code: `[SALES]
ITEM | QTY | PRICE
-----+-----+------
PEN  | 3   | 500
BOOK | 2   | 1000
PEN  | 5   | 500

SELECT SUM(QTY) FROM SALES WHERE ITEM = 'PEN';`,
      answer: '8',
      alternativeAnswers: ['8개'],
      explanation:
        "WHERE ITEM = 'PEN'으로 먼저 PEN 행만 고릅니다. 1행(QTY 3)과 3행(QTY 5)이 남고 BOOK 행은 제외됩니다. SUM(QTY)은 남은 행들의 QTY를 모두 더하므로 3 + 5 = 8입니다. WHERE로 거른 다음에 집계한다는 순서가 핵심입니다.",
    },
    {
      id: 'sql-r4',
      topic: 'GROUP BY·HAVING',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 행(튜플)의 수를 쓰시오.',
      code: `[ORDERS]
CUST | AMOUNT
-----+-------
A    | 100
B    | 200
A    | 300
C    | 150
B    | 250

SELECT CUST, SUM(AMOUNT) FROM ORDERS
GROUP BY CUST
HAVING SUM(AMOUNT) >= 400;`,
      answer: '2',
      alternativeAnswers: ['2건', '2행', '2개'],
      explanation:
        'GROUP BY CUST는 고객별로 행을 묶습니다. A그룹: 100 + 300 = 400, B그룹: 200 + 250 = 450, C그룹: 150. HAVING은 이렇게 "묶은 결과"에 거는 조건으로, SUM(AMOUNT) >= 400을 만족하는 그룹만 남깁니다. A(400, 경계값 포함)와 B(450)는 통과, C(150)는 탈락입니다. 따라서 조회되는 행은 A와 B, 2건입니다. WHERE는 묶기 전 개별 행에, HAVING은 묶은 후 그룹에 거는 조건이라는 차이를 기억합니다.',
    },
    {
      id: 'sql-r5',
      topic: '집계함수 AVG',
      difficulty: 'medium',
      question: '다음 SQL의 실행 결과(값)를 쓰시오.',
      code: `[EXAM]
DEPT | SCORE
-----+------
CS   | 80
CS   | 90
EE   | 70
EE   | 60
CS   | 70

SELECT AVG(SCORE) FROM EXAM WHERE DEPT = 'CS';`,
      answer: '80',
      alternativeAnswers: ['80점', '80.0'],
      explanation:
        "WHERE DEPT = 'CS'로 CS 학과 행만 고르면 80, 90, 70 세 건이 남습니다(EE 행 70, 60은 제외). AVG는 평균이므로 (80 + 90 + 70) ÷ 3 = 240 ÷ 3 = 80입니다. 전체 5건의 평균(74)이 아니라 조건으로 거른 뒤의 평균이라는 점이 함정입니다.",
    },
    {
      id: 'sql-r6',
      topic: 'INNER JOIN',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 행(튜플)의 수를 쓰시오.',
      code: `[EMP]              [DEPT]
ENAME | DNO        DNO | DNAME
------+-----       ----+-------
KIM   | 10         10  | PLAN
LEE   | 20         20  | DEV
PARK  | 10         40  | HR
CHOI  | 30

SELECT COUNT(*)
FROM EMP E INNER JOIN DEPT D ON E.DNO = D.DNO;`,
      answer: '3',
      alternativeAnswers: ['3건', '3행', '3개'],
      explanation:
        'INNER JOIN은 양쪽 테이블에 짝(같은 DNO)이 있는 행만 결과에 남깁니다. 한 명씩 확인하면 KIM(DNO 10)은 DEPT에 10이 있어 연결, LEE(20)도 연결, PARK(10)도 연결, CHOI(30)는 DEPT에 30이 없어 탈락입니다. DEPT의 40(HR)도 사원이 없어 결과에 나오지 않습니다. 따라서 연결된 행은 3건입니다.',
    },
    {
      id: 'sql-r7',
      topic: 'LEFT OUTER JOIN',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 행(튜플)의 수를 쓰시오.',
      code: `[EMP]              [DEPT]
ENAME | DNO        DNO | DNAME
------+-----       ----+-------
KIM   | 10         10  | PLAN
LEE   | 20         20  | DEV
PARK  | 10         40  | HR
CHOI  | 30

SELECT E.ENAME, D.DNAME
FROM EMP E LEFT OUTER JOIN DEPT D ON E.DNO = D.DNO;`,
      answer: '4',
      alternativeAnswers: ['4건', '4행', '4개'],
      explanation:
        'LEFT OUTER JOIN은 왼쪽 테이블(EMP)의 행을 "짝이 없어도 전부" 남기는 조인입니다. KIM, LEE, PARK는 DEPT와 정상 연결되고, CHOI(DNO 30)는 짝이 없지만 버려지지 않고 DNAME 자리에 NULL이 채워진 채 남습니다. 그래서 결과는 EMP의 행 수와 같은 4건입니다. INNER JOIN이면 3건(sql-r6), LEFT OUTER JOIN이면 4건이 되는 차이가 실기 단골 포인트입니다.',
    },
    {
      id: 'sql-r8',
      topic: '서브쿼리·IN',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 PNAME을 모두 쓰시오.',
      code: `[PROD]             [ORDER_T]
PNO | PNAME        ONO | PNO
----+--------      ----+----
1   | MONITOR      101 | 1
2   | KEYBOARD     102 | 3
3   | MOUSE        103 | 1

SELECT PNAME FROM PROD
WHERE PNO IN (SELECT PNO FROM ORDER_T);`,
      answer: 'MONITOR, MOUSE',
      alternativeAnswers: ['MONITOR MOUSE', 'MONITOR,MOUSE', 'MOUSE, MONITOR', 'MOUSE MONITOR'],
      explanation:
        '괄호 안의 서브쿼리를 먼저 계산합니다. SELECT PNO FROM ORDER_T의 결과는 1, 3, 1입니다(중복 있어도 무방). 바깥 쿼리는 WHERE PNO IN (1, 3)이 되어 상품번호가 1 또는 3인 상품만 고릅니다. PNO 1은 MONITOR, PNO 3은 MOUSE이고, PNO 2(KEYBOARD)는 주문된 적이 없어 탈락합니다. 즉 "주문이 한 번이라도 있는 상품"만 조회되어 MONITOR, MOUSE입니다.',
    },
    {
      id: 'sql-r9',
      topic: '서브쿼리(스칼라)',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 ENAME을 모두 쓰시오.',
      code: `[EMP]
ENAME | SAL
------+-----
KIM   | 300
LEE   | 250
PARK  | 400
CHOI  | 350

SELECT ENAME FROM EMP
WHERE SAL > (SELECT AVG(SAL) FROM EMP);`,
      answer: 'PARK, CHOI',
      alternativeAnswers: ['PARK CHOI', 'PARK,CHOI', 'CHOI, PARK', 'CHOI PARK'],
      explanation:
        '서브쿼리 (SELECT AVG(SAL) FROM EMP)를 먼저 계산합니다. 평균 급여는 (300 + 250 + 400 + 350) ÷ 4 = 1300 ÷ 4 = 325입니다. 바깥 쿼리는 WHERE SAL > 325가 되어 평균보다 급여가 높은 사원만 고릅니다. KIM 300(탈락), LEE 250(탈락), PARK 400(통과), CHOI 350(통과)이므로 PARK, CHOI가 조회됩니다. "평균보다 높은/낮은 행 찾기"는 스칼라 서브쿼리의 대표 유형입니다.',
    },
    {
      id: 'sql-r10',
      topic: 'DML(UPDATE·DELETE)',
      difficulty: 'hard',
      question: '다음 SQL을 순서대로 모두 실행한 후, 마지막 SELECT의 결과(값)를 쓰시오.',
      code: `[BOARD]
BNO | HIT
----+-----
1   | 10
2   | 20
3   | 30

UPDATE BOARD SET HIT = HIT + 5 WHERE BNO >= 2;
DELETE FROM BOARD WHERE HIT > 30;
SELECT SUM(HIT) FROM BOARD;`,
      answer: '35',
      alternativeAnswers: [],
      explanation:
        '순서대로 따라갑니다. (1) UPDATE: BNO가 2 이상인 행의 HIT에 5를 더합니다. BNO 1은 그대로 10, BNO 2는 20 + 5 = 25, BNO 3은 30 + 5 = 35가 됩니다. (2) DELETE: HIT > 30인 행을 지웁니다. 35인 BNO 3만 해당되어 삭제됩니다(25, 10은 30보다 크지 않아 생존). (3) 남은 행은 BNO 1(10)과 BNO 2(25)이고 SUM(HIT) = 10 + 25 = 35입니다. UPDATE로 값이 바뀐 "후"의 상태에 DELETE 조건이 적용된다는 순서가 함정입니다.',
    },
    {
      id: 'sql-r11',
      topic: 'DCL(GRANT)',
      difficulty: 'easy',
      question:
        '사용자 U1에게 STUDENT 테이블의 조회(검색) 권한을 부여하려고 한다. 빈칸에 들어갈 명령어를 쓰시오.',
      code: `( 빈칸 ) SELECT ON STUDENT TO U1;`,
      answer: 'GRANT',
      alternativeAnswers: ['grant'],
      explanation:
        'DCL(데이터 제어어)에서 권한을 "주는" 명령어는 GRANT, "빼앗는" 명령어는 REVOKE입니다. 문법은 GRANT 권한 ON 테이블 TO 사용자 형태로, 여기서는 GRANT SELECT ON STUDENT TO U1;이 됩니다. 참고로 회수는 REVOKE SELECT ON STUDENT FROM U1;처럼 TO 대신 FROM을 쓴다는 것도 함께 기억해 두면 좋습니다.',
    },
    {
      id: 'sql-r12',
      topic: 'DDL·제약조건',
      difficulty: 'hard',
      question:
        '다음 SQL을 순서대로 실행할 때, 마지막 SELECT의 결과(값)를 쓰시오. (제약조건 위반 INSERT는 실패하고 나머지는 계속 실행된다)',
      code: `CREATE TABLE MEMBER (
  MID VARCHAR(10) PRIMARY KEY,
  AGE INT CHECK (AGE >= 19)
);

INSERT INTO MEMBER VALUES ('A01', 25);
INSERT INTO MEMBER VALUES ('A01', 30);
INSERT INTO MEMBER VALUES ('B02', 15);
INSERT INTO MEMBER VALUES ('C03', 40);

SELECT COUNT(*) FROM MEMBER;`,
      answer: '2',
      alternativeAnswers: ['2건', '2개', '2행'],
      explanation:
        "INSERT를 한 건씩 제약조건과 대조합니다. (1) ('A01', 25): 처음 들어가는 키이고 25는 19 이상이라 성공. (2) ('A01', 30): PRIMARY KEY는 중복을 허용하지 않는데 'A01'이 이미 있으므로 실패. (3) ('B02', 15): CHECK (AGE >= 19)를 위반(15는 19 미만)해 실패. (4) ('C03', 40): 키도 새롭고 나이도 조건을 만족해 성공. 결국 테이블에는 'A01'과 'C03' 2건만 남아 COUNT(*)는 2입니다. PRIMARY KEY = 중복·NULL 금지, CHECK = 값의 범위 제한이라는 역할을 구분하는 문제입니다.",
    },
  ],
}
