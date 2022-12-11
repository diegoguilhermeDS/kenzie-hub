import styled from "styled-components";

export const StyledTechList = styled.ul`
  width: 100%;
  max-height: 416px;
  padding: 22px 9px;

  background-color: var(--color-grey-3);
  border-radius: .25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 700px) {
    padding: 22px;
  }

  .textWithoutTechs {
    text-align: justify;

    font-size: 1rem;
    font-weight: 600;
  }
`;
