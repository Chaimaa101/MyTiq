import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import API from "../services/API";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

  // Get CSRF cookie
  const csrf = async () => {
   axios.get("http://localhost:8000/sanctum/csrf-cookie", {
  withCredentials: true
})
  };

  // CHECK AUTH
  const checkAuth = async () => {
    try {
      await csrf(); // ADD THIS
      const res = await axios.get(`${API}/user`, {
        withCredentials: true,
      });
      setUser(res.data.data);
      alert(res.data.message)
    } catch (error) {
      setUser(null);
      alert(error.data.data)

    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // LOGIN
  const login = async (formData) => {
    await csrf(); // ADD THIS
    const res = await axios.post(
      `${API}/login`,
      formData,
      { withCredentials: true }
    );
    await checkAuth();
      alert(res.data.message)

  };

  // REGISTER
  const register = async (formData) => {
    await csrf(); // ADD THIS
    const res = await axios.post(
      `${API}/register`,
      formData,
      { withCredentials: true }
    );
    await checkAuth();
      alert(res.data.message)

  };

  // LOGOUT
  const logout = async () => {
    await csrf(); // ADD THIS
    const res = await axios.post(
      `${API}/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
      alert(res.data.message)

  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
