import React, { useContext, useEffect } from "react";

import "./style.scss";
import { SlPresent } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../../../contexts/basket/ShopContext";
import { baseService } from "src/network/services/baseService";
import { CLEAR_CART } from "src/contexts/basket/reducers";
import { AuthContext, useAuth } from "../../../../contexts/auth/AuthContext";

export const OrderSummary = ({ isCartPage, /* orderAddress */ }) => {
  const navigate = useNavigate();
  const context = useContext(ShopContext);
  //const { currentUser, addOrder } = useAuth();
  const authContext = useContext(AuthContext);
  const onClickConfirmBag = () => {
    navigate("/shopping/checkout");
  };

  const onClickPay = async () => {
    /**
     * @type {OrderProduct}
     */

    console.log("AuthContextt", authContext);
    const orderData = {
      userId: authContext.user[0].id,
      // user: currentUser,
      date: new Date().toLocaleString(),
      orderId: Date.now(),
      orderList: context.cart,
      totalOrderAmount: context.totalPrice(),
      address: authContext.orderAddress,
    };
    await baseService.sendOrderItems(orderData);
    // console.log(currentUser[0].user);
    // console.log(orderData);
    //  await authContext.addOrder(authContext.user, orderData);

    context.clearCart();
    navigate("/order-tracking");
  };

  return (
    <>
      <div className="order-summary">
        <div className="order-summary-card">
          <div className="order-summary-card-header">
            <header>Order Summary</header>
          </div>
          <div className="order-summary-card-informations">
            <div className="order-product">
              <p>Products</p>
              <p className="price">
                <strong>{context.totalPrice()} $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>
                Free Shipping For Shopping <span>Over 200 $</span>
              </p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>50% Discount in Bag</p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-campaign">
              <p>2 for 1</p>
              <p className="amount-discount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="order-discount">
              <p>Total Discount</p>
              <p className="discounts-amount">
                <strong>- 0,00 $</strong>
              </p>
            </div>
            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="order-total">
              <p>Total</p>
              <p className="total-price">
                <strong>{context.totalPrice()} $</strong>
              </p>
            </div>
            <div className="order-confirm">
              {isCartPage ? (
                <button className="btn btn-gray" onClick={onClickConfirmBag}>
                  Confirm Bag
                </button>
              ) : (
                <button className="btn btn-gray" onClick={onClickPay}>
                  Pay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
