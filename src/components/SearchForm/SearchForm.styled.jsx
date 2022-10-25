import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
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

export const MainTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: ${p => `${p.theme.colors.primary}`};
`;

export const Form = styled.form`
  margin-bottom: 50px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 15px 10px;
  width: 50%;
  border-radius: 8px;
  border: 1px solid white;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 15px 40px;
  margin-left: 5px;
  background: ${p => `${p.theme.colors.background}`};
  color: ${p => `${p.theme.colors.primary}`};
  position: relative;
  border-radius: 8px;
  border: 1px solid white;
  transition: 1s, color 1s;
  &:hover {
    background: ${p => `${p.theme.colors.primary}`};
    color: ${p => `${p.theme.colors.background}`};
  }
`;
