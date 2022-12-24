import React from "react";

import "./style.scss";
import "../../../utilities.scss";

import { Link, useNavigate } from "react-router-dom";

export const UserCard = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="auth-options">
        <button className="btn btn-gray" onClick={() => navigate("auth")}>
          Login
        </button>
        <button
          className="btn btn-outline"
          onClick={() => navigate("auth/signUp")}
        >
          Sign Up Now
        </button>
      </div>
      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="content-options">
        <ul>
          <li>
            <Link>Order Tracking</Link>
          </li>
          <li>
            <Link>Easy Returns</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
