import React, { useContext, useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import ShopContext from "src/contexts/basket/ShopContext";
import { getCartById } from "src/network/requests/cart/addToCart";
import { baseService } from "src/network/services/baseService";
import OrderItem from "./OrderItem";
import "./style.scss";

/**
 *@type {OrderProduct[]}
 */
export const dummyOrderData = [
  {
    userId: 1,
    orderList: [
      {
        name: "T-shirt",
        price: 10,
        size: "",
        color: "white",
        category: "Woman",
        subcategory: "T-shirt",
        imgPath:
          "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176",
        id: 3,
        amount: 3,
      },
      {
        name: "Ribbed turtleneck dress",
        price: 29.99,
        size: "",
        color: "",
        category: "Woman",
        subcategory: "Dress",
        imgPath:
          "http://res.cloudinary.com/dr4cvohdq/image/upload/v1672579518/txkzmjkj0t9kh29rwelg.webp",
        id: 1,
        amount: 1,
      },
      {
        name: "T-shirt",
        price: 10,
        size: "",
        color: "white",
        category: "Woman",
        subcategory: "T-shirt",
        imgPath:
          "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176",
        id: 3,
        amount: 3,
      },
      {
        name: "Lightweight cotton sweatshirt",
        price: 27.99,
        color: "",
        size: "",
        category: "Man",
        subcategory: "Sweatshirt",
        imgPath:
          "http://res.cloudinary.com/dr4cvohdq/image/upload/v1672587096/wty5mvkd5dltmqetfo8a.webp",
        id: 8,
        amount: 1,
      },
    ],
    orderId: 12365213,
    date: new Date().getDate(),
    totalOrderAmount: 200,
  },

  {
    userId: 1,
    orderList: [
      {
        name: "T-shirt",
        price: 10,
        size: "",
        color: "white",
        category: "Woman",
        subcategory: "T-shirt",
        imgPath:
          "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176",
        id: 3,
        amount: 3,
      },
      {
        name: "Ribbed turtleneck dress",
        price: 29.99,
        size: "",
        color: "",
        category: "Woman",
        subcategory: "Dress",
        imgPath:
          "http://res.cloudinary.com/dr4cvohdq/image/upload/v1672579518/txkzmjkj0t9kh29rwelg.webp",
        id: 1,
        amount: 1,
      },
      {
        name: "Ribbed turtleneck dress",
        price: 29.99,
        size: "S",
        color: "black",
        category: "Woman",
        subcategory: "Dress",
        imgPath:
          "http://res.cloudinary.com/dr4cvohdq/image/upload/v1672579518/txkzmjkj0t9kh29rwelg.webp",
        id: 1,
        amount: 1,
      },
    ],
    orderId: 12365214,
    date: new Date().getDate(),
    totalOrderAmount: 200,
  },
];

const OrderTracking = () => {
  const context = useContext(ShopContext);

  /**
   * @type {[CartProduct[]]}
   */
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await baseService.getOrderItemsByUserId(context.auth.id);
      let mergedOrderList = [];

      result.forEach((items) => {
        mergedOrderList = [...mergedOrderList, ...items.orderList];
      });
      setOrderList(result);
    })();
  }, []);

  return (
    <div className="order-tracking">
      <OrderItem orderData={orderList} />
      {/* {orderList.map((product, index) => {
        return (
          <div className="order-container" key={index}>
            <div className="order-img">
              <img src={product.imgPath} alt={product.name} />
            </div>
            <div className="order-info-container">
              <section className="order-summary">
                <div className="order-info">
                  <div className="order-no">
                    <p>
                      Order No:
                      <strong className="order-no">{context.cartId()}</strong>
                    </p>
                  </div>
                  <div className="order-time">
                    <span>{context.getDate()}</span>
                  </div>
                </div>

                <div className="order-complated">
                  <strong>
                    <FcCheckmark /> Order completed.
                  </strong>
                </div>

                <div className="order-total">
                  <span> {product.price} $</span>
                </div>
              </section>

              <span className="hr"></span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default OrderTracking;
