import React, { createContext, Dispatch, useContext, useReducer } from "react";

type Color = "red" | "orange" | "blue";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 리듀서 함수는 반드시 state 타입을 반환해야 한다.
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.count };
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SET_COLOR":
      return { ...state, color: action.color };
    case "TOGGLE_GOOD":
      return { ...state, isGood: !state.isGood };
    default:
      throw new Error("Error!");
  }
}

// state 관리 context
const SampleStateContext = createContext<State | null>(null);
// dispatch 관리 context
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

export function SampleProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
