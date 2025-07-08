const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Fetch trending movies
router.get('/trending', movieController.getTrendingMovies);

// Fetch movie details by ID
router.get('/:id', movieController.getMovieDetails);

// Fetch user's watchlist
router.get('/watchlist', movieController.getUserWatchlist);

// Add movie to watchlist
router.post('/watchlist', movieController.addToWatchlist);

// Remove movie from watchlist
router.delete('/watchlist/:id', movieController.removeFromWatchlist);

// Fetch user's favorite movies
router.get('/favorites', movieController.getUserFavorites);

// Add movie to favorites
router.post('/favorites', movieController.addToFavorites);

// Remove movie from favorites
router.delete('/favorites/:id', movieController.removeFromFavorites);

module.exports = router;