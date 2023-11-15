import React from "react";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";
import { AppProvider } from "./Context/BlogContext";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <AppProvider>
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </AppProvider>,
    root
  );
} else {
  render(
    <AppProvider>
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </AppProvider>,
    root
  );
}

if (module.hot) {
  module.hot.accept();
}
