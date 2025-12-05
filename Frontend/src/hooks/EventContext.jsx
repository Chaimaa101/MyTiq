import axios from "axios";
import { useEffect, useState } from "react";
import Context from "../services/Context";
import API from "../services/API";

function ContextGenerale({ children }) {
  const [events, setevents] = useState([]);

 
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/events`);
      setevents(response.data.data)
    } catch (error) {
      console.error(` Fetch error at events:`, error);
    }
  };

   fetchData()
  }, []);

  const ajouter = async (data) => {
    try {
       const formDataToSend = new FormData();

      for (let key in data) {
      formDataToSend.append(key, data[key]);
    }

      const res = await axios.post(`${API}/events`, data, {
        headers: { "Content-Type": "application/json" },
      });
return res.data
    } catch (error) {
      console.error(" Add error:", error);
    }
  };

  const modifier = async ( data, event) => {
    try {
    await axios.put(
        `${API}/events/${event}`,
        data
      );

      alert("Updated successfully!");
    } catch (error) {
      console.error(" Update error:", error);
      alert("Error while updating!");
    }
  };

  const supprimer = async (event) => {
    try {
      await axios.delete(`${API}/events/${event}`);

      alert(" Deleted successfully!");
    } catch (error) {
      console.error(" Delete error:", error);
      alert("Error while deleting!");
    }
  };

  return (
    <Context.Provider
      value={{
        events,
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
