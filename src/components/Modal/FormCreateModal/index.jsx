import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Input from "../../Input";
import { StyledFormCreateModal, StyleSelectAdd } from "./styled";
import MessageError from "../../Input/MessageError";
import { FaSpinner } from "react-icons/fa";
import { SchemaTech } from "../../../validations/schemaTech";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";


const FormCreateModal = () => {
  const [valueSelect, setValueSelect] = useState("");
  const {handleCreateTech,loading} = useContext(TechContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaTech),
  });

  
  return (
    <StyledFormCreateModal onSubmit={handleSubmit(handleCreateTech)} noValidate>
      <div className="containerInput">
        <label htmlFor="name">Nome</label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Nome da tecnologia"
          register={register("title")}
        />
        {errors.title && <MessageError children={errors.title.message} />}
      </div>
      <div className="containerInput">
        <label htmlFor="status">Selecionar status</label>
        <StyleSelectAdd
          name="status"
          id="status"
          {...register("status")}
          onChange={(e) => setValueSelect(e.target.value)}
          colorSelect={valueSelect}
        >
          {errors.status && <MessageError children={errors.status.message} />}
          <option value="">Escolha um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Avançado">Avançado</option>
        </StyleSelectAdd>
      </div>
      <Button
        children={!loading ? "Cadastrar Tecnologia" : <FaSpinner />}
        typeBtn="primary"
        disabled={!isDirty || !isValid}
      />
    </StyledFormCreateModal>
  );
};

export default FormCreateModal;
