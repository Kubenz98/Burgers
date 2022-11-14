import classes from "./MealItem.module.scss";

const MealItem = (props) => {
  const clickHandler = () => {
    props.modalHandle();
    props.mealHandle({
      title: props.title,
      ingredients: props.ingredients,
      price: props.price,
      img: props.image,
    });
  };

  return (
    <li className={classes.item} onClick={clickHandler}>
      <div className={classes["item__container"]}>
        <h3 className={classes["item__title"]}>{props.title}</h3>
        <p className={classes["item__ing"]}>{props.ingredients}</p>
        <p className={classes["item__opt"]}>{props.optional}</p>
        <span className={classes["item__price"]}>${props.price}</span>
      </div>
      <div className={classes.right}>
        <div className={classes["right__image"]}>
          <img src={props.image} alt='meal-img'/>
        </div>
        <span>+</span>
      </div>
    </li>
  );
};

export default MealItem;
