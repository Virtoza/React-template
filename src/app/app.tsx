import React from "react";
import ReactDOM from "react-dom/client";
import "../core/srtylesheet/basic.css";
import appProvider from "./app.provider";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={appProvider} />
  </React.StrictMode>,
);
