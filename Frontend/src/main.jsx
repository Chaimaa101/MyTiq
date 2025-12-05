import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import EventProvider from "./hooks/EventContext.jsx";
import AuthProvider from "./hooks/AuthContext.jsx";
import TicketProvider from "./hooks/TicketContext.jsx";
import NewsLetterProvider from "./hooks/NewsLetterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <TicketProvider>
            <NewsLetterProvider>
              <App />
            </NewsLetterProvider>
          </TicketProvider>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
