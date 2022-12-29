import React, { useState, useContext } from "react";
import list from "../../../../data";
import "./style.scss";

import OrderItem from "../../../../components/app/shopping-cart/order-item/OrderItem";

export const Cart = () => {
  const [cart, setCart] = useState([...list]);
  const [message, setMessage] = useState("");

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
        {message.length > 1 && (
          <div className="shopping-cart-message">
            <p>{message}</p>
          </div>
        )}
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
            // // cart={cart}
            // setCart={setCart}
            // handleChange={handleChange}
            // setMessage={setMessage}
          />
          {/* <OrderSummary price={price} /> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
