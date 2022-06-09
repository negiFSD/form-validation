import React, { useState } from "react";
import "./FormInput.css";
function FormInput(props) {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const focusHandler = () => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={focusHandler}
        onFocus={()=>{inputProps.name === 'confirmPassword' && setFocus(true)}}
        focused={focus.toString()
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
