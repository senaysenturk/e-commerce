import React from "react";
import { useState, useEffect } from "react";

import { useProduct } from "../../../contexts/product/CreateProductContext";

export const Women = () => {
  const { women, getWomanProducts } = useProduct();

  useEffect(() => {
    getWomanProducts();
  }, []);

  return (
    <>
      <div>Women</div>;
    </>
  );
};

export default Women;
