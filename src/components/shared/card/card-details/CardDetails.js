import React from "react";

const CardDetails = () => {
  return (
    <div class="overlay">
      <div class="popup-btn popup-btn--prev">
        <img
          src="https://image.flaticon.com/icons/svg/60/60758.svg"
          alt="Previous button"
          class="popup-btn__icon"
        />
      </div>
      <div class="popup-item">
        <div class="clothing-item-flex">
          <div class="clothing-item-flex__img-wrapper">
            <img
              src=""
              alt="Clothing item"
              class="clothing-item-flex__img zoom-normal"
              id="clothingImg"
            />
          </div>
          <div class="product-info">
            <h2 class="heading-secondary" id="clothingName"></h2>
            <span class="product-info__price" id="clothingPrice"></span>
            <p class="product-info__text">
              Sed ornare tellus non lectus blandit faucibus. Curabitur convallis
              nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci
              iaculis egestas. Vivamus varius ipsum eu leo ...
            </p>
            <div class="detail-group">
              <p class="detail-group__span">Size:</p>
              <select class="detail-group__size">
                <option value="">Select Size</option>
                <option value="0">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
              </select>
            </div>
            <div class="detail-group">
              <p class="detail-group__span">Quantity:</p>
              <input
                class="detail-group__quantity"
                max="9999"
                min="1"
                value="1"
                type="number"
              />
            </div>
            <button type="button" class="btn btn--form btn--form--shop">
              Add to cart
            </button>
            <a href="" class="btn-view">
              View Full Item
            </a>
          </div>
        </div>
        <span class="popup__close-icon-clothing" id="closeIcon">
          &times;
        </span>
      </div>
      <div class="popup-btn">
        <img
          src="https://image.flaticon.com/icons/svg/60/60758.svg"
          alt="Next button"
          class="popup-btn__icon"
        />
      </div>
    </div>
  );
};

export default CardDetails;
