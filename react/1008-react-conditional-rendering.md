# 조건부 렌더링

리액트에서도 특정 조건에 따라 다른 결과물을 렌더링 할 수 있다.

* App 컴포넌트에서 Hello 컴포넌트의 props값으로 `isTrue`를 설정해보자

`App.js`

```jsx
import React from 'react';
import Hello from './Hello';
import Container from './Container';


function App() {
  return (
    <Container>
      <Hello name="react" color="red" isTrue={true}/>
    </Container>
  )
}

export default App;
```

여기서 isTrue props의 값은 `boolean` 타입의 <b>자바스크립트 값</b>이기 때문에 중괄호로 감쌌다.

이때, isTrue의 값이 true 혹은 false 이냐에 따라서 컴포넌트 좌측에 * 표시를 할 것이다. 이를 처리하는
가장 기본적인 방법은 <b>`삼항연산자`</b>를 사용하는 것이다.

`Hello.js`

```jsx
import React from 'react';

function Hello({ color, name, isTrue }) {
  return (
    <div style={{color}}>
      { isTrue ? <b>*</b> : null } Hi, {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '익명'
}

export default Hello;
```

`결과`

위에서 isTrue 값이 true이면 * 표시를, 아니면 null을 보여주도록 작성했다. 필자는 App 컴포넌트에서
isTrue의 값을 true로 주었기 때문에 * 표시가 잘 출력되었다.

<img width="267" alt="스크린샷 2021-10-08 오후 5 55 37" src="https://user-images.githubusercontent.com/56878724/136528130-d7c85ad9-4b30-411a-8068-19a720308755.png">


<h3>⚠️ 주의할 점</h3>

> 참고로, JSX 에서는 null, false, undefined를 렌더링한다면 아무것도 나타나지 않는다.
> 
> 또한, 보통 삼항연산자를 사용한 조건부 렌더링은 특정 조건에 따라 보여줘야하는 내용이 다를 때 사용한다.


지금은 내용이 달라지는 것이 아니라 단순 조건에 따라 보여주고, 숨기는 기능을 하고 있는데 이와 같은 상황에서는 
<b>`&& 연산자`</b>를 사용하는 것이 더 간편하다.

`Hello.js`

```jsx
import React from 'react';

function Hello({ color, name, isTrue }) {
  return (
    <div style={{color}}>
      { isTrue && <b>*</b> } Hi, {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '익명'
}

export default Hello;
```
