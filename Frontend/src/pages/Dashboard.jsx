import React, { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { NewsLetterContext } from "../context/NewsLetterContext";
import { TicketContext } from "../context/TicketContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [page, setPage] = useState("events");

  const { events,supprimer } = useContext(EventContext);
  const { abonnees } = useContext(NewsLetterContext);
  const { tickets } = useContext(TicketContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  
      <h1 className="text-2xl font-bold">Tableau de bord Admin</h1>
      <p className="text-gray-600 mb-6">
        Gérez vos événements, tickets et abonnés
      </p>

  
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPage("events")}
          className={`px-4 py-2 rounded-lg ${
            page === "events" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Événements
        </button>
        <button
          onClick={() => setPage("tickets")}
          className={`px-4 py-2 rounded-lg ${
            page === "tickets" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Tickets
        </button>
        <button
          onClick={() => setPage("newsletter")}
          className={`px-4 py-2 rounded-lg ${
            page === "newsletter" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Newsletter
        </button>
      </div>

      {page === "events" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Gestion des Événements</h2>
            <Link to="/addEvent" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              + Nouvel événement
            </Link>
          </div>

  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.length === 0 ? (
              <p className="text-gray-500">Aucun événement disponible.</p>
            ) : (
              events.map((event, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow">
                  <img
                    src={event.image }
                    alt="Event"
                    className="rounded-lg mb-3 w-150 h-50"
                  />

                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {event.city} — {event.date}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {event.capacity} places disponibles
                  </p>

                  <hr className="my-3" />

                  <div className="flex justify-between items-center">
                    <div className="font-bold text-lg">{event.price} DH</div>
                    <div className="flex gap-2">
                      <Link to="/editEvent" className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        ✏️
                      </Link>
                      <button onClick={supprimer} className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        ❌
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {page === "tickets" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Gestion des Tickets</h2>

          {tickets.length === 0 ? (
            <p className="text-gray-500">Aucun ticket pour le moment.</p>
          ) : (
            tickets.map((ticket, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow mb-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-semibold">
                      {ticket.event.title || "Événement"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {ticket.user.name || "Utilisateur"}
                    </p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm">
                  Billet: #{ticket.id} — {ticket.event.price} DH
                </p>
                <p className="text-gray-500 text-sm">
                  Événement: {ticket.event?.date}
                </p>
                <p className="text-gray-500 text-sm">
                  Acheté le: {ticket.created_at}
                </p>

                <div className="font-bold text-lg">{ticket.event.price} DH</div>
              </div>
            ))
          )}
        </div>
      )}

      {page === "newsletter" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Abonnés Newsletter</h2>

          {abonnees?.length === 0 ? (
            <p className="text-gray-500">Aucun abonné pour le moment.</p>
          ) : (
            abonnees?.map((sub, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between items-center"
              >
                <div>
                  <span className="font-medium">{sub.email}</span>
                  <p className="text-gray-500 text-sm">
                    Inscrit le {sub.date}
                  </p>
                </div>
                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                  Actif
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
