import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    --adviceFont: 28px;
    background-color: hsl(218, 23%, 16%);
  }

  body {
    margin: 0 auto;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Manrope, Helvetica;
  }

  #root {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyles;
