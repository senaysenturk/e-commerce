import { createContext, useContext, useState } from "react";
import {
  postProduct,
  getProduct,
  postImage,
} from "../../network/requests/products";
import AddProduct from "../../pages/admin/add-product/AddProduct";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  //console.log("Product", product);
  const addProduct = async () => {
    const response = await postProduct(product);
    console.log("Reponse: " + response.status);
  };
  const uploadImage = async () => {
    console.log(image);
    var formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", "vi6rdwfh");
    formdata.append("cloud_name", "dr4cvohdq");
    const response = await postImage(formdata);

    console.log("Img Response" + response);
  };

  const values = {
    product,
    setProduct,
    addProduct,
    image,
    setImage,
    uploadImage,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
