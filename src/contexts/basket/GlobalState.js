import React, { useReducer, useEffect } from "react";
import ShopContext from "./ShopContext";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREACE_PRODUCT,
  SET_INITIAL_STATE,
  CLEAR_CART,
} from "./reducers";
import { getProduct } from "../../network/requests/product/products";

/** @type {State} */
const initialState = { cart: [], auth: {}, products: [] };

const GlobalState = (props) => {
  useEffect(() => {
    (async () => {
      const products = await getProduct();
      setInitialState(products);
    })();
  }, []);

  // const [cart, setCart] = useState([]);
  /**
   * @type {[State, dispatch]}
   */
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  const setInitialState = (products) => {
    dispatch({ type: SET_INITIAL_STATE, products });
  };

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

  const clearCart = (cart) => {
    dispatch({ type: "CLEAR_CART", cart });
  };
  return (
    <ShopContext.Provider
      value={{
        auth: cartState.auth,
        products: cartState.products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        decreaseProduct: decreaseProduct,
        clearCart: clearCart,
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
        getDate: (format) => {
          const newDate = new Date();
          const orderTimeAndDateFormat = newDate.toUTCString();
          return orderTimeAndDateFormat;
        },
        
        cartId: () => {
          let cartIdStartNumber = 1000000;
          return () => {
            return cartIdStartNumber++;
          };
        },
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
