// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_COMMENT } from "./commentTypes";
import { GET_COMMENTS } from "./commentTypes";

const INITIAL_STATE = {
  createdComment: {},
  error: null,
};

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_COMMENT:
      return state;
    case `${CREATE_COMMENT}_SUCCESS`:
      return {
        ...state,
        createdComment: action.payload,
        error: null,
      };
    case `${CREATE_COMMENT}_FAIL`:
      return {
        ...state,
        createdComment: {},
        error: action.payload,
      };
    case GET_COMMENTS:
      return state;
    case `${GET_COMMENTS}_SUCCESS`:
      return state;
    case `${GET_COMMENTS}_FAIL`:
      return state;
    default:
      return state;
  }
}
