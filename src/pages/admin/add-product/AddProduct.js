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
    additionalCategories,
    getAllAdditionalCategories,
    // setColor,
    // setSize,
  } = useProduct();

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("");

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
        [name]: value,
      }));
    }
  };

  const handleSetImage = async (e) => {
    var percentage = await uploadImage(e.target.files[0]);
  };

  const handleSetSize = (e) => {
    setSize((prevSize) => [...prevSize, e.target.value]);
    console.log(size);
    setProduct({ ...product, size: size });
  };

  const handleSetColor = (e) => {
    setColor((prevColor) => [...prevColor, e.target.value]);
    console.log(color);
    setProduct({ ...product, color: color });
  };

  // const handleSetCategory = (e) => {
  //   setCategory(e.target.value);
  //   setProduct({ ...product, category: category });
  // };

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
        <label htmlFor="product-detail">Product Detail</label>
        <input
          type="text"
          placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          id="detail"
          name="detail"
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
        <div className="multi-choices">
          <p>Sizes:</p>
          {sizes.map((size, index) => (
            <div className="choice">
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
        <div className="colors">
          <p>Colors:</p>
          <div className="color">
            {colors.map((color, index) => (
              <>
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
              </>
            ))}
          </div>
        </div>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={handleSetProduct}>
          <option>-- None --</option>

          {categories.map((category, index) => (
            <option key={index}>{category.category}</option>
          ))}
        </select>
        <label htmlFor="category">Subcategory</label>
        <select id="subcategory" name="subcategory" onChange={handleSetProduct}>
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

        <div className="multi-choices">
          <p>Additional categories:</p>
          {additionalCategories.map((addCategory, index) => (
            <div className="choice">
              <input
                type="checkbox"
                name="additional-category"
                id={addCategory}
                value={addCategory}
                onChange={handleSetProduct}
              />
              <label for={addCategory}>{addCategory}</label>
            </div>
          ))}
        </div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleSetImage} />
        <ProgressBar bgcolor={"#6a1b9a"} percentage={uploadPercentage} />
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
