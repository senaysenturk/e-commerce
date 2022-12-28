import { createContext, useContext, useState } from "react";
import { postProduct } from "../../network/requests/products";
import AddProduct from "../../pages/admin/add-product/AddProduct";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  console.log("Product", product);
  const addProduct = async () => {
    const response = await postProduct(product);
    console.log("Reponse: " + response);
  };

  const values = { product, setProduct, addProduct };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
