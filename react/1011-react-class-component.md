# 클래스 컴포넌트

클래스 컴포넌트는 잘 사용하지 않는 선언 방법이다. 코드 재사용성이 떨어지고 코드 구성이 어렵기 때문이다.

> ex) function을 쓰고 안쓰고에 따라서 this가 바뀌고, this 유무에 따라 이벤트 핸들러 등록 방식이 다름

그래도, 어딘가에는 쓰일 수 있는 방식일 수도 있고 함수형 컴포넌트 + Hooks 로 못하는 작업이 있을 수 있으니까
정리를 해보려고 한다.

<h3>📌 클래스형 컴포넌트 선언 방식</h3>

* 함수형 컴포넌트

```jsx
import React from 'react';

function Hello({color, name, isSpecial}) {
  return (
    <div style = {{ color }}>
      {isSpecial && <b>*</b>} 안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;
``` 

* 클래스형 컴포넌트 

클래스형 컴포넌트를 선언할 때는 꼭 <b>`render()`</b> 메소드가 필요하며 props를 조회할 때는 
this.props를 통해 조회한다. 또, 디폴트 값을 정의할 때 함수형과 똑같이 해도 되지만 <b>`static`</b> 키워드를 통해
선언할 수도 있다.

```jsx
import React, { Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음'
  };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

export default Hello;
```

<h3>📌 클래스형 컴포넌트 상태 선언</h3>

클래스형 컴포넌트에서 상태를 관리할 때는 객체 형태인 state를 사용한다. state를 선언할 때에는 constructor 내부에서 
<b>`this.state`</b>를 설정하면 된다. 또한, render 메소드에서 this.state를 통해 state를 조회할 수 있다.

만약, 화살표 함수 문법을 사용하여 메서드를 작성 할 수 있게 해줬던 class-properties 문법이 적용되어 있다면 굳이 constructor 를 작성하지 않고도 다음과 같이
state 를 설정해줄 수 있다.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncrease = () => {
    console.log('increase');
    console.log(this);
  };

  handleDecrease = () => {
    console.log('decrease');
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```

<h3>📌 클래스형 컴포넌트 상태 업데이트</h3>

상태를 업데이트 할 때에는 <b>`this.setState`</b>를 사용하면 된다.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```
