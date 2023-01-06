import Cart from "src/pages/dashboard/shopping/cart/Cart";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const DECREACE_PRODUCT = "DECREACE_PRODUCT";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const CLEAR_CART = "CLEAR_CART";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push(product);
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.amount += product.amount;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const decreaseProduct = (productId, state) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.amount--;
  if (updatedItem.amount <= 0) {
    updatedCart.splice(updatedItemIndex, 1); //amount 0 dan küçükse
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  updatedCart.splice(updatedItemIndex, 1);

  return { ...state, cart: updatedCart };
};

const setInitialState = (products, state) => {
  return { ...state, products };
};

const clearCart = (cart, state) => {
  return { ...state, cart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH": {
      const copyState = {
        ...state,
        auth: {
          user: action.payload.user,
          password: action.payload.password,
          accessToken: action.payload.accessToken,
          roles: action.payload.roles,
          role: action.payload.role,
        },
      };

      return copyState;
    }
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case DECREACE_PRODUCT:
      return decreaseProduct(action.productId, state);
    case SET_INITIAL_STATE:
      return setInitialState(action.products, state);
    case CLEAR_CART:
      return clearCart(action.cart, state);
    default:
      return state;
  }
};
