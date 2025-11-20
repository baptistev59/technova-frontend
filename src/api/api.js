import axios from "axios";

// 🔥 On utilise la variable Vite en priorité, sinon fallback localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

console.log("📡 API utilisée =", API_URL);

// Configuration de l'API Axios
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Intercepteur : ajoute automatiquement le token si présent
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
