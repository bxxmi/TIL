// import Greetings_useFC from "./components/Greetings_useFC";
// import Greetings_useFunction from "./components/Greetings_useFunction";
// import Counter from "./components/Counter";
// import MyForm from "./components/MyForm";
import { SampleProvider } from "./components/ContextSample";
import ReducerSample from "./components/ReducerSample";

function App() {
  // const onClick = (name: string) => {
  //   console.log(name);
  // };
  // return <Greetings_useFunction name="김보미" onClick={onClick} />;

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;

  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
