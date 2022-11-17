import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MealsInfo from "./Components/Meals/MealsInfo";
import MealsList from "./Components/Meals/MealsList";
import Modal from "./Components/Modal/Modal";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedMeal, setClickedMeal] = useState("");
  const [isCartActive, setIsCartActive] = useState(false);

  const modalHandler = () => {
    setIsModalActive((prevState) => !prevState);
  };

  const getClickedMeal = (item) => {
    setClickedMeal(item);
  };
  return (
    <CartProvider>
      {isModalActive && (
        <Modal
          modalHandle={modalHandler}
          mealHandle={clickedMeal}
          cartStatus={isCartActive}
          cartHandle={setIsCartActive}
        />
      )}
      <Header cartHandle={setIsCartActive} modalHandle={modalHandler} />
      <main>
        <MealsInfo />
        <MealsList modalHandle={modalHandler} mealHandle={getClickedMeal} />
      </main>
    </CartProvider>
  );
}

export default App;
