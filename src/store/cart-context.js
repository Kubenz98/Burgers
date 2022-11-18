import React from 'react';

const CartContext = React.createContext({
    items: {},
    totalAmount: 0,
    totalPrice: 0,
    addItem: (item) => {},
    plus: (item) => {},
    minus: (item) => {},
    buyHandler: () => {}
})

export default CartContext;