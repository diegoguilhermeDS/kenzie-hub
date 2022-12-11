import styled, { css, keyframes } from "styled-components";

const animationShowModal = keyframes`
  0% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
`;

const animationCloseModal = keyframes`
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
`;

export const StyledContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;

  background-color: rgba(18, 18, 20, 0.5);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.div`
  width: 100%;
  max-width: 370px;
  max-height: 340px;
  height: 100%;

  border-radius: 4px;
  background-color: var(--color-grey-3);

  overflow: hidden;

  ${({ animation }) => {
    if (animation) {
      return css`
        animation: ${animationShowModal} 0.7s
          cubic-bezier(0.47, 0, 0.745, 0.715) both;
      `;
    } else {
      return css`
        animation: ${animationCloseModal} 1s cubic-bezier(0.165, 0.84, 0.44, 1)
          both;
      `;
    }
  }}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    padding: 12px 20px;

    background-color: var(--color-grey-2);

    button {
      font-size: 1rem;
      font-weight: 600px;
      font-family: "Nunito", sans-serif;
      color: var(--color-grey-1);
    }
  }
`;
