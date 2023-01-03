import React from "react";
import "./style.scss";
import AddressForm from "../../../../components/app/shopping-cart/address-form/AddressForm";
import BasketSummary from "../../../../components/app/shopping-cart/basket-summary/BasketSummary";

export const Checkout = () => {
  return (
    <>
      <div className="checkout-container">
        <div></div>
        <div className="checkout-container-middle">
          <AddressForm />
          <BasketSummary />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Checkout;
