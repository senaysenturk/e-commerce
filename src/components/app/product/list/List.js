import React, { useContext, useEffect, useState } from "react";
import SmallCard from "../small-card/SmallCard";
import BigCard from "../big-card/BigCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./style.scss";
import Carousel from "../carousel/Carousel";
import ShopContext from "../../../../contexts/basket/ShopContext";
import { useMatchMedia } from "src/components/shared/header/useMatchMedia";
import { Link } from "react-router-dom";
import { useAuth } from "src/contexts/auth/AuthContext";

const List = () => {
  const context = useContext(ShopContext);
  const { getUserLastViewes, lastViewed } = useAuth();
  // const isMobileResolution = useMatchMedia("(max-width:992px)", false);
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + lastViewed.length) % lastViewed.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % lastViewed.length);
  };

  useEffect(() => {
    getUserLastViewes();
  }, []);
  return (
    <div className="list">
      <div className="product-row">
        <div className="row-header">
          <h2>Recommended for you</h2>
          <Link to={`/products/search?additionalCategories_like=trending`}>
            View more
          </Link>
        </div>
        <div className="row">
          <div className="column-1">
            <BigCard />
            <div className="img-square"></div>
          </div>
          <div className="column-2">
            <div className="row">
              {context.products.map((product, index) => {
                if (index < 8) {
                  return <SmallCard product={product} key={index} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="product-row">
        <div className="row-header">
          <h2>Discover</h2>
          <a href="#2">View more</a>
        </div>
        <div className="row">
          {context.products.map((product, index) => {
            if (index < 6) {
              return <Carousel product={product} key={index} />;
            }
          })}
        </div>
      </div>
      {lastViewed.length > 0 && (
        <div className="product-row">
          <div className="row-header">
            <h2>Last viewed</h2>
            <div className="arrow-icon">
              <div className="icon" onClick={handlePrev}>
                <BiChevronLeft />
              </div>
              <div className="icon" onClick={handleNext}>
                <BiChevronRight />
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ display: "flex", overflow: "hidden", width: "100%" }}
          >
            {/* {context.products.map((product, index) => {
            if (product.category == "Man") {
              return <Carousel product={product} key={index} />;
            }
          })} */}

            {<Carousel product={lastViewed[currentIndex]} />}
            {lastViewed.products
              // .slice(startIndex, startIndex + 6)
              .map((product, index) => (
                <Carousel product={product} key={index} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
