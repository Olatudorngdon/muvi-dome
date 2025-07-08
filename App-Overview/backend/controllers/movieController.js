const Movie = require('../models/Movie'); // Assuming a Movie model exists
const User = require('../models/User');

// Fetch trending movies from TMDB API
const fetchTrendingMovies = async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
            params: {
                api_key: process.env.TMDB_API_KEY
            }
        });
        res.status(200).json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trending movies' });
    }
};

// Get user's watchlist
const getUserWatchlist = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in req.user
        const user = await User.findById(userId);
        res.status(200).json(user.watchlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching watchlist' });
    }
};

// Add movie to user's watchlist
const addToWatchlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;
        await User.findByIdAndUpdate(userId, { $addToSet: { watchlist: movieId } });
        res.status(200).json({ message: 'Movie added to watchlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding movie to watchlist' });
    }
};

// Remove movie from user's watchlist
const removeFromWatchlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;
        await User.findByIdAndUpdate(userId, { $pull: { watchlist: movieId } });
        res.status(200).json({ message: 'Movie removed from watchlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing movie from watchlist' });
    }
};

module.exports = {
    fetchTrendingMovies,
    getUserWatchlist,
    addToWatchlist,
    removeFromWatchlist
};