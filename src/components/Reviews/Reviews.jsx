import { getReviewsOnMovie } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId) {
      getReviewsOnMovie(Number(movieId)).then(data => {
        setReviews(data);
      });
    }
  }, [movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return (
      <div>
        <p> We don`t have any reviews for this movie.</p>
      </div>
    );
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
