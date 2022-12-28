import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const values = { cart, setCart };

    return (
        <CartProvider.Provider value={values}>{children}</CartProvider.Provider>
    );
};

export const useCart = () => useContext(CartContext);
