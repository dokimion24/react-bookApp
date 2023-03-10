import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
