import React from "react";
import { useState, useEffect } from "react";

import { useProduct } from "../../../contexts/product/CreateProductContext";

export const Man = () => {
  const { men, getManProducts } = useProduct();

  useEffect(() => {
    getManProducts();
  }, []);

  return (
    <>
      <div>Man</div>;
    </>
  );
};

export default Man;
