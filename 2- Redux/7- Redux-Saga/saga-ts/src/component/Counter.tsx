import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { DECREMENT_SAGA, INCREMENT_SAGA, RESET_SAGA } from "../redux/counter/counterSaga";

const Counter = () => {
    const dispatch = useDispatch()
   const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1>Counter:{counter} </h1>
      <button onClick={() => dispatch({ type: INCREMENT_SAGA })}>+1</button>
      <button onClick={() => dispatch({ type: RESET_SAGA })}>0</button>
      <button onClick={() => dispatch({ type: DECREMENT_SAGA })}>-1</button>
    </div>
  );
};

export default Counter;
