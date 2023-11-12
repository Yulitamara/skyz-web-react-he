import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import "./assets/scss/base.scss";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
