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
    // ── 이하: 대표 저작 문제집 「필수 코드 57문제」 수록분 (2026-07-18 반영, 실행 검증 완료) ──
    {
      id: 'c-r16',
      topic: '배열과 포인터',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]) {
    char str1[20] = "KOREA";
    char str2[20] = "LOVE";
    char* p1 = NULL;
    char* p2 = NULL;
    p1 = str1;
    p2 = str2;
    str1[1] = p2[2];
    str2[3] = p1[4];
    strcat(str1, str2);
    printf("%c", *(p1 + 2));
    return 0;
}`,
      answer: 'R',
      alternativeAnswers: ['r'],
      explanation:
        '문자 배열과 포인터가 섞인 문제는 배열 그림을 그려 놓고 한 줄씩 따라가면 됩니다. p1은 str1("KOREA")을, p2는 str2("LOVE")를 가리킵니다. (1) str1[1] = p2[2] : p2[2]는 str2의 세 번째 글자 V이므로 str1은 KVREA가 됩니다. (2) str2[3] = p1[4] : p1[4]는 str1의 다섯 번째 글자 A이므로 str2는 LOVA가 됩니다. (3) strcat(str1, str2)는 str1 뒤에 str2를 이어 붙여 KVREALOVA를 만듭니다. (4) *(p1 + 2)는 str1의 시작에서 두 칸 뒤, 즉 str1[2]의 값입니다. 세 번째 글자는 R이므로 R이 출력됩니다.',
    },
    {
      id: 'c-r17',
      topic: '배열과 포인터',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    int arr[2][3] = { 1, 2, 3, 4, 5, 6 };
    int (*p)[3] = NULL;
    p = arr;
    printf("%d, ", *(p[0] + 1) + *(p[1] + 2));
    printf("%d", *(*(p + 1) + 0) + *(*(p + 1) + 1));
    return 0;
}`,
      answer: '8, 9',
      alternativeAnswers: ['8,9', '8 9'],
      explanation:
        'int (*p)[3]은 "3개짜리 행을 통째로 가리키는 포인터"로, 2차원 배열 arr을 행 단위로 이동할 때 씁니다. p = arr 이후 p[0]은 1행(1,2,3)의 시작, p[1]은 2행(4,5,6)의 시작 주소입니다. (1) *(p[0]+1)은 1행의 두 번째 값 2, *(p[1]+2)는 2행의 세 번째 값 6이므로 2+6=8을 출력하고 쉼표와 공백을 붙입니다. (2) *(p+1)은 p[1]과 같은 뜻(2행의 시작)이므로 *(*(p+1)+0)은 4, *(*(p+1)+1)은 5이고 4+5=9를 출력합니다. 최종 출력은 8, 9입니다.',
    },
    {
      id: 'c-r18',
      topic: '배열과 포인터',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    static int b[9] = { 1, 2, 3 };
    printf("%d", b[5]);
    return 0;
}`,
      answer: '0',
      alternativeAnswers: [],
      explanation:
        'static을 붙인 정적 배열은 초기값을 다 채우지 않으면 나머지 요소가 자동으로 0으로 초기화됩니다. b는 9칸짜리 배열인데 1, 2, 3만 지정했으므로 b[0]=1, b[1]=2, b[2]=3이고 b[3]부터 b[8]까지는 전부 0입니다. 따라서 b[5]의 값은 0입니다. 참고로 초기값을 하나라도 지정하면 일반 배열도 나머지 칸은 0으로 채워지지만, 아무 초기화도 하지 않은 일반(auto) 배열에는 쓰레기값이 들어 있다는 차이를 기억해 두세요.',
    },
    {
      id: 'c-r19',
      topic: '배열과 포인터',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    int a[2][2] = {{11, 22}, {44, 55}};
    int i, sum = 0;
    int *p;
    p = a[0];
    for (i = 1; i < 4; i++)
        sum += *(p + i);
    printf("%d", sum);
    return 0;
}`,
      answer: '121',
      alternativeAnswers: [],
      explanation:
        '2차원 배열도 메모리에는 11, 22, 44, 55가 한 줄로 이어져 저장됩니다. p = a[0]으로 p는 첫 요소 a[0][0](11)을 가리키고, p+1은 22, p+2는 44, p+3은 55를 가리킵니다. for문에서 i가 1, 2, 3으로 변하며 sum에 *(p+i)를 누적하면 0+22=22 → 22+44=66 → 66+55=121이 됩니다. i가 4가 되면 조건 i<4가 거짓이라 종료되고 121이 출력됩니다. 첫 요소 11은 i가 1부터 시작해서 더해지지 않는다는 점이 함정입니다.',
    },
    {
      id: 'c-r20',
      topic: '연산자',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a, b;
    for (a = 0; a < 2; a++)
        for (b = 0; b < 2; b++)
            printf("%d", !a && !b);
    return 0;
}`,
      answer: '1000',
      alternativeAnswers: ['1 0 0 0'],
      explanation:
        '!a && !b 는 "a도 0이고 b도 0일 때만 1"인 식입니다. 이중 for문으로 (a,b)가 (0,0) → (0,1) → (1,0) → (1,1) 순서로 바뀌며 값을 출력하면 (0,0)일 때만 1이고 나머지는 전부 0이라 1000이 출력됩니다. 드모르간 법칙에 의해 !a && !b 는 !(a || b)와 완전히 같은 식이라는 것이 이 문제의 원래 출제 포인트입니다. 헷갈리면 이렇게 들어갈 수 있는 값을 전부 대입한 진리표를 만들어 비교하면 됩니다.',
    },
    {
      id: 'c-r21',
      topic: '연산자',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    char a;
    a = 'A' + 1;
    printf("%d", a);
    return 0;
}`,
      answer: '66',
      alternativeAnswers: [],
      explanation:
        "문자는 메모리에 저장될 때 문자 그대로가 아니라 해당 문자의 아스키 코드 값(숫자)으로 저장됩니다. 'A'는 65이므로 a = 'A' + 1 은 65 + 1 = 66이 저장됩니다. printf에서 %d로 출력하면 숫자 그대로 66이 나옵니다. 만약 %c로 출력했다면 66번 문자인 'B'가 나왔을 것입니다. 같은 값이라도 서식 문자(%d/%c)에 따라 숫자로도, 문자로도 보인다는 것이 핵심입니다.",
    },
    {
      id: 'c-r22',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int i;
    int sum = 0;
    for (i = 1; i <= 10; i = i + 2)
        sum = sum + i;
    printf("%d", sum);
    return 0;
}`,
      answer: '25',
      alternativeAnswers: [],
      explanation:
        'i가 1부터 2씩 증가하므로 i는 1, 3, 5, 7, 9로 변하며 sum에 누적됩니다: 0+1=1 → 1+3=4 → 4+5=9 → 9+7=16 → 16+9=25. i가 11이 되면 조건 i<=10이 거짓이라 반복이 끝나고, 1부터 10까지 홀수의 합인 25가 출력됩니다.',
    },
    {
      id: 'c-r23',
      topic: '연산자',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    int a = 4;
    int b = 7;
    int c = a | b;
    printf("%d", c);
    return 0;
}`,
      answer: '7',
      alternativeAnswers: [],
      explanation:
        '|(비트 OR)는 두 수를 2진수로 놓고 자리마다 "하나라도 1이면 1"로 계산하는 비트 연산자입니다. 4는 2진수로 0100, 7은 0111이므로 0100 | 0111 = 0111 = 7입니다. 따라서 c에 7이 저장되어 7이 출력됩니다. 만약 &(비트 AND)였다면 두 자리가 모두 1인 곳만 남아 0100 & 0111 = 0100 = 4가 됩니다.',
    },
    {
      id: 'c-r24',
      topic: '구조체·문자열',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

struct st {
    int a;
    int c[10];
};

int main(int argc, char* argv[]) {
    int i = 0;
    struct st ob1;
    struct st ob2;
    ob1.a = 0;
    ob2.a = 0;
    for (i = 0; i < 10; i++) {
        ob1.c[i] = i;
        ob2.c[i] = ob1.c[i] + i;
    }
    for (i = 0; i < 10; i = i + 2) {
        ob1.a = ob1.a + ob1.c[i];
        ob2.a = ob2.a + ob2.c[i];
    }
    printf("%d", ob1.a + ob2.a);
    return 0;
}`,
      answer: '60',
      alternativeAnswers: [],
      explanation:
        '구조체 st는 정수 a와 10칸 배열 c를 가진 상자이고, ob1과 ob2는 각각 독립된 상자입니다. 첫 번째 for문(i 0~9)에서 ob1.c[i] = i 이므로 ob1.c는 0~9가 되고, ob2.c[i] = ob1.c[i] + i = i + i 이므로 ob2.c는 0, 2, 4, ..., 18(짝수)이 됩니다. 두 번째 for문은 i가 0, 2, 4, 6, 8일 때만 누적합니다. ob1.a = 0+2+4+6+8 = 20, ob2.a = 0+4+8+12+16 = 40. 합계 20+40 = 60이 출력됩니다.',
    },
    {
      id: 'c-r25',
      topic: '배열과 포인터',
      difficulty: 'hard',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int n = 4;
    int* pt = NULL;
    pt = &n;
    printf("%d", &n + *pt - *&pt + n);
    return 0;
}`,
      answer: '8',
      alternativeAnswers: [],
      explanation:
        '겉보기에 어렵지만 같은 항끼리 상쇄시키면 간단해집니다. pt = &n이므로 *&pt는 pt 자신, 즉 &n과 같은 주소입니다. 식 &n + *pt - *&pt + n을 차례로 보면 (1) &n + *pt 는 주소 &n에 *pt(n의 값 4)를 더한 것이고, (2) 여기서 *&pt(= &n)를 빼면 주소끼리 상쇄되어 더했던 4만 남습니다. (3) 마지막으로 n의 값 4를 더하면 4 + 4 = 8이 출력됩니다. 포인터 식이 길면 같은 주소끼리 소거해 보는 것이 요령입니다.',
    },
    {
      id: 'c-r26',
      topic: '연산자',
      difficulty: 'medium',
      question: '정수 변수 a, b에 각각 1, 2가 저장되어 있을 때, 다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(void) {
    int a = 1, b = 2;
    printf("%d", a < b + 2 && a << 1 <= b);
    return 0;
}`,
      answer: '1',
      alternativeAnswers: [],
      explanation:
        '연산자 우선순위 문제입니다. 산술(+) → 시프트(<<) → 관계(<, <=) → 논리(&&) 순서로 계산됩니다. (1) b + 2 = 4. (2) a << 1 : 1을 왼쪽으로 1비트 밀면 2배가 되어 2. (3) a < 4 → 1 < 4 는 참(1). (4) 2 <= b → 2 <= 2 는 참(1). (5) 1 && 1 은 둘 다 참이므로 1. 그래서 1이 출력됩니다. <<(시프트)가 <=(관계)보다 우선순위가 높다는 것을 모르면 풀 수 없는 문제입니다.',
    },
    {
      id: 'c-r27',
      topic: '배열과 포인터',
      difficulty: 'medium',
      question: 'a[0]의 주소가 10일 때, 다음 C 프로그램의 출력 결과를 쓰시오. (단, int형의 크기는 4Byte로 가정한다.)',
      code: `#include <stdio.h>

int main(int argc, char* argv[]) {
    int a[] = { 14, 22, 30, 38 };
    printf("%u, ", &a[2]);
    printf("%u", a);
    return 0;
}`,
      answer: '18, 10',
      alternativeAnswers: ['18,10', '18 10'],
      explanation:
        '배열 이름 a는 배열의 시작 주소(= a[0]의 주소 = 10)입니다. int가 4Byte이므로 각 요소의 주소는 10, 14, 18, 22가 됩니다. (1) &a[2]는 세 번째 요소의 주소이므로 10 + 4×2 = 18이 먼저 출력되고 쉼표와 공백이 붙습니다. (2) a는 시작 주소 10이 출력됩니다. 그래서 18, 10입니다. 요소의 값(30)이 아니라 주소를 묻고 있으며, 주소는 "몇 번째 칸인가 × 자료형 크기"만큼 커진다는 것이 포인트입니다.',
    },
    {
      id: 'c-r28',
      topic: '연산자',
      difficulty: 'medium',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>

int main(int argc, char* argv[]) {
    int n1 = 1, n2 = 2, n3 = 3;
    int r1, r2, r3;
    r1 = (n2 <= 2) || (n3 > 3);
    r2 = !n3;
    r3 = (n1 > 1) && (n2 < 3);
    printf("%d", r3 - r2 + r1);
    return 0;
}`,
      answer: '1',
      alternativeAnswers: [],
      explanation:
        'C에서 관계·논리 연산의 결과는 참이면 1, 거짓이면 0입니다. (1) r1 = (n2 <= 2) || (n3 > 3) : 2<=2는 참, 3>3은 거짓인데 ||는 하나만 참이어도 참이므로 r1=1. (2) r2 = !n3 : n3의 값 3은 0이 아니므로 참이고, 그 부정은 거짓이라 r2=0. (3) r3 = (n1 > 1) && (n2 < 3) : 1>1이 거짓이므로 &&는 전체가 거짓이 되어 r3=0. 최종적으로 r3 - r2 + r1 = 0 - 0 + 1 = 1이 출력됩니다.',
    },
    {
      id: 'c-r29',
      topic: '구조체·문자열',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>
#include <string.h>

int main(void) {
    char str[50] = "nation";
    char *p2 = "alter";
    strcat(str, p2);
    printf("%s", str);
    return 0;
}`,
      answer: 'nationalter',
      alternativeAnswers: [],
      explanation:
        'strcat(A, B)는 A 문자열의 끝에 B 문자열을 이어 붙이는 함수입니다. str에는 "nation"이 들어 있고, 포인터 p2는 문자열 "alter"가 저장된 곳을 가리킵니다. strcat(str, p2)를 실행하면 str은 "nationalter"가 되고, %s로 출력하면 nationalter가 나옵니다. str 배열이 50칸이라 이어 붙일 공간이 충분하다는 것도 확인해 두면 좋습니다.',
    },
    {
      id: 'c-r30',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 C 프로그램의 출력 결과를 쓰시오.',
      code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    int i = 0;
    while (1) {
        if (i == 4) {
            break;
        }
        ++i;
    }
    printf("i = %d", i);
    return 0;
}`,
      answer: 'i = 4',
      alternativeAnswers: ['i=4', '4'],
      explanation:
        'while(1)은 조건이 항상 참이라 무한 반복하며, break만이 탈출구입니다. i가 0에서 시작해 ++i로 1씩 증가하다가, i가 4가 되는 순간 if (i == 4)가 참이 되어 break로 반복문을 빠져나옵니다. 반복 안에서 i는 0 → 1 → 2 → 3 → 4로 변했고, 탈출 후 printf가 "i = "라는 글자와 i의 값을 이어서 출력하므로 결과는 i = 4입니다.',
    },
    {
      id: 'c-r31',
      topic: '조건문·반복문',
      difficulty: 'medium',
      question: "다음 C 프로그램을 실행하고 'c'를 입력했을 때의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>

int main(void) {
    char ch;
    scanf("%c", &ch);
    switch (ch) {
    case 'a':
        printf("one ");
    case 'b':
        printf("two ");
    case 'c':
        printf("three ");
        break;
    case 'd':
        printf("four ");
        break;
    }
    return 0;
}`,
      answer: 'three',
      alternativeAnswers: ['three '],
      explanation:
        "switch문의 핵심은 break가 없으면 아래 case로 계속 흘러내린다(fall through)는 것입니다. 입력한 'c'에 해당하는 case 'c'로 바로 점프해 three를 출력하고, 바로 다음의 break를 만나 switch를 벗어납니다. 만약 'a'를 입력했다면 case 'a'부터 시작해 break가 나올 때까지 one two three가 모두 출력되었을 것입니다. 여기서는 'c'로 진입했으므로 three만 출력됩니다.",
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
    // ── 이하: 대표 저작 문제집 「필수 코드 57문제」 수록분 (2026-07-18 반영, 실행 검증 완료) ──
    {
      id: 'java-r16',
      topic: '연산자·형변환',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int i = 7, j = 9;
        int k;
        k = (i > j) ? (i - j) : (i + j);
        System.out.println(k);
    }
}`,
      answer: '16',
      alternativeAnswers: [],
      explanation:
        '삼항 조건 연산자는 "조건 ? 참일 때 값 : 거짓일 때 값" 형태로, if~else를 한 줄로 줄인 것입니다. 이 코드는 if (i > j) k = i - j; else k = i + j; 와 완전히 같은 뜻입니다. i=7, j=9에서 조건 i > j 는 7 > 9로 거짓이므로 콜론(:) 뒤의 식 i + j 가 선택되어 k = 7 + 9 = 16이 저장되고, 16이 출력됩니다.',
    },
    {
      id: 'java-r17',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class ovr {
    public static void main(String[] args) {
        int arr[];
        int i = 0;
        arr = new int[10];
        arr[0] = 0;
        arr[1] = 1;
        while (i < 8) {
            arr[i + 2] = arr[i + 1] + arr[i];
            i++;
        }
        System.out.println(arr[9]);
    }
}`,
      answer: '34',
      alternativeAnswers: [],
      explanation:
        '피보나치 수열을 배열로 만드는 코드입니다. arr[0]=0, arr[1]=1에서 시작해, arr[i+2] = arr[i+1] + arr[i] 로 "앞의 두 값을 더해 다음 값"을 채웁니다. i가 0부터 7까지 8번 반복하면 배열은 0, 1, 1, 2, 3, 5, 8, 13, 21, 34가 됩니다. 마지막 요소 arr[9]의 값은 34이므로 34가 출력됩니다. 표를 그려 한 칸씩 채우면 실수 없이 풀 수 있습니다.',
    },
    {
      id: 'java-r18',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 코드 출력문의 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("5 + 2 = " + 3 + 4);
        System.out.println("5 + 2 = " + (3 + 4));
    }
}`,
      answer: '5 + 2 = 34\n5 + 2 = 7',
      alternativeAnswers: ['5 + 2 = 34 5 + 2 = 7', '5+2=34 5+2=7'],
      explanation:
        'Java에서 + 는 "숫자+숫자"면 덧셈, "문자열+숫자"면 이어붙이기이며, 계산은 왼쪽부터 진행됩니다. (1) 첫 줄: "5 + 2 = " + 3 은 문자열에 숫자를 붙인 것이라 "5 + 2 = 3"이라는 문자열이 되고, 여기에 + 4 도 이어붙이기가 되어 5 + 2 = 34가 출력됩니다. (2) 둘째 줄: (3 + 4)는 괄호 덕분에 먼저 숫자 덧셈이 되어 7이고, "5 + 2 = " + 7 이라 5 + 2 = 7이 출력됩니다. 괄호 하나가 결과를 완전히 바꾸는 문제입니다.',
    },
    {
      id: 'java-r19',
      topic: '배열·문자열',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Ape {
    static void rs(char a[]) {
        for (int i = 0; i < a.length; i++)
            if (a[i] == 'B')
                a[i] = 'C';
            else if (i == a.length - 1)
                a[i] = a[i - 1];
            else a[i] = a[i + 1];
    }
    static void pca(char a[]) {
        for (int i = 0; i < a.length; i++)
            System.out.print(a[i]);
        System.out.println();
    }
    public static void main(String[] args) {
        char c[] = {'A', 'B', 'D', 'D', 'A', 'B', 'C'};
        rs(c);
        pca(c);
    }
}`,
      answer: 'BCDABCC',
      alternativeAnswers: ['bcdabcc'],
      explanation:
        'rs 메소드는 배열을 0번 칸부터 순서대로 하나씩 바꿉니다. 규칙은 (1) 현재 칸이 B면 C로 바꾸고, (2) 마지막 칸이면 바로 왼쪽 값을 복사하고, (3) 그 외에는 바로 오른쪽 값을 복사합니다. 초기 배열 A B D D A B C에서 따라가면: 0번 A → 오른쪽 B 복사, 1번은 원래 B라서 C로, 2번 D → 오른쪽 D, 3번 D → 오른쪽 A, 4번 A → 오른쪽 B, 5번 B → C, 6번은 마지막이라 왼쪽 값 C 복사. 결과 배열은 B C D A B C C가 되고, pca가 전부 이어 출력해 BCDABCC입니다. 판단 기준은 항상 "지금 시점의 배열 값"이라는 점을 놓치지 않아야 합니다.',
    },
    {
      id: 'java-r20',
      topic: '조건문·반복문',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class ovr {
    public static void main(String[] args) {
        int a = 1, b = 2, c = 3, d = 4;
        int mx, mn;
        mx = a < b ? b : a;
        if (mx == 1) {
            mn = a > mx ? b : a;
        }
        else {
            mn = b < mx ? d : c;
        }
        System.out.println(mn);
    }
}`,
      answer: '3',
      alternativeAnswers: [],
      explanation:
        '삼항 연산자와 if문이 섞인 문제는 값을 하나씩 확정하며 내려갑니다. (1) mx = a < b ? b : a : 1 < 2 는 참이므로 mx = b = 2. (2) if (mx == 1) : mx는 2라서 거짓이므로 else 블록으로 갑니다. (3) mn = b < mx ? d : c : 2 < 2 는 거짓("같다"는 "작다"가 아님)이므로 mn = c = 3. 그래서 3이 출력됩니다.',
    },
    {
      id: 'java-r21',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Rarr {
    static int[] marr() {
        int temp[] = new int[4];
        for (int i = 0; i < temp.length; i++)
            temp[i] = i;
        return temp;
    }
    public static void main(String[] args) {
        int iarr[];
        iarr = marr();
        for (int i = 0; i < iarr.length; i++)
            System.out.print(iarr[i] + " ");
    }
}`,
      answer: '0 1 2 3',
      alternativeAnswers: ['0 1 2 3 ', '0123'],
      explanation:
        'marr 메소드는 4칸짜리 배열 temp를 만들고 temp[i] = i 로 0, 1, 2, 3을 채운 뒤 배열을 반환합니다. Java에서 배열을 반환하면 배열의 시작 주소(참조)가 전달되어 iarr이 그 배열을 그대로 가리키게 됩니다. main의 for문이 iarr의 값을 공백 한 칸과 함께 차례로 출력하므로 결과는 0 1 2 3입니다. length가 4라서 인덱스 0~3까지만 도는 것도 확인 포인트입니다.',
    },
    {
      id: 'java-r22',
      topic: '조건문·반복문',
      difficulty: 'easy',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class array1 {
    public static void main(String[] args) {
        int cnt = 0;
        do {
            cnt++;
        } while (cnt < 0);
        if (cnt == 1)
            cnt++;
        else
            cnt = cnt + 3;
        System.out.printf("%d", cnt);
    }
}`,
      answer: '2',
      alternativeAnswers: [],
      explanation:
        'do~while문은 조건을 나중에 검사하므로, 조건이 거짓이어도 본문을 최소 한 번은 실행합니다. cnt=0에서 do 블록의 cnt++로 cnt=1이 되고, 그다음 조건 cnt < 0 을 검사하는데 거짓이라 반복은 거기서 끝납니다. 이어지는 if (cnt == 1)은 참이므로 cnt++로 cnt=2가 되고, 2가 출력됩니다. "일단 한 번은 실행한다"가 do~while의 전부입니다.',
    },
    {
      id: 'java-r23',
      topic: '연산자·형변환',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Operator {
    public static void main(String[] args) {
        int x = 5, y = 0, z = 0;
        y = x++;
        z = --x;
        System.out.print(x + ", " + y + ", " + z);
    }
}`,
      answer: '5, 5, 5',
      alternativeAnswers: ['5,5,5', '5 5 5'],
      explanation:
        '(1) y = x++ : 후위 증가라서 x의 현재 값 5를 y에 먼저 넣고 나서 x를 6으로 올립니다(x=6, y=5). (2) z = --x : 전위 감소라서 x를 먼저 5로 내린 뒤 그 값을 z에 넣습니다(x=5, z=5). (3) 출력은 x, y, z 순서이므로 5, 5, 5입니다. 증가했다가 다시 감소해서 x가 제자리 5로 돌아온다는 것이 이 문제의 포인트입니다.',
    },
    {
      id: 'java-r24',
      topic: '조건문·반복문',
      difficulty: 'hard',
      question: '다음 Java 프로그램을 실행하려고 할 때 어떤 결과가 나타나는지 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int x = 1, y = 6;
        while (y--) {
            x++;
        }
        System.out.println("x=" x + " y=" y);
    }
}`,
      answer: '컴파일 오류가 발생한다',
      alternativeAnswers: ['컴파일 오류', '컴파일 에러', '오류 발생', 'Unresolved compilation problem'],
      explanation:
        'Java와 C의 차이를 묻는 문제로, 이 코드는 컴파일 오류가 발생합니다. 오류는 두 곳입니다. (1) while (y--) : C에서는 0이 아니면 참으로 취급하지만, Java의 조건식은 반드시 boolean 타입이어야 하므로 int인 y--는 조건이 될 수 없습니다. (2) println("x=" x + " y=" y) : 문자열과 변수를 이을 때는 + 연산자가 필요한데 빠져 있어 문법 오류입니다. while (y-- > 0), "x=" + x + " y=" + y 로 고쳐야 실행되며, 고친 후의 결과는 x=7 y=-1이 됩니다.',
    },
    // ── 심화 보강분 (java-r25~34, 2026-07-18): 전 문제 javac+java 실행으로 출력 검증 완료 ──
    {
      id: 'java-r25',
      topic: '클래스와 상속',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Parent {
    int x = 10;
    int get() { return x; }
}
class Child extends Parent {
    int x = 20;
    int get() { return x; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.x + " " + p.get());
    }
}`,
      answer: '10 20',
      alternativeAnswers: ['10, 20'],
      explanation:
        'Parent p = new Child(); 처럼 부모 타입 변수에 자식 객체를 담았을 때, "메소드"와 "필드"의 규칙이 서로 다릅니다. 메소드 호출 p.get()은 실제 객체가 무엇인지 실행 중에 확인하는 동적 바인딩이라, 진짜 객체인 Child의 get()이 실행되어 Child의 x인 20이 나옵니다. 반면 필드 접근 p.x는 동적 바인딩이 되지 않고 "변수의 타입"(Parent)을 따라가므로 Parent의 x인 10입니다. 그래서 10 20이 출력됩니다. 오버라이딩은 메소드에만 적용되고 필드는 이름이 같으면 가려질(hiding) 뿐이라는 것이 이 문제의 함정입니다.',
    },
    {
      id: 'java-r26',
      topic: 'static·생성자',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    static int a = init("a", 1);
    int b = init("b", 2);
    static int init(String s, int v) {
        System.out.print(s);
        return v;
    }
    Main() { System.out.print("c"); }
    public static void main(String[] args) {
        System.out.print("m");
        new Main();
        new Main();
    }
}`,
      answer: 'ambcbc',
      alternativeAnswers: [],
      explanation:
        '초기화 순서를 세 단계로 나눠 봅니다. (1) static 필드 a는 클래스가 메모리에 올라갈 때 "main보다도 먼저" 딱 한 번 초기화되므로 a가 가장 먼저 출력됩니다. (2) 이어서 main이 시작되어 m이 출력됩니다. (3) new Main()을 할 때마다 인스턴스 필드 b의 초기화(b 출력)가 먼저, 그다음 생성자 본문(c 출력)이 실행됩니다. 객체를 두 번 만들므로 bc가 두 번 반복됩니다. 합치면 a → m → bc → bc, 즉 ambcbc입니다. static은 클래스당 한 번, 인스턴스 필드와 생성자는 객체마다 매번, 그리고 필드 초기화가 생성자 본문보다 먼저라는 세 가지 규칙이 핵심입니다.',
    },
    {
      id: 'java-r27',
      topic: '배열·문자열',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    static void change(String s, StringBuilder sb) {
        s = s + "X";
        sb.append("Y");
    }
    public static void main(String[] args) {
        String s = "AB";
        StringBuilder sb = new StringBuilder("AB");
        change(s, sb);
        System.out.println(s + " " + sb);
        String t = "AB";
        System.out.println((s == t) + " " + s.equals(t));
    }
}`,
      answer: 'AB ABY\ntrue true',
      alternativeAnswers: ['AB ABY true true'],
      explanation:
        'String은 불변(immutable)이라 s + "X"는 원본을 바꾸는 것이 아니라 "ABX"라는 새 문자열을 만들어 change 안의 지역 변수 s에만 담습니다. 메소드가 끝나면 그 지역 변수는 사라지므로 main의 s는 그대로 AB입니다. 반면 StringBuilder는 가변이라 sb.append("Y")가 객체 내용 자체를 ABY로 바꾸고, main의 sb도 같은 객체를 가리키므로 변경이 그대로 보입니다. 둘째 줄: "AB" 같은 문자열 리터럴은 상수 풀에 하나만 만들어 공유하므로 s == t는 주소까지 같아 true이고, 내용 비교 equals도 당연히 true입니다. 단, new String("AB")로 만들면 ==는 false가 되므로 문자열 비교는 항상 equals를 쓰는 것이 원칙입니다.',
    },
    {
      id: 'java-r28',
      topic: '배열·문자열',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        int[] b = a;
        int[] c = a.clone();
        b[0] = 10;
        c[2] = 30;
        System.out.println(a[0] + " " + a[2]);
        System.out.println(b == a);
        System.out.println(c == a);
    }
}`,
      answer: '10 3\ntrue\nfalse',
      alternativeAnswers: ['10 3 true false'],
      explanation:
        'int[] b = a; 는 배열을 복사하는 것이 아니라 "같은 배열을 가리키는 이름을 하나 더" 만드는 것입니다. 그래서 b[0] = 10으로 바꾸면 a[0]도 10으로 보입니다(같은 배열이니까요). 반면 a.clone()은 내용이 같은 "새 배열"을 만들므로 c[2] = 30으로 바꿔도 원본 a[2]는 3 그대로입니다. 첫 줄 출력은 10 3입니다. == 는 배열의 내용이 아니라 주소를 비교하므로 b == a는 true(같은 배열), c == a는 false(다른 배열)입니다. 대입은 참조 공유, clone은 복사본 — 이 구분이 배열 문제의 단골 함정입니다.',
    },
    {
      id: 'java-r29',
      topic: '인터페이스',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `interface Greet {
    default String hello() { return "IF"; }
    String name();
}
class Kor implements Greet {
    public String name() { return "KOR"; }
}
class Eng implements Greet {
    public String name() { return "ENG"; }
    public String hello() { return "HI"; }
}
public class Main {
    public static void main(String[] args) {
        Greet g1 = new Kor();
        Greet g2 = new Eng();
        System.out.println(g1.hello() + g1.name());
        System.out.println(g2.hello() + g2.name());
    }
}`,
      answer: 'IFKOR\nHIENG',
      alternativeAnswers: ['IFKOR HIENG'],
      explanation:
        '인터페이스의 default 메소드는 "구현 클래스가 안 만들면 대신 쓰이는 기본 구현"입니다. Kor는 hello()를 오버라이딩하지 않았으므로 인터페이스의 기본 구현이 실행되어 IF가 나오고, name()은 자기 것이라 KOR — 합쳐서 IFKOR입니다. Eng는 hello()를 직접 오버라이딩했으므로 자기 것 HI가 우선 실행되어 HIENG이 됩니다. 추상 메소드 name()은 구현 클래스가 반드시 만들어야 하지만 default 메소드는 선택이라는 점, 그리고 오버라이딩하면 항상 클래스 쪽이 이긴다는 점이 출제 포인트입니다.',
    },
    {
      id: 'java-r30',
      topic: 'Wrapper·오토박싱',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        Integer a = 100, b = 100;
        Integer c = 200, d = 200;
        System.out.println(a == b);
        System.out.println(c == d);
        System.out.println(c.equals(d));
        int e = 200;
        System.out.println(c == e);
    }
}`,
      answer: 'true\nfalse\ntrue\ntrue',
      alternativeAnswers: ['true false true true'],
      explanation:
        'Integer는 int를 감싼 객체(Wrapper)라서 == 는 값이 아니라 객체 주소를 비교합니다. 그런데 Java는 -128~127 범위의 Integer를 미리 만들어 재사용(캐시)하므로, a와 b(100)는 같은 객체를 받아 a == b가 true입니다. 200은 캐시 범위 밖이라 c와 d는 서로 다른 객체가 만들어져 c == d는 false이고, 값 비교인 equals는 true입니다. 마지막 c == e는 한쪽이 기본형 int라서 Integer c가 int로 자동 변환(언박싱)된 뒤 값끼리 비교되어 true입니다. 정리하면: Wrapper끼리 == 는 주소 비교(단, 작은 수는 캐시로 우연히 true), 값 비교는 equals, 기본형이 끼면 값 비교 — 세 가지 경우를 구분하는 문제입니다.',
    },
    {
      id: 'java-r31',
      topic: '예외 처리',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    static int div(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            System.out.print("E");
            return -1;
        } finally {
            System.out.print("F");
        }
    }
    public static void main(String[] args) {
        System.out.println(div(10, 2));
        System.out.println(div(5, 0));
    }
}`,
      answer: 'F5\nEF-1',
      alternativeAnswers: ['F5 EF-1'],
      explanation:
        'div(10, 2): try에서 10 / 2 = 5가 정상 계산되어 return 5로 가지만, 값을 돌려주기 직전에 finally가 반드시 실행되어 F를 먼저 출력합니다. 그 뒤 main의 println이 반환값 5를 출력해 첫 줄은 F5입니다. div(5, 0): 0으로 나누는 순간 ArithmeticException이 발생해 catch로 넘어가 E를 출력하고 return -1로 가는데, 역시 finally의 F가 먼저 찍힌 뒤 -1이 출력되어 둘째 줄은 EF-1입니다. return이 있어도, 예외가 나도 finally는 무조건 실행된다 — 그리고 출력 순서는 "함수 안의 print가 먼저, 반환값 출력은 나중"이라는 두 가지를 함께 확인하는 문제입니다.',
    },
    {
      id: 'java-r32',
      topic: '제네릭',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `class Box<T> {
    private T item;
    Box(T item) { this.item = item; }
    T get() { return item; }
}
public class Main {
    static <T> T first(T[] arr) { return arr[0]; }
    public static void main(String[] args) {
        Box<String> b1 = new Box<>("JAVA");
        Box<Integer> b2 = new Box<>(7);
        System.out.println(b1.get().length() + b2.get());
        Integer[] nums = {5, 10, 15};
        System.out.println(first(nums) + 1);
    }
}`,
      answer: '11\n6',
      alternativeAnswers: ['11 6'],
      explanation:
        '제네릭 Box<T>의 T는 "나중에 정해지는 타입 자리"입니다. Box<String> b1에서는 T가 String이 되어 b1.get()이 문자열 "JAVA"를 돌려주고, length()는 글자 수 4입니다. Box<Integer> b2에서는 T가 Integer라 b2.get()은 7이고, 4 + 7 = 11이 출력됩니다(문자열이 아니라 숫자끼리의 덧셈입니다). 제네릭 메소드 first는 배열의 첫 원소를 그 타입 그대로 돌려주므로 first(nums)는 5이고, 5 + 1 = 6이 출력됩니다. 제네릭은 실행 결과를 바꾸는 문법이 아니라 "타입을 안전하게 고정"하는 장치라서, T에 어떤 타입이 들어갔는지만 정확히 짚으면 됩니다.',
    },
    {
      id: 'java-r33',
      topic: '연산자·형변환',
      difficulty: 'hard',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    public static void main(String[] args) {
        int a = 13, b = 6;
        int x = (a & b) | (a ^ b);
        int y = a >> 2;
        int z = b << 1;
        System.out.println(x + " " + y + " " + z);
        int r = (x > 14) ? (y & 1) : (z | 1);
        System.out.println(r);
    }
}`,
      answer: '15 3 12\n1',
      alternativeAnswers: ['15 3 12 1'],
      explanation:
        '13은 2진수 1101, 6은 0110입니다. a & b(둘 다 1인 자리)는 0100 = 4, a ^ b(서로 다른 자리)는 1011 = 11이고, 둘을 |(하나라도 1)로 합치면 1111 = 15입니다(& 와 ^ 를 | 로 합치면 항상 a | b와 같아집니다). y = 13 >> 2는 오른쪽으로 두 칸 밀어 1101 → 11, 즉 3(13 ÷ 4의 몫)이고, z = 6 << 1은 왼쪽 한 칸이라 1100 = 12(6 × 2)입니다. 첫 줄은 15 3 12입니다. 삼항 연산자에서 x > 14는 15 > 14로 참이므로 앞쪽 y & 1이 선택되고, 3(11)의 마지막 비트는 1이라 r = 1이 출력됩니다. y & 1은 홀수 판별, << 1은 2배, >> n은 2의 n제곱으로 나눈 몫이라는 공식을 세트로 기억해 두세요.',
    },
    {
      id: 'java-r34',
      topic: '함수와 재귀',
      difficulty: 'medium',
      question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
      code: `public class Main {
    static int f(int n) {
        if (n <= 1) return 1;
        return n * f(n - 2);
    }
    static int g(int n) {
        if (n == 0) return 0;
        return n % 2 + g(n / 2);
    }
    public static void main(String[] args) {
        System.out.println(f(7));
        System.out.println(g(13));
    }
}`,
      answer: '105\n3',
      alternativeAnswers: ['105 3'],
      explanation:
        'f는 2씩 줄며 곱하는 재귀입니다. f(7) = 7 × f(5) = 7 × 5 × f(3) = 7 × 5 × 3 × f(1)이고, f(1)은 n <= 1이라 1을 반환하므로 7 × 5 × 3 × 1 = 105입니다(홀수만 곱하는 팩토리얼 변형). g는 2로 나눈 나머지를 더하며 내려가는 재귀로, 사실상 n을 2진수로 바꿨을 때 1의 개수를 셉니다. g(13) = 13 % 2 + g(6) = 1 + (0 + g(3)) = 1 + 0 + (1 + g(1)) = 1 + 0 + 1 + (1 + g(0)) = 1 + 0 + 1 + 1 + 0 = 3입니다. 13의 2진수가 1101이니 1이 세 개 — 검산도 맞습니다. 재귀는 "종료 조건까지 펼쳐 쓴 뒤 거꾸로 계산"하는 것이 정석 풀이법입니다.',
    },
  ],
}
