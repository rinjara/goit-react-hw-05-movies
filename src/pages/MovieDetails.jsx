import { getMoviesById } from 'api/fetchApi';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMoviesById(movieId).then(response => setMovieDetails(response));
  }, [movieId]);

  return (
    <>
      <NavLink to={location.state?.from ?? '/'}>Go back</NavLink>

      {movieDetails && <MovieCard movieInfo={movieDetails} />}

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>

          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

// MovieDetails.propTypes = {};

export default MovieDetails;
