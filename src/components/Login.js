import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.js';
import { useUtils } from '../hooks/useUtils.js';

const Login = () => {
    const { _authLogin, token, error } = useAuth();
    const { _loginRegisterForm, _loginForm } = useUtils();

    const [form, setForm] = useState({ email: '', password: ''});
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (error) {
            setShowError(true);
        }

        if (token && Object.keys(token).length > 0) {
            _loginRegisterForm(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, token]);

    const handleChange = e => {
        e.persist();
        setShowError(false);

        setForm(prevState => {
            return { ...prevState, [e.target.id]: e.target.value.trim() }
        });
    };

    const handleLoginFormDisplay = (e) => {
        e.preventDefault();
        setShowError(false);
        _loginForm(false);
    };

    let handleErrorDisplay = showError ?
        <div className="login-register-error">
            <p className="login-register-error-text"> { error.message } </p>
        </div>
        : '' ;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        _authLogin(email, password);
    };

    return (
        <div className="login-register">
            <div className="login-register-inner">
                <div className="login-register-header">
                    <h2 className="login-register-header-title">LOGIN</h2>
                </div>
                <div className="login-register-body">
                    <form className="login-register-form" onSubmit={handleSubmit}>
                        { handleErrorDisplay }
                        <div className="login-register-field">
                            <label htmlFor="email" className="login-register-label">Email</label>
                            <input 
                                className="login-register-input" 
                                type="email" 
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login-register-field">
                            <label htmlFor="password" className="login-register-label">Password</label>
                            <input 
                                className="login-register-input" 
                                type="password" 
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login-register-field">
                            <button className="login-register-button">LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className="login-register-footer">
                    <div className="login-register-footer-content">
                        <p className="login-register-footer-text">No account yet?</p>
                        <Link to="/" onClick={handleLoginFormDisplay} className="login-register-footer-link"> REGISTER HERE </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
