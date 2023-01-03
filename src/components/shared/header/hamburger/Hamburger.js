import React, { useState } from "react";
import "./style.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownMenu from "../../dropdown-menu/DropdownMenu";
import Submenu from "./submenu/Submenu";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" name="" id="" className="check" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" className="menu-items">
          <li tabindex="0" class="onclick-menu">
            WOMAN
            <Submenu />
          </li>
          <li tabindex="1" class="onclick-menu">
            MAN
            <Submenu />
          </li>
          <li tabindex="2" class="onclick-menu">
            CHILDREN
            <Submenu />
          </li>
          <li>
            <a href="new-arrivals">NEW ARRIVALS</a>
          </li>
          <li>
            <a href="best-sellers">BEST SELLERS</a>
          </li>
          <li>
            <a href="trending">TRENDING</a>
          </li>
          <li>
            <a href="sale">SALE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
