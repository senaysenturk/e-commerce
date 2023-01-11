import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import { useSearchParams } from "react-router-dom";

const FilterNavigation = ({ setFilterKeys, category }) => {
  const {
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
  } = useProduct();
  const [filterColor, setFilterColor] = useState([]);
  const [silterSize, setFilterSize] = useState([]);
  const [filterCategory, setFilterCategory] = useState();

  const handleSearch = (e) => {
    if (e.target.name === "filter-category") setFilterCategory(e.target.value);
    setFilterKeys(e.target.value);
    console.log(filterCategory);
  };

  useEffect(() => {
    getAllColors();
    getAllSizes();
    getAllCategories("categories");
  }, [filterCategory, category]);

  return (
    <div className="sidebar">
      {category && (
        <>
          <label htmlFor="filter-category">Category</label>
          <select
            id="filter-category"
            name="filter-category"
            onChange={(e) => {
              handleSearch(e);
              setFilterCategory(category);
            }}
            value={category}
            disabled
          >
            <option key={""}>-- None --</option>

            {categories.map((category, index) => (
              <option key={index}>{category.category}</option>
            ))}
          </select>
        </>
      )}
      <label htmlFor="filter-subcategory">Subcategory</label>
      <select
        id="filter-subcategory"
        name="filter-subcategory"
        onChange={handleSearch}
      >
        <option>-- None --</option>
        {filterCategory &&
          categories
            .filter(
              (productCategory) => productCategory.category == filterCategory
            )[0]
            .subcategory.map((subcategory, i) => {
              return <option key={i}>{subcategory}</option>;
            })}
      </select>
      <div className="multi-choices">
        <p>Sizes:</p>
        {sizes.map((size, index) => (
          <div className="choice" key={index}>
            <input
              type="checkbox"
              name={`fiter-${size}`}
              id={`fiter-${size}`}
              value={size}
              onChange={handleSearch}
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
                name="filter-color"
                id={color}
                value={color}
                onChange={handleSearch}
                key={index}
              />
              <label htmlFor={color}>
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
