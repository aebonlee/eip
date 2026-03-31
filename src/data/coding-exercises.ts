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
    // === 추가 C 문제 (c-5 ~ c-12) ===
    {
      id: 'c-5',
      title: '문자열 길이 계산',
      difficulty: 'easy',
      description: '문자열을 입력받아 길이를 출력하시오. (strlen 함수를 사용하지 않고 직접 구현)',
      input: 'Hello',
      expectedOutput: '5',
      template: `#include <stdio.h>

int main() {
    char str[100];
    scanf("%s", str);
    // 여기에 코드를 작성하세요
    // strlen을 사용하지 않고 길이를 구하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    char str[100];
    scanf("%s", str);
    int len = 0;
    while (str[len] != '\\0') {
        len++;
    }
    printf("%d", len);
    return 0;
}`,
      hint: '문자열은 NULL(\\0)로 끝납니다. 반복문으로 NULL을 만날 때까지 카운트하세요.',
    },
    {
      id: 'c-6',
      title: '배열 오름차순 정렬',
      difficulty: 'medium',
      description: '5개의 정수를 입력받아 오름차순으로 정렬하여 공백으로 구분하여 출력하시오.',
      input: '5 3 1 4 2',
      expectedOutput: '1 2 3 4 5',
      template: `#include <stdio.h>

int main() {
    int arr[5];
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    // 여기에 정렬 코드를 작성하세요

    for (int i = 0; i < 5; i++) {
        if (i > 0) printf(" ");
        printf("%d", arr[i]);
    }
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int arr[5];
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < 5; i++) {
        if (i > 0) printf(" ");
        printf("%d", arr[i]);
    }
    return 0;
}`,
      hint: '버블 정렬: 인접한 두 원소를 비교하여 교환하는 방식을 사용하세요.',
    },
    {
      id: 'c-7',
      title: '포인터 기본',
      difficulty: 'medium',
      description: '두 정수를 입력받고, 포인터를 사용하여 두 변수의 값을 교환한 후 출력하시오.',
      input: '10 20',
      expectedOutput: '20 10',
      template: `#include <stdio.h>

void swap(int *a, int *b) {
    // 여기에 코드를 작성하세요
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y);
    printf("%d %d", x, y);
    return 0;
}`,
      solution: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y);
    printf("%d %d", x, y);
    return 0;
}`,
      hint: '포인터를 역참조(*)하여 값을 읽고 쓸 수 있습니다. 임시 변수를 사용하세요.',
    },
    {
      id: 'c-8',
      title: '구조체 활용',
      difficulty: 'medium',
      description: '학생의 이름과 점수를 입력받아 출력하는 프로그램을 구조체를 사용하여 작성하시오. "이름: 점수" 형식으로 출력하시오.',
      input: 'Kim 95',
      expectedOutput: 'Kim: 95',
      template: `#include <stdio.h>

// 여기에 구조체를 선언하세요

int main() {
    // 여기에 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

struct Student {
    char name[50];
    int score;
};

int main() {
    struct Student s;
    scanf("%s %d", s.name, &s.score);
    printf("%s: %d", s.name, s.score);
    return 0;
}`,
      hint: 'struct 키워드로 구조체를 선언하고, 멤버 접근은 점(.) 연산자를 사용합니다.',
    },
    {
      id: 'c-9',
      title: '재귀 함수 - 피보나치',
      difficulty: 'medium',
      description: '정수 n을 입력받아 피보나치 수열의 n번째 값을 재귀 함수로 구하여 출력하시오. (F(1)=0, F(2)=1)',
      input: '7',
      expectedOutput: '8',
      template: `#include <stdio.h>

int fibonacci(int n) {
    // 여기에 재귀 함수를 작성하세요
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", fibonacci(n));
    return 0;
}`,
      solution: `#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return 0;
    if (n == 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", fibonacci(n));
    return 0;
}`,
      hint: 'F(1)=0, F(2)=1이 기저 조건이고, F(n) = F(n-1) + F(n-2)입니다.',
    },
    {
      id: 'c-10',
      title: '파일 문자 수 세기',
      difficulty: 'hard',
      description: '문자열을 입력받아 알파벳 대문자, 소문자, 숫자, 기타 문자의 개수를 각각 출력하시오.',
      input: 'Hello World 123!',
      expectedOutput: '2 8 3 3',
      template: `#include <stdio.h>

int main() {
    char str[200];
    // fgets로 공백 포함 문자열 입력
    fgets(str, sizeof(str), stdin);
    // 여기에 코드를 작성하세요
    // 대문자 소문자 숫자 기타 순으로 출력

    return 0;
}`,
      solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[200];
    fgets(str, sizeof(str), stdin);
    int upper = 0, lower = 0, digit = 0, other = 0;
    int len = strlen(str);
    if (str[len - 1] == '\\n') len--;
    for (int i = 0; i < len; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') upper++;
        else if (str[i] >= 'a' && str[i] <= 'z') lower++;
        else if (str[i] >= '0' && str[i] <= '9') digit++;
        else other++;
    }
    printf("%d %d %d %d", upper, lower, digit, other);
    return 0;
}`,
      hint: 'ASCII 코드 범위를 이용합니다. A~Z(65~90), a~z(97~122), 0~9(48~57)',
    },
    {
      id: 'c-11',
      title: '행렬 덧셈',
      difficulty: 'hard',
      description: '2×2 행렬 두 개를 입력받아 합을 출력하시오. 각 행은 줄바꿈, 원소는 공백으로 구분합니다.',
      input: '1 2\n3 4\n5 6\n7 8',
      expectedOutput: '6 8\n10 12',
      template: `#include <stdio.h>

int main() {
    int A[2][2], B[2][2], C[2][2];
    // 행렬 A 입력
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            scanf("%d", &A[i][j]);
    // 행렬 B 입력
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            scanf("%d", &B[i][j]);
    // 여기에 행렬 덧셈 코드를 작성하세요

    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int A[2][2], B[2][2], C[2][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            scanf("%d", &A[i][j]);
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            scanf("%d", &B[i][j]);
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            C[i][j] = A[i][j] + B[i][j];
            if (j > 0) printf(" ");
            printf("%d", C[i][j]);
        }
        if (i < 1) printf("\\n");
    }
    return 0;
}`,
      hint: '같은 위치의 원소를 더합니다. C[i][j] = A[i][j] + B[i][j]',
    },
    {
      id: 'c-12',
      title: '연결 리스트',
      difficulty: 'hard',
      description: '정수 n개를 입력받아 연결 리스트에 저장한 후 역순으로 출력하시오. 첫 줄에 n, 둘째 줄에 n개의 정수가 주어집니다.',
      input: '5\n1 2 3 4 5',
      expectedOutput: '5 4 3 2 1',
      template: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

int main() {
    int n;
    scanf("%d", &n);
    Node* head = NULL;
    // 여기에 코드를 작성하세요
    // 연결 리스트에 삽입하고 역순 출력

    return 0;
}`,
      solution: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

int main() {
    int n;
    scanf("%d", &n);
    Node* head = NULL;
    for (int i = 0; i < n; i++) {
        Node* newNode = (Node*)malloc(sizeof(Node));
        scanf("%d", &newNode->data);
        newNode->next = head;
        head = newNode;
    }
    Node* cur = head;
    while (cur != NULL) {
        if (cur != head) printf(" ");
        printf("%d", cur->data);
        cur = cur->next;
    }
    return 0;
}`,
      hint: '새 노드를 항상 head 앞에 삽입(head insert)하면 자연스럽게 역순이 됩니다.',
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
    // === 추가 Java 문제 (java-4 ~ java-12) ===
    {
      id: 'java-4',
      title: '배열 오름차순 정렬',
      difficulty: 'easy',
      description: '5개의 정수를 입력받아 오름차순으로 정렬하여 공백으로 구분하여 출력하시오.',
      input: '5 3 1 4 2',
      expectedOutput: '1 2 3 4 5',
      template: `import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();
        }
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            if (i > 0) sb.append(" ");
            sb.append(arr[i]);
        }
        System.out.println(sb.toString());
    }
}`,
      hint: 'Arrays.sort() 메서드를 사용하면 배열을 쉽게 정렬할 수 있습니다.',
    },
    {
      id: 'java-5',
      title: '클래스와 객체',
      difficulty: 'medium',
      description: '이름과 나이를 입력받아 "이름(나이)" 형식으로 출력하는 프로그램을 Person 클래스를 사용하여 작성하시오.',
      input: 'Kim 25',
      expectedOutput: 'Kim(25)',
      template: `import java.util.Scanner;

class Person {
    // 여기에 클래스를 완성하세요
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        int age = sc.nextInt();
        // Person 객체를 생성하고 출력하세요

    }
}`,
      solution: `import java.util.Scanner;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return name + "(" + age + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        int age = sc.nextInt();
        Person p = new Person(name, age);
        System.out.println(p);
    }
}`,
      hint: '생성자와 toString() 메서드를 오버라이드하세요.',
    },
    {
      id: 'java-6',
      title: '상속 활용',
      difficulty: 'medium',
      description: 'Animal 클래스를 상속받은 Dog 클래스를 작성하시오. Dog는 bark() 메서드가 있으며 "Woof!"를 출력합니다. 이름을 입력받아 "이름: Woof!" 형식으로 출력하시오.',
      input: 'Buddy',
      expectedOutput: 'Buddy: Woof!',
      template: `import java.util.Scanner;

class Animal {
    String name;
    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    // 여기에 코드를 작성하세요
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        Dog dog = new Dog(name);
        dog.bark();
    }
}`,
      solution: `import java.util.Scanner;

class Animal {
    String name;
    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
    void bark() {
        System.out.println(name + ": Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        Dog dog = new Dog(name);
        dog.bark();
    }
}`,
      hint: 'super()로 부모 클래스의 생성자를 호출하세요.',
    },
    {
      id: 'java-7',
      title: 'ArrayList 활용',
      difficulty: 'medium',
      description: '정수 n과 n개의 정수를 입력받아 ArrayList에 저장한 후, 짝수만 출력하시오. (공백 구분)',
      input: '6\n1 2 3 4 5 6',
      expectedOutput: '2 4 6',
      template: `import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(sc.nextInt());
        }
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(sc.nextInt());
        }
        StringBuilder sb = new StringBuilder();
        for (int num : list) {
            if (num % 2 == 0) {
                if (sb.length() > 0) sb.append(" ");
                sb.append(num);
            }
        }
        System.out.println(sb.toString());
    }
}`,
      hint: '% 연산자로 짝수를 판별합니다. num % 2 == 0이면 짝수입니다.',
    },
    {
      id: 'java-8',
      title: 'HashMap 활용',
      difficulty: 'medium',
      description: '문자열을 입력받아 각 문자의 출현 횟수를 알파벳 순으로 "문자:횟수" 형식으로 출력하시오.',
      input: 'hello',
      expectedOutput: 'e:1\nh:1\nl:2\no:1',
      template: `import java.util.Scanner;
import java.util.HashMap;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        // 여기에 코드를 작성하세요

    }
}`,
      solution: `import java.util.Scanner;
import java.util.HashMap;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        TreeMap<Character, Integer> map = new TreeMap<>();
        for (char c : str.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        for (var entry : map.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }
    }
}`,
      hint: 'TreeMap은 키를 자동으로 정렬합니다. getOrDefault()로 기본값을 설정하세요.',
    },
    {
      id: 'java-9',
      title: '예외 처리',
      difficulty: 'medium',
      description: '두 정수를 입력받아 나눗셈 결과를 출력하시오. 0으로 나누면 "Error"를 출력하시오.',
      input: '10 0',
      expectedOutput: 'Error',
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
        try {
            System.out.println(a / b);
        } catch (ArithmeticException e) {
            System.out.println("Error");
        }
    }
}`,
      hint: 'try-catch문으로 ArithmeticException을 처리하세요.',
    },
    {
      id: 'java-10',
      title: '인터페이스 구현',
      difficulty: 'hard',
      description: 'Calculable 인터페이스에 calculate(int a, int b) 메서드를 선언하고, Adder와 Multiplier 클래스에서 구현하시오. 두 정수를 입력받아 합과 곱을 각각 출력하시오.',
      input: '3 4',
      expectedOutput: '7\n12',
      template: `import java.util.Scanner;

interface Calculable {
    // 여기에 인터페이스 메서드를 선언하세요
}

class Adder implements Calculable {
    // 여기에 구현하세요
}

class Multiplier implements Calculable {
    // 여기에 구현하세요
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        Calculable adder = new Adder();
        Calculable multiplier = new Multiplier();
        System.out.println(adder.calculate(a, b));
        System.out.println(multiplier.calculate(a, b));
    }
}`,
      solution: `import java.util.Scanner;

interface Calculable {
    int calculate(int a, int b);
}

class Adder implements Calculable {
    public int calculate(int a, int b) {
        return a + b;
    }
}

class Multiplier implements Calculable {
    public int calculate(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        Calculable adder = new Adder();
        Calculable multiplier = new Multiplier();
        System.out.println(adder.calculate(a, b));
        System.out.println(multiplier.calculate(a, b));
    }
}`,
      hint: '인터페이스의 메서드를 각 클래스에서 다르게 구현(다형성)합니다.',
    },
    {
      id: 'java-11',
      title: '재귀 - 하노이의 탑',
      difficulty: 'hard',
      description: '정수 n을 입력받아 하노이의 탑 이동 횟수를 출력하시오.',
      input: '3',
      expectedOutput: '7',
      template: `import java.util.Scanner;

public class Main {
    static int count = 0;

    static void hanoi(int n, char from, char to, char via) {
        // 여기에 재귀 함수를 작성하세요
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        hanoi(n, 'A', 'C', 'B');
        System.out.println(count);
    }
}`,
      solution: `import java.util.Scanner;

public class Main {
    static int count = 0;

    static void hanoi(int n, char from, char to, char via) {
        if (n == 1) {
            count++;
            return;
        }
        hanoi(n - 1, from, via, to);
        count++;
        hanoi(n - 1, via, to, from);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        hanoi(n, 'A', 'C', 'B');
        System.out.println(count);
    }
}`,
      hint: 'n개의 원반: 위 n-1개를 보조 기둥으로 이동, 가장 큰 원반 이동, n-1개를 목표 기둥으로 이동. 이동 횟수 = 2^n - 1',
    },
    {
      id: 'java-12',
      title: '문자열 처리 - 회문 판별',
      difficulty: 'hard',
      description: '문자열을 입력받아 회문(Palindrome)이면 "Yes", 아니면 "No"를 출력하시오. (대소문자 구분 없음)',
      input: 'Racecar',
      expectedOutput: 'Yes',
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
        String str = sc.nextLine().toLowerCase();
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(reversed) ? "Yes" : "No");
    }
}`,
      hint: 'toLowerCase()로 소문자로 통일한 후 뒤집은 문자열과 비교하세요.',
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
    // === 추가 Python 문제 (py-5 ~ py-12) ===
    {
      id: 'py-5',
      title: '문자열 뒤집기',
      difficulty: 'easy',
      description: '문자열을 입력받아 뒤집어서 출력하시오.',
      input: 'Hello',
      expectedOutput: 'olleH',
      template: `s = input()
# 여기에 코드를 작성하세요
`,
      solution: `s = input()
print(s[::-1])`,
      hint: 'Python 슬라이싱에서 [::-1]을 사용하면 문자열을 뒤집을 수 있습니다.',
    },
    {
      id: 'py-6',
      title: '리스트 정렬',
      difficulty: 'easy',
      description: '정수 n개를 입력받아 내림차순으로 정렬하여 공백으로 구분하여 출력하시오.',
      input: '3 1 4 1 5 9 2 6',
      expectedOutput: '9 6 5 4 3 2 1 1',
      template: `numbers = list(map(int, input().split()))
# 여기에 코드를 작성하세요
`,
      solution: `numbers = list(map(int, input().split()))
numbers.sort(reverse=True)
print(' '.join(map(str, numbers)))`,
      hint: 'sort(reverse=True)로 내림차순 정렬합니다.',
    },
    {
      id: 'py-7',
      title: '딕셔너리 - 학생 점수 관리',
      difficulty: 'medium',
      description: '첫 줄에 학생 수 n, 다음 n줄에 이름과 점수가 주어집니다. 최고 점수 학생의 이름을 출력하시오.',
      input: '3\nKim 85\nLee 92\nPark 78',
      expectedOutput: 'Lee',
      template: `n = int(input())
students = {}
for _ in range(n):
    line = input().split()
    # 여기에 코드를 작성하세요

# 최고 점수 학생 출력
`,
      solution: `n = int(input())
students = {}
for _ in range(n):
    line = input().split()
    students[line[0]] = int(line[1])
print(max(students, key=students.get))`,
      hint: 'max() 함수에 key 인자를 사용하면 딕셔너리의 값을 기준으로 최대값을 찾을 수 있습니다.',
    },
    {
      id: 'py-8',
      title: '클래스 - 직사각형',
      difficulty: 'medium',
      description: 'Rectangle 클래스를 작성하시오. 가로와 세로를 입력받아 넓이와 둘레를 출력하시오.',
      input: '5 3',
      expectedOutput: '15\n16',
      template: `class Rectangle:
    # 여기에 클래스를 작성하세요
    pass

w, h = map(int, input().split())
rect = Rectangle(w, h)
print(rect.area())
print(rect.perimeter())
`,
      solution: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

w, h = map(int, input().split())
rect = Rectangle(w, h)
print(rect.area())
print(rect.perimeter())`,
      hint: '__init__으로 초기화하고, area()와 perimeter() 메서드를 구현하세요.',
    },
    {
      id: 'py-9',
      title: '파일 처리 시뮬레이션',
      difficulty: 'medium',
      description: '여러 줄의 텍스트를 입력받아 (빈 줄이 나올 때까지) 총 줄 수, 단어 수, 문자 수를 출력하시오.',
      input: 'Hello World\nPython Programming\n',
      expectedOutput: '2 4 29',
      template: `import sys

lines = []
# 여기에 코드를 작성하세요
# 표준 입력에서 모든 줄을 읽어 처리하세요
`,
      solution: `import sys

lines = sys.stdin.read().strip().split('\\n')
line_count = len(lines)
word_count = sum(len(line.split()) for line in lines)
char_count = sum(len(line) for line in lines)
print(f"{line_count} {word_count} {char_count}")`,
      hint: 'split()으로 단어를 나누고, len()으로 개수를 셉니다.',
    },
    {
      id: 'py-10',
      title: '람다와 map',
      difficulty: 'medium',
      description: '정수 n개를 입력받아 각 수의 제곱을 공백으로 구분하여 출력하시오. lambda와 map을 사용하시오.',
      input: '1 2 3 4 5',
      expectedOutput: '1 4 9 16 25',
      template: `numbers = list(map(int, input().split()))
# lambda와 map을 사용하여 각 수의 제곱을 구하세요
`,
      solution: `numbers = list(map(int, input().split()))
result = list(map(lambda x: x**2, numbers))
print(' '.join(map(str, result)))`,
      hint: 'map(lambda x: x**2, list)는 리스트의 각 원소를 제곱합니다.',
    },
    {
      id: 'py-11',
      title: '재귀 - 최대공약수',
      difficulty: 'hard',
      description: '두 정수를 입력받아 유클리드 호제법을 재귀로 구현하여 최대공약수를 출력하시오.',
      input: '48 18',
      expectedOutput: '6',
      template: `def gcd(a, b):
    # 여기에 재귀 함수를 작성하세요
    pass

a, b = map(int, input().split())
print(gcd(a, b))
`,
      solution: `def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

a, b = map(int, input().split())
print(gcd(a, b))`,
      hint: 'gcd(a, b) = gcd(b, a%b), b가 0이면 a가 최대공약수입니다.',
    },
    {
      id: 'py-12',
      title: '정규표현식 - 이메일 검증',
      difficulty: 'hard',
      description: '문자열을 입력받아 유효한 이메일 형식이면 "Valid", 아니면 "Invalid"를 출력하시오. (간단한 형식: 영문/숫자@영문.영문)',
      input: 'test@example.com',
      expectedOutput: 'Valid',
      template: `import re

email = input()
# 여기에 코드를 작성하세요
`,
      solution: `import re

email = input()
pattern = r'^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$'
if re.match(pattern, email):
    print("Valid")
else:
    print("Invalid")`,
      hint: 're.match()로 패턴을 검사합니다. ^와 $로 전체 문자열을 매칭하세요.',
    },
  ],
}

type LanguageKey = keyof typeof exercises

export function getExercises(language: string) {
  return exercises[language as LanguageKey] || []
}

export function getExerciseById(language: string, id: string) {
  const list = exercises[language as LanguageKey] || []
  return list.find((e: { id: string }) => e.id === id)
}
