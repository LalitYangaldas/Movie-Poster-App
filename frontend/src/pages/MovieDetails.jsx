import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits, getSimilarMovies, getMovieTrailer } from "../services/api";
import "../css/MovieDetails.css";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [details, credits, similar, trailer] = await Promise.all([
                    getMovieDetails(id),
                    getMovieCredits(id),
                    getSimilarMovies(id),
                    getMovieTrailer(id),
                ]);
                setMovie(details);
                setCredits(credits);
                setSimilarMovies(similar);
                setTrailer(trailer);
            } catch (err) {
                setError("Failed to fetch movie details.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="movie-details">
            <div className="movie-header">
                <h1>{movie.title}</h1>
                <p>{movie.release_date} | {movie.runtime} mins</p>
            </div>
            <div className="movie-content">
                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie-info">
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Cast</h2>
                    <div className="cast">
                        {credits.cast.slice(0, 5).map((actor) => (
                            <div key={actor.id} className="actor">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    alt={actor.name}
                                />
                                <p>{actor.name}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Trailer</h2>
                    {trailer && (
                        <div className="trailer">
                            <iframe
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="Movie Trailer"
                                allowFullScreen
                            />
                        </div>
                    )}
                    <h2>Similar Movies</h2>
                    <div className="similar-movies">
                        {similarMovies.slice(0, 5).map((movie) => (
                            <div key={movie.id} className="similar-movie">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <p>{movie.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;