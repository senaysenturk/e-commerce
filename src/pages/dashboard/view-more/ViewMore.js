import React from "react";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";

export const ViewMore = () => {
  const { moreResult } = useProduct();
  return (
    <>
      <div className="search-and-filter-list">
        <FilterNavigation />
        <div className="products">
          <div className="row-header">
            <h2></h2>
          </div>
          <div className="search-row">
            {moreResult.map((product, index) => (
              /* console.log(product.result); */
              <SmallCard product={product.result} key={index} />
            ))}
            {/* {JSON.stringify(searchProducts)} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
