import CartIcon from "./CartIcon";
import classes from "./CartButton.module.scss";
const CartButton = (props) => {
  const clickHandler = () => {
    props.cartHandle(true)
    props.modalHandle((prevState) => !prevState)
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <CartIcon />
      Your cart<span className={classes["button__amount"]}>0</span>
    </button>
  );
};

export default CartButton;
