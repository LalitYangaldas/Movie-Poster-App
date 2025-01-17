<h1>Movie App 🎬</h1>

Movie App is a sleek and user-friendly web application built with React that allows users to explore popular movies, search for their favorite films, and manage a personalized list of favorites. The app integrates with The Movie Database (TMDb) API to fetch movie data, including details, cast, trailers, and similar movies. It also features user authentication, allowing users to log in, register, and securely manage their favorite movies.

<h2>Features ✨</h2>

Movie Search: Search for movies by title using the TMDb API.

Favorites: Add or remove movies to/from your favorites list, which is persisted across sessions using localStorage.

User Authentication: Secure login and registration system with session persistence.

Responsive Design: Fully responsive and optimized for both desktop and mobile devices.

Dark/Light Theme: Toggle between light and dark themes for a personalized viewing experience.

<h2>Tech Stack 🛠️</h2>

Frontend: React, React Router, Axios

Styling: CSS (with custom themes and animations)

State Management: React Context API for managing favorites and authentication state

API: The Movie Database (TMDb) API for movie data

<h2>Key Components 🧩</h2>

MovieCard: Displays movie posters, titles, and release dates, with a button to add/remove favorites.

Home: Displays popular movies and a search bar to find movies by title.

Favorites: Shows the user's list of favorite movies.

MovieDetails: Provides detailed information about a selected movie, including cast, trailer, and similar movies.

AuthContext: Manages user authentication state and provides login/logout functionality.

MovieContext: Manages the user's favorite movies list and provides functions to add/remove favorites.

Authentication: Custom backend (assumed to be running on localhost:8000) for user login and registration

<h2>How It Works 🚀</h2>

Homepage: Users land on the homepage, which displays a grid of popular movies. They can search for movies using the search bar.

Movie Details: Clicking on a movie card takes the user to a detailed view of the movie, where they can watch the trailer, see the cast, and explore similar movies.

Favorites: Users can add movies to their favorites list, which is accessible from the navigation bar. Favorites are persisted across sessions.

Authentication: Users can log in or register to access personalized features like the favorites list. The app uses a custom backend for authentication.



![IMAGE_1](https://github.com/user-attachments/assets/e18b9b6f-45bd-41d0-8f06-9efe56cd2a1c)


![IMAGE_2](https://github.com/user-attachments/assets/addf5f39-3a45-4ea4-9c95-16a712a3a884)


![IMAGE_3](https://github.com/user-attachments/assets/ecba77a1-beb1-4cd7-9e9a-fa85ae214ba7)
