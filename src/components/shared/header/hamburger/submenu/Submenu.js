import React from "react";
import "./style.scss";

const Submenu = ({ subcategories }) => {
  return (
    <ul className="onclick-menu-content">
      {subcategories.map((subcategory, index) => (
        <li>{subcategory}</li>
      ))}
    </ul>
  );
};

export default Submenu;
