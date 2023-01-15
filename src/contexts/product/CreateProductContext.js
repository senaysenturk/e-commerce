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
  const [additionalCategories, setAdditionalCategories] = useState([]);
  const [moreResult, setMoreResult] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [filters, setFilters] = useState({
    category: "",
    subcategory: "",
    color: "",
    size: "",
  });

  const [isProductValid, setIsProductValid] = useState({
    name: true,
    detail: true,
    price: true,
    size: true,
    color: true,
    category: true,
    subcategory: true,
    additionalCategories: true,
    imgPath: true,
  });

  const getAllProducts = async () => {
    const response = await getProduct();
    setProducts(response);
    // console.log(response);
  };

  // console.log("Product", product);
  const addProduct = async () => {
    // event.preventDefault();
    console.log(product);
    setIsProductValid({ ...product });
    if (Object.values(product).every((value) => value)) {
      const response = await postProduct(product);
      console.log("Reponse: " + response.status);
      getAllProducts();

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
        additionalCategories: "",
      });
    }
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

    let percentage = null;
    const onUploadProgress = (event) => {
      percentage = Math.round((event.loaded / event.total) * 100);
    };
    console.log("percentage", percentage);

    const response = await postImage(formdata, onUploadProgress);
    setProduct({ ...product, imgPath: response.data.url });
    return percentage;
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

  const getAllCategories = async (categoryName) => {
    const response = await getCategories(categoryName);
    setCategories(response.data);
    // console.log(response.data);
  };

  const getAllAdditionalCategories = async (categoryName) => {
    const response = await getCategories(categoryName);
    setAdditionalCategories(response.data);
    // console.log(response.data);
  };

  const getProductsByCategory = async (categoryName, category) => {
    setSearchProducts("");
    const response = await getProductByCategory(categoryName, category);
    setSearchProducts(response.data);
    // console.log("getProductsByCategory", response.data);
  };
  const getProductsBySubcategory = async (
    categoryName,
    category,
    subCategoryName,
    subcategory
  ) => {
    setSearchProducts("");
    const response = await getProductBySubcategory(
      categoryName,
      category,
      subCategoryName,
      subcategory
    );
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
    getProductsByCategory,
    getProductsBySubcategory,
    searchProducts,
    setSearchProducts,
    uploadPercentage,
    filters,
    setFilters,
    additionalCategories,
    getAllAdditionalCategories,
    filters,
    setFilters,
    isProductValid,
  };

  return (
    <CreateProductContext.Provider value={values}>
      {children}
    </CreateProductContext.Provider>
  );
};

export const useProduct = () => useContext(CreateProductContext);
