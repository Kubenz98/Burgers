import React, { useContext, useReducer, useCallback } from "react";
import ModalFormAmount from "./ModalFormAmount";
import ModalFormAdditions from "./ModalFormAdditions/ModalFormAdditions";
import CartContext from "../../../store/cart-context";
import classes from "./ModalForm.module.scss";

const formReducer = (state, action) => {
  if (action.type === "CHANGE_INPUT") {
    const updatedTotalValue =
      action.val * state.basicValue + state.additionsPrice * action.val;

    return { ...state, inputValue: action.val, totalValue: updatedTotalValue };
  } else if (action.type === "CHANGE_ADDITIONS") {
    const updatedTotalValue =
      action.val.price * state.inputValue + state.basicValue * state.inputValue;

    return {
      ...state,
      activeAdditions: action.val.additions,
      additionsPrice: action.val.price,
      totalValue: updatedTotalValue,
    };
  }
};

const ModalForm = (props) => {
  const defaultFormData = {
    basicValue: props.meal.price,
    inputValue: 1,
    activeAdditions: [],
    additionsPrice: 0,
    totalValue: props.meal.price,
  };
  const [formState, dispatchFormAction] = useReducer(
    formReducer,
    defaultFormData
  );

  const ctx = useContext(CartContext);

  const getAdditions = useCallback((data) => {
    const filteredAdditions = data.additions.filter((el) => el.added === true);
    const filteredAdditionsAndPrice = {
      additions: filteredAdditions,
      price: data.price,
    };
    dispatchFormAction({
      type: "CHANGE_ADDITIONS",
      val: filteredAdditionsAndPrice,
    });
  }, []);

  const formHandler = (event) => {
    event.preventDefault();

    const additionsTitles = formState.activeAdditions.map((el) => {
      return el.name;
    });

    const order = {
      id: Math.random(),
      title: props.meal.title,
      price: props.meal.price,
      additions: additionsTitles,
      additionsPrice: formState.additionsPrice,
      amount: formState.inputValue,
    };
    ctx.addItem(order);
    props.modalHandle();
  };
  return (
    <React.Fragment>
      <form onSubmit={formHandler}>
        <h4>additives:</h4>
        <ModalFormAdditions getAdditions={getAdditions} />
        <div className={classes.amount}>
          <ModalFormAmount dispatchAmount={dispatchFormAction} totalValue={formState.totalValue.toFixed(2)}/>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalForm;
