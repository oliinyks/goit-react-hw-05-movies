import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin: 30px 0 60px;
`;

export const ReviewsItem = styled.li`
  & + & {
    margin-top: 30px;
  }
`;

export const Author = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: normal;
`;
export const ReviewContent = styled.p`
  margin-bottom: 10px;
`;
export const Time = styled.p`
  font-style: italic;
`;

export const Info = styled.p`
  margin-bottom: 40px;
`;
