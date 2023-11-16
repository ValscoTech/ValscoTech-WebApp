import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./Context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
</AppProvider>
);