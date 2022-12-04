import styled, { keyframes } from "styled-components";

export const StyledSectionInforUser = styled.section`
    height: 120px;

    display: flex;
    align-items: center;

    border: 1px solid var(--color-grey-3);

    .containerSectionInforUser {
        display: flex;
        flex-direction: column;
        gap: var(--gap-1);

        @media (min-width: 700px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`

export const StyledSectionMessage = styled.section`
    display: none;

    @media (min-width: 700px) {
        display: flex;
    }


    .containerMessageDeveloper {
        margin-top: 40px;

        display: flex;
        flex-direction: column;
        gap: var(--gap-1);
    }
`