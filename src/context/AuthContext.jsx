import { createContext, useState, useEffect } from "react";
import api from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    // 🔄 Sync automatique du token avec axios + localStorage
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    // 🔐 Login : retourne true / false selon succès
    async function login(email, password) {
        try {
            const response = await api.post("/login_check", {
                email,
                password,
            });

            setToken(response.data.token);
            return { success: true };
        } catch (error) {
            return { success: false, message: "Identifiants invalides"};
        }
    }

    // 🚪 Déconnexion
    function logout() {
        setToken(null);
        setUser(null);
    }

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
