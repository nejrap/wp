import React, { createContext, useState, useContext } from 'react';
import data from '../Assets/data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < data.length; index++) {
        cart[data[index].id] = 0;  // Ensure you use the item IDs from data
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log('Adding to cart:', itemId);  // Log the itemId
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            console.log('Updated Cart:', updatedCart); // Log the updated cart
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, data, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => useContext(ShopContext);

export default ShopContextProvider;
