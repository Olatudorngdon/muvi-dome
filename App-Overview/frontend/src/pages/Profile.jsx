import React from 'react';
import { getCurrentUser } from '../services/auth';
import Watchlist from '../components/Watchlist';
import Rating from '../components/Rating';



const Profile = () => {
  const user = getCurrentUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">You are not logged in.</p>
      </div>
    );
  }

  const favorites = Array.isArray(user.favorites) ? user.favorites : [];
  const watchlist = Array.isArray(user.watchlist) ? user.watchlist : [];

  return (
    <div className="profile-container">
      <h1>{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>

      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie, index) => (
            <li key={movie.id || index}>{movie.title || movie}</li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}

      <h2>Watchlist</h2>
      <Watchlist watchlist={watchlist} />

      <h2>Rate Movies</h2>
      <Rating />
    </div>
  );
};

export default Profile;
