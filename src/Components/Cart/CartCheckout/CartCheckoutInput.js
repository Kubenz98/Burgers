import React from "react";
const CartCheckoutInput = (props) => {
  let spanContent = <span>Enter your {props.id} please</span>;

  if (props.id === "code") {
    spanContent = props.hasError && (
      <span>Enter correct postal code (6 chars), please</span>
    );
  }
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && spanContent}
    </React.Fragment>
  );
};

export default CartCheckoutInput;
