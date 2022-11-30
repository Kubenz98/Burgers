import { useState, Fragment } from "react";
import UseInput from "../../../hooks/use-input";
import CartCheckoutInput from "./CartCheckoutInput";
import classes from "./CartCheckout.module.scss";

const CartCheckout = (props) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const textValidation = (text) => text.trim() !== "";
  const codeValidation = (code) => code.trim().length > 5;

  const {
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
  } = UseInput(textValidation);

  const {
    valueChangeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    isValid: streetIsValid,
    hasError: streetHasError,
  } = UseInput(textValidation);

  const {
    valueChangeHandler: codeChangeHandler,
    blurHandler: codeBlurHandler,
    isValid: codeIsValid,
    hasError: codeHasError,
  } = UseInput(codeValidation);

  const {
    valueChangeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    isValid: cityIsValid,
    hasError: cityHasError,
  } = UseInput(textValidation);

  const formHandler = (e) => {
    e.preventDefault();

    nameBlurHandler();
    streetBlurHandler();
    codeBlurHandler();
    cityBlurHandler();
    if (!nameIsValid || !streetIsValid || !codeIsValid || !cityIsValid) {
      return;
    }
    setIsFormSubmitted(true);
    props.onBuy();
  };

  const addClasses = (hasError) => {
    return hasError ? `${classes.control} ${classes.invalid}` : classes.control;
  };

  const nameClasses = addClasses(nameHasError);
  const streetClasses = addClasses(streetHasError);
  const codeClasses = addClasses(codeHasError);
  const cityClasses = addClasses(cityHasError);

  return (
    <Fragment>
      {!isFormSubmitted ? (
        <form className={classes.form} onSubmit={formHandler}>
          <div className={nameClasses}>
            <CartCheckoutInput
              label={"Your Name"}
              id={"name"}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              hasError={nameHasError}
            />
          </div>
          <div className={streetClasses}>
            <CartCheckoutInput
              label={"Street"}
              id={"street"}
              onChange={streetChangeHandler}
              onBlur={streetBlurHandler}
              hasError={streetHasError}
            />
          </div>
          <div className={codeClasses}>
            <CartCheckoutInput
              label={"Postal Code"}
              id={"code"}
              onChange={codeChangeHandler}
              onBlur={codeBlurHandler}
              hasError={codeHasError}
            />
          </div>
          <div className={cityClasses}>
            <CartCheckoutInput
              label={"City"}
              id={"city"}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              hasError={cityHasError}
            />
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit" className={classes.submit}>
              Confirm
            </button>
          </div>
        </form>
      ) : (
        <p>Thank you for your order! :)</p>
      )}
    </Fragment>
  );
};

export default CartCheckout;
