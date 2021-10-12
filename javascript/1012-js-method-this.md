# 메소드와 this

자바스크립트에서는 객체의 프로퍼티에 함수를 할당할 수 있다.

<h3>📌 메소드 만들기</h3>

```javascript
let user = {
  name: 'John',
  age: 30
};

user.sayHi = function() {
  alert('hello');
};

user.sayHi(); // hello
```

위와 같이 함수 표현식으로 함수를 만들고, user 객체의 프로퍼티로 sayHi를 선언함과 동시에 할당을 했다. 이렇게 
객체 프로퍼티에 할당된 함수를 <b>`메소드`</b>라고 부르며 여기서는 sayHi가 메소드이다.

또한, 아래 예시처럼 이미 정의된 함수를 이용해서 만들 수 있다.

```javascript
let user = {
  name: 'John',
  age: 30
};

function sayHi() {
  alert('hello');
};

// 선언된 함수를 메소드로 등록
// 객체.프로퍼티명 = 함수명
// 선언된 함수를 메소드로 등록
user.sayHi = sayHi;

user.sayHi(); // hello
```

<h3>📌 메소드 단축 구문</h3>

객체 안에 메소드 선언 시 function 키워드를 생략해도 메소드를 정의할 수 있다.

```javascript
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// 단축 구문 사용
user = {
  sayHi() { 
    alert("Hello");
  }
};
```

<h3>📌 메소드와 this</h3>

메소드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 수행하는 것이다. 대부분의 메소드가 객체 프로퍼티의 값을
활용한다. 메소드 내부에서 <b>`this`</b> 키워드를 사용하면 객체에 접근할 수 있다.

```javascript
let user = {
  name: John,
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체(=user)'를 나타낸다.
    alert(this.name);
  }

};

user.sayHi(); // John
```

또한, this를 사용하지 않고 <b>`외부 변수를 참조`</b>해서 객체에 접근하는 것도 가능하다.

```javascript
let user = {
  name: John,
  age: 30,

  sayHi() {
    alert(user.name);
  }
};
```

<h3>⚠️ 주의할 점</h3>

> 이렇게 외부 변수를 통해 객체를 참조하게 되면 에러가 발생할 수 있다. 만약, user 객체를 복사해 다른 변수에 할당하고
> user 객체가 전혀 다른 값으로 덮어씌워진 경우가 생긴다면 sayHi() 메소드는 원치 않는 값을 참조할 것이다.

```javascript
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    alert( user.name ); // Error: Cannot read property 'name' of null
  }
};

let admin = user;
user = null; // user를 null로 덮어씌움

admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러 발생
```

만약, alert 함수가 <b>`this.name`</b>을 인수로 받았다면 에러가 발생하지 않았을 것이다.

<h3>📌 this</h3>

자바스크립트의 this는 다른 프로그래밍 언어와 다르게 모든 함수에서 사용할 수 있다. this 값은 <b>`런타임`</b>에 결정된다. 즉, 동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라지게 된다.

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
```

<h3>📌 화살표 함수에서의 this</h3>

화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않는다. 화살표 함수에서 this를 참조하면 화살표 함수가 아닌
그 외부 함수에서의 this 값을 가져온다.

아래 예시에서 함수 arrow()의 this는 외부 함수인 user.sayHi()의 this가 된다.

```javascript
let user = {
  firstName: "보미",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보미
```

별도의 this가 만들어지지 않고 외부에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용하다.
