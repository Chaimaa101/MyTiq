import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import EventsList from "./pages/EventsList";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Dashboard from "./pages/Dashboard";
import DetailsEvent from "./pages/DetailsEvent";
import { ContextProvider } from "./services/Context.jsx";

function App() {
  return (
    <ContextProvider>
      <Routes>
        {/* Routes indépendantes */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        {/* Routes avec Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<DetailsEvent />} />
          <Route path="addEvent" element={<EventForm />} />
          <Route path="events" element={<EventsList />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
