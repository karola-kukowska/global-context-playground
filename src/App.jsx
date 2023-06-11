import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { data, setData } = useGlobalContext();
  return (
    <>
      <p>{data.greeting}</p>
    </>
  );
}

export default App;
