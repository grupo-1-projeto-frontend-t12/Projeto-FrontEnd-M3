import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
   
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    background: green;
  }

  body {
    background: var(--color-backgroundUncolor);
    color: var(--color-grey-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: black;
  }

  button {
    cursor: pointer;
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-20);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-20);
 
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-100);
  }
`;

export default GlobalStyle;