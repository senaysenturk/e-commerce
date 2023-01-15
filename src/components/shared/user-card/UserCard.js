import React from "react";

import "./style.scss";
import "../../../utilities.scss";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../contexts/auth/AuthContext";

export const UserCard = ({ history }) => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();
  // console.log(loggedIn);

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <div className="user-container">
      {!loggedIn && (
        <>
          <div className="auth-options">
            <button className="btn btn-gray" onClick={() => navigate("/auth")}>
              Login
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/auth/signUp")}
            >
              Sign Up Now
            </button>
          </div>
        </>
      )}

      {loggedIn && (
        <>
          <div className="auth-options">
            <button className="btn btn-gray" onClick={() => handleLogout()}>
              Log out
            </button>
          </div>
        </>
      )}
      {/* 
      <div className="auth-options">
        <button className="btn btn-gray" onClick={() => navigate("/auth")}>
          Login
        </button>
        <button
          className="btn btn-outline"
          onClick={() => navigate("/auth/signUp")}
        >
          Sign Up Now
        </button>
      </div>
       */}
      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="content-options">
        <ul>
          {loggedIn && (
            <>
              <li>
                <Link to="/user-profile">My Account</Link>
              </li>
            </>
          )}
          {/*  
          <li>
            <Link to="/user-profile">My Account</Link>
          </li> 
          */}
          {loggedIn ? (
            <>
              <li>
                <Link to="/order-tracking">Order Tracking</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth">Order Tracking</Link>
              </li>
            </>
          )}
          {/* 
          <li>
            <Link to="/order-tracking">Order Tracking</Link>
          </li>
          */}
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
