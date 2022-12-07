import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 5rem;
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

      padding: 0rem 1.375rem;
      width: 5rem;
      height: 3rem;

      border-radius: 0.25rem;
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
