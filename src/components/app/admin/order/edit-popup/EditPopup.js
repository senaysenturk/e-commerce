import React from "react";
import { useContext, useState, useEffect } from "react";
import "./style.scss";
import { AuthContext } from "../../../../../contexts/auth/AuthContext";

export const EditPopup = ({ orderObject, handleClose }) => {
  const authContext = useContext(AuthContext);
  const [orderDate, setOrderDate] = useState(
    orderObject.date.split(",").slice(0, 1).toString()
  );
  const [user, setUser] = useState(
    authContext.users.find((user) => user.id === orderObject.userId)
  );
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>

          <div className="add-product">
            <h3>EDIT ORDER</h3>
            <div className="product">
              {JSON.stringify(orderObject)}
              {JSON.stringify(orderDate)}
              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={orderObject.orderId}
                // onChange={handleUser}
              />

              <label htmlFor="date">
                <strong>Date of Birth</strong>
              </label>
              <input
                type="date"
                id="birth-day"
                name="date"
                placeholder="DD.MM.YYYY"
                //onChange={handleUser}
                defaultValue={orderDate}
              />

              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={user.user}
                // onChange={handleUser}
              />

              <label htmlFor="mail">Mail Address</label>
              <input
                type="text"
                placeholder="Enter an email"
                id="mail"
                name="mail"
                defaultValue={user.mail}
                // onChange={handleUser}
              />

              {orderObject.orderList.length &&
                orderObject.orderList.map((order, i) => {
                  return (
                    <>
                      <label htmlFor="user">Product Name</label>
                      <input
                        type="text"
                        placeholder="Enter a profile name."
                        id="user"
                        name="user"
                        defaultValue={order.name}
                        // onChange={handleUser}
                      />
                    </>
                  );
                })}

              <label htmlFor="user">Total Price</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={orderObject.totalOrderAmount}
                // onChange={handleUser}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopup;
