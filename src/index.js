import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalState from "./contexts/basket/GlobalState";
import { AuthProvider } from "./contexts/auth/AuthContext";
import { CreateProductProvider } from "./contexts/product/CreateProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <GlobalState>
      <CreateProductProvider>
        <App />
      </CreateProductProvider>
    </GlobalState>
  </AuthProvider>
  // </React.StrictMode>
);
