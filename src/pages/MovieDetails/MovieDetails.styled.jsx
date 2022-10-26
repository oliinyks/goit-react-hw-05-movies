import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AddInfo = styled.h3`
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  color: ${p => `${p.theme.colors.primary}`};
  & + & {
    margin-bottom: 20px;
  }
`;

export const StyledLinkBack = styled(NavLink)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  text-decoration: none;
  background: ${p => `${p.theme.colors.background}`};
  color: ${p => `${p.theme.colors.primary}`};
  border-radius: 8px;
  border: 1px solid white;
  transition: 1s, color 1s;
  &:hover {
    background: ${p => `${p.theme.colors.primary}`};
    color: ${p => `${p.theme.colors.background}`};
  }
`;

export const Box = styled.div`
  margin-bottom: 40px;
  @media (min-width: 500px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 2fr;
  }
`;
export const Img = styled.img`
  width: 100%;
`;

export const MovieInfo = styled.div`
  margin-left: 20px;
`;
export const MainTitle = styled.h1`
  margin: 20px 0 10px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  @media (min-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const Tagline = styled.p`
  text-align: center;
  font-style: italic;
  margin-bottom: 30px;
`;

export const Score = styled.p`
  margin-bottom: 20px;
  span {
    color: ${p => `${p.theme.colors.primary}`};
  }
`;

export const Genres = styled.p`
  margin-bottom: 5px;
  color: ${p => `${p.theme.colors.primary}`};
`;

export const GenresList = styled.ul`
  margin-bottom: 20px;
  color: rgba(171, 171, 171, 1);
`;

export const Overview = styled.p`
  margin-bottom: 10px;
  color: ${p => `${p.theme.colors.primary}`};
`;
