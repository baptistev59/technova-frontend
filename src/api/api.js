import axios from "axios";

// Configuration de l'API
const api = axios.create({
    baseURL: "http://localhost:8000/api",
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
    (_error) => Promise.reject(_error)
);

export default api;
