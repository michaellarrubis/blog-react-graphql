import React from 'react';
import { Link } from 'react-router-dom';

import News from '../components/home/News'

const Register = () => {
  return (
    <main className="main">
    	<section className="l-section l-section-login-register">
            <div className="l-container">
                <div className="l-section-inner">
                	<div className="login-register">
                		<div className="login-register-header">
                			<h2 className="login-register-header-title">LOGIN</h2>
                		</div>
                		<div className="login-register-body">
                			<form className="login-register-form">
                				<div className="login-register-field">
                					<label htmlFor="field-email" className="login-register-label">Email</label>
                					<input className="login-register-input" type="email" id="field-email" />
                				</div>
                				<div className="login-register-field">
                					<label htmlFor="field-password" className="login-register-label">Password</label>
                					<input className="login-register-input" type="password" id="field-password" />
                				</div>
                				<div className="login-register-field">
                					<label htmlFor="field-confirm-password" className="login-register-label">Confirm Password</label>
                					<input className="login-register-input" type="password" id="field-confirm-password" />
                				</div>
                				<div className="login-register-field">
                					<button className="login-register-button">SUBMIT</button>
                				</div>
                			</form>
                		</div>
                		<div className="login-register-footer">
                			<div className="login-register-footer-content">
                				<p className="login-register-footer-text">Already have an account?</p>
                            	<Link to="/login" className="login-register-footer-link"> LOGIN HERE </Link>
                			</div>
                		</div>
                	</div>
                </div>
            </div>
        </section>
    	<News />
    </main>
  );
}

export default Register;
