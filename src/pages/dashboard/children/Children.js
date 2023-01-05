import React from "react";
import { useState, useEffect } from "react";

import { useProduct } from "../../../contexts/product/CreateProductContext";

import SmallCard from "../../../components/app/product/small-card/SmallCard";

export const Children = () => {
  const { products, kids, getAllProducts, getChildProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
    // getChildProducts();
  }, []);

  return (
    <>
      <div>Children</div>;
      {products.map((product, index) => (
        product.category === "Woman" && <SmallCard product={product} key={index} />
      ))}
    </>
  );
};

export default Children;
