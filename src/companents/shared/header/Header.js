import React from "react";
import { Link, Router } from "react-router-dom";

import "./style.scss";

export const Header = ({ title }) => {
  return (
    <>
      <header className="app-header">
        <div>
          <div className="logo">
            <h1>{title}</h1>
          </div>
          {/* 
          <div className="search_bar ">
            <div>
              <span>All</span>
              <i className="fas fa-caret-down"></i>
            </div>
            <input type="text" />
            <i className="fas fa-search"></i>
          </div>
          <div className="flex App-options">
            <div className="sign">
              <span>Hello, Sign in</span>
              <div className="flex account">
                <span>Account & Lists</span>
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
            <div className="sign">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
            <div className="flex cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="shopping-cart">Cart</span>
              <p>0</p>
            </div>
          </div> */}
        </div>

        <div className="category-header">
          <nav>
            <ul>
              <li>
                <a href="#">WOMEN</a>
              </li>
              <li>
                <a href="#">MAN</a>
              </li>
              <li>
                <a href="#">CHILDREN</a>
              </li>
              <li>
                <a href="#">NEW ARRIVALS</a>
              </li>
              <li>
                <a href="#">BEST SELLERS</a>
              </li>
              <li>
                <a href="#">TRENDING</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
