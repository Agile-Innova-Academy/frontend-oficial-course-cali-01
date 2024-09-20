import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./counter/counterSaga";
import counterSlice from "./counter/counterSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    // aquí van los reducers maneja los estados
    counter : counterSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 🔥 Corre el saga
 sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
