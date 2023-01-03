import React, { useState, useEffect, useContext } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import ShopContext from "../../../../contexts/basket/ShopContext";
import OrderSummary from "../order-summary/OrderSummary";

import "./style.scss";

export const OrderDetail = ({ cart, setCart, handleChange, setMessage }) => {
  const context = useContext(ShopContext);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    // const cartList = cart.filter((product) => product.id !== id);
    // setCart(cartList);
    context.removeProductFromCart(id);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    context.cart.map((item) => (total += item.amount * item.price));
    setPrice(total);
  };

  const handleCount = () => {
    let cartCount = 0;
    context.cart.map((item) => (cartCount += item.amount));
    setCount(cartCount);
  };

  const handleMessage = () => {
    console.log(price);
    let value = 0;
    if (price < 200) {
      value = 200 - price;
      setMessage(
        "Sepetinize " +
          value +
          " $ degerinde daha urun ekleyin, kargo bedava olsun."
      );
    } else {
      setMessage("");
    }
  };

  useEffect(() => {
    handlePrice();
    handleCount();
    handleMessage();
  });

  
  return (
    <>
      <div className="order-card">
        <div className="order-header">
          <header>Sepet ({count})</header>
        </div>
        {context.cart.map((product) => (
          <div className="order-item-card" key={product.id}>
            <div className="item-image">
              <img src={product.imgPath} alt="" />
            </div>
            <div className="item-content-main">
              <div className="item-main">
                <div className="item-product">
                  <a>{product.name}</a>

                  <div className="item-price">
                    <span className="actual-price">
                      {product.price.toFixed(2)} $
                    </span>
                    {/* <span className="actual-price">{product.cartPrice}</span> */}
                  </div>

                  <span
                    className="delete-icon"
                    onClick={() => handleRemove(product.id)}
                  >
                    <RiDeleteBinLine />
                  </span>

                  
                </div>
                <div className="item-attributes-holder">
                  <span className="item-attribute-value">{product.color}</span>
                  <p className="item-attribute"></p>
                  <span className="item-attribute-value">{product.size}</span>
                </div>

                {/* 29 Aralık PerşembeTarihinde Kargoda */}

                <div className="item-middle">
                  <span className="shipping-icon">
                    <MdOutlineLocalShipping />
                  </span>
                  <p>
                    <span>29 Aralık Perşembe</span>Tarihinde Kargoda
                  </p>
                </div>


                {/*  - 1 +     49.99 $ */}
                <div className="item-bottom">
                  <div className="item-quantity">
                    <div className="item-quantity-wrapper">
                      <a
                        className="item-quantity-button item-decrease-button"
                        onClick={(e) => {
                          e.preventDefault();
                          context.decreaseProduct(product.id);
                        }}
                      >
                        <span>-</span>
                      </a>
                      <span className="item-quantity-input" id="number">
                        {product.amount}
                      </span>
                      <a
                        className="item-quantity-button item-increase-button"
                        onClick={() => {
                          const copyProduct = { ...product, amount: 1 };
                          context.addProductToCart(copyProduct);
                        }}
                      >
                        <span>+</span>
                      </a>
                    </div>
                  </div>
                  <div className="item-price">
                    <span className="actual-price">
                      {price.toFixed(2)} $
                    </span>
                    {/* <span className="actual-price">{product.cartPrice}</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OrderSummary price={price.toFixed(2)} />
    </>
  );
};

export default OrderDetail;
