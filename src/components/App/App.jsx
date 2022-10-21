import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'components/NotFound/NotFound';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Container, StyledLink, Nav, FilmIco } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/">
          <FilmIco size={50} />
        </StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </Container>
  );
};
