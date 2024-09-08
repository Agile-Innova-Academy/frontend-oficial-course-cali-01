import { useDispatch, useSelector } from "react-redux";
import {
  actionDecreementSync,
  actionIncrementSync,
  actionResetSync,
} from "../redux/actions/actionsCounter";
import Listar from "./Listar";
import Home from "./Home";

const CambiarState = () => {
  // hacer el disparo - useDispatch
  const dispatch = useDispatch();

  // traerme la información  useSelector
  const { count } = useSelector((state) => state.contador);

  return (
    <>
      <h1>Estado: {count} </h1>
      <button onClick={() => dispatch(actionIncrementSync(1))}>+ 1</button>
      <button onClick={() => dispatch(actionResetSync(0))}>Reset</button>
      <button onClick={() => dispatch(actionDecreementSync(1))}>-1</button>
      <Home />
      <br></br>
      <Listar />
    </>
  );
};

export default CambiarState;
