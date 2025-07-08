import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../api/tmdb';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <div className='container' >
      
      <h1>Welcome to Movie Recommendation App!</h1>
      <p>Discover trending movies and get personalized recommendations.</p>
      <div className='auth-buttons'>
        <Link to="/login" style={{ marginRight: 10 }}>
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
      <h2>Trending Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ margin: 10 }}>
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <div>{movie.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;