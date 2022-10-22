import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Nav, FilmIco } from './AppBar.styled';

export const AppBar = () => {
	return(
		<Header>
		 <Nav>
        <StyledLink to="/">
          <FilmIco size={50} />
        </StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
		<Outlet/>
		</Header>
	)
}