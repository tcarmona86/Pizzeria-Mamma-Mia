import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("email");
    if (savedToken) setToken(savedToken);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
  }, [token, email]);

  // 🔹 Login
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        console.log("Login OK:", data);
      } else {
        throw new Error(data.error || "Error en login");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // 🔹 Register
  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);   
        setEmail(data.email);
        console.log("Registro OK:", data);
      } else {
        throw new Error(data.error || "Error en registro");
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  // Cierre de sesión
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    console.log("Sesión cerrada");
  };

  // Perfil
  const getProfile = async () => {
    if (!token) return null;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setProfile(data);
        console.log("Perfil obtenido:", data);
        return data;
      } else {
        throw new Error(data.error || "Error al obtener perfil");
      }
    } catch (error) {
      console.error("Profile error:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, profile, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}
