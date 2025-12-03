import axios from "axios";
import { useEffect, useState } from "react";
import API from "./API";

function ContextGenerale({ children}) {
  const [tickets, settickets] = useState([]);

 
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/tickets`);
      settickets(response.data.data)
    } catch (error) {
      console.error(` Fetch error at tickets:`, error);
    }
  };

   fetchData()
  }, []);

  const ajouter = async (data,event) => {
    try {
       await axios.post(`${API}events/${event}/tickets/`, data, {
        headers: { "Content-Type": "application/json" },
      });

      alert(" Added successfully!");
    } catch (error) {
      console.error(" Add error:", error);
      alert("Error while adding!");
    }
  };

  const modifier = async ( data, ticket,event) => {
    try {
    await axios.put(
        `${API}events/${event}/tickets/${ticket}`,
        data
      );

      alert("✔ Updated successfully!");
    } catch (error) {
      console.error(" Update error:", error);
      alert("Error while updating!");
    }
  };

  const supprimer = async (event,ticket) => {
    try {
      await axios.delete(`${API}events/${event}/tickets/${ticket}`);

      alert(" Deleted successfully!");
    } catch (error) {
      console.error(" Delete error:", error);
      alert("Error while deleting!");
    }
  };

  return (
    <Context.Provider
      value={{
        tickets,
        ajouter,
        modifier,
        supprimer,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextGenerale;
