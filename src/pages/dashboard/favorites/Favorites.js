import React, { useEffect, useState } from "react";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import { useAuth } from "src/contexts/auth/AuthContext";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";

const Favorites = () => {
  const { favorites, setFavorites, getUserFavorites } = useAuth();
  const [filterKeys, setFilterKeys] = useState("");
  useEffect(() => {
    getUserFavorites();
  }, []);
  return (
    <>
      <div className="search-and-filter-list">
        <FilterNavigation setFilterKeys={setFilterKeys} />
        <div className="products">
          <div className="row-header">
            <h2>Favorites</h2>
          </div>
          <div className="search-row">
            {favorites &&
              favorites.map((product, index) => (
                <SmallCard product={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
