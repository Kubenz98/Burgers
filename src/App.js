import React from "react";
import Header from "./Components/Header/Header";
import MealsInfo from "./Components/Meals/MealsInfo";
import MealsList from "./Components/Meals/MealsList";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsInfo />
        <MealsList />
      </main>
    </React.Fragment>
  );
}

export default App;
