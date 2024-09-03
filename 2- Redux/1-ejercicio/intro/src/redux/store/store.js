import { combineReducers, createStore } from "redux";
import { CounterReducers } from "../reducers/CounterReducers";
import { UserReducers } from "../reducers/UserReducers";

const reducers = combineReducers({
  contador: CounterReducers,
  usuario: UserReducers
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
