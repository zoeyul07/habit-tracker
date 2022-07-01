import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
