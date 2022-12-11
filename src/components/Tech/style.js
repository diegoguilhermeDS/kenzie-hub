import styled from "styled-components";

export const StyledTech = styled.li`
  width: 100%;
  padding: 13px 22px;

  background-color: var(--color-grey-4);
  border-radius: var(--radius-1);

  display: flex;
  justify-content: space-between;

  cursor: pointer;
  transition: .5s ease;

  &:hover{
    background-color: var(--color-grey-2);
  }
`;
