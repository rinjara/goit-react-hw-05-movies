import { getMovieByQuery } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(res => setMoviesByQuery(res));
  }, [query]);

  const handleInput = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <div>
        <input type="text" onChange={e => handleInput(e.target.value)} />
      </div>

      <ul>
        {moviesByQuery &&
          moviesByQuery.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
