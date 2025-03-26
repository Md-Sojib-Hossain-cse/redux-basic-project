import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counter.Slice";
import { useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";

function App() {
  const dispatch = useDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Counter With Redux</h1>
      <div>
        <Button onClick={() => handleIncrement(1)}>increment</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>decrement</Button>
      </div>
    </>
  );
}

export default App;
