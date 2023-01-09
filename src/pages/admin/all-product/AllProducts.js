import React, { useState, useContext, useEffect } from "react";

import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import Table from "../../../components/shared/table/Table";
import EditPopup from "../../../components/app/product/edit-popup/EditPopup";
import { useProduct } from "../../../contexts/product/CreateProductContext";
import "./style.scss";

const AllProducts = () => {
  const { products, getAllProducts, removeProduct } = useProduct();

  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteProduct = async (productId) => {
    removeProduct(productId);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="all-products">
      <div className="">
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
          body={
            products &&
            products.map((product, key) => [
              <img src={product.imgPath} />,
              product.name,
              product.price + " $",
              product.size,
              product.color,
              product.category,
              product.subcategory,
              [
                <button
                  className="list-btn "
                  onClick={() => {
                    setCurrentProduct(product);
                    togglePopup();
                  }}
                >
                  Edit
                </button>,
                <button
                  className="list-btn btn-danger"
                  onClick={() => {
                    console.log(product.id);
                    handleDeleteProduct(product.id);
                  }}
                >
                  Delete
                </button>,
              ],
            ])
          }
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
      {isOpen && (
        <EditPopup handleClose={togglePopup} currentProduct={currentProduct} />
      )}
    </div>
  );
};

export default AllProducts;
