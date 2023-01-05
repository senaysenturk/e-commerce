import React from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";

export const Children = () => {
  const { kids, getChildProducts } = useProduct();

  useEffect(() => {
    getChildProducts();
  }, []);

  return (
    <>
      <div>Children</div>;
    </>
  );
};

export default Children;
