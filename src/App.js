import React from "react";
import Header from "./Components/Header/Header";
import MealsInfo from "./Components/Meals/MealsInfo";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsInfo />
      </main>
    </React.Fragment>
  );
}

export default App;
