import React from "react";
import BurgerIcon from "./BurgerIcon";
import CartButton from "./CartButton";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes["header__logo"]}>
          <BurgerIcon />
          <h2>Burgers</h2>
        </div>
        <CartButton />
      </header>
    </React.Fragment>
  );
};

export default Header;
