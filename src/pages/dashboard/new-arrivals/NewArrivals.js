import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";

export const NewArrivals = () => {
  const { products, getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div>NewArrivals</div>
      {products.slice(-3).map((product, index) => (
        <SmallCard product={product} key={index} />
      ))}
    </>
  );
};

export default NewArrivals;
