import React, { useContext, useState, useEffect } from "react";
import CartList from "./CartList";
import CartContext from "../../store/cart-context";
import CartCheckout from "./CartCheckout/CartCheckout";
import classes from "./Cart.module.scss";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);

  useEffect(() => {
    if (ctx.totalAmount > 0) {
      if (!isCartEmpty) {
        return;
      } else setIsCartEmpty(false);
    } else {
      if (isCartEmpty) {
        return;
      } else setIsCartEmpty(true);
    }
  }, [ctx.totalAmount, isCartEmpty]);

  const clickHandler = () => {
    setIsCheckoutActive(true);
  };

  const cancelBuying = () => {
    setIsCheckoutActive(false)
  }

  let cartContent = <p>Your cart is empty. Add some food, please!</p>;

  if (!isCartEmpty) {
    cartContent = (
      <React.Fragment>
        <CartList />
        <button onClick={clickHandler} className={classes["cart__button"]}>
          Buy (${ctx.totalPrice.toFixed(2)})
        </button>
      </React.Fragment>
    );
  }
  if (isCheckoutActive) {
    cartContent = <CartCheckout onCancel={cancelBuying} onBuy={ctx.buyHandler}/>;
  }

  return (
    <div className={classes.cart}>
      <h2>{isCheckoutActive ? 'Checkout' : 'Cart'}</h2>
      {cartContent}
    </div>
  );
};

export default Cart;
