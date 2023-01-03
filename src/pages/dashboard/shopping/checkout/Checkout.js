import React from "react";
import "./style.scss";
import AddressForm from "../../../../components/app/shopping-cart/address-form/AddressForm";
import OrderSummary from "../../../../components/app/shopping-cart/order-summary/OrderSummary";

export const Checkout = () => {
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-container-middle">
          <AddressForm />
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Checkout;
