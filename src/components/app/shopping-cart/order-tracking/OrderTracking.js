import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "src/contexts/auth/AuthContext";
import { baseService } from "src/network/services/baseService";
import OrderItem from "./OrderItem";
import "./style.scss";

const OrderTracking = () => {
  const authContext = useContext(AuthContext);

  /**
   * @type {[CartProduct[]]}
   */
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await baseService.getOrderItemsByUserId(
        authContext.user[0].id
      );
      setOrderList(result);
    })();
  }, []);

  return (
    <div className="order-tracking">
      <OrderItem orderData={orderList} />
    </div>
  );
};

export default OrderTracking;
