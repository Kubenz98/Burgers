import React, { useContext, useState, useEffect } from "react";
import CartList from "./CartList";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.scss";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (ctx.totalAmount > 0) {
     if(!isCartEmpty) {
        return
     } else setIsCartEmpty(false)
    }
     else {
      if(isCartEmpty) {
        return
      } else setIsCartEmpty(true)
     }
  }, [ctx.totalAmount, isCartEmpty]);

  const clickHandler = () => {
    ctx.buyHandler();
    props.modalAfterBuyHandle();
    props.modalHandle();
    props.cartIsActiveHandler(false);
  };

  return (
    <div className={classes.cart}>
      <h2>Cart</h2>
      {!isCartEmpty && <CartList />}
      {isCartEmpty && <p>Your cart is empty. Add some food, please!</p>}
      {!isCartEmpty && (
        <button onClick={clickHandler} className={classes["cart__button"]}>
          Buy (${ctx.totalPrice.toFixed(2)})
        </button>
      )}
    </div>
  );
};

export default Cart;
