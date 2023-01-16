import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Submenu = ({ category, subcategories, index }) => {
  return (
    <ul className="onclick-menu-content" key={index}>
      {subcategories.map((subcategory, i) => (
        <Link
          to={`/products/search?category=${category}&subcategory=${subcategory}`}
          key={i}
        >
          <li key={i}>{subcategory} </li>
        </Link>
      ))}
    </ul>
  );
};

export default Submenu;
