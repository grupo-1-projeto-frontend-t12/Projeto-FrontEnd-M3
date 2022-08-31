import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/Global Styles/Global StylesCSS";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <GlobalStyle />
        <App />
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
