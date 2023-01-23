import React, { useState } from "react";
import CreditCard from "../../../../components/app/shopping-cart/credit-card/CreditCard";
import OrderSummary from "../../../../components/app/shopping-cart/order-summary/OrderSummary";

const Payment = () => {
  return (
    <div className="checkout-container">
      <CreditCard />
      <OrderSummary isCartPage={false} isOrderPage={true} />
    </div>
  );
};

export default Payment;
