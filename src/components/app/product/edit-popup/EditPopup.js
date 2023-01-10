import React from "react";
import { useState, useEffect } from "react";
import { useProduct } from "../../../../contexts/product/CreateProductContext";

export const EditPopup = ({ currentProduct, handleClose }) => {
  const {
    updateProduct,
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

  const [editProduct, setEditProduct] = useState({});
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("");

  const handleProduct = (e) => {
    const { name, value } = e.target;
    if (name === "category") setCategory(value);

    if (name === "color" || name === "size") {
      let options;
      if (e.target.checked) {
        options = [...(editProduct[name] || []), value];
      } else {
        options = (editProduct[name] || []).filter(
          (option) => option !== value
        );
      }
      setEditProduct((prevState) => ({
        ...prevState,
        [name]: options,
      }));
    } else {
      setEditProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(editProduct);
  };

  const handleSetSize = (e) => {
    setEditProduct((prevState) => ({
      ...prevState,
      size: e.target.value,
    }));
  };
  const handleSetColor = (e) => {
    setEditProduct((prevState) => ({
      ...prevState,
      color: e.target.value,
    }));
  };

  const handleImage = async (e) => {
    var response = await uploadImage(e.target.files[0]);
  };

  const handleSave = async () => {
    setEditProduct({
      ...editProduct,
      updatedAt: new Date().toLocaleString(),
    });
    var response = await updateProduct(currentProduct.id, editProduct);
    // getAddresses();
    handleClose();
    // handleSetDisplay();
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories();
    setEditProduct((prevState) => ({
      ...prevState,
      color: currentProduct.color,
      size: currentProduct.size,
    }));
  }, []);

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>

          <div className="add-product">
            <h3>EDIT PRODUCT</h3>
            <div className="product">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                placeholder="T-Shirt"
                id="name"
                name="name"
                defaultValue={currentProduct.name}
                onChange={handleProduct}
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="10.99$"
                step="0.01"
                min="0"
                id="price"
                name="price"
                defaultValue={currentProduct.price}
                onChange={handleProduct}
              />
              <div className="sizes">
                <p>Sizes:</p>
                {sizes.map((size, index) =>
                  currentProduct.size.includes(size) ? (
                    <div className="size">
                      <input
                        type="checkbox"
                        name="size"
                        id={size}
                        value={size}
                        defaultChecked={color}
                        onChange={handleSetSize}
                      />
                      <label for={size}>{size}</label>
                    </div>
                  ) : (
                    <div className="size">
                      <input
                        type="checkbox"
                        name="size"
                        id={size}
                        value={size}
                        onChange={handleProduct}
                      />
                      <label for={size}>{size}</label>
                    </div>
                  )
                )}
              </div>
              <div className="colors">
                <p>Colors:</p>
                <div className="color">
                  {colors.map((color, index) =>
                    currentProduct.color.includes(color) ? (
                      <>
                        <input
                          type="checkbox"
                          name="color"
                          id={color}
                          value={color}
                          defaultChecked={color}
                          onChange={handleProduct}
                        />
                        <label for={color}>
                          <span
                            className={color}
                            name={color}
                            id={color}
                          ></span>
                        </label>
                      </>
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          name="color"
                          id={color}
                          value={color}
                          onChange={handleProduct}
                        />
                        <label for={color}>
                          <span
                            className={color}
                            name={color}
                            id={color}
                          ></span>
                        </label>
                      </>
                    )
                  )}
                </div>
              </div>
              <label htmlFor="category">Category</label>
              <select id="category" name="category" onChange={handleProduct}>
                {categories.map((categoryObj, index) =>
                  categoryObj.category === currentProduct.category ? (
                    <option value={categoryObj.category} key={index} selected>
                      {categoryObj.category}
                    </option>
                  ) : (
                    <option value={categoryObj.category} key={index}>
                      {categoryObj.category}
                    </option>
                  )
                )}
              </select>
              <label htmlFor="category">Subcategory</label>
              <select
                id="subcategory"
                name="subcategory"
                onChange={handleProduct}
              >
                <option>-- None --</option>
                {!category
                  ? categories.filter(
                      (categoryObj, index) =>
                        categoryObj.category === currentProduct.category
                    )[0] &&
                    categories
                      .filter(
                        (productCategory) =>
                          productCategory.category == currentProduct.category
                      )[0]
                      .subcategory.map((subCategory, index) =>
                        subCategory === currentProduct.subcategory ? (
                          <option value={subCategory} key={index} selected>
                            {subCategory}
                          </option>
                        ) : (
                          <option value={subCategory} key={index}>
                            {subCategory}
                          </option>
                        )
                      )
                  : categories
                      .filter(
                        (productCategory) =>
                          productCategory.category == category
                      )[0]
                      .subcategory.map((subCategory, index) =>
                        subCategory === currentProduct.setcategory ? (
                          <option value={subCategory} key={index} selected>
                            {subCategory}
                          </option>
                        ) : (
                          <option value={subCategory} key={index}>
                            {subCategory}
                          </option>
                        )
                      )}
              </select>

              <label htmlFor="image">Image</label>
              <img src={currentProduct.imgPath} />
              <label>{currentProduct.imgPath}</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImage}
              />
              {/* <ProgressBar bgcolor={"#6a1b9a"} completed={uploadPercentage} /> */}

              <div className="add-button">
                <button className="btn btn-primary" onClick={handleSave}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopup;
