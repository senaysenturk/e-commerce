import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import { useSearchParams } from "react-router-dom";

const FilterNavigation = ({ setFilterKeys, categoryName }) => {
  const {
    colors,
    getAllColors,
    sizes,
    getAllSizes,
    categories,
    getAllCategories,
    filters,
    setFilters,
  } = useProduct();

  const [filterCategory, setFilterCategory] = useState();

  const handleSearch = (e) => {
    setFilters({
      ...filters,
      category: filterCategory,
    });
    // if (e.target.name.replace("filter-", "") === "subcategory") {
    setFilters({
      ...filters,
      [e.target.name.replace("filter-", "")]: e.target.value,
    });
    if (e.target.name.replace("filter-", "") === "color") {
      if (e.target.checked) {
        if (!filters.color.includes(e.target.value)) {
          setFilters({
            ...filters,
            color: [...filters.color, e.target.value],
          });
        }
      } else {
        setFilters({
          ...filters,
          color: filters.color.filter((c) => c !== e.target.value),
        });
      }
    } else if (e.target.name.replace("filter-", "") === "size") {
      if (e.target.checked) {
        if (!filters.size.includes(e.target.value)) {
          setFilters({ ...filters, size: [...filters.size, e.target.value] });
        }
      } else {
        setFilters({
          ...filters,
          size: filters.size.filter((s) => s !== e.target.value),
        });
      }
    }
    setFilterKeys(filters);

    console.log(filters);
  };

  useEffect(() => {
    setFilterCategory(categoryName);
    getAllColors();
    getAllSizes();
    getAllCategories("categories");
    setFilters({
      ...filters,
      category: categoryName,
    });
  }, [categoryName]);

  return (
    <div className="sidebar">
      {categoryName && (
        <>
          <label htmlFor="filter-category">Category</label>
          <select
            id="filter-category"
            name="filter-category"
            onChange={(e) => {
              handleSearch(e);
              setFilterCategory(categoryName);
            }}
            value={categoryName}
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
        {categoryName &&
          categories &&
          categories
            .filter(
              (productCategory) => productCategory.category == categoryName
            )[0]
            ?.subcategory.map((subcategory, i) => {
              return <option key={i}>{subcategory}</option>;
            })}
      </select>
      <div className="multi-choices">
        <p>Sizes:</p>
        {sizes.map((size, index) => (
          <div className="choice" key={index}>
            <input
              type="checkbox"
              name={`filter-size`}
              id={`filter-${size}`}
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
