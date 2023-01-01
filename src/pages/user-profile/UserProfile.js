import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthContext";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="user-info">
      {JSON.stringify(user)}
      <div id="username" className="user-name">
        <strong>senaysenturk</strong>
      </div>

      <div className="user-profile">
        <div className="first-name user-profile__item">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            placeholder="Full Name"
          />
        </div>

        <div className="last-name user-profile__item">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            placeholder="Last Name"
          />
        </div>

        <div id="username" className="user-profile__item">
          <label htmlFor="user-name">UserName</label>
          <input
            type="text"
            id="username"
            name="user-name"
            placeholder="User Name"
          />
        </div>

        <div id="email" className="user-profile__item">
          <label htmlFor="email">E-Mail</label>
          <input
            type="user-email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div className="phone user-profile__item">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="url"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className="gender user-profile__item">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </select>
        </div>

        <div className="password user-profile__item">
          <label htmlFor="password">Password</label>
          <input type="url" id="password" placeholder="Password" />
        </div>

        <div className="user-profile__btn">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
