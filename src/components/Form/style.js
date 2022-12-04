import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--gap-1);

    width: 100%;
    padding: 34px 15px;

    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

    @media (min-width: 700px) {
        width: 370px;
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
        gap: 17px;

        position: relative;

        label {
            font-size: 9px;
            font-weight: 400;
        }

        small {
            text-align: center;
        }

        .btnEye {
            position: absolute;
            top: 45px;
            right: 22px;

            svg > path {
                color: var(--color-grey-1);
            }
        }
    }
`