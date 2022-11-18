import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MealsInfo from "./Components/Meals/MealsInfo";
import MealsList from "./Components/Meals/MealsList";
import Modal from "./Components/ModalItemAndCart/Modal";
import ModalAfterBuy from "./Components/ModalAfterBuy/ModalAfterBuy";
import CartProvider from "./store/CartProvider";
import classes from "./App.module.scss"

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedMeal, setClickedMeal] = useState("");
  const [isCartActive, setIsCartActive] = useState(false);
  const [isBuyed, setIsBuyed] = useState(false);

  const modalHandler = () => {
    setIsModalActive((prevState) => !prevState);
  };

  const getClickedMeal = (item) => {
    setClickedMeal(item);
  };
  const modalAfterBuyHandler = () => {
    setIsBuyed((prevState) => !prevState);
  };
  return (
    <CartProvider>
      {isModalActive && (
        <Modal
          modalHandle={modalHandler}
          mealHandle={clickedMeal}
          cartStatus={isCartActive}
          cartHandle={setIsCartActive}
          modalAfterBuyHandle={modalAfterBuyHandler}
        />
      )}
      {isBuyed && <ModalAfterBuy modalHandle={modalAfterBuyHandler} />}
      <Header cartHandle={setIsCartActive} modalHandle={modalHandler} />
      <main className={classes.main}>
        <MealsInfo />
        <MealsList modalHandle={modalHandler} mealHandle={getClickedMeal} />
      </main>
    </CartProvider>
  );
}

export default App;
