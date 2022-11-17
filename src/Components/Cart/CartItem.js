import React, { useState, useEffect } from "react";
import classes from "./CartItem.module.scss";
const CartItem = (props) => {

  const clickAdd = () => { 
    props.clickAddHandle(props.itemData)
  }

  const clickRemove = () => {
    props.clickRemoveHandle(props.itemData)
  }
  return (
    <div className={classes.mealItem}>
      <div className={classes["mealItem__amount"]}>
        <strong>x{props.itemData.amount}</strong>
      </div>
      <div className={classes["mealItem__container"]}>
        <div className={classes["mealItem__container-info"]}>
          <h3>{props.itemData.title}</h3>
          <span>${props.itemData.price}</span>
        </div>
        <div className={classes["mealItem__additions"]}>
          <span>{props.itemData.additions.join(", ")}</span>
        </div>
        <div className={classes["mealItem__controls"]}>
          <div>
            <button onClick={clickRemove}>-</button>
            <button onClick={clickAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
