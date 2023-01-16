import React, { useState, useContext } from "react";

import "./style.scss";
import "../../../../utilities.scss";

import { useLocation, useNavigate } from "react-router-dom";
import ShopContext from "src/contexts/basket/ShopContext";
// import Product from "src/pages/dashboard/product/Product";

export const BasketSummary = () => {
  const navigate = useNavigate();
  const context = useContext(ShopContext);
  const location = useLocation();

  const [order, setOrder] = useState(location.state.orderData);
  return (
    <>
      <div className="basket-summary">
        <div className="basket-header">
          <header>Order Detail: {order.orderId}</header>
        </div>
        {order.orderList.map((product) => (
          <div className="basket-card">
            <div className="card" key={product.id}>
              <div className="card-img">
                <img src={product.imgPath} alt="" />
              </div>
              <div className="card-content">
                <div className="card-left">
                  <div className="card-info">
                    <p>Product Name: {product.name}</p>
                    <p> Count: {product.amount} </p>
                    <p> Color: {product.color}</p>
                    <p> Size: {product.size}</p>
                    <p> Price: {product.price} $</p>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-price">
                    <p className="product-price">
                      {/* <strong>{context.totalPrice()} $</strong> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-divide">
              <span className="hr"></span>
            </div>
          </div>
        ))}
        <div className="basket-middle">
          <div className="basket-product">
            <p>Products</p>
            <p className="price">
              <strong> {order.totalOrderAmount} $</strong>
            </p>
          </div>
          <div className="basket-shipment">
            <p>Shipment</p>
            <p className="shipment-price">
              <strong>- 0,00 $</strong>
            </p>
          </div>
          <div className="free-shipping">
            <p>Free Shipping For Shopping Over 200 $</p>
          </div>
        </div>

        <div className="or-divide">
          <span className="hr"></span>
        </div>
        <div className="basket-end">
          <div className="basket-total">
            <p>Total</p>
            <p className="total-price">
              <strong>{order.totalOrderAmount} $</strong>
            </p>
          </div>
        </div>

        <div className="continue-button">
          <button
            className="btn btn-gray"
            onClick={(e) => navigate("/order-tracking")}
          >
            Back Order Tracking
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketSummary;
