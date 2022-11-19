import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartList.module.scss"
const CartList = () => {
  const ctx = useContext(CartContext);

  const clickAddHandler = (item) => {
    ctx.plus(item);
  }
  const clickRemoveHandler = (item) => {
    ctx.minus(item);
  };

  const filteredItems = ctx.items.filter((el) => el.amount > 0);

  return (
    <ul className={classes.ul}>
      {filteredItems.map((item, index) => (
        <CartItem
          itemData={item}
          key={index}
          clickAddHandle={clickAddHandler}
          clickRemoveHandle={clickRemoveHandler}
        />
      ))}
    </ul>
  );
};

export default CartList;
