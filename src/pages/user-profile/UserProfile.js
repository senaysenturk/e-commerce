import React, { useContext } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth/AuthContext";

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const genders = ["man", "woman", "other"];
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
          />
        </div>
        <div className="birth user-profile__item">
          <label htmlFor="birth">Birth</label>
          <input
            type="url"
            id="birth"
            name="birth"
            placeholder="Birth"
            defaultValue={authContext.user[0].birth}
          />
        </div>

        <div className="gender user-profile__item">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
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
          />
        </div>
        <div className="user-profile__btn">
          <button className="login-btn">Save</button>
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
