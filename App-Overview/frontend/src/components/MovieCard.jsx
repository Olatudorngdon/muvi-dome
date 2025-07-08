import React from 'react';

const MovieCard = ({ movie, onAddToFavorites, onAddToWatchlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
      <div className="mt-4">
        <button
          onClick={() => onAddToFavorites(movie.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add to Favorites
        </button>
        <button
          onClick={() => onAddToWatchlist(movie.id)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;