// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { AUTH_LOGIN } from './authTypes';
import { AUTH_REGISTER } from './authTypes';
import { AUTH_LOGOUT } from './authTypes';

const INITIAL_STATE = {
  token: {},
  loginError: null,
  registerError: null
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        loginError: null
      };
    case `${AUTH_LOGIN}_SUCCESS`:
      localStorage.setItem('token', JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload,
        loginError: null
      };
    case `${AUTH_LOGIN}_FAIL`:
      localStorage.removeItem('token');
      return {
        ...state,
        token: {},
        loginError: action.payload.graphQLErrors[0]
      };

    case AUTH_REGISTER:
      return state;
    case `${AUTH_REGISTER}_SUCCESS`:
      localStorage.setItem('token', JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload,
        registerError: null
      };
    case `${AUTH_REGISTER}_FAIL`:
      localStorage.removeItem('token');
      return {
        ...state,
        token: {},
        registerError: action.payload.graphQLErrors[0]
      };

    case AUTH_LOGOUT:
      return state;
    case `${AUTH_LOGOUT}_SUCCESS`:
      localStorage.removeItem('token');
      return {
        ...state,
        token: {},
        error: null
      };
    case `${AUTH_LOGOUT}_FAIL`:
      return {
        ...state,
        message: null,
        error: action.payload
      };
    default: return state;
  }
}

