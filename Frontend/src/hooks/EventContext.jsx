import axios from "axios";
import { createContext, useEffect, useState } from "react";
import API from "../pages/services/API";

export const EventContext = createContext(null);

function EventProvider({ children }) {
  const [events, setevents] = useState([]);
  const [errors, setErrors] = useState(null);

 
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/events`);
        setevents(response.data.data);
      } catch (error) {
        console.error(` Fetch error at events:`, error);
        setErrors(response.data.error)
      }
    };
 useEffect(() => {
    fetchData();
  }, []);

  const ajouter = async (data) => {
    try {
      const formDataToSend = new FormData();

      for (let key in data) {
        formDataToSend.append(key, data[key]);
      }
       const response = await axios.post(`${API}/events`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message)
    } catch (error) {
      console.error(" Add error:", error);
        setErrors(response.data.errors)
    }
  };

  const modifier = async (data, event) => {
    try {
      const formDataToSend = new FormData();

      for (let key in data) {
        formDataToSend.append(key, data[key]);
      }

      const response = await axios.post(
        `${API}/events/${event}?_method=PUT`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error(" Update error:", error);
        setErrors(response.data.errors)

    }
  };

  const supprimer = async (event) => {
    try {
      const response = await axios.delete(`${API}/events/${event}`);

      alert(response.data.message);
    } catch (error) {
      console.error(" Delete error:", error);
      setErrors(response.data.error)

    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        ajouter,
        modifier,
        supprimer,
        errors
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;
