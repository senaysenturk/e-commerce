import React, { useState, useReducer } from "react";

import ShopContext from "./ShopContext";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREACE_PRODUCT,
} from "./reducers";
import list from "../../data";
const initialState = { cart: [], auth: {}, products: [] };

const GlobalState = (props) => {
  const products = list;

  // const [cart, setCart] = useState([]);
  /**
   * @type {[State, dispatch]}
   */
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

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
    dispatch({ type: "SET_AUTH", payload });
  };
  return (
    <ShopContext.Provider
      value={{
        auth: cartState.auth,
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        decreaseProduct: decreaseProduct,
        totalPrice: () => {
          let total = 0;
          cartState.cart.forEach((item) => {
            total += item.amount * item.price;
          });
          return total.toFixed(2);
        },
        setAuth: setAuth,
        totalQuantity: () => {
          let totalQ = 0;
          cartState.cart.forEach((item) => {
            totalQ += item.amount;
          });
          return totalQ;
        },
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
