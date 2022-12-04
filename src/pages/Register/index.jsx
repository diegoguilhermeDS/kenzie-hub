import React from "react";
import { StyledContainerForm } from "../../styles/container";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { StyledLink as Link } from "../../components/Link";
import { StyleContainerLogo } from "./style";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainerForm>
        <StyleContainerLogo>
          <Logo />
          <Link to={"/login"} bg="1" wt="1">
            Voltar
          </Link>
        </StyleContainerLogo>
        <Form type="register" />
      </StyledContainerForm>
    </motion.div>
  );
};

export default Register;
