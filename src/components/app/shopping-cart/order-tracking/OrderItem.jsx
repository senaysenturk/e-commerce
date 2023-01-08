import React from "react";
import { dummyOrderData } from "./OrderTracking";

const OrderItem = () => {
  return (
    <div>
      {dummyOrderData.map((data) => {
       const imageGroup = data.orderList.map((orderItem) =>{
        return orderItem.imgPath
       })
       return (
          <div className="orderItem__group">
            <div className="orderItem__imgGroup">
              {
                imageGroup.map((url)=> <img src={url} alt={""} /> )
              }
            </div>
            <div className="orderId">{data.orderId}</div>

            <div className="successInfo">Sipariş tamamlandi</div>

            <div className="totalPrice">{data.totalOrderAmount}</div>

            <button className="detail">></button>

            <div className="detailItems"></div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderItem;
