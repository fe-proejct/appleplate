import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  #root {
    --background-color: #242424;
    --sprites_desktop : url("/images/sprites_desktop.png");
    --sprites_mobile : url("/images/sprites_mobile.png");

    color: black;
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    text-decoration: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
