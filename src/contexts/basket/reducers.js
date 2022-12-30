export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const DECREACE_PRODUCT = "DECREACE_PRODUCT";

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
        },
      };

      return copyState;
    }
    case "SIGNUP_USER_SUCCESS":
      console.log(action);
      return { ...state, user: action.payload.user, isAuthenticated: true };
    case "SIGNUP_USER_FAILURE":
      console.log(action);
      return { ...state, signUpErr: action.payload.error };

    case "SET_CURRENT_USER_SUCCESS":
      return { ...state, user: action.payload };

    // Sign in cases
    case "SIGNIN_USER_SUCCESS":
      console.log(action);
      return { ...state, user: action.payload.user, isAuthenticated: true };
    case "SIGNIN_USER_FAILURE":
      console.log(action);
      return { ...state, signInErr: action.payload.error };
      
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case DECREACE_PRODUCT:
      return decreaseProduct(action.productId, state);
    default:
      return state;
  }
};
