import React from "react";
import "./style.scss";
import AddressForm from "../../../../components/app/shopping-cart/address-form/AddressForm";
import BasketSummary from "../../../../components/app/shopping-cart/basket-summary/BasketSummary";
import OrderSummary from "src/components/app/shopping-cart/order-summary/OrderSummary";

export const Checkout = ({ user }) => {
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-container-middle">
          <AddressForm />
          {/* <BasketSummary /> */}
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Checkout;
