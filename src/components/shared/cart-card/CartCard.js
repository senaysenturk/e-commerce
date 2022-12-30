import React, { useContext } from "react";

import "./style.scss";
import "../../../utilities.scss";

import { Link, useNavigate } from "react-router-dom";

import { GiTicket } from "react-icons/gi";
import ShopContext from "../../../contexts/basket/ShopContext";

export const CartCard = () => {
  const navigate = useNavigate();
  const context = useContext(ShopContext);
  return (
    <div className="cart-container">
      {context.cart.map((product) => {
        return (
          <div className="product-card">
            <div className="product-card-img">
              <img src={product.img} />
            </div>
            <div className="product-card-content">
              <p>{product.name}</p>
              <p>Adet: {product.amount}</p>
              <strong>{product.price} TL</strong>
              <div className="product-card-campaign">
                <p>
                  <span className="icon-ticket">
                    <GiTicket />
                  </span>
                  Free Shipping For Shopping <span>Over 200 TL</span>
                </p>
              </div>
            </div>
            <div className="product-card-button" >
              <span 
                className="icon-x" 
                onClick={()=>{context.removeProductFromCart(product.id)}}
              >x</span>
            </div>
          </div>
        );
      })}
      {/* <div className="product-card">
        <div className="product-card-img">
          <img src="https://02b3ab.cdn.akinoncloud.com/products/2022/11/02/42945/f713dc12-8868-47b0-b64a-aa081b93ce92_size220x220_cropCenter.jpg" />
        </div>
        <div className="product-card-content">
          <p>Kael Kadın Bornoz Ekru</p>
          <p>Adet: 1</p>
          <strong>1.699,99 TL</strong>
          <div className="product-card-campaign">
            <p>
              <span className="icon-ticket">
                <GiTicket />
              </span>
              Free Shipping For Shopping <span>Over 200 TL</span>
            </p>
            {/* <p>
              <span className="icon-ticket">
                <GiTicket />
              </span>
              2 for 1
            </p> */}
      {/* </div>
        </div>
        <div className="product-card-button">
          <span className="icon-x">x</span>
        </div>
      </div>  */}

      <div className="or-divide">
        <span className="hr"></span>
      </div>
      <div className="cart-summary">
        <p>Total</p>
        <p className="cart-price">
           <strong > 0,00 TL</strong> {/* {context.totalPrice()} */}
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
