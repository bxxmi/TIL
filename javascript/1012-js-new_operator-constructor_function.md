# new 연산자와 생성자 함수

객체 리터럴을 사용하면 객체를 쉽게 만들 수 있다. 그런데 개발을 하다보면 유사한 기능을 하는 객체를 
여러 개 만들 때가 생긴다. 이때, <b>`new 연산자`</b>와 <b>`생성자 함수`</b>를 사용하면 유사한 객체들을 쉽게 만들 수 있다.

<h3>📌 생성자 함수</h3>

생성자 함수와 일반 함수 사이의 기술적인 차이는 없다. 다만, 생성자 함수는 아래 두 관례를 따른다.

1. 함수 이름의 첫 글자는 대문자로 시작한다.
2. 반드시 <b>`new`</b> 연산자를 붙여서 실행한다.

```javascript
// 생성자 함수 생성
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// 생성자 함수 사용
let user = new User("보미");

alert(user.name); // 보미
alert(user.isAdmin); // false
```

여기서 let user = new User("보미");는 아래 코드를 입력한 것과 동일하게 동작한다.

```javascript
let user = {
  name: "보미",
  isAdmin: false
};
```

new User("보미") 이외에도 new User("김보미"), new User("bomi") 등을 이용하면 
훨씬 간단하고 쉽게 여러 객체를 만들 수 있다.

생성자의 이처럼 재사용할 수 있는 객체 생성 코드를 구현하는 것에 큰 의의가 있다.

<h3>⚠️ 주의할 점</h3>

> 모든 함수는 생성자 함수가 될 수 있다. new 연산자를 붙여서 실행한다면 어떤 함수던 위의 예시처럼 작동한다.
> 이름의 첫 글자가 대문자인 함수는 new 연산자를 붙여서 실행해야 한다는 점을 꼭 기억해야 한다.

<h3>📌 new function() { ... }</h3>

재사용할 필요가 없는 복잡한 객체를 만들어야할 경우 익명 생성자 함수로 감싸주는 방식을 사용할 수 있다. 이렇게 
생성된 생성자 함수는 익명 함수이기 때문에 어디에도 저장되지 않는다. 처음 생성 시 단 한 번만 호출할 목적을 가지고
만들었기 때문에 재사용이 불가능한 것이다. 이렇게 익명 생성자 함수를 사용하면 재사용은 막으면서 코드를 캡슐화할 수 있다.

```javascript
let user = new function() {
  this.name = "보미";
  this.isAdmin = false;

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의 다양한 코드
};
```

<h3>📌 생성자 내 메소드</h3>

생성자 함수를 사용하면 매개변수를 이용해서 this에 프로퍼티를 더해주는 것 뿐만 아니라 메소드를 더해주는 등 객체 내부를 자유롭게 구성할 수 있다.

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  };
}

let bora = new User("김보미");

bora.sayHi(); // 내 이름은 김보미입니다.
```

<h3>📌 생성자와 return</h3>

생성자 함수엔 보통 return이 없다. 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문이다.

만약, return이 존재한다면 생기는 일은 다음과 같다.

1. 객체를 return 한다면 this 대신 객체가 반환된다.

```javascript
function BigUser() {

  this.name = "원숭이";

  return { name: "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
}

alert( new BigUser().name );  // 고릴라
```

3. 원시형을 return 한다면 return은 무시된다.

```javascript
function SmallUser() {

  this.name = "원숭이";

  return; // <-- this를 반환함
}

alert( new SmallUser().name );  // 원숭이
```
