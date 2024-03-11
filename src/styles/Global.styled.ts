import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: unset;
  }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: unset;
  }
`
