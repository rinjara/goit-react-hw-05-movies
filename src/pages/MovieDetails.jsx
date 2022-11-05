import { getMoviesById } from 'api/fetchApi';
import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMoviesById(Number(movieId)).then(response => setMovieDetails(response));
  }, [movieId]);

  return (
    <>
      <NavLink to={location.state?.from ?? '/'}>Go back</NavLink>

      {movieDetails && <MovieCard movieInfo={movieDetails} />}

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink to="reviews" state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
