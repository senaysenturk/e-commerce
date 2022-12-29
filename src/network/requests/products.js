import { baseService } from "../services/baseService";

export const postProduct = (newProduct) => {
  console.log("Env: " + process.env.REACT_APP_API_URL);
  return baseService.post("http://localhost:5500/", "products", newProduct);
};
export const getProduct = (newProduct) => {
  return baseService.get("http://localhost:5500/", "products");
};
