import React, { useState, useContext, useEffect } from "react";

import "./style.scss";
import Address from "../../../../components/app/shopping-cart/address-form/Address";
import AddressForm from "../../../../components/app/shopping-cart/address-form/AddressForm";
import BasketSummary from "../../../../components/app/shopping-cart/basket-summary/BasketSummary";
import OrderSummary from "src/components/app/shopping-cart/order-summary/OrderSummary";
import ShopContext from "../../../../contexts/basket/ShopContext";
import CreditCardForm from "../../../../components/app/shopping-cart/credit-card/form/CreditCardForm";

export const Checkout = () => {
  // const [orderAddress, setOrderAddress] = useState({});
  // console.log("orderAddress:", orderAddress);

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-container-middle">
          {/* <Address /> */}
          {/* <BasketSummary /> */}
          {/* <AddressForm setOrderAddress={setOrderAddress} /> */}
          <AddressForm />
        </div>
        {/* <OrderSummary isCartPage={false} orderAddress={orderAddress} /> */}
        {/* <CreditCardForm /> */}
        <OrderSummary isCartPage={false} isOrderPage={false} />
      </div>
    </>
  );
};

export default Checkout;
