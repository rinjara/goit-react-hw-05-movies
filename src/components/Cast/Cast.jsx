import { getMovieCast } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    if (movieId) {
      getMovieCast(Number(movieId)).then(data => {
        setCastInfo(data);
      });
    }
  }, [movieId]);

  return (
    <div>
      {castInfo && (
        <ul>
          {castInfo.map(actor => (
            <li key={actor.id}>
              <div>
                {actor.profile_path !== null && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={actor.original_name}
                    width="100"
                  />
                )}
              </div>

              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
