import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";
import store, { storeSaga } from "./store";
import story, { storySaga } from "./story";

const rootReducer = combineReducers({
  auth,
  loading,
  store,
  story,
});
export function* rootSaga() {
  yield all([authSaga(), storeSaga(), storySaga()]);
}

export default rootReducer;
