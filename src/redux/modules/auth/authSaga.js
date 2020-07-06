import { put, call, getContext } from 'redux-saga/effects'
import { queries } from './authQueries';
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { AUTH_LOGIN } from './authTypes';
import { AUTH_REGISTER } from './authTypes';
import { AUTH_LOGOUT } from './authTypes';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* authLoginReq({ email, password }) {
  const client = yield getContext('client');
  const mutation = queries.LOGIN_USER;

  return yield call(client.mutate, { mutation,
    variables: {
      email,
      password
    }
  });
}

function* authRegisterReq({ name, email, password }) {
  const client = yield getContext('client');
  const mutation = queries.REGISTER_USER;

  return yield call(client.mutate, { mutation,
    variables: {
      name,
      email,
      password
    }
  });
}

function authLogoutReq(data) {
  return data
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* authLogout(action) {
  try {
    let response = yield call(authLogoutReq, action.payload || true)
    yield put({ type: `${AUTH_LOGOUT}_SUCCESS`, payload: response })
  } catch(error) {
    yield put({ type: `${AUTH_LOGOUT}_FAIL`, payload: error })
  }
}

export function* authLogin(action) {
  try {
    const { data } = yield authLoginReq(action.payload);
    yield put({ type: `${AUTH_LOGIN}_SUCCESS`, payload: data.loginUser })
  } catch(error) {
    yield put({ type: `${AUTH_LOGIN}_FAIL`, payload: error })
  }
}

export function* authRegister(action) {
  try {
    let { data } = yield authRegisterReq(action.payload)
    yield put({ type: `${AUTH_REGISTER}_SUCCESS`, payload: data.registerUser })
  } catch(error) {
    yield put({ type: `${AUTH_REGISTER}_FAIL`, payload: error })
  }
}


