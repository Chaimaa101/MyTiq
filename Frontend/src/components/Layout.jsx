import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Ici s'affichent Home ou DetailsEvent */}
      </main>
      <Footer />
    </>
  );
}
