import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MovieCard.styled';

const MovieCard = ({
  movieInfo: {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  },
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <Wrapper>
      <img src={imageUrl} alt={original_title} loading="lazy" />
      <div>
        <h2>
          {original_title} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User score: {(vote_average * 10).toFixed(1)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join('  ')}</p>
      </div>
    </Wrapper>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;
