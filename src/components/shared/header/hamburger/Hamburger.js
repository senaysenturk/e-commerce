import React, { useState } from "react";
import "./style.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownMenu from "../../dropdown-menu/DropdownMenu";
import Submenu from "./submenu/Submenu";
import { Link } from "react-router-dom";
const Hamburger = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" name="" id="" className="check" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" className="menu-items">
          {categories.map((category, index) => (
            <li tabIndex={index} className="onclick-menu" index={index}>
              {category.category}

              <Submenu subcategories={category.subcategory} index={index} />
            </li>
          ))}

          {/* <li tabIndex="0" className="onclick-menu">
            WOMAN
            <Submenu />
          </li>
          <li tabIndex="1" className="onclick-menu">
            MAN
            <Submenu />
          </li>
          <li tabIndex="2" className="onclick-menu">
            CHILDREN
            <Submenu />
          </li> */}
          <li>
            <a href="new-arrivals">New Arrivals</a>
          </li>
          <li>
            <a href="best-sellers">Best Sellers</a>
          </li>
          <li>
            <a href="trending">Trending</a>
          </li>
          <li>
            <a href="sale">Sale</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
