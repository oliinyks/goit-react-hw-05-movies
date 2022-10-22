import styled from '@emotion/styled';

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
  span{
	color:${p => `${p.theme.colors.primary}`};
  }
`;

export const Genres = styled.p`
	margin-bottom: 5px;
	color:${p => `${p.theme.colors.primary}`};
`

export const GenresList = styled.ul`
	margin-bottom: 20px;
	color: rgba(171, 171, 171, 1);
`

export const Overview = styled.p`
margin-bottom: 10px;
color:${p => `${p.theme.colors.primary}`};
`