import React from "react";
import { useContext, useState, useEffect } from "react";
import "./style.scss";
import { AuthContext } from "../../../../../contexts/auth/AuthContext";
import { useProduct } from "../../../../../contexts/product/CreateProductContext";

export const EditPopup = ({ orderObject, handleClose }) => {
  const authContext = useContext(AuthContext);
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
    additionalCategories,
    getAllAdditionalCategories,
    uploadPercentage,
    // setColor,
    // setSize,
  } = useProduct();
  const [orderDate, setOrderDate] = useState(
    orderObject.date.split(",").slice(0, 1).toString()
  );
  const [user, setUser] = useState(
    authContext.users.find((user) => user.id === orderObject.userId)
  );

  const [color, setColor] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories("categories");
    getAllAdditionalCategories("additionalCategories");
  }, []);

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>

          <div className="add-product">
            <h3>EDIT ORDER</h3>
            <div className="product">
              {JSON.stringify(orderObject)}
              {JSON.stringify(orderDate)}
              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={orderObject.orderId}
                // onChange={handleUser}
              />

              <label htmlFor="date">
                <strong>Date of Birth</strong>
              </label>
              <input
                type="date"
                id="birth-day"
                name="date"
                placeholder="DD.MM.YYYY"
                //onChange={handleUser}
                defaultValue={orderDate}
              />

              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={user.user}
                // onChange={handleUser}
              />

              <label htmlFor="mail">Mail Address</label>
              <input
                type="text"
                placeholder="Enter an email"
                id="mail"
                name="mail"
                defaultValue={user.mail}
                // onChange={handleUser}
              />

              {orderObject.orderList.length &&
                orderObject.orderList.map((order, i) => {
                  return (
                    <>
                      <label htmlFor="product-name">Product Name</label>
                      <input
                        type="text"
                        placeholder="T-Shirt"
                        id="name"
                        name="name"
                        defaultValue={order.name}
                        // onChange={handleProduct}
                      />
                      <label htmlFor="product-detail">Product Detail</label>
                      <input
                        type="text"
                        placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
                        id="detail"
                        name="detail"
                        defaultValue={order.detail}
                        // onChange={handleProduct}
                      />

                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        placeholder="10.99$"
                        step="0.01"
                        min="0"
                        id="price"
                        name="price"
                        defaultValue={order.price}
                        // onChange={handleUser}
                      />

                      <div className="multi-choices">
                        <p>Sizes:</p>
                        {sizes.map((size, index) =>
                          order.size.includes(size) ? (
                            <div className="choice">
                              <input
                                type="checkbox"
                                name="size"
                                id={size}
                                value={size}
                                defaultChecked={color}
                                // onChange={handleSetSize}
                              />
                              <label htmlFor={size}>{size}</label>
                            </div>
                          ) : (
                            <div className="choice">
                              <input
                                type="checkbox"
                                name="size"
                                id={size}
                                value={size}
                                // onChange={handleProduct}
                              />
                              <label htmlFor={size}>{size}</label>
                            </div>
                          )
                        )}
                      </div>

                      <div className="colors">
                        <p>Colors:</p>
                        <div className="color">
                          {colors.map((color, index) =>
                            order.color.includes(color) ? (
                              <>
                                <input
                                  type="checkbox"
                                  name="color"
                                  id={color}
                                  value={color}
                                  defaultChecked={color}
                                  // onChange={handleProduct}
                                />
                                <label htmlFor={color}>
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
                                  // onChange={handleProduct}
                                />
                                <label htmlFor={color}>
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
                      <select
                        id="category"
                        name="category"
                        // onChange={handleProduct}
                      >
                        {categories.map((categoryObj, index) =>
                          categoryObj.category === order.category ? (
                            <option
                              value={categoryObj.category}
                              key={index}
                              selected
                            >
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
                        // onChange={handleProduct}
                      >
                        <option>-- None --</option>
                        {!category
                          ? categories.filter(
                              (categoryObj, index) =>
                                categoryObj.category === order.category
                            )[0] &&
                            categories
                              .filter(
                                (productCategory) =>
                                  productCategory.category == order.category
                              )[0]
                              .subcategory.map((subCategory, index) =>
                                subCategory === order.subcategory ? (
                                  <option
                                    value={subCategory}
                                    key={index}
                                    selected
                                  >
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
                                subCategory === order.setcategory ? (
                                  <option
                                    value={subCategory}
                                    key={index}
                                    selected
                                  >
                                    {subCategory}
                                  </option>
                                ) : (
                                  <option value={subCategory} key={index}>
                                    {subCategory}
                                  </option>
                                )
                              )}
                      </select>

                      <div className="multi-choices">
                        <p>Additional categories:</p>
                        {additionalCategories.map((additionalCategory, index) =>
                          order.additionalCategories.includes(
                            additionalCategory
                          ) ? (
                            <div className="choice">
                              <input
                                type="checkbox"
                                name="additional-category"
                                id={additionalCategory}
                                value={additionalCategory}
                                defaultChecked={additionalCategory}
                                // onChange={handleSetSize}
                              />
                              <label htmlFor={additionalCategory}>
                                {additionalCategory}
                              </label>
                            </div>
                          ) : (
                            <div className="choice">
                              <input
                                type="checkbox"
                                name="additional-category"
                                id={additionalCategory}
                                value={additionalCategory}
                                // onChange={handleProduct}
                              />
                              <label htmlFor={additionalCategory}>
                                {additionalCategory}
                              </label>
                            </div>
                          )
                        )}
                      </div>

                      <label htmlFor="image">Image</label>
                      <img src={order.imgPath} />
                      <label>{order.imgPath}</label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        // onChange={handleImage}
                      />
                      {/* <ProgressBar bgcolor={"#6a1b9a"} completed={uploadPercentage} /> */}
                    </>
                  );
                })}

              <label htmlFor="user">Total Price</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={orderObject.totalOrderAmount}
                // onChange={handleUser}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopup;
