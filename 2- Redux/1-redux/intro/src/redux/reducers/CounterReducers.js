import { typeCounter } from "../types/types";

const initialState = {
  count: 0,
};

export const CounterReducers = (state = initialState, action) => {
  switch (action.type) {
    case typeCounter.increment:
      console.log("entre reducers", action.payload, state);
      return { count: state.count + action.payload };
    case typeCounter.decrement:
      console.log("entre reducers", action.payload, state);

      return { count: state.count - action.payload };
    case typeCounter.reset:
      console.log("entre reducers", action.payload, state);

      return { count: action.payload };
    default:
      return state;
  }
};
