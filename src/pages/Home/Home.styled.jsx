import styled from '@emotion/styled';

export const MainTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: ${p => `${p.theme.colors.primary}`};
`;

export const Items = styled.ul`
  padding: 0;
  margin-bottom: 30px;
  list-style: none;
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
