import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalAfterBuyContent from "./ModalAfterBuyContent/ModalAfterBuyContent";
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

  let content;

  if (props.cartStatus) {
    content = (
      <Cart
        modalHandle={props.modalHandle}
        modalAfterBuyHandle={props.modalAfterBuyHandle}
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

  if (!props.cartStatus && props.isBuyed) {
    content = (
      <ModalAfterBuyContent
        afterBuyHandle={props.modalAfterBuyHandle}
        modalState={props.modalHandle}
      />
    );
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        {!props.isBuyed && (
          <button onClick={clickHandler} className={classes.close}>
            <ModalCloseIcon />
          </button>
        )}
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
          modalAfterBuyHandle={props.modalAfterBuyHandle}
          isBuyed={props.isBuyed}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
