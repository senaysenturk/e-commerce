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
  const [products, setProducts] = useState(null);
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [searchResult, setSearchResult] = useState([]);

  const [men, setMen] = useState(null);
  const [women, setWomen] = useState(null);
  const [kids, setKids] = useState(null);

  const getAllProducts = async () => {
    const response = await getProduct();
    setProducts(response);
    console.log(response);
  };

  //console.log("Product", product);
  const addProduct = async () => {
    const response = await postProduct(product);
    setProduct({
      name: "",
      price: "",
      color: "",
      size: "",
      category: "",
      subcategory: "",
      imgPath: "",
    });
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
    console.log(response.data);
  };

  const getManProducts = () => {
    setMen(
      products.filter((productObj) => productObj.category.includes("Man"))
    );
  };

  const getWomanProducts = () => {
    setWomen(
      products.filter((productObj) => productObj.category.includes("Woman"))
    );
  };

  const getChildProducts = () => {
    setKids(
      products.filter((productObj) => productObj.category.includes("Child"))
    );
  };

  const values = {
    product,
    setProduct,
    products,
    setProducts,
    getAllProducts,
    addProduct,
    image,
    setImage,
    uploadImage,
    searchResult,
    setSearchResult,
    men,
    getManProducts,
    women,
    getWomanProducts,
    kids,
    getChildProducts,
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
