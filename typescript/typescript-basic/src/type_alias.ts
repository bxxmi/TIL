// interface 키워드 없이 type 키워드로도 값 형태를 지정할 수 있다.
type Person2 = {
  name: string;
  age?: number;
};

// extends 키워드 대신 & 키워드로 묶어서 상속받은 것처럼 사용할 수 있다.
type Developer2 = Person & {
  skills: string[];
};

const person2: Person2 = {
  name: "김보미2",
  age: 36,
};

const expert2: Developer2 = {
  name: "김보미2",
  skills: ["javascript", "vue"],
};

type People = Person2[];
const people: People = [person2, expert2];

type Color = "red" | "orange" | "yellow";
const color2: Color = "orange"; // able
const color3: Color = "red"; // able
const color4: Color = "yellow"; // able
// const color4: Color = "green"; disable
