import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookieProvider } from "react-cookie";

ReactDOM.render(
  <CookieProvider>
    <App />
  </CookieProvider>,
  document.getElementById("root")
);