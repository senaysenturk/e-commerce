import React from "react";

import "./style.scss";
import "../../../../utilities.scss";

import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="order-summary-card">
        <div className="order-summary-card-header">
          <header>Order Summary</header>
        </div>
        <div className="order-summary-card-informations">
        <div className="order-product">
            <p>Products</p>
            <p className="price">
              <strong>0,00 TL</strong>
            </p>
          </div>
          <div className="order-shipping">
            <p>Free Shipping For Shopping <span>Over 200 TL</span></p>
            <p className="amount-discount">
              <strong>- 0,00 TL</strong>
            </p>
          </div>
          <div className="order-discount">
            <p>Total Discount</p>
            <p className="discounts-amount">
              <strong>- 0,00 TL</strong>
            </p>
          </div>
          <div className="or-divide">
            <span className="hr"></span>
          </div>
          <div className="order-total">
            <p>Total</p>
            <p className="total-price">
              <strong>0,00 TL</strong>
            </p>
          </div>
          <div className="order-confirm">
            <button
              className="btn btn-gray"
              onClick={() => navigate("shopping-cart")}
            >
              Confirm Bag
            </button>
          </div>
        </div>
      </div>
      <p>OrderSummary</p>
    </>
  );
};

export default OrderSummary;
