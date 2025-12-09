import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import EventForm from "./pages/EventForm"
import EventsList from "./pages/EventsList"
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import MesTickets from "./pages/MesTickets"
import DetailsEvent from "./pages/DetailsEvent";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/addEvent" element={<EventForm />}/>
          <Route path="/events" element={<EventsList />}/>
          <Route path="/mestickets" element={<MesTickets />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="details/:id" element={<DetailsEvent />} />
          <Route path="events/edit/:id" element={<DetailsEvent />} />


      </Route>
      </Routes>
  );
}

export default App;
