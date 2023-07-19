import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";
import store, { storeSaga } from "./store";

const rootReducer = combineReducers({
  auth,
  loading,
  store,
});
export function* rootSaga() {
  yield all([authSaga(), storeSaga()]);
}

export default rootReducer;
