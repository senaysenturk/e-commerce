import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { GrCart } from "react-icons/gr";

import "./style.scss";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

import Search from "./search/Search";
import { useMatchMedia } from "./useMatchMedia";
import Hamburger from "./hamburger/Hamburger";
import Options from "./options/Options";
import { useProduct } from "../../../contexts/product/CreateProductContext";

export const Header = ({ title }) => {
  const navigate = useNavigate();
  // const isMobileResolution = useMatchMedia("(max-width:992px)", false);
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);
  const { categories, getAllCategories } = useProduct();

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <header className="app-header">
        {isDesktopResolution ? (
          <>
            <div className="main-header">
              <div className="logo" onClick={() => navigate("/")}>
                <i className="fa-solid fa-signature"></i>
                <h1>{title}</h1>
              </div>
              <Search />
              <Options />
            </div>

            <div className="category-header">
              <nav>
                <ul className="category-links">
                  {categories.map((category, index) => (
                    <li>
                      <a href="#">{category.category}</a>
                      <DropdownMenu subcategories={category.subcategory} />
                    </li>
                  ))}
                  {/* <li>
                    <a href="#">WOMEN</a>
                  </li>
                  <li>
                    <a href="#">MAN</a>
                    <DropdownMenu />
                  </li>
                  <li>
                    <a href="#">CHILDREN</a>
                  </li>*/}
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
          </>
        ) : (
          <>
            <div className="main-header">
              <div className="logo" onClick={() => navigate("/")}>
                <i className="fa-solid fa-signature"></i>
                <h1>{title}</h1>
              </div>
              <Hamburger />
            </div>

            <>
              <Options />
            </>
            <div class="or-divide">
              <span class="hr"></span>
            </div>
            <div className="mobile-search">
              <Search />
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
