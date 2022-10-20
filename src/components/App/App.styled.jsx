import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';

export const Container = styled.div`
	padding: 0 50px;
`
export const Nav = styled.nav`
padding: 40px 0px;
display:flex;
align-items: center;
`

export const StyledLink = styled(NavLink)`
  color:${p => `${p.theme.colors.primary}`};
  text-decoration: none;
  & + & {
	margin-left: 20px;
  }
  &.active{
	color: ${p => `${p.theme.colors.accent}`};
  }
  :hover, :focus{
	color: ${p => `${p.theme.colors.accent}`};
  }
`;

export const FilmIco = styled(GiFilmSpool)`
	color: ${p => `${p.theme.colors.accent}`};
`