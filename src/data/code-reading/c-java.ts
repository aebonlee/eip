import type { CodeReadingLanguage } from './types'

// 정보처리기사 실기 대비 — 코드 결과 예측 문제 (C언어 / Java)
// 전 문제 자체 창작, 실제 컴파일·실행으로 출력 검증 완료

export const cLang: CodeReadingLanguage = {
  id: 'c',
  name: 'C언어',
  icon: 'fa-solid fa-c',
  description:
    '정보처리기사 실기 최빈출 언어입니다. 포인터·배열·재귀를 중심으로 코드를 한 줄씩 따라가며 출력 결과를 예측하는 연습을 합니다.',
  questions: [
    // ── 연산자 (3) ─────────────────────────────
    {
      id: 'c-r1',
      topic: '연산자',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a = 5;
    int b = a++;
    int c = ++a;
    printf("%d %d %d", a, b, c);
    return 0;
}`,
      answer: '7 5 7',
      alternativeAnswers: ['7,5,7', 'a=7 b=5 c=7'],
      explanation:
        '증감 연산자의 위치가 핵심입니다. (1) b = a++ 는 "후위형"이라서 먼저 a의 현재 값 5를 b에 넣은 다음에 a를 1 올립니다. 그래서 b=5, a=6이 됩니다. (2) c = ++a 는 "전위형"이라서 먼저 a를 1 올려 7로 만든 다음 그 값을 c에 넣습니다. 그래서 c=7, a=7입니다. (3) 최종적으로 a=7, b=5, c=7이 출력됩니다. "후위는 쓰고 나서 증가, 전위는 증가하고 나서 사용"으로 기억하면 됩니다.',
    },
    {
      id: 'c-r2',
      topic: '연산자',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a = 12, b = 10;
    printf("%d %d %d", a & b, a | b, a ^ b);
    return 0;
}`,
      answer: '8 14 6',
      alternativeAnswers: ['8,14,6'],
      explanation:
        '비트 연산은 숫자를 2진수로 바꿔서 자리마다 비교합니다. 12는 2진수로 1100, 10은 1010입니다. (1) AND(&)는 두 자리가 모두 1일 때만 1: 1100 & 1010 = 1000 = 8. (2) OR(|)는 둘 중 하나라도 1이면 1: 1100 | 1010 = 1110 = 14. (3) XOR(^)는 두 자리가 서로 다를 때만 1: 1100 ^ 1010 = 0110 = 6. 그래서 8 14 6이 출력됩니다.',
    },
    {
      id: 'c-r3',
      topic: '연산자',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int x = 3;
    int y = x << 2;
    int z = (y > 10) ? y % 5 : y / 2;
    printf("%d", y + z);
    return 0;
}`,
      answer: '14',
      alternativeAnswers: [],
      explanation:
        '(1) x << 2 는 왼쪽 시프트 연산으로, 2진수 자릿수를 왼쪽으로 2칸 밉니다. 한 칸 밀 때마다 2배가 되므로 3 × 2 × 2 = 12, 즉 y=12입니다. (2) 삼항 연산자 (조건) ? A : B 는 조건이 참이면 A, 거짓이면 B를 고릅니다. y=12는 10보다 크므로(참) y % 5 = 12를 5로 나눈 나머지 = 2가 선택되어 z=2입니다. (3) 마지막으로 y + z = 12 + 2 = 14가 출력됩니다.',
    },
    // ── 조건문·반복문 (3) ──────────────────────
    {
      id: 'c-r4',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int i = 1, sum = 0;
    while (i <= 10) {
        sum += i;
        i += 2;
    }
    printf("%d", sum);
    return 0;
}`,
      answer: '25',
      alternativeAnswers: [],
      explanation:
        'i가 1부터 시작해서 매번 2씩 커지므로 i는 1, 3, 5, 7, 9 순서로 변합니다. 각 단계에서 sum에 i를 더하면: 0+1=1 → 1+3=4 → 4+5=9 → 9+7=16 → 16+9=25. i가 11이 되면 조건 i<=10이 거짓이라 반복이 끝납니다. 즉 1부터 9까지 홀수의 합인 25가 출력됩니다.',
    },
    {
      id: 'c-r5',
      topic: '조건문·반복문',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int cnt = 0;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            if ((i + j) % 2 == 0) continue;
            cnt += i * j;
        }
    }
    printf("%d", cnt);
    return 0;
}`,
      answer: '16',
      alternativeAnswers: [],
      explanation:
        '중첩 for문은 i 하나마다 j가 1~3을 전부 돕니다. continue는 "이번 회차만 건너뛰기"이므로, i+j가 짝수인 경우는 더하지 않습니다. i+j가 홀수인 조합만 남습니다: (i=1,j=2)→1×2=2, (i=2,j=1)→2×1=2, (i=2,j=3)→2×3=6, (i=3,j=2)→3×2=6. 나머지 (1,1),(1,3),(2,2),(3,1),(3,3)은 합이 짝수라 건너뜁니다. 결과는 2+2+6+6=16입니다.',
    },
    {
      id: 'c-r6',
      topic: '조건문·반복문',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int i = 0, sum = 0;
    while (1) {
        i++;
        if (i % 3 == 0) continue;
        if (i > 8) break;
        sum += i;
    }
    printf("%d %d", i, sum);
    return 0;
}`,
      answer: '10 27',
      alternativeAnswers: ['10,27', 'i=10 sum=27'],
      explanation:
        'while(1)은 무한 반복이고, 탈출은 break뿐입니다. i를 1씩 올리며 따라가면: i=1 sum=1, i=2 sum=3, i=3은 3의 배수라 continue(건너뜀), i=4 sum=7, i=5 sum=12, i=6 건너뜀, i=7 sum=19, i=8 sum=27. 다음 i=9는 3의 배수라서 continue가 먼저 실행되어 break 검사(i>8)까지 가지 못하고 건너뜁니다! i=10이 되어서야 3의 배수가 아니므로 i>8 검사에 걸려 break로 탈출합니다. 그래서 i=10, sum=27이 출력됩니다. continue가 break보다 위에 있으면 탈출이 미뤄질 수 있다는 점이 함정입니다.',
    },
    // ── 배열과 포인터 (4) ──────────────────────
    {
      id: 'c-r7',
      topic: '배열과 포인터',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    printf("%d %d", *p + 1, *(p + 2));
    return 0;
}`,
      answer: '11 30',
      alternativeAnswers: ['11,30'],
      explanation:
        '포인터 p는 배열의 첫 칸(arr[0])을 가리킵니다. (1) *p + 1 은 "p가 가리키는 값(10)을 먼저 꺼낸 뒤" 1을 더하므로 11입니다. (2) *(p + 2) 는 "p를 두 칸 뒤로 옮긴 다음" 값을 꺼내므로 arr[2] = 30입니다. 괄호의 위치에 따라 값에 더하는지, 주소를 옮기는지가 완전히 달라진다는 것이 포인트입니다.',
    },
    {
      id: 'c-r8',
      topic: '배열과 포인터',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a[5] = {1, 2, 3, 4, 5};
    int *p = a + 4;
    int s = 0;
    while (p >= a) {
        s = s * 10 + *p;
        p--;
    }
    printf("%d", s);
    return 0;
}`,
      answer: '54321',
      alternativeAnswers: [],
      explanation:
        'p는 a+4, 즉 마지막 칸 a[4](값 5)에서 시작해 한 칸씩 앞으로(p--) 이동합니다. s = s*10 + *p 는 "지금까지의 숫자를 한 자리 왼쪽으로 밀고 새 숫자를 붙이는" 계산입니다. 따라가면: s=0×10+5=5 → 5×10+4=54 → 54×10+3=543 → 543×10+2=5432 → 5432×10+1=54321. p가 a보다 앞으로 가면(p < a) 반복이 끝나고 54321이 출력됩니다. 배열을 거꾸로 읽으며 자릿수를 만드는 패턴입니다.',
    },
    {
      id: 'c-r9',
      topic: '배열과 포인터',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int s = 0;
    for (int i = 0; i < 3; i++) {
        s += m[i][i] + m[i][2 - i];
    }
    printf("%d", s);
    return 0;
}`,
      answer: '30',
      alternativeAnswers: [],
      explanation:
        '2차원 배열을 표로 그리면 1행(1,2,3), 2행(4,5,6), 3행(7,8,9)입니다. m[i][i]는 왼쪽 위→오른쪽 아래 대각선(1, 5, 9), m[i][2-i]는 오른쪽 위→왼쪽 아래 대각선(3, 5, 7)입니다. i=0: 1+3=4, i=1: 5+5=10, i=2: 9+7=16. 합계는 4+10+16=30입니다. 가운데 원소 5는 두 대각선이 겹치는 자리라 두 번 더해진다는 점에 주의합니다.',
    },
    {
      id: 'c-r10',
      topic: '배열과 포인터',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int *p = a[0];
    printf("%d %d %d", *(p + 4), *(*(a + 1) + 1), a[1][2]);
    return 0;
}`,
      answer: '5 5 6',
      alternativeAnswers: ['5,5,6'],
      explanation:
        '2차원 배열도 메모리에는 1 2 3 4 5 6이 한 줄로 이어져 저장됩니다. (1) p는 첫 원소를 가리키므로 *(p+4)는 앞에서 5번째(0부터 세면 4번) 원소인 5입니다. (2) a+1은 "1행(두 번째 줄)의 시작", *(a+1)은 그 행 자체(= a[1]), 거기에 +1 하고 *를 붙이면 a[1][1] = 5입니다. 즉 *(*(a+1)+1)은 a[1][1]과 완전히 같은 표현입니다. (3) a[1][2]는 두 번째 줄의 세 번째 원소 6입니다. 그래서 5 5 6이 출력됩니다.',
    },
    // ── 함수와 재귀 (3) ────────────────────────
    {
      id: 'c-r11',
      topic: '함수와 재귀',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

void swap(int x, int y) {
    int t = x;
    x = y;
    y = t;
}

int main(void) {
    int a = 3, b = 7;
    swap(a, b);
    printf("%d %d", a, b);
    return 0;
}`,
      answer: '3 7',
      alternativeAnswers: ['3,7', 'a=3 b=7'],
      explanation:
        'C의 함수 인자는 기본이 "값 전달(call by value)"입니다. swap(a, b)를 부르면 a와 b의 값이 "복사"되어 x, y에 담깁니다. 함수 안에서 x와 y를 아무리 바꿔도 그것은 복사본끼리 바꾼 것이라, main의 원본 a, b는 전혀 변하지 않습니다. 그래서 3 7이 그대로 출력됩니다. 원본을 바꾸려면 주소(&a, &b)를 넘기고 포인터로 받아야 합니다.',
    },
    {
      id: 'c-r12',
      topic: '함수와 재귀',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

void update(int *x, int y) {
    *x = *x + y;
    y = 0;
}

int main(void) {
    int a = 5, b = 3;
    update(&a, b);
    printf("%d %d", a, b);
    return 0;
}`,
      answer: '8 3',
      alternativeAnswers: ['8,3', 'a=8 b=3'],
      explanation:
        '두 인자의 전달 방식이 다릅니다. (1) a는 주소(&a)로 넘겼으므로 x는 a가 있는 곳을 직접 가리킵니다. *x = *x + y 는 그 자리의 값을 직접 고치는 것이라 원본 a가 5+3=8로 바뀝니다. (2) 반면 b는 값만 복사되어 y에 담겼으므로, 함수 안에서 y=0으로 바꿔도 원본 b는 3 그대로입니다. 그래서 8 3이 출력됩니다. "주소 전달은 원본이 바뀌고, 값 전달은 복사본만 바뀐다"가 핵심입니다.',
    },
    {
      id: 'c-r13',
      topic: '함수와 재귀',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int f(int n) {
    if (n <= 2) return n;
    return f(n - 1) + f(n - 3);
}

int main(void) {
    printf("%d", f(6));
    return 0;
}`,
      answer: '7',
      alternativeAnswers: [],
      explanation:
        '재귀 함수는 "작은 값부터" 표를 만들며 따라가면 쉽습니다. 종료 조건: n이 2 이하이면 n을 그대로 돌려줍니다. 즉 f(0)=0, f(1)=1, f(2)=2. 이제 위로 올라가면: f(3)=f(2)+f(0)=2+0=2, f(4)=f(3)+f(1)=2+1=3, f(5)=f(4)+f(2)=3+2=5, f(6)=f(5)+f(3)=5+2=7. 그래서 7이 출력됩니다. 재귀 문제는 호출 화살표를 따라가는 것보다, 종료 조건에서 시작해 값 표를 채우는 쪽이 실수 없이 빠릅니다.',
    },
    // ── 구조체·문자열 (2) ──────────────────────
    {
      id: 'c-r14',
      topic: '구조체·문자열',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main(void) {
    struct Point p = {3, 4};
    struct Point *q = &p;
    q->x = q->x + p.y;
    printf("%d %d", p.x, p.y);
    return 0;
}`,
      answer: '7 4',
      alternativeAnswers: ['7,4', 'x=7 y=4'],
      explanation:
        '구조체 Point는 x와 y 두 칸을 가진 상자입니다. p = {3, 4}로 x=3, y=4가 되고, q는 p의 주소를 담은 포인터입니다. 포인터로 멤버에 접근할 때는 화살표(q->x)를 쓰는데, 이는 (*q).x 와 같은 뜻으로 "q가 가리키는 구조체(즉 p)의 x"입니다. q->x = q->x + p.y 는 결국 p.x = 3 + 4 = 7이므로 원본 p가 직접 바뀝니다. y는 그대로이므로 7 4가 출력됩니다.',
    },
    {
      id: 'c-r15',
      topic: '구조체·문자열',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>
#include <string.h>

int main(void) {
    char s[20] = "Republic";
    char t[20];
    strcpy(t, s);
    t[3] = '\\0';
    printf("%d %d %s", (int)strlen(s), (int)strlen(t), t);
    return 0;
}`,
      answer: '8 3 Rep',
      alternativeAnswers: ['8,3,Rep', '8 3 rep'],
      explanation:
        'C의 문자열은 끝에 보이지 않는 널 문자(\\0)가 붙어 있고, strlen은 \\0 직전까지의 글자 수를 셉니다. (1) "Republic"은 8글자이므로 strlen(s)=8. (2) strcpy(t, s)는 s의 내용(\\0 포함)을 t에 통째로 복사합니다. (3) t[3] = \'\\0\' 으로 4번째 칸에 널 문자를 심으면, 뒤에 ublic이 메모리에 남아 있어도 문자열은 그 앞에서 끝난 것으로 취급됩니다. 그래서 strlen(t)=3이 되고 %s로 찍으면 Rep까지만 출력됩니다. 결과는 8 3 Rep입니다.',
    },
  ],
}

export const javaLang: CodeReadingLanguage = {
  id: 'java',
  name: 'Java',
  icon: 'fa-brands fa-java',
  description:
    '정보처리기사 실기에서 C언어와 함께 가장 자주 나오는 언어입니다. 상속·오버라이딩·다형성과 static 동작을 중심으로 출력 결과를 예측하는 연습을 합니다.',
  questions: [
    // ── 연산자·형변환 (2) ──────────────────────
    {
      id: 'java-r1',
      topic: '연산자·형변환',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int a = 7, b = 2;
        double c = a / b;
        double d = (double) a / b;
        System.out.println(c + " " + d);
    }
}`,
      answer: '3.0 3.5',
      alternativeAnswers: ['3.0,3.5'],
      explanation:
        '나눗셈의 결과는 "나누기 전의 타입"이 결정합니다. (1) a / b 는 int끼리의 나눗셈이라 소수점을 버린 3이 먼저 계산되고, 그 다음 double 변수 c에 담기며 3.0이 됩니다. 이미 잘려나간 0.5는 돌아오지 않습니다. (2) (double) a / b 는 나누기 전에 a를 7.0으로 바꿨으므로 실수 나눗셈이 되어 3.5입니다. 그래서 3.0 3.5가 출력됩니다. 형변환은 "언제" 하느냐가 결과를 바꿉니다.',
    },
    {
      id: 'java-r2',
      topic: '연산자·형변환',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        char ch = 'A';
        int n = ch + 2;
        char ch2 = (char) n;
        System.out.println(n + " " + ch2);
    }
}`,
      answer: '67 C',
      alternativeAnswers: ['67,C', '67 c'],
      explanation:
        "문자는 컴퓨터 안에서 숫자(문자 코드)로 저장됩니다. 'A'는 65입니다. (1) ch + 2 처럼 char에 정수를 더하면 자동으로 숫자 계산이 되어 n = 65 + 2 = 67입니다. (2) (char) n 으로 다시 문자로 형변환하면 67번 문자인 'C'가 됩니다(A=65, B=66, C=67). 그래서 67 C가 출력됩니다. char↔int 변환은 문자 코드표(A~Z는 65~90)를 기준으로 움직인다고 기억하면 됩니다.",
    },
    // ── 조건문·반복문 (2) ──────────────────────
    {
      id: 'java-r3',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            if (i % 2 == 0) sum += i * 10;
            else sum += i;
        }
        System.out.println(sum);
    }
}`,
      answer: '69',
      alternativeAnswers: [],
      explanation:
        'i가 1부터 5까지 돌면서, 짝수면 i의 10배를, 홀수면 i를 그대로 더합니다. 따라가면: i=1(홀수) sum=1, i=2(짝수) sum=1+20=21, i=3(홀수) sum=21+3=24, i=4(짝수) sum=24+40=64, i=5(홀수) sum=64+5=69. 그래서 69가 출력됩니다. 조건문이 있는 반복은 각 회차의 조건 판정을 표로 적으며 따라가면 실수가 없습니다.',
    },
    {
      id: 'java-r4',
      topic: '조건문·반복문',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int i = 2, j = 0;
        while (i < 20) {
            i = i * 2;
            j++;
        }
        System.out.println(i + " " + j);
    }
}`,
      answer: '32 4',
      alternativeAnswers: ['32,4', 'i=32 j=4'],
      explanation:
        'i는 반복마다 2배가 됩니다. 조건 검사 → 실행 순서로 따라가면: i=2는 20보다 작으므로 실행 → i=4, j=1. i=4 → i=8, j=2. i=8 → i=16, j=3. i=16도 아직 20보다 작으므로 한 번 더 실행 → i=32, j=4. 이제 i=32는 20 이상이라 반복 종료. 마지막 회차에서 i가 조건(20)을 "넘어선 값"으로 끝난다는 점이 포인트입니다. 그래서 32 4가 출력됩니다.',
    },
    // ── 배열·문자열 (3) ────────────────────────
    {
      id: 'java-r5',
      topic: '배열·문자열',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        String s = "Information";
        System.out.println(s.length() + " " + s.substring(2, 6) + " " + s.indexOf('o'));
    }
}`,
      answer: '11 form 3',
      alternativeAnswers: ['11,form,3'],
      explanation:
        '문자열의 위치 번호(인덱스)는 0부터 셉니다. I(0) n(1) f(2) o(3) r(4) m(5) a(6) t(7) i(8) o(9) n(10). (1) length()는 글자 수이므로 11. (2) substring(2, 6)은 "2번부터 6번 직전까지", 즉 2·3·4·5번 글자인 form입니다. 끝 번호는 포함되지 않는 것이 함정입니다. (3) indexOf(\'o\')는 o가 처음 나오는 위치이므로 3입니다(9번에도 있지만 첫 번째 것만). 그래서 11 form 3이 출력됩니다.',
    },
    {
      id: 'java-r6',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        String a = "java";
        String b = "java";
        String c = new String("java");
        System.out.println((a == b) + " " + (a == c) + " " + a.equals(c));
    }
}`,
      answer: 'true false true',
      alternativeAnswers: ['true,false,true'],
      explanation:
        '== 는 "같은 상자(객체)인가", equals는 "내용이 같은가"를 묻습니다. (1) 따옴표로 만든 문자열 "java"는 문자열 저장소(String Pool)에 하나만 만들어 재사용하므로 a와 b는 같은 객체 → a==b는 true. (2) new String("java")는 저장소와 별개로 새 객체를 강제로 만들므로 a와 c는 서로 다른 객체 → a==c는 false. (3) 하지만 내용은 둘 다 "java"로 같으므로 a.equals(c)는 true. 그래서 true false true가 출력됩니다. 문자열 비교는 반드시 equals를 써야 하는 이유입니다.',
    },
    {
      id: 'java-r7',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("2026");
        sb.append("EIP");
        sb.insert(0, "K");
        sb.reverse();
        System.out.println(sb);
    }
}`,
      answer: 'PIE6202K',
      alternativeAnswers: ['pie6202k'],
      explanation:
        'StringBuilder는 문자열을 직접 고칠 수 있는 도구로, 메서드가 호출될 때마다 같은 객체가 차례로 변합니다. (1) 시작: "2026". (2) append("EIP")는 뒤에 붙이기 → "2026EIP". (3) insert(0, "K")는 0번 위치(맨 앞)에 끼워 넣기 → "K2026EIP". (4) reverse()는 전체를 거꾸로 뒤집기 → "PIE6202K". 단계마다 현재 문자열을 적어가며 따라가면 됩니다. 최종 출력은 PIE6202K입니다.',
    },
    // ── 클래스와 상속 (4) ──────────────────────
    {
      id: 'java-r8',
      topic: '클래스와 상속',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Animal {
    void sound() {
        System.out.println("animal");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,
      answer: 'bark',
      alternativeAnswers: [],
      explanation:
        '변수의 타입은 Animal이지만, 실제로 만들어진 객체는 Dog입니다. 자바에서 오버라이딩(재정의)된 메서드는 "변수 타입"이 아니라 "실제 객체"를 따라 실행됩니다. 이것이 다형성(동적 바인딩)입니다. 그래서 a.sound()를 부르면 Animal의 sound가 아니라 Dog가 재정의한 sound가 실행되어 bark가 출력됩니다. "부모 그릇에 자식을 담아도, 움직이는 것은 자식"으로 기억하면 됩니다.',
    },
    {
      id: 'java-r9',
      topic: '클래스와 상속',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class A {
    A() {
        System.out.print("A");
    }
    void hello() {
        System.out.print("helloA");
    }
}

class B extends A {
    B() {
        System.out.print("B");
    }
    void hello() {
        System.out.print("helloB");
    }
}

public class Main {
    public static void main(String[] args) {
        new B().hello();
    }
}`,
      answer: 'ABhelloB',
      alternativeAnswers: ['abhellob', 'A B helloB'],
      explanation:
        '자식 객체를 만들면 생성자는 "부모 먼저, 자식 나중" 순서로 실행됩니다. B의 생성자 첫 줄에는 보이지 않아도 super()가 자동으로 들어가서 부모 A의 생성자를 먼저 부르기 때문입니다. (1) new B() → A 생성자 실행: A 출력 → 이어서 B 생성자 실행: B 출력. (2) 완성된 객체는 B이므로 hello()는 B가 재정의한 것이 실행되어 helloB 출력. print는 줄바꿈 없이 이어 붙이므로 최종 출력은 ABhelloB입니다.',
    },
    {
      id: 'java-r10',
      topic: '클래스와 상속',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class A {
    int f(int x) {
        return x + 1;
    }
    int g(int x) {
        return f(x) * 2;
    }
}

class B extends A {
    int f(int x) {
        return x * 3;
    }
}

public class Main {
    public static void main(String[] args) {
        A obj = new B();
        System.out.println(obj.g(4));
    }
}`,
      answer: '24',
      alternativeAnswers: [],
      explanation:
        'obj의 실제 객체는 B입니다. B에는 g가 없으므로 부모 A의 g(4)가 실행됩니다. 그런데 g 안에서 부르는 f(x)가 함정입니다. 이 코드는 부모 클래스 안에 적혀 있어도 "실제 객체(B)가 재정의한 f"가 실행됩니다(동적 바인딩). 그래서 f(4)는 A의 4+1=5가 아니라 B의 4×3=12가 되고, g는 12×2=24를 돌려줍니다. "부모의 메서드 안에서 부르는 메서드도, 재정의됐다면 자식 것이 실행된다"는 것이 이 문제의 핵심입니다.',
    },
    {
      id: 'java-r11',
      topic: '클래스와 상속',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Base {
    String name() {
        return "base";
    }
}

class Derived extends Base {
    String name() {
        return super.name() + "-derived";
    }
}

public class Main {
    public static void main(String[] args) {
        Base b = new Derived();
        System.out.println(b.name());
    }
}`,
      answer: 'base-derived',
      alternativeAnswers: [],
      explanation:
        'b의 실제 객체는 Derived이므로, 오버라이딩된 Derived의 name()이 실행됩니다. 그 안의 super.name()은 "부모(Base)가 원래 갖고 있던 name()"을 직접 부르는 문법으로, "base"를 돌려받습니다. 여기에 "-derived"를 이어 붙여 최종적으로 base-derived가 출력됩니다. super는 재정의하면서도 부모의 원래 기능을 재사용하고 싶을 때 쓰는 통로입니다.',
    },
    // ── static·생성자 (2) ──────────────────────
    {
      id: 'java-r12',
      topic: 'static·생성자',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Counter {
    static int count = 0;
    Counter() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println(Counter.count);
    }
}`,
      answer: '3',
      alternativeAnswers: [],
      explanation:
        'static 변수는 객체마다 따로 생기는 것이 아니라, 클래스 전체가 하나를 "공유"합니다. 객체를 만들 때마다 생성자가 실행되어 공유 변수 count가 1씩 늘어납니다. new를 3번 했으므로 count는 0→1→2→3이 되어 3이 출력됩니다. 만약 count가 static이 아니었다면 객체마다 자기만의 count를 갖게 되어 이런 "몇 개 만들었는지 세기"가 불가능합니다.',
    },
    {
      id: 'java-r13',
      topic: 'static·생성자',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Init {
    static int x = 10;
    int y;
    Init(int n) {
        y = n + x;
        x = x + 5;
    }
}

public class Main {
    public static void main(String[] args) {
        Init a = new Init(1);
        Init b = new Init(2);
        System.out.println(a.y + " " + b.y + " " + Init.x);
    }
}`,
      answer: '11 17 20',
      alternativeAnswers: ['11,17,20'],
      explanation:
        'x는 static이라 모든 객체가 공유하고, y는 객체마다 따로 있습니다. (1) new Init(1): y = 1 + 10 = 11 (a.y=11), 이후 x = 10+5 = 15. (2) new Init(2): 이번에는 공유 변수 x가 이미 15이므로 y = 2 + 15 = 17 (b.y=17), 이후 x = 15+5 = 20. (3) 출력: a.y=11, b.y=17, Init.x=20. 첫 번째 객체 생성이 static 변수를 바꿔 놓아서, 두 번째 객체의 계산 결과까지 달라진다는 것이 핵심입니다.',
    },
    // ── 예외 처리·인터페이스 (2) ───────────────
    {
      id: 'java-r14',
      topic: '예외 처리',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = new int[3];
            arr[3] = 10;
            System.out.print("A");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("B");
        } finally {
            System.out.print("C");
        }
    }
}`,
      answer: 'BC',
      alternativeAnswers: ['bc', 'B C'],
      explanation:
        '크기 3인 배열의 칸 번호는 0, 1, 2까지입니다. arr[3]은 없는 칸이므로 그 줄에서 ArrayIndexOutOfBoundsException(배열 범위 초과) 예외가 발생합니다. 예외가 나는 순간 try의 나머지 줄은 건너뛰므로 A는 출력되지 않습니다. 실행 흐름은 catch로 점프해 B를 출력하고, finally는 예외 발생 여부와 관계없이 항상 실행되므로 C를 출력합니다. 그래서 BC가 출력됩니다.',
    },
    {
      id: 'java-r15',
      topic: '인터페이스',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `interface Calc {
    int apply(int a, int b);
}

class Add implements Calc {
    public int apply(int a, int b) {
        return a + b;
    }
}

class Mul implements Calc {
    public int apply(int a, int b) {
        return a * b;
    }
}

public class Main {
    static int run(Calc c, int a, int b) {
        return c.apply(a, b);
    }
    public static void main(String[] args) {
        Calc[] ops = { new Add(), new Mul() };
        int r = 0;
        for (Calc op : ops) {
            r = run(op, r + 2, 3);
        }
        System.out.println(r);
    }
}`,
      answer: '21',
      alternativeAnswers: [],
      explanation:
        '인터페이스 Calc 타입 배열에 Add 객체와 Mul 객체가 순서대로 들어 있습니다. run(op, ...)에서 op.apply를 부르면, 인터페이스 타입이라도 "실제 객체"의 apply가 실행됩니다(다형성). (1) 첫 반복: op는 Add, r=0이므로 run(Add, 0+2, 3) → 2+3 = 5, r=5. (2) 두 번째 반복: op는 Mul, run(Mul, 5+2, 3) → 7×3 = 21, r=21. 앞 반복의 결과 r이 다음 반복의 입력(r+2)으로 이어지는 점까지 놓치지 않아야 합니다. 최종 출력은 21입니다.',
    },
  ],
}
