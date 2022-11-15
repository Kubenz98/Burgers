import React, { useReducer } from "react";
import CartContext from "./cart-context";

const mealReducer = (state, action) => {
    
}

export const CartProvider = (props) => {

    const defaultCartContent = {
        items: [],
        totalAmount: 0
    }

    const [orderedMeal, dispatchMeal] = useReducer(mealReducer, defaultCartContent)

  return <CartContext.Provider value={{orderedMeal: orderedMeal}}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
