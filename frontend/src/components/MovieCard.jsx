import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick() {
        if (favorite) {
            removeFromFavorite(movie.id);
        } else {
            addToFavorite(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/500x750?text=No+Poster+Available"
                    }
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;