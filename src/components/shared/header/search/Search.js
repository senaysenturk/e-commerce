import React, { useState, useContext, useEffect } from "react";
import { useProduct } from "../../../../contexts/product/CreateProductContext";
import "./style.scss";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  const { products, getAllProducts } = useProduct();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    const normalizedSearchTerm = event.target.value.trim().toLowerCase();

    setSearchResults("");
    normalizedSearchTerm &&
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
      <form>
        <input
          type="text"
          placeholder="Search..."
          onInput={handleSearch}
          value={searchTerm}
        />
      </form>

      <div className="search-drop">
        <ul className={`${dropdown ? "dropdown" : ""}`}>
          {searchResults &&
            searchResults.map(
              (answer, index) =>
                index <= 3 && (
                  <li
                    id={answer.result.id}
                    key={index}
                    onClick={() => {
                      setDropdown(true);
                      setSearchTerm("");
                      setSearchResults("");
                      setDropdown(false);
                    }}
                  >
                    <Link to={`products/product/${answer.result.id}`}>
                      {answer.result.name}
                    </Link>
                  </li>
                )
            )}

          {searchResults.length > 3 && (
            <li>
              <Link to="">View more results</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
