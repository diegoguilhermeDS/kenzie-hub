import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 22px;
  width: 100%;
  height: 48px;

  background-color: var(--color-grey-1);
  border: 1.2182px solid var(--color-grey-1);
  border-radius: 4px;

  font-weight: 500;
  font-size: var(--font-size-2);
  color: #fff;

  &:hover {
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
  }
`;
