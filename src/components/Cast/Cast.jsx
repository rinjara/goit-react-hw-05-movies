import { getMovieCast } from 'api/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  console.log(movieId);

  useEffect(() => {
    // if (!movieId) {
    //   return;
    // }
    getMovieCast(Number(movieId)).then(data => {
      setCastInfo(data);
    });
  }, [movieId]);

  console.log(castInfo);

  if (!castInfo) {
    return null;
  } else {
    return (
      <ul>
        {castInfo.map(({ actor }) => (
          <li key={actor.id}>
            {!actor.profile_path ? (
              <p>No image</p>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.original_name}
                width="100"
              />
            )}

            <p>{actor.original_name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
};

// Cast.propTypes = {}

export default Cast;
