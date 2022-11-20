import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./fonts/chirp/chirp-bold-web.woff";
import "./fonts/chirp/chirp-heavy-web.woff";
import "./fonts/chirp/chirp-regular-web.woff";
import "./fonts/chirp/chirp-medium-web.woff";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
