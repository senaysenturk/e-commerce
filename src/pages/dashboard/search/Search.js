import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import { useProduct } from "src/contexts/product/CreateProductContext";
import "./style.scss";

const Search = () => {
  const { getProductsByCategory, getProductsBySubcategory, searchProducts } =
    useProduct();
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("category");
  const subcatParam = searchParams.get("subcategory");
  const [filterKeys, setFilterKeys] = useState("");
  const handleGetProducts = async () => {
    subcatParam
      ? await getProductsBySubcategory(
          searchParams.get("category"),
          searchParams.get("subcategory")
        )
      : await getProductsByCategory(searchParams.get("category"));
  };

  console.log(typeof subcatParam);
  console.log("filterKeys", filterKeys);
  useEffect(() => {
    setCategory(catParam);
    setSubCategory(subcatParam);
    handleGetProducts();
  }, [catParam, subcatParam, searchParams]);

  return (
    <>
      <div className="search-and-filter-list">
        <FilterNavigation setFilterKeys={setFilterKeys} />
        <div className="products">
          <div className="row-header">
            <h2>{`${catParam} -> ${subcatParam && subcatParam} `}</h2>
          </div>
          <div className="search-row">
            {searchProducts &&
              searchProducts.map((product, index) => (
                // if()
                <SmallCard product={product} key={index} />
              ))}
            {/* {JSON.stringify(searchProducts)} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
