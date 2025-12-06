
import HeroSection from '../components/HeroSection'
import EventsList from './EventsList'
import NewsLetter from '../components/newsLetter'

function Home() {

  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        <HeroSection />
        <EventsList />
      </div>
      <NewsLetter />
    </>
  );
}

export default Home;
