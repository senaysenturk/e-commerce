import React from "react";
import "./style.scss";
import "../../../utilities.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth/AuthContext";

const Admin = ({ history }) => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();
  //console.log(loggedIn);

  const handleLogout = async () => {
    logout(() => {
      history.push("/");
    });
  };
  return (
    <div className="admin-container">
      <div className="content-options">
        <ul>
          <li>
            <Link to="/admin/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/admin/all-products">All Products</Link>
          </li>
          <li>
            <Link to="/admin/all-orders">All Orders</Link>
          </li>
          <li>
            <Link to="/admin/all-users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
