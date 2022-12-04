import styled, { css } from "styled-components";

export const StyleSelect = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;

  background-color: var(--color-grey-2);
  border-radius: var(--radius-1);
  border: none;
  outline: none;

  ${({colorSelect}) => {
    if(colorSelect !== ""){
      return css`
        color: var(--color-grey-0);
      `
    } else {
      return css`
        color: var(--color-grey-1);
      `
    }
  }}
  
  font-size: var(--font-size-2);
  font-weight: 400;

  option {
    font-size: 12px;
  }

  option:nth-child(1){
    color: var(--color-grey-1);
  }
`;

export const StyleLabelSelect = styled.label`
  font-size: 9px;
  font-weight: 400;
`;
