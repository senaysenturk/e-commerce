import React from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import SmallCard from "../../../components/app/product/small-card/SmallCard";

export const ViewMore = () => {
  const { moreResult } = useProduct();
  return (
    <>
      <div>ViewMore</div>
      {console.log(moreResult)}
      {moreResult.map((product, index) => (
        /* console.log(product.result); */
        <SmallCard product={product.result} key={index} />
      ))}
    </>
  );
};

export default ViewMore;
