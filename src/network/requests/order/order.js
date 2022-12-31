import { baseService } from "../../services/baseService";

export const postOrder = async (newOrder) => {
  console.log("newOrder", newOrder);
  return baseService.post("http://localhost:5500/", "orders", newOrder);
};

export const getOrders = async () => {
  return baseService.get("http://localhost:5500/", "orders");
};
