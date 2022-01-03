type MyObject = {
  name: string;
  age: number;
  getFamilyName: () => string;
  getBloodType: () => string;
  getLastName: () => string;
};

const obj: MyObject = {
  // name, age는 속성
  name: "Bomi",
  age: 27,
  // getFamilyName은 메소드
  getFamilyName: function () {
    return "Kim";
  },
  // 축약형 메소드
  getBloodType() {
    return "B";
  },
  // arrow (가장 많이 쓰는 형태)
  getLastName: () => "Kim",
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();

// 현실적으로 사람의 나이가 세자리수가 되지 않는다.
// 이런 터무니없는 값을 제한하기 위해 class getter, setter 사용
obj.age = 200;
obj.age = -500;

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  // 값 설정
  set bloodType(btype: string) {
    if (btype === "A" || btype === "B" || btype === "O" || btype === "AB") {
      this._bloodType = btype;
    }
  }

  // 값 조회
  get bloodType() {
    return `${this._bloodType}형`;
  }
}

const p1 = new Person("B");
p1.bloodType;
// setter 함수 때문에 값을 대입해서 사용할 수 있음
p1.bloodType = "C";
