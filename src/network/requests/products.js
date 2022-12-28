import { baseService } from "../services/baseService";

export const postProduct = (newProduct) => {
  console.log("Env: " + process.env.REACT_APP_API_URL);
  return baseService.post("http://192.168.1.6:5500/", "products", newProduct);
};
export const getProduct = (newProduct) => {
  return baseService.get("http://192.168.1.6:5500/", "products");
};
