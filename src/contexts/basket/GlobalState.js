import React, { useState, useReducer } from "react";

import ShopContext from "./ShopContext";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREACE_PRODUCT,
  TOTAL_PRICE,
} from "./reducers";
import list from "../../data";

const GlobalState = (props) => {
  const products = list;

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };
  // ürün azaltma
  const decreaseProduct = (productId) => {
    dispatch({ type: DECREACE_PRODUCT, productId });
  };

  const totalPrice =(productPrice) => {
    dispatch({type: TOTAL_PRICE, productPrice})
  }



  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        decreaseProduct:decreaseProduct,
        totalPrice:totalPrice
        setAuth: setAuth,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
