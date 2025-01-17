import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/auth/register/", {
                username,
                password,
            });

            if (response.data.status === "success") {
                navigate("/login");
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleRegister} className="register-form">
                <h2>Register</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;