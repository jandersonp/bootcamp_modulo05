import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
   min-height: 100%;
  }

  html {
    background: #d1d5da;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #191920;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
