import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";

//개발 환경에서는 strictMode를 사용하면 두번 실행하여 두번째시 실행시 문제가 있지 않았는지 체크한다.
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
