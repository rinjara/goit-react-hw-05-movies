import { getTrendingMovies } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <StyledLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
