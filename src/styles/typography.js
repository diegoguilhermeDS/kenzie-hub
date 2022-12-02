import styled, { css } from "styled-components";
import BaseText from "./BaseText";

export const StyledText = styled(BaseText)`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "1":
        return css`
          font-size: var(--font-size-1);
        `;
      case "2":
        return css`
          font-size: var(--font-size-2);
        `;
      case "3":
        return css`
          font-size: var(--font-size-3);
        `;
      case "4":
        return css`
          font-size: var(--font-size-4);
        `;
      default:
        return css`
          font-size: var(--font-size-2);
        `;
    }
  }};

  ${({ colorText }) => {
    if (colorText === "grey-1") {
      return css`
        color: var(--color-grey-1);
      `;
    }  else {
      return css`
        color: var(--color-grey-0);
      `;
    }
  }}
`;
