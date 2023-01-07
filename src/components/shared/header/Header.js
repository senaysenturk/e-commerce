import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink, useSearchParams } from "react-router-dom";
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

  // const [searchParams, setSearchParams] = useSearchParams();
  // // console.log(searchParams);
  // const catParam = searchParams.get("category");
  // const subcatParam = searchParams.get("subcategory");
  // const [category, setCategory] = useState(initialPage);

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
                    <li key={index}>
                      <NavLink
                        to={`/products/search?category=${category.category}`}
                        key={"/products"}
                        end

                        // onClick={setCategory(`/products${category.category}`)}
                      >
                        {category.category}
                      </NavLink>
                      <DropdownMenu
                        key={index}
                        subcategories={category.subcategory}
                        category={category.category}
                        image={category.image}
                      />
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
                    <NavLink to="/new-arrivals">NEW ARRIVALS</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">BEST SELLERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">TRENDING</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">SALE</NavLink>
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
              <Hamburger categories={categories} />
            </div>

            <>
              <Options />
            </>
            <div className="or-divide">
              <span className="hr"></span>
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
