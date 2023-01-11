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
  const {
    favorites,
    setFavorites,
    getUserFavorites,
    addFavorite,
    deleteFavorite,
  } = useAuth();
  const handleAddFavorite = () => {
    addFavorite(product);
  };
  const handleDeleteFavorite = () => {
    deleteFavorite(product);
  };

  useEffect(() => {
    getUserFavorites();
  }, []);
  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if(!color){
  //     setError("Please select a color");
  //     return;
  //   }
  //   if(!size){
  //     setError("Please sellect a size")
  //     return
  //   }
  //   setError("")
  // }

  return (
    <>
      <div className="product-flex">
        <div className="product-img">
          <div
            className="add-favorite"
            // onClick={() => {
            //   handleFavorite();
            //   setFavorite(!favorite);
            // }}
          >
            {/* {!favorite ? <IoIosHeartEmpty /> : <IoIosHeart />} */}
            {favorites.filter((favor) => favor.id === product.id).length ? (
              <IoIosHeart
                onClick={() => {
                  handleDeleteFavorite();
                  setFavorite(!favorite);
                }}
              />
            ) : !favorite ? (
              <IoIosHeartEmpty
                onClick={() => {
                  handleAddFavorite();
                  setFavorite(!favorite);
                }}
              />
            ) : (
              <IoIosHeart
                onClick={() => {
                  handleDeleteFavorite();
                  setFavorite(!favorite);
                }}
              />
            )}

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
