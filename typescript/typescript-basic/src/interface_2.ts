interface Person {
  // name 변수는 읽기 전용 타입이라는 것을 명시함
  readonly name: string;
  // '?' 키워드를 통해 해당 값이 있을 수도 있고 없을 수도 있음을 나타냄
  age?: number;
}

// 인터페이스 내부에 겹치는 항목이 있는 경우
// extends 키워드를 통해 상속 받고 추가하고 싶은 항목만 작성하면 된다.
interface Developer extends Person {
  //   name: string;
  //   age?: number;
  skills: string[];
}

const person: Person = {
  name: "김보미",
  age: 26,
};

const expert: Developer = {
  name: "김보미",
  skills: ["javascript", "react"],
};
