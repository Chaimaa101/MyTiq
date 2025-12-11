import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


  const checkAuth = async () => {
    try {
     
      const res = await API.get(`/user`)
     
      setUser(res.data);
    } catch (error) {
      setUser(null);
      alert(response.data.errors)

    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (formData) => {
  
    const res = await API.post(
      `/login`,
      formData
    );
      localStorage.setItem("token", res.data.token);
    await checkAuth();
      alert(res.data.message)

  };

  const register = async (formData) => {
    const res = await API.post(
      `/register`,
      formData
    );
    await checkAuth();
      alert(res.data.message)

  };

  const logout = async () => {
 
    const res = await API.post(
      `/logout`
    );
    localStorage.removeItem("token");
    setUser(null);
      alert(res.data.message)

  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
