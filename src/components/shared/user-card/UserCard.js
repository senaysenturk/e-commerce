import React from "react";

import "./style.scss";
import "../../../utilities.scss";

import { Link } from "react-router-dom";

export const UserCard = () => {
  return (
    <div className="container">
      <div className="auth-options">
        <button className="btn btn-gray">Login</button>
        <button className="btn btn-outline">Sign Up Now</button>
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
