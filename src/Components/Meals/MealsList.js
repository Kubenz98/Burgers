import React from "react";
import classes from "./MealsList.module.scss";
import MealItem from "../MealItem/MealItem";
import master from "../../assets/masterburger.jpg";
import burger from "../../assets/burger.jpg";
import burgerList from "../../assets/burgerlist.jpg";
import nuggetsList from "../../assets/nuggetsList.jpg";
import nuggets from "../../assets/nuggets.jpg"
import rolls from "../../assets/rolls.jpg"

const meals = [
  {
    id: "m1",
    image: master,
    title: "Master Burger",
    ingredients:
      "beef (140g), bacon, champignons, cheese, lettuce, pickles, red onion, chef sauce, roll with sesame seeds",
    optional:
      "Optional: onion rings (100g), chips (100g), coleslaw (100g) and more.",
    price: "22,99",
  },
  {
    id: "m2",
    image: burger,
    title: "Chesseburger",
    ingredients:
      "beef (140g), cheese, lettuce, pickles, red onion, chef sauce, roll with sesame seeds",
    optional:
      "Optional: onion rings (100g), chips (100g), coleslaw (100g) and more.",
    price: "19,99",
  },
  {
    id: "m3",
    image: burger,
    title: "Oklahoma Burger",
    ingredients:
      "beef (140g), cheese, roasted onion, pickles, red onion, chef sauce, roll with sesame seeds",
    optional:
      "Optional: onion rings (100g), chips (100g), coleslaw (100g) and more.",
    price: "19,99",
  },
];

const meals2 = [
  {
    id: "m4",
    image: rolls,
    title: "Chicken Nuggets",
    ingredients: "Chicken nuggets (150g), chips (100g)",
    optional: "Optional: three sauces (sweet and sour, garlic, BBQ)",
    price: "14,99",
  },
  {
    id: "m5",
    image: nuggets,
    title: "Jalapeño Cheese Rolls",
    ingredients: "Jalapeño Cheese Rolls (150g), chips (100g)",
    optional: "Optional: three sauces (sweet and sour, garlic, BBQ)",
    price: "12,99",
  },
];

const MealsList = () => {
  return (
    <React.Fragment>
      <div className={classes.image}>
        <img src={burgerList} alt="burgerImg" />
      </div>
      <ul className={classes.list}>
        <h2>Burgers</h2>
        {meals.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </ul>
      <div className={classes.image}>
        <img src={nuggetsList} alt="burgerImg" />
      </div>
      <ul className={classes.list}>
      <h2>Snacks</h2>
      {meals2.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default MealsList;
