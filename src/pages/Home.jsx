import { getTrendingMovies } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response));
  }, []);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
