# PureComponent

먼저 성능 관리를 전혀 하지 않은 웹 사이트를 열어서 개발자 도구의 Components를 확인해보자.

업데이트가 발생했을 때, 모든 요소가 <b>재랜더링</b>이 되는 것을 발견할 수 있다.

소규모 웹 이라면 굳이 상관 없을 수도 있지만, 그래도 개발자라면 규모에 상관 없이 성능을 신경써야한다. 아무튼, 업데이트 된 부분만 재랜더링 되도록 하는 것이
바로 <b>`PureComponent`</b> 이다. 

<h3>📌 Pure Component</h3>

<b>`PureComponent`</b>는 리액트의 라이프 사이클 메소드 중 하나인 <b>`'shouldComponentUpdate'`</b>를 구현해서 
props와 state의 업데이트가 발생하면 <b>`'shallow comparisons(=얕은 비교)'`</b>를 한다. 이때, 오브젝트 자체가 
변경되지 않았다면 재랜더링을 하지 않는 컴포넌트이다.

<h3>💡 Tip</h3>

만약, 부모 컴포넌트와 같이 데이터의 업데이트가 빈번히 발생하고,
자식 컴포넌트가 대부분 PureComponent일 경우에는 부모 컴포넌트는 되도록 Component로 만들어 주는 것이 좋다.
왜냐면 부모 컴포넌트 안에 있는 모든 state, props 데이터를 계속 비교하는 불필요한 연산을 수행하지 않아도 되기 때문이다.

즉, 계속 업데이트 되어도 상관없는 컴포넌트라면 추가적으로 shouldComponentUpdate안에서 shallow comparisons을 하지 않아도 된다는 것이다.

> 함수형 컴포넌트에서는 memo를 사용한다.
