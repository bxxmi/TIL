# React 개념

React는 라이브러리이며 <b>`컴포넌트`</b>라는 단위를 사용하며 MVC 패턴의 View 처리를 담당한다. 

<h3><b>📌 컴포넌트?</b></h3>

리액트는 한 단어로 정리한다면 <b>`컴포넌트들`</b> 이라고 정의할 수 있다. 컴포넌트는 한 가지 기능을 수행하는 UI 단위를 말한다. 각 컴포넌트들은 
매우 독립적이고 재사용이 가능하다는 장점때문에 리액트를 많이 사용하고 있다. 

![그림1](https://user-images.githubusercontent.com/56878724/135272115-3b0f00e1-5c0d-4c32-8bb4-8c5c2fabea62.png)

<h3><b>📌 리액트 기본 구조</b></h3>

```jsx
// 함수형
import './app.css';

function App() {
  return <div></div>
}

export default App;

// 클래스 형
class app extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default app;
```


