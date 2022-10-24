import { Outlet } from 'react-router-dom';
import {Suspense} from 'react'
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';
import {StyledLink, AddInfo} from './Movies.styled'
import{SearchForm} from '../../components/SearchForm/SearchForm'

const Movies = () => {
	const { movieId } = useParams();
  return (
    <main>
	 {movieId && movieId.length > 0 ?
      <>
		<MovieDetails/>
		<AddInfo>Additional information</AddInfo>
      <StyledLink to={"cast"}> Cast </StyledLink>
      <StyledLink to={"reviews"}>Reviews </StyledLink>
     <Suspense fallback={null}>
	   <Outlet />
	  </Suspense>
		</>
		: <SearchForm/>
	 }
    </main>
  );
};

export default Movies;