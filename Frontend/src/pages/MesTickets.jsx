import { useContext } from "react";
import { TicketContext } from "../hooks/TicketContext";


function MesTickets() {
  const { tickets, errors } = useContext(TicketContext);
  console.log(tickets)
  console.log( newsletters)

  return (
    <>
      <h1>Mes Tickets</h1>

      {errors && (
        <div className="bg-red-200 text-red-800 p-3 rounded mb-3">
          {errors}
        </div>
      )}

      {tickets.length === 0 && <p>Aucun ticket trouvé.</p>}

      {tickets.map((ticket) => (
        <h1 key={ticket.id}>{ticket.date}</h1>
      ))}
   
      {newsletters.length === 0 && <p>Aucun ticket trouvé.</p>}

      {newsletters.map((newsletter) => (
        <h1 key={newsletter.id}>{newsletter.date}</h1>
      ))}
    </>
  );
}

export default MesTickets;
