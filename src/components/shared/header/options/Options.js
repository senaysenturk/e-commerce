import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../../user-card/UserCard";
import CartCard from "../../cart-card/CartCard";
import Admin from "../../admin/Admin";
import "./style.scss";

const Options = () => {
  return (
    <div className="options">
      <ul>
        <li>
          <span className="icon">
            <MdOutlineAdminPanelSettings />
          </span>
          <Admin />
        </li>
        <li>
          <Link to="/favorites">
            <span className="icon">
              <RiHeart3Line />
            </span>
          </Link>
        </li>
        <li>
          <a>
            <span className="icon">
              <AiOutlineUser />
            </span>
          </a>
          <UserCard />
          {/*  <Link to="">
      <span className="icon">
        <AiOutlineUser />
      </span>
    </Link> */}
        </li>
        <li>
          <a>
            <span className="icon">
              {/* sepetteki ürün adetini saydırma */}
              {/* {items.length > 0 && (items.length)} */}
              <GrCart />
            </span>
          </a>
          <CartCard />
          {/* <Link to="">
      <span className="icon">
        <GrCart />
      </span>
    </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Options;
