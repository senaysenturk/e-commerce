import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalState from "./contexts/basket/GlobalState";
import { AuthProvider } from "./contexts/auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
      <GlobalState>
        <App />
      </GlobalState>
    </AuthProvider>
);
