import classes from "./CartItem.module.scss"
const CartItem = () => {
    return (
        <div className={classes.mealItem}>
        <div className={classes["mealItem__amount"]}>
          <strong>x1</strong>
        </div>
        <div className={classes["mealItem__container"]}>
          <div className={classes["mealItem__container-info"]}>
            <h3>Burger</h3>
            <span>$19,99</span>
          </div>
          <div className={classes["mealItem__additions"]}>
            <span>onion rings, chips, three sauces</span>
          </div>
          <div className={classes["mealItem__controls"]}>
            <div>
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartItem