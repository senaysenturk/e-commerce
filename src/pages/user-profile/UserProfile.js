import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-info">
      <div id="username" className="user-name">
        <strong>senaysenturk</strong>
      </div>

      <div className="user-profile">
        <div className="first-name user-profile__item" >
          <label for="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            placeholder="Full Name"
          />
        </div>

        <div className="last-name user-profile__item">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            placeholder="Last Name"
          />
        </div>

        <div id="username" className="user-profile__item">
          <label for="user-name">UserName</label>
          <input
            type="text"
            id="username"
            name="user-name"
            placeholder="User Name"
          />
        </div>

        <div id="email" className="user-profile__item">
          <label for="email">E-Mail</label>
          <input
            type="user-email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div className="phone user-profile__item">
          <label for="phone">Phone Number</label>
          <input
            type="url"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className="gender user-profile__item">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </select>
        </div>

        
        <div className="password user-profile__item">
          <label for="password">Password</label>
          <input
            type="url"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="user-profile__btn">
        <button className="login-btn">Login</button>
      </div>
      </div>

      
    </div>
  );
};

export default UserProfile;
