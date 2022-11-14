import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MealsInfo from "./Components/Meals/MealsInfo";
import MealsList from "./Components/Meals/MealsList";
import Modal from "./Components/Modal/Modal"
function App() {

  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedMeal, setClickedMeal] = useState('');

  const modalHandler = () => {
    setIsModalActive((prevState) => !prevState);
  }

  const getClickedMeal = (item) => {
    setClickedMeal(item);
  }
  return (
    <React.Fragment>
      {isModalActive && <Modal modalHandle={modalHandler} mealHandle={clickedMeal}/>}
      <Header />
      <main>
        <MealsInfo />
        <MealsList modalHandle={modalHandler} mealHandle={getClickedMeal}/>
      </main>
    </React.Fragment>
  );
}

export default App;
