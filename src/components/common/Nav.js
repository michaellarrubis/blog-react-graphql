import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth.js';
import { useUtils } from '../../hooks/useUtils.js';

const Nav = () => {
    const history = useHistory();
    const { token, _authLogout } = useAuth();
    const { isLoginRegisterForm, _loginRegisterForm, _loginForm } = useUtils();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    	if (token && Object.keys(token).length > 0) {
    		setIsLoggedIn(true)
    	}
    }, [token, isLoginRegisterForm]);

    const handleLogout = (e) => {
    	e.preventDefault();
    	setIsLoggedIn(false);
        _authLogout();
        history.push('/');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        _loginRegisterForm(true);
        _loginForm(true);
    }

    const handleClose = (e) => {
        e.preventDefault();
        _loginRegisterForm(false);
    }

    const handleNavLinkDisplay = isLoginRegisterForm
    	? <Link to="/" onClick={handleClose} className="nav-link"> CLOSE </Link>
    	: isLoggedIn
            ? <Link to="/" onClick={handleLogout} className="nav-link"> LOGOUT </Link>
            : <Link to="/login" onClick={handleLogin} className="nav-link"> LOGIN </Link>

  	return (
	    <nav className="nav">
	        <ul className="nav-list">
	            <li className="nav-item">
	                {handleNavLinkDisplay}
	            </li>
	        </ul>
	    </nav>
  	);
}

export default Nav;
