import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.scss";
const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const clickHandler = () => {
    props.cartHandle(true);
    props.modalHandle((prevState) => !prevState);
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <CartIcon />
      Your cart
      <span className={classes["button__amount"]}>{ctx.totalAmount}</span>
    </button>
  );
};

export default CartButton;
