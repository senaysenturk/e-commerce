import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useProduct } from "../../../contexts/product/CreateProductContext";

const FilterNavigation = () => {
  const {
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
  } = useProduct();

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    if (e.target.name === "category") setCategory(e.target.value);
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories();
  }, []);

  return (
    <div className="sidebar">
      <label htmlFor="category">Category</label>
      <select id="category" name="category" onChange={handleSearch}>
        <option>-- None --</option>

        {categories.map((category, index) => (
          <option key={index}>{category.category}</option>
        ))}
      </select>
      <label htmlFor="category">Subcategory</label>
      <select id="subcategory" name="subcategory" onChange={handleSearch}>
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
      <div className="sizes">
        <p>Sizes:</p>
        {sizes.map((size, index) => (
          <div className="size">
            <input
              type="checkbox"
              name={size}
              id={size}
              value={size}
              onChange={handleSearch}
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
                onChange={handleSearch}
              />
              <label for={color}>
                <span className={color} name={color} id={color}></span>
              </label>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterNavigation;
