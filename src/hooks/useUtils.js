import { useSelector, useDispatch } from 'react-redux';
import { loginRegisterForm, loginForm } from './../redux/modules/utils/utilsActions';

export const useUtils = () => {
    const dispatch = useDispatch();
    const { isLoginRegisterForm, isLoginForm } = useSelector(state => state.utils);

    const _loginRegisterForm = (data) => {
        return dispatch(loginRegisterForm(data));
    };

    const _loginForm = (data) => {
        return dispatch(loginForm(data));
    };

    return {
        // actions
        _loginRegisterForm,
        _loginForm,

        // states
        isLoginRegisterForm,
        isLoginForm
    };
}
