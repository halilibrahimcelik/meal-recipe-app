import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);