import { getMoviesById } from 'api/fetchApi';
// import MovieCard from 'components/MovieCard/MovieCard';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBack,
  GoBackWrapper,
  MoreInfo,
  StyledLink,
} from './MovieDetails.styled';
import { BsArrowLeftShort } from 'react-icons/bs';

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMoviesById(Number(movieId)).then(response => setMovieDetails(response));
  }, [movieId]);

  return (
    <body>
      <section>
        <GoBackWrapper>
          <BsArrowLeftShort />
          <GoBack to={location.state?.from ?? '/'}>Go back</GoBack>
        </GoBackWrapper>

        {movieDetails && (
          <Suspense fallback={<div>Loading...</div>}>
            <MovieCard movieInfo={movieDetails} />
          </Suspense>
        )}
      </section>

      <MoreInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </StyledLink>
          </li>

          <li>
            <StyledLink
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </li>
        </ul>
      </MoreInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </body>
  );
};

export default MovieDetails;
