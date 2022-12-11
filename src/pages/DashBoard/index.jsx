import React from "react";
import Header from "../../components/Header";
import { StyledContainer } from "../../styles/container";
import { StyledText } from "../../styles/typography";
import { StyledSectionInforUser, StyledSectionContext } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../../components/Button";
import TechList from "../../components/TechList";
import Modal from "../../components/Modal";
import { TechContext } from "../../contexts/TechContext";

const DashBoard = () => {
  const { userCurrent } = useContext(UserContext);
  const {showModal, typeModal, handleShowModal } = useContext(TechContext);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Header />
      <main>
        <StyledSectionInforUser>
          <StyledContainer className="containerSectionInforUser">
            <StyledText
              tag="h1"
              children={`Olá, ${userCurrent.name}`}
              fontSize="1"
              fontWeight={700}
            />
            <StyledText
              tag="span"
              children={`${userCurrent.course_module}`}
              fontSize="4"
              colorText="grey-1"
            />
          </StyledContainer>
        </StyledSectionInforUser>

        <StyledSectionContext>
          <StyledContainer className="containerMessageDeveloper">
            <div className="containerAddTechs">
              <StyledText
                tag="h2"
                fontWeight={600}
                fontSize="2"
                children="Tecnologias"
              />
              <Button children="+" onclick={() => handleShowModal("add")} />
            </div>
            <TechList handle={handleShowModal}/>
          </StyledContainer>
        </StyledSectionContext>
      </main>
      {showModal && <Modal type={typeModal}/>}
    </motion.div>
  );
};

export default DashBoard;
