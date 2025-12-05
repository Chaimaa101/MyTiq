import axios from "axios";
import { useEffect, useState, createContext } from "react";
import API from "../pages/services/API";

export const TicketContext = createContext();

function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`${API}/tickets`);
      setTickets(response.data.data);
      setErrors(null);
    } catch (err) {
      console.error("Fetch tickets error:", err);
      setErrors(err.response?.data?.error || "Erreur lors du chargement");
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const reserver = async (data, ticket) => {
    try {
      const response = await axios.post(
        `${API}/events/${ticket}/tickets`,
        data,
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

  return (
    <TicketContext.Provider
      value={{
        tickets,
        errors,
        reserver,
        cancel,
        refreshTickets: fetchTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export default TicketProvider;
