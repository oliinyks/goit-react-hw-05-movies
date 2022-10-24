import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieTitle = styled.h2`
font-size: 18px;
  text-align: center;
  color: ${p => `${p.theme.colors.secondary}`};
  margin-bottom: 10px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
export const Items = styled.ul`
  padding: 0;
  margin-bottom: 30px;

  display: grid;
  grid-gap: 10px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1220px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.li`
  width: 90%;
  height: 90%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

export const FilmImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transition: 0.5s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
