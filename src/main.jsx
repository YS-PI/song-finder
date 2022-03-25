import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LetrasProvider } from "./context/LetrasProvider";

ReactDOM.render(
  <LetrasProvider>
    <App />
  </LetrasProvider>,
  document.getElementById("root")
);
