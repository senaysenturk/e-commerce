import React from "react";

import "./style.scss";

import OrderSummary from "../../../components/app/shopping-cart/order-summary/OrderSummary";
import OrderItem from "../../../components/app/shopping-cart/order-item/OrderItem";
import Header from "../../../components/shared/header/Header";
import { Outlet } from "react-router-dom";

export const ShoppingCart = () => {
  return (
    <>
      {/*  <Header title={"shiwear"} /> */}
      <div className="shopping-cart">
        {/* <div className="shopping-cart-message">
          <p>
            Sepetinize 1 adet daha kampanyali urun ekleyin, 1 urun hediyemiz
            olsun.
          </p>
        </div> */}
        <div className="shopping-cart-content">
          <OrderItem />
          <OrderSummary />
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
