import React, { useState } from "react";
import CreditCardForm from "../../../../components/app/shopping-cart/credit-card/form/CreditCardForm";
import OrderSummary from "../../../../components/app/shopping-cart/order-summary/OrderSummary";

const Payment = () => {  
  return (
    <>
      <CreditCardForm />
      <OrderSummary isCartPage={false} isOrderPage={true} />
    </>
  );
};

export default Payment;
