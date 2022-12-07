import React from "react";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { StyledContainerForm } from "../../styles/container";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainerForm>
        <Logo />
        <Form type="login" />
      </StyledContainerForm>
    </motion.div>
  );
};

export default Login;
