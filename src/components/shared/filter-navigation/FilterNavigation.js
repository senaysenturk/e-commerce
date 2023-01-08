import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

const FilterNavigation = () => {
  const location = useLocation();
  const history = useNavigate();
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleViewChange = (view) => {
    history.push({ ...location, view });
  };

  return (
    <nav className="vertical-filter-navigation">
      <div className="filter-options">
        <label htmlFor="all">
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            checked={filter === "all"}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label htmlFor="price-low-to-high">
          <input
            type="radio"
            id="price-low-to-high"
            name="filter"
            value="price-low-to-high"
            checked={filter === "price-low-to-high"}
            onChange={handleFilterChange}
          />
          Price: Low to High
        </label>
        <label htmlFor="price-high-to-low">
          <input
            type="radio"
            id="price-high-to-low"
            name="filter"
            value="price-high-to-low"
            checked={filter === "price-high-to-low"}
            onChange={handleFilterChange}
          />
          Price: High to Low
        </label>
      </div>
      <div className="view-options">
        <button
          type="button"
          className={`view-option ${location.view === "grid" ? "active" : ""}`}
          onClick={() => handleViewChange("grid")}
        >
          <i className="fa-solid fa-th" />
        </button>
        <button
          type="button"
          className={`view-option ${location.view === "list" ? "active" : ""}`}
          onClick={() => handleViewChange("list")}
        >
          <i className="fa-solid fa-th-list" />
        </button>
      </div>
    </nav>
  );
};

export default FilterNavigation;
