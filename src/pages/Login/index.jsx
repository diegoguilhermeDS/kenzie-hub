import React from "react";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { StyledContainerForm } from "../../styles/container";

const Login = () => {
  return (
    <>
      <StyledContainerForm>
        <Logo />
        <Form type="login"/>
      </StyledContainerForm>
    </>
  );
};

export default Login;
