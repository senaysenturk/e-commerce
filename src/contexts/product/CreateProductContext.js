import { createContext, useContext, useState } from "react";
import {
  getColors,
  getSizes,
  getCategories,
} from "../../network/requests/options";
import {
  postProduct,
  getProduct,
  postImage,
} from "../../network/requests/product/products";

const CreateProductContext = createContext();

export const CreateProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  //console.log("Product", product);
  const addProduct = async () => {
    const response = await postProduct(product);
    console.log("Reponse: " + response.status);
  };

  //Upload Image
  const uploadImage = async (img) => {
    var formdata = new FormData();
    formdata.append("file", img);
    formdata.append("upload_preset", "vi6rdwfh");
    formdata.append("cloud_name", "dr4cvohdq");
    const response = await postImage(formdata, (progressEvent) => {
      const percentage = parseInt(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      );
      setUploadPercentage(percentage);
      console.log(percentage);
      return percentage;
    });

    setProduct({ ...product, imgPath: response.data.url });
  };
  const getAllColors = async () => {
    const response = await getColors();
    setColors(response.data);
    // console.log(colors);
  };

  const getAllSizes = async () => {
    const response = await getSizes();
    setSizes(response.data);
    // console.log(sizes);
  };

  const getAllCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
    // console.log(sizes);
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
    uploadPercentage,
  };

  return (
    <CreateProductContext.Provider value={values}>
      {children}
    </CreateProductContext.Provider>
  );
};

export const useProduct = () => useContext(CreateProductContext);
