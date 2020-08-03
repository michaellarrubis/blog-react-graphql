import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useUtils } from "../hooks/useUtils.js";
import { useAuth } from "../hooks/useAuth.js";

const Register = () => {
  const { _authRegister, currentUser, registerError } = useAuth();
  const { _loginRegisterForm, _loginForm } = useUtils();

  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (registerError) {
      setShowError(true);
    }

    if (currentUser && Object.keys(currentUser).length > 0) {
      _loginRegisterForm(false);
    }

    return () => {
      setShowError(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerError, currentUser]);

  const handleChange = (e) => {
    e.persist();
    const { id, value } = e.target;
    setShowError(false);

    setForm((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value.trim() };
    });

    switch (id) {
      case "confirmPassword":
        if (value !== form.password) {
          setShowError(true);
          setErrorMessage("Password not match.");
        }
        break;
      default:
        break;
    }
  };

  const handleRegisterFormDisplay = (e) => {
    e.preventDefault();
    _loginForm(true);
    setShowError(false);
  };

  let handleErrorDisplay = showError ? (
    <div className="login-register-error">
      <p className="login-register-error-text">
        {registerError ? registerError.message : errorMessage}
      </p>
    </div>
  ) : (
    ""
  );

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    _authRegister(name, email, password);
  };

  return (
    <div className="login-register">
      <div className="login-register-inner">
        <div className="login-register-header">
          <h2 className="login-register-header-title">Register</h2>
        </div>
        <div className="login-register-body">
          <form className="login-register-form" onSubmit={handleRegister}>
            {handleErrorDisplay}
            <div className="login-register-field">
              <label htmlFor="name" className="login-register-label">
                Name
              </label>
              <input
                className="login-register-input"
                type="name"
                id="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <label htmlFor="email" className="login-register-label">
                Email
              </label>
              <input
                className="login-register-input"
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <label htmlFor="password" className="login-register-label">
                Password
              </label>
              <input
                className="login-register-input"
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <label htmlFor="confirmPassword" className="login-register-label">
                Confirm Password
              </label>
              <input
                className="login-register-input"
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <button className="login-register-button">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="login-register-footer">
          <div className="login-register-footer-content">
            <p className="login-register-footer-text">
              Already have an account?
            </p>
            <Link
              to="/"
              onClick={handleRegisterFormDisplay}
              className="login-register-footer-link"
            >
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
