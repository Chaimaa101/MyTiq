import React, { useState, useContext } from "react";
import Context from "../services/Context.jsx"; // import du context

export default function Dashboard() {
  const [page, setPage] = useState("events");
  const { subscribers } = useContext(Context); // récupérer les abonnés

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold">Tableau de bord Admin</h1>
      <p className="text-gray-600 mb-6">Gérez vos événements, tickets et abonnés</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPage("events")}
          className={`px-4 py-2 rounded-lg ${page === "events" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Événements
        </button>
        <button
          onClick={() => setPage("tickets")}
          className={`px-4 py-2 rounded-lg ${page === "tickets" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Tickets
        </button>
        <button
          onClick={() => setPage("newsletter")}
          className={`px-4 py-2 rounded-lg ${page === "newsletter" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Newsletter
        </button>
      </div>

      {/* PAGE ÉVÉNEMENTS */}
      {page === "events" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Gestion des Événements</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              + Nouvel événement
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <img src="/event.jpg" alt="Event" className="rounded-lg mb-3" />
              <h3 className="text-lg font-semibold">Digital Now 2025</h3>
              <p className="text-gray-600 text-sm">Casablanca — 18 Décembre 2025</p>
              <p className="text-gray-500 text-sm">5000 places disponibles</p>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div className="font-bold text-lg">550DH</div>
                <div className="flex gap-2">
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">✏️</button>
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">❌</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <img src="/event.jpg" alt="Event" className="rounded-lg mb-3" />
              <h3 className="text-lg font-semibold">GITEX Africa</h3>
              <p className="text-gray-600 text-sm">Marrakech — 14 Avril 2025</p>
              <p className="text-gray-500 text-sm">500 places disponibles</p>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div className="font-bold text-lg">300DH</div>
                <div className="flex gap-2">
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">✏️</button>
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">❌</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE TICKETS */}
      {page === "tickets" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Gestion des Tickets</h2>

          {/* Ticket 1 */}
          <div className="bg-white p-4 rounded-xl shadow mb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">Digital Now 2025</h3>
                <p className="text-sm text-gray-500">Chaimae Afkir</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Billet: #T001 — 550DH</p>
            <p className="text-gray-500 text-sm">Événement: 15 Décembre 2025</p>
            <p className="text-gray-500 text-sm">Acheté: 10 Novembre 2025</p>
            <div className="font-bold text-lg">550DH</div>
          </div>

          {/* Ticket 2 */}
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">GITEX Africa</h3>
                <p className="text-sm text-gray-500">Sara Belkacem</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Billet: #T002 — 890DH</p>
            <p className="text-gray-500 text-sm">Événement: 22 Décembre 2025</p>
            <p className="text-gray-500 text-sm">Acheté: 12 Novembre 2025</p>
            <div className="font-bold text-lg">390DH</div>
          </div>
        </div>
      )}

      {/* PAGE NEWSLETTER */}
      {page === "newsletter" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Abonnés Newsletter</h2>
          {subscribers.length === 0 ? (
            <p className="text-gray-500">Aucun abonné pour le moment.</p>
          ) : (
            subscribers.map((sub, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between items-center">
                <div>
                  <span className="font-medium">{sub.email}</span>
                  <p className="text-gray-500 text-sm">Inscrit le {sub.date}</p>
                </div>
                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">Actif</span>
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
}
