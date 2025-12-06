import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import EventForm from "./pages/EventForm"
import EventsList from "./pages/EventsList"
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import MesTickets from "./pages/MesTickets"
import DetailsEvent from "./pages/DetailsEvent";

function App() {
  return (
      <Routes>
          <Route path="/connexion" element={<Connexion />} />
        {/* Routes qui utilisent le layout avec Navbar + Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<DetailsEvent />} />
        </Route>

        {/* Routes indépendantes (Connexion / Inscription) */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/addEvent" element={<EventForm />}/>
          <Route path="/events" element={<EventsList />}/>
          <Route path="/mestickets" element={<MesTickets />}/>

      </Route>
      </Routes>
  );
}

export default App;
