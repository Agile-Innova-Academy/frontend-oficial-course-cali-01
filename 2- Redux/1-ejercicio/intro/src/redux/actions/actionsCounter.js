import { typeCounter } from "../types/types";

export const actionIncrementSync = (incremento) => {
  console.log("entre a actions incremnto", incremento);
  return {
    type: typeCounter.increment,
    payload: incremento,
  };
};

export const actionDecreementSync = (decrement) => {
  console.log("entre a actions decre", decrement);

  return {
    type: typeCounter.decrement,
    payload: decrement,
  };
};
export const actionResetSync = (reset) => {
  console.log("entre a actions reset", reset);

  return {
    type: typeCounter.reset,
    payload: reset,
  };
};
