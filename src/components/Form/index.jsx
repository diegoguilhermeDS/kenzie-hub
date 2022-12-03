import React, { useState } from "react";
import { StyledText } from "../../styles/typography";
import { FaEye, FaSpinner } from "react-icons/fa";
import { StyledForm } from "./style";
import Input from "../Input";
import Button from "../Button";
import { StyledLink as Link } from "../Link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MessageError from "../Input/MessageError";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { notify } from "../Toast";

const Form = ({ type }) => {
  const [typeInput, setTypeInput] = useState("password");
  const [loading , setLoading] = useState(false)

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate()
  const onSubmitLogin = async (data) => {
    try {
      setLoading(true)
      const response = await api.post("/sessions", data)
      console.log(response)
      if(response.status === 200) {
        notify("Login efetuado com sucesso!", "sucess")
        localStorage.setItem("@Token", JSON.stringify(response.data.token))
        localStorage.setItem("@UserId", JSON.stringify(response.data.user.id))
        setTimeout(() => {
          navigate("/dashboard")
        }, 3500)
      }
    } catch (err) {
      notify("E-mail ou Senha estão incorreto")
    } finally {
      setLoading(false)
    }
  };
  
  if (type === "login") {
    return (
      <>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <StyledText
            tag="h2"
            children={"Login"}
            fontWeight={700}
            fontSize="2"
          />
          <div className="containerInput">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              register={register("email")}
            />
            {errors.email && <MessageError children={errors.email.message} />}
          </div>

          <div className="containerInput">
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type={typeInput}
              placeholder="Digite aqui sua senha"
              register={register("password")}
            />
            {errors.password && (
              <MessageError children={errors.password.message} />
            )}
            <button
              className="btnEye"
              type="button"
              onClick={() =>
                typeInput === "password"
                  ? setTypeInput("text")
                  : setTypeInput("password")
              }
            >
              {<FaEye />}
            </button>
          </div>

          <Button
            children={!loading ? "Entrar" : <FaSpinner/>}
            disabled={!isDirty || !isValid}
            typeBtn="primary"
          />

          <div className="containerInput">
            <StyledText
              tag="small"
              children={"Ainda não possui uma conta?"}
              fontWeight={600}
              fontSize="5"
              colorText="grey-1"
            />
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </StyledForm>
      </>
    );
  } else {
    return <div>Form</div>;
  }
};

export default Form;
