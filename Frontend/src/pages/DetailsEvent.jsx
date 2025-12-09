import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TicketContext } from "../context/TicketContext";

function DetailsEvent() {
  const { id } = useParams();
    const { reserver } = useContext(TicketContext);
  
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

const AcheterTicket = async () => {
 await reserver(id)
// navigate('/mestickets')
}

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Erreur : impossible de charger l'événement.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl animate-pulse">
        Chargement...
      </div>
    );
  }

  if (!event) {
    return (
      <p className="text-center mt-20 text-xl">
        Impossible de trouver l'événement.
      </p>
    );  
  }

  return (

    <div className="mt-6 max-w-5xl mx-auto px-4 pb-12 animate-fadeIn">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <img
          src={event?.image }
          alt={event.title}
          className="rounded-lg shadow-lg hover:scale-105 transition-transform"
        />

        <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-lg font-semibold text-gray-600">Prix du billet</p>
          <p className="text-3xl font-bold text-red-600 mt-2">{event.price} DH</p>

          <button
            onClick={AcheterTicket}
            className="mt-6 w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
          >
            Acheter un billet
          </button>

          <ul className="mt-6 text-gray-600 space-y-1 text-sm">
            <li>✓ Confirmation instantanée</li>
            <li>✓ Billet électronique PDF</li>
            <li>✓ Remboursement possible</li>
          </ul>
        </div>
      </div>


      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8">{event.title}</h1>


      {/* INFO SECTION */}
      <div className="mt-10 text-gray-800 space-y-6">

        <div className="flex items-center gap-2">
          <span>📅</span> {event.date}
        </div>

        <div className="flex items-center gap-2">
          <span>📍</span> {event.place}
        </div>

        <div className="flex items-center gap-2">
          <span>🎟️</span> {event.capacity} places disponibles
        </div>

        <h2 className="text-2xl font-bold mt-10">À propos de l'événement</h2>

        <p>{event.description}</p>

      </div>
    </div>
  );
}

export default DetailsEvent;
