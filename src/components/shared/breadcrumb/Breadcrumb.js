import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Breadcrumb = ({ catParam, subcatParam, additionalCategoryParam }) => {
  // console.log(subcatParam === null, additionalCategoryParam);
  return (
    <nav>
      <ul className="breadcrumb">
        {catParam !== null && (
          <li className="breadcrumb-item">
            {
              <NavLink to={`/products/search?category=${catParam}`}>
                {catParam}
              </NavLink>
            }
          </li>
        )}
        {subcatParam !== null && (
          <li className="breadcrumb-item active">
            {
              <NavLink
                to={`/products/search?category=${catParam}&subcategory=${subcatParam}`}
              >
                {subcatParam}
              </NavLink>
            }
          </li>
        )}
        {additionalCategoryParam !== null && (
          <li>
            {
              <NavLink
                to={`/products/search?additionalCategories_like=${additionalCategoryParam}`}
              >
                {additionalCategoryParam}
              </NavLink>
            }
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
