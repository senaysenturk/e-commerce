import { baseService } from "../../services/baseService";

export const getCities = async () => {
  return baseService.get("http://localhost:5500/", "cities");
};

export const postAddress = async (newAddress) => {
  console.log("newAddress", newAddress);
  return baseService.post("http://localhost:5500/", "orders", newAddress);
};

export const postOrder = async (newOrder) => {
  console.log("newOrder", newOrder);
  return baseService.post("http://localhost:5500/", "orders", newOrder);
};

export const getOrders = async () => {
  return baseService.get("http://localhost:5500/", "orders");
};
