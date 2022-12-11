import React from "react";
import { StyledButtonPrimary } from "./style";

const Button = ({ children, disabled, typeBtn, onclick, id }) => {
  if (typeBtn === "primary") {
    return (
      <StyledButtonPrimary disabled={disabled} type="submit">
        {children}
      </StyledButtonPrimary>
    );
  } else {
    return (
      <button onClick={onclick} type="button" id={id && id}>
        {children}
      </button>
    );
  }
};

export default Button;
