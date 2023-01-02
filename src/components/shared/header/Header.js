import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { GrCart } from "react-icons/gr";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "../dropdown-menu/DropdownMenu";
import UserCard from "../user-card/UserCard";
import CartCard from "../cart-card/CartCard";
import Admin from "../admin/Admin";
import Search from "./search/Search";
import { useMatchMedia } from "./useMatchMedia";
import Hamburger from "./hamburger/Hamburger";

export const Header = ({ title }) => {
  const navigate = useNavigate();
  const isMobileResolution = useMatchMedia("(max-width:992px)", false);
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);
  return (
    <>
      <header className="app-header">
        <div className="main-header">
          <div className="logo" onClick={() => navigate("/")}>
            <i className="fa-solid fa-signature"></i>
            <h1>{title}</h1>
          </div>
          {/* <div className="search">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input type="text" />
          </div> */}
          {isDesktopResolution ? (
            <>
              <Search />
              <div className="options">
                <ul>
                  <li>
                    {/* <Link to="/admin/add-product"> */}

                    <a>
                      <span className="icon">
                        <MdOutlineAdminPanelSettings />
                      </span>
                      <Admin />
                    </a>
                    {/* </Link> */}
                  </li>
                  <li>
                    <Link to="/favorites">
                      <span className="icon">
                        <RiHeart3Line />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a>
                      <span className="icon">
                        <AiOutlineUser />
                      </span>
                    </a>
                    <UserCard />
                    {/*  <Link to="">
                  <span className="icon">
                    <AiOutlineUser />
                  </span>
                </Link> */}
                  </li>
                  <li>
                    <a>
                      <span className="icon">
                        {/* sepetteki ürün adetini saydırma */}
                        {/* {items.length > 0 && (items.length)} */}
                        <GrCart />
                      </span>
                    </a>
                    <CartCard />
                    {/* <Link to="">
                  <span className="icon">
                    <GrCart />
                  </span>
                </Link> */}
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Hamburger />
          )}
        </div>
        <div className="mobile-search">
          {!isDesktopResolution && <Search />}
        </div>

        {isDesktopResolution && (
          <div className="category-header">
            <nav>
              <ul className="category-links">
                <li>
                  <a href="women">WOMEN</a>
                </li>
                <li>
                  <a href="man">MAN</a>
                  <DropdownMenu />
                </li>
                <li>
                  <a href="children">CHILDREN</a>
                </li>
                <li>
                  <a href="new-arrivals">NEW ARRIVALS</a>
                </li>
                <li>
                  <a href="best-sellers">BEST SELLERS</a>
                </li>
                <li>
                  <a href="trending">TRENDING</a>
                </li>
                <li>
                  <a href="sale">SALE</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
