import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink, useSearchParams } from "react-router-dom";
import styles from "./style.module.scss";
import searchStyles from "./search/style.module.scss";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

import Search from "./search/Search";
import { useMatchMedia } from "./useMatchMedia";
import Hamburger from "./hamburger/Hamburger";
import Options from "./options/Options";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import MegaMenu from "../mega-menu/MegaMenu";

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
    getAllCategories("categories");
  }, []);

  return (
    <>
      <header className={`${styles["app-header"]}`}>
        {isDesktopResolution ? (
          <>
            <div className={`${styles["main-header"]}`}>
              <div className={styles.logo} onClick={() => navigate("/")}>
                <i className="fa-solid fa-signature"></i>
                <h1>{title}</h1>
              </div>
              <Search />
              <Options />
            </div>

            <div className={`${styles["category-header"]}`}>
              <nav className={styles.dropdown}>
                <ul className={`${styles["category-links"]} ${styles.dropbtn}`}>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <NavLink
                        className={styles.dropbtn}
                        to={`/products/search?category=${category.category}`}
                        key={"/products"}
                        end

                        // onClick={setCategory(`/products${category.category}`)}
                      />
                      <MegaMenu
                        key={index}
                        subcategories={category.subcategory}
                        category={category.category}
                        image={category.image}
                      />
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
                    <NavLink
                      to={`/products/search?additionalCategories_like=best-sellers`}
                    >
                      BEST SELLERS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/products/search?additionalCategories_like=trending`}
                    >
                      TRENDING
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/products/search?additionalCategories_like=sale`}
                    >
                      SALE
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles["main-header"]}`}>
              <div className={styles.logo} onClick={() => navigate("/")}>
                <i className="fa-solid fa-signature"></i>
                <h1>{title}</h1>
              </div>
              <Hamburger categories={categories} />
            </div>
            <>
              <Options />
            </>
            {/* <div className={`${styles["main-header"]}`}>
              <span className="hr"></span>
            </div> */}
            <div className={`${searchStyles["mobile-search"]}`}>
              <Search />
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
