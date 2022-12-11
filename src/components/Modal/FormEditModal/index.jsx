import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { TechContext } from "../../../contexts/TechContext";
import { SchemaTech } from "../../../validations/schemaTech";
import Button from "../../Button";
import Input from "../../Input";
import MessageError from "../../Input/MessageError";
import { StyledFormEditModal, StyleSelectEdit } from "./styled";

const FormEditModal = () => {
  const { currentTechEdit, handleDeleteTech, handleEditTech } =
    useContext(TechContext);
  const { loading } = useContext(TechContext);
  const [valueSelect, setValueSelect] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaTech),
  });

  return (
    <StyledFormEditModal onSubmit={handleSubmit(handleEditTech)}>
      <div className="containerInput">
        <label htmlFor="name">Nome</label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Nome da tecnologia"
          value={currentTechEdit.title}
          register={register("title")}
        />
        {errors.title && <MessageError children={errors.title.message} />}
      </div>
      <div className="containerInput">
        <label htmlFor="status">Selecionar status</label>
        <StyleSelectEdit
          name="status"
          id="status"
          {...register("status")}
          onChange={(e) => setValueSelect(e.target.value)}
          colorSelect={valueSelect}
          defaultValue={currentTechEdit.status}
        >
          {errors.status && <MessageError children={errors.status.message} />}
          <option value="">Escolha um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Avançado">Avançado</option>
        </StyleSelectEdit>
      </div>
      <div className="containerButtonForm">
        <Button
          children={!loading ? "Salvar alterações" : <FaSpinner />}
          typeBtn="primary"
          disabled={!isDirty}
        />
        <Button
          children={!loading ? "Excluir" : <FaSpinner />}
          id={currentTechEdit.id}
          onclick={(e) => handleDeleteTech(e.target.id)}
        />
      </div>
    </StyledFormEditModal>
  );
};

export default FormEditModal;
