import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import "./style.scss";
import { useAuth } from "src/contexts/auth/AuthContext";

/**
 *
 * @param {{product: Product}} param0
 * @returns
 */
const CardSummary = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  const { favorites, setFavorites, getUserFavorites, addFavorite } = useAuth();
  const handleFavorite = () => {
    setFavorite(!favorite);
    addFavorite(product);
  };

  useEffect(() => {
    getUserFavorites();
  }, []);

  return (
    <>
      <div className="product-flex">
        <div className="product-img">
          <div className="add-favorite" onClick={handleFavorite}>
            {favorites.filter((favor) => favor.id === product.id).length ? (
              <IoIosHeart />
            ) : (
              <IoIosHeartEmpty />
            )}
            {/* {favorites.filter((favor) => favor.id === product.id) && (
              <IoIosHeart />
            )} */}
            {console.log(favorites.filter((favor) => favor.id === product.id))}
          </div>
          <img src={product.imgPath} alt="Lorem ipsum" />
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-price">{product.price.toFixed(2)} $</span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>

          <div className="colors">
            Colors:
            {product.color.map((item, index) => {
              return (
                <div key={`${item} ${index}`}>
                  <input type="checkbox" name="color" id={item} value={item} />
                  <label htmlFor={item}>
                    <span className={item}></span>
                  </label>
                </div>
              );
            })}
          </div>
          <Link to={`../../products/product/${product.id}`}>More Detail</Link>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
