import { put, call } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { LOGIN_FORM } from './utilsTypes';
import { LOGIN_REGISTER_FORM } from './utilsTypes';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function loginFormReq(data) {
  return data
}

function loginRegisterFormReq(data) {
  return data
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* loginForm(action) {
  try {
    let response = yield call(loginFormReq, action.payload)
    yield put({ type: `${LOGIN_FORM}_SUCCESS`, payload: response })
  } catch(e) {
    yield put({ type: `${LOGIN_FORM}_FAIL`, payload: e.response })
  }
}

export function* loginRegisterForm(action) {
  try {
    let response = yield call(loginRegisterFormReq, action.payload)
    yield put({ type: `${LOGIN_REGISTER_FORM}_SUCCESS`, payload: response })
  } catch(e) {
    yield put({ type: `${LOGIN_REGISTER_FORM}_FAIL`, payload: e.response })
  }
}


