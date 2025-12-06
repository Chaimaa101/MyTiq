import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  

  // CHECK AUTH
  const checkAuth = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/user", {
        withCredentials: true,
      });
      setUser(res.data.data);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // LOGIN
  const login = async (formData) => {
    await axios.post(
      "http://127.0.0.1:8000/api/login",
      formData,
      { withCredentials: true }
    );

    await checkAuth();
  };

  // REGISTER
  const register = async (formData) => {
    await axios.post(
      "http://127.0.0.1:8000/api/register",
      formData,
      { withCredentials: true }
    );

    await checkAuth();
  };

  // LOGOUT
  const logout = async () => {
    await axios.post(
      "http://127.0.0.1:8000/api/logout",
      {},
      { withCredentials: true }
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
