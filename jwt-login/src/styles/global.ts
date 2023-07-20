import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        --background-color: #e5e6e8;
        --text-color: #a6abc8;
        --button-color: #7e8790;
        --base-color: #fff;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        height: 100vh;
        background-color: var(--background-color);
    }
`