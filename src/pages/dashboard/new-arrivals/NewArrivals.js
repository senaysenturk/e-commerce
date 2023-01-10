import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";

export const NewArrivals = () => {
  const { products, getAllProducts } = useProduct();

  const [filterKeys, setFilterKeys] = useState("");
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="search-and-filter-list">
        <FilterNavigation setFilterKeys={setFilterKeys} />
        <div className="products">
          <div className="row-header">
            <h2>New Arrivals</h2>
          </div>
          <div className="search-row">
            {products &&
              products
                .slice(0, 15)
                .map((product, index) => (
                  <SmallCard product={product} key={index} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
