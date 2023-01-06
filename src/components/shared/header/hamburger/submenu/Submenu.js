import React from "react";
import "./style.scss";

const Submenu = ({ subcategories, index }) => {
  return (
    <ul className="onclick-menu-content" key={index}>
      {subcategories.map((subcategory, i) => (
        <li key={i}>{subcategory}</li>
      ))}
    </ul>
  );
};

export default Submenu;
