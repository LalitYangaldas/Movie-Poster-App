import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on initial render
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, []);

    // Save favorites to localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorite = (movie) => {
        if (!favorites.some((fav) => fav.id === movie.id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    const removeFromFavorite = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};