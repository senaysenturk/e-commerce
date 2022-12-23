import React from "react";
import { Link } from "react-router-dom";
import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { GrCart } from "react-icons/gr";

import "./style.scss";
import DropdownMenu from "./Dropdown";

export const Header = ({ title }) => {
  return (
    <>
      <header className="app-header">
        <div className="main-header">
          <div className="logo">
            <i className="fa-solid fa-signature"></i>
            <h1>{title}</h1>
          </div>
          <div className="search">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input type="text" />
          </div>
          <div className="options">
            <ul>
              <li>
                <Link to="">
                  <span className="icon">
                    <RiHeart3Line />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="icon">
                    <AiOutlineUser />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="icon">
                    <GrCart />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-header">
          <nav>
            <ul className="category-links">
              <li>
                <a href="#">WOMEN</a>
              </li>
              <li>
                <a href="#">MAN</a>
                
                <DropdownMenu />
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