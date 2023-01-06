import React, { useEffect, useState, useContext } from "react";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import ShopContext from "src/contexts/basket/ShopContext";
import { useProduct } from "src/contexts/product/CreateProductContext";
//import "./style.scss";

const Search = ({ catParam, subcatParam }) => {
  const { getProductsByCategory, getProductsBySubcategory } = useProduct();
  const [products, setProducts] = useState("");

  const handleGetProducts = async (catParam) => {
    var response = await getProductsByCategory(catParam);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className="all-product-list">
      {catParam}
      Search
    </div>
  );
};

export default Search;
