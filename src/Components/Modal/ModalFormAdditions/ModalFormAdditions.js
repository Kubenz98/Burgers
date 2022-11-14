import React, { useState } from "react";
import AdditionItem from "./AdditionItem";

const ModalFormAdditions = (props) => {
  const additions = [
    { name: "onion rings 100g (+ $1,99)", price: 1.99, id: "add1" },
    { name: "chips 100g (+ $1,99)", price: 1.99, id: "add2" },
    { name: "coleslaw (+ $1,99)", price: 1.99, id: "add3" },
    {
      name: "three sauces (sweet and sour, garlic, BBQ) (+ $1,99)",
      price: 1.99,
      id: "add4",
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(additions.length).fill(false)
  );

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + additions[index].price;
        }
        return sum;
      },
      0
    );
    props.getPrice(totalPrice);
  };

  return (
    <React.Fragment>
      {additions.map((addition, index) => (
        <AdditionItem
          additionData={addition}
          key={index}
          checked={checkedState[index]}
          onChange={() => handleChange(index)}
        />
      ))}
    </React.Fragment>
  );
};

export default ModalFormAdditions;
