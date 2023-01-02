import React, { useContext, useEffect, useRef, useState } from "react";
import ProgressBar from "../../../components/shared/progressbar/ProgressBar";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import "./style.scss";

const AddProduct = () => {
  const {
    product,
    setProduct,
    addProduct,
    image,
    setImage,
    uploadImage,
    imageURL,
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
    uploadPercentage,
    // setColor,
    // setSize,
  } = useProduct();

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const handleSetProduct = (e) => {
    console.log(product);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSetImage = async (e) => {
    var response = await uploadImage(e.target.files[0]);
  };

  const handleSetSize = (e) => {
    setSize((prevSize) => [...prevSize, e.target.value]);
    setProduct({ ...product, size: size });
  };

  const handleSetColor = (e) => {
    setColor((prevColor) => [...prevColor, e.target.value]);
    setProduct({ ...product, color: color });
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories();
  }, []);

  const [completed, setCompleted] = useState(0);
  const uploadRef = useRef();
  const statusRef = useRef();
  const loadTotalRef = useRef();
  const progressRef = useRef();
  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="add-product">
      <h3>ADD PRODUCT</h3>
      <div className="product">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          placeholder="T-Shirt"
          id="name"
          name="name"
          onChange={handleSetProduct}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          placeholder="10.99$"
          step="0.01"
          min="0"
          id="price"
          name="price"
          onChange={handleSetProduct}
        />
        <div className="sizes">
          <p>Sizes:</p>
          {sizes.map((size, index) => (
            <div className="size">
              <input
                type="checkbox"
                name={size}
                id={size}
                value={size}
                onChange={handleSetSize}
              />
              <label for={size}>{size}</label>
            </div>
          ))}
        </div>
        <div className="colors">
          <p>Colors:</p>
          <div className="color">
            {colors.map((color, index) => (
              <>
                <input
                  type="checkbox"
                  name={color}
                  id={color}
                  value={color}
                  onChange={handleSetColor}
                />
                <label for={color}>
                  <span className={color} name={color} id={color}></span>
                </label>
              </>
            ))}
          </div>
        </div>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={handleSetProduct}>
          <option>-- None --</option>

          {categories.map((color, index) => (
            <option key={index}>{color}</option>
          ))}
        </select>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleSetImage} />
        <ProgressBar bgcolor={"#6a1b9a"} completed={uploadPercentage} />
      </div>
      <div className="add-button">
        <button className="btn btn-primary" onClick={() => addProduct()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
