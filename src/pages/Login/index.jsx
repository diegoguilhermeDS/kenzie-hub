import React, { useEffect } from "react";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { StyledContainerForm } from "../../styles/container";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Token"));

    if (token) {
      navigate("/dashboard")
    }

    setLoading(false)
  }, [navigate]);

  if (loading) {
    return null;
  }

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
