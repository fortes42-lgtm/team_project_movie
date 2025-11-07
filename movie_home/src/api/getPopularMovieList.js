const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovieList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  return await response.json();
};
