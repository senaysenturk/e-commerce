import React from 'react'

import "./style.scss";
import "../../../utilities.scss";

import OrderSummary from "../../../components/app/shopping-cart/order-summary/OrderSummary";
import CardDetails from "../../../components/shared/card/card-details/CardDetails";
export const ShoppingCart = () => {
  return (
    <>
    <div>
      <OrderSummary />
      <CardDetails />
    </div>
    </>
  )
}

export default ShoppingCart;