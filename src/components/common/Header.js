import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import logoBlack from "../../assets/images/logo-black.png";
import { useUtils } from "../../hooks/useUtils.js";

const Header = () => {
  const { _loginRegisterForm } = useUtils();

  const handleClickHome = () => {
    _loginRegisterForm(false);
  };

  return (
    <header className="header">
      <div className="u-container">
        <div className="header-inner">
          <Link to="/" onClick={handleClickHome} className="header-logo">
            <img
              src={logoBlack}
              alt="Blog Logo"
              className="header-logo-image"
            />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
