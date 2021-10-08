# Components & Props

React는 컴포넌트라는 단위를 통해 UI를 재사용이 가능한 <b>독립적</b>인 여러 조각으로 나눈다. 

<h3>📌 함수형 컴포넌트와 클래스형 컴포넌트</h3>

컴포넌트를 정의하는 가장 간단한 방법은 <b>`함수형 컴포넌트`</b>로 자바스크립트의 함수를 작성하는 것이다.

```jsx
function Example(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

다음은 클래스형 컴포넌트 선언 방식이다.

```jsx
class Example extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

사실, 클래스 형 컴포넌트의 추가적인 몇 가지 기능 빼고는 React 관점에서의 두 유형의 컴포넌트는 동일하다.

<h3>📌 사용자 정의 컴포넌트</h3>

React 엘리먼트는 DOM 태그말고도 사용자가 정의하는 사용자 정의 컴포넌트로도 나타낼 수 있다.

```jsx
const ele = <Example name="Bomi" />;
```

<h3>⚠️ 주의할 점</h3>

> 컴포넌트 이름의 첫 글자는 항상 대문자로 작성한다.

<h3>📌 컴포넌트 합성</h3>

하나의 컴포넌트를 <b>최상위 컴포넌트</b>인 <b>`App 컴포넌트`</b>를 통해 여러번 렌더링할 수 있다.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

만약, 기존 앱에 React를 통합하는 경우라면 작은 컴포넌트부터 시작해서 뷰 계층의 상위로 점진적으로 올라가는 작업이
필요할 수 있다.

<h3>📌 Props</h3>

우리가 외부에서 어떤 값을 컴포넌트에게 전달할 때 props를 사용한다.

예를 들어, 최상위 컴포넌트인 App에서 Hello 컴포넌트에게 name 이라는 값을 전달한다면
그 코드는 다음과 같다.

`App.js`

```jsx
function App() {
  return (
    <Hello name="Bomi" />
  );
}
```

`Hello.js`

```jsx
function Hello(props) {
  return <div>Hi, {props.name}</div>;
}
```

이처럼 컴포넌트에게 전달되는 props 값은 인자로 받아서 사용할 수 있다.
이때, props는 `객체 형태(Key와 Value)`로 전달된다. 


<h3>📌 여러 개의 Props, 비구조화 할당</h3>

Hello 컴포넌트에 color라는 다른 props를 전달해보자

`App.js`

```jsx
function App() {
  return (
    <Hello name="Bomi" age="26"/>
  );
}
```

`Hello.js`

```jsx
function Hello(props) {
  return <div style={{color: props.color}}>Hi, {props.name}</div>;
}
```

여기서 props의 값을 조회할 때마다 `props.` 를 사용하고 있는데 
이것을 비구조화 할당 문법을 통해 조금 더 간결한 코드로 작성할 수 있다.

`Hello.js`

```jsx
function Hello({color, name}) {
  return <div style={{color}}>Hi, {name}</div>;
}
```


<h3>📌 Props의 default 값 설정</h3>

컴포넌트에 props를 지정하지 않았을 때 <b>`defaultProps`</b> 을 통해 기본적으로 사용할 디폴트 값을 지정할 수 있다.

`Hello.js`

```jsx
function Hello({color, name}) {
  return <div style={{color}}>Hi, {name}</div>;
}

Hello.defaultProps = {
  name = '익명'
}
```

<h3>📌 props.children</h3>

개발 할 때 레이아웃 컴포넌트를 만들고, 그 컴포넌트 안에 다른 컴포넌트를 작성해야 하는 경우가 있다.
이때, <b>`props.children`</b>을 사용한다.

예를 들어 아래처럼 전체를 감싸는 container.js 가 존재한다. 

`container.js`

```jsx
import React from 'react';

function Container() {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>

    </div>
  )
}

export default Container;
```

Container 컴포넌트를 최상위 컴포넌트 App에서 Hello 컴포넌트의 상위 컴포넌트로 작성한다.

`App.js`

```jsx
import React from 'react';
import Hello from './Hello';
import Container from './Container';

function App() {
  return (
    <Container>
      <Hello name="react" color="red"/>
    </Container>
  );
}

export default App;
```

이렇게 작성하면 Container 컴포넌트의 리턴 값인 <div> 태그 안에 아까 작성한 Hello 컴포넌트의
리턴 값이 담길거라고 예상한다.
  
그러나, 예상과 달리 브라우저에는 Hello 컴포넌트가 보이지 않는다.

![HO90Kwh](https://user-images.githubusercontent.com/56878724/136525012-eae4969c-56bf-4890-9750-2056574f9e96.png)

이때, 내부의 내용 즉 Hello 컴포넌트의 리턴 값이 보여지기 위해서는 Container 컴포넌트에서 props.children을
렌더링 해줘야한다.
  
`Container.js`
  
```jsx
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;  
```
  
즉, 컴포넌트 사이에 어떤 컴포넌트가 자리 잡을 때 children을 사용한다는 것이다.
