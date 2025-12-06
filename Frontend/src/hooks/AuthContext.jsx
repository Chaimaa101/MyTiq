import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/user", {
        withCredentials: true,
      });
      setUser(res.data.data)

    } catch (error) {
      return null; 
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);


  

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
