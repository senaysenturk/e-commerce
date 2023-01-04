import React from "react";

import "./style.scss";

export const DropdownMenu = ({ subcategories }) => {
  return (
    <>
      {console.log(subcategories)}
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <div className="row">
            {/* <header>Header</header> */}
            <ul className="dropdown-links">
              {subcategories.map((subcategory, index) => {
                if (index < subcategories.length / 2)
                  return (
                    <li>
                      <a href={subcategory}>{subcategory}</a>
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
                    <li>
                      <a href={subcategory}>{subcategory}</a>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="row">
            <img src="https://02b3ab.cdn.akinoncloud.com/cms/2022/12/08/c1e8b32e-1d56-4820-a8e3-0143aa7ffd03.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
