import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
