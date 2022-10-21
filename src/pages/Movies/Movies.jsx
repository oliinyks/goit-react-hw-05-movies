import { Outlet } from 'react-router-dom';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import {StyledLink} from './Movies.styled'
export const Movies = () => {
  return (
    <>
      <MovieDetails/>
      <StyledLink to={"cast"}> Cast </StyledLink>
      <StyledLink to={"reviews"}>Reviews </StyledLink>
      <Outlet />
    </>
  );
};

// // import Select from 'react-select'
// // import { useState } from 'react';
// // import {fetchMovie} from '../../api';
// // import { useEffect } from 'react';

// export const Movies = () => {
// 	// const[movie, setMovie] = useState([]);

// 	// useEffect(() => {
// 	// 	try {
// 	// 		axios.fetchMovie(movie)
// 	// 			} catch{};
// 	// }, [movie])

// 	// const selectedMovie = e => {
// 	// 	setMovie(e.currentTarget.value);
// 	// }

// 	return(
// 		<>
// 		{/* <Select options={movie} onChange={selectedMovie}/> */}
// 		Movie
// 		</>
// 	)
// }
