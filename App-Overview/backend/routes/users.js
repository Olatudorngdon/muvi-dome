const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Get user profile
router.get('/profile', authMiddleware, userController.getUserProfile);

// Update user profile
router.put('/profile', authMiddleware, userController.updateUserProfile);

// Get user's watchlist
router.get('/watchlist', authMiddleware, userController.getUserWatchlist);

// Add movie to watchlist
router.post('/watchlist', authMiddleware, userController.addToWatchlist);

// Remove movie from watchlist
router.delete('/watchlist/:movieId', authMiddleware, userController.removeFromWatchlist);

// Get user's favorite movies
router.get('/favorites', authMiddleware, userController.getUserFavorites);

// Add movie to favorites
router.post('/favorites', authMiddleware, userController.addToFavorites);

// Remove movie from favorites
router.delete('/favorites/:movieId', authMiddleware, userController.removeFromFavorites);

module.exports = router;