# 이벤트 핸들링 

<h3>⚠️ 주의할 점</h3>

> 1. 리액트의 이벤트는 소문자 대신 <b>`camelCase`</b>를 사용하며 JSX를 통해 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.

`HTML`

```javascript
<button onclick = "active()"></button>
```

`React`

```jsx
<button onClick = {active}></button>
```

> 2. 또한, 리액트에서는 <b>`preventDefault`</b>를 명시적으로 호출해야한다. false를 반환해도 기본 동작을 방지할 수 없기 때문이다.

`HTML`

```javascript
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

`React`

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

<h3>📌 이벤트 핸들러 정의 방법</h3>

리액트를 사용할 때 addEventListener를 호출할 필요가 없다. 다만, 엘리먼트가 <b>처음 렌더링 될 때 리스너를 제공</b>하면 된다.

ES6 클래스를 사용해서 컴포넌트를 정의할 때 일반적인 패턴은 이벤트 핸들러를 클래스의 <b>`메소드`</b>로 만드는 것이다.
그 예로 아래 Toggle 컴포넌트는 사용자가 ON/OFF 상태를 토글 할 수 있는 버튼을 렌더링한다.

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // JSX 콜백 안에서 `this`가 작동하려면 아래와 같이 바인딩 해줘야 한다.
    // 자바스크립트에서 클래스 메소드는 기본적으로 바인딩 되어 있지 않기 때문이다.
    // 만약, this.handleClick을 바인딩 하지 않고 전달했다면 함수 호출 시 this는 undefined가 된다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      // 일반적으로 onClick={this.handleClick} 처럼 ()를 사용하지 않고
      // 메소드를 참조할 경우 해당 메소드를 바인딩 해야한다.
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
