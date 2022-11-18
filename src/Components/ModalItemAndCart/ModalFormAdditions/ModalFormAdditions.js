import React, { useEffect, useReducer } from "react";
import AdditionItem from "./AdditionItem";

const addersReducer = (state, action) => {
  if (action.type === "UPDATE_STATE") {
    return { ...state, additions: action.val };
  }

  if (action.type === "UPDATE_PRICE") {
    return { ...state, price: action.val };
  }
};

const ModalFormAdditions = (props) => {
  const additionsList = {
    additions: [
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
    ],
    price: 0,
  };

  const [adders, dispatchAdders] = useReducer(addersReducer, additionsList);

  const handleChange = (position) => {
    const updatedCheckedState = adders.additions.map((item, index) => {
      if (index === position) {
        return { ...item, added: !item.added };
      } else return item;
    });

    dispatchAdders({ type: "UPDATE_STATE", val: updatedCheckedState });

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState.added === true) {
          return sum + adders.additions[index].price;
        }
        return sum;
      },
      0
    );
    dispatchAdders({ type: "UPDATE_PRICE", val: totalPrice });
  };

  useEffect(() => {
    props.getAdditions(adders);
  }, [adders]);

  return (
    <React.Fragment>
      {adders.additions.map((addition, index) => (
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
