import React, { useState } from "react";

function Counter() {
  // state의 타입을 지정할 때 제네릭을 사용해도 되고 생략해도 된다.
  // const [count, setCount] = useState<number>(0);
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={onIncrease}>+1 증가</button>
        <button onClick={onDecrease}>-1 감소</button>
      </div>
    </div>
  );
}

export default Counter;
