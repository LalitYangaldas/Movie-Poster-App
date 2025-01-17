import { Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./contexts/MovieContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
    return (
        <AuthProvider>
            <MovieProvider>
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/favorites"
                            element={
                                <PrivateRoute>
                                    <Favorites />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/movie/:id"
                            element={
                                <PrivateRoute>
                                    <MovieDetails />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </main>
            </MovieProvider>
        </AuthProvider>
    );
}

export default App;