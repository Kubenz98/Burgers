import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalAfterBuy.module.scss";
const ModalOverlay = (props) => {
  const closeModal = () => {
    props.modalHandle();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div className={classes['modal__container']}>
        <h2>Thank you for your order! :)</h2>
        <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

const ModalAfterBuy = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay modalHandle={props.modalHandle} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default ModalAfterBuy;
