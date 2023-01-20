import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../../../api/axios";
import { Navigate, Link } from "react-router-dom";

import "./style.scss";
import "../../../utilities.scss";
import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import ShopContext from "../../../contexts/basket/ShopContext";
import { AuthContext, useAuth } from "../../../contexts/auth/AuthContext";
import {
  checkUser,
  getSignUp,
  postAuth,
} from "../../../network/requests/auth/auth";

const LOGIN_URL = "/auth";

export const Login = () => {
  const shopContext = useContext(ShopContext);
  const authContext = useContext(AuthContext);
  const { login, setCurrentUser } = useAuth();

  const [navigate, setNavigate] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [errUser, setErrUser] = useState("");

  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  useEffect(() => {
    setErrUser("");
  }, [user]);

  useEffect(() => {
    setErrPassword("");
  }, [password]);

  const addAuth = async (e) => {
    try {
      console.log(authUser[0].mail)
      const response = await checkUser(
        authUser[0].mail,
        authUser[0].user,
        password
        // role: authUser[0].role,
      );
      /*  const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ); */

      if (!response.data.length) {
        return;
      }
      login(response);
      setCurrentUser(response.data[0]);
      // console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const id = response?.data?.id;
      shopContext.setAuth({
        user,
        password,
        roles,
        accessToken,
        role: authUser[0].role,
        id,
      });
      // console.log(roles)
      // console.log(shopContext.auth);
      setNavigate(true);
      setUser("");
      setPassword("");
      setSuccess(true);
      console.log(authContext);
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

  if (navigate) {
    return <Navigate to="/" />;
  }

  var authUser;

  const handleLogin = async (e) => {
    // e.preventDefault();

    try {
      const response = await getSignUp();
      // const response = await axios.get("http://localhost:5500/signup");
      // console.log(response.data);

      authUser = response.data.filter(
        (userObject) => userObject.mail === user || userObject.user === user
      );
      // console.log(authUser);

      authUser.length === 0
        ? setErrUser("user not found")
        : authUser[0].password === password
        ? addAuth()
        : setErrPassword("password is not correct");
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
            <a href="http://localhost:3000">Go to Home</a>
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
                    <p
                      id="uidnote"
                      className={errUser ? "instructions" : "offscreen"}
                    >
                      {errUser}
                    </p>
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
                    <p
                      id="uidnote"
                      className={errPassword ? "instructions" : "offscreen"}
                    >
                      {errPassword}
                    </p>
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
                    <Link to="/auth/signUp">
                      <button className="btn btn-outline">Sign Up</button>
                    </Link>
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
