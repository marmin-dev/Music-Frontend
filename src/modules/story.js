import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { postStory } from "../api/story";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const CHANGE_STORY_FIELD = "story/CHANGE_STORY_FIELD";
const INITIALIZE_FORM = "story/INITIALIZE_FORM";

const [CREATE_STORY, CREATE_STORY_SUCCESS, CREATE_STORY_FAILURE] =
  createRequestActionTypes("story/CREATE_STORY");

export const changeStoryField = createAction(
  CHANGE_STORY_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const createStory = createAction(
  CREATE_STORY,
  ({ songName, artist, uri, emotion, content }) => ({
    // userId,
    // storeId,
    songName,
    artist,
    uri,
    emotion,
    content,
  })
);

const initialState = {
  story: {
    songName: "",
    artist: "",
    uri: "",
    emotion: "",
    content: "",
    // userId: localStorage.getItem("userId"),
    // storeId: window.location.pathname.split("/")[3],
  },
};

const createStorySaga = createRequestSaga(CREATE_STORY, postStory);

export function* storySaga() {
  yield takeLatest(CREATE_STORY, createStorySaga);
}

const story = handleActions(
  {
    [CHANGE_STORY_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft["story"][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: story }) => ({
      ...state,
      [story]: initialState[story],
      createError: null,
    }),
    [CREATE_STORY_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      createError: null,
      create,
    }),
    [CREATE_STORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      createError: error,
    }),
  },
  initialState
);
export default story;
