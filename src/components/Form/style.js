import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);

  width: 100%;
  padding: 2.125rem 0.9375rem;

  background-color: var(--color-grey-3);
  border-radius: var(--radius-1);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  @media (min-width: 700px) {
    width: 23.125rem;
  }

  h2 {
    text-align: center;
  }

  small {
    text-align: center;
  }

  .containerInput {
    display: flex;
    flex-direction: column;
    gap: 1.0625rem;

    position: relative;
    padding-bottom: 20px;

    label {
      font-size: 0.5625rem;
      font-weight: 400;
    }

    small {
      text-align: center;
    }

    .btnEye {
      position: absolute;
      top: 2.8125rem;
      right: 1.375rem;

      svg > path {
        color: var(--color-grey-1);
      }
    }
  }
`;
