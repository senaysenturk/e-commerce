import React, { useContext } from "react";
import SmallCard from "../small-card/SmallCard";
import BigCard from "../big-card/BigCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./style.scss";
import Carousel from "../carousel/Carousel";
import ShopContext from "../../../../contexts/basket/ShopContext";
import { useMatchMedia } from "src/components/shared/header/useMatchMedia";
import { Link } from "react-router-dom";

const List = () => {
  const context = useContext(ShopContext);
  // const isMobileResolution = useMatchMedia("(max-width:992px)", false);
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);
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
      <div className="product-row">
        <div className="row-header">
          <h2>Last viewed</h2>
          <div className="arrow-icon">
            <div className="icon">
              <BiChevronLeft />
            </div>
            <div className="icon">
              <BiChevronRight />
            </div>
          </div>
        </div>
        <div className="row">
          {context.products.map((product, index) => {
            if (product.category == "Man") {
              return <Carousel product={product} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
