import HeroSection from "../components/HeroSection";
import EventsList from "./EventsList";
import NewsLetter from "../components/newsLetter";
import { useContext } from "react";
import Context from "../services/Context";


function Home() {
   const {  events } = useContext(Context);
  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        <HeroSection />
        <EventsList events={events} />
      </div>
      <NewsLetter />
    </>
  );
}

export default Home;
