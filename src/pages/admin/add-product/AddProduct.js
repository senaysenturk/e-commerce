import React, { useContext, useState } from "react";
import { useProduct } from "../../../contexts/product/ProductContext";
import "./style.scss";

const AddProduct = () => {
  const { product, setProduct, addProduct, image, setImage, uploadImage } =
    useProduct();

  const handleSetProduct = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSetImage = (e) => {
    setImage(e.target.files[0]);
    //console.log(image);
  };

  return (
    <>
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
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <label htmlFor="color">Color</label>
          <select id="color" name="color" onChange={handleSetProduct}>
            <option>-- None --</option>
            <option>Green</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Black</option>
            <option>Pink</option>
          </select>

          <label htmlFor="category">Category</label>
          <select id="category" name="category" onChange={handleSetProduct}>
            <option>-- None --</option>
            <option>Woman</option>
            <option>Man</option>
            <option>Child</option>
          </select>

          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleSetImage}
          />
        </div>
        <div className="add-button">
          <button className="btn btn-primary" onClick={() => addProduct()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
