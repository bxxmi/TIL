// ts 파일에서는 어떤 타입인지에 대한 정보를 굳이 명시하지 않아도
// 초기화된 값에 따라 어떤 타입의 변수인지 결졍된다.
let count = 0;

// string
const message: string = "hello world";
// boolean
const done: boolean = false;
// number array
const numbers: number[] = [1, 2, 3];
// string array
const messages: string[] = ["hello", "world"];
// undefined or string
// 선언 후 값을 넣을 때는 문자 또는 아래처럼 undefined를 초기화할 수 있다.
let mightBeUndefined: string | undefined = undefined;
// null or number
let nullableNumber: number | null = null;

// 변수의 값 범위 지정
let color: "red" | "orange" | "blue";
color = "red"; // able
color = "orange"; // able
color = "blue"; // able
// color = "green" disable
