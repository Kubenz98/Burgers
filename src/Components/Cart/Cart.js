import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
const Cart = () => {
  return (
    <div className={classes.cart}>
        <CartItem />
    </div>
  );
};

export default Cart;
