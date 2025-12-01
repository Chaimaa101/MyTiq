
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import EventForm from "./pages/EventForm"
import EventsList from "./pages/EventsList"
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

function App() {
  return (
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/addEvent" element={<EventForm />}/>
          <Route path="/events" element={<EventsList />}/>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Route>
      </Routes>
  );
}

export default App;
