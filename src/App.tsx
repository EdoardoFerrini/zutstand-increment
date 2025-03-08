import OtherComponent from "./components/OtherComponent";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

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
