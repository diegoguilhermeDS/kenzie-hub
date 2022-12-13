/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { StyledContainerForm } from "../../styles/container";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function redirectLogin() {

      const token = localStorage.getItem("@Token");
      if (token) {
        let status = ''
        try {
          const response = await api.get("/profile");
          if(response.status === 200) {
            navigate("/dashboard")
          } 
        } catch (error) {
          console.log(error)
        } 
      }

      setTimeout(() => {
        setLoading(false)
      }, 500)
    }

    redirectLogin()
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
