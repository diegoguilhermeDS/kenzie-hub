import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledButtonPrimary = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0 1.375;

  background-color: var(--color-primary);
  border: 1.2182px solid var(--color-primary);
  border-radius: var(--radius-1);

  font-size: var(--font-size-2);
  font-weight: 500;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .5s ease;

  &:hover {
    background-color: var(--color-primary-focus);
    border: 1.2182px solid var(--color-primary-focus);
  }

  &:disabled {
    background-color: var(--color-primary-disabled);
    border: 1.2182px solid var(--color-primary-disabled);

    &:hover {
      background-color: var(--color-primary-disabled);
      border: 1.2182px solid var(--color-primary-disabled);
    }
  }

  svg {
    animation: ${SpinnerAnimation} 1.6s linear infinite both;
  }
`;
