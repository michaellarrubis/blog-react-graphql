// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { SCROLL_LOCK } from "./utilsTypes";
import { LOGIN_FORM } from "./utilsTypes";
import { LOGIN_REGISTER_FORM } from "./utilsTypes";

const INITIAL_STATE = {
  isLoginRegisterForm: false,
  isScrollLock: false,
  isLoginForm: true,
  error: null,
};

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SCROLL_LOCK:
      return state;
    case `${SCROLL_LOCK}_SUCCESS`:
      return {
        ...state,
        isScrollLock: action.payload,
        error: null,
      };
    case `${SCROLL_LOCK}_FAIL`:
      return {
        ...state,
        isScrollLock: false,
        error: action.payload,
      };
    case LOGIN_FORM:
      return state;
    case `${LOGIN_FORM}_SUCCESS`:
      return {
        ...state,
        isLoginForm: action.payload,
        error: null,
      };
    case `${LOGIN_FORM}_FAIL`:
      return {
        ...state,
        isLoginForm: true,
        error: action.payload,
      };
    case LOGIN_REGISTER_FORM:
      return state;
    case `${LOGIN_REGISTER_FORM}_SUCCESS`:
      return {
        ...state,
        isLoginRegisterForm: action.payload,
        error: null,
      };
    case `${LOGIN_REGISTER_FORM}_FAIL`:
      return {
        ...state,
        isLoginRegisterForm: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
