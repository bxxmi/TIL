# Promise

* [개념](#Promise-개념)
* [then, catch, finally](#then,-catch,-finally)
* [사용 예시](#Promise-예제)

# Promise 개념

> 하나의 <b>'서비스 공급자'</b> 라고 생각하면 쉽게 이해할 수 있다.

Promise는 비동기 요청에 대한 결과를 반환하는 객체이다. 외부 API 등을 사용해서 데이터를 요청하고 
처리할 때 많이 사용하는데 요청을 처리하고 난 후 <b>`성공(resolve)`</b> 또는 <b>`실패(reject)`</b> 콜백 중 반드시 하나를 호출한다.

Promise 객체는 아래 문법을 사용한다.

```javascript
let promise = new Promise(function(resolve, reject) {
});
```

new Promise에 전달되는 함수는 <b>`executor(=실행함수)`</b>라고 부른다. executor는 new Promise가
만들어질 때 <b>자동으로 실행</b>되며 <b>최종 결과</b>를 만들어내는 코드를 포함한다.

즉, executor는 자동으로 실행되며 여기서 요청이 처리된 결과에 따라 resolve, reject 중 하나의 
결과값을 반환한다. 따라서, 개발자는 executor 내부 로직을 작성하는 것에 집중을 해야한다.

한편, new Promise 생성자가 반환하는 promise 객체는 3가지 상태 값을 갖는다.

* <b>`pending`</b> : 초기 상태(대기)

* <b>`fulfilled`</b> : 연산 성공 (resolve 콜백 실행)

* <b>`rejected`</b> : 연산 실패 (reject 콜백 실행)

<h3>⚠️ 주의할 점</h3>

> 처리가 끝난 promise에 resolve 또는 reject를 다시 호출해도 무시된다.

# then, catch, finally

> <b>서비스 사용자를 이어주는 매개체</b>라고 생각하면 이해하기 쉽다.

* <b>`then`</b> : promise에서 가장 중요하고 기본이 되는 메소드이다. 

```javascript
promise.then(
  function(result) { ... } // 성공적인 결과를 다룬다.
  function(error) { ... } // 에러를 다룬다.
);
```

* <b>`catch`</b> : promise에서 발생한 에러를 다룰 때 사용한다.

```javascript
promise.catch(f);
```

* <b>`finally`</b> : promise가 처리된 후 결과가 어떻든 마무리가 필요한 경우 finally 메소드를 사용한다.

```javascript
promise.finally(f);
```

# Promise 예제

* 데이터 가져오기(fetch 사용)

<b>`fetch()`</b> 함수는 첫 번째 인자로 URL, 두 번째 인자로 Options 객체(생략 가능)를 받으며
promise 타입의 객체를 반환해서 promise와 함께 사용된다. API 호출이 성공했을 경우 응답 객체(=resposne)은
resolve, 실패한 경우 예외 객체(=error)를 reject 처리한다.

```javascript
const url = '주소';

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
   })
  .catch(error => {
    console.log(error);
  });
```

* 콜백 지옥 해결

> promise 사용 전 👎🏻

```javascript
function a(cb) {
  setTimeout(() => {
    console.log('a');
    cb();
  });
}

function b(cb) {
  setTimeout(() => {
    console.log('b');
    cb();
  });
}

function c(cb) {
  setTimeout(() => {
    console.log('c');
    cb();
  });
}

function d(cb) {
  setTimeout(() => {
    console.log('d');
    cb();
  });
}

function e(cb) {
  setTimeout(() => {
    console.log('e');
    cb();
  });
}

// 콜백지옥
a(() => {
  b(() => {
    c(() => {
      d(() => {
        e(() => {
          console.log('done');
        });
      })
    });
  });
});
```

> promise 사용 후 👍🏻

```javascript
function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('a');
      resolve();
    });
  })
}

function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('b');
      resolve();
    });
  })
}

function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('c');
      resolve();
    });
  })
}

function d() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('d');
      resolve();
    });
  })
}

function e() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('e');
      resolve();
    });
  })
}

a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => e())
  .then(() => console.log('Done!'));
```
