import { getMovieByQuery } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import {
  SearchFormButton,
  StyledForm,
  StyledInput,
  StyledLink,
} from './Movies.styled';

const Movies = () => {
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(res => setMoviesByQuery(res));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BiSearchAlt />
        </SearchFormButton>
        <StyledInput
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </StyledForm>

      <ul>
        {moviesByQuery &&
          moviesByQuery.map(({ id, title }) => (
            <li key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
