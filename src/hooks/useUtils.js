import { useSelector, useDispatch } from "react-redux";
import {
  loginRegisterForm,
  loginForm,
  scrollLock,
} from "./../redux/modules/utils/utilsActions";

export const useUtils = () => {
  const dispatch = useDispatch();
  const { isLoginRegisterForm, isLoginForm, isScrollLock } = useSelector(
    (state) => state.utils
  );

  const _loginRegisterForm = (data) => {
    return dispatch(loginRegisterForm(data));
  };

  const _scrollLock = (data) => {
    return dispatch(scrollLock(data));
  };

  const _loginForm = (data) => {
    return dispatch(loginForm(data));
  };

  return {
    // actions
    _loginRegisterForm,
    _loginForm,
    _scrollLock,

    // states
    isLoginRegisterForm,
    isLoginForm,
    isScrollLock,
  };
};
