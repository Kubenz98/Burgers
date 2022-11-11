import classes from "./MealItem.module.scss";
import burgerImage from "../../assets/masterburger.jpg";
const MealItem = () => {
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes["meal__title"]}>Master Burger</h3>
        <p className={classes["meal__ing"]}>
          beef (140g), bacon, champignons, cheese, lettuce, pickles, red onion,
          chef sauce, roll with sesame seeds
        </p>
        <p className={classes["meal__opt"]}>
          Optional: onion rings (100g), chips (100g), coleslaw (100g) and more.
        </p>
        <span className={classes["meal__price"]}>$19,99</span>
      </div>
      <div className={classes.right}>
        <div className={classes["right__image"]}>
          <img src={burgerImage} />
        </div>
        <span>+</span>
      </div>
    </li>
  );
};

export default MealItem;
