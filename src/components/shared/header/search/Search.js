import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../../contexts/product/CreateProductContext";
import "./style.scss";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const Search = () => {
  const { products, getAllProducts } = useProduct();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const normalizedSearchTerm = event.target.value.trim().toLowerCase();
   /*  if (normalizedSearchTerm) {
      setSearchResult(
        products.filter((product) =>
          Object.values(product).some((value) =>
            value.trim().toLowerCase().includes(normalizedSearchTerm)
          )
        )
      );
    } else {
      setSearchResult([]);
    } */
  };



  return (
    <div className="search">
      <span className="search-icon">
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
