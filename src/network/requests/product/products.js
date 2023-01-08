import { baseService } from "../../services/baseService";

export const postProduct = (newProduct) => {
  // console.log("Env: " + process.env.REACT_APP_API_URL);
  console.log("newProduct", newProduct);
  return baseService.post("http://localhost:5500/", "products", newProduct);
};

export const patchProduct = (id, newProduct) => {
  return baseService.patch(
    "http://localhost:5500/",
    "products/",
    id,
    newProduct
  );
};

export const deleteProduct = async (productId) => {
  return baseService.delete("http://localhost:5500/", "products/", productId);
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
  return result;
};

export const getProductBySubcategory = async (category, subcategory) => {
  console.log(
    `http://localhost:5500/products?category=${category}&subcategory=${subcategory}`
  );
  const result = await baseService.getWithParams(
    `http://localhost:5500/products?category=${category}&subcategory=${subcategory}`
  );

  return result;
};

export const postImage = (data, handleUploadProgress = () => {}) => {
  return baseService.postImage(
    "https://api.cloudinary.com/v1_1/dr4cvohdq/image/upload",
    data
  );
};
