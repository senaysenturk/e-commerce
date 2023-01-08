import React, { useState, useContext } from "react";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import Table from "../../../components/shared/table/Table";
import ShopContext from "../../../contexts/basket/ShopContext";
import "./style.scss";

const AllProducts = () => {
  const context = useContext(ShopContext);
  return (
    <>
      <div className="p-4">
        <Table
          searchable={true}
          head={[
            { name: "Image" },
            { name: "Name", sortable: true },
            { name: "Price", sortable: true },
            { name: "Size" },
            { name: "Color" },
            { name: "Category", sortable: true },
            { name: "Sub-Category", sortable: true },
            { name: "Options", width: 200 },
          ]}
          // head={Object.keys(context.products[0])}
          body={context.products && context.products.map((product, key) => [
            <img src={product.imgPath} />,
            product.name,
            product.price + " $",
            product.size,
            product.color,
            product.category,
            product.subcategory,
            [
              <button>Edit</button>,
              <button
                onClick={() => {
                  /* const tmpProducts = [...context.products];
                  tmpProducts.splice(key, 1);
                  context.setProducts(tmpProducts); */
                }}
              >
                Delete
              </button>,
            ],
          ])}
        />
      </div>
      {/* <div className="all-product-list">
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
      </div> */}
    </>
  );
};

export default AllProducts;
