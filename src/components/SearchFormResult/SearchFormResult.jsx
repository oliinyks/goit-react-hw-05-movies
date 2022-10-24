import defaultImg from '../../default.png';
import { useLocation, Outlet } from 'react-router-dom';
import {
  StyledLink,
  MovieTitle,
  Items,
  Item,
  FilmImg,
} from './SearchFormResult.styled.jsx';

export const SearchFormResult = ({ movie }) => {
  const location = useLocation();

  const posterImg = poster_path => {
    if (poster_path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };

  return (
    <>
      <Items>
        {movie.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieTitle>{title}</MovieTitle>
              <FilmImg src={`${posterImg(poster_path)}`} alt={title} />
            </StyledLink>
          </Item>
        ))}
        <Outlet />
      </Items>
    </>
  );
};
