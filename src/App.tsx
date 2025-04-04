import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counter.Slice";
import { useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();

  // const { count } = useAppSelector((state) => state.counter);

  // const handleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
