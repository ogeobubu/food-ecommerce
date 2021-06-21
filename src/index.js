import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreProvider from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

reportWebVitals();
