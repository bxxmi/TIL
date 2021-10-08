# 엘리먼트 렌더링 

엘리먼트는 React의 가장 작은 단위로서 화면에 표시할 내용을 기술한다.

```jsx
const ele = <h1>Hello, Bomi :)</h1>
```

<h3>⚠️ 주의할 점</h3>

> 컴포넌트와 혼동되는 개념이다. 엘리먼트는 컴포넌트의 <b>`구성 요소`</b>이다.

<h3>📌 DOM에 엘리먼트 렌더링하기</h3>

여러 요소가 담긴 최상위 div가 있다. 해당 div 안에 들어가는 모든 엘리먼트를 ReactDOM에서 관리하기 때문에 이를 <b>`루트 DOM 노드`</b>라고 한다.
React로 구현된 애플리케이션은 일반적으로 <b>단 하나</b>의 루트 DOM 노드가 존재한다. 그러나, React를 기존 앱에 통합하려는 경우 
원하는 만큼의 독립된 루트 DOM 노드가 있을 수 있다.

React 엘리먼트를 루트 DOM 노드에 렌더링 하려면 <b>`엘리먼트`</b>와 <b>`루트 DOM 노드`</b>를 <b>ReactDom.render()</b>로 전달하면 된다.

```html
<div id="container"></div>
```
```jsx
const ele = <h1>Hello, Bomi :)</h1>;

ReactDOM.render(ele, document.getElementById('container'));
```

<h3>📌 렌더링 된 엘리먼트 업데이트</h3>

React의 엘리먼트는 <b>`불변성`</b>을 띈다. 따라서, 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식 및 속성 값을 변경할 수 없다.
업데이트 할 수 있는 유일한 방법은 새로운 엘리먼트를 생성하고 그것을 ReactDOM.render()로 다시 전달하는 것이다.

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

위 예시는 setInterval() 콜백을 통해 매 초마다 ReactDOM.render()를 호출한다.

<h3>⚠️ 주의할 점</h3>

> 실제 ReactDOM.render()는 한 번만 호출한다.


<h3>📌 변경된 부분만 업데이트</h3>

ReactDOM은 해당 엘리머트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 실질적으로 필요한 경우에만 DOM을 업데이트한다.
이것이 가능한 이유는 <b>`virtual DOM`</b> 때문이다.

![granular-dom-updates](https://user-images.githubusercontent.com/56878724/136515193-92b0d0a1-9fb5-4921-854a-db369ce25769.gif)

위에서 매 초마다 UI를 다시 그리도록 했지만 시간 부분만 계속 변경된다.
