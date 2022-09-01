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
    --color-blue: #169EDB;
    --bg-color: rgb(18,128,110);
    --bg-color-linear: linear-gradient(152deg, rgba(22,158,219,1) 0%, rgba(108,230,202,1) 53%, rgba(108,230,202,1) 100%);


    font-family: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   
  }

  body{   
    width: 100vw;
    height: 100vh;      
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  #root{   
    width: 100vw;
    height: 100vh;
    display  :flex ;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }

  input:focus {
    border: 1px solid var(--color-green2);
  }

  input:invalid {
    border: 1px solid red;
  }
`;

export default GlobalStyle;