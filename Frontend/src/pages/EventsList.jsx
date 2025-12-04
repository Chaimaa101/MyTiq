import EventCard from "../components/EventCard";


const EventsList = ({ events }) => {
  
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-900">Événements à la une</h2>
      <p className="text-gray-500 mb-6">
        Découvrez notre sélection d'événements exceptionnels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            place={event.place}
            capacity={event.capacity}
            price={event.price}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
