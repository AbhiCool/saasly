import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SiteContext from "./context/SiteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiteContext>
      <App />
    </SiteContext>
  </StrictMode>
);
