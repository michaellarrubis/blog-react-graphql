import React from 'react';
import { Link } from 'react-router-dom';

import logoBlack from '../../assets/images/logo-black.png';

const Header = () => {
  return (
    <header className="l-header">
    	<div className="l-wrapper l-header-inner">
    		<Link to="/" className="l-header-logo">
    			<img src={logoBlack} alt="Blog Logo" className="l-header-logo-image" />
            </Link>
    		<div className="l-header-menu">
	    		<Link to="/" className="l-header-menu-item">
	    			LOGIN
	            </Link>
    		</div>
    	</div>
    </header>
  );
}

export default Header
