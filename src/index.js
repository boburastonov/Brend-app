import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(
  <React.StrictMode>;
    <div className="bg"></div>
    <App />
  </React.StrictMode>
);
