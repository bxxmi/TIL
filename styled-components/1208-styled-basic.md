# 💅🏻 Styled-components 정리

자바스크립트 안에 CSS를 작성하는 기술인 <b>CSS in JS</b> 중에서 `styled-components`에 대해 정리할 것이다.
자바스크립트 문법으로 쉽고 빠르게 요소에 대한 스타일을 지정할 수 있고, 또 재사용성이 엄청 좋아지기 때문에 익혀두면 아주 좋은
기술이라고 생각한다.

> styled-components는 `Tagged Template Literal`이라는 ES6 문법을 사용한다.

<h3>📌 styled-components 설치하기</h3>

리액트 환경에서 설치하는 방법은 아래와 같다.

```cmd
$ npx create-react-app exercise-styled-components
$ cd exercise-styled-components
$ yarn add styled-components 
```

설치 후 본격적으로 styled-components를 사용해보자!

<h3>📌 styled-components 기본 문법</h3>

설치 후 jsx 파일에서 사용하는 방법은 간단하다.

```jsx
import React from 'react';
// import!
import styled from 'styled-components';

function App() {
  return <Circle />;
}

// styled.요소`요소에 지정할 스타일 선언`
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

export default App;
```

💡 이때, 스타일 컴포넌트는 아래에 적어두는 것이 가독성에 좋다.

<h3>📌 styled-components props</h3>

부모로부터 전달받은 스타일 속성을 props으로 받아서 조건에 따라 스타일을 입힐 수도 있다. 

```jsx
import React from 'react';
import styled from 'styled-components';

function App() {
  return <Circle color="blue" />;
}

// App에서 전달받은 color props를 사용
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

export default App;
```
