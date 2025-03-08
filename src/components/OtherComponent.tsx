type OtherComponentProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export default function OtherComponent({
  count,
  increment,
  decrement,
}: OtherComponentProps) {
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
