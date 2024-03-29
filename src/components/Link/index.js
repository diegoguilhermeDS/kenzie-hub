import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0rem 1.375rem;
  ${({ wt }) => {
    if (wt === "1") {
      return css`
        width: 5rem;
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }}
  height: 3rem;

  ${({ bg }) => {
    if (bg === "1") {
      return css`
        background-color: var(--color-grey-3);
        border: 1.2182px solid var(--color-grey-3);
      `;
    } else {
      return css`
        background-color: var(--color-grey-1);
        border: 1.2182px solid var(--color-grey-1);
      `;
    }
  }}

  border-radius: .25rem;

  font-weight: 500;
  font-size: var(--font-size-2);
  color: #fff;

  &:hover {
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
  }
`;
