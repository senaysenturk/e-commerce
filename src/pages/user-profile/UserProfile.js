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
        <div className="first-name">
          <label for="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            placeholder="Full Name"
          />
        </div>

        <div className="last-name">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            placeholder="Last Name"
          />
        </div>

        <div id="username">
          <label for="user-name">UserName</label>
          <input
            type="text"
            id="username"
            name="user-name"
            placeholder="User Name"
          />
        </div>

        <div id="email">
          <label for="email">E-Mail</label>
          <input
            type="user-email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div className="phone">
          <label for="phone">Phone Number</label>
          <input
            type="url"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className="gender">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </select>
        </div>

        <div className="btn">
          <button className=" send-btn btn-primary">Send</button>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
