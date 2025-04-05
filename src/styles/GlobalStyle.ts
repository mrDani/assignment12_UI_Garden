import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: radial-gradient(circle, #0d1a2b, #0a0a0a);
    color: white;
    overflow-x: hidden;
  }

  section {
    padding: 60px 0;
  }
  a{
    color: pink;
    text-decoration: none;
   }
`;
