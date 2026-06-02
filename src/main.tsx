import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import OnFarm from "./pages/OnFarm";
import Processing from "./pages/Processing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/on-farm" element={<OnFarm />} />
        <Route path="/processing" element={<Processing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
