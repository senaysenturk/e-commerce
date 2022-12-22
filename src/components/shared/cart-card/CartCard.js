import React from "react";

import "./style.scss";
import "../../../utilities.scss";

export const CartCard = () => {
  return (
    <div className="container">
      <div className="cart-summary">
        <p>Total</p>
        <p className="cart-price">
          <strong>0,00 TL</strong>
        </p>
      </div>
      <div className="view-bag">
        <button className="btn btn-gray">View Bag</button>
      </div>
    </div>
  );
};

export default CartCard;
