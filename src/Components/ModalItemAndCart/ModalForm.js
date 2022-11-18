import React, { useState, useEffect, useContext } from "react";
import ModalFormAdditions from "./ModalFormAdditions/ModalFormAdditions";
import CartContext from "../../store/cart-context";
import classes from "./ModalForm.module.scss";
const ModalForm = (props) => {
  const [totalValue, setTotalValue] = useState(props.meal.price);
  const [inputValue, setInputValue] = useState(1);
  const [additions, setAdditions] = useState({
    filteredAdditions: [],
    price: 0,
  });

  const ctx = useContext(CartContext);

  const inputValueIncrease = (e) => {
    e.preventDefault();
    if (inputValue < 9) {
      setInputValue((prevState) => (prevState += 1));
    } else return;
  };
  const inputValueDecrease = (e) => {
    e.preventDefault();
    if (inputValue > 1) {
      setInputValue((prevState) => (prevState -= 1));
    } else return;
  };

  useEffect(() => {
    const newValue =
      ((props.meal.price + additions.price) * inputValue).toFixed(2) * 1;

    setTotalValue(newValue);
  }, [props.meal.price, inputValue, additions.price]);

  const getAdditions = (data) => {
    const filteredAdditions = data.additions.filter((el) => el.added === true);
    const filteredAdditionsAndPrice = {
      additions: filteredAdditions,
      price: data.price,
    };
    setAdditions(filteredAdditionsAndPrice);
  };

  const formHandler = (event) => {
    event.preventDefault();

    const additionsTitles = additions.additions.map((addition) => {
      return addition.name;
    });
    
    const order = {
      id: Math.random(),
      title: props.meal.title,
      price: props.meal.price,
      additions: additionsTitles,
      additionsPrice: additions.price,
      amount: inputValue,
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
              type="number"
              value={inputValue}
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
          <button className={classes["amount__button"]}>${totalValue}</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalForm;
