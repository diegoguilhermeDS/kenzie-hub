import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../validations/schemaRegister";
import { LoginSchema } from "../../validations/schemaLogin";
import { StyledLink as Link } from "../Link";
import Select from "../Select";
import Input from "../Input";
import MessageError from "../Input/MessageError";
import Button from "../Button";
import { StyledForm } from "./style";
import { StyledText } from "../../styles/typography";
import { FaEye, FaSpinner } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Form = ({ type }) => {
  const {loading, onSubmitLogin, onSubmitRegister} = useContext(UserContext);
  const [typeInput, setTypeInput] = useState("password");


  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(type === "login" ? LoginSchema : RegisterSchema),
  });

  
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
            children={!loading ? "Entrar" : <FaSpinner />}
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
    return (
      <>
        <StyledForm onSubmit={handleSubmit(onSubmitRegister)} noValidate>
          <StyledText
            tag="h2"
            children={"Crie sua conta"}
            fontWeight={700}
            fontSize="1"
          />
          <StyledText
            tag="small"
            children={"Rapido e grátis, vamos nessa"}
            fontWeight={400}
            fontSize="4"
            colorText="grey-1"
          />
          <div className="containerInput">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              register={register("name")}
            />
            {errors.name && <MessageError children={errors.name.message} />}
          </div>
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
              type="password"
              placeholder="Digite aqui sua Senha"
              register={register("password")}
            />
            {errors.password && (
              <MessageError children={errors.password.message} />
            )}
          </div>
          <div className="containerInput">
            <label htmlFor="ConfirmPassword">Confirmar senha</label>
            <Input
              id="ConfirmPassword"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register("ConfirmPassword")}
            />
            {errors.ConfirmPassword && (
              <MessageError children={errors.ConfirmPassword.message} />
            )}
          </div>
          <div className="containerInput">
            <label htmlFor="bio">Bio</label>
            <Input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              register={register("bio")}
            />
            {errors.bio && <MessageError children={errors.bio.message} />}
          </div>
          <div className="containerInput">
            <label htmlFor="contact">Contato</label>
            <Input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              register={register("contact")}
            />
            {errors.contact && (
              <MessageError children={errors.contact.message} />
            )}
          </div>
          <Select register={register} />
          {errors.course_module && (
            <MessageError children={errors.course_module.message} />
          )}
          <Button
            children={!loading ? "Cadastrar" : <FaSpinner />}
            disabled={!isDirty || !isValid}
            typeBtn="primary"
          />
        </StyledForm>
      </>
    );
  }
};

export default Form;
