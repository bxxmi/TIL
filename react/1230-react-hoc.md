# HOC(Higher Order Component)

리액트는 동일한 패턴이 반복되는 컴포넌트가 있을 때, 그것을 하나의 컴포넌트로 묶어서 재사용할 수 있는 기능이 있다. 바로 <b>`HOC`</b>이다.
고차 컴포넌트라고 불리기도 하며, 컴포넌트를 인자로 받고 리턴 값으로 컴포넌트를 반환하는 일종의 함수이다. (관심사를 분리한다는 측면에서는 커스텀 훅과 비슷하다.)

### 📌 예시

로딩 컴포넌트를 재사용할 것이다. 이때, 로딩 기능은 여러 곳에서 필요한 기능이니 고차 컴포넌트로 분리를 할 것이다.

<b>`1. 로딩 고차 컴포넌트 생성`</b>

```jsx
import React, { useEffect, useState } from "react";

// 고차 컴포넌트(=현 상황에서는 로딩 컴포넌트)를 사용할 컴포넌트를 인자로 받는다.
export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    });

    return loading ? <p>로딩중</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
```

<b>`2. 고차 컴포넌트를 사용하는 컴포넌트 생성`</b>

아주 단순한 예시로 버튼 컴포넌트를 만들고, 고차 컴포넌트를 사용해 볼 것이다.

```jsx
import React from "react";
import withLoading from "./withLoading";

const Button = () => {
  return <button>버튼이다</button>;
};

export default withLoading(Button);
```

위 예시와 같이 아주 단순하다. 고차 컴포넌트를 import 하고, Button 컴포넌트를 로딩 컴포넌트로 감싸면 되는 것이다.
