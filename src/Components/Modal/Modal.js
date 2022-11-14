import React from "react";
import ReactDOM from "react-dom";
import ModalMeal from "./ModalMeal";
import ModalForm from "./ModalForm";
import classes from "./Modal.module.scss";

const ModalOverlay = (props) => {
  
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button onClick={props.modalHandle} className={classes.close}>-</button>
        <ModalMeal meal={props.meal} />
        <ModalForm price={props.meal.price}/>
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
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
