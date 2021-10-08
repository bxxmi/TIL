# JSX 정리

<h3>📌 JSX는 무엇인가</h3>

<b>`JSX`</b>는 자바스크립트를 확장한 문법이다. 보통 React에서 사용하는 문법이며 HTML 코드와도 유사하지만 
자바스크립트의 모든 기능이 포함되어져 있다.

<h3>📌 JSX 기본 사용 예시</h3>

```jsx
import React, { Component } from 'react';

class habits extends Component {
  render() {
    return (
      <div>Hello :)</div>
    );
  }
}

export default habits;
```

<h3>📌 JSX 표현식 포함하기</h3>

JSX의 중괄호 안에는 유효한 모든 자바스크립트의 표현식을 넣을 수 있다. 

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

또한, 중괄호를 사용해서 어트리뷰트에 자바스크립트 표현식을 삽입할 수도 있다.

```jsx
const element = <img src={user.avatarUrl}></img>;
```

<h3>📌 JSX 형제 요소 정의</h3>

JSX는 원래 형제 요소를 정의할 수 없다. 다수의 태그들을 리턴할 수 없다는 뜻이다. 다만, 정의하고 싶은 경우 상위에 명확한 의미를 가진 태그나  
<b>`<></>`</b> 또는 <b>`React.Fragment`</b> 태그를 사용해서 묶어줘야한다.
  
```jsx
const element = (
  <ul>
    <li>Hello!</li>
    <li>Good to see you here.</li>
  </ul>
);
  
const element = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
  
const element = (
  <React.Fragment>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </React.Fragment>
);
```

<h3>⚠️ 주의할 점</h3> 

> JSX는 HTML보다 JavaScript에 가깝기 때문에 ReactDom은 HTML 어트리뷰터 이름 대신 <b>`camelCase`</b> 명명 규칙을 사용한다.
>
> 예를 들어, class 프로퍼티는 JSX에서 <b>`className`</b>이 되고, tabindex는 <b>`tabIndex`</b>가 된다.
