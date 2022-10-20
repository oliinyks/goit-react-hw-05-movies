import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "constants/GlobalStyle";
import { Home } from "components/Home/Home";
import {Movies} from "components/Movies/Movies";
import { NotFound } from "components/NotFound/NotFound";
import {Container, StyledLink, Nav,FilmIco} from "./App.styled"


export const App = () => {
  return (
    <Container>
		<Nav>
			<StyledLink to='/'><FilmIco size={50}/></StyledLink>
			<StyledLink to='/'>Home</StyledLink>
			<StyledLink to='/movies'>Movies</StyledLink>
		</Nav>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/movies" element={<Movies/>}/>
			<Route path="*" element={<NotFound/>}/>
		</Routes>
		<GlobalStyle />
	 </Container>
  );
};

