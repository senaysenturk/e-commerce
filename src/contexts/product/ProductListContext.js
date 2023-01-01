import { createContext, useContext, useState } from "react";
import { getProduct } from "../../network/requests/product/products";

const ProductListContext = createContext();

export const ProductListProvider = ({ children }) => {
  const getProducts = async () => {
    const response = await getColors();
    setColors(response.data);
    // console.log(colors);
  };

  const getProductsByCategories = async () => {
    const response = await getColors();
    setColors(response.data);
    // console.log(colors);
  };

  const values = {
    product,
    setProduct,
    addProduct,
    image,
    setImage,
    uploadImage,
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
    // setColor,
    // setSize,
  };

  return (
    <ProductListContext.Provider value={values}>
      {children}
    </ProductListContext.Provider>
  );
};

export const useProduct = () => useContext(ProductListContext);
