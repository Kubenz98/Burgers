import React, { useEffect, useReducer, memo } from "react";
import AdditionItem from "./AdditionItem";

const additionsReducer = (state, action) => {
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

  const [additions, dispatchAdditions] = useReducer(additionsReducer, additionsList);

  const handleChange = (position) => {
    const updatedCheckedState = additions.additions.map((item, index) => {
      if (index === position) {
        return { ...item, added: !item.added };
      } else return item;
    });

    dispatchAdditions({ type: "UPDATE_STATE", val: updatedCheckedState });

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState.added === true) {
          return sum + additions.additions[index].price;
        }
        return sum;
      },
      0
    );
    dispatchAdditions({ type: "UPDATE_PRICE", val: totalPrice });
  };

  useEffect(() => {
    props.getAdditions(additions);
  }, [additions, props]);

  return (
    <React.Fragment>
      {additions.additions.map((addition, index) => (
        <AdditionItem
          additionData={addition}
          key={index}
          onChange={() => handleChange(index)}
        />
      ))}
    </React.Fragment>
  );
};

export default memo(ModalFormAdditions);
