import React, { useContext } from "react";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import ShopContext from "src/contexts/basket/ShopContext";
import "./style.scss";

const AllProducts = () => {
  const context = useContext(ShopContext);
  return (
    <div className="all-product-list">
      <FilterNavigation></FilterNavigation>
      <div className="products">
        <div className="row-header">
          <h2>All Products</h2>
        </div>
        <div className="row">
          {context.products.map((product, index) => (
            <SmallCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
