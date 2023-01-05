import React from "react";
import { useState, useEffect } from "react";
import SmallCard from "../../../components/app/product/small-card/SmallCard";

import { useProduct } from "../../../contexts/product/CreateProductContext";

export const Women = () => {
  const { women, getWomanProducts } = useProduct();

  useEffect(() => {
    getWomanProducts();
  }, []);

  return (
    <>
      <div>Women</div>;
      {women.map((product, index) => (
        <SmallCard product={product} key={index} />
      ))}
    </>
  );
};

export default Women;
