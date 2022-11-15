import React, { useState } from "react";
import AdditionItem from "./AdditionItem";

const ModalFormAdditions = (props) => {
  const additions = [
    {
      name: "onion rings 100g (+ $1,99)",
      price: 1.99,
      id: "add1",
      added: false,
    },
    { name: "chips 100g (+ $1,99)", price: 1.99, id: "add2", added: false },
    { name: "coleslaw (+ $1,99)", price: 1.99, id: "add3", added: false },
    {
      name: "three sauces (sweet and sour, garlic, BBQ) (+ $1,99)",
      price: 1.99,
      id: "add4",
      added: false,
    },
  ];

  const [activeAdditions, setActiveAdditions] = useState(additions);

  const handleChange = (position) => {
    const updatedCheckedState = activeAdditions.map((item, index) => {
      if (index === position) {
        return { ...item, added: !item.added };
      } else return item;
    });

    setActiveAdditions(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState.added === true) {
          return sum + additions[index].price;
        }
        return sum;
      },
      0
    );
    props.getPrice(totalPrice);
  };

  console.log(activeAdditions);

  return (
    <React.Fragment>
      {additions.map((addition, index) => (
        <AdditionItem
          additionData={addition}
          key={index}
          onChange={() => handleChange(index)}
        />
      ))}
    </React.Fragment>
  );
};

export default ModalFormAdditions;
