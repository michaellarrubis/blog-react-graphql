import React from 'react';

import { useUtils } from '../hooks/useUtils.js';

import Login from './Login';
import Register from './Register';

const LoginRegisterForm = () => {
    const { isLoginForm } = useUtils();

    return (
        <main className="main">
        	{ isLoginForm ? <Login /> : <Register /> }
        </main>
    );
}

export default LoginRegisterForm;
