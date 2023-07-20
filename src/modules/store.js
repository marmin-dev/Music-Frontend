import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { getStoreListByPage, createStore } from "../api/store";
import { call, put, takeLatest } from "redux-saga/effects";
import { produce } from "immer";

// 액션 타입 정의
const [GET_STORE_LIST, GET_STORE_LIST_SUCCESS, GET_STORE_LIST_FAILURE] =
  createRequestActionTypes("store/GET_STORE_LIST");
const INCREASE_PAGE = "store/INCREASE_PAGE";
const INITIALIZE_PAGE = "store/INITIALIZE_PAGE";

const [CREATE_STORE, CREATE_STORE_SUCCESS, CREATE_STORE_FAILURE] =
  createRequestActionTypes("store/CREATE_STORE");
const CHANGE_FIELD = "store/CHANGE_FIELD";
const INITIALIZE_FORM = "store/INITIALIZE_FORM";
// ------------------------------------------------------
// 액션 생성
export const getStoreList = (page) => ({
  type: GET_STORE_LIST,
  payload: page,
});
export const increasePage = () => ({
  type: INCREASE_PAGE,
});
export const initializePage = () => ({
  type: INITIALIZE_PAGE,
});

export const changeStoreField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const postStore = createAction(
  CREATE_STORE,
  ({ storeName, userId }) => ({
    storeName,
    userId,
  })
);

// 사가 생성
// -----------------------------------------------------------
export function* getStoreListSaga(action) {
  try {
    const stores = yield call(getStoreListByPage, action.payload);
    yield put({
      type: GET_STORE_LIST_SUCCESS,
      payload: stores,
    });
  } catch (error) {
    yield put({
      type: GET_STORE_LIST_FAILURE,
      payload: error,
      error: true,
    });
  }
}

const createStoreSaga = createRequestSaga(CREATE_STORE, createStore);

export function* storeSaga() {
  yield takeLatest(GET_STORE_LIST, getStoreListSaga);
  yield takeLatest(CREATE_STORE, createStoreSaga);
}
// --------------------------------------------------------
const initialState = {
  page: 0,
  stores: [],
  createStore: {
    userId: Number(localStorage.getItem("userId")),
    storeName: "",
  },
};
// ---------------------------------------------------------
const store = handleActions(
  {
    [INCREASE_PAGE]: (state) => ({
      ...state,
      page: state.page + 1,
    }),
    [INITIALIZE_PAGE]: (state) => ({
      ...state,
      stores: [],
      page: 0,
    }),
    [GET_STORE_LIST_SUCCESS]: (state, { payload: stores }) => ({
      ...state,
      stores: [...state.stores, ...stores],
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["createStore"][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: createStore }) => ({
      ...state,
      [createStore]: initialState[createStore],
      createError: null,
    }),
    [CREATE_STORE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      createError: error,
    }),
    [CREATE_STORE_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      createError: null,
      create,
    }),
  },
  initialState
);

export default store;
