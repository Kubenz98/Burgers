import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalCloseIcon from "./ModalCloseIcon";
import ModalMeal from "./ModalMeal";
import ModalForm from "./ModalForm";
import Cart from "../Cart/Cart";
import classes from "./Modal.module.scss";

const ModalOverlay = (props) => {
  const clickHandler = () => {
    props.modalHandle();
    props.cartHandle(false);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button onClick={clickHandler} className={classes.close}>
          <ModalCloseIcon />
        </button>
        {props.cartStatus && <Cart modalHandle={props.modalHandle} modalAfterBuyHandle={props.modalAfterBuyHandle} cartIsActiveHandler={props.cartHandle}/>}
        {!props.cartStatus && <ModalMeal meal={props.meal} />}
        {!props.cartStatus && (
          <ModalForm meal={props.meal} modalHandle={props.modalHandle} />
        )}
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
          modalAfterBuyHandle={props.modalAfterBuyHandle}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
