import axios from "axios";
import { createContext, useEffect, useState } from "react";
import API from "../pages/services/API";

export const NewsLetterContext = createContext(null);


function NewsLetterProvider({ children }) {
  const [abonnees, setAbonnees] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/newsletters`);
        setAbonnees(response.data.data);
      } catch (error) {
        console.error(` Fetch error at events:`, error);
        setErrors(response.data.error)
      }
    };

    fetchData();
  }, []);

  const abonner = async (email) => {
    try {
    
      const response = await axios.post(`${API}/abonner`, email,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(" Add error:", error);
      console.log(response.data.error);

    }
  };

  const cancel = async (abonne) => {
    try {
      const response = await axios.delete(`${API}/desabonner/${abonnee}`);

      alert(response.data.message);
    } catch (error) {
      console.error(" Delete error:", error);
      setErrors(response.data.error);
    }
  };

  return (
    <NewsLetterContext.Provider
      value={{
        abonnees,
        abonner,
        errors,
        cancel,
      }}
    >
      {children}
    </NewsLetterContext.Provider>
  );
}

export default NewsLetterProvider;
