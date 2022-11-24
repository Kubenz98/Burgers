import classes from "./ModalAfterBuyContent.module.scss";
const ModalAfterBuyContent = (props) => {
  const closeModal = () => {
    props.afterBuyHandle();
    props.modalState();
  };

  return (
    <div className={classes["modal__container"]}>
      <div className={classes["modal__container-after-buy"]}>
        <h2>Thank you for your order! :)</h2>
        <button className={classes.button} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAfterBuyContent;
