// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { SCROLL_LOCK } from './utilsTypes';
import { LOGIN_FORM } from "./utilsTypes";
import { LOGIN_REGISTER_FORM } from "./utilsTypes";

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function scrollLock(data) {
  return { type: SCROLL_LOCK , payload: data };
}

export function loginForm(data) {
  return { type: LOGIN_FORM, payload: data };
}

export function loginRegisterForm(data) {
  return { type: LOGIN_REGISTER_FORM, payload: data };
}
