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

export const getProductByCategory = async (category) => {
  const result = await baseService.getWithParams(
    `http://localhost:5500/products?category=${category}`
  );

  return result.data;
};

export const getProductBySubcategory = async (category, subcategory) => {
  const result = await baseService.getWithParams(
    `http://localhost:5500/products?category=${category}&subcategor=${subcategory}`
  );

  return result.data;
};

export const postImage = (data, handleUploadProgress = () => {}) => {
  return baseService.postImage(
    "https://api.cloudinary.com/v1_1/dr4cvohdq/image/upload",
    data
  );
};
