import { useState, createContext, useContext, useEffect } from "react";

const BagContext = createContext();

const BagProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart =(data) =>{
    setItems((prev) => [...prev, data])
  }
  const values = { items, setItems, addToCart };

  return <BagContext.Provider value={values}>{children}</BagContext.Provider>;
};

const UseBag = () => useContext(BagContext);

export { BagProvider, UseBag };
