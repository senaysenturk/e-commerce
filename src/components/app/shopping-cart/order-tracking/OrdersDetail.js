import React, { useContext, useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import ShopContext from "src/contexts/basket/ShopContext";
import { getCartById } from "src/network/requests/cart/addToCart";
import { baseService } from "src/network/services/baseService";
import OrderItem from "./OrderItem";
import { useNavigate } from "react-router-dom";

import "./style.scss";


const OrdersDetail = ({ orderData }) => {
  const context = useContext(ShopContext);

  return (
    
    <div className="orders-detail">
      <div className="order-container">
            {/* {context.map((photo, index) =>{
                return( */}
                    <div className="order-img">
                    <img src="https://02b3ab.cdn.akinoncloud.com/products/2022/11/02/42945/f713dc12-8868-47b0-b64a-aa081b93ce92_size220x220_cropCenter.jpg" />
                  </div>
                   {/* )
            })} */}
                  
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
              <span> {context.totalPrice()} $</span>
            </div>
          </section>

          <span className="hr"></span>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;
