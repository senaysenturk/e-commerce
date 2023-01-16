import React, { useContext, useState, useEffect } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth/AuthContext";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const genders = ["man", "woman", "other"];
  const [user, setUser] = useState({});

  const [matchPassword, setMatchPassword] = useState("");

  const handleUser = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(user);
  };

  const handleSave = async () => {
    setUser({
      ...user,
      updatedAt: new Date().toLocaleString(),
    });
    console.log(user);
    const response = await authContext.updateUser(authContext.user[0].id, user);
    const result = await authContext.updateSignUp(authContext.user[0], user);
    // handleClose();
  };

  return authContext.loggedIn ? (
    <div className="user-info">
      <div id="username" className="user-name">
        <strong>{authContext.user[0].user}</strong>
      </div>

      <div className="user-profile">
        {/*<div className="first-name user-profile__item">
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
        </div> */}
        <div id="username" className="user-profile__item">
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            id="username"
            name="user-name"
            placeholder="User Name"
            defaultValue={authContext.user[0].user}
            onChange={handleUser}
          />
        </div>
        <div id="email" className="user-profile__item">
          <label htmlFor="email">E-Mail</label>
          <input
            type="user-email"
            id="email"
            name="email"
            placeholder="E-mail"
            defaultValue={authContext.user[0].mail}
            onChange={handleUser}
          />
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
            onChange={handleUser}
            defaultValue={authContext.user[0].birth}
          />
        </div>
        <div className="gender user-profile__item">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" onChange={handleUser}>
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
            onChange={handleUser}
          />
        </div>
        <div className="password user-profile__item">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            defaultValue={authContext.user[0].password}
            onChange={handleUser}
          />
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
          />
        </div>
        <div className="user-profile__btn">
          <button className="login-btn" onClick={handleSave}>
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
