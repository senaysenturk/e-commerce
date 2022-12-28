import React, { useState } from "react";
import list from "../../../data";
import "./style.scss";

import OrderSummary from "../../../components/app/shopping-cart/order-summary/OrderSummary";
import OrderItem from "../../../components/app/shopping-cart/order-item/OrderItem";
import Header from "../../../components/shared/header/Header";
import { Outlet } from "react-router-dom";

export const ShoppingCart = () => {
  const [cart, setCart] = useState([...list]);

  const handleChange = (product, value) => {
    const productIndex = cart.indexOf(product);
    const cartItem = cart;
    cartItem[productIndex].amount += value;

    let total = 0;
    total += cartItem[productIndex].amount * cartItem[productIndex].price;
    cartItem[productIndex].cartPrice = total;

    if (cartItem[productIndex].amount === 0) {
      cartItem[productIndex].amount = 1;
      cartItem[productIndex].cartPrice = cartItem[productIndex].price;
    }
    setCart([...cartItem]);
  };

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
          {/* {list.map((product) => (
            <OrderItem key={product.id} product={product} handleClick={handleClick} />
          ))} */}
          <OrderItem
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
          />
          {/* <OrderSummary price={price} /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
