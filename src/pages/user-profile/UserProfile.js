import React, { useContext, useState, useRef, useEffect } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth/AuthContext";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSignUp, postSignUp } from "../../network/requests/auth/auth";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const genders = ["man", "woman", "other"];

  const [userObject, setUserObject] = useState({});

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [errUser, setErrUser] = useState("");

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [errMail, setErrMail] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passworddFocus, setPasswordFocus] = useState(false);
  const [errPassword, setErrPassword] = useState("");

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  const [userName, setUserName] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setErrUser("");
  }, [user]);

  useEffect(() => {
    setValidMail(MAIL_REGEX.test(mail));
  }, [mail]);

  useEffect(() => {
    setErrMail("");
  }, [mail]);

  useEffect(() => {
    setErrPassword("");
  }, [password]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPassword]);

  const editUser = async (updatedUserObject, tempUserObject) => {
    try {
      updatedUserObject.updatedAt = new Date().toLocaleString();
      console.log(updatedUserObject);
      // setUserObject((prevState) => ({
      //   ...prevState,
      //   updatedAt: new Date().toLocaleString(),
      // }));

      // // userName && setUserObject({...userObject, user: userName});

      // console.log(userObject);

      const response = await authContext.updateUser(
        authContext.user[0].id,
        updatedUserObject
      );
      console.log(tempUserObject[0]);
      const result = await authContext.updateSignUp(
        tempUserObject[0],
        updatedUserObject
      );

      setMail("");
      setUser("");
      setPassword("");
      setMatchPassword("");
      setBirth("");
      setGender("");

      setUserName("");
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

  const handleSave = async (e) => {
    const response = await getSignUp();
    console.log(response.data)

    console.log(authContext.user[0].user);

    const tempUser = response.data.filter((registerObj) => {
      return registerObj.user === authContext.user[0].user;
    });

    console.log(tempUser);

    const updatedUser = {};
    console.log("save");

    // console.log(mail);
    // console.log(user);
    // console.log(password);
    // console.log(birth);
    // console.log(gender);

    try {
      const response = await getSignUp();
      console.log(response.data);

      if (user) {
        console.log(user);
        const v1 = USER_REGEX.test(user);

        if (!v1) {
          setErrMsg("Invalid Entry");
          return;
        } else {
          var isValidUser = response.data.some(function (userItem) {
            return userItem.user === user;
          });
          if (isValidUser) {
            console.log("err");
            setErrUser("user name already used");
          } else {
            console.log(user);
            updatedUser.user = user;
            console.log(updatedUser);
            // setUserName(user);

            // console.log(userName);
            // setUserObject((prevState) => ({
            //   ...prevState,
            //   user: user,
            // }));

            // console.log(userObject);
          }
        }
      }

      if (mail) {
        console.log(mail);
        const v3 = MAIL_REGEX.test(mail);

        if (!v3) {
          setErrMsg("Invalid Entry");
          return;
        } else {
          var isValidMail = response.data.some(function (userItem) {
            return userItem.mail === mail;
          });
          if (isValidMail) {
            setErrMail("mail already used");
          } else {
            updatedUser.mail = mail;
            console.log(updatedUser);
            // setUserObject((prevState) => ({
            //   ...prevState,
            //   mail: mail,
            // }));

            // console.log(userObject);
          }
        }
      }

      if (password) {
        console.log(password);
        const v2 = PWD_REGEX.test(password);

        if (!v2) {
          setErrMsg("Invalid Entry");
          return;
        } else {
          var isValidPassword = response.data.some(function (userItem) {
            return userItem.password === password;
          });
          if (isValidPassword) {
            setErrPassword("password already used");
          } else {
            updatedUser.password = password;
            console.log(updatedUser);
            // setUserObject((prevState) => ({
            //   ...prevState,
            //   password: password,
            // }));

            // console.log(userObject);
          }
        }
      }

      if (birth) {
        updatedUser.birth = birth;
        console.log(updatedUser);
        // setUserObject((prevState) => ({
        //   ...prevState,
        //   birth: birth,
        // }));

        // console.log(userObject);
      }

      if (gender) {
        updatedUser.gender = gender;
        console.log(updatedUser);
        // setUserObject((prevState) => ({
        //   ...prevState,
        //   gender: gender,
        // }));

        // console.log(userObject);
      }

      /*  setUserObject({
        ...userObject,
        updatedAt: new Date().toLocaleString(),
      }); */

      editUser(updatedUser, tempUser);
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

    // setUser({
    //   ...user,
    //   updatedAt: new Date().toLocaleString(),
    // });
    // console.log(user);
    // const response = await authContext.updateUser(authContext.user[0].id, user);
    // const result = await authContext.updateSignUp(authContext.user[0], user);
    // handleClose();
  };

  return authContext.loggedIn && authContext.user.length ? (
    <div className="user-info">
      <div id="username" className="user-name">
        <strong>{authContext.user[0].user}</strong>
      </div>

      <div className="user-profile">
        {/*
        <div className="first-name user-profile__item">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            placeholder="Full Name"
            defaultValue={user[0].firstname}
          />
        </div>

        <div className="last-name user-profile__item">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            placeholder="Last Name"
            defaultValue={user[0].lastname}
          />
        </div> 
        */}
        <div id="username" className="user-profile__item">
          <label htmlFor="user-name">Username</label>
          <div>
            <input
              type="text"
              id="username"
              name="user-name"
              defaultValue={authContext.user[0].user}
              placeholder="Enter a profile name."
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <FontAwesomeIcon
              icon={faCheck}
              className={validName ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validName || !user ? "hide" : "invalid"}
            />
            <p id="uidnote" className={errUser ? "instructions" : "offscreen"}>
              {errUser}
            </p>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>
        </div>

        <div id="mail" className="user-profile__item">
          <label htmlFor="email">E-Mail</label>
          <div>
            <input
              type="user-email"
              id="mail"
              name="mail"
              placeholder="Enter your email."
              ref={userRef}
              autoComplete="off"
              required
              defaultValue={authContext.user[0].mail}
              onChange={(e) => setMail(e.target.value)}
              aria-invalid={validMail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setMailFocus(true)}
              onBlur={() => setMailFocus(false)}
            />
            <FontAwesomeIcon
              icon={faCheck}
              className={validMail ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validMail || !mail ? "hide" : "invalid"}
            />
            <p id="uidnote" className={errMail ? "instructions" : "offscreen"}>
              {errMail}
            </p>
            <p
              id="uidnote"
              className={
                mailFocus && mail && !validMail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>
        </div>
        {/* 
        <div className="phone user-profile__item">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="url"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            defaultValue={authContext.user[0].phone}
          />
        </div> 
        */}
        <div id="birth" className="user-profile__item">
          <label htmlFor="birth">Date of Birth</label>
          <input
            type="date"
            id="birth-day"
            name="birth"
            placeholder="DD.MM.YYYY"
            onChange={(e) => setBirth(e.target.value)}
            defaultValue={authContext.user[0].birth}
          />
        </div>

        <div className="gender user-profile__item">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            {genders.map((gender, i) =>
              gender == authContext.user[0].gender ? (
                <option value={gender} key={i} selected>
                  {gender}
                </option>
              ) : (
                <option value={gender} key={i}>
                  {gender}
                </option>
              )
            )}
          </select>
        </div>

        <div className="password user-profile__item">
          <label htmlFor="password">Password</label>
          <input
            type="url"
            id="password"
            placeholder="Password"
            defaultValue={authContext.user[0].password}
            // onChange={handleUser}
          />
        </div>

        <div className="password user-profile__item">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={validPassword ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validPassword || !password ? "hide" : "invalid"}
          />
          <p
            id="uidnote"
            className={errPassword ? "instructions" : "offscreen"}
          >
            {errPassword}
          </p>
          <p
            id="pwdnote"
            className={
              passworddFocus && !validPassword ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        </div>

        <div className="password user-profile__item">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="confirm_pwd"
            placeholder="Enter your new password again."
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={validMatch && matchPassword ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validMatch || !matchPassword ? "hide" : "invalid"}
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
        </div>

        <div className="user-profile__btn">
          <button
            className="login-btn"
            /* disabled={
              !validName || !validPassword || !validMatch ? true : false
            } */
            onClick={() => handleSave()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="cart-empty">
      <div className="empty-message">
        <p className="danger">Please login to see your profile information.</p>
      </div>
      <button className="btn btn-gray" onClick={() => navigate("/auth")}>
        Login
      </button>
    </div>
  );
};

export default UserProfile;
