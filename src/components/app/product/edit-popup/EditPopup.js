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
    if (e.target.name === "category") setCategory(e.target.value);
    if (e.target.name === "size") {
      const size = e.target.value;
      setSize((prevSize) => {
        if (prevSize.includes(size)) {
          return prevSize.filter((s) => s !== size);
        } else {
          return [...prevSize, size];
        }
      });
    }
    if (e.target.name === "color") {
      const color = e.target.value;
      console.log(color);
      setColor((prevColor) => {
        if (prevColor.includes(color)) {
          return prevColor.filter((c) => c !== color);
        } else {
          return [...prevColor, color];
        }
      });
    }
    if (e.target.name === "price") {
      const price = parseFloat(e.target.value);
      setEditProduct({ ...editProduct, price });
    } else if (e.target.name === "size") {
      setEditProduct({
        ...editProduct,
        size: size,
      });
    } else if (e.target.name === "color") {
      setEditProduct({
        ...editProduct,
        color: color,
      });
    } else {
      setEditProduct({
        ...editProduct,
        [e.target.name]: e.target.value,
      });
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
                        selected
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
                <option>-- None --</option>

                {categories.map((category, index) => (
                  <option key={index}>{category.category}</option>
                ))}
              </select>
              <label htmlFor="category">Subcategory</label>
              <select
                id="subcategory"
                name="subcategory"
                onChange={handleProduct}
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
