import React from "react";
import "./Style.scss";
import "../../../utilities.scss";
import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  return (
    <div className="main">
      <header>
        <div className="logo">
          <i className="fa-solid fa-signature"></i>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="login-with">
            <button className="button button-secondary">
              <RiFacebookBoxFill />
              Continue with Facebook
            </button>
            <button className="button button-outline">
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
          <p>
            <strong>Sing up with yur e mail address</strong>
          </p>

          <div className="login">
            <form className="login-info">
              <label htmlFor="email">
                <strong>What's your email?</strong>
              </label>
              <input type="text" id="email" placeholder="Enter your email." />
              <label htmlFor="email">
                <strong>Confirm your email</strong>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email again."
              />

              <label htmlFor="password">
                <strong>Create a password</strong>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
              />

              <label htmlFor="username">
                <strong>What sholud we call you?</strong>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter a profile name."
              />
            </form>

            <div className="forgot-password">
              <a href="+#">This appears on your profile.</a>
            </div>
            <div className="remember-me">
              <div className="login-btn"></div>
              <button className="login-btn button-primary">Sign up</button>
            </div>
            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="sign-up">
              <p>
                <strong>Don't have an account?</strong>
              </p>
              <button className="button button-outline">Sign Up</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;



