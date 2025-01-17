import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );
    const [username, setUsername] = useState(localStorage.getItem("username"));

    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:8000/auth/login/", {
                username,
                password,
            });

            if (response.data.status === "success") {
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("username", response.data.username);
                setIsAuthenticated(true);
                setUsername(response.data.username);
                return { success: true };
            }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Login failed",
            };
        }
    };

    const logout = async () => {
        try {
            await axios.post("http://localhost:8000/auth/logout/");
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("username");
            setIsAuthenticated(false);
            setUsername(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const value = {
        isAuthenticated,
        username,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};