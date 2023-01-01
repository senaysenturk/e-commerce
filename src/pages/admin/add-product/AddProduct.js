import React, { useContext, useEffect, useState } from "react";
import { useProduct } from "../../../contexts/product/ProductContext";
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
    setColor((prevSize) => [...prevSize, e.target.value]);
    console.log(color);
    setProduct({ ...product, color: color });
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories();
  }, [imageURL]);

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
                type="radio"
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
                  type="radio"
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
      </div>
      {imageURL}
      <div className="add-button">
        <button className="btn btn-primary" onClick={() => addProduct()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
