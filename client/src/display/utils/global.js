import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 16px;
    background-color: ${(props) => props.theme.colors.mainLight};
    box-sizing: border-box;
    --color-main: ${(props) => props.theme.colors.main}
    --color-mainDark: ${(props) => props.theme.colors.mainDark};
    --color-mainLight: ${(props) => props.theme.colors.mainLight};
    --color-mainLighter: ${(props) => props.theme.colors.mainLighter};
    --color-text: ${(props) => props.theme.colors.textColor};
    --color-white: ${(props) => props.theme.colors.mainWhite};
    --color-errorRed: ${(props) => props.theme.colors.errorRed};
    --shadow: ${(props) => props.theme.colors.shadow};
    --color: ${(props) => props.theme.colors.textColor};
   
  }
  body {
    font-family: 'Roboto', sans-serif, 'Lato';
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    /* Hide scrollbar for IE and Edge */
    -ms-overflow-style: none;
    /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
 
  }
  a, button {
    cursor: pointer;
  }
  a, input, textarea, button {
    color: ${(props) => props.theme.colors.mainDark}; 
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;
