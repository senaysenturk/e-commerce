import React, { useContext, useEffect, useState } from "react";
import { getOrderList } from "../../../network/requests/order/order";
import { AuthContext, useAuth } from "../../../contexts/auth/AuthContext";
import Table from "../../../components/shared/table/Table";
import { baseService } from "src/network/services/baseService";

const AllOrders = () => {
  // const { getUserByOrderId, getAllUsers, users } = useAuth();
  const authContext = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      await authContext.getAllUsers();
      const result = await Promise.all(
        authContext.users.map((user) =>
          baseService.getOrderItemsByUserId(user.id)
        )
      );
      console.log(await baseService.getOrderItemsByUserId(20));
    })();
  }, []);

  useEffect(() => {
    if (authContext.users) {
      const allOrders = authContext.users.flatMap((user) => user.orders);
      setOrders(allOrders);
    }
  }, [authContext.users]);

  return (
    <>
      <div className="all-orders">
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
            orders.map((order, key) => {
              return [
                order.orderId,
                order.createdAt,

                order.orderList.length,
                order.totalOrderAmount,
                [
                  <button
                    className="list-btn "
                    onClick={() => {
                      // setOrder(order);
                      // setIsOpen(true);
                    }}
                  >
                    Details
                  </button>,
                  <button
                    className="list-btn btn-danger"
                    // onClick={() => {
                    //   handleDeleteOrder(order.orderId);
                    // }}
                  >
                    Delete
                  </button>,
                ],
              ];
            })
          }
        />
      </div>
      {/* {isOpen && (
        <DetailPopup handleClose={() => setIsOpen(false)} order={order} />
      )} */}
    </>
  );
};

export default AllOrders;
