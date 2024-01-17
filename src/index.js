import "./index.css";

import { Toaster } from "react-hot-toast";

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { AppProvider } from "./Context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <HelmetProvider>
        <App />
        <Toaster />
      </HelmetProvider>
    </React.StrictMode>
  </AppProvider>
);
