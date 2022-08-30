import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-green: #00A48B;
    --color-green2: #6FEFD2;
    --color-green3: #0B362F;
    --color-white: #FFFFFF;
    --color-grey: #F2F2F2;
    --color-transparencia: #99A8A5;
   
    font-size: 60%;   
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;