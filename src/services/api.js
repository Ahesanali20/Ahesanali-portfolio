import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL;

if (import.meta.env.PROD && !apiBaseUrl) {
  throw new Error("VITE_API_URL is missing from the production environment.");
}

const api = axios.create({
  baseURL: apiBaseUrl || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
