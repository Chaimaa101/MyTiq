import { createContext, useState } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [subscribers, setSubscribers] = useState(() => {
    // Charger les abonnés depuis localStorage si présents
    const saved = localStorage.getItem("subscribers");
    return saved ? JSON.parse(saved) : [];
  });

  const addSubscriber = (email) => {
    const newSub = { email, date: new Date().toLocaleDateString("fr-FR") };
    const updated = [newSub, ...subscribers];
    setSubscribers(updated);
    // Sauvegarder dans localStorage
    localStorage.setItem("subscribers", JSON.stringify(updated));
  };

  return (
    <Context.Provider value={{ subscribers, addSubscriber }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
