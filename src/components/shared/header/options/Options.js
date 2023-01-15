import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import UserCard from "../../user-card/UserCard";
import CartCard from "../../cart-card/CartCard";
import Admin from "../../admin/Admin";
import "./style.scss";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

const Options = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="options">
      <ul>
        {authContext.loggedIn && authContext.user[0]?.role === "admin" && (
          <li>
            <span className="icon">
              <MdOutlineAdminPanelSettings />
            </span>
            <Admin />
          </li>
        )}
        {authContext.loggedIn ? (
          <>
            <li>
              <Link to="/favorites">
                <span className="icon">
                  <RiHeart3Line />
                </span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/auth">
                <span className="icon">
                  <RiHeart3Line />
                </span>
              </Link>
            </li>
          </>
        )}
        {/* 
        <li>
          <Link to="/favorites">
            <span className="icon">
              <RiHeart3Line />
            </span>
          </Link>
        </li> 
        */}
        <li>
          <a>
            <span className="icon">
              <AiOutlineUser />
            </span>
          </a>
          <UserCard />
        </li>
        <li>
          <a>
            <span className="icon">
              <GrCart />
            </span>
          </a>
          <CartCard />
        </li>
      </ul>
    </div>
  );
};

export default Options;
