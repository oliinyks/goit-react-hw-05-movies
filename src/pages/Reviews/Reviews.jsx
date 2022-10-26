import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  ReviewsItem,
  Author,
  Time,
  ReviewContent,
  Info,
} from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setMovieReviews(reviews.results);
      } catch (error) {
        new Error();
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(({ id, author, content, created_at }) => (
            <ReviewsItem key={id}>
              <Author>{author}</Author>
              <ReviewContent>{content}</ReviewContent>
              <Time>{new Date(created_at).toLocaleDateString()}</Time>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <Info>We don’t have any reviews for this movie</Info>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
