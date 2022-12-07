import styled, { css } from "styled-components";

export const StyleSelect = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;

  background-color: var(--color-grey-2);
  border-radius: var(--radius-1);
  border: none;
  outline: none;

  ${({ colorSelect }) => {
    if (colorSelect !== "") {
      return css`
        color: var(--color-grey-0);
      `;
    } else {
      return css`
        color: var(--color-grey-1);
      `;
    }
  }}

  font-size: var(--font-size-2);
  font-weight: 400;

  option {
    font-size: 0.75rem;
  }

  option:nth-child(1) {
    color: var(--color-grey-1);
  }
`;

export const StyleLabelSelect = styled.label`
  font-size: .5625rem;
  font-weight: 400;
`;
