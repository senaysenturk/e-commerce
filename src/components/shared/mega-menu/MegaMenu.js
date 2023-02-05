import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.scss";

const MegaMenu = ({ category, subcategories, image }) => {
  console.log(category);
  return (
    <>
      <div className={styles.dropdown}>
        <NavLink to={`/products/search?category=${category}`}>
          <button className={styles.dropbtn}>{category}</button>
        </NavLink>

        <div className={styles.dropdowncontent}>
          <div className={styles.row}>
            <div className={styles.column}>
              <ul>
                {subcategories?.map((subcategory, index) => {
                  if (index < subcategories.length / 2)
                    return (
                      <li key={index}>
                        <Link
                          to={`/products/search?category=${category}&subcategory=${subcategory}`}
                          key={index}
                        >
                          {subcategory}
                        </Link>
                      </li>
                    );
                })}
              </ul>
            </div>
            <div className={styles.column}>
              <ul>
                {subcategories?.map((subcategory, index) => {
                  if (index > subcategories.length / 2)
                    return (
                      <li key={index}>
                        <Link
                          key={index}
                          to={`/products/search?category=${category}&subcategory=${subcategory}`}
                        >
                          {subcategory}
                        </Link>
                      </li>
                    );
                })}
              </ul>
            </div>
            <div className={styles.column}>
              <img src={image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
