import React, { useContext } from "react";
import { postCart } from "../../../network/requests/cart/addToCart";

import "./style.scss";
import "../../../utilities.scss";

import { useNavigate } from "react-router-dom";

import { GiTicket } from "react-icons/gi";
import ShopContext from "../../../contexts/basket/ShopContext";

export const CartCard = () => {
  const navigate = useNavigate();
  const context = useContext(ShopContext);
  return (
    <div className="cart-container">
      {context.cart.map((product) => {
        // postCart(product);
        return (
          <div className="product-card" key={product.id}>
            <div className="product-card-img">
              <img src={product.imgPath} alt={product.name} />
            </div>
            <div className="product-card-content">
              <p>{product.name}</p>
              <p>Adet: {product.amount}</p>
              <strong>{product.price.toFixed(2)} $ </strong>
              <div className="product-card-campaign">
                <p>
                  <span className="icon-ticket">
                    <GiTicket />
                  </span>
                  Free Shipping For Shopping <span>Over 200 $</span>
                </p>
              </div>
            </div>
            <div className="product-card-button">
              <span
                className="icon-x"
                onClick={() => {
                  context.removeProductFromCart(product.id);
                }}
              >
                x
              </span>
            </div>
          </div>
        );
      })}

      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="cart-summary">
        <p>Total</p>
        <p className="cart-price">
          <span> {context.totalQuantity()} Adet</span>
          <strong> {context.totalPrice()} $</strong>
        </p>
      </div>
      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="view-bag">
        <button
          className="btn btn-gray"
          onClick={() => navigate("/shopping/cart")}
        >
          View Bag
        </button>
      </div>
    </div>
  );
};

export default CartCard;
