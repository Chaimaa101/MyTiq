import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ContextGenerale from "./hooks/EventContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <ContextGenerale>
      <App />
    </ContextGenerale>
    </BrowserRouter>
  </StrictMode>
);
