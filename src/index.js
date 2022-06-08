import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from "./reportWebVitals";

import "./App.css";

import { Resume } from "./Pages/Resume";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Resume />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
