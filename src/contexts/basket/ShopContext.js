import React from "react";
import list from "../../data";

export default React.createContext({
  products: list,
  cart: [],
  auth: {}
});
