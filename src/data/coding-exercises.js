// 코딩 실습 문제 데이터

export const languages = {
  c: { id: 'c', name: 'C', monacoId: 'c', judge0Id: 50, icon: 'C' },
  java: { id: 'java', name: 'Java', monacoId: 'java', judge0Id: 62, icon: 'J' },
  python: { id: 'python', name: 'Python', monacoId: 'python', judge0Id: 71, icon: 'P' },
}

export const exercises = {
  c: [
    {
      id: 'c-1',
      title: '두 수의 합',
      difficulty: 'easy',
      description: '두 정수 a와 b를 입력받아 합을 출력하는 프로그램을 작성하시오.',
      input: '3 5',
      expectedOutput: '8',
      template: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // 여기에 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}`,
      hint: 'printf 함수를 사용하여 a + b의 결과를 출력하세요.',
    },
    {
      id: 'c-2',
      title: '구구단 출력',
      difficulty: 'easy',
      description: '정수 n을 입력받아 n단의 구구단을 출력하시오. (n * 1 = ? 형식)',
      input: '3',
      expectedOutput: '3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27',
      template: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // 여기에 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= 9; i++) {
        printf("%d * %d = %d\\n", n, i, n * i);
    }
    return 0;
}`,
      hint: 'for 반복문을 사용하여 1부터 9까지 곱하세요.',
    },
    {
      id: 'c-3',
      title: '팩토리얼 계산',
      difficulty: 'medium',
      description: '정수 n을 입력받아 n!(팩토리얼)을 계산하여 출력하시오.',
      input: '5',
      expectedOutput: '120',
      template: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // 여기에 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    printf("%d", result);
    return 0;
}`,
      hint: '반복문으로 1부터 n까지 차례로 곱하세요.',
    },
    {
      id: 'c-4',
      title: '배열 최대값',
      difficulty: 'medium',
      description: '5개의 정수를 입력받아 최대값을 출력하시오.',
      input: '3 7 1 9 4',
      expectedOutput: '9',
      template: `#include <stdio.h>

int main() {
    int arr[5];
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    // 여기에 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int arr[5];
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    int max = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) max = arr[i];
    }
    printf("%d", max);
    return 0;
}`,
      hint: '첫 번째 원소를 최대값으로 놓고, 나머지와 비교합니다.',
    },
  ],
  java: [
    {
      id: 'java-1',
      title: '두 수의 합',
      difficulty: 'easy',
      description: '두 정수를 입력받아 합을 출력하는 프로그램을 작성하시오.',
      input: '3 5',
      expectedOutput: '8',
      template: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + b);
    }
}`,
      hint: 'System.out.println()을 사용하여 출력하세요.',
    },
    {
      id: 'java-2',
      title: '문자열 뒤집기',
      difficulty: 'easy',
      description: '문자열을 입력받아 뒤집어서 출력하시오.',
      input: 'Hello',
      expectedOutput: 'olleH',
      template: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb.reverse().toString());
    }
}`,
      hint: 'StringBuilder의 reverse() 메서드를 사용하세요.',
    },
    {
      id: 'java-3',
      title: '피보나치 수열',
      difficulty: 'medium',
      description: '정수 n을 입력받아 피보나치 수열의 n번째 값을 출력하시오. (1번째=0, 2번째=1)',
      input: '7',
      expectedOutput: '8',
      template: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a = 0, b = 1;
        for (int i = 2; i < n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        System.out.println(n <= 1 ? 0 : b);
    }
}`,
      hint: '이전 두 수를 더하여 다음 수를 구합니다.',
    },
  ],
  python: [
    {
      id: 'py-1',
      title: '두 수의 합',
      difficulty: 'easy',
      description: '두 정수를 입력받아 합을 출력하는 프로그램을 작성하시오.',
      input: '3 5',
      expectedOutput: '8',
      template: `a, b = map(int, input().split())
# 여기에 코드를 작성하세요
`,
      solution: `a, b = map(int, input().split())
print(a + b)`,
      hint: 'print() 함수를 사용하세요.',
    },
    {
      id: 'py-2',
      title: '리스트 합계',
      difficulty: 'easy',
      description: '정수 n개를 입력받아 합계를 출력하시오.',
      input: '1 2 3 4 5',
      expectedOutput: '15',
      template: `numbers = list(map(int, input().split()))
# 여기에 코드를 작성하세요
`,
      solution: `numbers = list(map(int, input().split()))
print(sum(numbers))`,
      hint: 'sum() 내장 함수를 사용하세요.',
    },
    {
      id: 'py-3',
      title: '소수 판별',
      difficulty: 'medium',
      description: '정수 n을 입력받아 소수이면 "Prime", 아니면 "Not Prime"을 출력하시오.',
      input: '7',
      expectedOutput: 'Prime',
      template: `n = int(input())
# 여기에 코드를 작성하세요
`,
      solution: `n = int(input())
if n < 2:
    print("Not Prime")
else:
    is_prime = True
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            is_prime = False
            break
    print("Prime" if is_prime else "Not Prime")`,
      hint: '2부터 √n까지 나누어보아 나머지가 0인 수가 있으면 소수가 아닙니다.',
    },
    {
      id: 'py-4',
      title: '딕셔너리 활용',
      difficulty: 'medium',
      description: '문자열을 입력받아 각 문자의 출현 횟수를 "문자:횟수" 형태로 출력하시오. (알파벳 순)',
      input: 'hello',
      expectedOutput: 'e:1\nh:1\nl:2\no:1',
      template: `s = input()
# 여기에 코드를 작성하세요
`,
      solution: `s = input()
counts = {}
for c in s:
    counts[c] = counts.get(c, 0) + 1
for key in sorted(counts.keys()):
    print(f"{key}:{counts[key]}")`,
      hint: '딕셔너리의 get() 메서드와 sorted() 함수를 활용하세요.',
    },
  ],
}

export function getExercises(language) {
  return exercises[language] || []
}

export function getExerciseById(language, id) {
  const list = exercises[language] || []
  return list.find(e => e.id === id)
}
