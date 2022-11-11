import classes from "./MealItem.module.scss";
// import burg from './masterburger.jpg'
const MealItem = (props) => {
  console.log(props);
  
  return (
    <li className={classes.item}>
      <div className={classes["item__container"]}>
        <h3 className={classes["item__title"]}>{props.title}</h3>
        <p className={classes["item__ing"]}>{props.ingredients}</p>
        <p className={classes["item__opt"]}>{props.optional}</p>
        <span className={classes["item__price"]}>${props.price}</span>
      </div>
      <div className={classes.right}>
        <div className={classes["right__image"]}>
          <img src={props.image} />
        </div>
        <span>+</span>
      </div>
    </li>
  );
};

export default MealItem;
