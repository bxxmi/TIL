import React, { FC } from "react";

// props 타입 지정
type GreetingsProps = {
  name: string;
  mark?: string;
};

// 함수형 컴포넌트에 타입 지정시 React.FC 키워드를 사용한다.
// FC 키워드를 사용하고 defaultProps를 지정하고 싶다면
// 위에서 props 타입 지정할 때 ? 키워드를 사용하고
// 컴포넌트의 인자로 선언 시 mark = "!" 처럼 초기화할 디폴트 값을 적어준다.
// but, function 키워드로 작성한 컴포넌트에서는 defaultProps가 정상 작동한다.
const Greetings: FC<GreetingsProps> = ({ name, mark = "!" }) => {
  return (
    <div>
      <h1>
        {name}님, 안녕하세요{mark}😃
      </h1>
    </div>
  );
};

export default Greetings;
