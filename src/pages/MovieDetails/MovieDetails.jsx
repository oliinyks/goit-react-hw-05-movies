import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieById } from '../../api';
import defaultImg from '../../default.png';
import {
  Box,
  StyledLinkBack,
  StyledLink,
  MovieInfo,
  MainTitle,
  Img,
  Tagline,
  Score,
  Genres,
  GenresList,
  Overview,
  AddInfo
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        setSelectedMovie(movie);
      } catch (error) {
        new Error();
      }
    };

    fetchData();
  }, [movieId]);

  if (!selectedMovie) {
    return;
  }

  const movieImg = path => {
    if (path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w500/${path}`;
  };

  const { title, poster_path, vote_average, tagline, overview, genres } =
    selectedMovie;

  return (
    <>
      <StyledLinkBack to={backLinkHref}>Go back</StyledLinkBack>
      <Box>
        <div>
          <Img src={`${movieImg(poster_path)}`} alt="title" />
        </div>

        <MovieInfo>
          <MainTitle>{title}</MainTitle>
          <Tagline>{tagline}</Tagline>
          <Score>
            {' '}
            <span>User Score:</span> {`${vote_average.toFixed(1)}`}
          </Score>
          <Genres>Genres</Genres>
          <GenresList>
            {genres.map(({ id, name }) => (
              <li key={id}>- {name}</li>
            ))}
          </GenresList>
          <Overview>Overview</Overview>
          <p>{overview}</p>
        </MovieInfo>
      </Box>

		<AddInfo>Additional information</AddInfo>
          <StyledLink to='cast' state={{from: backLinkHref}}> Cast </StyledLink>
          <StyledLink to='reviews' state={{from: backLinkHref}}>Reviews </StyledLink>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;