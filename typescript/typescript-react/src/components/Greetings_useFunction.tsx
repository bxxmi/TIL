import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  // 파라미터로 string 타입의 name을 가져오지만 반환하는 값이 없는 onClick 함수 props
  onClick: (name: string) => void;
};

function Greetings_useFunction({
  name,
  mark,
  optional,
  onClick,
}: GreetingsProps) {
  const clickHandler = () => onClick(name);

  return (
    <div>
      <h1>
        {name}님, 안녕하세요{mark}😃
      </h1>
      {optional && <p>optional: {optional}</p>}
      <button onClick={clickHandler}>CLICK</button>
    </div>
  );
}

// function 키워드 사용 시 defaultProps 정상 작동!
Greetings_useFunction.defaultProps = {
  mark: "!",
};

export default Greetings_useFunction;
