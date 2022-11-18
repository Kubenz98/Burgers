import React, { useContext, useReducer, useRef, useCallback } from "react";
import ModalFormAdditions from "./ModalFormAdditions/ModalFormAdditions";
import CartContext from "../../store/cart-context";
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
  const inputRef = useRef(1);

  const inputValueIncrease = (e) => {
    e.preventDefault();
    if (inputRef.current.value < 9) {
      inputRef.current.value++;
      dispatchFormAction({
        type: "CHANGE_INPUT",
        val: inputRef.current.value * 1,
      });
    } else return;
  };
  const inputValueDecrease = (e) => {
    e.preventDefault();
    if (inputRef.current.value > 1) {
      inputRef.current.value--;
      dispatchFormAction({
        type: "CHANGE_INPUT",
        val: inputRef.current.value * 1,
      });
    } else return;
  };

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
          <div className={classes["amount__container"]}>
            <button className={classes.dec} onClick={inputValueDecrease}>
              -
            </button>
            <input
              ref={inputRef}
              type="number"
              defaultValue={1}
              readOnly
              min="1"
              max="9"
              step="1"
              className={classes["amount__value"]}
            />
            <button className={classes.inc} onClick={inputValueIncrease}>
              +
            </button>
          </div>
          <button className={classes["amount__button"]}>
            ${formState.totalValue.toFixed(2)}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalForm;
