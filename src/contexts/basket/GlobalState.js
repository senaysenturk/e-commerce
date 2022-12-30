import React, { useState, useReducer } from "react";

import ShopContext from "./ShopContext";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREACE_PRODUCT,
} from "./reducers";
import list from "../../data";

const GlobalState = (props) => {
  const products = list;

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [], auth: {} });

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

  const setAuth = (payload) => {
    dispatch({ type: 'SET_AUTH', payload });
  }

  return (
    <ShopContext.Provider
      value={{
        auth: cartState.auth,
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        decreaseProduct:decreaseProduct,
        setAuth: setAuth,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;