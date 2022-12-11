import React from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledText } from "../../styles/typography";
import FormEditModal from "./FormEditModal";
import FormCreateModal from "./FormCreateModal";
import { StyledContainerModal, StyledModal } from "./style";

const Modal = ({ type }) => {
  const { handleCloseModal, animationModal } = useContext(TechContext);

  return (
    <StyledContainerModal>
      <StyledModal animation={animationModal}>
        <header>
          <StyledText
            tag="h3"
            children="Cadastrar Tecnologia"
            fontWeight={700}
            fontSize="3"
          />
          <button onClick={handleCloseModal}>X</button>
        </header>
        {type === "add" ? <FormCreateModal /> : <FormEditModal />}
      </StyledModal>
    </StyledContainerModal>
  );
};

export default Modal;
