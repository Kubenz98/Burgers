import React, { useReducer } from "react";
import CartContext from "./cart-context";

const CartReducer = (state, action) => {

  if (action.type === "ADD") {
    
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const existingItem = state.items.find(
      (el) => el.title === action.val.title && equals(el.additions, action.val.additions)
    );
    const existingItemIndex = state.items.indexOf(existingItem);

    if (existingItem && existingItemIndex > -1) {
      const updatedStateItems = state.items.map((el, index) => {
        if (index === existingItemIndex) {
          el.amount += action.val.amount;
        }
        return el;
      });
      const updatedTotalPrice = state.totalPrice + (action.val.price + action.val.additionsPrice) * action.val.amount;
      const updatedTotalAmount = state.totalAmount + action.val.amount;

      return {
        items: updatedStateItems,
        totalPrice: updatedTotalPrice.toFixed(2) * 1,
        totalAmount: updatedTotalAmount,
      };
    }

    const updatedItems = [...state.items, action.val];
    const updatedTotalPrice =
      state.totalPrice +
      (action.val.price + action.val.additionsPrice) * action.val.amount;
    const updatedTotalAmount = state.totalAmount + action.val.amount;

    return {
      ...state,
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ONE") {

    const itemsToUpdate = [...state.items];
    const existingItem = itemsToUpdate.find(el => el.id === action.val.id);
    let updatedStateItems;
    
    if(existingItem.amount === 1) {
      updatedStateItems = itemsToUpdate.filter(el => el.id !== existingItem.id)
    } else {
        updatedStateItems = itemsToUpdate.map(el => {
        if(el.id === action.val.id) {
          el.amount--;
        }
        return el
    })
  }
    const updatedTotalPrice =
      state.totalPrice - (action.val.price + action.val.additionsPrice);
    const updatedTotalAmount = state.totalAmount - 1;

    return {
      items: updatedStateItems,
      totalPrice: updatedTotalPrice.toFixed(2) * 1,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "CLEAR_ALL") {
    return {
      items: [],
      totalPrice: 0,
      totalAmount: 0,
    };
  }
};
export const CartProvider = (props) => {
  const defaultCartContent = {
    items: [],
    totalPrice: 0,
    totalAmount: 0,
  };

  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartContent
  );

  const addOrderHandler = (item) => {
    dispatchCartAction({ type: "ADD", val: item });
  };

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE_ONE", val: item });
  };

  const buyHandler = () => {
    dispatchCartAction({ type: "CLEAR_ALL" });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalPrice: cartState.totalPrice,
        addItem: addOrderHandler,
        removeItem: removeItemHandler,
        buyHandler: buyHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
