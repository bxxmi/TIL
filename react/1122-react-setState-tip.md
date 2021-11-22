# setState 사용에 대한 미세한 팁

`case 1.` 만약, state를 업데이트 할 때 이전 state 값에서 계산되는 경우

컴포넌트 내의 state 값을 활용해서 계산을 하는 경우 바로 `this.setState(update)`로 설정하기 보다
`this.setState(prevState => newState)` 처럼 화살표 함수를 사용해서 새로운 state 값을 리턴하도록 하는 것이 좋다.

> ex

```jsx
<button
  onClick={() => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }}
>
Increase Btn
<button>
```
