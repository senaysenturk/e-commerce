import React from "react";
import { dummyOrderData } from "./OrderTracking";


/**
 * 
 * @param {{orderData:OrderProduct[]}}
 * @returns 
 */
const OrderItem = ({orderData}) => {
  return (
    <>
      {orderData.map((data) => {
        const imageValues = data.orderList
          .map((orderItem, index, arr) => {
            if (arr.length > 3 && index === 2) {
              return arr.length - 2;
            }
            return orderItem.imgPath;
          })
          .filter((url, index) => index < 3);
          console.log(imageValues)
        return (
          <div className="orderItem__group">
            <div className="orderItem__imgGroup">
              {imageValues.map((val, index) => {
                if (typeof val === "number"){
                  return <div> + {val}  adet</div> 
                } 
                return <img src={val} alt={""} key={index} />;
              })}
            </div>
            <div className="orderId">{data.orderId}</div>

            <div className="successInfo">Sipariş tamamlandi</div>

            <div className="totalPrice">{data.totalOrderAmount}</div>

            <button className="detail"> > </button>

            <div className="detailItems">
              {/* {JSON.stringify(data.orderList)} */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OrderItem;
