import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  StyledLink,
  Nav,
  FilmIco,
} from './SharedLayout.styled';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Footer } from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Nav>
            <StyledLink to="/">
              <FilmIco size={50} />
            </StyledLink>
            <StyledLink to="/" end>Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Header>
        <Suspense>
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </Container>
      <Footer />
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
};
