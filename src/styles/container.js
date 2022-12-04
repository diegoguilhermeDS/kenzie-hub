import styled from "styled-components";

export const StyledContainerForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-1);

  width: 100%;
  min-height: 100vh;

  padding: 3rem .75rem;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 22.1875rem;
  width: 100%;
  @media (min-width: 43.75rem) {
    padding: 0 .625rem;
    max-width: 75rem;
  }
`;
