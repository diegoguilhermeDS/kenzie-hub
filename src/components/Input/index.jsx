import React from "react";
import { StyledInput } from "./style";

const Input = ({ type, placeholder, register, id }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} {...register} id={id} />
  );
};

export default Input;
