import React, { useState } from "react";
import './Login.css';
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <button className="user_unregistered-signup" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <button className="user_registered-login" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
        <div className={`user_options-forms user_options-forms-class ${isSignUp ? "bounceLeft" : "bounceRight"}`}>
          <div className="user_forms-login" style={{ opacity: isSignUp ? 0 : 1, visibility: isSignUp ? "hidden" : "visible" }}>
            <h2 className="forms_title">Login</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button>
                <input type="submit" value="Log In" className="forms_buttons-action" />
              </div>
            </form>
          </div>
          <div className="user_forms-signup" style={{ opacity: isSignUp ? 1 : 0, visibility: isSignUp ? "visible" : "hidden" }}>
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="text" placeholder="UserName" className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
