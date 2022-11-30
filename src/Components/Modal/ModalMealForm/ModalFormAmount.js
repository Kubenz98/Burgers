import classes from "./ModalFormAmount.module.scss";
import React, { useRef } from "react";

const ModalFormAmount = (props) => {

  const inputRef = useRef(1);

  const inputValueIncrease = (e) => {
    e.preventDefault();
    if (inputRef.current.value < 9) {
      inputRef.current.value++;
      props.dispatchAmount({ type: "CHANGE_INPUT",
      val: inputRef.current.value * 1,})
    } else return;
  };
  const inputValueDecrease = (e) => {
    e.preventDefault();
    if (inputRef.current.value > 1) {
      inputRef.current.value--;
      props.dispatchAmount({ type: "CHANGE_INPUT",
      val: inputRef.current.value * 1,})
    } else return;
  };

  return (
    <React.Fragment>
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
            ${props.totalValue}
          </button>
    </React.Fragment>
  );
};

export default ModalFormAmount;
