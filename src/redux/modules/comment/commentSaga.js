import { put, call, getContext } from "redux-saga/effects";
import { queries } from "./commentQueries";
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_COMMENT } from "./commentTypes";
import { GET_COMMENTS } from "./commentTypes";

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* createCommentReq({ text, postId, userId }) {
  const client = yield getContext("client");
  const mutation = queries.CREATE_COMMENT;

  return yield call(client.mutate, {
    mutation,
    variables: {
      text,
      postId,
      userId,
    },
  });
}

function getCommentsReq(data) {
  return data;
}

// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* createComment(action) {
  try {
    const { data } = yield createCommentReq(action.payload);
    yield put({
      type: `${CREATE_COMMENT}_SUCCESS`,
      payload: data.createComment,
    });
  } catch (error) {
    yield put({ type: `${CREATE_COMMENT}_FAIL`, payload: error });
  }
}

export function* getComments(action) {
  try {
    let response = yield call(getCommentsReq, action.payload);
    yield put({ type: `${GET_COMMENTS}_SUCCESS`, payload: response.data });
  } catch (error) {
    yield put({ type: `${GET_COMMENTS}_FAIL`, payload: error });
  }
}
