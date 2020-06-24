import { put, takeEvery, all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
  yield put({ type: "RECEIVE_BOOKING_DETAILS_SUCCESS" });
  console.log("Request Success!");
}
// Our Worker Saga: will perform the ansync increment task
export function* incrementAsync() {
  yield put({ type: "RECEIVE_BOOKING_DETAILS_SUCCESS" });
  console.log("Request called!");
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery("types.RECEIVE_BOOKING_DETAILS_REQUEST", incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
