import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;

  background-color: var(--color-grey-2);
  border-radius: var(--radius-1);
  border: none;
  outline: none;

  color: var(--color-grey-0);
  font-size: var(--font-size-2);
  font-weight: 400;

  &::placeholder {
    font-size: var(--font-size-2);
    font-weight: 400;
    color: var(--color-grey-1);
  }

  &:focus {
    border: 1px solid var(--color-grey-0);
  }
`;
