import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieById } from '../../api';
import { useLocation, useParams } from 'react-router-dom';
import defaultImg from '../../default.png';
import {
  Box,
  StyledLink,
  MovieInfo,
  MainTitle,
  Img,
  Tagline,
  Score,
  Genres,
  GenresList,
  Overview,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <StyledLink to={backLinkHref}>Go back</StyledLink>
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
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};
