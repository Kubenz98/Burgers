import classes from "./ModalMeal.module.scss";
const ModalMeal = (props) => {
  return (
    <div className={classes.item}>
      <h3 className={classes["item__title"]}>{props.meal.title}</h3>
      <div className={classes["item__content"]}>
        <div className={classes["item__ing"]}>
          <p>{props.meal.ingredients}</p>
          <span className={classes["item__price"]}>${props.meal.price}</span>
        </div>
        <div className={classes["item__image"]}>
          <img src={props.meal.img} alt="meal-img" />
        </div>
      </div>
    </div>
  );
};

export default ModalMeal;
