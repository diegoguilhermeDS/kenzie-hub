import styled, { css } from "styled-components";

export const StyledContainerForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-1);

  width: 100%;
  min-height: 100vh;

  padding: 48px 12px;
`

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 355px;
  width: 100%;
  @media (min-width: 700px) {
    padding: 0 10px;
    max-width: 1200px;
  }
`