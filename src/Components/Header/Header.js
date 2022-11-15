import React from "react";
import BurgerIcon from "./BurgerIcon";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.scss";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes["header__logo"]}>
          <BurgerIcon />
          <h2>Burgers</h2>
        </div>
        <CartButton cartHandle={props.cartHandle} modalHandle={props.modalHandle}/>
      </header>
      <div className={classes.image}>
      </div>
    </React.Fragment>
  );
};

export default Header;
