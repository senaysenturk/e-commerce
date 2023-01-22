import React, { useState } from "react";
import CreditCardForm from "../../../../components/app/shopping-cart/credit-card/form/CreditCardForm";
import OrderSummary from "../../../../components/app/shopping-cart/order-summary/OrderSummary";

const Payment = () => {
  return (
    <div className="checkout-container">
      <CreditCardForm />
      <OrderSummary isCartPage={false} isOrderPage={true} />
    </div>
  );
};

export default Payment;
