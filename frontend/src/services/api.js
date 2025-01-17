// src/services/api.js
const API_KEY = "22a6d7a1aa41824e7ba8b7507d0910f6"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3/"; // Corrected base URL

// Fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        return data.results; // Ensure this returns an array of movies
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};

// Search movies
export const searchMovies = async (query, genre = "", year = "") => {
    try {
        const response = await fetch(
            `${BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
                query
            )}&with_genres=${genre}&year=${year}`
        );
        if (!response.ok) {
            throw new Error("Failed to search movies");
        }
        const data = await response.json();
        return data.results; // Ensure this returns an array of movies
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};

// Fetch movie genres
export const getGenres = async () => {
    try {
        const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch genres");
        }
        const data = await response.json();
        return data.genres; // Returns an array of genres
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};

// Fetch movie details
export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        return data; // Returns detailed information about the movie
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

// Fetch movie credits (cast and crew)
export const getMovieCredits = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch movie credits");
        }
        const data = await response.json();
        return data; // Returns cast and crew information
    } catch (error) {
        console.error("Error fetching movie credits:", error);
        throw error;
    }
};

// Fetch similar movies
export const getSimilarMovies = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch similar movies");
        }
        const data = await response.json();
        return data.results; // Returns an array of similar movies
    } catch (error) {
        console.error("Error fetching similar movies:", error);
        throw error;
    }
};

// Fetch movie trailer
export const getMovieTrailer = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch movie trailer");
        }
        const data = await response.json();
        // Find the trailer in the results (usually the first video of type "Trailer")
        const trailer = data.results.find((video) => video.type === "Trailer");
        return trailer; // Returns the trailer object (or null if not found)
    } catch (error) {
        console.error("Error fetching movie trailer:", error);
        throw error;
    }
};