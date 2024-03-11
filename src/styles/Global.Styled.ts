import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyled = createGlobalStyle `
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  button {
    background-color: unset;
    border: none;
  }
  
  section {
    background-color: ${theme.colors.primaryBg};
  }
  
  h1 {
    color: #D9D9D9;
  }
  
  h2, h3, span, p {
    color: #CCCCCC;
  }
  
`