import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tmdb } from '../api/tmdb';
import Rating from '../components/Rating';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-details">
          <h1>{movie.title}</h1>
           <div className='details-container'> 
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <Rating movieId={movie.id} />
      {/* Additional components for reviews and other details can be added here */}
    </div>
    </div>

  );
};

export default MovieDetails;