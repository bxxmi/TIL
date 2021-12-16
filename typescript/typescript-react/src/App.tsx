// import Greetings_useFC from "./components/Greetings_useFC";
import Greetings_useFunction from "./components/Greetings_useFunction";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  return <Greetings_useFunction name="김보미" onClick={onClick} />;
}

export default App;
