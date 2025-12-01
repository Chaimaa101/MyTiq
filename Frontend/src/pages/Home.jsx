import HeroSection from "../components/HeroSection";
import EventsList from "./EventsList";
import NewsLetter from "../components/newsLetter";
import EventForm from "./EventForm";

function Home() {
  const events = []

  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        <HeroSection />
        <EventsList events={events} />
      </div>

      <EventForm />
      <NewsLetter />
    </>
  );
}

export default Home;
