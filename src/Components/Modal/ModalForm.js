import React, { useState, useEffect } from "react";
import ModalFormAdditions from "./ModalFormAdditions/ModalFormAdditions";
import classes from "./ModalForm.module.scss";
const ModalForm = (props) => {
  const [totalValue, setTotalValue] = useState(props.price);
  const [inputValue, setInputValue] = useState(1);
  const [additionsPrice, setAdditionsPrice] = useState(0);

  const inputValueIncrease = () => {
    if (inputValue < 9) {
      setInputValue((prevState) => (prevState += 1));
    } else return;
  };
  const inputValueDecrease = () => {
    if (inputValue > 1) {
      setInputValue((prevState) => (prevState -= 1));
    } else return;
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const getAdditionsPrice = (price) => {
    setAdditionsPrice(price);
  };

  useEffect(() => {
    const newValue = ((props.price + additionsPrice) * inputValue).toFixed(2);
    setTotalValue(newValue);
  }, [props.price, inputValue, additionsPrice]);

  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={formHandler}>
        <h4>additions:</h4>
        <ModalFormAdditions getPrice={getAdditionsPrice} />
        <div className={classes.amount}>
          <div className={classes["amount__container"]}>
            <button className={classes.dec} onClick={inputValueDecrease}>
              -
            </button>
            <input
              type="number"
              value={inputValue}
              min="1"
              max="9"
              step="1"
              onChange={inputChangeHandler}
              className={classes["amount__value"]}
            />
            <button className={classes.inc} onClick={inputValueIncrease}>
              +
            </button>
          </div>
          <button className={classes["amount__button"]}>${totalValue}</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalForm;
