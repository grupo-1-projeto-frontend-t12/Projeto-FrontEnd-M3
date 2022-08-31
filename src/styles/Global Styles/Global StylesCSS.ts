import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-green: #00A48B;
    --color-green2: #6FEFD2;
    --color-green3: #0B362F;
    --color-white: #FFFFFF;
    --color-grey: #F2F2F2;
    --color-transparencia: #99A8A5;
    --color-fontescura: #0B362F; 
    --bg-color: rgb(18,128,110);
    --bg-color-linear: linear-gradient(155deg, rgba(18,128,110,1) 0%, rgba(0,164,139,1) 53%, rgba(111,239,210,1) 100%);

    font-family: "Inter", sans-serif;
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
    overflow-x: hidden;
  }
  button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }
`;

export default GlobalStyle;
