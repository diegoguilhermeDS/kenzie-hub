import React from "react";
import { StyledInput } from "./style";

const Input = ({ type, placeholder, register, id, value }) => {
  return (
    <StyledInput type={type} placeholder={value ? value : placeholder} {...register} id={id}/>
  );
};

export default Input;
