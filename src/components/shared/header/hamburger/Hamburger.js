import React from "react";
import "./style.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownMenu from "../../dropdown-menu/DropdownMenu";
const Hamburger = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <a href="women">WOMEN</a>
          </li>
          <li>
            <a href="man">MAN</a>
          </li>
          <li>
            <a href="children">CHILDREN</a>
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
