import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;

  .conatinerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0px 22px;
      width: 80px;
      height: 48px;

      border-radius: 4px;
      background-color: var(--color-grey-3);
      border: 1.2182px solid var(--color-grey-3);

      font-weight: 500;
      font-size: var(--font-size-2);
      color: #fff;

      &:hover {
        background-color: var(--color-grey-2);
        border: 1.2182px solid var(--color-grey-2);
      }
    }
  }
`;
