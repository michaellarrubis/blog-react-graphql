// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_COMMENTS } from "./commentTypes";
import { CREATE_COMMENT } from "./commentTypes";

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function getComments(data) {
  return { type: GET_COMMENTS, payload: data };
}

export function createComment(data) {
  return { type: CREATE_COMMENT, payload: data };
}
