import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartList.module.scss";
const CartList = () => {
  const ctx = useContext(CartContext);

  const clickAddHandler = (item) => {
    const copiedItem = JSON.parse(JSON.stringify(item));

    copiedItem.amount = 1;
    ctx.addItem(copiedItem);
  };
  const clickRemoveHandler = (item) => {
    ctx.removeItem(item);
  };

  return (
    <ul className={classes.ul}>
      {ctx.items.map((item, index) => (
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
