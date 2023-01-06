import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../../contexts/product/CreateProductContext";
import "./style.scss";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  const { products, getAllProducts } = useProduct();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const normalizedSearchTerm = event.target.value.trim().toLowerCase();
    console.log(searchResults);

    setSearchResults("");
    products
      .filter(
        (product) =>
          product.name.trim().toLowerCase().includes(normalizedSearchTerm) ||
          product.color.includes(normalizedSearchTerm) ||
          product.category
            .trim()
            .toLowerCase()
            .includes(normalizedSearchTerm) ||
          product.subcategory
            .trim()
            .toLowerCase()
            .includes(normalizedSearchTerm)
      )
      .map((result, index) => {
        setSearchResults((prevResult) => [...prevResult, { result }]);
      });
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
      {/* {searchResult} */}

      <ul class="drop">
        {searchResults.map(
          (answer, index) =>
            index <= 3 && (
              <li id={answer.result.id}>
                <Link to={`products/product/${answer.result.id}`}>
                  {answer.result.name}
                </Link>
              </li>
            )
        )}

        {searchResults.length > 3 && (
          <li>
            <Link to="">View more</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Search;
