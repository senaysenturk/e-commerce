import { createContext, useContext, useState } from "react";
import {
  getCities,
  postAddress,
  getOrders,
  postOrder,
} from "../../network/requests/order/order";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const [cities, setCities] = useState([]);
  const [address, setAddress] = useState([]);

  // console.log("Order", order);
  const addOrder = async () => {
    const response = await postOrder(order);
    console.log("Reponse: " + response.status);
  };

  const AddAddress = () => {
    setOrder({ ...order, address: [address] });
  };

  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    // console.log(cities);
  };

  const values = {
    order,
    setOrder,
    addOrder,
    address,
    setAddress,
    AddAddress,
    city,
    getAllCities,
  };

  return (
    <OrderContext.Provider value={values}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);