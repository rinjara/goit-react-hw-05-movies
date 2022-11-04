import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '7bdc810ad124afd40c6daedecd43d00a';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieByQuery = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
// export default getTrendingMovies;
