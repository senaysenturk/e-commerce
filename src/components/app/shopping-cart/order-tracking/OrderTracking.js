import React from "react";
import { FcCheckmark } from "react-icons/fc";
import "./style.scss";

const OrderTracking = () => {
  return (
    <div className="order-tracking">
      <div className="order-container">
        <div className="order-img">
          <img src="https://02b3ab.cdn.akinoncloud.com/products/2022/11/02/42945/f713dc12-8868-47b0-b64a-aa081b93ce92_size220x220_cropCenter.jpg" />
        </div>
        <div className="order-info-container">
          <section className="order-summary">
            <div className="order-info">
              <div className="order-no">
                <p>
                  Order No: <strong className="order-no">976 463 155</strong>
                </p>
              </div>
              <div className="order-time">
                <span>4 June Saturday, 18:06</span>
              </div>
            </div>

            <div className="order-complated">
              <strong>
                <FcCheckmark /> Order completed.
              </strong>
            </div>

            <div className="order-total">
              <span>83.47 TL</span>
            </div>
          </section>

          <span className="hr"></span>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
