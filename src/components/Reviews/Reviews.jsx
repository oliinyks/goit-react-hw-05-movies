import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import {ReviewsList, ReviewsItem, Author, Time, ReviewContent} from './Reviews.styled'

export const Reviews = () => {
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

	 
	//  if (!movieReviews) {
	// 	return;
	//  }

	return(
		<>
		{ movieReviews !== [] ?

			(<ReviewsList>
			{movieReviews.map(({id, author, content, created_at}) => (
				<ReviewsItem key={id}>
					<Author>{author}</Author>
					<ReviewContent>{content}</ReviewContent>
					<Time>{new Date(created_at).toLocaleDateString()}</Time>
				</ReviewsItem>
			))}
			</ReviewsList>)

				: <p>Sorry, we didn't find anything.</p>
		}		
		</>
	)
}
