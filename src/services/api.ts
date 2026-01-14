import axios from "axios";

// Usa a URL da variável de ambiente ou fallback para localhost
const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/"; // VITE_API_URL=https://gamesforyou.onrender.com/

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
