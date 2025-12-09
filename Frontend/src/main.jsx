import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import EventProvider from "./context/EventContext.jsx";
import axios from "axios";
import AuthProvider from "./context/AuthContext.jsx";
import TicketProvider from "./context/TicketContext.jsx";
import NewsLetterProvider from "./context/NewsLetterContext.jsx";
import DashboardProvider from "./context/DashboardContext.jsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DashboardProvider>
      <AuthProvider>
        <EventProvider>
          <TicketProvider>
            <NewsLetterProvider>
              <App />
            </NewsLetterProvider>
          </TicketProvider>
        </EventProvider>
      </AuthProvider>
      </DashboardProvider>
    </BrowserRouter>
  </StrictMode>
);
