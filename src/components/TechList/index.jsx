/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Tech from "../Tech";
import { StyledTechList } from "./style";

const TechList = ({handle}) => {
  const { techs } = useContext(UserContext);

  return (
    <StyledTechList>
      {techs.length < 1 ? (
        <h2 className="textWithoutTechs">Você ainda não cadastrou suas tecnologias</h2>
      ) : (
        techs.map((tec, index) => <Tech key={index} tec={tec} handle={handle}/>)
      )}
    </StyledTechList>
  );
};

export default TechList;
