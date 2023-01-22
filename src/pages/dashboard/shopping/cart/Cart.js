import React, { useState, useContext } from "react";
import list from "../../../../data";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import OrderDetail from "../../../../components/app/shopping-cart/order-item/OrderDetail";
import ShopContext from "../../../../contexts/basket/ShopContext";
import OrderSummary from "src/components/app/shopping-cart/order-summary/OrderSummary";

export const Cart = () => {
  const [cart, setCart] = useState([...list]);
  const [message, setMessage] = useState("");
  const context = useContext(ShopContext);

  const navigate = useNavigate();
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
  let cartCount = 0;
  context.cart.map((item) => (cartCount += item.amount));

  return (
    <>
      {cartCount > 0 ? (
        <div className="shopping-cart">
          {message.length > 1 && (
            <div className="shopping-cart-message">
              <p>{message}</p>
            </div>
          )}
          {/* <div className="shopping-cart-content">
            <OrderItem
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              setMessage={setMessage}
            />
            
          </div> */}
          <div className="checkout-container">
            <div className="checkout-container-middle">
              <OrderDetail
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                setMessage={setMessage}
              />
            </div>
            <OrderSummary isCartPage={true} isOrderPage={false} />
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="empty-message">
            <p className="danger">Your shopping cart is empty!</p>
            <p>Your cart is currently empty.</p>
            <p>You can add the products to your cart to continue shopping</p>
          </div>
          <button className="btn btn-gray" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
