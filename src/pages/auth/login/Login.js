import React from "react";

import "./index.scss";
import "../../../utilities.scss";
import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <div className="main">
      <header>
        <div className="logo">
          <i className="fa-solid fa-signature"></i>
        </div>
      </header>
      <main>
        <div className="auth-container">
          <div className="login-with">
            <p>
              <strong>To continue, log in to Shiwear.</strong>
            </p>
            <button className="btn btn-secondary">
              <RiFacebookBoxFill />
              Continue with Facebook
            </button>
            <button className="btn btn-dark">
              <RiAppleFill />
              Continue with Apple
            </button>
            <button className="btn btn-outline">
              <FcGoogle />
              Continue with Google
            </button>
          </div>
          <div className="or-divide">
            <span className="hr"></span>
            <span>
              <strong>OR</strong>
            </span>
            <span className="hr"></span>
          </div>
          <div className="login">
            <form className="login-info">
              <label htmlFor="username">
                <strong>Email address or username</strong>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Email address or username"
              />
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input type="password" id="password" placeholder="Password" />
            </form>
            <div className="forgot-password">
              <a href="">Forgot your password?</a>
            </div>
            <div className="remember-me">
              <form className="remember-me-checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </form>
              <div className="login-btn"></div>
              <button className="login-btn btn-primary">Login</button>
            </div>
            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="sign-up">
              <p>
                <strong>Don't have an account?</strong>
              </p>
              <button className="btn btn-outline">Sign Up</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
