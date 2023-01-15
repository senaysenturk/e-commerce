import React, { useContext, useEffect, useState } from "react";
import {
  getOrderList,
  deleteOrder,
} from "../../../network/requests/order/order";
import { AuthContext, useAuth } from "../../../contexts/auth/AuthContext";
import EditPopup from "../../../components/app/admin/order/edit-popup/EditPopup"
import Table from "../../../components/shared/table/Table";
import { baseService } from "src/network/services/baseService";
import { useNavigate } from "react-router-dom";

const AllOrders = () => {
  const { getUserByOrderId, getAllUsers, users } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [messageObject, setMessageObject] = useState([]);
  const [user, setUser] = useState([]);
  const [orderObject, setOrderObject] = useState();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const getAllOrders = async () => {
    const response = await getOrderList();
    setOrders(response.data);
    console.log(response.data);
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getAllOrders();
    getAllUsers();
  }, []);
  useEffect(() => {
    (async () => {
      const result = await baseService.getAllOrderItems();

      setOrders(result);
    })();
  }, []);
  // console.log(orders);
  const handleDeleteOrder = async (orderId) => {
    await deleteOrder(orderId);
    getAllOrders();
  };

  return (
    <>
      {authContext.loggedIn ? (
        authContext.user[0]?.role == "admin" ? (
          <div className="all-users">
            <div className="">
              <Table
                searchable={true}
                head={[
                  { name: "Order Number", sortable: true },
                  { name: "Order Date", sortable: true },
                  { name: "User Name", sortable: true },
                  { name: "Mail Address", sortable: true },
                  // { name: "Phone" },
                  { name: "Order Summary", sortable: true },
                  { name: "Order Price", sortable: true },
                  { name: "Options", width: 200 },
                ]}
                body={
                  orders.length &&
                  orders.map((order, i) => {
                    const user = authContext.users.find(
                      (user) => user.id === order.userId
                    );
                    return [
                      order.orderId,
                      order.date,
                      user.user,
                      user.mail,
                      // "",

                      order.orderList.length,
                      order.totalOrderAmount,
                      [
                        <button
                          className="list-btn "
                          onClick={() => {
                            setOrderObject(order);
                            togglePopup();
                          }}
                        >
                          Edit
                        </button>,
                        <button
                          className="list-btn btn-danger"
                          onClick={() => {
                            console.log(order.id);
                            handleDeleteOrder(order.id);
                          }}
                        >
                          Delete
                        </button>,
                      ],
                      ,
                    ];
                  })
                }
              />
            </div>
            {isOpen && (
              <EditPopup handleClose={togglePopup} orderObject={orderObject} />
            )}
          </div>
        ) : (
          <div className="cart-empty">
            <div className="empty-message">
              <p className="danger">
                You are not authorized to view this page.
              </p>
            </div>
            <button className="btn btn-gray" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        )
      ) : (
        <div className="cart-empty">
          <div className="empty-message">
            <p className="danger">
              Please login to see your profile information.
            </p>
          </div>
          <button className="btn btn-gray" onClick={() => navigate("/auth")}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default AllOrders;
