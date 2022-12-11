import React from "react";
import { StyledTech } from "./style";
import { StyledText } from "../../styles/typography";

const Tech = ({ tec, handle }) => {
  return (
    <StyledTech onClick={() => handle("", tec.id)}>
      <StyledText tag="h3" fontWeight={700} fontSize="3" children={tec.title} />
      <StyledText
        tag="span"
        fontWeight={400}
        fontSize="4"
        colorText="grey-1"
        children={tec.status}
      />
    </StyledTech>
  );
};

export default Tech;
