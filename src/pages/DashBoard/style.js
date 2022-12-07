import styled from "styled-components";

export const StyledSectionInforUser = styled.section`
  height: 7.5rem;

  display: flex;
  align-items: center;

  border: .0625rem solid var(--color-grey-3);

  .containerSectionInforUser {
    display: flex;
    flex-direction: column;
    gap: var(--gap-1);

    @media (min-width: 43.75rem) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const StyledSectionMessage = styled.section`
  display: none;

  @media (min-width: 43.75rem) {
    display: flex;
  }

  .containerMessageDeveloper {
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: var(--gap-1);
  }
`;
