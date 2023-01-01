import { baseService } from "../../services/baseService";

export const postProduct = (newProduct) => {
  //console.log("Env: " + process.env.REACT_APP_API_URL);
  console.log("newProduct", newProduct);
  return baseService.post("http://localhost:5500/", "products", newProduct);
};
/**
 * @returns {Product[]}
 */
export const getProduct = async () => {
  const result = await baseService.get("http://localhost:5500/", "products");

  return result.data;
};

export const postImage = (data) => {
  return baseService.postImage(
    "https://api.cloudinary.com/v1_1/dr4cvohdq/image/upload",
    data
  );
};
