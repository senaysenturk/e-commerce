import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/auth/AuthContext";
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
    additionalCategories,
    getAllAdditionalCategories,
    isProductValid,
    // setColor,
    // setSize,
  } = useProduct();
  const { loggedIn } = useAuth();
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const handleSetProduct = (e) => {
    const { name, value } = e.target;
    if (name === "color" || name === "size") {
      let options;
      if (e.target.checked) {
        options = [...(product[name] || []), value];
      } else {
        options = (product[name] || []).filter((option) => option !== value);
      }
      setProduct((prevState) => ({
        ...prevState,
        [name]: options,
      }));
    } else {
      if (name === "category") setCategory(value);
      setProduct((prevState) => ({
        ...prevState,
        [name]: name === "price" ? parseFloat(value) : value,
      }));
    }
    console.log("Product: ", product);
  };

  const handleSetImage = async (e) => {
    var percentage = await uploadImage(e.target.files[0]);
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories("categories");
    getAllAdditionalCategories("additionalCategories");
  }, [size, color]);

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, [color, size]);

  return (
    <>
      {loggedIn ? (
        <div className="add-product">
          <h3>ADD PRODUCT</h3>
          <div className="product">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              placeholder="T-Shirt"
              id="name"
              name="name"
              value={product.name}
              onChange={handleSetProduct}
            />
            {!isProductValid.name && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please fill the product name
              </div>
            )}
            <label htmlFor="product-detail">Product Detail</label>
            <input
              type="text"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
              id="detail"
              name="detail"
              value={product.detail}
              onChange={handleSetProduct}
            />
            {!isProductValid.detail && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please fill the product detail
              </div>
            )}
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="10.99$"
              step="0.01"
              min="0"
              id="price"
              name="price"
              value={product.price}
              onChange={handleSetProduct}
            />
            {!isProductValid.price && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please fill the price{" "}
              </div>
            )}
            <div className="multi-choices">
              <p>Sizes:</p>
              {sizes.map((size, index) => (
                <div className="choice" key={index}>
                  <input
                    type="checkbox"
                    name="size"
                    id={size}
                    value={size}
                    onChange={handleSetProduct}
                  />
                  <label htmlFor={size}>{size}</label>
                </div>
              ))}
            </div>
            {!isProductValid.size && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please select size(s)
              </div>
            )}
            <div className="colors">
              <p>Colors:</p>
              {colors.map((color, index) => (
                <div className="color" key={index}>
                  <input
                    type="checkbox"
                    name="color"
                    id={color}
                    value={color}
                    onChange={handleSetProduct}
                  />
                  <label htmlFor={color}>
                    <span className={color} name={color} id={color}></span>
                  </label>
                </div>
              ))}
            </div>
            {!isProductValid.color && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please select color(s)
              </div>
            )}
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleSetProduct}>
              <option>-- None --</option>

              {categories.map((category, index) => (
                <option key={index}>{category.category}</option>
              ))}
            </select>
            {!isProductValid.category && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please select the category
              </div>
            )}
            <label htmlFor="category">Subcategory</label>
            <select
              id="subcategory"
              name="subcategory"
              value={product.subcategory}
              onChange={handleSetProduct}
            >
              <option>-- None --</option>
              {category &&
                categories
                  .filter(
                    (productCategory) => productCategory.category == category
                  )[0]
                  .subcategory.map((subcategory, index) => {
                    return <option key={index}>{subcategory}</option>;
                  })}
            </select>
            {!isProductValid.subcategory && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please select the subcategory
              </div>
            )}
            <div className="multi-choices">
              <p>Additional categories:</p>
              {additionalCategories.map((addCategory, index) => (
                <div className="choice" key={index}>
                  <input
                    type="checkbox"
                    name="additionalCategories"
                    id={addCategory}
                    value={addCategory}
                    onChange={handleSetProduct}
                  />
                  <label htmlFor={addCategory}>{addCategory}</label>
                </div>
              ))}
            </div>

            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleSetImage}
            />
            {!isProductValid.imgPath && (
              <div className="error-msg">
                <i className="fa fa-warning"></i>
                Please waiting upload image
              </div>
            )}
          </div>

          <div className="add-button">
            <button className="btn btn-primary" onClick={() => addProduct()}>
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="empty-message">
            <p className="danger">
              Please login to see your profile information.
            </p>
          </div>
          <button className="btn btn-gray" onClick={() => navigate("/auth")}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default AddProduct;
