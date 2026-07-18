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
    // ── 이하: 대표 저작 문제집 「필수 코드 57문제」 수록분 (2026-07-18 반영, 실행 검증 완료) ──
    {
      id: 'py-r16',
      topic: '리스트와 메서드',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
print(a[:7:2])`,
      answer: '[0, 20, 40, 60]',
      alternativeAnswers: ['[0,20,40,60]', '0, 20, 40, 60'],
      explanation:
        '리스트 슬라이싱 [시작:끝:간격]에서 시작이 비어 있으면 0부터, 끝이 7이면 "6번 위치까지", 간격 2는 두 칸씩 건너뛰기입니다. 그래서 인덱스 0, 2, 4, 6의 값인 0, 20, 40, 60이 뽑혀 [0, 20, 40, 60]이 출력됩니다. 끝 위치 7번의 값 70은 포함되지 않는다는 것이 핵심입니다.',
    },
    {
      id: 'py-r17',
      topic: '함수·재귀·스코프',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `def cs(n):
    s = 0
    for num in range(n + 1):
        s += num
    return s

print(cs(11))`,
      answer: '66',
      alternativeAnswers: [],
      explanation:
        'cs(11)을 부르면 n=11이고, range(n + 1) = range(12)는 0부터 11까지를 만듭니다. s에 0+1+2+...+11을 차례로 누적하면 66이 됩니다(등차수열의 합 11×12÷2 = 66). range(n+1)이라서 n인 11까지 포함된다는 점이 핵심이고, 만약 range(n)이었다면 10까지의 합인 55가 되었을 것입니다.',
    },
    {
      id: 'py-r18',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 코드를 실행했을 때 어떤 결과가 나타나는지 쓰시오.',
      code: `while(True):
    print('A')
    print('B')
    print('C')
    continue
    print('D')`,
      answer: 'A, B, C가 무한 반복 출력된다',
      alternativeAnswers: ['A B C 무한 반복', 'A, B, C 출력이 반복된다', 'ABC가 계속 출력된다'],
      explanation:
        'while(True)는 조건이 항상 참이라 블록 안의 코드를 무한 반복합니다. A, B, C를 출력한 뒤 continue를 만나면 "이번 회차의 나머지를 건너뛰고 반복문 처음으로" 돌아가므로, 그 아래에 있는 print(\'D\')는 영원히 실행되지 않습니다. 결국 화면에는 A, B, C 출력이 무한 반복됩니다. continue(처음으로 돌아감)와 break(반복 탈출)의 차이를 묻는 문제입니다.',
    },
    {
      id: 'py-r19',
      topic: '문자열 슬라이싱·인덱싱',
      difficulty: 'medium',
      question:
        '다음은 입력받은 문자열에서 처음 3글자와 끝 3글자를 추출한 후 합쳐서 출력하는 코드이다. ㉠에 들어갈 식을 쓰시오.',
      code: `string = input('7문자 이상 문자열을 입력하시오 :')
m = ( ㉠ )
print(m)`,
      answer: 'string[0:3]+string[-3:]',
      alternativeAnswers: ['string[:3]+string[-3:]', 'string[0:3] + string[-3:]', 'string[:3] + string[-3:]'],
      explanation:
        "처음 3글자는 0, 1, 2번 위치이므로 string[0:3]으로 추출합니다(끝 번호 3은 포함되지 않으므로 딱 3글자이며, 시작의 0은 생략해서 string[:3]으로 써도 같습니다). 끝 3글자는 음수 인덱스로 뒤에서 셉니다. string[-3:]은 뒤에서 세 번째 글자부터 끝까지라는 뜻입니다. 둘을 +로 이으면 string[0:3]+string[-3:]이 됩니다. 예를 들어 'engineers'를 입력하면 eng + ers = engers가 출력됩니다.",
    },
    {
      id: 'py-r20',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = ["대", "한", "민", "국"]
for i in a:
    print(i)`,
      answer: '대\n한\n민\n국',
      alternativeAnswers: ['대 한 민 국'],
      explanation:
        'for i in a: 는 리스트 a의 요소를 하나씩 꺼내 i에 담으며 반복합니다. print(i)는 값을 출력한 뒤 커서를 다음 줄로 옮기므로 대, 한, 민, 국이 한 줄에 하나씩 네 줄로 출력됩니다. 한 줄에 "대한민국"으로 이어 붙이려면 print(i, end="")처럼 end 옵션을 바꿔야 합니다. print는 기본적으로 항상 줄바꿈한다는 것이 포인트입니다.',
    },
    {
      id: 'py-r21',
      topic: '클래스',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `class FourCal:
    def setdata(self, fir, sec):
        self.fir = fir
        self.sec = sec

    def add(self):
        result = self.fir + self.sec
        return result

a = FourCal()
a.setdata(4, 2)
print(a.add())`,
      answer: '6',
      alternativeAnswers: [],
      explanation:
        'a = FourCal()로 객체를 만들고, a.setdata(4, 2)를 부르면 self.fir에 4, self.sec에 2가 저장됩니다. self는 "지금 이 객체 자신(a)"을 가리키는 예약어라서, 메소드가 끝나도 a 객체 안에 fir=4, sec=2가 그대로 남아 있습니다. 이어서 a.add()는 self.fir + self.sec = 4 + 2 = 6을 반환하고, print가 6을 출력합니다. 객체에 값을 넣는 메소드와 꺼내 쓰는 메소드가 self로 연결된다는 것이 핵심입니다.',
    },
    {
      id: 'py-r22',
      topic: '딕셔너리·튜플·집합',
      difficulty: 'easy',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = 100
list_data = ['a', 'b', 'c']
dict_data = {'a': 90, 'b': 95}
print(list_data[0])
print(dict_data['a'])`,
      answer: 'a\n90',
      alternativeAnswers: ['a 90'],
      explanation:
        "list_data[0]은 리스트의 첫 번째 요소이므로 문자 a가 출력됩니다(변수 a의 값 100이 아니라 문자열 'a'라는 점이 함정입니다). dict_data['a']는 딕셔너리에서 키 'a'에 해당하는 값이므로 90이 출력됩니다. 리스트는 위치(숫자 인덱스)로, 딕셔너리는 키로 값을 찾는다는 차이를 확인하는 문제입니다.",
    },
    {
      id: 'py-r23',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 코드의 실행 결과가 20일 때, 빈칸에 들어갈 예약어를 쓰시오.',
      code: `x = 20
if x == 10:
    print('10')
( 빈칸 ) x == 20:
    print('20')
else:
    print('other')`,
      answer: 'elif',
      alternativeAnswers: ['ELIF'],
      explanation:
        'Python에서 if문에 조건을 추가할 때 쓰는 예약어는 elif입니다. 다른 언어의 else if를 줄인 형태이며, Python에는 else if라는 표기가 없습니다. 흐름을 따라가면 x=20이므로 첫 조건 x == 10은 거짓이고, elif x == 20이 참이 되어 20이 출력됩니다. 어느 조건도 맞지 않았다면 else의 other가 출력되었을 것입니다.',
    },
    {
      id: 'py-r24',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'medium',
      question: "다음 코드를 실행하고 '53t44'를 입력했을 때의 출력 결과를 쓰시오.",
      code: `a, b = map(int, input().split("t"))
print(a, b)`,
      answer: '53 44',
      alternativeAnswers: [],
      explanation:
        'input()으로 받은 "53t44"를 split("t")가 문자 t를 기준으로 ["53", "44"]로 나누고, map(int, ...)이 각각을 정수 53과 44로 바꿔 a와 b에 나누어 저장합니다. print(a, b)는 여러 값을 공백 한 칸으로 구분해 출력하므로 53 44가 됩니다. split의 기준 문자를 생략하면 공백을 기준으로 나눈다는 것도 함께 기억해 두세요.',
    },
    // ── 심화 보강분 (py-r25~34, 2026-07-18): 전 문제 python3 실행으로 출력 검증 완료 ──
    {
      id: 'py-r25',
      topic: '딕셔너리·튜플·집합',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a & b), sorted(a - b))
print(sorted(a ^ b))
d = {'x': 1, 'y': 2}
d['z'] = d.pop('x') + 3
print(d['z'], len(d))`,
      answer: '[3, 4] [1, 2]\n[1, 2, 5]\n4 2',
      alternativeAnswers: ['[3, 4] [1, 2] [1, 2, 5] 4 2', '[3,4] [1,2] [1,2,5] 4 2'],
      explanation:
        "집합 연산 기호를 하나씩 풉니다. & 는 교집합이라 a & b = {3, 4}, - 는 차집합이라 a - b = a에만 있는 {1, 2}, ^ 는 대칭차(한쪽에만 있는 것)라 {1, 2, 5}입니다. 집합은 순서가 없으므로 sorted()로 리스트로 바꿔 [3, 4], [1, 2], [1, 2, 5]가 출력됩니다. 딕셔너리 부분: d.pop('x')는 키 'x'를 지우면서 그 값 1을 돌려주므로 d['z'] = 1 + 3 = 4가 되고, d는 {'y': 2, 'z': 4}로 키가 2개입니다. 그래서 마지막 줄은 4 2입니다. pop이 \"지우기만\" 하는 게 아니라 \"값을 돌려준다\"는 것이 함정입니다.",
    },
    {
      id: 'py-r26',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `m = [[1, 2, 3], [4, 5, 6]]
a = [x for row in m for x in row if x % 2 == 0]
b = [[x * 2 for x in row] for row in m]
print(a)
print(b[1][0])`,
      answer: '[2, 4, 6]\n8',
      alternativeAnswers: ['[2, 4, 6] 8', '[2,4,6] 8'],
      explanation:
        '컴프리헨션의 for가 두 개면 왼쪽이 바깥 반복, 오른쪽이 안쪽 반복입니다. a는 m의 각 행(row)에서 원소 x를 하나씩 꺼내며 짝수만 모으므로 1~6 중 [2, 4, 6]이 됩니다(이중 리스트가 한 줄로 펴집니다). b는 모양이 다릅니다. 바깥 대괄호 안에 또 컴프리헨션이 있어서 "행마다 새 리스트"를 만들므로 [[2, 4, 6], [8, 10, 12]]로 이중 구조가 유지됩니다. b[1][0]은 두 번째 행의 첫 원소인 8입니다. for 두 개를 나란히 쓰면 평탄화, 대괄호를 겹치면 구조 유지 — 이 차이가 핵심입니다.',
    },
    {
      id: 'py-r27',
      topic: '문자열 메서드 체인',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `s = '  Hello,Python,World  '
t = s.strip().lower().split(',')
print(t[1])
print('-'.join(t).upper())
print(s.strip().replace('o', '0').count('0'))`,
      answer: 'python\nHELLO-PYTHON-WORLD\n3',
      alternativeAnswers: ['python HELLO-PYTHON-WORLD 3'],
      explanation:
        "메서드가 점(.)으로 이어지면 왼쪽부터 차례로 적용합니다. (1) strip()이 양끝 공백을 지워 'Hello,Python,World', lower()가 소문자로 바꿔 'hello,python,world', split(',')가 콤마 기준으로 ['hello', 'python', 'world']를 만듭니다. t[1]은 'python'입니다. (2) '-'.join(t)는 리스트를 - 로 이어 'hello-python-world', upper()로 대문자가 되어 HELLO-PYTHON-WORLD입니다. (3) 마지막 줄은 소문자로 바꾸지 않은 원본(strip만 적용)에서 소문자 o만 0으로 바꿉니다. Hello의 o, Python의 o, World의 o 세 개가 바뀌므로 count('0')는 3입니다. 대문자 O가 아니라 소문자 o만 바뀐다는 점, 그리고 문자열 메서드는 원본을 바꾸지 않고 새 문자열을 돌려준다는 점이 포인트입니다.",
    },
    {
      id: 'py-r28',
      topic: '문자열 슬라이싱·인덱싱',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a = [10, 20, 30, 40, 50]
print(a[1:10])
print(a[::-2])
print(a[3:1:-1])
s = 'PYTHON'
print(s[4:1:-1] + s[-2:])`,
      answer: '[20, 30, 40, 50]\n[50, 30, 10]\n[40, 30]\nOHTON',
      alternativeAnswers: ['[20, 30, 40, 50] [50, 30, 10] [40, 30] OHTON', '[20,30,40,50] [50,30,10] [40,30] OHTON'],
      explanation:
        '슬라이싱 함정 4연속입니다. (1) a[1:10] : 끝 번호가 길이(5)를 넘어도 오류가 나지 않고 있는 데까지만 잘라 [20, 30, 40, 50]입니다. (2) a[::-2] : 간격이 -2라 맨 뒤에서부터 두 칸씩 거꾸로 → 50, 30, 10. (3) a[3:1:-1] : 3번(40)에서 출발해 거꾸로 가되 끝 번호 1은 포함하지 않으므로 40, 30 두 개만 나옵니다. (4) PYTHON에서 s[4:1:-1]은 4번(O), 3번(H), 2번(T)으로 OHT이고, s[-2:]는 뒤에서 두 글자 ON이라 이어 붙이면 OHTON입니다. 간격이 음수면 시작이 끝보다 커야 하고, 끝 번호는 방향과 상관없이 항상 제외된다는 두 가지가 핵심입니다.',
    },
    {
      id: 'py-r29',
      topic: '함수·재귀·스코프',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `def add(x, data=[]):
    data.append(x)
    return data

a = add(1)
b = add(2)
c = add(3, [])
print(a)
print(b)
print(c)
print(a is b)`,
      answer: '[1, 2]\n[1, 2]\n[3]\nTrue',
      alternativeAnswers: ['[1, 2] [1, 2] [3] True', '[1,2] [1,2] [3] True'],
      explanation:
        '기본값 data=[]의 빈 리스트는 "호출할 때마다" 새로 만들어지는 것이 아니라 "함수를 정의할 때 딱 한 번" 만들어져 계속 재사용됩니다. add(1)은 그 공용 리스트에 1을 넣어 [1]을 돌려주고, add(2)는 같은 리스트에 2를 더 넣어 [1, 2]가 됩니다. a와 b는 같은 리스트를 가리키므로 둘 다 [1, 2]로 출력되고 a is b는 True입니다. add(3, [])만 새 리스트를 직접 넘겼기 때문에 c는 [3]입니다. 가변 객체(리스트·딕셔너리)를 기본 인자로 쓰면 호출 사이에 값이 누적되는 이 현상이 파이썬의 대표 함정입니다.',
    },
    {
      id: 'py-r30',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `names = ['kim', 'lee', 'park']
scores = [80, 95, 70]
total = 0
for i, (n, s) in enumerate(zip(names, scores), start=1):
    if i % 2 == 1:
        total += s
print(total)
print(list(zip(names, scores))[1])`,
      answer: "150\n('lee', 95)",
      alternativeAnswers: ["150 ('lee', 95)", "150 ('lee',95)"],
      explanation:
        "zip(names, scores)는 두 리스트를 같은 위치끼리 짝지어 ('kim', 80), ('lee', 95), ('park', 70)을 만들고, enumerate(..., start=1)은 여기에 1부터 번호를 붙입니다. 반복을 따라가면 i=1(kim, 80)은 홀수라 total=80, i=2(lee, 95)는 짝수라 건너뛰고, i=3(park, 70)은 홀수라 total=150이 됩니다. 마지막 줄은 zip 결과를 리스트로 바꾼 뒤 1번 인덱스를 꺼내므로 튜플 ('lee', 95)가 그대로 출력됩니다. enumerate의 시작 번호를 start로 바꿀 수 있다는 것과, zip의 결과 하나하나가 튜플이라는 것이 포인트입니다.",
    },
    {
      id: 'py-r31',
      topic: '클래스',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `class A:
    def __init__(self):
        self.n = 1
    def show(self):
        return 'A' + str(self.n)

class B(A):
    def __init__(self):
        super().__init__()
        self.n += 2
    def show(self):
        return 'B' + super().show()

b = B()
print(b.show())
print(b.n)`,
      answer: 'BA3\n3',
      alternativeAnswers: ['BA3 3'],
      explanation:
        "b = B()를 만들면 B의 __init__이 실행됩니다. 먼저 super().__init__()이 부모 A의 __init__을 호출해 self.n = 1이 되고, 이어서 self.n += 2로 n은 3이 됩니다(super()는 \"부모 클래스의 메소드를 빌려 쓰는\" 통로입니다). b.show()는 자식 B의 show가 실행되어 'B' 뒤에 super().show(), 즉 부모 A의 show 결과를 붙입니다. 이때 A의 show 안의 self는 여전히 b 자신이므로 self.n은 3이고, 'A' + '3' = 'A3'이 돌아와 최종 BA3이 출력됩니다. 부모 메소드를 호출해도 self는 바뀌지 않는다 — 이것이 상속 문제의 핵심입니다.",
    },
    {
      id: 'py-r32',
      topic: '예외 처리',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `def calc(a, b):
    try:
        r = a // b
    except ZeroDivisionError:
        return 'E'
    else:
        return r
    finally:
        print('F', end='')

print(calc(7, 2))
print(calc(5, 0))`,
      answer: 'F3\nFE',
      alternativeAnswers: ['F3 FE'],
      explanation:
        "try 구문의 네 형제를 정리하면, except는 \"오류가 났을 때\", else는 \"오류가 안 났을 때\", finally는 \"어느 쪽이든 마지막에 반드시\" 실행됩니다. calc(7, 2)는 7 // 2 = 3이 정상 계산되어 else의 return 3으로 가는데, 함수가 값을 돌려주기 \"직전\"에 finally가 먼저 실행되어 F를 출력합니다(end=''라 줄바꿈 없음). 그래서 F 바로 뒤에 print가 3을 붙여 F3이 됩니다. calc(5, 0)은 0으로 나눠 ZeroDivisionError가 나므로 except의 return 'E'로 가고, 역시 finally의 F가 먼저 찍혀 FE가 됩니다. return이 있어도 finally는 건너뛸 수 없다는 것이 이 문제의 전부입니다.",
    },
    {
      id: 'py-r33',
      topic: '컴프리헨션·람다·내장함수',
      difficulty: 'hard',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `data = [('kim', 88), ('lee', 92), ('park', 88), ('choi', 95)]
data.sort(key=lambda x: (-x[1], x[0]))
print(data[0][0], data[1][0])
names = sorted(['banana', 'kiwi', 'apple'], key=len)
print(names)`,
      answer: "choi lee\n['kiwi', 'apple', 'banana']",
      alternativeAnswers: ["choi lee ['kiwi', 'apple', 'banana']", "choi lee ['kiwi','apple','banana']"],
      explanation:
        'sort의 key는 "무엇을 기준으로 줄 세울지"를 정하는 함수입니다. lambda x: (-x[1], x[0])은 점수에 마이너스를 붙인 값을 1순위, 이름을 2순위로 하는 튜플을 만듭니다. 점수에 -를 붙이면 큰 점수일수록 작은 값이 되어 오름차순 정렬로도 점수 내림차순이 됩니다. 정렬 결과는 choi(95) → lee(92) → kim(88) → park(88, 동점은 이름 오름차순) 순서라 data[0][0]은 choi, data[1][0]은 lee입니다. 두 번째 정렬은 key=len이라 글자 수 기준으로 kiwi(4) → apple(5) → banana(6)이 됩니다. key 함수의 반환값끼리 비교한다는 원리만 잡으면 어떤 변형도 풀 수 있습니다.',
    },
    {
      id: 'py-r34',
      topic: '함수·재귀·스코프',
      difficulty: 'medium',
      question: '다음 코드의 출력 결과를 쓰시오.',
      code: `a, *b, c = [1, 2, 3, 4, 5]
print(b, a + c)

def f(*args, **kwargs):
    return len(args) + len(kwargs)

print(f(1, 2, 3, x=10, y=20))
x, y = 5, 10
x, y = y, x + y
print(x, y)`,
      answer: '[2, 3, 4] 6\n5\n10 15',
      alternativeAnswers: ['[2, 3, 4] 6 5 10 15', '[2,3,4] 6 5 10 15'],
      explanation:
        '언패킹 3종 세트입니다. (1) a, *b, c = [1, 2, 3, 4, 5] : 별표가 붙은 b가 "남는 것 전부"를 리스트로 가져갑니다. a=1, c=5가 양끝을 먼저 차지하고 b=[2, 3, 4]가 되어, b와 a + c = 6이 출력됩니다. (2) f(1, 2, 3, x=10, y=20) : 위치 인자 1, 2, 3은 args 튜플로(3개), 이름 붙은 인자 x·y는 kwargs 딕셔너리로(2개) 들어가 3 + 2 = 5입니다. (3) x, y = y, x + y : 오른쪽 (10, 5 + 10)이 "먼저 전부 계산"된 뒤 한꺼번에 대입되므로 x=10, y=15입니다. 한 줄 교환·동시 대입은 오른쪽부터 계산된다는 것이 마지막 함정입니다.',
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
    // ── 이하: 대표 저작 문제집 「필수 코드 57문제」 수록분 (2026-07-18 반영, 논리 검증 완료) ──
    {
      id: 'sql-r13',
      topic: '서브쿼리(단일 값)',
      difficulty: 'easy',
      question: '다음 SQL의 실행 결과(값)를 쓰시오.',
      code: `[도서]
책번호 | 책명
-------+------------
111    | 운영체제
222    | 자료구조
333    | 컴퓨터구조

[도서가격]
책번호 | 가격
-------+--------
111    | 20,000
222    | 25,000
333    | 10,000
444    | 15,000

SELECT 가격 FROM 도서가격
WHERE 책번호 = (SELECT 책번호 FROM 도서 WHERE 책명 = '자료구조');`,
      answer: '25000',
      alternativeAnswers: ['25,000', '25000원'],
      explanation:
        "하위 질의가 있는 SQL은 괄호 안부터 계산합니다. (1) SELECT 책번호 FROM 도서 WHERE 책명 = '자료구조' : 도서 테이블에서 책명이 자료구조인 책번호를 찾으면 222입니다. (2) 바깥 질의는 WHERE 책번호 = 222가 되어, 도서가격 테이블에서 책번호 222의 가격인 25,000이 조회됩니다. 하위 질의 → 바깥 질의 순서로 안쪽부터 푸는 것이 요령입니다.",
    },
    {
      id: 'sql-r14',
      topic: 'NULL 조건',
      difficulty: 'easy',
      question:
        '학적 테이블에서 전화번호가 NULL이 아닌 학생명을 모두 검색하려고 한다. 빈칸에 들어갈 조건식을 쓰시오.',
      code: `SELECT 학생명 FROM 학적 WHERE 전화번호 ( 빈칸 );`,
      answer: 'IS NOT NULL',
      alternativeAnswers: ['is not null'],
      explanation:
        'SQL에서 NULL은 "값이 없음"이라는 특수한 상태라서 = 나 != 같은 비교 연산자로는 판별할 수 없습니다. NULL인지 물을 때는 IS NULL, NULL이 아닌지 물을 때는 IS NOT NULL을 사용합니다. 따라서 빈칸에는 IS NOT NULL이 들어가야 전화번호가 입력되어 있는 학생만 조회됩니다. != NULL, NOT NULL 같은 표기는 모두 틀린 문법입니다.',
    },
    {
      id: 'sql-r15',
      topic: '집합 연산자',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 학번을 쓰시오.',
      code: `[R1]
학번     | 학점수
---------+-------
20201111 | 15
20202222 | 20

[R2]
학번     | 과목번호
---------+---------
20202222 | CS200
20203333 | CS300

(SELECT 학번 FROM R1)
INTERSECT
(SELECT 학번 FROM R2);`,
      answer: '20202222',
      alternativeAnswers: [],
      explanation:
        'INTERSECT는 두 SELECT 결과에 공통으로 있는 행만 남기는 집합 연산자(교집합)입니다. R1의 학번은 20201111, 20202222이고 R2의 학번은 20202222, 20203333입니다. 양쪽에 모두 있는 학번은 20202222 하나이므로 결과는 20202222 한 행입니다. 합집합 UNION, 차집합 EXCEPT(오라클은 MINUS)와 한 세트로 기억해 두세요.',
    },
    {
      id: 'sql-r16',
      topic: 'JOIN·복합 조건',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 (과목번호, 과목이름)을 모두 쓰시오.',
      code: `[R1]
학번 | 이름   | 학년 | 학과       | 주소
-----+--------+------+------------+-----
1000 | 홍길동 | 1    | 컴퓨터공학 | 서울
2000 | 김철수 | 1    | 전기공학   | 경기
3000 | 강남길 | 2    | 전자공학   | 경기
4000 | 오말자 | 2    | 컴퓨터공학 | 경기
5000 | 장미화 | 3    | 전자공학   | 서울

[R2]
학번 | 과목번호 | 과목이름     | 학점 | 점수
-----+----------+--------------+------+-----
1000 | C100     | 컴퓨터구조   | A    | 91
2000 | C200     | 데이터베이스 | A+   | 99
3000 | C100     | 컴퓨터구조   | B+   | 89
3000 | C200     | 데이터베이스 | B    | 85
4000 | C200     | 데이터베이스 | A    | 93
4000 | C300     | 운영체제     | B+   | 88
5000 | C300     | 운영체제     | B    | 82

SELECT 과목번호, 과목이름 FROM R1, R2
WHERE R1.학번 = R2.학번
  AND R1.학과 = '전자공학'
  AND R1.이름 = '강남길';`,
      answer: 'C100 컴퓨터구조, C200 데이터베이스',
      alternativeAnswers: ['C100 컴퓨터구조 C200 데이터베이스', '컴퓨터구조, 데이터베이스'],
      explanation:
        "WHERE의 조건을 하나씩 적용합니다. (1) 이름이 '강남길'이고 학과가 '전자공학'인 사람은 R1에서 학번 3000입니다. (2) 조인 조건 R1.학번 = R2.학번으로 R2에서 학번 3000의 수강 내역을 찾으면 (C100, 컴퓨터구조)와 (C200, 데이터베이스) 두 건입니다. 그래서 두 행이 조회됩니다. 두 테이블을 잇는 조인 조건(학번 일치)과 행을 거르는 검색 조건(학과·이름)을 AND로 모두 만족해야 한다는 점이 핵심입니다.",
    },
    {
      id: 'sql-r17',
      topic: '서브쿼리(단일 값)',
      difficulty: 'medium',
      question:
        "이름이 '정도일'인 팀원이 소속된 팀코드를 이용하여 해당 팀에 소속된 팀원들의 이름을 출력하려고 한다. 빈칸에 들어갈 내용을 쓰시오. (단, 팀코드·이름은 속성, 직원은 테이블이다.)",
      code: `SELECT 이름
FROM 직원
WHERE 팀코드 = (                  );`,
      answer: "SELECT 팀코드 FROM 직원 WHERE 이름 = '정도일'",
      alternativeAnswers: ["SELECT 팀코드 FROM 직원 WHERE 이름='정도일'", "select 팀코드 from 직원 where 이름 = '정도일'"],
      explanation:
        "이름이 '정도일'인 팀원의 팀코드를 먼저 알아내야 하므로, 빈칸에는 하위 질의 SELECT 팀코드 FROM 직원 WHERE 이름 = '정도일' 이 들어갑니다. 실행 순서는 (1) 하위 질의가 정도일의 팀코드를 구하고, (2) 바깥 질의가 그 팀코드와 같은 직원들의 이름을 모두 출력합니다. 같은 테이블(직원)을 하위 질의와 바깥 질의에서 두 번 사용하는 대표적인 형태입니다.",
    },
    {
      id: 'sql-r18',
      topic: 'LIKE·BETWEEN 조건',
      difficulty: 'easy',
      question:
        '[player] 테이블에는 player_name, team_id, height 컬럼이 있다. 다음 SQL에서 문법 오류가 있는 행의 번호를 쓰시오.',
      code: `(1) SELECT player_name, height
(2) FROM player
(3) WHERE team_id = 'korea'
(4) AND height BETWEEN 170 OR 180;`,
      answer: '(4)',
      alternativeAnswers: ['4', '4번'],
      explanation:
        'BETWEEN은 반드시 "BETWEEN A AND B" 형식으로 사용합니다. (4)행의 height BETWEEN 170 OR 180은 AND 자리에 OR를 써서 문법 오류입니다. BETWEEN 170 AND 180으로 고치면 "170 이상 180 이하"라는 뜻이 되며, 양쪽 경계값을 모두 포함합니다. (1)~(3)행은 SELECT, FROM, WHERE의 올바른 사용입니다.',
    },
    {
      id: 'sql-r19',
      topic: 'DISTINCT',
      difficulty: 'easy',
      question: '다음 SQL을 실행했을 때 조회되는 학년 값을 순서대로 모두 쓰시오.',
      code: `[R1]
학번 | 이름   | 학년 | 학과       | 주소
-----+--------+------+------------+-----
1000 | 홍길동 | 1    | 컴퓨터공학 | 서울
2000 | 김철수 | 1    | 전기공학   | 경기
3000 | 강남길 | 2    | 전기공학   | 경기
4000 | 오말자 | 2    | 컴퓨터공학 | 경기
5000 | 장미화 | 3    | 전기공학   | 서울

SELECT DISTINCT 학년 FROM R1;`,
      answer: '1, 2, 3',
      alternativeAnswers: ['1 2 3', '123', '1,2,3'],
      explanation:
        'DISTINCT는 조회 결과에서 중복된 값을 한 번만 표시하게 하는 키워드입니다. R1의 학년 값은 1, 1, 2, 2, 3으로 5건이지만, 중복을 제거하면 1, 2, 3 세 건만 남습니다. DISTINCT가 없으면 5행, 있으면 3행이라는 행 수 차이가 시험 단골 포인트입니다.',
    },
    {
      id: 'sql-r20',
      topic: 'LIKE·BETWEEN 조건',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 공급자명을 모두 쓰시오.',
      code: `[공급자]
공급자번호 | 공급자명   | 위치
-----------+------------+-----
16         | 대신공업사 | 수원
27         | 삼진사     | 서울
39         | 삼양사     | 인천
62         | 진아공업사 | 대전
70         | 신촌상사   | 서울

SELECT * FROM 공급자 WHERE 공급자명 LIKE '%신%';`,
      answer: '대신공업사, 신촌상사',
      alternativeAnswers: ['대신공업사 신촌상사', '신촌상사, 대신공업사'],
      explanation:
        "LIKE '%신%'에서 %는 \"아무 글자가 몇 개 오든 상관없음\"을 뜻하는 와일드카드입니다. 앞뒤에 %가 붙어 있으므로 이름 어디에든 '신'이 들어 있으면 조회됩니다. 대신공업사(가운데에 신), 신촌상사(맨 앞에 신) 두 건이 해당됩니다. 비교로 '신%'는 신으로 시작하는 것만(신촌상사), '%신'은 신으로 끝나는 것만 찾는다는 차이를 구분해야 합니다.",
    },
    {
      id: 'sql-r21',
      topic: '서브쿼리·IN',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 이름을 모두 쓰시오.',
      code: `[R1]
학번 | 이름   | 학년 | 학과   | 주소
-----+--------+------+--------+-----
1000 | 홍길동 | 4    | 컴퓨터 | 서울
2000 | 김철수 | 3    | 전기   | 경기
3000 | 강남길 | 1    | 컴퓨터 | 경기
4000 | 오말자 | 4    | 컴퓨터 | 경기
5000 | 장미화 | 2    | 전자   | 서울

[R2]
학번 | 과목번호 | 학점 | 점수
-----+----------+------+-----
1000 | C100     | A    | 91
1000 | C200     | A    | 94
2000 | C300     | B    | 85
3000 | C400     | A    | 90
3000 | C500     | C    | 75
3000 | C100     | A    | 90
4000 | C400     | A    | 95
4000 | C500     | A    | 91
4000 | C100     | B    | 80
4000 | C200     | C    | 74
5000 | C400     | B    | 85

SELECT 이름
FROM R1
WHERE 학번 IN
    (SELECT 학번
     FROM R2
     WHERE 과목번호 = 'C100');`,
      answer: '홍길동, 강남길, 오말자',
      alternativeAnswers: ['홍길동 강남길 오말자'],
      explanation:
        "하위 질의부터 풉니다. (1) R2에서 과목번호가 'C100'인 튜플의 학번은 1000, 3000, 4000입니다. (2) 바깥 질의는 WHERE 학번 IN (1000, 3000, 4000)이 되어, R1에서 해당 학번의 이름인 홍길동, 강남길, 오말자가 조회됩니다. IN은 \"목록 중 하나라도 일치하면 참\"이라는 뜻으로, C100 과목을 수강한 학생들의 이름을 찾는 질의입니다.",
    },
    {
      id: 'sql-r22',
      topic: 'SELECT·WHERE 조건',
      difficulty: 'easy',
      question: '다음 SQL의 실행 결과로 생성되는 튜플의 수를 쓰시오.',
      code: `[사원]
사원ID | 사원명 | 급여  | 부서ID
-------+--------+-------+-------
101    | 박철수 | 30000 | 1
102    | 한나라 | 35000 | 2
103    | 김감동 | 40000 | 3
104    | 이구수 | 35000 | 2
105    | 최초록 | 40000 | 3

SELECT 급여 FROM 사원;`,
      answer: '5',
      alternativeAnswers: ['5건', '5개', '5행'],
      explanation:
        'WHERE 조건이 없으므로 사원 테이블의 모든 행이 조회 대상입니다. SELECT 급여는 급여 열만 골라 보여줄 뿐 행 수를 줄이지 않고, DISTINCT도 없으므로 중복된 급여(35000 두 번, 40000 두 번)도 전부 그대로 표시됩니다. 따라서 테이블의 행 수 그대로 5건이 조회됩니다. 만약 SELECT DISTINCT 급여였다면 30000, 35000, 40000의 3건이 됩니다.',
    },
    {
      id: 'sql-r23',
      topic: '서브쿼리(EXISTS)',
      difficulty: 'hard',
      question: '다음 SQL을 실행했을 때 조회되는 과목이름을 순서대로 모두 쓰시오.',
      code: `[학생]
학번 | 이름   | 학년 | 학과 | 주소
-----+--------+------+------+-----
1000 | 김철수 | 1    | 전산 | 서울
2000 | 고영준 | 1    | 전기 | 경기
3000 | 유진호 | 2    | 전자 | 경기
4000 | 김영진 | 2    | 전산 | 경기
5000 | 정현영 | 3    | 전자 | 서울

[성적]
학번 | 과목번호 | 과목이름 | 학점 | 점수
-----+----------+----------+------+-----
1000 | A100     | 자료구조 | A    | 91
2000 | A200     | DB       | A+   | 99
3000 | A100     | 자료구조 | B+   | 88
3000 | A200     | DB       | B    | 85
4000 | A200     | DB       | A    | 94
4000 | A300     | 운영체제 | B+   | 89
5000 | A300     | 운영체제 | B    | 88

SELECT 과목이름
FROM 성적
WHERE EXISTS (
     SELECT 학번
     FROM 학생
     WHERE 학생.학번 = 성적.학번
        AND 학생.학과 IN ('전산', '전기')
        AND 학생.주소 = '경기');`,
      answer: 'DB, DB, 운영체제',
      alternativeAnswers: ['DB DB 운영체제', 'DB, DB, 운영체제 (3행)'],
      explanation:
        "EXISTS는 하위 질의의 결과가 한 건이라도 있으면 참이 되어 해당 행을 남기는 연산자입니다. 성적 테이블의 각 행마다 \"이 학번이 학생 테이블에서 학과가 전산 또는 전기이고 주소가 경기인가\"를 검사합니다. 조건을 만족하는 학생은 고영준(2000, 전기, 경기)과 김영진(4000, 전산, 경기)입니다. 성적에서 학번 2000의 행은 DB 1건, 학번 4000의 행은 DB와 운영체제 2건이므로, 결과는 DB, DB, 운영체제 세 행입니다. 같은 과목이름이 중복 출력될 수 있다는 점에 주의하세요.",
    },
    {
      id: 'sql-r24',
      topic: 'ORDER BY',
      difficulty: 'medium',
      question:
        '강남지점의 판매량이 많은 제품부터 출력하는 SQL이다. 조회되는 제품명을 출력 순서대로 쓰시오.',
      code: `[푸드]
지점명   | 제품명 | 판매량
---------+--------+-------
강남지점 | 비빔밥 | 500
강북지점 | 도시락 | 300
강남지점 | 도시락 | 200
강남지점 | 미역국 | 550
수원지점 | 비빔밥 | 600
인천지점 | 비빔밥 | 800
강남지점 | 잡채밥 | 250

SELECT 제품명, 판매량 FROM 푸드
WHERE 지점명 = '강남지점'
ORDER BY 판매량 DESC;`,
      answer: '미역국, 비빔밥, 잡채밥, 도시락',
      alternativeAnswers: ['미역국 비빔밥 잡채밥 도시락'],
      explanation:
        "WHERE 지점명 = '강남지점'으로 강남지점의 행만 고르면 비빔밥 500, 도시락 200, 미역국 550, 잡채밥 250입니다(다른 지점의 비빔밥 600, 800은 제외). ORDER BY 판매량 DESC는 판매량 기준 내림차순(큰 것부터) 정렬이므로 미역국(550) → 비빔밥(500) → 잡채밥(250) → 도시락(200) 순서로 출력됩니다. 오름차순은 ASC(생략 시 기본값), 내림차순은 DESC라는 것을 꼭 구분하세요.",
    },
    {
      id: 'sql-r25',
      topic: '집합 연산자',
      difficulty: 'medium',
      question: '다음 SQL을 실행했을 때 조회되는 A 값을 순서대로 모두 쓰시오.',
      code: `[R]
A | B
--+--
1 | A
3 | B

[S]
A | B
--+--
1 | A
2 | B

SELECT A FROM R
UNION ALL
SELECT A FROM S;`,
      answer: '1, 3, 1, 2',
      alternativeAnswers: ['1 3 1 2', '1,3,1,2'],
      explanation:
        'UNION ALL은 두 SELECT 결과를 중복 제거 없이 그대로 이어 붙이는 집합 연산자입니다. R의 A 값 1, 3 뒤에 S의 A 값 1, 2가 이어져 1, 3, 1, 2 네 행이 조회됩니다(1이 두 번 나와도 그대로 둡니다). 만약 ALL이 없는 UNION이었다면 중복이 제거되어 1, 3, 2 세 행이 됩니다. ALL 유무에 따른 행 수 차이가 단골 출제 포인트입니다.',
    },
    {
      id: 'sql-r26',
      topic: 'DML(UPDATE)',
      difficulty: 'easy',
      question: '다음 SQL문에서 빈칸에 들어갈 예약어를 쓰시오.',
      code: `UPDATE 회원 ( 빈칸 ) 전화번호 = '010-14'
WHERE 회원번호 = 'N4';`,
      answer: 'SET',
      alternativeAnswers: ['set'],
      explanation:
        "UPDATE문의 기본 형식은 UPDATE 테이블 SET 속성 = 값 WHERE 조건; 입니다. 갱신할 값을 지정하는 예약어는 SET이므로 빈칸에는 SET이 들어갑니다. 이 문장은 회원 테이블에서 회원번호가 'N4'인 튜플의 전화번호를 '010-14'로 바꿉니다. 참고로 INSERT는 INTO, DELETE는 FROM과 짝을 이룬다는 것도 함께 기억하세요.",
    },
    {
      id: 'sql-r27',
      topic: 'LIKE·BETWEEN 조건',
      difficulty: 'easy',
      question: '다음 SQL에서 사용된 BETWEEN 연산과 동일한 의미의 조건식을 비교 연산자로 쓰시오.',
      code: `SELECT *
FROM 성적
WHERE (점수 BETWEEN 90 AND 95)
   AND 학과 = '컴퓨터공학과';`,
      answer: '점수 >= 90 AND 점수 <= 95',
      alternativeAnswers: ['점수>=90 AND 점수<=95', '점수 >= 90 and 점수 <= 95'],
      explanation:
        '점수 BETWEEN 90 AND 95는 "90 이상 95 이하"라는 뜻으로, 양쪽 경계값 90과 95를 모두 포함합니다. 비교 연산자로 풀어 쓰면 점수 >= 90 AND 점수 <= 95입니다. > 와 < 로만 쓰면 경계값이 빠지므로 틀린 표현이 됩니다. 전체 질의는 성적 테이블에서 점수가 90~95 사이이고 학과가 컴퓨터공학과인 모든 필드를 검색합니다.',
    },
    {
      id: 'sql-r28',
      topic: 'DCL(GRANT·REVOKE)',
      difficulty: 'medium',
      question:
        "사용자 'PARK'에게 테이블을 생성할 수 있는 권한을 부여하려고 한다. 빈칸에 들어갈 내용을 쓰시오.",
      code: `GRANT ( 빈칸 ) PARK;`,
      answer: 'CREATE TABLE TO',
      alternativeAnswers: ['create table to'],
      explanation:
        'GRANT는 권한을 부여하는 DCL(데이터 제어어) 명령입니다. 테이블 생성 권한처럼 특정 개체에 대한 것이 아닌 시스템 권한을 줄 때는 GRANT CREATE TABLE TO 사용자; 형식을 씁니다. 따라서 빈칸은 CREATE TABLE TO입니다. 특정 테이블에 대한 조작 권한을 줄 때의 형식(GRANT SELECT ON 테이블 TO 사용자)과 ON의 유무가 다르다는 점에 주의하세요.',
    },
    {
      id: 'sql-r29',
      topic: 'DISTINCT',
      difficulty: 'medium',
      question:
        'STUDENT 테이블에 독일어과 학생 50명, 중국어과 학생 30명, 영어영문학과 학생 50명의 정보가 저장되어 있을 때, 다음 두 SQL문의 실행 결과 튜플 수를 각각 쓰시오. (단, DEPT 컬럼은 학과명이다)',
      code: `(a) SELECT DEPT FROM STUDENT;
(b) SELECT DISTINCT DEPT FROM STUDENT;`,
      answer: '(a) 130, (b) 3',
      alternativeAnswers: ['130, 3', '130 3', 'a 130 b 3'],
      explanation:
        '(a)는 조건 없이 DEPT를 조회하므로 전체 튜플 수 그대로 50 + 30 + 50 = 130건이 나옵니다. 학과명이 같아도 행마다 전부 표시되기 때문입니다. (b)는 DISTINCT가 중복을 제거하므로 학과명의 종류만 남아 독일어과, 중국어과, 영어영문학과의 3건이 됩니다. "전체 행 수"와 "서로 다른 값의 수"를 구분하는 문제입니다.',
    },
    {
      id: 'sql-r30',
      topic: 'DCL(GRANT·REVOKE)',
      difficulty: 'medium',
      question:
        'DBA가 사용자 PARK에게 STUDENT 테이블의 데이터를 갱신할 수 있는 권한을 부여하려고 한다. 빈칸 ㉠, ㉡에 들어갈 내용을 쓰시오.',
      code: `GRANT ( ㉠ ) ( ㉡ ) STUDENT TO PARK;`,
      answer: '㉠ UPDATE, ㉡ ON',
      alternativeAnswers: ['UPDATE, ON', 'UPDATE ON'],
      explanation:
        '특정 테이블에 대한 권한 부여는 GRANT 권한 ON 테이블 TO 사용자; 형식입니다. 데이터를 갱신하는 권한은 UPDATE이므로 ㉠은 UPDATE, 대상 테이블을 지정하는 예약어 ㉡은 ON입니다. 완성하면 GRANT UPDATE ON STUDENT TO PARK; 가 됩니다. 부여받은 권한을 다른 사용자에게 다시 부여할 수 있게 하려면 끝에 WITH GRANT OPTION을 붙입니다.',
    },
    {
      id: 'sql-r31',
      topic: 'DDL(DROP·CASCADE)',
      difficulty: 'medium',
      question:
        '테이블 두 개를 조인하여 뷰 V_1을 정의하고, V_1을 이용하여 뷰 V_2를 정의하였다. 다음 명령을 수행한 후의 결과를 쓰시오.',
      code: `DROP VIEW V_1 CASCADE;`,
      answer: 'V_1과 V_2 모두 삭제된다',
      alternativeAnswers: ['V_1, V_2 모두 삭제', '둘 다 삭제된다', 'V1과 V2 모두 삭제된다'],
      explanation:
        'CASCADE는 "삭제 대상을 참조하고 있는 다른 개체까지 연쇄적으로 함께 삭제"하라는 옵션입니다. V_2는 V_1을 이용해 만든 뷰, 즉 V_1을 참조하는 개체이므로 V_1을 CASCADE로 삭제하면 V_2도 함께 삭제됩니다. 반대로 RESTRICT 옵션이었다면 V_1을 참조하는 V_2가 존재하기 때문에 삭제가 거부됩니다. CASCADE = 연쇄 삭제, RESTRICT = 참조가 있으면 거부로 기억하세요.',
    },
    {
      id: 'sql-r32',
      topic: '관계 대수',
      difficulty: 'medium',
      question: '다음 관계 대수식을 SQL 질의로 표현하시오.',
      code: `π이름(σ학과 = '교육'(학생))`,
      answer: "SELECT 이름 FROM 학생 WHERE 학과 = '교육';",
      alternativeAnswers: ["SELECT 이름 FROM 학생 WHERE 학과 = '교육'", "SELECT 이름 FROM 학생 WHERE 학과='교육';"],
      explanation:
        '관계 대수에서 π(프로젝트)는 "원하는 열 골라내기", σ(셀렉트)는 "조건에 맞는 행 골라내기"입니다. 안쪽부터 읽으면 σ학과=\'교육\'(학생)은 학생 테이블에서 학과가 교육인 행을 고르고, π이름은 그중 이름 열만 표시합니다. SQL로 옮기면 SELECT 이름 FROM 학생 WHERE 학과 = \'교육\'; 입니다. π → SELECT 절, σ → WHERE 절, 괄호 안 테이블 → FROM 절로 대응시키면 됩니다.',
    },
    {
      id: 'sql-r33',
      topic: 'DCL(GRANT·REVOKE)',
      difficulty: 'medium',
      question:
        '사용자 X1에게 부여된 department 테이블에 대한 검색(SELECT) 권한을 회수하려고 한다. 빈칸 ㉠, ㉡에 들어갈 명령어를 쓰시오.',
      code: `( ㉠ ) SELECT ON DEPARTMENT ( ㉡ ) X1;`,
      answer: '㉠ REVOKE, ㉡ FROM',
      alternativeAnswers: ['REVOKE, FROM', 'REVOKE FROM'],
      explanation:
        '권한을 회수(취소)하는 DCL 명령은 REVOKE입니다. 형식은 REVOKE 권한 ON 테이블 FROM 사용자; 로, 권한을 줄 때(GRANT ... TO)와 달리 회수할 때는 TO가 아니라 FROM을 씁니다. 완성하면 REVOKE SELECT ON DEPARTMENT FROM X1; 이 됩니다. GRANT는 TO와, REVOKE는 FROM과 짝이라는 것이 단골 함정입니다.',
    },
  ],
}
