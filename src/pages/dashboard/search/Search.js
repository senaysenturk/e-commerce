import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import ShopContext from "src/contexts/basket/ShopContext";
import { useProduct } from "src/contexts/product/CreateProductContext";
//import "./style.scss";

const Search = () => {
  const { getProductsByCategory, getProductsBySubcategory, searchProducts } =
    useProduct();
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubCategory] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("category");
  const subcatParam = searchParams.get("subcategory");

  const handleGetProducts = async () => {
    searchParams.get("subcategory")
      ? await getProductsBySubcategory(
          searchParams.get("category"),
          searchParams.get("subcategory")
        )
      : await getProductsByCategory(searchParams.get("category"));
  };

  console.log(category + " : " + subcatParam);
  useEffect(() => {
    setCategory(catParam);
    handleGetProducts();
  }, [category]);

  return (
    <>
      <div className="all-product-list">
        <FilterNavigation />
        <div className="products">
          <div className="row-header">
            <h2>{`${catParam} -> ${subcatParam && subcatParam} `}</h2>
          </div>
          <div className="grid-4-columns">
            {searchProducts &&
              searchProducts.map((product, index) => (
                /* console.log(product.result); */
                <SmallCard product={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
