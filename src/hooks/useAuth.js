import { useSelector, useDispatch } from 'react-redux';
import { authLogin, authRegister, authLogout } from './../redux/modules/auth/authActions';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { token, loginError, registerError } = useSelector(state => state.auth);

    const _authLogin = (email, password) => {
        return dispatch(authLogin({
            email, password
        }));
    };

    const _authRegister = (name, email, password) => {
        return dispatch(authRegister({
            name, email, password
        }));
    };

    const _authLogout = () => {
        return dispatch(authLogout());
    };

    return {
        // actions
        _authLogin,
        _authRegister,
        _authLogout,

        // states
        token,
        loginError,
        registerError
    };
}
