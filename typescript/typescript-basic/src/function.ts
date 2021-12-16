// function 함수명(인자: 인자 타입): 리턴되는 값의 타입 { ... }
function sum(x: number, y: number): number {
  return x + y;
}

// 위에서 sum 함수의 리턴 값의 타입을 number라고 지정했으니
// 자연스럽게 해당 result 변수의 데이터 타입도 number가 된다.
const result = sum(2, 4);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

// 만약, 아무런 값도 반환하지 않는 함수가 있다면 해당 함수는 void 타입으로 설정한다.
function returnNothing(): void {
  console.log("void 함수");
}

// string or number 값이 리턴되는 함수
function returnStringOrNumber(): string | number {
  return "string";
  // 또는 return 1;
}
