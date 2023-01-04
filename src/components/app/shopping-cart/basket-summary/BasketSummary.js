import React from "react";

import "./style.scss";
import "../../../../utilities.scss";

import { useNavigate } from "react-router-dom";

export const BasketSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="basket-summary">
        <div className="basket-header">
          <header>Basket Summary</header>
        </div>
        <div className="basket-card">
          <div className="card">
            <div className="card-img">
              <img src="https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
            <div className="card-content">
              <div className="card-left">
                <div className="card-info">
                  <p>name</p>
                  <p>amount</p>
                  <p>color</p>
                </div>
              </div>
              <div className="card-right">
                <div className="card-price">
                  <p className="product-price">
                    <strong>20 $</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-divide">
            <span className="hr"></span>
          </div>
        </div>
        <div className="basket-middle">
          <div className="basket-product">
            <p>Products</p>
            <p className="price">
              <strong>20 $</strong>
            </p>
          </div>
          <div className="basket-shipment">
            <p>Shipment</p>
            <p className="shipment-price">
              <strong>- 0,00 $</strong>
            </p>
          </div>
          <div className="free-shipping">
            <p>Free Shipping For Shopping Over 200 $</p>
          </div>
        </div>
        <div className="or-divide">
          <span className="hr"></span>
        </div>
        <div className="basket-end">
          <div className="basket-total">
            <p>Total</p>
            <p className="total-price">
              <strong>100 $</strong>
            </p>
          </div>
          <div className="continue-button">
            <button
              className="btn btn-gray"
              onClick={() => navigate("/shopping/cart")}
            >
              Continue
            </button>
            <p className="warning-msg">Devam etmek icin Adres ekleyiniz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketSummary;