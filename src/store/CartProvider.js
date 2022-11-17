import React, { useReducer } from "react";
import CartContext from "./cart-context";

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const existingItem = state.items.find((el) => el.title === action.val.title && equals(el.additions, action.val.additions)
    );

    if (existingItem) {
      const updatedStateItems = state.items.map((el) => {
        if (equals(el.additions, action.val.additions)) {
          el.amount += action.val.amount;
        }
        return el;
      });
      const updatedTotalPrice = state.totalPrice + (action.val.price + action.val.additionsPrice) * action.val.amount;
      const updatedTotalAmount = state.totalAmount + action.val.amount
      
      return {
        items: updatedStateItems,
        totalPrice: updatedTotalPrice.toFixed(2) * 1,
        totalAmount: updatedTotalAmount
      };
    }

    const updatedItems = [...state.items, action.val];
    const updatedTotalPrice = state.totalPrice + (action.val.price + action.val.additionsPrice) * action.val.amount;
    const updatedTotalAmount = state.totalAmount + action.val.amount

    return { ...state, items: updatedItems, totalPrice: updatedTotalPrice, totalAmount: updatedTotalAmount };
  }
   else if (action.type === "PLUS_ONE") {
    const updatedStateItems = state.items.map((el) => {
      if (el.id === action.val.id) {
        el.amount++;
      }
      return el;
    });

    const updatedTotalPrice = state.totalPrice + (action.val.price + action.val.additionsPrice);
    const updatedTotalAmount = state.totalAmount + 1;

    return {
      items: updatedStateItems,
      totalPrice: updatedTotalPrice.toFixed(2) * 1,
      totalAmount: updatedTotalAmount
    };
  }
   else if (action.type === "MINUS_ONE") {
    const updatedStateItems = state.items.map((el) => {
      if (el.id === action.val.id) {
        el.amount--;
      }
      return el;
    });
    const updatedTotalPrice =
      state.totalPrice - (action.val.price + action.val.additionsPrice);
    const updatedTotalAmount = state.totalAmount - 1;

    return {
      items: updatedStateItems,
      totalPrice: updatedTotalPrice.toFixed(2) * 1,
      totalAmount: updatedTotalAmount
    };
  }
};
export const CartProvider = (props) => {
  const defaultCartContent = {
    items: [],
    totalPrice: 0,
    totalAmount: 0
  };

  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartContent
  );


  const addOrderHandler = (item) => {
    dispatchCartAction({ type: "ADD", val: item });
  };
  const PlusOneItemHandler = (item) => {
    dispatchCartAction({ type: "PLUS_ONE", val: item });
  };
  const MinusOneItemHandler = (item) => {
    dispatchCartAction({ type: "MINUS_ONE", val: item });
  };  

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalPrice: cartState.totalPrice,
        addItem: addOrderHandler,
        plus: PlusOneItemHandler,
        minus: MinusOneItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
