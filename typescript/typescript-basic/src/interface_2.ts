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

// interface 다중 상속
interface Person extends Country, Gender {
  phone: number;
}

// type 다중 상속
type Person = Country & Gender {
  phone: number;
}

// key 설정
interface OnlyNumberValueObject {
  [key: string]: number;
}

// 함수 규격 설정
type FooFunction = () => string;

interface IGetApi {
  // (함수의 인자: 인자의 타입) : 함수의 리턴값과 타입
  (url: string, search?:string): Promise<string>;
}

type TGetApi = {
  (url: string, search?:string): Promise<string>;
}

// 해당 함수 규격을 함수에 적용할 때는 함수 표현식을 써야한다.
const getApi: IGetApi = (url, search = '') => {
  return new Promise(resolve => resolve('ok'));
}

getApi('api/users')
.then(data => console.log(data));

// 고급 문법 (참고만 하기)
// 클래스의 경우 인스턴스를 만들기 위해 생성자가 호출된다.
// 이때, 클래스의 규격과 생성자가 만들어내는 인스턴스의 규격이 미묘하게 다를 수가 있다.
// 인터페이스를 사용하면 생성자의 타입 규격을 기술할 수 있다. 
interface IRectConstructor {
  new (x: number, y: number, width: number, height: number) : IRect;
}

class Rect implements IRect {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

// 타입 알리아스 vs 인터페이스
// 데이터를 표현할 때는 타입 알리아스
// 메소드와 같은 구체적인 행위가 포함된 객체는 인터페이스를 사용한다.
// 클래스를 묘사할 때는 클래스가 데이터와 행위를 포괄하기 때문에 인터페이스를 사용한다.