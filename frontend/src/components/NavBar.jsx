import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import "../css/Navbar.css";

function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated, username, logout } = useAuth();

    // Theme state and toggle logic
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Logout logic
    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    // If not authenticated, don't render the NavBar
    if (!isAuthenticated) return null;

    return (
        <nav className="navbar">
            <div className="navbar-links">
                {/* Theme toggle button */}
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "light" ? "🌙" : "☀️"}
                </button>

                {/* Logout button (only shown if user is authenticated) */}
                {username && (
                    <button onClick={handleLogout} className="logout-button">
                        Logout ({username})
                    </button>
                )}
            </div>
        </nav>
    );
}

export default NavBar;