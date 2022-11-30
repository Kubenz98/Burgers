import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalCloseIcon from "./ModalCloseIcon";
import ModalMeal from "./ModalMeal";
import ModalForm from "./ModalMealForm/ModalForm";
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

  let content;

  if (props.cartStatus) {
    content = (
      <Cart
        modalHandle={props.modalHandle}
        cartIsActiveHandler={props.cartHandle}
      />
    );
  }
  if (!props.cartStatus) {
    content = (
      <React.Fragment>
        <ModalMeal meal={props.meal} />
        <ModalForm meal={props.meal} modalHandle={props.modalHandle} />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
          <button onClick={clickHandler} className={classes.close}>
            <ModalCloseIcon />
          </button>
        {content}
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
