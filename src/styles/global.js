import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
   min-height: 100%;
   font-family: Roboto, sans-serif;
  }

  html {
    background: #d1d5da;
    -webkit-font-smoothing: antialiased !important;

  }

  body, input, button {
    color: #191920;
    font-size: 14px;

  }

  button {
    cursor: pointer;
  }
`;
