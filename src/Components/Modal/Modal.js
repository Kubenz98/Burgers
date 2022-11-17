import React from "react";
import ReactDOM from "react-dom";
import ModalMeal from "./ModalMeal";
import ModalForm from "./ModalForm";
import Cart from "../Cart/Cart";
import classes from "./Modal.module.scss";

const ModalOverlay = (props) => {
  const clickHandler = () => {
    props.modalHandle();
    props.cartHandle(false);
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button onClick={clickHandler} className={classes.close}>
          -
        </button>
        {props.cartStatus && <Cart />}
        {!props.cartStatus && <ModalMeal meal={props.meal} />}
        {!props.cartStatus && <ModalForm meal={props.meal} />}
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          modalHandle={props.modalHandle}
          meal={props.mealHandle}
          cartStatus={props.cartStatus}
          cartHandle={props.cartHandle}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
