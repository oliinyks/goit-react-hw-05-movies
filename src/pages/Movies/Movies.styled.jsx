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
