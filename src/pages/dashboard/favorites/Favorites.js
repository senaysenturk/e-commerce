import React, { useEffect, useState } from "react";
import "./style.scss";
import SmallCard from "../../../components/app/product/small-card/SmallCard";
import { useAuth } from "src/contexts/auth/AuthContext";
import FilterNavigation from "src/components/shared/filter-navigation/FilterNavigation";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, setFavorites, getUserFavorites } = useAuth();
  const navigate = useNavigate();
  const [filterKeys, setFilterKeys] = useState("");
  useEffect(() => {
    getUserFavorites();
  }, []);
  return (
    <>
      {favorites.length ? (
        <div className="search-and-filter-list">
          <div className="products">
            <div className="row-header">
              <h2>Favorites</h2>
            </div>
            <div className="search-row">
              {favorites.map((product, index) => (
                <SmallCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="empty-message">
            <p className="danger">No favorites found!</p>

            <p>Add your products to your favorites and start shopping.</p>
          </div>
          <button className="btn btn-gray" onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Favorites;
