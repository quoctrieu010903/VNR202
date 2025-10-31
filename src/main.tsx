// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
// 1. Import BrowserRouter từ thư viện router
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Bọc toàn bộ ứng dụng <App /> của bạn bằng <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
