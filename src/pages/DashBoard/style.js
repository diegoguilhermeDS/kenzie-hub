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

export const StyledSectionContext = styled.section`
  padding-bottom: 40px;

  .containerMessageDeveloper {
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: var(--gap-1);
  }

  .containerAddTechs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 32px;
      height: 32px;

      display: flex;
      align-items: flex-start;
      justify-content: center;

      border-radius: var(--radius-1);
      background-color: var(--color-grey-3);

      font-size: 1.5rem;

      transition: .5s ease;

      &:hover {
        background-color: var(--color-grey-2);
      }
    }
  }
`;
