import { handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { getStoreListByPage } from "../api/store";
import { call, put, takeLatest } from "redux-saga/effects";

// 액션 타입 정의
const [GET_STORE_LIST, GET_STORE_LIST_SUCCESS, GET_STORE_LIST_FAILURE] =
  createRequestActionTypes("store/GET_STORE_LIST");
const INCREASE_PAGE = "store/INCREASE_PAGE";
const INITIALIZE_PAGE = "store/INITIALIZE_PAGE";

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

// 사가 생성
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

export function* storeSaga() {
  yield takeLatest(GET_STORE_LIST, getStoreListSaga);
}

const initialState = {
  page: 0,
  stores: [],
};

const store = handleActions(
  {
    [INCREASE_PAGE]: (state) => ({
      ...state,
      page: state.page + 1,
    }),
    [INITIALIZE_PAGE]: (state) => ({
      ...state,
      page: 0,
    }),
    [GET_STORE_LIST_SUCCESS]: (state, { payload: stores }) => ({
      ...state,
      stores: [...state.stores, ...stores],
    }),
  },
  initialState
);

export default store;
