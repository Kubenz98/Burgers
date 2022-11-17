import React, { useContext } from "react";
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
    </div>
  );
};

export default Cart;
