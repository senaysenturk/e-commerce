import React from "react";

import "./style.scss";
import "../../../utilities.scss";
import { Link, useNavigate} from "react-router-dom";

export const CartCard = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <div className="cart-summary">
        <p>Total</p>
        <p className="cart-price">
          <strong>0,00 TL</strong>
        </p>
      </div>
      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="view-bag">
      <button className="btn btn-gray" onClick={() => navigate("orders-page")}>View Bag</button>
      </div>
    </div>
  );
};

export default CartCard;
