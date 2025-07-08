import axios from 'axios';

const API_KEY = '05208273604941f07f573cc7e050fc43';
export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: API_KEY }
});

export const fetchTrendingMovies = async () => {
  const res = await tmdb.get('/trending/movie/week');
  return res.data.results;
};