import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DetailsEvent from "./pages/DetailsEvent";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes qui utilisent le layout avec Navbar + Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:type/:id" element={<DetailsEvent />} />
        </Route>

        {/* Routes indépendantes (Connexion / Inscription) */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
