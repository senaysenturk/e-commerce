import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";

export const NewArrivals = () => {
  const { products, getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="all-product-list">
        <FilterNavigation />
        <div className="products">
          <div className="row-header">
            <div>NewArrivals</div>
          </div>
          <div className="grid-4-columns">
            {products.slice(-3).map((product, index) => (
              <SmallCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
