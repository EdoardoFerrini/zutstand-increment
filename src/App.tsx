import { useState } from "react";
import OtherComponent from "./components/OtherComponent";

function App() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((s) => s + 1);
  }

  function decrement() {
    setCount((s) => s - 1);
  }

  return (
    <>
      <OtherComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}

export default App;
