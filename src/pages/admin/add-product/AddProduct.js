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
  } = useProduct();

  const handleSetProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };

  const handleSetImage = async (e) => {
    var response = await uploadImage(e.target.files[0]);
    if (imageURL) {
      setProduct({ ...product, [e.target.name]: imageURL });
    }
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

        <label htmlFor="dize">Size</label>
        <select id="size" name="size" onChange={handleSetProduct}>
          <option>-- None --</option>
          {sizes.map((color, index) => (
            <option key={index}>{color}</option>
          ))}
        </select>
        <label htmlFor="color">Color</label>
        <select id="color" name="color" onChange={handleSetProduct}>
          <option>-- None --</option>
          {colors.map((color, index) => (
            <option key={index}>{color}</option>
          ))}
        </select>

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
