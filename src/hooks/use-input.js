import { useState } from "react";

const UseInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  let isValid = validate(value);
  const hasError = !isValid && isTouched;

  return {
    value,
    isTouched,
    valueChangeHandler,
    blurHandler,
    isValid,
    hasError,
  };
};

export default UseInput;
