import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            <h2>Favorites</h2>
            {favorites.length === 0 ? (
                <div className="favorite-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <h2>Start adding movies, and they will appear here</h2>
                </div>
            ) : (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;