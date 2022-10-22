import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'components/NotFound/NotFound';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Footer } from '../Footer/Footer';
import {AppBar} from '../AppBar/AppBar'
import { Container } from './App.styled';

export const App = () => {
  return (
	<>
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
	  </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Container>
      <Footer />
	</>
  );
};
