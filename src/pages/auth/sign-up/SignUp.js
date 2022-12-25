import React from "react";
import "./style.scss";
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
        <div className="auth-container">
          <div className="signup-with">
            <button className="btn btn-secondary">
              <RiFacebookBoxFill />
              Continue with Facebook
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
          <p>
            <strong>Sing up with yur e mail address</strong>
          </p>

          <div className="signup">
            <form className="signup-info">
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

              <div className="appears">
                <p>This appears on your profile.</p>
              </div>

              <label htmlFor="birth-day">
                <strong>What's your date of birth?</strong>
              </label>
              <input type="date" id="birth-day" placeholder="DD.MM.YYYY" />

              <label htmlFor="birth-day">
                <strong>What's your gender?</strong>
              </label>
            </form>
            <div className="btn-radio">
              <div className="gender">
                <label className="label-gender" for="male">
                  <input
                    className="btn-gender"
                    type="radio"
                    id="male"
                    name="Male"
                    value="Male"
                  />{" "}
                  Male
                </label>
                <label className="label-gender" for="female">
                  <input
                    className="btn-gender"
                    type="radio"
                    id="female"
                    name="female"
                    value="female"
                  />{" "}
                  Female
                </label>
                <label className="label-gender" for="other">
                  <input
                    className="btn-gender"
                    type="radio"
                    id="other"
                    name="other"
                    value="other"
                  />{" "}
                  Other
                </label>
              </div>{" "}
              <div>
                <label className="label-prefer" for="prefer">
                  <input
                    className="btn-gender"
                    type="radio"
                    id="prefer"
                    name="prefer"
                    value="prefer"
                  />{" "}
                  Prefer not to say
                </label>
              </div>
            </div>

            <div className="signup-footname">
              <h5>
                Lorem Ipsum is simply dummy printing typesetting industry.{" "}
                <a href="/#"> Lorem ipsum dolor.</a>
              </h5>
              <h5>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printe{" "}
                <a href="/#"> Lorem ipsum dolor.</a>
              </h5>
            </div>

            <div className="sign-up">
              <button className="signup-btn btn-primary">Sign up</button>
            </div>
            <p>
              <strong>
                Have an account? <a href="/#">Lorem.</a>
              </strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
