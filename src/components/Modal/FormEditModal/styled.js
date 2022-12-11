import styled, { css, keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledFormEditModal = styled.form`
  padding: 12px 20px;

  display: flex;
  flex-direction: column;
  gap: 22px;

  .containerInput {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    position: relative;

    label {
      font-size: 0.75rem;
      font-weight: 400;
    }

    small {
      top: 75px;
    }
  }

  .containerButtonForm {
    display: flex;
    justify-content: center;
    gap: 22px;

    button:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0rem 1.375rem;
      height: 3rem;

      background-color: var(--color-grey-1);
      border: 1.2182px solid var(--color-grey-1);
      border-radius: 0.25rem;

      font-weight: 500;
      font-size: var(--font-size-2);
      color: #fff;

      transition: 0.5s ease;

      &:hover {
        background-color: var(--color-grey-2);
        border: 1.2182px solid var(--color-grey-2);
      }

      svg {
        animation: ${SpinnerAnimation} 1.6s linear infinite both;
      }
    }
  }
`;

export const StyleSelectEdit = styled.select`
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
