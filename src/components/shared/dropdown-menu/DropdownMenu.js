import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const DropdownMenu = ({ category, subcategories, image }) => {
  return (
    <>
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <div className="row">
            {/* <header>Header</header> */}
            <ul className="dropdown-links">
              {subcategories.map((subcategory, index) => {
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
          <div className="row">
            {/* <header>Header</header> */}
            <ul className="dropdown-links">
              {subcategories.map((subcategory, index) => {
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
          <div className="row">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
