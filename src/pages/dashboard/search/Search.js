import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SmallCard from "src/components/app/product/small-card/SmallCard";
import Breadcrumb from "src/components/shared/breadcrumb/Breadcrumb";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import { useProduct } from "src/contexts/product/CreateProductContext";
import "./style.scss";

const Search = () => {
  const {
    getProductsByCategory,
    getProductsBySubcategory,
    searchProducts,
    filters,
  } = useProduct();
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("category");
  const subcatParam = searchParams.get("subcategory");
  const additionalCategoryParam = searchParams.get("additionalCategories_like");

  const [filterKeys, setFilterKeys] = useState("");

  searchProducts && console.log(searchProducts, filters);

  let filteredProducts =
    searchProducts &&
    searchProducts.filter((product) => {
      if (
        filters.subcategory !== "" &&
        filters.subcategory !== product.subcategory
      )
        return false;
      if (!(product.category === filters.category)) return false;
      if (
        filters.color.length &&
        !filters.color.some((col) => product.color.includes(col))
      )
        return false;
      if (
        filters.size.length &&
        !filters.size.some((siz) => product.size.includes(siz))
      )
        return false;
      return true;
    });
  console.log(filteredProducts);

  searchProducts && console.log(filteredProducts);

  const handleGetProducts = async () => {
    subcatParam
      ? await getProductsBySubcategory(
          "category",
          searchParams.get("category"),
          "subcategory",
          searchParams.get("subcategory")
        )
      : catParam &&
        (await getProductsByCategory("category", searchParams.get("category")));
    additionalCategoryParam &&
      (await getProductsByCategory(
        "additionalCategories_like",
        searchParams.get("additionalCategories_like")
      ));
  };

  // console.log(typeof subcatParam);
  // console.log("filterKeys", filterKeys);
  useEffect(() => {
    setCategory(catParam);
    setSubCategory(subcatParam);
    handleGetProducts();
  }, [catParam, subcatParam, searchParams]);

  return (
    <>
      <div className="search-and-filter-list">
        {(catParam || subcatParam) && (
          <FilterNavigation
            setFilterKeys={setFilterKeys}
            categoryName={category}
          />
        )}
        <div className="products">
          <div className="row-header">
            <Breadcrumb
              catParam={catParam}
              subcatParam={subcatParam}
              additionalCategoryParam={additionalCategoryParam}
            />
          </div>
          <div className="search-row">
            {filteredProducts.length > 0
              ? filteredProducts.map((product, index) => (
                  <SmallCard product={product} key={index} />
                ))
              : searchProducts.length &&
                searchProducts.map((product, index) => (
                  <SmallCard product={product} key={index} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
