import React from "react";
import { StyledContainerForm } from "../../styles/container";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { StyledLink as Link } from "../../components/Link";
import { StyleContainerLogo } from "./style";

const Register = () => {
  return (
    <>
      <StyledContainerForm>
        <StyleContainerLogo>
          <Logo />
          <Link to={"/login"} bg="1" wt="1">
            Voltar
          </Link>
        </StyleContainerLogo>
        <Form type="register" />
      </StyledContainerForm>
    </>
  );
};

export default Register;
