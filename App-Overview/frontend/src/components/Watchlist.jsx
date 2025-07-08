import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/users/watchlist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWatchlist(response.data);
    };

    fetchWatchlist();
  }, []);

  const removeFromWatchlist = async (movieId) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/users/watchlist/${movieId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setWatchlist(watchlist.filter(movie => movie.id !== movieId));
  };

  return (
    <div>
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;