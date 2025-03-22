import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    overflow-x: hidden;
  }

  .header-container {
    position: relative;
    z-index: 100;
  }

  .content-container  {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 1921px) and (max-width: 2560px) {
    .content-container {
      transform: scale(1.25);
      transform-origin: top center;
      width: 80%;
    }
  }

  @media (min-width: 2561px) {
    .content-container {
      transform: scale(1.5);
      transform-origin: top center;
      width: 66.67%;
    }
  }
`;
