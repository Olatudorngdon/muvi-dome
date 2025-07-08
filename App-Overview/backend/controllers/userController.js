const User = require('../models/User');

// Fetch user profile
exports.getUserProfile = (req, res) => {
  res.json({ message: "User profile endpoint working!" });
};

// Update user profile
exports.updateUserProfile = (req, res) => {
  res.json({ message: "Update profile endpoint working!" });
};

// Get user watchlist
exports.getUserWatchlist = (req, res) => {
  res.json({ message: "Get watchlist endpoint working!" });
};

// Add to watchlist
exports.addToWatchlist = (req, res) => {
  res.json({ message: "Add to watchlist endpoint working!" });
};

// Remove from watchlist
exports.removeFromWatchlist = (req, res) => {
  res.json({ message: "Remove from watchlist endpoint working!" });
};

// Get user's favorite movies
exports.getUserFavorites = (req, res) => {
  res.json({ message: "Get favorites endpoint working!" });
};

// Add movie to favorites
exports.addToFavorites = (req, res) => {
  res.json({ message: "Add to favorites endpoint working!" });
};

// Remove movie from favorites
exports.removeFromFavorites = (req, res) => {
  res.json({ message: "Remove from favorites endpoint working!" });
};