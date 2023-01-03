import React from "react";

import "./style.scss";
import "../../../../utilities.scss";
import { SlPresent } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export const OrderSummary = ({ price }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="order-summary">
        <div className="order-summary-card">
          <div className="order-summary-card-header">
            <header>Order Summary</header>
          </div>
          <div className="order-summary-card-informations">
            <div className="order-product">
              <p>Products</p>
              <p className="price">
                <strong>{price} $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>
                Free Shipping For Shopping <span>Over 200 $</span>
              </p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>50% Discount in Bag</p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>2 for 1</p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-discount">
              <p>Total Discount</p>
              <p className="discounts-amount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="order-total">
              <p>Total</p>
              <p className="total-price">
                <strong>{price} $</strong>
              </p>
            </div>
            <div className="order-confirm">
              <button
                className="btn btn-gray"
                onClick={() => navigate("/shopping/checkout")}
              >
                Confirm Bag
              </button>
            </div>
          </div>
        </div>
        {/* <div className="cart-voucher">
          <a>Enter Discount Code</a>
          <span>
            <SlPresent />
          </span>
        </div> */}
      </div>
    </>
  );
};

export default OrderSummary;
