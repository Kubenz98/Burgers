import React, { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.scss";
const Cart = () => {
  const ctx = useContext(CartContext);

  const clickAddHandler = (item) => {
    ctx.plus(item);
  };
  const clickRemoveHandler = (item) => {
    ctx.minus(item);
  };

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (ctx.totalAmount > 0) {
      setIsCartEmpty(false);
    } else setIsCartEmpty(true);
  }, [ctx.totalAmount]);

  const filteredItems = ctx.items.filter((el) => el.amount > 0);

  return (
    <div className={classes.cart}>
      <ul>
        {filteredItems.map((item, index) => (
          <CartItem
            itemData={item}
            key={index}
            clickAddHandle={clickAddHandler}
            clickRemoveHandle={clickRemoveHandler}
          />
        ))}
      </ul>
      {isCartEmpty && <p>Your cart is empty. Add some food, please!</p>}
      {!isCartEmpty && (
        <button className={classes["cart__button"]}>
          Buy (${ctx.totalPrice.toFixed(2)})
        </button>
      )}
    </div>
  );
};

export default Cart;
