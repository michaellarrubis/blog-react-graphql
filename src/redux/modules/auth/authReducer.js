// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { AUTH_LOGIN } from './authTypes';
import { AUTH_REGISTER } from './authTypes';
import { AUTH_LOGOUT } from './authTypes';

const INITIAL_STATE = {
  currentUser: {},
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
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        loginError: null
      };
    case `${AUTH_LOGIN}_FAIL`:
      localStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: {},
        loginError: action.payload.graphQLErrors[0]
      };

    case AUTH_REGISTER:
      return state;
    case `${AUTH_REGISTER}_SUCCESS`:
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        registerError: null
      };
    case `${AUTH_REGISTER}_FAIL`:
      localStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: {},
        registerError: action.payload.graphQLErrors[0]
      };

    case AUTH_LOGOUT:
      return state;
    case `${AUTH_LOGOUT}_SUCCESS`:
      localStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: {},
        loginError: null,
        registerError: null
      };
    case `${AUTH_LOGOUT}_FAIL`:
      return {
        ...state,
        message: null,
        loginError: null,
        registerError: null
      };
    default: return state;
  }
}

