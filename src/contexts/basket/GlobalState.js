import React, { useState, useReducer } from "react";

import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import list from "../../data";

const GlobalState = props => {
  const products = list
  
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
    
    }, 700);
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
    }, 700);
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;