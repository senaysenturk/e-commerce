import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../../../api/axios";

import "./style.scss";
import "../../../utilities.scss";
import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const LOGIN_URL = "/auth";

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const context = useContext(ShopContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleLogin = async (e) => {
    // e.preventDefault();

    //context.setAuth({ user: 'fatih', password: 'asdasd', roles: 'admin', accessToke: 'sdfşlksdfşlsdk' });

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      shopContext.setAuth({ user, password, roles, accessToken });
      setUser("");
      setPassword("");
      setSuccess(true);
      //navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
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
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                    <label htmlFor="password">
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </form>
                  <div className="forgot-password">
                    <a href="">Forgot your password?</a>
                  </div>
                  <div className="remember-me">
                    <form className="remember-me-checkbox">
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">Remember me</label>
                    </form>
                    <div className="login-btn">
                      <button
                        className="login-btn btn-primary"
                        onClick={() => handleLogin()}
                      >
                        Login
                      </button>
                    </div>
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
        </section>
      )}
    </>
  );
};

export default Login;
