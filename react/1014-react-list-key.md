# 리스트와 키

리액트에서 엘리먼트 모음을 만들고 중괄호를 이용해서 JSX에 포함 시킬 수 있다.

<h3>📌 여러 개의 컴포넌트 렌더링</h3>

* 각 항목에 대해 li 엘리먼트 반환 후 listItems 변수에 저장

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);
```

* DOM에 렌더링

```
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

해당 코드는 1부터 5까지의 숫자로 이루어진 리스트를 보여준다.

<h3>📌 기본 리스트 컴포넌트</h3>

일반적으로 컴포넌트 안에서 리스트를 렌더링한다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

해당 코드를 실행하면 리스트의 각 항목에 대해 <b>`key`</b>를 넣으라는 경고가 뜬다.
<b>`key`</b>는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트이다.

* key 누락 해결

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

<h3>📌 Key</h3>

리액트가 변경,추가, 삭제 작업을 할 때 어떤 항목인지 식별하는 것을 돕는다.
key는 안정적인 고유함을 부여하기 위해 <b>배열 내부 엘리먼트에 지정</b>해야 한다.
key를 선택하는 가장 좋은 방법은 고유하게 식별할 수 있는 <b>`문자열`</b>을 사용하는 것이다.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

> 대부분의 경우 데이터의 ID 값을 key로 사용한다.

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

만약, 렌더링 한 항목에 대해 안정적인 고유 값이 없다면 최후의 수단으로 인덱스를 사용한다.

```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

그러나, 항목의 순서가 바뀔 수 있는 경우 key에 인덱스를 사용하지 않는다.
이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있기 때문이다.

리스트 항목에 key 값을 명시하지 않으면 기본적으로 인덱스 값을 key 로 사용한다.

<h3>📌 Key를 사용해서 컴포넌트 추출하기</h3>

키는 주변 배열에 대해서만 의미를 가진다.

만약, ListItem 컴포넌트를 추출한 경우 ListItem의 li 엘리머트가 아니라 
배열 형태의 `<ListItem />` 엘리먼트가 key를 가져야 한다.

* Wrong 👎🏻

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 틀렸습니다! 여기에 key를 지정해야 합니다.
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

* Great 👍🏻

```jsx
function ListItem(props) {
  // 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 맞습니다! 배열 안에 key를 지정해야 합니다.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

<h3>⚠️ 주의할 점</h3>

> Key는 형제 사이에서만 고유한 값을 사용한다. 즉, 다른 배열을 만들 때 동일한 key를 사용할 수 있다.
> 리액트에서 Key는 힌트를 제공하지만 컴포넌트로 전달하지는 않는다. 따라서, 컴포넌트에서 key와 동일한 값이 필요하면 다른 이름의 prop으로 명시해서 전달하면 된다.
