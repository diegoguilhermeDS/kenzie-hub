import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
        color: var(--color-grey-0);
    }

    body {
        background-color: #121214;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    a {
        color: unset;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disabled: #59323F;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-feedback-alert: #E83F5B;
        --color-feedback-sucess: #3FE864;
        
        --font-size-1: 1.125rem;
        --font-size-2: 1rem;
        --font-size-3: .875rem;
        --font-size-4: .75rem;

        --gap-1: 1.375rem;

        --radius-1: .25rem;

        --toastify-color-dark: #343B41;
        --toastify-color-success: #3FE864;
        --toastify-color-error: #E83F5B;

        --toastify-font-family: "Inter", sans-serif;

        --toastify-text-color-success: #F8F9FA;
        --toastify-text-color-error: #F8F9FA;
    }

    ::-webkit-scrollbar {
        width: .25rem;

        @media (min-width: 1024px) {
            width: .375rem;
        }
    }

    ::-webkit-scrollbar-track {
        background: var(--color-grey-1);
        margin: .5rem;
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-focus);
    }
`;
