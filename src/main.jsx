import React from "react"
import ReactDom from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App/App.jsx"
import AuthProvider from "./context/AuthContext"
import "./styles.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
