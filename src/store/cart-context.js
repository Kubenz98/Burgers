import React from 'react';

const CartContext = React.createContext({
    items: {},
    addItem: (item) => {},
    plus: (item) => {},
    minus: (item) => {}
})

export default CartContext;