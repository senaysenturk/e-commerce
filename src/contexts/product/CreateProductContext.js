import { createContext, useContext, useState } from "react";
import {
  getColors,
  getSizes,
  getCategories,
} from "../../network/requests/menu/options";
import {
  postProduct,
  getProduct,
  patchProduct,
  deleteProduct,
  postImage,
  getProductByCategory,
  getProductBySubcategory,
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
  const [moreResult, setMoreResult] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProduct();
    setProducts(response);
    // console.log(response);
  };

  // console.log("Product", product);
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
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
    console.log("Reponse: " + response.status);
  };

  const updateProduct = async (productId, newProduct) => {
    console.log(productId);
    console.log(newProduct);
    await patchProduct(productId, newProduct);
    getAllProducts();
  };

  const removeProduct = async (productId) => {
    await deleteProduct(productId);
    getAllProducts();
  };

  // Upload Image
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
    // console.log(response.data);
  };

  const getProductsByCategory = async (category) => {
    setSearchProducts("");
    const response = await getProductByCategory(category);
    setSearchProducts(response.data);
    console.log("getProductsByCategory", response.data);
  };
  const getProductsBySubcategory = async (category, subcategory) => {
    setSearchProducts("");
    const response = await getProductBySubcategory(category, subcategory);
    setSearchProducts(response.data);
    console.log("getProductsBySubcategory", response.data);
  };

  const values = {
    product,
    setProduct,
    products,
    setProducts,
    getAllProducts,
    addProduct,
    updateProduct,
    removeProduct,
    image,
    setImage,
    uploadImage,
    moreResult,
    setMoreResult,
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
    // setColor,
    // setSize,
    uploadPercentage,
    getProductsByCategory,
    getProductsBySubcategory,
    searchProducts,
    setSearchProducts,
  };

  return (
    <CreateProductContext.Provider value={values}>
      {children}
    </CreateProductContext.Provider>
  );
};

export const useProduct = () => useContext(CreateProductContext);
