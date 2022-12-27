import React from "react";
import "./style.scss";

const AddProduct = () => {
  return (
    <div className="add-product">
      <h3>ADD PRODUCT</h3>
      <div className="product">
        <label htmlFor="">Product Name</label>
        <input type="text" />

        <label htmlFor="">Price</label>
        <input type="text" />

        <label htmlFor="">Size</label>
        <input type="text" />

        <label htmlFor="">Color</label>
        <input type="text" />

        <label htmlFor="">Category</label>
        <input type="text" />

        <label htmlFor="">Image</label>
        <input type="file" />
      </div>
      <div className="add-button">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
