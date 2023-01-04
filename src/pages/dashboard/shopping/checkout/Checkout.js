import React, { useState, useContext, useEffect } from "react";

import "./style.scss";
import Address from "../../../../components/app/shopping-cart/address-form/Address";
import AddressForm from "../../../../components/app/shopping-cart/address-form/AddressForm";
import BasketSummary from "../../../../components/app/shopping-cart/basket-summary/BasketSummary";
import OrderSummary from "src/components/app/shopping-cart/order-summary/OrderSummary";
import ShopContext from "../../../../contexts/basket/ShopContext";

export const Checkout = () => {
  // const context = useContext(ShopContext);
  // const [price, setPrice] = useState(0);

  // const handlePrice = () => {
  //   let total = 0;
  //   context.cart.map((item) => (total += item.amount * item.price));
  //   setPrice(total);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-container-middle">
          {/* <Address /> */}
          <BasketSummary />
          <AddressForm />
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Checkout;
