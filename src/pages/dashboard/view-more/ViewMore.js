import React from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";

export const ViewMore = () => {
  const { moreResult } = useProduct();
  return (
    <>
      <div className="all-product-list">
        {console.log(moreResult)}
        <FilterNavigation />
        <div className="products">
          <div className="row-header">
            <h2>Search Results</h2>
          </div>
          <div className="grid-4-columns">
            {moreResult.map((product, index) => (
              /* console.log(product.result); */
              <SmallCard product={product.result} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
