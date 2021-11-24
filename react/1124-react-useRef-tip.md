# useRef 사용 시 null로 초기화하는 이유

ref로 설정된 요소가 화면에 렌더링이 될 때까지는 ref가 설정되지 않기 때문에 `null`로 초기화를 해야한다.
따라서, null로 초기화하지 않으면 해당 요소가 렌더링 되어서 돔에 접근하기 전까지 무조건 `undefined` 값이 나와 오류가 발생한다.

```jsx
const inputRef = useRef(null);
```
