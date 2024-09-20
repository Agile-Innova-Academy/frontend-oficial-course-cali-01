// para los types

import { put, takeEvery } from "redux-saga/effects";
import { decrement, increment, reset } from "./counterSlice";

export const INCREMENT_SAGA = "INCREMENT_SAGA";
export const DECREMENT_SAGA = "DECREMENT_SAGA";
export const RESET_SAGA = "RESET_SAGA";

//Fuction * - las peticiones, actualizacion del state / hace el trabajo real
function* incrementSaga() {
  console.log("Estoy dentro de la saga de increment");
  yield put(increment());
}
function* decrementSaga() {
  console.log("Estoy dentro de la saga de decrement");
  yield put(decrement());
}
function* resetSaga() {
  console.log("Estoy dentro de la saga de reset");
  yield put(reset());
}
// Watcher Sagas
export function* rootSaga() {
  yield takeEvery(INCREMENT_SAGA, incrementSaga);
  yield takeEvery(DECREMENT_SAGA, decrementSaga);
  yield takeEvery(RESET_SAGA, resetSaga);
}
