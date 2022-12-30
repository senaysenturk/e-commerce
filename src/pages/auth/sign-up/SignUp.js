import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

import "./style.scss";
import "../../../utilities.scss";

import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNUP_URL = "/signup";

function SignUp({ signUp }) {
  // const { state } = useContext(Context);

  const userRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passworddFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidMail(MAIL_REGEX.test(mail));
  }, [mail]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPassword]);

  const handleSignUp = async (e) => {
    // e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(password);
    const v3 = MAIL_REGEX.test(mail);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }

    console.log(mail);
    console.log(user);
    console.log(password);
    console.log(birth);
    console.log(gender);

    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ mail, user, password, birth, gender }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      //clear state and controlled inputs
      setMail("");
      setUser("");
      setPassword("");
      setMatchPassword("");
      setBirth("");
      setGender("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
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
                  <label htmlFor="mail">
                    <strong>What's your email?</strong>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMail || !mail ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="mail"
                    placeholder="Enter your email."
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    required
                    aria-invalid={validMail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setMailFocus(true)}
                    onBlur={() => setMailFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      mailFocus && mail && !validMail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                  {/* 
              <label htmlFor="email">
                <strong>Confirm your email</strong>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email again."
              />
              */}
                  <label htmlFor="username">
                    <strong>What sholud we call you?</strong>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validName ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validName || !user ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter a profile name."
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <div className="appears">
                    <p>This appears on your profile.</p>
                  </div>
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>

                  <label htmlFor="password">
                    <strong>Create a password</strong>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPassword ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validPassword || !password ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      passworddFocus && !validPassword
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>

                  <label htmlFor="confirm_pwd">
                    <strong>Confirm Password:</strong>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPassword ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validMatch || !matchPassword ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    placeholder="Enter your password again."
                    onChange={(e) => setMatchPassword(e.target.value)}
                    value={matchPassword}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>

                  <label htmlFor="birth">
                    <strong>What's your date of birth?</strong>
                  </label>
                  <input
                    type="date"
                    id="birth-day"
                    placeholder="DD.MM.YYYY"
                    onChange={(e) => setBirth(e.target.value)}
                    value={birth}
                  />

                  <label htmlFor="gender">
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
                        name="gender"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Male
                    </label>
                    <label className="label-gender" for="female">
                      <input
                        className="btn-gender"
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Female
                    </label>
                    <label className="label-gender" for="other">
                      <input
                        className="btn-gender"
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        onChange={(e) => setGender(e.target.value)}
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
                        name="gender"
                        value="prefer"
                        onChange={(e) => setGender(e.target.value)}
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
                  <button
                    className="signup-btn btn-primary"
                    disabled={
                      !validName || !validPassword || !validMatch ? true : false
                    }
                    onClick={() => handleSignUp()}
                  >
                    Sign up
                  </button>
                </div>
                <p>
                  <strong>
                    Have an account? <Link to="/auth">Login.</Link>
                  </strong>
                </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default SignUp;
