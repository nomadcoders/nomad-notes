import { injectGlobal } from "styled-components";

injectGlobal`
    :root {
        --greyColor: #A2A19E;
        --blackColor: #373630;
    }
    body{
        background-color:#F7F5F3;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:var(--blackColor);
        padding:50px 100px;
        margin:0;
    }
    #root{
        max-width:1000px;
        width:100%;
        margin:0 auto;
    }
    a {
        color:inherit;
        text-decoration:none;
    }
    div{
        margin:0;
    }
    input,
    textarea{
        appearance:none;
        border:none;
        background-color:transparent;
        resize:none;
        &::placeholder {
            color: #E7E7E6;
        }
        &:focus,
        &:active{
            outline:none;
        }
    }
    .markdown a{
        text-decoration:underline;
    }
    button{
        appearance:none;
        border:none;
        background-color:transparent;
        font-weight:600;
        font-size:15px;
        cursor:pointer;
        border:2.5px solid var(--blackColor);
        &:focus,
        &:active{
            outline:none
        }

    }
`;
