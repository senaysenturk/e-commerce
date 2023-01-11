import React, { useEffect, useState } from "react";
import { getOrderList } from "../../../network/requests/order/order";
import { useAuth } from "../../../contexts/auth/AuthContext";
import Table from "../../../components/shared/table/Table";

const AllOrders = () => {
  const { getUserByOrderId } = useAuth();
  const [orders, setOrders] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [messageObject, setMessageObject] = useState([]);

  const [user, setUser] = useState([]);

  const getAllOrders = async () => {
    const response = await getOrderList();
    setOrders(response.data);
    console.log(response.data);
    console.log(response.data[0].orderList[0].createdAt);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div className="all-users">
        <div className="">
          <Table
            searchable={true}
            head={[
              { name: "Order Number", sortable: true },
              { name: "Order Date", sortable: true },
              { name: "User Name", sortable: true },
              { name: "Mail Address", sortable: true },
              { name: "Phone" },
              { name: "Order Summary", sortable: true },
              { name: "Order Price", sortable: true },
              { name: "Options", width: 200 },
            ]}
            body={
              orders &&
              orders.map((order, key) => [
                order.orderId,
                order.orderList[0].createdAt,
                getUserByOrderId(order.orderId).toString(),
                // message.mail,
                // message.phone,
                // message.subject,
                order.orderList.length,
                order.totalOrderAmount,
                [
                  <button
                    className="list-btn "
                    /* onClick={() => {
                      setMessageObject(message);
                      togglePopup();
                    }} */
                  >
                    Details
                  </button>,
                  <button
                    className="list-btn btn-danger"
                    /*   onClick={() => {
                      console.log(message.id);
                      handleDeleteMessage(message.id);
                    }} */
                  >
                    Delete
                  </button>,
                ],
              ])
            }
          />
        </div>
        {/*  {isOpen && (
          <DetailPopup
            handleClose={togglePopup}
            messageObject={messageObject}
          />
        )} */}
      </div>
    </>
  );
};

export default AllOrders;
