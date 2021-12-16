import React, { useReducer } from "react";

// action 타입 지정하는 type alias 생성
type Action = { type: "INCREASE" } | { type: "DECREASE" };

// 리듀서 함수는 반드시 state 타입을 반환해야 한다.
// 여기서는 따로 지정한 것이 없고 결과 값이 숫자 증감이기 때문에 number로 지정했다.
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Error!");
  }
}

function Counter() {
  // state의 타입을 지정할 때 제네릭을 사용해도 되고 생략해도 된다.
  // const [count, setCount] = useState<number>(0);
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

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
