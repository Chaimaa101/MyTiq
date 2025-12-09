import axios from "axios";
import { useEffect, useState, createContext } from "react";
import API from "../services/API";

export const TicketContext = createContext();

function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);


  const fetchTickets = async () => {
    try {
      const response = await axios.get(`${API}/tickets`);
      setTickets(response.data.data);
      setErrors(null);
              setLoading(false)

    } catch (err) {
      console.error("Fetch tickets error:", err);
      setErrors(err.response?.data?.error || "Erreur lors du chargement");
    setLoading(false)

    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const reserver = async ( event) => {
    try {
      const response = await axios.post(
        `${API}/events/${event}/tickets`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert(response.data.message || "Added successfully!");
      fetchTickets();
    } catch (err) {
      console.error("Add error:", err);
     setErrors(err.response?.data?.message || err.response?.data?.errors || "Error while adding");
    }
  };


  const cancel = async (ticket,event ) => {
    try {

      const response = await axios.delete(
        `${API}/events/${event}/tickets/${ticket}`
      );

      alert(response.data.message || "Deleted successfully!");
      fetchTickets();
    } catch (err) {
      console.error("Delete error:", err);
     setErrors(err.response?.data?.message || err.response?.data?.errors || "Error while adding");
     
    }
  };

  function downloadTicket(eventId) {
  axios.post(`/api/events/${eventId}/tickets`, {}, {
    responseType: 'blob' 
  })
  .then(res => {
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    window.open(url, '_blank');

    setTimeout(() => window.URL.revokeObjectURL(url), 10000);
  })
  .catch(err => {
    console.error(err);
  });
}
  return (
    <TicketContext.Provider
      value={{
        tickets,
        errors,
        reserver,
        cancel,
        loading,
        downloadTicket,
        refreshTickets: fetchTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export default TicketProvider;
